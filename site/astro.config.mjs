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
      social: [],
      customCss: [
        './src/styles/tokens.css',
        './src/styles/starlight-map.css',
        './src/styles/site.css'
      ],
      sidebar: [
        {
          label: 'Guide',
          items: [
            { label: 'Overview', link: '/guide/overview/' },
            { label: 'Generated Library', autogenerate: { directory: 'generated' } }
          ]
        }
      ]
    })
  ]
});
