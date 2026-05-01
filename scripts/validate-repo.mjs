import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const knowledgeRoot = path.join(repoRoot, 'knowledge');
const mediaRoot = path.join(repoRoot, 'media');
const schema = JSON.parse(fs.readFileSync(path.join(repoRoot, 'schemas/knowledge-node.schema.json'), 'utf8'));
const allowedCategories = new Set(schema.properties.category.enum);
const allowedRelationships = new Set(schema.properties.related_nodes.items.properties.relationship.enum);
const requiredNodeFields = schema.required;
const errors = [];

function listFiles(dir, predicate = () => true) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return listFiles(entryPath, predicate);
    return predicate(entryPath) ? [entryPath] : [];
  });
}

function rel(filePath) {
  return path.relative(repoRoot, filePath);
}

function parseFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  if (!raw.startsWith('---\n')) return { data: {}, body: raw, rawFrontmatter: '' };
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return { data: {}, body: raw, rawFrontmatter: '' };
  const rawFrontmatter = raw.slice(4, end);
  const body = raw.slice(end + 4);
  const data = {};
  for (const line of rawFrontmatter.split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!match) continue;
    const [, key, value = ''] = match;
    data[key] = value.trim();
  }
  return { data, body, rawFrontmatter };
}

function frontmatterArray(rawFrontmatter, key) {
  const lines = rawFrontmatter.split('\n');
  const start = lines.findIndex((line) => line === `${key}:`);
  if (start === -1) return [];
  const values = [];
  for (let index = start + 1; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^[A-Za-z0-9_-]+:/.test(line)) break;
    const item = line.match(/^\s*-\s*(.+)$/);
    if (item) values.push(item[1].trim().replace(/^["']|["']$/g, ''));
  }
  return values;
}

function checkLocalMarkdownLinks(filePath, body) {
  const markdownLinks = [...body.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
  const htmlSources = [...body.matchAll(/\s(?:src|href)="([^"]+)"/g)].map((match) => match[1]);
  for (const target of [...markdownLinks, ...htmlSources]) {
    if (!target || target.startsWith('http') || target.startsWith('#') || target.startsWith('/') || target.startsWith('mailto:')) continue;
    const cleanTarget = target.split('#')[0].split('?')[0];
    const resolved = path.resolve(path.dirname(filePath), cleanTarget);
    if (!fs.existsSync(resolved)) {
      errors.push(`${rel(filePath)} links to missing local file: ${target}`);
    }
  }
}

for (const filePath of listFiles(knowledgeRoot, (file) => file.endsWith('.md'))) {
  const { data, body, rawFrontmatter } = parseFrontmatter(filePath);
  checkLocalMarkdownLinks(filePath, body);

  if (filePath.endsWith('_index.md') || path.basename(filePath) === 'extraction-report.md') continue;
  for (const field of requiredNodeFields) {
    if (!(field in data)) errors.push(`${rel(filePath)} missing required frontmatter field: ${field}`);
  }
  if (data.category && !allowedCategories.has(data.category)) {
    errors.push(`${rel(filePath)} uses undocumented category: ${data.category}`);
  }

  const relationships = [...rawFrontmatter.matchAll(/relationship:\s*([A-Za-z0-9_-]+)/g)].map((match) => match[1]);
  for (const relationship of relationships) {
    if (!allowedRelationships.has(relationship)) {
      errors.push(`${rel(filePath)} uses invalid relationship: ${relationship}`);
    }
  }

  for (const momentRef of frontmatterArray(rawFrontmatter, 'moment_refs')) {
    if (!/^M\d+$/.test(momentRef)) {
      errors.push(`${rel(filePath)} has non-stable moment_ref: ${momentRef}`);
    }
  }
}

for (const sourceDir of fs.readdirSync(path.join(knowledgeRoot, 'sources'), { withFileTypes: true })) {
  if (!sourceDir.isDirectory()) continue;
  const dirPath = path.join(knowledgeRoot, 'sources', sourceDir.name);
  for (const requiredFile of ['source.md', 'extraction-report.md']) {
    if (!fs.existsSync(path.join(dirPath, requiredFile))) {
      errors.push(`${rel(dirPath)} missing ${requiredFile}`);
    }
  }
}

for (const filePath of listFiles(path.join(mediaRoot, 'moments'), (file) => file.endsWith('.md'))) {
  const { data, body } = parseFrontmatter(filePath);
  checkLocalMarkdownLinks(filePath, body);
  const captured = data.captured_media_path?.replace(/^["']|["']$/g, '');
  if (captured && !fs.existsSync(path.join(path.dirname(filePath), captured))) {
    errors.push(`${rel(filePath)} captured_media_path missing: ${captured}`);
  }
}

for (const filePath of listFiles(path.join(mediaRoot, 'moments'), (file) => file.endsWith('.webm'))) {
  const notePath = filePath.replace(/\.webm$/, '.md');
  if (!fs.existsSync(notePath)) errors.push(`${rel(filePath)} missing sibling moment note`);
}

if (errors.length) {
  console.error(`Repo validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Repo validation passed.');
