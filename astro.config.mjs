// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrewariza.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404'),
      i18n: {
        defaultLocale: 'es',
        // keep these identical to the <link rel="alternate" hreflang> tags in BaseLayout
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
});
