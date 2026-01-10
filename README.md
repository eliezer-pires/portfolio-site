# 🚀 Portfolio Profissional - Eliezer Pires

> Portfolio profissional desenvolvido com Next.js 14, TypeScript e Tailwind CSS, focado em DevOps/SRE Engineering.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://pages.cloudflare.com/)

Site profissional e portfólio técnico demonstrando experiência em DevOps, SRE, Cloud Infrastructure e Automação. Design moderno inspirado em portfolios de engenheiros de software, adaptado para o contexto DevOps/SRE.

## 🚀 Tecnologias

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Deploy:** Cloudflare Pages
- **Otimizações:** Next.js Image, Metadata API, sitemap

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm

## 🛠️ Instalação Local

```bash
# Clone o repositório
git clone https://github.com/eliezer-pires/portfolio.git
cd portfolio

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Rode o projeto em modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Build de Produção

```bash
# Build otimizado
npm run build

# Rode em modo produção localmente
npm run start
```

## ☁️ Deploy no Cloudflare Pages

### Via GitHub Integration (Recomendado)

1. Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Vá em **Workers & Pages** > **Create Application** > **Pages**
3. Conecte seu repositório GitHub
4. Configure o build:

   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.vercel/output/static`
   - **Node version:** 18 ou superior

5. Clique em **Save and Deploy**

### Via Wrangler CLI

```bash
# Instale o Wrangler
npm install -g wrangler

# Faça login no Cloudflare
wrangler login

# Build do projeto
npm run build

# Deploy
npx @cloudflare/next-on-pages
wrangler pages deploy .vercel/output/static
```

### Configurações Adicionais

Adicione as seguintes variáveis de ambiente no Cloudflare Pages (se necessário):

- `NODE_VERSION`: 18

## 🎨 Personalização

### Cores e Tema

Edite o arquivo `tailwind.config.ts` para ajustar as cores do tema:

```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Conteúdo

- **Dados pessoais:** `src/app/page.tsx`
- **Projetos:** Adicione/edite no componente Projects
- **Skills:** Atualize no componente Skills
- **Experiência:** Modifique no componente Experience

## 📱 Features

- ✅ Design responsivo (mobile-first)
- ✅ Dark mode como padrão
- ✅ Performance otimizada (Lighthouse 90+)
- ✅ SEO configurado
- ✅ Acessibilidade (WCAG 2.1)
- ✅ Scroll suave entre seções
- ✅ Animações sutis
- ✅ Links para GitHub, GitLab e LinkedIn

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Lint do código
```

## 📊 Lighthouse Score Alvo

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🤝 Contribuindo

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro.

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**Eliezer Pires**

- GitHub: [@eliezer-pires](https://github.com/eliezer-pires)
- GitLab: [@eliezerpiresti](https://gitlab.com/eliezerpiresti)
- LinkedIn: [eliezer-pires-sre-devops-aws](https://linkedin.com/in/eliezer-pires-sre-devops-aws)

## 🚀 Melhorias Futuras

- [ ] Adicionar blog com MDX
- [ ] Implementar analytics
- [ ] Adicionar formulário de contato funcional
- [ ] Integração com CMS (Contentful/Sanity)
- [ ] i18n (Inglês/Português)
- [ ] RSS feed
- [ ] Certificações interativas
- [ ] Página de projetos detalhados
- [ ] Integração com API do GitHub para projetos dinâmicos
