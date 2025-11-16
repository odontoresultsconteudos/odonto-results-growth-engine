module.exports = {
  // Include all routes for pre-rendering
  include: [
    '/',
    '/captacao-leads-qualificados',
    '/vitrine-autoridade-digital',
    '/google-top-1-seo-local',
    '/agendamento-profissional',
    '/crm-inteligente',
    '/metodo-paciente-previsivel',
    '/sobre',
    '/contato'
  ],
  
  // SEO optimizations
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  minifyHtml: {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true
  },
  
  // Wait for content to load
  waitUntil: 'networkidle0',
  
  // Fix inline CSS
  inlineCss: true,
  
  // Cache control
  cacheAjaxRequests: true,
  
  // Fix URLs
  fixWebpackChunksIssue: 'CRA2',
  
  // Skip external and third-party URLs
  skipThirdPartyRequests: true,
  
  // Viewport for mobile-first
  viewport: {
    width: 1920,
    height: 1080
  }
};
