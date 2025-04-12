// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use(
          history({
            disableDotRule: true,
            htmlAcceptHeaders: ['text/html'],
            rewrites: [
              { from: /^\/api\/.*$/, to: ctx => ctx.parsedUrl.pathname },
              { from: /\/.*\.(js|css|ico|svg|png|jpg|woff|woff2|ttf|map)$/, to: ctx => ctx.parsedUrl.pathname },
            ],
          })
        );
      },
    },
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // <-- important!
      },
    },
  },
});
