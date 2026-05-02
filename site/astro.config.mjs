import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isActions = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.BASE_PATH ?? (isActions && repository ? `/${repository}` : '/');
const site = process.env.SITE_URL ?? (isActions && owner ? `https://${owner}.github.io` : undefined);
const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.resolve(siteRoot, '..');
const knowledgeRoot = path.join(repoRoot, 'knowledge');

function titleFromSlug(slug) {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return listMarkdown(entryPath);
      return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
    })
    .sort();
}

function generatedExtractLinks() {
  return listMarkdown(path.join(knowledgeRoot, 'sources'))
    .filter((filePath) => path.basename(filePath) === 'extraction-report.md')
    .map((filePath) => {
      const parsed = matter(fs.readFileSync(filePath, 'utf8'));
      const id = parsed.data.extract_id ?? path.basename(path.dirname(filePath));
      return { label: parsed.data.title ?? titleFromSlug(id), link: `/generated/extracts/${id}/` };
    });
}

function generatedPatternLinks() {
  return listMarkdown(path.join(knowledgeRoot, 'patterns'))
    .map((filePath) => {
      const parsed = matter(fs.readFileSync(filePath, 'utf8'));
      const id = parsed.data.id ?? path.basename(filePath, '.md');
      return { label: parsed.data.title ?? titleFromSlug(id), link: `/generated/nodes/${id}/` };
    });
}

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'Design Extractor',
      social: [],
      customCss: [
        './src/styles/tokens.css',
        './src/styles/starlight-map.css',
        './src/styles/site.css'
      ],
      components: {
        ThemeProvider: './src/components/LightThemeProvider.astro',
        ThemeSelect: './src/components/EmptyThemeSelect.astro'
      },
      sidebar: [
        {
          label: 'Guide',
          items: [
            { label: 'Overview', link: '/guide/overview/' },
            { label: 'Browse Home', link: '/' }
          ]
        },
        {
          label: 'Extract Reports',
          items: generatedExtractLinks()
        },
        {
          label: 'Pattern Library',
          items: [
            { label: 'All Patterns', link: '/patterns/' },
            ...generatedPatternLinks()
          ]
        }
      ]
    })
  ]
});
