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

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function firstMeaningfulParagraph(content) {
  const paragraph = content
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .find((part) => part && !part.startsWith('#') && !part.startsWith('|') && !part.startsWith('```'));
  return paragraph?.replace(/\s+/g, ' ').slice(0, 240) ?? '';
}

function formatDate(value) {
  if (!value) return '';
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).split('T')[0];
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
  await fs.writeFile(filePath, `${frontmatterString(fields)}${normalizeBody(body).trim()}\n`, 'utf8');
}

function nodeFromFile(filePath, parsed) {
  const relativePath = path.relative(repoRoot, filePath);
  const slug = path.basename(filePath, '.md');
  const id = parsed.data.id ?? slug;
  const type = parsed.data.type ?? (relativePath.includes('/patterns/') ? 'pattern' : relativePath.includes('/findings/') ? 'finding' : 'source');
  const category = parsed.data.category ?? path.basename(path.dirname(filePath));
  const title = parsed.data.title ?? titleFromSlug(id);
  const docUrl = `/generated/nodes/${id}/`;

  return {
    id,
    title,
    type,
    category,
    source: parsed.data.source ?? '',
    extractId: parsed.data.extract_id ?? '',
    confidence: parsed.data.confidence ?? 'not-specified',
    tags: parsed.data.tags ?? [],
    aliases: parsed.data.aliases ?? [],
    retrievalTerms: parsed.data.retrieval_terms ?? [],
    recipe: parsed.data.reusable_recipe ?? '',
    excerpt: parsed.data.interpretation ?? parsed.data.direct_evidence ?? firstMeaningfulParagraph(parsed.content),
    repoPath: relativePath,
    docUrl
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
  const nodes = [];
  const extracts = [];

  for (const filePath of knowledgeFiles) {
    if (filePath.endsWith('_index.md')) continue;
    const parsed = matter(await fs.readFile(filePath, 'utf8'));
    const isReport = path.basename(filePath) === 'extraction-report.md';
    if (isReport) {
      const extract = extractFromReport(filePath, parsed);
      extracts.push(extract);
      await writeMarkdown(
        path.join(generatedDocsRoot, 'extracts', `${extract.id}.md`),
        {
          title: `Extract: ${extract.title}`,
          description: extract.goal || extract.summary
        },
        parsed.content
      );
      continue;
    }

    const node = nodeFromFile(filePath, parsed);
    nodes.push(node);
    await writeMarkdown(
      path.join(generatedDocsRoot, 'nodes', `${node.id}.md`),
      {
        title: node.title,
        description: node.excerpt
      },
      parsed.content
    );
  }

  const moments = [];
  for (const filePath of momentFiles) {
    const parsed = matter(await fs.readFile(filePath, 'utf8'));
    const dir = path.dirname(filePath);
    const mediaPath = parsed.data.captured_media_path ?? '';
    const publicMediaPath = mediaPath ? `/media/${path.relative(mediaRoot, path.join(dir, mediaPath))}` : '';
    moments.push({
      id: parsed.data.id ?? path.basename(filePath, '.md'),
      title: titleFromSlug(path.basename(filePath, '.md')),
      extractId: parsed.data.extract_id ?? '',
      category: parsed.data.category ?? '',
      confidence: parsed.data.confidence ?? '',
      mediaPath,
      publicMediaPath,
      repoPath: path.relative(repoRoot, filePath),
      excerpt: firstMeaningfulParagraph(parsed.content)
    });
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

  await writeMarkdown(
    path.join(generatedDocsRoot, 'index.md'),
    {
      title: 'Generated Library',
      description: 'Generated Starlight pages from the Design Extractor knowledge graph.'
    },
    `# Generated Library

This directory is generated from repository Markdown.

## Extracts

${index.extracts.map((extract) => `- [${extract.title}](${extract.docUrl})`).join('\n')}

## Patterns

${patterns.map((pattern) => `- [${pattern.title}](${pattern.docUrl})`).join('\n')}
`
  );

  await fs.mkdir(generatedDataRoot, { recursive: true });
  await fs.writeFile(path.join(generatedDataRoot, 'knowledge.json'), `${JSON.stringify(index, null, 2)}\n`, 'utf8');
  console.log(`Generated ${extracts.length} extracts, ${nodes.length} nodes, and ${moments.length} moments.`);
}

build().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
