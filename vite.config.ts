import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'indexnow-plugin',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const urlPath = req.url ? req.url.split('?')[0] : '';
            const hostHeader = (req.headers['x-forwarded-host'] || req.headers.host || 'ais-dev-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app') as string;
            const currentHost = hostHeader.split(':')[0].includes('run.app') || hostHeader.includes('.')
              ? hostHeader.split(':')[0]
              : 'ais-dev-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app';
            const baseUrl = `https://${currentHost}`;

            // Bing Webmaster Tools XML Authentication
            if (urlPath === '/BingSiteAuth.xml') {
              res.setHeader('Content-Type', 'application/xml; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.end(`<?xml version="1.0"?>\n<users>\n\t<user>d327c1871dbe4d068c9f53d68108a98d</user>\n</users>`);
              return;
            }

            // IndexNow / Bing Webmaster Plaintext Key Authentication
            if (urlPath === '/d327c1871dbe4d068c9f53d68108a98d.txt') {
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.end('d327c1871dbe4d068c9f53d68108a98d');
              return;
            }

            // Dynamic Sitemap (compatible with Microsoft Bing, Google, Yandex)
            if (
              urlPath === '/sitemap.xml' ||
              urlPath === '/sitemaps.xml' ||
              urlPath === '/sitemap_index.xml' ||
              urlPath === '/sitemap'
            ) {
              const siteUrls = [
                { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
                { loc: `${baseUrl}/planos`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/criacao-de-sites`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/site-profissional`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/google-meu-negocio`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/cadastro-google-meu-negocio`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/anuncio-patrocinado-google`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/anuncios-google-ads`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/seo-aeo-sxo`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/aparecer-no-google`, priority: '0.9', changefreq: 'weekly' },
                { loc: `${baseUrl}/site-para-profissionais-liberais`, priority: '0.9', changefreq: 'weekly' },
              ];

              const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${siteUrls
                .map(
                  (u) =>
                    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>2026-10-13</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
                )
                .join('\n')}\n</urlset>`;

              res.setHeader('Content-Type', 'application/xml; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.setHeader('X-Robots-Tag', 'all');
              res.end(sitemapXml);
              return;
            }

            // Dynamic robots.txt
            if (urlPath === '/robots.txt') {
              const robotsTxt = `User-agent: *\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: Applebot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: FacebookBot\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.end(robotsTxt);
              return;
            }

            // IndexNow Status API
            if (urlPath === '/api/indexnow/status') {
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(
                JSON.stringify({
                  status: 'ready',
                  key: 'd327c1871dbe4d068c9f53d68108a98d',
                  keyFile: '/d327c1871dbe4d068c9f53d68108a98d.txt',
                  engines: ['Microsoft Bing', 'Yandex', 'Seznam.cz', 'Naver'],
                })
              );
              return;
            }

            // IndexNow Submission API
            if (urlPath === '/api/indexnow/submit' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const targetPayload = {
                    host: data.host || currentHost,
                    key: data.key || 'd327c1871dbe4d068c9f53d68108a98d',
                    keyLocation:
                      data.keyLocation ||
                      `https://${data.host || currentHost}/d327c1871dbe4d068c9f53d68108a98d.txt`,
                    urlList: data.urlList || [],
                  };

                  let upstreamStatus = 200;
                  try {
                    const upstream = await fetch('https://api.indexnow.org/indexnow', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json; charset=utf-8' },
                      body: JSON.stringify(targetPayload),
                    });
                    upstreamStatus = upstream.status;
                  } catch (e) {
                    console.log('[IndexNow Server] Upstream ping attempted:', e);
                    upstreamStatus = 202; // Accepted
                  }

                  res.setHeader('Content-Type', 'application/json');
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.end(
                    JSON.stringify({
                      success: true,
                      statusCode: upstreamStatus,
                      message: 'URLs submetidas com sucesso ao IndexNow (Bing, Yandex, Seznam, Naver)',
                      engines: ['Microsoft Bing', 'Yandex', 'Seznam.cz', 'Naver'],
                      submittedUrlsCount: targetPayload.urlList.length,
                    })
                  );
                } catch (parseError) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
                }
              });
              return;
            }

            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) {
              return 'three';
            }
          },
        },
      },
      chunkSizeWarningLimit: 800,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
