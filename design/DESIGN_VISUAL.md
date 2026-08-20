# Partidinha — Design Visual da Landing Page

> Design System aplicado à copy da LP
> Conceito: O Vestiário Digital
> Estilo: Glassmorphism moderno, dark mode, energia esportiva

---

## 1. Grid & Estrutura

- **Container máximo:** 1280px (max-w-7xl)
- **Padding lateral:** 16px mobile | 24px tablet | 32px desktop | 48px wide
- **Grid:** 12 colunas no desktop, 6 no tablet, 4 no mobile
- **Espaçamento vertical entre seções:** 120px desktop | 80px mobile
- **Border-radius padrão:** 24px (cards), 9999px (pills/buttons)

---

## 2. Cores Aplicadas por Seção

### Seção Hero
- **Background:** `linear-gradient(135deg, #0B1E2D 0%, #142B3D 40%, #1E4A6B 100%)`
- **Glow orbs:** 2-3 círculos desfocados `rgba(107, 179, 224, 0.15)` com blur 120px, posicionados nos cantos
- **Texto H1:** `#FFFFFF` com text-shadow sutil `0 0 80px rgba(107, 179, 224, 0.3)`
- **Texto body:** `#A8D4F0`
- **CTA primário:** Fundo `#4A90C2`, texto branco, hover `#6BB3E0` + glow
- **CTA secundário:** Borda `1px solid rgba(168, 212, 240, 0.3)`, texto `#A8D4F0`

### Seção Problema
- **Background:** `#0B1E2D` sólido
- **Card de chat bagunçado:** Glass card com fundo `rgba(30, 74, 107, 0.1)`, borda `rgba(107, 179, 224, 0.1)`
- **Mensagens de chat:** Balões em tons de azul escuro, texto branco/ciano
- **Headline:** Branco
- **Body:** `#8A9AAB`
- **Highlight ("Sua pelada merecia ser diversão"):** `#6BB3E0` em bold

### Seção Solução
- **Background:** Gradiente sutil `linear-gradient(180deg, #0B1E2D 0%, #142B3D 100%)`
- **Card do bot:** Glassmorphism forte — `backdrop-filter: blur(30px)`, borda ciano com glow
- **Mockup do app:** Com sombra projetada `0 25px 50px -12px rgba(0, 0, 0, 0.5)` e borda sutil ciano

### Seção Features Grid
- **Background:** `#0B1E2D` com padrão de mesh grid sutil (linhas em `rgba(107, 179, 224, 0.05)`)
- **Cards:** Glassmorphism — `background: rgba(30, 74, 107, 0.15)`, `backdrop-filter: blur(20px)`, `border: 1px solid rgba(107, 179, 224, 0.2)`, `border-radius: 24px`
- **Hover cards:** Scale 1.02, borda brilhando `rgba(107, 179, 224, 0.5)`, sombra ciano
- **Ícones:** `#6BB3E0` com glow sutil
- **Títulos:** Branco
- **Descrições:** `#8A9AAB`

### Seção Como Funciona
- **Background:** `#142B3D`
- **Steps:** Cards numerados (01, 02, 03, 04) com número grande em `#1E4A6B` (baixa opacidade) como elemento de fundo
- **Linha conectora:** Gradiente horizontal ciano entre os steps, com animação de "preenchimento" no scroll
- **Cards:** Fundo `rgba(11, 30, 45, 0.6)`, borda ciano

### Seção App Showcase
- **Background:** Gradiente `linear-gradient(135deg, #0B1E2D 0%, #1E4A6B 50%, #0B1E2D 100%)`
- **Phone mockups:** Frames de celular com glassmorphism, mostrando as telas do app
- **Screenshots do app:** Com borda arredondada e sombra
- **Navigation dots:** Indicadores de qual screenshot está ativa

### Seção Testimonials
- **Background:** `#0B1E2D`
- **Cards:** Glassmorphism com destaque sutil no topo (gradiente ciano)
- **Aspas decorativas:** Grande `"` em `#1E4A6B` como elemento de fundo
- **Avatar:** 48px, circular, borda ciano
- **Nome:** Branco, bold
- **Time/Cidade:** `#6BB3E0`

### Seção Pricing
- **Background:** `#142B3D`
- **Plano Free:** Card com borda sutil, fundo escuro
- **Plano Pro (destaque):** Card com borda ciano brilhante, glow sutil, badge "MAIS POPULAR" em ciano
- **Preço:** Grande, branco, com `/mês` em tamanho menor e cor `#8A9AAB`
- **Features list:** Check verde para inclusos, traço cinza para não inclusos
- **Botão Free:** Outline ciano
- **Botão Pro:** Fundo ciano, branco, com hover glow

### Seção FAQ
- **Background:** `#0B1E2D`
- **Accordion items:** Borda inferior `rgba(107, 179, 224, 0.1)`, padding generoso
- **Pergunta:** Branco, 18px, font-weight 500
- **Resposta:** `#8A9AAB`, 16px
- **Ícone +/-:** `#6BB3E0`, animação de rotação no expand

### Final CTA
- **Background:** Gradiente intenso `linear-gradient(135deg, #1E4A6B 0%, #0B1E2D 50%, #142B3D 100%)`
- **Glow central:** Radial gradient ciano no centro, forte
- **H1:** Branco, muito grande (64px desktop)
- **CTA button:** Grande, fundo ciano brilhante `#6BB3E0`, texto escuro `#0B1E2D`, com animação de pulso sutil

### Navigation
- **Background:** `rgba(11, 30, 45, 0.8)` com `backdrop-filter: blur(20px)`
- **Border bottom:** `1px solid rgba(107, 179, 224, 0.1)`
- **Logo:** Ícone + "Partidinha" em branco
- **Links:** `#A8D4F0`, hover branco
- **CTA nav:** Pill ciano, branco, compacto

### Footer
- **Background:** `#0B1E2D`
- **Border top:** `1px solid rgba(107, 179, 224, 0.1)`
- **Links:** `#8A9AAB`, hover `#A8D4F0`
- **Copyright:** `#8A9AAB`, tamanho pequeno

---

## 3. Tipografia Aplicada

### Escala Tipográfica

| Elemento | Desktop | Tablet | Mobile | Peso | Cor |
|----------|---------|--------|--------|------|-----|
| H1 Hero | 72px | 56px | 40px | 800 | Branco |
| H2 Section | 48px | 40px | 32px | 700 | Branco |
| H3 Card | 24px | 22px | 20px | 600 | Branco |
| Body Large | 20px | 18px | 16px | 400 | `#A8D4F0` / `#8A9AAB` |
| Body | 16px | 16px | 14px | 400 | `#8A9AAB` |
| Label | 14px | 14px | 12px | 500 | `#6BB3E0` |
| Button | 16px | 16px | 14px | 600 | — |
| Price | 48px | 40px | 36px | 700 | Branco |

### Font Family
- **Display & Body:** Geist Sans (já configurado no projeto)
- **Números/Stats:** Geist Mono (monospace, para contadores e estatísticas)

---

## 4. Espaçamento & Layout

### Seções (padding vertical)

| Seção | Desktop | Mobile |
|-------|---------|--------|
| Hero | 160px top, 120px bottom | 100px top, 80px bottom |
| Problema | 120px | 80px |
| Solução | 120px | 80px |
| Features | 120px | 80px |
| Como Funciona | 120px | 80px |
| Showcase | 120px | 80px |
| Testimonials | 120px | 80px |
| Pricing | 120px | 80px |
| FAQ | 120px | 80px |
| Final CTA | 160px | 100px |

### Grid de Features
- Desktop: 3 colunas, gap 24px
- Tablet: 2 colunas, gap 20px
- Mobile: 1 coluna, gap 16px

### Grid de Como Funciona
- Desktop: 4 colunas horizontais com linha conectora
- Tablet: 2x2 grid
- Mobile: 1 coluna vertical com linha conectora vertical

---

## 5. Componentes Visuais

### Glass Card (padrão)
```css
.glass-card {
  background: rgba(30, 74, 107, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(107, 179, 224, 0.2);
  border-radius: 24px;
  padding: 32px;
}
```

### Glass Card (hover)
```css
.glass-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: rgba(107, 179, 224, 0.5);
  box-shadow: 0 20px 40px -10px rgba(11, 30, 45, 0.5),
              0 0 40px rgba(107, 179, 224, 0.1);
}
```

### CTA Button (primário)
```css
.btn-primary {
  background: linear-gradient(135deg, #4A90C2, #6BB3E0);
  color: white;
  padding: 16px 32px;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px rgba(107, 179, 224, 0.4);
}
```

### CTA Button (outline)
```css
.btn-outline {
  background: transparent;
  color: #A8D4F0;
  padding: 16px 32px;
  border-radius: 9999px;
  border: 1px solid rgba(168, 212, 240, 0.3);
  font-weight: 600;
}
.btn-outline:hover {
  background: rgba(168, 212, 240, 0.1);
  border-color: rgba(168, 212, 240, 0.6);
}
```

### Glow Orb (decoração)
```css
.glow-orb {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(107, 179, 224, 0.15), transparent 70%);
  filter: blur(80px);
  pointer-events: none;
}
```

### Badge
```css
.badge {
  background: rgba(107, 179, 224, 0.15);
  color: #6BB3E0;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(107, 179, 224, 0.3);
}
```

---

## 6. Animações & Motion Design

> Diretrizes para implementação futura

### Entrada de Elementos (Scroll-triggered)
```
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger (para grids e listas)
```
stagger-delay: 0.1s por item
Máximo: 0.6s de delay total
```

### Hero Text Reveal
```
Caracter por caracter ou palavra por palavra
Duration: 0.8s total
Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

### Float Animation (mockups)
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.float {
  animation: float 4s ease-in-out infinite;
}
```

### Glow Pulse (CTAs importantes)
```css
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(107, 179, 224, 0.3); }
  50% { box-shadow: 0 0 40px rgba(107, 179, 224, 0.6); }
}
.glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

### Orbs Drift (background)
```css
@keyframes drift {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}
.orb-drift {
  animation: drift 12s ease-in-out infinite;
}
```

### Counter Animation (stats)
```
Duration: 2s
Easing: ease-out
Trigger: quando entra no viewport
```

### Accordion (FAQ)
```
Expand: height 0 → auto, 0.3s ease
Rotate icon: 0° → 45°, 0.3s ease
```

### Parallax (entre seções)
```
Subtle parallax em backgrounds decorativos
Speed: 0.5x do scroll
```

---

## 7. Mockups & Imagens

### Hero Mockup
- **Posição:** À direita do texto (desktop), abaixo (mobile)
- **Estilo:** iPhone/Android frame com glassmorphism
- **Conteúdo:** Tela do app mostrando dashboard ou mensagens do bot
- **Efeito:** Float animation, sombra projetada intensa
- **Elementos decorativos:** Bolas de futebol e apitos glassmorphism flutuando ao redor

### App Showcase
- **Estilo:** 3-4 telas do app em dispositivos com perspectiva 3D sutil
- **Transição:** Swipe/scroll horizontal com snap
- **Indicadores:** Dots ciano ativo / cinza inativo

### Testimonials
- **Avatar:** 48px, circular, borda ciano 2px
- **Card:** Glassmorphism com quote mark grande como elemento de fundo

---

## 8. Estados & Interações

### Hover States
- **Cards:** Scale 1.02, border glow, translateY(-4px)
- **Buttons:** Scale 1.02, glow intensify
- **Links:** Color shift para branco, underline sutil
- **Nav links:** Color shift, possível underline animado

### Focus States
- **Inputs:** Border ciano brilhante, glow sutil
- **Buttons:** Outline ciano, offset 2px

### Active States
- **Buttons:** Scale 0.98
- **Cards:** Scale 0.99

### Loading States
- **Buttons:** Spinner ciano dentro do botão
- **Skeleton:** Glass cards com shimmer animation ciano sutil

---

## 9. Responsividade Detalhada

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px - 1280px
- **Wide:** > 1280px

### Mobile Adaptations
- Navigation: Hamburger menu com drawer glassmorphism
- Hero: Texto centralizado, mockup abaixo, empilhado
- Features: 1 coluna, cards full-width
- Como Funciona: Vertical com linha conectora à esquerda
- Pricing: Cards empilhados, Pro primeiro
- Footer: Links empilhados, centralizados

### Touch Targets
- Mínimo: 44px x 44px
- Botões principais: 56px height

---

## 10. Assets Visuais Necessários

### Imagens
1. Logo Partidinha (SVG, transparente)
2. Mockup do app em dispositivo (PNG/SVG)
3. Screenshots do app (5 telas)
4. Avatares para testimonials (3 fotos)
5. Elementos decorativos glassmorphism:
   - Bola de futebol 3D glass
   - Apito 3D glass
   - Figuras humanas glass (referência ao ícone)

### Ícones (SVG)
- Bot/WhatsApp
- Check/confirmar
- Money/cobrança
- Shuffle/sorteio
- Stats/estatísticas
- List/lista
- Chevron down/up
- Menu hamburger
- Close/X
- Star/avaliação
- Quote marks

---

*Design visual criado em: 2026-08-04*
*Baseado na spec de design e copy da LP*
