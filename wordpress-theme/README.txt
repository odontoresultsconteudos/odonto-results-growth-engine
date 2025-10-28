# Tema WordPress - Odonto Results

## Instalação

1. Baixe todos os arquivos desta pasta
2. Crie uma pasta chamada "odonto-results" no seu servidor WordPress em: wp-content/themes/
3. Faça upload de todos os arquivos para essa pasta
4. Acesse o painel do WordPress → Aparência → Temas
5. Ative o tema "Odonto Results"

## Estrutura de Arquivos

```
odonto-results/
├── style.css          (Estilos principais do tema)
├── functions.php      (Funções e configurações do tema)
├── header.php         (Cabeçalho do site)
├── footer.php         (Rodapé do site)
├── index.php          (Template principal/homepage)
├── page.php           (Template para páginas)
├── single.php         (Template para posts individuais)
├── screenshot.png     (Captura de tela do tema - opcional)
└── assets/
    └── logo.svg       (Logo do site - você precisa fazer upload)
```

## Configuração Inicial

### 1. Logo
- Vá em Aparência → Personalizar → Identidade do Site
- Faça upload do logo da Odonto Results

### 2. Menus
O tema suporta dois menus:
- Menu Principal (aparece no cabeçalho)
- Menu Rodapé (aparece no rodapé)

Para configurar:
- Vá em Aparência → Menus
- Crie os menus e atribua às localizações corretas

### 3. Páginas Recomendadas
Crie as seguintes páginas:
- Captação
- Autoridade
- Google Top 1
- Agendamento
- CRM
- Sobre
- Contato

### 4. Cores do Tema
As cores estão definidas em CSS variables no arquivo style.css.
Para personalizar, edite as variáveis em `:root` no início do arquivo.

## Shortcodes Disponíveis

### Botão CTA
```
[cta_button text="Seu Texto" url="sua-url" style="primary"]
```

Estilos disponíveis:
- primary (verde, destaque)
- outline (contorno)

Exemplo:
```
[cta_button text="Agende Agora" url="https://form.odontoresults.com.br/dLTRVKuI" style="primary"]
```

## Personalização Avançada

### Cores
Edite as variáveis CSS em style.css, seção `:root`:
```css
:root {
  --primary: 210 100% 50%;
  --accent: 142 76% 36%;
  /* etc */
}
```

### Ícones
O tema usa Lucide Icons (carregado via CDN).
Para usar ícones, adicione no HTML:
```html
<i data-lucide="nome-do-icone"></i>
```

Lista de ícones: https://lucide.dev/icons/

## Compatibilidade

- WordPress 5.0+
- PHP 7.4+
- Todos os navegadores modernos

## Plugins Recomendados

- Contact Form 7 (para formulários)
- Yoast SEO (para otimização SEO)
- WP Super Cache (para cache e performance)

## Suporte

Para dúvidas sobre o tema, entre em contato com a equipe de desenvolvimento da Odonto Results.

## Créditos

Desenvolvido para Odonto Results
© 2025 Todos os direitos reservados
