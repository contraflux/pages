import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In dev, Vite's SPA fallback intercepts directory-style URLs (e.g.
// /software/projects/vector-fields/) before serving the nested index.html that
// lives in public/. This middleware serves those static pages so the dev server
// behaves like the built output (and GitHub Pages).
function servePublicHtmlDirs() {
  return {
    name: 'serve-public-html-dirs',
    configureServer(server) {
      const publicDir = server.config.publicDir
      server.middlewares.use((req, res, next) => {
        const pathname = decodeURIComponent((req.url || '/').split('?')[0])
        const lastSegment = pathname.split('/').filter(Boolean).pop() || ''
        if (lastSegment.includes('.')) return next() // real asset request

        const file = path.join(publicDir, pathname, 'index.html')
        if (file.startsWith(publicDir) && fs.existsSync(file)) {
          res.setHeader('Content-Type', 'text/html')
          res.end(fs.readFileSync(file))
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), servePublicHtmlDirs()],
    base: '/',
})
