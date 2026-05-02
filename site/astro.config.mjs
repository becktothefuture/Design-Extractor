import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isActions = process.env.GITHUB_ACTIONS === 'true';

// GitHub Pages serves this project under /<repo>. Local dev stays at / unless
// BASE_PATH is provided by the deploy or validation command.
const base = process.env.BASE_PATH ?? (isActions && repository ? `/${repository}` : '/');
const site = process.env.SITE_URL ?? (isActions && owner ? `https://${owner}.github.io` : undefined);

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'Pattern Library',
      favicon: '/favicon.png',
      social: [],
      // Order matters: generated tokens first, Starlight mapping second,
      // project page styles last.
      customCss: [
        './src/styles/tokens.css',
        './src/styles/starlight-map.css',
        './src/styles/site.css'
      ],
      components: {
        // The library is intentionally single-theme and monochrome.
        ThemeProvider: './src/components/LightThemeProvider.astro',
        ThemeSelect: './src/components/EmptyThemeSelect.astro',
        Footer: './src/components/SearchDock.astro'
      },
      sidebar: [
        {
          label: 'Library',
          items: [
            { label: 'Pattern Library', link: '/' },
            { label: 'All Captures', link: '/patterns/' },
            { label: 'Capture Workflow', link: '/guide/overview/' }
          ]
        }
      ]
    })
  ]
});
