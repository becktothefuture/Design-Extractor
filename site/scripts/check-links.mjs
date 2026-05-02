import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(siteRoot, 'dist');
const basePath = process.env.BASE_PATH ?? '';

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function listHtml(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listHtml(entryPath);
      return entry.isFile() && entry.name.endsWith('.html') ? [entryPath] : [];
    })
  );
  return files.flat();
}

function pagePathForUrl(url, fromFile) {
  const [pathname] = url.split('#');
  let clean = pathname.split('?')[0];
  if (!clean && url.includes('#')) return fromFile;
  if (basePath && clean.startsWith(basePath)) clean = clean.slice(basePath.length) || '/';
  if (!clean.startsWith('/')) return null;
  if (clean.endsWith('/')) return path.join(distRoot, clean, 'index.html');
  const ext = path.extname(clean);
  return ext ? path.join(distRoot, clean) : path.join(distRoot, clean, 'index.html');
}

function isIgnored(url) {
  return (
    !url ||
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    url.startsWith('data:')
  );
}

const htmlFiles = await listHtml(distRoot);
const failures = [];
const htmlCache = new Map();

async function readHtml(filePath) {
  if (!htmlCache.has(filePath)) htmlCache.set(filePath, await fs.readFile(filePath, 'utf8'));
  return htmlCache.get(filePath);
}

for (const filePath of htmlFiles) {
  const html = await readHtml(filePath);
  const matches = [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)];
  for (const [, url] of matches) {
    if (isIgnored(url)) continue;
    const target = pagePathForUrl(url, filePath);
    if (!target) continue;
    if (!(await exists(target))) {
      failures.push(`${path.relative(distRoot, filePath)} -> ${url}`);
      continue;
    }
    const [, rawAnchor] = url.split('#');
    if (rawAnchor && rawAnchor !== '_top') {
      const targetHtml = await readHtml(target);
      const anchor = decodeURIComponent(rawAnchor);
      if (!targetHtml.includes(`id="${anchor}"`)) {
        failures.push(`${path.relative(distRoot, filePath)} -> missing anchor ${url}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Dead internal links found:\n${failures.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML files. No dead internal links found.`);
}
