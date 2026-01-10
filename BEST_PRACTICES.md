# 🎯 Best Practices e Otimizações

Guia de melhores práticas para manutenção e evolução do portfolio.

## 🏗️ Arquitetura e Código

### Componentes React

#### ✅ Boas Práticas

```typescript
// Use componentes funcionais
export default function Component() {
  return <div>Content</div>;
}

// Extraia lógica complexa em hooks
const useScrollPosition = () => {
  const [position, setPosition] = useState(0);
  // ... lógica
  return position;
};

// Props com TypeScript
interface Props {
  title: string;
  isActive?: boolean;
}

export default function Component({ title, isActive = false }: Props) {
  return <h1>{title}</h1>;
}
```

#### ❌ Evite

```typescript
// Classes (use functional components)
class Component extends React.Component { }

// Inline functions em props (performance)
<button onClick={() => handleClick(id)}>

// Any como type
const data: any = getData();
```

### CSS e Tailwind

#### ✅ Boas Práticas

```typescript
// Use classes do Tailwind
<div className="flex items-center gap-4 p-6">

// Agrupe estilos relacionados
<div className="
  flex items-center justify-between
  px-6 py-4
  bg-dark-900 rounded-lg
  hover:bg-dark-800 transition-colors
">

// Responsive design mobile-first
<div className="text-sm md:text-base lg:text-lg">
```

#### ❌ Evite

```typescript
// Inline styles (dificulta manutenção)
<div style={{ padding: '24px' }}>

// Classes conflitantes
<div className="p-4 p-6">  // Qual vence?

// Magic numbers
<div className="mt-[37px]">  // Use valores do tema
```

### TypeScript

#### ✅ Boas Práticas

```typescript
// Defina interfaces claras
interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

// Use tipos união quando apropriado
type Status = "active" | "completed" | "planned";

// Evite 'any', use 'unknown' se necessário
const data: unknown = await fetchData();
```

## 🚀 Performance

### Imagens

```typescript
// ✅ Use Next.js Image (se necessário)
import Image from 'next/image';
<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  loading="lazy"
/>

// ✅ Para export estático
<img
  src="/image.jpg"
  alt="Description"
  loading="lazy"
  width="500"
  height="300"
/>
```

### Code Splitting

```typescript
// ✅ Dynamic imports para componentes pesados
const HeavyComponent = dynamic(() => import("./Heavy"), {
  loading: () => <Loading />,
  ssr: false,
});

// ✅ Lazy load seções não críticas
const Footer = lazy(() => import("./Footer"));
```

### Fonts

```typescript
// ✅ Use next/font
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
```

## 🔒 Segurança

### Links Externos

```typescript
// ✅ Sempre use rel="noopener noreferrer"
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  Link
</a>
```

### Validação de Dados

```typescript
// ✅ Valide inputs (quando adicionar formulários)
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ✅ Sanitize user input
import DOMPurify from "dompurify";
const clean = DOMPurify.sanitize(dirty);
```

## ♿ Acessibilidade

### HTML Semântico

```typescript
// ✅ Use tags semânticas
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#home">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="about-heading">
    <h2 id="about-heading">About</h2>
  </section>
</main>

<footer>
  <p>© 2026 Eliezer Pires</p>
</footer>
```

### ARIA Labels

```typescript
// ✅ Use aria-label para ícones
<button aria-label="Open menu">
  <MenuIcon />
</button>

// ✅ Use aria-labelledby para associações
<section aria-labelledby="projects-title">
  <h2 id="projects-title">Projetos</h2>
</section>

// ✅ Use aria-hidden para elementos decorativos
<span aria-hidden="true">→</span>
```

### Contraste e Cores

```typescript
// ✅ Mantenha contraste adequado (WCAG AA)
// Texto normal: 4.5:1
// Texto grande: 3:1

// ✅ Não use apenas cor para informação
<span className="text-red-500">❌ Error</span> // Ícone + cor
```

## 📊 SEO

### Metadata

```typescript
// ✅ Em layout.tsx
export const metadata: Metadata = {
  title: "Título | Site",
  description: "Descrição concisa e atrativa (150-160 chars)",
  keywords: ["palavra1", "palavra2"],
  openGraph: {
    title: "Título para redes sociais",
    description: "Descrição para compartilhamento",
    images: ["/og-image.jpg"],
  },
};
```

### URLs e Links

```typescript
// ✅ URLs descritivas
/projects/infrastructure-migration  ✓
/projects/123                       ✗

// ✅ Links internos com tags <a>
<a href="#about">Sobre</a>  ✓
<Link href="#about">        ✗ (para SPA com Next.js router)
```

### Sitemap e Robots

```xml
<!-- ✅ Sitemap atualizado -->
<url>
  <loc>https://site.com/</loc>
  <lastmod>2026-01-10</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```

## 🎨 UI/UX

### Loading States

```typescript
// ✅ Sempre mostre loading
const [loading, setLoading] = useState(true);

{
  loading ? (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  ) : (
    <div>Conteúdo</div>
  );
}
```

### Error Handling

```typescript
// ✅ Trate erros gracefully
try {
  await fetchData();
} catch (error) {
  console.error("Error:", error);
  // Mostre mensagem amigável ao usuário
  toast.error("Algo deu errado. Tente novamente.");
}
```

### Feedback Visual

```typescript
// ✅ Indique estados interativos
<button className="
  hover:scale-105
  active:scale-95
  transition-transform
">
  Clique Aqui
</button>

// ✅ Use transições suaves
<div className="transition-all duration-300">
```

## 🧪 Testes

### Checklist Manual

```
✅ Navegação funciona
✅ Links externos abrem em nova aba
✅ Responsivo mobile/tablet/desktop
✅ Dark mode funciona (se implementado)
✅ Performance Lighthouse > 90
✅ Acessibilidade > 90
✅ SEO metadata correto
✅ Formulários validam (se existirem)
✅ Imagens carregam
✅ Animações suaves
```

### Browsers para Testar

- Chrome/Edge (desktop + mobile)
- Firefox
- Safari (iOS + macOS)

## 📦 Build e Deploy

### Antes de Fazer Commit

```bash
# ✅ Sempre rode antes de commit
npm run lint
npm run build

# ✅ Verifique se não tem warnings críticos
# ✅ Teste o build localmente
npm run start
```

### Git Commits

```bash
# ✅ Mensagens descritivas
git commit -m "feat: add learning roadmap section"
git commit -m "fix: mobile navigation closing issue"
git commit -m "style: improve card hover animations"
git commit -m "docs: update deployment guide"

# ✅ Tipos comuns:
# feat: nova feature
# fix: correção de bug
# style: mudanças de estilo
# docs: documentação
# refactor: refatoração
# perf: melhorias de performance
# test: adicionar testes
```

### Environment Variables

```bash
# ✅ Para secrets, use .env.local (nunca commite)
NEXT_PUBLIC_API_KEY=xxx

# ✅ Para configs, use variáveis de ambiente no Cloudflare
```

## 🔄 Manutenção

### Atualizações de Dependências

```bash
# ✅ Verifique updates regularmente
npm outdated

# ✅ Atualize com cuidado
npm update

# ✅ Teste após atualizar
npm run build
npm run start
```

### Code Review Checklist

```
✅ Código segue padrões do projeto
✅ TypeScript types corretos
✅ Sem console.logs esquecidos
✅ Performance não afetada
✅ Acessibilidade mantida
✅ Responsivo testado
✅ Commit message descritiva
```

## 📈 Monitoring em Produção

### Métricas para Monitorar

1. **Core Web Vitals**

   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

2. **Lighthouse Scores**

   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 100

3. **User Analytics**
   - Bounce rate
   - Average session duration
   - Pages per session
   - Top landing pages

### Ferramentas

- **Google Lighthouse**: Performance audit
- **PageSpeed Insights**: Real user metrics
- **Cloudflare Analytics**: Traffic e performance
- **Google Search Console**: SEO monitoring

## 🎓 Continuous Learning

### Mantenha-se Atualizado

1. **Next.js Blog**: https://nextjs.org/blog
2. **Tailwind Blog**: https://tailwindcss.com/blog
3. **Web.dev**: https://web.dev
4. **CSS Tricks**: https://css-tricks.com

### Code Review Próprio

```
Antes de commit, pergunte-se:
- Este código está legível?
- Alguém entenderá daqui 6 meses?
- Há forma mais simples de fazer isso?
- Estou seguindo as convenções do projeto?
- Documentei o necessário?
```

---

## 🎯 Lembre-se

1. **Simplicidade > Complexidade**
2. **Performance importa**
3. **Acessibilidade não é opcional**
4. **Teste antes de fazer push**
5. **Documente decisões importantes**
6. **Itere baseado em feedback**

**"Make it work, make it right, make it fast" - Kent Beck**
