import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(siteRoot, '..');
const knowledgeRoot = path.join(repoRoot, 'knowledge');
const mediaRoot = path.join(repoRoot, 'media');
const generatedDocsRoot = path.join(siteRoot, 'src/content/docs/generated');
const generatedDataRoot = path.join(siteRoot, 'src/data/generated');
const publicMediaRoot = path.join(siteRoot, 'public/media');

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listMarkdown(dir) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listMarkdown(entryPath);
      return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
    })
  );
  return files.flat().sort();
}

async function listFiles(dir) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listFiles(entryPath);
      return entry.isFile() ? [entryPath] : [];
    })
  );
  return files.flat().sort();
}

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function clipText(value, maxLength = 360) {
  const clean = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  const clipped = clean.slice(0, maxLength);
  const boundary = Math.max(clipped.lastIndexOf('. '), clipped.lastIndexOf(' '));
  return `${clipped.slice(0, boundary > 120 ? boundary : maxLength).trim()}...`;
}

function firstMeaningfulParagraph(content) {
  const paragraph = content
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith('#') && !part.startsWith('|') && !part.startsWith('![') && !part.startsWith('```'));
  return clipText(paragraph, 360);
}

function firstSentence(value) {
  const clean = String(value ?? '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  const match = clean.match(/^(.+?[.!?])(?:\s|$)/);
  return (match?.[1] ?? clean).slice(0, 260);
}

function ensureSentence(value, fallback) {
  const sentence = firstSentence(value);
  return sentence || fallback;
}

function formatDate(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).split('T')[0];
}

function cleanTags(tags) {
  return [...new Set((Array.isArray(tags) ? tags : []).map((tag) => String(tag).trim()).filter(Boolean))]
    .filter((tag) => !['pattern', 'reusable-principles'].includes(tag))
    .slice(0, 5);
}

function cleanList(items) {
  return (Array.isArray(items) ? items : [])
    .map((item) => String(item).replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

function sourceLabelFromSource(source = '') {
  const value = String(source);
  if (!value) return 'Source not listed';
  if (/^https?:\/\//.test(value)) {
    try {
      return new URL(value).hostname.replace(/^www\./, '');
    } catch {
      return value;
    }
  }
  if (value.startsWith('/Users/')) return 'Supplied source image';
  return value;
}

function publicMediaUrl(mediaPath = '') {
  if (!mediaPath) return '';
  return `/${mediaPath.replace(/^\/+/, '')}`;
}

function previewMediaPath(mediaPath = '') {
  return mediaPath;
}

function normalizeBody(content) {
  return content
    .replace(/!\[([^\]]*)\]\((?:\.\.\/)+media\/([^)]+\.webm)\)/g, (_match, alt, mediaPath) => {
      return `<video controls preload="metadata" src="../../../media/${mediaPath}" aria-label="${alt}"></video>`;
    })
    .replace(/!\[([^\]]*)\]\((?:\.\.\/)+media\/([^)]+)\)/g, (_match, alt, mediaPath) => {
      return `<img alt="${alt}" src="../../../media/${mediaPath}" loading="lazy" />`;
    });
}

function stripTopHeading(content) {
  return content.replace(/^\s*#\s+.+\n+/, '').trim();
}

function splitSections(content) {
  return stripTopHeading(content)
    .split(/\n(?=##\s+)/)
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section) => {
      const match = section.match(/^##\s+(.+?)\n+([\s\S]*)$/);
      return match ? { title: match[1].trim(), body: match[2].trim() } : { title: '', body: section };
    });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function formatInline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseMarkdownTable(body) {
  const lines = body.split('\n').filter((line) => line.trim().startsWith('|'));
  if (lines.length < 3) return null;
  const headers = splitTableRow(lines[0]);
  const rows = lines.slice(2).map((line) => {
    const cells = splitTableRow(line);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? '']));
  });
  return { headers, rows };
}

function mediaSrcFromMoment(moment) {
  if (!moment.publicMediaPath) return '';
  return `../../../media/${moment.publicMediaPath.replace(/^\/media\//, '')}`;
}

function gifSrcFromMoment(moment) {
  if (!moment.publicGifPath) return mediaSrcFromMoment(moment);
  return `../../../media/${moment.publicGifPath.replace(/^\/media\//, '')}`;
}

function stillSrc(still) {
  return `../../../media/${still.relativePath}`;
}

function momentsForExtract(extractId, moments) {
  return moments
    .filter((moment) => moment.extractId === extractId)
    .sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
}

function momentsForNode(node, moments) {
  const refs = new Set(node.momentRefs ?? []);
  const exact = refs.size ? moments.filter((moment) => moment.extractId === node.extractId && refs.has(moment.id)) : [];
  return (exact.length ? exact : momentsForExtract(node.extractId, moments).slice(0, 1))
    .sort((a, b) => String(a.id).localeCompare(String(b.id), undefined, { numeric: true }));
}

function stillsForExtract(extractId, stills) {
  return stills.filter((still) => still.extractId === extractId);
}

function pickVisual({ moments = [], stills = [] }) {
  const moment = moments[0];
  if (moment) {
    return {
      type: 'gif',
      src: gifSrcFromMoment(moment),
      title: `${moment.title} GIF`,
      caption: moment.excerpt || `Preview of ${moment.title}.`
    };
  }

  const still = stills.find((item) => /source-reference|hero|desktop|framing|screen|warm|subject/i.test(item.name)) ?? stills[0];
  if (still) {
    return {
      type: 'image',
      src: stillSrc(still),
      title: titleFromSlug(path.basename(still.name, path.extname(still.name))),
      caption: 'Static visual reference for this capture.'
    };
  }

  return null;
}

function renderVisual(visual) {
  if (!visual) return '<div class="de-preview-empty">No visual preview is available for this capture.</div>';
  return `<figure class="de-pattern-preview">
  <img src="${visual.src}" alt="${escapeHtml(visual.title)}" loading="lazy" />
  <figcaption>${formatInline(visual.caption)}</figcaption>
</figure>`;
}

function renderFriendlyBullets(items) {
  const clean = items.filter(Boolean).slice(0, 6);
  if (!clean.length) return '';
  return `<ul class="de-friendly-list">
${clean.map((item) => `  <li>${formatInline(item)}</li>`).join('\n')}
</ul>`;
}

function reportUseCase(extract) {
  const id = extract.id;
  if (id.includes('recipe-card-hover')) return 'Use this when cards need to feel interactive, but the title and metadata must stay calm and readable.';
  if (id.includes('scroll-reveal')) return 'Use this when a page needs gentle scroll polish without making the reading experience feel animated for its own sake.';
  if (id.includes('portfolio')) return 'Use this when a portfolio should feel sensory and interactive while still offering clear ways to browse the work.';
  if (id.includes('photography')) return 'Use this when product imagery should feel lived-in, active, and credible rather than like a sterile mockup.';
  return 'Use this when you want to reuse the captured design idea in a new interface.';
}

function nodeUseCase(node) {
  const id = String(node.id ?? '');
  if (id.includes('non-flickering') || id.includes('isolated-media-layer')) return 'Use this when a card should react to hover while the title stays stable and easy to read.';
  if (id.includes('scroll-reveal') || id.includes('viewport-progress') || id.includes('soft-block')) return 'Use this when content should appear smoothly as the reader reaches it, without feeling flashy.';
  if (id.includes('lived-in-product') || id.includes('photography') || id.includes('over-shoulder')) return 'Use this when product imagery should feel like a real moment rather than a staged mockup.';
  if (id.includes('sensory-portfolio') || id.includes('webgl') || id.includes('sound') || id.includes('spring-panel')) return 'Use this when a portfolio should feel interactive and memorable without losing clear navigation.';
  const category = String(node.category ?? '');
  if (category.includes('hover')) return 'Use this when hover feedback should feel polished without making the content harder to read.';
  if (category.includes('motion')) return 'Use this when movement should guide attention without becoming the main event.';
  if (category.includes('scroll')) return 'Use this when scrolling should gently pace the reveal of content.';
  if (category.includes('photography') || category.includes('staging')) return 'Use this when imagery should show a product inside a believable moment of use.';
  if (category.includes('media')) return 'Use this when media needs to prove the product clearly while still feeling part of the experience.';
  return 'Use this when the pattern matches the tone or behavior you want to recreate.';
}

function renderMomentCards(extractId, moments) {
  const extractMoments = momentsForExtract(extractId, moments);
  if (!extractMoments.length) {
    return '<p class="de-empty-note">No captured moments are available for this extract.</p>';
  }

  return `<div class="de-moment-grid">
${extractMoments
  .map((moment) => {
    const src = gifSrcFromMoment(moment);
    const media = src.endsWith('.webm')
      ? `<video controls preload="metadata" src="${src}" aria-label="${escapeHtml(moment.title)}"></video>`
      : `<img src="${src}" alt="${escapeHtml(moment.title)}" loading="lazy" />`;
    return `<article class="de-moment-card">
  ${media}
  <div class="de-moment-card__body">
    <div class="de-meta-row">
      <code>${escapeHtml(moment.id)}</code>
      <span>${escapeHtml(moment.category || 'uncategorized')}</span>
      <span>${escapeHtml(moment.confidence || 'not-specified')}</span>
    </div>
    <h3>${escapeHtml(moment.title)}</h3>
    <p>${formatInline(moment.excerpt || 'Recorded proof boundary for this extract.')}</p>
  </div>
</article>`;
  })
  .join('\n')}
</div>`;
}

function renderFindingCards(body) {
  const table = parseMarkdownTable(body);
  if (!table) return body;

  return `<div class="de-finding-grid">
${table.rows
  .map((row) => `<article class="de-finding-card">
  <div class="de-meta-row">
    <span>${formatInline(row.Category)}</span>
    <span>${formatInline(row.Confidence)}</span>
  </div>
  <h3>${formatInline(row.Finding)}</h3>
  <p><strong>Evidence:</strong> ${formatInline(row.Evidence)}</p>
</article>`)
  .join('\n')}
</div>`;
}

function renderEvidenceCards(body) {
  const table = parseMarkdownTable(body);
  if (!table) return body;

  return `<div class="de-evidence-list">
${table.rows
  .map((row, index) => {
    const open = index < 3 ? ' open' : '';
    return `<details class="de-evidence-card"${open}>
  <summary>
    <code>${formatInline(row['Evidence Ref'])}</code>
    <span>${formatInline(row.Method)}</span>
    <strong>${formatInline(row.Confidence)}</strong>
  </summary>
  <div class="de-evidence-card__body">
    <p>${formatInline(row.Observation)}</p>
    <dl>
      <div><dt>Source</dt><dd>${formatInline(row['Source URL/Path/Text Ref'])}</dd></div>
      <div><dt>Capture</dt><dd>${formatInline(row['Capture Context'])}</dd></div>
      <div><dt>Proves</dt><dd>${formatInline(row['What It Proves'])}</dd></div>
      <div><dt>Does Not Prove</dt><dd>${formatInline(row['What It Does Not Prove'])}</dd></div>
      <div><dt>Media</dt><dd>${formatInline(row['Media Path'])}</dd></div>
    </dl>
  </div>
</details>`;
  })
  .join('\n')}
</div>`;
}

function reportFindings(content) {
  const findings = splitSections(content).find((section) => /Category Catalogue Findings/i.test(section.title));
  return findings ? parseMarkdownTable(findings.body)?.rows ?? [] : [];
}

function subjectKey(value) {
  const text = String(value ?? '').toLowerCase();
  if (/recipe|hover|card|flicker/.test(text)) return 'card-hover';
  if (/scroll|reveal|viewport|quiet/.test(text)) return 'scroll-reveal';
  if (/photo|iphone|athleats|over-shoulder|lifestyle|framing/.test(text)) return 'photography';
  if (/portfolio|pacome|webgl|audio|sensory/.test(text)) return 'portfolio';
  return 'generic';
}

function subjectLabel(key) {
  return {
    'card-hover': 'Stable card hover',
    'scroll-reveal': 'Calm scroll reveal',
    photography: 'Lived-in product photography',
    portfolio: 'Sensory portfolio browsing',
    generic: 'Reusable design pattern'
  }[key] ?? 'Reusable design pattern';
}

function subjectDesignerMoves(key) {
  const moves = {
    'card-hover': [
      'Animate the image or overlay layer first. Keep the title, price, tags, and metadata on a steady layer.',
      'Make the movement small enough that the card still feels like a card, not a different layout.',
      'Use the hover state to reveal helpful detail, not to hide the basic reading path.'
    ],
    'scroll-reveal': [
      'Let content arrive just before the reader needs it. The animation should support reading pace.',
      'Use one or two repeated reveal behaviors so the page feels composed instead of busy.',
      'Keep the final resting layout simple. The animation is only the entrance, not the design itself.'
    ],
    photography: [
      'Show the product inside a believable moment of use, with the product still readable.',
      'Use body, hand, and environment as context. They should frame the product, not compete with it.',
      'Let warm directional light and crop choices make the shot feel active and specific.'
    ],
    portfolio: [
      'Give the experience a memorable sensory layer, then keep navigation and project access obvious.',
      'Let expressive motion invite exploration without blocking someone who wants to scan quickly.',
      'Treat audio and heavy motion as enhancements, not requirements.'
    ],
    generic: [
      'Start with the visible user effect, then choose the smallest implementation that recreates it.',
      'Keep the reusable pattern separate from source-specific brand, copy, and assets.',
      'Document where the evidence ends and where implementation judgment begins.'
    ]
  };
  return moves[key] ?? moves.generic;
}

function subjectDonts(key) {
  const donts = {
    'card-hover': [
      'Do not scale the text layer with the image layer.',
      'Do not change line wrapping or metadata spacing between rest and hover states.',
      'Do not make the hover preview the only place where the card can be understood.'
    ],
    'scroll-reveal': [
      'Do not delay important content so long that scrolling feels sluggish.',
      'Do not use a different animation style for every block.',
      'Do not hide content entirely for people who prefer reduced motion.'
    ],
    photography: [
      'Do not crop the phone so tightly that the interface becomes decorative only.',
      'Do not make the body or setting look like generic stock context.',
      'Do not flatten the light so the product loses the feeling of a real moment.'
    ],
    portfolio: [
      'Do not rely on canvas, sound, or animation as the only navigation model.',
      'Do not autoplay sound without consent.',
      'Do not let expressive layers make project titles or controls hard to find.'
    ],
    generic: [
      'Do not copy source assets or proprietary implementation.',
      'Do not turn one observation into a universal rule without limits.',
      'Do not skip accessibility and reduced-motion states.'
    ]
  };
  return donts[key] ?? donts.generic;
}

function subjectBuildSpec(key) {
  const specs = {
    'card-hover': {
      pieces: [
        'Card shell with stable dimensions and a separate media wrapper.',
        'Media image/video layer that can move or scale independently.',
        'Text and metadata layer outside the transform stack.',
        'Optional overlay/details layer that fades in over the media.'
      ],
      states: [
        'Rest: media sits in its normal crop; text is fully readable.',
        'Hover/focus: media shifts or scales slightly; overlay fades in; text position remains fixed.',
        'Touch: use a tap or press feedback state instead of depending only on hover.',
        'Reduced motion: remove travel and keep a short opacity change only.'
      ],
      checks: [
        'No title, metadata, or inline text is inside a transformed parent during hover.',
        'Card width, height, and line wrapping do not change between rest and hover.',
        'Hover can be cancelled cleanly when the pointer leaves.'
      ]
    },
    'scroll-reveal': {
      pieces: [
        'Content blocks wrapped in reveal containers.',
        'IntersectionObserver or scroll-progress trigger with threshold control.',
        'Shared motion tokens for distance, duration, easing, and stagger.',
        'Fallback visible state for no-JS and reduced-motion users.'
      ],
      states: [
        'Before entry: content is slightly offset and quieter, but not layout-breaking.',
        'Entering viewport: opacity and transform resolve together.',
        'Settled: content becomes normal static page content.',
        'Reduced motion: content appears without travel or long delay.'
      ],
      checks: [
        'The reveal starts before the block is fully centered in the viewport.',
        'Repeated sections use the same rhythm unless there is a clear hierarchy reason.',
        'Keyboard and screen-reader access do not depend on scroll animation.'
      ]
    },
    photography: {
      pieces: [
        'Product or screen as the sharp, legible anchor.',
        'Human body or hand crop as the context frame.',
        'Environment lines, shadows, or furniture to create direction.',
        'Warm directional light and shallow focus to separate subject from background.'
      ],
      states: [
        'Wide crop: shows the lifestyle situation and product relationship.',
        'Product crop: proves the interface or object detail clearly.',
        'Responsive crop: keeps the product readable before preserving the full scene.',
        'Alt text: describes the product, setting, and usage moment.'
      ],
      checks: [
        'The product remains readable at the smallest display size where the image appears.',
        'The crop does not accidentally remove the context that makes the shot feel lived-in.',
        'Generated or sourced variants preserve light direction and subject hierarchy.'
      ]
    },
    portfolio: {
      pieces: [
        'Expressive visual layer for atmosphere or exploration.',
        'Plain project index or navigation layer that remains available.',
        'State model for hover, active project, loading, and idle movement.',
        'Audio controls and reduced-motion fallback when sensory effects are present.'
      ],
      states: [
        'Idle: the experience invites exploration without blocking reading.',
        'Hover/focus: a project preview becomes clearer and more responsive.',
        'Open/detail: project content takes priority over the sensory layer.',
        'Fallback: simple list browsing works without WebGL, motion, or audio.'
      ],
      checks: [
        'Project names and controls remain discoverable without guessing.',
        'Sound starts only after user intent.',
        'Performance stays smooth enough that the interaction feels intentional.'
      ]
    },
    generic: {
      pieces: [
        'A named component or shot pattern.',
        'A small set of tokens for spacing, motion, color, and radius.',
        'Observable states for rest, interaction, completion, and fallback.',
        'Evidence notes that separate verified behavior from inferred implementation.'
      ],
      states: [
        'Rest: the default look or behavior.',
        'Trigger: the user action or viewport condition that starts the pattern.',
        'Feedback: the visible response.',
        'Fallback: reduced-motion, no-JS, or small-screen behavior.'
      ],
      checks: [
        'The pattern can be implemented without copying source code or assets.',
        'Confidence limits are visible to the designer and coding agent.',
        'The reusable advice is specific enough to test.'
      ]
    }
  };
  return specs[key] ?? specs.generic;
}

function renderGuidanceCard(title, items) {
  const clean = items.filter(Boolean).slice(0, 6);
  if (!clean.length) return '';
  return `<article class="de-guidance-card">
  <h3>${escapeHtml(title)}</h3>
  <ul>
${clean.map((item) => `    <li>${formatInline(item)}</li>`).join('\n')}
  </ul>
</article>`;
}

function renderDesignerGuide({ key, findings = [], reusable = [] }) {
  const observed = findings
    .map((row) => row.Finding)
    .filter(Boolean)
    .slice(0, 4);
  const reusableClean = reusable.filter(Boolean).slice(0, 4);
  const doItems = [...subjectDesignerMoves(key), ...observed].slice(0, 6);
  const makeItems = reusableClean.length ? reusableClean : subjectDesignerMoves(key).slice(0, 3);

  return `<div class="de-guidance-grid">
${renderGuidanceCard('Design it like this', doItems)}
${renderGuidanceCard('Avoid this', subjectDonts(key))}
${renderGuidanceCard('Reusable moves', makeItems)}
</div>`;
}

function renderBuildSpec(key, extras = []) {
  const spec = subjectBuildSpec(key);
  return `<div class="de-spec-grid">
${renderGuidanceCard('Pieces to build', spec.pieces)}
${renderGuidanceCard('States to cover', spec.states)}
${renderGuidanceCard('Acceptance checks', [...spec.checks, ...extras].slice(0, 6))}
</div>`;
}

function renderReportIntro(content, extract, moments, stills) {
  const findings = reportFindings(content);
  const visual = pickVisual({
    moments: momentsForExtract(extract.id, moments),
    stills: stillsForExtract(extract.id, stills)
  });
  const key = subjectKey(`${extract.id} ${extract.title} ${extract.goal} ${extract.summary}`);
  const reusableIdeas = findings.length
    ? findings.map((row) => row.Finding)
    : [reportUseCase(extract), extract.goal];

  return `## Pattern Snapshot

<section class="de-friendly-hero">
  <div class="de-friendly-copy">
    <p class="de-kicker">${escapeHtml(subjectLabel(key))}</p>
    <h2>${escapeHtml(extract.title)}</h2>
    <p class="de-lede">${formatInline(extract.summary || extract.goal || reportUseCase(extract))}</p>
    <p>${formatInline(reportUseCase(extract))}</p>
  </div>
  ${renderVisual(visual)}
</section>

## Designer Guide

${renderDesignerGuide({ key, findings, reusable: reusableIdeas })}

## Build Spec

${renderBuildSpec(key, extract.confidence ? [`Confidence for this extraction: ${extract.confidence}.`] : [])}

## Visual Evidence

${renderMomentCards(extract.id, moments)}`;
}

function formatExtractionReport(content, extract, moments, stills) {
  const technicalSections = splitSections(content)
    .map(({ title, body }) => {
      if (!title) return normalizeBody(body);
      if (/Extract Summary|Captured Moments/i.test(title)) return '';
      if (/Category Catalogue Findings/i.test(title)) return `### Technical Pattern Breakdown\n\n${renderFindingCards(body)}`;
      if (/Evidence Table/i.test(title)) return `### ${title}\n\n${renderEvidenceCards(body)}`;
      return `### ${title}\n\n${normalizeBody(body)}`;
    })
    .filter(Boolean)
    .join('\n\n');

  return `${renderReportIntro(content, extract, moments, stills)}\n\n## Evidence Notes\n\n${technicalSections}`;
}

function renderNodeIntro(node, moments, stills) {
  const relatedMoments = momentsForNode(node, moments);
  const visual = pickVisual({
    moments: relatedMoments,
    stills: stillsForExtract(node.extractId, stills)
  });
  const appliesTo = Array.isArray(node.appliesTo) ? node.appliesTo.map((item) => `Good for ${item}.`) : [];
  const summary = node.interpretation || node.recipe || node.directEvidence || node.excerpt;
  const key = subjectKey(`${node.id} ${node.title} ${node.category} ${summary}`);

  return `## Pattern Snapshot

<section class="de-friendly-hero">
  <div class="de-friendly-copy">
    <p class="de-kicker">${escapeHtml(node.type === 'pattern' ? subjectLabel(key) : 'Captured detail')}</p>
    <h2>${escapeHtml(node.title)}</h2>
    <p class="de-lede">${formatInline(ensureSentence(summary, nodeUseCase(node)))}</p>
    <p>${formatInline(nodeUseCase(node))}</p>
  </div>
  ${renderVisual(visual)}
</section>

## Designer Guide

${renderDesignerGuide({ key, reusable: [node.recipe, ...appliesTo] })}

## Build Spec

${renderBuildSpec(key, [node.technicalClues, node.confidence ? `Confidence: ${node.confidence}. ${node.confidenceRationale || ''}` : ''].filter(Boolean))}

## Evidence Notes

<div class="de-tech-grid">
  <article>
    <h3>What proves it</h3>
    <p>${formatInline(node.directEvidence || node.excerpt)}</p>
  </article>
  <article>
    <h3>Why it works</h3>
    <p>${formatInline(node.aestheticRole || node.interpretation || node.excerpt)}</p>
  </article>
  <article>
    <h3>How to build from it</h3>
    <p>${formatInline(node.technicalClues || node.recipe || 'Implementation details are still limited for this node.')}</p>
  </article>
  <article>
    <h3>Confidence</h3>
    <p>${formatInline(`${node.confidence}. ${node.confidenceRationale || ''}`)}</p>
  </article>
</div>`;
}

function formatNodePage(node, moments, stills) {
  return renderNodeIntro(node, moments, stills);
}

function frontmatterString(fields) {
  const rows = ['---'];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === '') continue;
    rows.push(`${key}: ${JSON.stringify(value)}`);
  }
  rows.push('---', '');
  return rows.join('\n');
}

async function writeMarkdown(filePath, fields, body) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${frontmatterString(fields)}${body.trim()}\n`, 'utf8');
}

function nodeFromFile(filePath, parsed) {
  const relativePath = path.relative(repoRoot, filePath);
  const slug = path.basename(filePath, '.md');
  const id = parsed.data.id ?? slug;
  const type = parsed.data.type ?? (relativePath.includes('/patterns/') ? 'pattern' : relativePath.includes('/findings/') ? 'finding' : 'source');
  const category = parsed.data.category ?? path.basename(path.dirname(filePath));
  const title = parsed.data.title ?? titleFromSlug(id);
  const docUrl = `/generated/nodes/${id}/`;
  const publicUrl = type === 'pattern' || relativePath.includes('/patterns/') ? `/patterns/${id}/` : docUrl;
  const source = parsed.data.source ?? '';
  const sourceUrl = parsed.data.source_url ?? (/^https?:\/\//.test(source) ? source : '');
  const sourceLabel = parsed.data.source_label ?? sourceLabelFromSource(source);
  const summary = parsed.data.summary ?? parsed.data.interpretation ?? parsed.data.direct_evidence ?? firstMeaningfulParagraph(parsed.content);
  const primaryMedia = parsed.data.primary_media ?? '';
  const previewMedia = parsed.data.preview_media ?? previewMediaPath(primaryMedia);
  const previewPoster = parsed.data.preview_poster ?? (/\.gif$/i.test(previewMedia) ? '' : previewMedia);

  return {
    id,
    title,
    type,
    category,
    source,
    sourceUrl,
    sourceLabel,
    captureStatus: parsed.data.capture_status ?? 'captured',
    primaryMedia,
    primaryMediaUrl: publicMediaUrl(primaryMedia),
    previewMedia,
    previewMediaUrl: publicMediaUrl(previewMedia),
    previewPoster,
    previewPosterUrl: publicMediaUrl(previewPoster),
    summary,
    extractId: parsed.data.extract_id ?? '',
    createdAt: formatDate(parsed.data.created_at),
    updatedAt: formatDate(parsed.data.updated_at),
    confidence: parsed.data.confidence ?? 'not-specified',
    tags: cleanTags(parsed.data.tags ?? []),
    aliases: parsed.data.aliases ?? [],
    retrievalTerms: parsed.data.retrieval_terms ?? [],
    appliesTo: parsed.data.applies_to ?? [],
    evidenceRefs: parsed.data.evidence_refs ?? [],
    momentRefs: parsed.data.moment_refs ?? [],
    directEvidence: parsed.data.direct_evidence ?? '',
    interpretation: parsed.data.interpretation ?? '',
    aestheticRole: parsed.data.aesthetic_role ?? '',
    technicalClues: parsed.data.technical_clues ?? '',
    publicDescription: parsed.data.public_description ?? '',
    publicWhy: parsed.data.public_why ?? '',
    recipeSteps: cleanList(parsed.data.recipe_steps ?? []),
    llmPrompt: parsed.data.llm_prompt ?? parsed.data.image_prompt ?? '',
    codeRecipe: parsed.data.code_recipe ?? '',
    confidenceRationale: parsed.data.confidence_rationale ?? '',
    recipe: parsed.data.reusable_recipe ?? '',
    excerpt: summary,
    repoPath: relativePath,
    docUrl,
    publicUrl
  };
}

function extractFromReport(filePath, parsed) {
  const extractId = parsed.data.extract_id ?? path.basename(path.dirname(filePath));
  const title = titleFromSlug(extractId);
  const summary = firstMeaningfulParagraph(parsed.content).replace(/^Athleats uses|^The inspected/, (match) => match);
  return {
    id: extractId,
    title,
    source: parsed.data.source ?? '',
    sourceType: parsed.data.source_type ?? 'source',
    date: formatDate(parsed.data.created_at),
    confidence: parsed.data.confidence ?? 'not-specified',
    goal: parsed.data.goal ?? '',
    summary,
    repoPath: path.relative(repoRoot, filePath),
    docUrl: `/generated/extracts/${extractId}/`
  };
}

async function build() {
  await fs.rm(generatedDocsRoot, { recursive: true, force: true });
  await fs.rm(generatedDataRoot, { recursive: true, force: true });
  await fs.rm(publicMediaRoot, { recursive: true, force: true });
  await fs.mkdir(generatedDocsRoot, { recursive: true });
  await fs.mkdir(generatedDataRoot, { recursive: true });

  if (await exists(mediaRoot)) {
    await fs.cp(mediaRoot, publicMediaRoot, { recursive: true });
  }

  const knowledgeFiles = await listMarkdown(knowledgeRoot);
  const momentFiles = await listMarkdown(path.join(mediaRoot, 'moments'));
  const stillFiles = (await listFiles(path.join(mediaRoot, 'stills'))).filter((filePath) => /\.(png|jpe?g|gif)$/i.test(filePath));
  const stills = stillFiles.map((filePath) => {
    const relativePath = path.relative(mediaRoot, filePath);
    const parts = relativePath.split(path.sep);
    return {
      extractId: parts[1] ? parts[1] : '',
      relativePath,
      name: path.basename(filePath),
      repoPath: path.relative(repoRoot, filePath)
    };
  });
  const nodes = [];
  const extracts = [];
  const moments = [];

  for (const filePath of momentFiles) {
    const parsed = matter(await fs.readFile(filePath, 'utf8'));
    const dir = path.dirname(filePath);
    const mediaPath = parsed.data.captured_media_path ?? '';
    const publicMediaPath = mediaPath ? `/media/${path.relative(mediaRoot, path.join(dir, mediaPath))}` : '';
    const gifPath = mediaPath.endsWith('.webm') ? mediaPath.replace(/\.webm$/, '.gif') : '';
    const publicGifPath = gifPath && (await exists(path.join(dir, gifPath)))
      ? `/media/${path.relative(mediaRoot, path.join(dir, gifPath))}`
      : '';
    moments.push({
      id: parsed.data.id ?? path.basename(filePath, '.md'),
      title: titleFromSlug(path.basename(filePath, '.md')),
      extractId: parsed.data.extract_id ?? '',
      category: parsed.data.category ?? '',
      confidence: parsed.data.confidence ?? '',
      mediaPath,
      publicMediaPath,
      publicGifPath,
      repoPath: path.relative(repoRoot, filePath),
      excerpt: firstMeaningfulParagraph(parsed.content)
    });
  }

  for (const filePath of knowledgeFiles) {
    if (filePath.endsWith('_index.md')) continue;
    const parsed = matter(await fs.readFile(filePath, 'utf8'));
    const isReport = path.basename(filePath) === 'extraction-report.md';
    if (isReport) {
      const extract = extractFromReport(filePath, parsed);
      extracts.push(extract);
      continue;
    }

    const node = nodeFromFile(filePath, parsed);
    nodes.push(node);
  }

  const patterns = nodes.filter((node) => node.type === 'pattern' || node.repoPath.includes('/patterns/'));
  const findings = nodes.filter((node) => node.type === 'finding' || node.repoPath.includes('/findings/'));
  const recipes = nodes.filter((node) => node.recipe);
  const categories = [...new Set(nodes.map((node) => node.category))]
    .sort()
    .map((name) => {
      const grouped = nodes.filter((node) => node.category === name);
      return { name, count: grouped.length, nodes: grouped };
    });

  const index = {
    generatedAt: new Date().toISOString(),
    extracts: extracts.sort((a, b) => String(b.date).localeCompare(String(a.date))),
    nodes,
    patterns,
    findings,
    moments,
    recipes,
    categories
  };

  await fs.mkdir(generatedDataRoot, { recursive: true });
  await fs.writeFile(path.join(generatedDataRoot, 'knowledge.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  console.log(`Generated ${extracts.length} extracts, ${nodes.length} nodes, and ${moments.length} moments.`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
