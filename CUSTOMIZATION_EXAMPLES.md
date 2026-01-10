# 🎨 Guia de Customização

Exemplos práticos de como personalizar seu portfolio.

## 🌈 Mudando Cores

### Esquema de Cores Completo

Edite `tailwind.config.ts`:

```typescript
// Exemplo: Tema Verde/Tecnológico
colors: {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // Cor principal
    600: '#16a34a',  // Hover
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
}

// Exemplo: Tema Roxo/Premium
colors: {
  primary: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
  },
}

// Exemplo: Tema Laranja/Energia
colors: {
  primary: {
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
  },
}
```

## ✏️ Alterando Tipografia

### Fontes Diferentes

Em `src/app/layout.tsx`:

```typescript
// Exemplo: Roboto
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// Exemplo: Poppins (moderna)
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Exemplo: Monserrat (elegante)
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
```

### Combinação de Fontes

```typescript
// Heading + Body
import { Sora, Inter } from 'next/font/google';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

// Em tailwind.config.ts
fontFamily: {
  heading: ['var(--font-heading)', 'sans-serif'],
  body: ['var(--font-body)', 'sans-serif'],
},

// Uso:
<h1 className="font-heading">Título</h1>
<p className="font-body">Texto</p>
```

## 🎭 Adicionando Animações

### Animações Personalizadas

Em `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'slide-in': 'slideIn 0.6s ease-out',
  'bounce-slow': 'bounce 3s infinite',  // Novo
  'pulse-slow': 'pulse 4s infinite',    // Novo
  'spin-slow': 'spin 3s linear infinite', // Novo
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // Adicione nova animação
  wiggle: {
    '0%, 100%': { transform: 'rotate(-3deg)' },
    '50%': { transform: 'rotate(3deg)' },
  },
}

// Uso:
<div className="animate-wiggle">Conteúdo</div>
```

### Hover Effects Avançados

```typescript
// Glow effect
<div className="
  hover:shadow-lg
  hover:shadow-primary-500/50
  transition-shadow duration-300
">

// Scale + Rotate
<div className="
  hover:scale-110
  hover:rotate-1
  transition-all duration-300
">

// 3D Transform
<div className="
  hover:-translate-y-2
  hover:shadow-2xl
  transition-all duration-300
">
```

## 📐 Layouts Alternativos

### Hero Variações

#### Variação 1: Centralizado com Background Pattern

```typescript
<section
  className="
  min-h-screen flex items-center justify-center
  bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950
  relative overflow-hidden
"
>
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-grid-pattern"></div>
  </div>

  <div className="relative z-10">{/* Conteúdo hero */}</div>
</section>
```

#### Variação 2: Split Screen

```typescript
<section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
  {/* Lado esquerdo - Texto */}
  <div className="flex items-center justify-center p-12">
    <div>
      <h1>Eliezer Pires</h1>
      <p>DevOps Engineer</p>
    </div>
  </div>

  {/* Lado direito - Visual */}
  <div className="bg-gradient-to-br from-primary-600 to-primary-900">
    {/* Imagem ou ilustração */}
  </div>
</section>
```

### Cards Variações

#### Card com Ícone Grande

```typescript
<div className="card group">
  <div className="flex flex-col items-center text-center">
    <div
      className="
      w-20 h-20 rounded-full 
      bg-primary-600/20 
      flex items-center justify-center
      mb-4 group-hover:scale-110 transition-transform
    "
    >
      <Icon size={40} className="text-primary-500" />
    </div>
    <h3>Título</h3>
    <p>Descrição</p>
  </div>
</div>
```

#### Card com Border Gradient

```typescript
<div
  className="
  relative p-6 rounded-lg
  bg-dark-900
  before:absolute before:inset-0 
  before:rounded-lg before:p-[2px]
  before:bg-gradient-to-r before:from-primary-500 before:to-primary-700
  before:-z-10
"
>
  {/* Conteúdo */}
</div>
```

## 🎨 Seções Personalizadas

### Adicionar Seção "Testemunhos"

Crie `src/components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: "João Silva",
    role: "CTO @ Empresa",
    text: "Excelente profissional DevOps...",
    avatar: "/avatar1.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-dark-900">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="heading-gradient">Testemunhos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="card">
              <p className="text-gray-300 mb-4">"{item.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Adicionar Seção "Timeline"

```typescript
const timeline = [
  { year: "2024", title: "DevOps Engineer", company: "Empresa X" },
  { year: "2020", title: "Network Analyst", company: "FAB" },
];

export default function Timeline() {
  return (
    <section className="section">
      <div className="container-custom max-w-4xl">
        <h2 className="section-title text-center heading-gradient">
          Trajetória
        </h2>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-6">
              {/* Linha vertical */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary-500"></div>
                {i !== timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-dark-800 mt-2"></div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex-1 pb-8">
                <span className="text-primary-500 font-semibold">
                  {item.year}
                </span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-gray-400">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 🌓 Modo Claro/Escuro Toggle

### Implementação Básica

Crie `src/components/ThemeToggle.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);

  const toggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-dark-800 hover:bg-primary-600"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
```

Adicione cores do tema claro em `globals.css`:

```css
:root.light {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --text-secondary: #475569;
}

.light {
  @apply bg-white text-gray-900;
}

.light .bg-dark-950 {
  @apply bg-gray-50;
}

.light .bg-dark-900 {
  @apply bg-white;
}
```

## 📊 Widgets Interativos

### GitHub Stats Card

```typescript
export default function GitHubStats() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">GitHub Stats</h3>
      <img
        src="https://github-readme-stats.vercel.app/api?username=eliezer-pires&theme=dark&show_icons=true"
        alt="GitHub Stats"
        className="w-full rounded-lg"
      />
    </div>
  );
}
```

### Skills Progress Bars

```typescript
const skills = [
  { name: "Docker", level: 85 },
  { name: "Kubernetes", level: 70 },
  { name: "AWS", level: 65 },
];

export default function SkillsBars() {
  return (
    <div className="space-y-4">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-2">
            <span>{skill.name}</span>
            <span className="text-primary-500">{skill.level}%</span>
          </div>
          <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
```

## 🔔 Notificações/Toasts

```typescript
"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function Toast() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      className="
      fixed bottom-4 right-4 z-50
      bg-primary-600 text-white
      px-6 py-4 rounded-lg shadow-lg
      flex items-center gap-4
      animate-slide-in
    "
    >
      <p>🎉 Portfolio atualizado com sucesso!</p>
      <button
        onClick={() => setShow(false)}
        className="hover:bg-primary-700 p-1 rounded"
      >
        <X size={16} />
      </button>
    </div>
  );
}
```

## 🎯 Call-to-Actions

### CTA Banner

```typescript
export default function CTABanner() {
  return (
    <div
      className="
      bg-gradient-to-r from-primary-600 to-primary-800
      py-12 px-6 rounded-2xl
      text-center
    "
    >
      <h3 className="text-2xl font-bold mb-4">
        Procurando um DevOps Engineer?
      </h3>
      <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
        Estou disponível para novas oportunidades e projetos desafiadores.
      </p>
      <div className="flex gap-4 justify-center">
        <a
          href="#contact"
          className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
        >
          Entre em Contato
        </a>
        <a
          href="/resume.pdf"
          className="btn-secondary border-white text-white hover:bg-white/10"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
```

## 📱 Mobile Menu Aprimorado

```typescript
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Menu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Sidebar */}
      <div
        className={`
        fixed top-0 right-0 h-full w-64 
        bg-dark-900 z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-6">
          <button onClick={() => setIsOpen(false)} className="mb-8">
            <X size={24} />
          </button>

          <nav className="space-y-4">{/* Links */}</nav>
        </div>
      </div>
    </>
  );
}
```

---

## 💡 Dicas Finais

1. **Teste sempre após customizar**
2. **Mantenha consistência visual**
3. **Não exagere em animações**
4. **Priorize performance**
5. **Mobile-first sempre**

**Divirta-se customizando! 🎨**
