# IndexNow - Configuração

IndexNow está configurado no site para notificar automaticamente motores de busca (Bing, Yandex, etc.) sobre atualizações de conteúdo.

## Arquivos Configurados

- **Chave API**: `12a08b7a0b904a8c9d89ae68517fc343`
- **Arquivo de verificação**: `/public/12a08b7a0b904a8c9d89ae68517fc343.txt`
- **Helper functions**: `/src/lib/indexnow.ts`

## Como Usar

### No Console do Navegador (Teste Rápido)

Abra o console do navegador (F12) e digite:

```javascript
// Submeter a página home
await window.indexNow.submitUrl('https://odontoresults.com.br/');

// Submeter múltiplas URLs
await window.indexNow.submitUrls([
  'https://odontoresults.com.br/',
  'https://odontoresults.com.br/sobre'
]);

// Submeter todas as páginas principais
await window.indexNow.submitAll();
```

### 1. Submeter uma URL única

```typescript
import { submitUrlToIndexNow } from '@/lib/indexnow';

// Quando você publica ou atualiza uma página
await submitUrlToIndexNow('https://odontoresults.com.br/nova-pagina');
```

### 2. Submeter múltiplas URLs

```typescript
import { submitToIndexNow } from '@/lib/indexnow';

const urls = [
  'https://odontoresults.com.br/pagina1',
  'https://odontoresults.com.br/pagina2',
  'https://odontoresults.com.br/pagina3',
];

await submitToIndexNow(urls);
```

### 3. Submeter todas as páginas principais

```typescript
import { submitAllPagesToIndexNow } from '@/lib/indexnow';

// Útil após grandes atualizações no site
await submitAllPagesToIndexNow();
```

## Verificação

Para verificar se o IndexNow está configurado corretamente:

1. Acesse: https://odontoresults.com.br/12a08b7a0b904a8c9d89ae68517fc343.txt
2. Deve exibir apenas: `12a08b7a0b904a8c9d89ae68517fc343`

## Ferramentas de Verificação

- **Bing Webmaster Tools**: https://www.bing.com/webmasters
- **IndexNow Checker**: https://www.indexnow.org/

## Quando Usar

Use IndexNow para notificar motores de busca quando:
- Publicar novo conteúdo
- Atualizar páginas existentes
- Remover páginas (usar com status code apropriado)
- Fazer mudanças significativas no site

## Suporte

IndexNow é suportado por:
- Bing
- Yandex
- Seznam.cz
- Naver
- E outros motores de busca
