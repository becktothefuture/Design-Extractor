import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const patternsRoot = path.join(repoRoot, 'knowledge', 'patterns');
const mediaRoots = [path.join(repoRoot, 'media', 'moments'), path.join(repoRoot, 'media', 'stills')];
const errors = [];
const captureStatuses = new Set(['verified', 'captured', 'partial', 'needs-recapture']);
const bannedTags = new Set(['pattern', 'patterns', 'reusable-principles']);

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMarkdown(entryPath);
    return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
  });
}

function rel(filePath) {
  return path.relative(repoRoot, filePath);
}

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  if (!raw.startsWith('---\n')) return { data: {}, rawFrontmatter: '', body: raw };
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return { data: {}, rawFrontmatter: '', body: raw };
  const rawFrontmatter = raw.slice(4, end);
  const body = raw.slice(end + 4);
  const lines = rawFrontmatter.split('\n');
  const data = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const match = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!match) continue;
    const [, key, value = ''] = match;
    if (value.trim()) {
      data[key] = value.trim().replace(/^["']|["']$/g, '');
      continue;
    }

    const values = [];
    for (let itemIndex = index + 1; itemIndex < lines.length; itemIndex += 1) {
      const itemLine = lines[itemIndex];
      if (/^[A-Za-z0-9_-]+:/.test(itemLine)) break;
      const item = itemLine.match(/^\s*-\s*(.+)$/);
      if (item) values.push(item[1].trim().replace(/^["']|["']$/g, ''));
    }
    if (values.length) data[key] = values;
  }

  return { data, rawFrontmatter, body };
}

for (const filePath of listMarkdown(patternsRoot)) {
  const { data, rawFrontmatter, body } = parseFrontmatter(filePath);
  const file = rel(filePath);
  const required = ['id', 'title', 'type', 'status', 'source_label', 'capture_status', 'primary_media', 'summary', 'tags'];

  for (const field of required) {
    if (!data[field] || (Array.isArray(data[field]) && !data[field].length)) {
      errors.push(`${file} missing public pattern field: ${field}`);
    }
  }

  if (data.type !== 'pattern') errors.push(`${file} must have type: pattern`);
  if (data.capture_status && !captureStatuses.has(data.capture_status)) {
    errors.push(`${file} has invalid capture_status: ${data.capture_status}`);
  }

  const tags = Array.isArray(data.tags) ? data.tags : [];
  if (tags.length > 5) errors.push(`${file} has ${tags.length} tags; public patterns allow at most 5`);
  if (!tags.length) errors.push(`${file} needs at least one searchable tag`);
  for (const tag of tags) {
    if (bannedTags.has(String(tag).toLowerCase())) errors.push(`${file} uses internal or unhelpful public tag: ${tag}`);
  }

  const primaryMedia = String(data.primary_media ?? '');
  if (primaryMedia && !primaryMedia.startsWith('media/')) {
    errors.push(`${file} primary_media must live under media/: ${primaryMedia}`);
  }
  if (/\.svg(?:$|\?)/i.test(primaryMedia)) errors.push(`${file} uses SVG public media: ${primaryMedia}`);
  if (primaryMedia && !/\.(gif|webm|png|jpe?g)$/i.test(primaryMedia)) {
    errors.push(`${file} primary_media must be gif, webm, png, jpg, or jpeg: ${primaryMedia}`);
  }
  if (primaryMedia && !fs.existsSync(path.join(repoRoot, primaryMedia))) {
    errors.push(`${file} primary_media does not exist: ${primaryMedia}`);
  }

  if (/\.svg(?:\)|\]|"|'|\s|$)/i.test(`${rawFrontmatter}\n${body}`)) {
    errors.push(`${file} references SVG media; public patterns should use captured raster or video evidence`);
  }

  for (const field of ['source', 'source_url', 'source_label']) {
    if (String(data[field] ?? '').includes('/Users/')) {
      errors.push(`${file} exposes a local filesystem path in ${field}`);
    }
  }
}

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(entryPath);
    return entry.isFile() ? [entryPath] : [];
  });
}

for (const mediaRoot of mediaRoots) {
  for (const filePath of listFiles(mediaRoot)) {
    if (/\.svg$/i.test(filePath)) errors.push(`${rel(filePath)} is SVG media under capture evidence; use raster/video captures instead`);
  }
}

if (errors.length) {
  console.error(`Pattern library validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Pattern library validation passed.');
