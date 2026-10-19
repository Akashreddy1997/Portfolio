import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { site } from './src/data/profile.js';

// Adds Google / link-preview tags, analytics and the sitemap based on the "site" settings in profile.js.
function portfolioSettings() {
  const url = site.url.replace(/\/$/, '');

  return {
    name: 'portfolio-settings',

    transformIndexHtml(html, ctx) {
      const tags = [];

      if (url) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${url}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${url}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${url}/og-image.png` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${url}/og-image.png` }, injectTo: 'head' }
        );
      }

      if (site.googleSiteVerification) {
        tags.push({
          tag: 'meta',
          attrs: { name: 'google-site-verification', content: site.googleSiteVerification },
          injectTo: 'head',
        });
      }

      // Analytics only in the published build, so your own testing isn't counted.
      const isDevServer = Boolean(ctx.server);
      if (!isDevServer && site.goatcounter) {
        tags.push({
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://gc.zgo.at/count.js',
            'data-goatcounter': `https://${site.goatcounter}.goatcounter.com/count`,
          },
          injectTo: 'body',
        });
      }
      if (!isDevServer && site.cloudflareAnalyticsToken) {
        tags.push({
          tag: 'script',
          attrs: {
            defer: true,
            src: 'https://static.cloudflareinsights.com/beacon.min.js',
            'data-cf-beacon': JSON.stringify({ token: site.cloudflareAnalyticsToken }),
          },
          injectTo: 'body',
        });
      }

      return tags;
    },

    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /'];
      if (url) robots.push(`Sitemap: ${url}/sitemap.xml`);
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots.join('\n') + '\n' });

      if (url) {
        const today = new Date().toISOString().slice(0, 10);
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source:
            '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
            `  <url><loc>${url}/</loc><lastmod>${today}</lastmod></url>\n` +
            '</urlset>\n',
        });
      }
    },
  };
}

// The site can live at a sub-path (e.g. https://user.github.io/Portfolio/).
// The published build uses the path from site.url; local development always runs at "/".
function basePath() {
  if (!site.url) return '/';
  const path = new URL(site.url).pathname.replace(/\/$/, '');
  return `${path}/`;
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? basePath() : '/',
  plugins: [react(), portfolioSettings()],
}));
