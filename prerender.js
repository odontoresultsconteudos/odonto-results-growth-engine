import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Verify files exist before trying to read
if (!fs.existsSync(toAbsolute('dist/index.html'))) {
  console.error('❌ dist/index.html not found! Run build:client first.');
  process.exit(1);
}

if (!fs.existsSync(toAbsolute('dist/server/entry-server.js'))) {
  console.error('❌ dist/server/entry-server.js not found! Run build:server first.');
  process.exit(1);
}

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')

// Use try/catch for imports
let render;
try {
  const module = await import('./dist/server/entry-server.js');
  render = module.render;
} catch (error) {
  console.error('❌ Error importing entry-server.js:', error);
  process.exit(1);
}

// Define routes explicitly to match App.server.tsx
const routesToPrerender = [
  '/',
  '/captacao',
  '/autoridade',
  '/google-top-1',
  '/agendamento',
  '/crm',
  '/sobre',
  '/contato'
]

console.log('🚀 Starting pre-rendering of', routesToPrerender.length, 'routes...');

;(async () => {
  for (const url of routesToPrerender) {
    try {
      console.log('📄 Rendering:', url);
      const appHtml = render(url);
      const html = template.replace('<!--app-html-->', appHtml)

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      const fullPath = toAbsolute(filePath)
      const dir = path.dirname(fullPath)
      
      // Ensure directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      
      fs.writeFileSync(fullPath, html)
      console.log('✅ Pre-rendered:', filePath)
    } catch (error) {
      console.error('❌ Error rendering', url, ':', error);
      process.exit(1);
    }
  }
  console.log('🎉 Pre-rendering completed successfully!');
})()
