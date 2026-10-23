# CONTEXT.md — portfolio-site

## Objetivo do projeto

Portfolio pessoal de Eliézer Pires, posicionando senioridade em
**DevOps/SRE e governança de infraestrutura em missão crítica**, com
expansão em andamento para incluir **desenvolvimento de sistemas**.

Stack: Next.js 15 (App Router, static export), TypeScript, Tailwind CSS.
Single-page (`/`), todo conteúdo hardcoded em arrays no topo de cada
componente em `src/components/`. Deploy: Cloudflare Pages via GitHub.

## O que já foi feito

- Site completo em produção (Cloudflare Pages), branch de produção = `main`.
- Branch `feat/sre-positioning-content` (5 commits, **ainda não mergeada**):
  reposicionamento de conteúdo para senioridade SRE, refino de About e
  Skills, seção Learning com formação acadêmica/IA/livros/princípios.
- 2026-10-23: card de métrica em About alterado de `11+ / Anos em
  Infraestrutura` para `12 / Anos em Tecnologia` — rótulo mais amplo,
  escolhido para acomodar a futura inclusão dos projetos de
  desenvolvimento de sistemas no currículo.

## O que está em desenvolvimento

- Ajustes de conteúdo na branch `feat/sre-positioning-content`.

## Problemas atuais

- **Produção desatualizada.** O site exibe `8+` anos. Esse valor nunca
  existiu em `main` (que tem `7+`); ele só existiu nos commits `bd8f17a`
  e `e13f84b` da branch de feature. Conclusão: a URL observada é um
  **preview deploy do Cloudflare Pages da branch**, travado numa build
  anterior ao `7381a62` (ou cache de navegador).
  → Resolve-se mergeando `feat/sre-positioning-content` em `main`.
- Projeto não tem testes automatizados.

## Próximos passos

1. Validar o card `12 / Anos em Tecnologia` em `npm run dev`.
2. Commitar e mergear `feat/sre-positioning-content` em `main` para
   corrigir a produção.
3. Adicionar os projetos de desenvolvimento de sistemas (seção Projects
   e/ou Experience), que é a motivação do rótulo "Tecnologia".
