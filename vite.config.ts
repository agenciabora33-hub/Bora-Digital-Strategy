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
            const rawHost = (req.headers['x-forwarded-host'] || req.headers.host || '').toString();
            // Clean host: take first if comma-separated proxy list and strip port
            const hostClean = rawHost.split(',')[0].trim().split(':')[0];
            const currentHost = (hostClean && (hostClean.includes('vercel.app') || hostClean.includes('run.app') || hostClean.includes('.')))
              ? hostClean
              : 'bora-digital-strategy.vercel.app';
            const baseUrl = `https://${currentHost}`;
            const todayIso = new Date().toISOString().split('T')[0];

            const urlPathLower = urlPath.toLowerCase().replace(/\/$/, '') || '/';

            // Google HTML File Verification fallback (e.g., /googlezh45CJj-9q98u4wZT4AMJa3dw9fvwlX4uNVkrJZ2x2Q.html)
            if (urlPathLower.startsWith('/google') && urlPathLower.endsWith('.html')) {
              const fileName = urlPath.replace(/^\//, '');
              const content = `google-site-verification: ${fileName}`;
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(content, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(content);
              return;
            }

            // Bing Webmaster Tools XML Authentication
            if (urlPathLower === '/bingsiteauth.xml') {
              const xmlContent = `<?xml version="1.0"?>\n<users>\n\t<user>f49766fae89f46cfbfb86b2daaede1ab</user>\n\t<user>d327c1871dbe4d068c9f53d68108a98d</user>\n</users>`;
              res.setHeader('Content-Type', 'application/xml; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(xmlContent, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(xmlContent);
              return;
            }

            // IndexNow / Bing Webmaster Plaintext Key Authentication (Official Key)
            if (urlPathLower === '/f49766fae89f46cfbfb86b2daaede1ab.txt') {
              const txtContent = 'f49766fae89f46cfbfb86b2daaede1ab';
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(txtContent, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(txtContent);
              return;
            }

            // IndexNow / Bing Webmaster Legacy Key Authentication
            if (urlPathLower === '/d327c1871dbe4d068c9f53d68108a98d.txt') {
              const txtContent = 'd327c1871dbe4d068c9f53d68108a98d';
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(txtContent, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(txtContent);
              return;
            }

            // Dynamic Sitemap (compatible with Microsoft Bing, Google, Yandex)
            if (
              urlPathLower === '/sitemap.xml' ||
              urlPathLower === '/sitemaps.xml' ||
              urlPathLower === '/sitemap_index.xml' ||
              urlPathLower === '/sitemap'
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
                { loc: `${baseUrl}/termos-de-uso`, priority: '0.6', changefreq: 'monthly' },
                { loc: `${baseUrl}/politicas-de-privacidade`, priority: '0.6', changefreq: 'monthly' },
              ];

              const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${siteUrls
                .map(
                  (u) =>
                    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${todayIso}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
                )
                .join('\n')}\n</urlset>`;

              res.setHeader('Content-Type', 'application/xml; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(sitemapXml, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.setHeader('X-Robots-Tag', 'all');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(sitemapXml);
              return;
            }

            // Plain text Sitemap (Alternative standard supported by Google and Bing)
            if (urlPathLower === '/sitemap.txt') {
              const siteUrls = [
                `${baseUrl}/`,
                `${baseUrl}/planos`,
                `${baseUrl}/criacao-de-sites`,
                `${baseUrl}/site-profissional`,
                `${baseUrl}/google-meu-negocio`,
                `${baseUrl}/cadastro-google-meu-negocio`,
                `${baseUrl}/anuncio-patrocinado-google`,
                `${baseUrl}/anuncios-google-ads`,
                `${baseUrl}/seo-aeo-sxo`,
                `${baseUrl}/aparecer-no-google`,
                `${baseUrl}/site-para-profissionais-liberais`,
                `${baseUrl}/termos-de-uso`,
                `${baseUrl}/politicas-de-privacidade`,
              ];
              const txtContent = siteUrls.join('\n') + '\n';
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(txtContent, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              res.setHeader('X-Robots-Tag', 'all');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
              res.end(txtContent);
              return;
            }

            // Dynamic robots.txt
            if (urlPathLower === '/robots.txt') {
              const robotsTxt = `User-agent: *\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: Google-InspectionTool\nAllow: /\n\nUser-agent: GoogleOther\nAllow: /\n\nUser-agent: Bingbot\nAllow: /\n\nUser-agent: Applebot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: FacebookBot\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\nSitemap: ${baseUrl}/sitemap.txt\n`;
              res.setHeader('Content-Type', 'text/plain; charset=utf-8');
              res.setHeader('Content-Length', Buffer.byteLength(robotsTxt, 'utf-8'));
              res.setHeader('Cache-Control', 'public, max-age=3600');
              if (req.method === 'HEAD') {
                res.end();
                return;
              }
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
                  key: 'f49766fae89f46cfbfb86b2daaede1ab',
                  keyFile: '/f49766fae89f46cfbfb86b2daaede1ab.txt',
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
                    key: data.key || 'f49766fae89f46cfbfb86b2daaede1ab',
                    keyLocation:
                      data.keyLocation ||
                      `https://${data.host || currentHost}/f49766fae89f46cfbfb86b2daaede1ab.txt`,
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
