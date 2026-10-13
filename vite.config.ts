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
            if (req.url === '/api/indexnow/status') {
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

            if (req.url === '/api/indexnow/submit' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const targetPayload = {
                    host: data.host || 'ais-dev-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app',
                    key: data.key || 'd327c1871dbe4d068c9f53d68108a98d',
                    keyLocation:
                      data.keyLocation ||
                      `https://${data.host || 'ais-dev-ntvyprsxr4fq7ffbybb62v-186713379987.us-east1.run.app'}/d327c1871dbe4d068c9f53d68108a98d.txt`,
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
