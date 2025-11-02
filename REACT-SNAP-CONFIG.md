# Configuração React-Snap para Pre-rendering

Para melhorar o crawling pelos robôs de busca, você precisa adicionar manualmente as seguintes configurações ao `package.json`:

## 1. Adicionar script postbuild

No objeto `"scripts"`, adicione:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "postbuild": "react-snap",
  "build:dev": "vite build --mode development",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 2. Adicionar configuração reactSnap

No final do arquivo `package.json`, antes do último `}`, adicione:

```json
,
"reactSnap": {
  "inlineCss": true,
  "minifyHtml": {
    "collapseWhitespace": true,
    "removeComments": true
  },
  "skipThirdPartyRequests": true,
  "cacheAjaxRequests": false,
  "puppeteerArgs": [
    "--no-sandbox",
    "--disable-setuid-sandbox"
  ],
  "include": [
    "/",
    "/captacao",
    "/autoridade",
    "/google-top-1",
    "/agendamento",
    "/crm",
    "/sobre",
    "/contato"
  ]
}
```

## Como aplicar

1. Abra o arquivo `package.json` no editor
2. Adicione a linha `"postbuild": "react-snap",` dentro do objeto `scripts`
3. Adicione o objeto `reactSnap` completo no final do arquivo, antes do último `}`
4. Salve o arquivo

## O que isso faz

- **postbuild**: Executa o react-snap automaticamente após cada build
- **include**: Lista todas as rotas que devem ser pre-renderizadas
- **inlineCss**: Inline dos estilos críticos para melhor performance
- **minifyHtml**: Minifica o HTML gerado
- **skipThirdPartyRequests**: Ignora requisições de terceiros durante o crawling
- **puppeteerArgs**: Argumentos necessários para rodar em ambientes de CI/CD

## Após configurar

1. Execute `npm run build` para gerar o build com pre-rendering
2. Teste localmente com `npm run preview`
3. Publique no Lovable
4. Teste com `curl https://seu-site.lovable.app` - você deve ver o HTML completo, não apenas `<div id="root"></div>`

## Melhorias Implementadas

✅ **Structured Data completo** em todas as páginas:
- Index: Organization, LocalBusiness e FAQ schemas
- Captação: Service, Breadcrumb e FAQ schemas  
- Autoridade: Service, Breadcrumb e FAQ schemas
- Google Top 1: Service, Breadcrumb e FAQ schemas
- Agendamento: Service, Breadcrumb e HowTo schemas
- CRM: SoftwareApplication, Breadcrumb e FAQ schemas
- Sobre: AboutPage, Organization e Team schemas
- Contato: ContactPage e Breadcrumb schemas

✅ **Meta tags otimizadas** com:
- Títulos únicos e otimizados (< 60 caracteres)
- Descrições únicas (< 160 caracteres)
- Keywords relevantes para cada página
- Canonical URLs corretas
- Open Graph e Twitter Cards

✅ **Pre-rendering configurado** para todas as rotas principais

## Teste de SEO

Após implementar, teste com:
- Google Search Console - Inspeção de URL
- https://search.google.com/test/rich-results - Validar structured data
- View Source no navegador - Verificar HTML renderizado
