# Guia de Deploy no Cloudflare Pages

Este guia detalha o processo completo de deploy do seu portfolio no Cloudflare Pages.

## 📋 Pré-requisitos

- Conta no [Cloudflare](https://dash.cloudflare.com/)
- Conta no [GitHub](https://github.com/)
- Repositório do projeto no GitHub

## 🚀 Método 1: Deploy via GitHub Integration (Recomendado)

### Passo 1: Preparar o Repositório

1. Faça push do código para o GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio DevOps/SRE"
git branch -M main
git remote add origin https://github.com/eliezer-pires/portfolio.git
git push -u origin main
```

### Passo 2: Configurar no Cloudflare Pages

1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Vá para **Workers & Pages**
3. Clique em **Create Application**
4. Selecione a aba **Pages**
5. Clique em **Connect to Git**

### Passo 3: Conectar o Repositório

1. Autorize o Cloudflare a acessar seu GitHub
2. Selecione o repositório `portfolio`
3. Clique em **Begin Setup**

### Passo 4: Configurar o Build

Configure as seguintes opções:

- **Project name**: `eliezer-pires-portfolio` (ou o nome que preferir)
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (deixe vazio)

### Passo 5: Configurar Variáveis de Ambiente

Adicione as seguintes variáveis (se necessário):

- `NODE_VERSION`: `18`

### Passo 6: Deploy

1. Clique em **Save and Deploy**
2. Aguarde o build (geralmente 2-5 minutos)
3. Após conclusão, você terá um URL: `https://eliezer-pires-portfolio.pages.dev`

## 🔧 Método 2: Deploy via Wrangler CLI

### Passo 1: Instalar Wrangler

```bash
npm install -g wrangler
```

### Passo 2: Login no Cloudflare

```bash
wrangler login
```

Isso abrirá seu navegador para autenticação.

### Passo 3: Build do Projeto

```bash
npm install
npm run build
```

### Passo 4: Deploy

```bash
wrangler pages deploy out --project-name=eliezer-pires-portfolio
```

Na primeira vez, você será perguntado sobre criar o projeto. Confirme com `yes`.

## 🎨 Configurações Adicionais

### Custom Domain

1. No Cloudflare Pages, vá em **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite seu domínio (ex: `eliezerpires.dev`)
4. Siga as instruções para configurar os DNS

### Environment Variables

Para adicionar variáveis de ambiente:

1. Vá em **Settings** > **Environment variables**
2. Adicione as variáveis necessárias
3. Separe por ambiente (Production/Preview)

### Build Settings

Para alterar configurações de build:

1. Vá em **Settings** > **Builds & deployments**
2. Edite **Build configuration**
3. Salve as alterações

## 🔄 Atualizações Automáticas

Com a integração GitHub, cada push para a branch `main` dispara automaticamente:

1. Novo build
2. Deploy em produção
3. Invalidação de cache

### Branches de Preview

Pushes para outras branches criam deployments de preview:

- URL temporária: `https://<branch-name>.<project>.pages.dev`
- Útil para testar mudanças antes do merge

## 🐛 Troubleshooting

### Build Falha

Se o build falhar, verifique:

1. **Logs de build** no Cloudflare Dashboard
2. Versão do Node (deve ser 18+)
3. Dependências no `package.json`

```bash
# Testar build localmente
npm run build
```

### Página em Branco

Se a página aparecer em branco:

1. Verifique o `next.config.js`:

```javascript
output: 'export',
images: { unoptimized: true },
```

2. Confirme o output directory: `out`

### Erros de Roteamento

Para Next.js com export estático:

- Use `trailingSlash: true` no `next.config.js`
- Links internos devem usar `<a>` tags com href começando com `#`

## 📊 Monitoramento

### Analytics

Ative o Cloudflare Web Analytics:

1. Vá em **Analytics** no projeto
2. Clique em **Enable Web Analytics**
3. Adicione o snippet (já incluído automaticamente)

### Performance

Verifique métricas:

- Page load time
- Time to First Byte (TTFB)
- Core Web Vitals

## 🔐 Segurança

### Headers de Segurança

Adicione em `next.config.js`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ];
},
```

## 💰 Custos

Cloudflare Pages Free Tier inclui:

- ✅ Builds ilimitados
- ✅ 500 builds por mês
- ✅ Bandwidth ilimitado
- ✅ SSL gratuito
- ✅ DDoS protection

## 📝 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview do build localmente
npm run start

# Deploy via CLI
npm run deploy

# Preview local com Wrangler
npm run preview
```

## 🎯 Próximos Passos

1. Configure custom domain
2. Ative Web Analytics
3. Configure redirects (se necessário)
4. Adicione favicons e meta tags
5. Teste performance com Lighthouse

## 📚 Recursos

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

---

🚀 **Seu portfolio está pronto para o mundo!**
