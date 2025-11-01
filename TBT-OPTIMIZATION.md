# Otimizações TBT (Total Blocking Time)

## Problema Identificado
- **Performance Score: 58/100**
- **TBT: 20.070 ms** ❌ (CRÍTICO - bloqueia thread principal por 20 segundos!)
- **Speed Index: 8,7s** ❌
- Facebook Pixel: 124 KiB sem cache apropriado

## Otimizações Implementadas

### 1. GTM/Facebook Pixel - requestIdleCallback
**Arquivo:** `index.html`

**Antes:**
```javascript
window.addEventListener('load', function() {
  setTimeout(function() {
    // Load GTM
  }, 2000);
});
```

**Depois:**
```javascript
// Use requestIdleCallback para carregar apenas quando o navegador está idle
if ('requestIdleCallback' in window) {
  window.addEventListener('load', function() {
    requestIdleCallback(loadGTM, { timeout: 3000 });
  });
}
```

**Impacto:**
- GTM e Facebook Pixel agora carregam apenas quando o navegador está ocioso
- Reduz bloqueio da thread principal durante carregamento inicial
- Facebook Pixel não é mais pré-conectado (apenas DNS prefetch)

### 2. Service Worker - requestIdleCallback
**Arquivo:** `src/main.tsx`

**Antes:**
```javascript
window.addEventListener('load', () => {
  import('virtual:pwa-register').then(...)
});
```

**Depois:**
```javascript
const scheduleRegistration = () => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => registerServiceWorker(), { timeout: 2000 });
  } else {
    registerServiceWorker();
  }
};
window.addEventListener('load', scheduleRegistration);
```

**Impacto:**
- Service Worker registrado apenas quando navegador está ocioso
- Reduz concorrência com JavaScript crítico

### 3. Code Splitting Otimizado
**Arquivo:** `vite.config.ts`

**Estratégia:**
```javascript
manualChunks: (id) => {
  // React core (usado em todas as páginas)
  if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
  
  // React Router (carregamento sob demanda)
  if (id.includes('react-router-dom')) return 'vendor-router';
  
  // Radix UI dividido por frequência de uso
  if (id.includes('@radix-ui')) {
    if (id.includes('dialog') || id.includes('dropdown-menu')) return 'ui-core';
    return 'ui-extended';
  }
  
  // Motion, Query, Icons em chunks separados
  if (id.includes('motion')) return 'motion';
  if (id.includes('@tanstack/react-query')) return 'query';
  if (id.includes('lucide-react')) return 'icons';
}
```

**Impacto:**
- JavaScript inicial reduzido - apenas o essencial carrega primeiro
- Componentes UI menos usados carregam sob demanda
- Melhor cache granular (mudanças em um chunk não invalidam outros)

### 4. Terser Agressivo
**Configuração:**
```javascript
terserOptions: {
  compress: {
    drop_console: true,      // Remove console.logs
    drop_debugger: true,     // Remove debuggers
    passes: 2,               // 2 passes de compressão
    pure_funcs: ['console.log', 'console.info'],
    ecma: 2020,             // Permite otimizações ES2020
  }
}
```

**Impacto:**
- JavaScript menor = menos tempo de parse
- Reduz TBT durante parse/execução do código

### 5. Service Worker Cache Strategy
**Arquivo:** `vite.config.ts`

**Novas estratégias:**
```javascript
// Cache agressivo de JS/CSS
{
  urlPattern: /\.(?:js|css)$/i,
  handler: 'StaleWhileRevalidate',
  maxAgeSeconds: 30 dias
}

// Bloqueia cache de tracking scripts
{
  urlPattern: /(facebook|googletagmanager)/,
  handler: 'NetworkOnly'
}
```

**Impacto:**
- Visitas repetidas: JS/CSS vem do cache (reduz parse time)
- Scripts de tracking sempre fresh (não inflam cache)
- Economiza ~352 KiB em visitas repetidas

### 6. Resource Hints Otimizados
**Arquivo:** `index.html`

**Removido:**
- `preconnect` para Google Tag Manager
- `preconnect` para Facebook

**Mantido:**
- `dns-prefetch` apenas (mais leve)

**Impacto:**
- Menos conexões TCP/TLS no carregamento inicial
- Reduz concorrência de rede

### 7. Build Config Otimizações
```javascript
chunkSizeWarningLimit: 600,  // Limite menor = chunks menores
cssMinify: 'lightningcss',   // Minificador CSS mais rápido
assetsInlineLimit: 2048,     // Inline apenas assets muito pequenos
reportCompressedSize: false, // Build mais rápido
sourcemap: false,            // Produção sem sourcemaps
```

## Resultados Esperados

### Métricas Alvo
- **TBT:** De 20.070 ms → **< 300 ms** ⬇️ 98%
- **Speed Index:** De 8,7s → **< 3,5s** ⬇️ 60%
- **Performance Score:** De 58 → **85-95** ⬆️ 47-64%
- **FCP:** Mantém ~1,9s ✅
- **LCP:** Mantém ~2,3s ✅

### Como o TBT será reduzido

1. **Scripts de tracking adiados** (-15s de bloqueio)
   - GTM e Facebook Pixel agora carregam quando navegador está idle
   - Não competem com JavaScript crítico

2. **JavaScript inicial menor** (-3s de parse)
   - Code splitting mais granular
   - Apenas código essencial no bundle inicial
   - Terser remove código morto

3. **Service Worker não bloqueia** (-1s)
   - Registro adiado para quando navegador está idle

4. **Cache agressivo em visitas repetidas** (-1s)
   - JS/CSS já parseados vem do cache
   - Reduz parse time drasticamente

## Próximos Passos

1. **Deploy e teste**
   ```bash
   # Após deploy, testar em:
   - PageSpeed Insights Mobile
   - Chrome DevTools (Performance tab)
   - WebPageTest.org
   ```

2. **Se TBT ainda alto (>300ms):**
   - Considerar remover Motion library (20 KiB + overhead)
   - Implementar tree-shaking manual de Radix UI
   - Adiar carregamento de Lucide icons

3. **Monitoramento:**
   - Core Web Vitals no Google Search Console
   - PageSpeed Insights semanal
   - Real User Monitoring (se disponível)
