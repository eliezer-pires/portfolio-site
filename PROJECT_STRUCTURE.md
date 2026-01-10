# Estrutura do Projeto

```
portfolio/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal com metadata SEO
│   │   ├── page.tsx            # Página principal (importa componentes)
│   │   └── globals.css         # Estilos globais + Tailwind
│   │
│   └── components/
│       ├── Navigation.tsx      # Menu de navegação fixo
│       ├── Hero.tsx           # Seção hero com apresentação
│       ├── About.tsx          # Sobre mim
│       ├── Skills.tsx         # Habilidades técnicas
│       ├── Projects.tsx       # Projetos do GitHub
│       ├── Experience.tsx     # Experiência profissional
│       ├── Learning.tsx       # Aprendizado e roadmap
│       ├── Contact.tsx        # Contato e redes sociais
│       └── Footer.tsx         # Rodapé
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── .gitignore
├── .eslintrc.json
├── next.config.js              # Configuração Next.js para export estático
├── postcss.config.js
├── tailwind.config.ts          # Configuração Tailwind + cores personalizadas
├── tsconfig.json
├── package.json
├── README.md                   # Documentação principal
├── DEPLOY_GUIDE.md            # Guia de deploy Cloudflare Pages
└── PROJECT_STRUCTURE.md       # Este arquivo
```

## 📁 Detalhamento dos Diretórios

### `/src/app/`

Contém a estrutura principal do Next.js 14 (App Router):

- **layout.tsx**: Layout raiz com metadata para SEO
- **page.tsx**: Página principal que importa todos os componentes
- **globals.css**: Estilos globais e classes utilitárias do Tailwind

### `/src/components/`

Componentes React modulares e reutilizáveis:

- Cada componente é uma seção da página
- Estilo inline com Tailwind CSS
- TypeScript para type safety

### `/public/`

Arquivos estáticos:

- Favicon
- Robots.txt para SEO
- Sitemap.xml

## 🎨 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (ex: `Hero.tsx`)
- **Arquivos de config**: kebab-case (ex: `next.config.js`)
- **Diretórios**: camelCase (ex: `components/`)

### Estrutura de Componentes

```typescript
import { Icon } from "lucide-react";

export default function ComponentName() {
  return (
    <section id="section-id" className="section bg-dark-950">
      <div className="container-custom">{/* Conteúdo */}</div>
    </section>
  );
}
```

### Classes CSS Customizadas

Definidas em `globals.css`:

- `.section`: Padding padrão de seções
- `.container-custom`: Container centralizado
- `.card`: Card estilizado
- `.btn-primary`: Botão primário
- `.heading-gradient`: Gradiente de texto

## 🔧 Arquivos de Configuração

### next.config.js

- **output: 'export'**: Gera site estático
- **images.unoptimized**: Necessário para export estático
- **trailingSlash: true**: Melhor compatibilidade com Cloudflare Pages

### tailwind.config.ts

- Cores customizadas (primary, dark)
- Animações personalizadas
- Font families
- Extensões de tema

### tsconfig.json

- Configuração TypeScript strict
- Paths aliases (@/\*)
- Target ES Next

## 📦 Dependências Principais

### Produção

- **next**: Framework React
- **react**: Library UI
- **react-dom**: React para DOM
- **lucide-react**: Ícones SVG

### Desenvolvimento

- **typescript**: Type safety
- **tailwindcss**: Framework CSS
- **@cloudflare/next-on-pages**: Adapter para Cloudflare
- **wrangler**: CLI Cloudflare

## 🎯 Fluxo de Desenvolvimento

1. Desenvolver localmente: `npm run dev`
2. Testar build: `npm run build`
3. Preview local: `npm run start`
4. Deploy: Push para GitHub ou `npm run deploy`

## 🚀 Build Process

```
npm run build
    ↓
Next.js compila TypeScript
    ↓
Tailwind gera CSS otimizado
    ↓
Next.js gera static export
    ↓
Output em /out
    ↓
Deploy para Cloudflare Pages
```

## 📱 Responsividade

Breakpoints Tailwind usados:

- **sm**: 640px (mobile)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

## 🎨 Paleta de Cores

### Primary (Azul)

- 400: Highlights
- 500: Padrão
- 600: Hover/Active
- 700: Pressed

### Dark (Background)

- 800: Cards
- 900: Sections alternadas
- 950: Background principal

## ✅ Checklist de Produção

- [ ] SEO metadata configurado
- [ ] Favicons adicionados
- [ ] Robots.txt configurado
- [ ] Sitemap.xml gerado
- [ ] Performance otimizada (Lighthouse 90+)
- [ ] Responsivo testado
- [ ] Links verificados
- [ ] Acessibilidade (ARIA labels)
- [ ] Analytics configurado (opcional)
- [ ] Custom domain configurado (opcional)
