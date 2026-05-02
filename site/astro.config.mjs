import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isActions = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.BASE_PATH ?? (isActions && repository ? `/${repository}` : '/');
const site = process.env.SITE_URL ?? (isActions && owner ? `https://${owner}.github.io` : undefined);

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'Design Extractor',
      favicon: '/favicon.png',
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
          label: 'Library',
          items: [
            { label: 'Pattern Library', link: '/' },
            { label: 'All Patterns', link: '/patterns/' },
            { label: 'Capture Workflow', link: '/guide/overview/' }
          ]
        }
      ]
    })
  ]
});
