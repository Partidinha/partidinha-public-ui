# Partidinha — Design Visual da Landing Page v2

> Design System aplicado à copy da LP — Versão 2: Light mode elegante
> Conceito: O Vestiário Digital
> Estilo: Clean, moderno, whitespace generoso, sem "cara de AI"
> Regra 60-30-10 aplicada

---

## 1. Filosofia Visual

Após feedback, o design foi refeito para evitar o visual "AI generated" comum em landings pages. A nova direção:

- **Fundo branco dominante** — limpo, respirável, profissional
- **Tipografia ousada** — headlines grandes e confidentes
- **Azul usado com critério** — apenas em CTAs, badges e pequenos destaques
- **Whitespace generoso** — layout arejado tipo sites premiados (Awwwards)
- **Sem glassmorphism** — cards sólidos com sombras sutis
- **Sem gradientes de fundo** — cores planas, elegantes
- **Animações sutis** — fade-up no scroll, hovers suaves

---

## 2. Regra 60-30-10

| Porcentagem | Cor | Uso |
|---|---|---|
| **60% — Dominante** | Branco / Off-white `#FFFFFF` `#F8FAFC` | Fundo de todas as seções |
| **30% — Secundária** | Cinza escuro `#0F172A` `#1E293B` `#64748B` | Texto, headings, ícones |
| **10% — Destaque** | Azul Partidinha `#2563EB` `#1E4A6B` | CTAs, badges, links, acentos |

### Paleta Completa

| Token | Hex | Uso |
|-------|-----|-----|
| `--white` | `#FFFFFF` | Fundo principal |
| `--off-white` | `#F8FAFC` | Fundo alternado de seções |
| `--slate-50` | `#F1F5F9` | Cards sutis, backgrounds secundários |
| `--slate-100` | `#E2E8F0` | Bordas leves, separadores |
| `--slate-400` | `#94A3B8` | Texto terciário, captions |
| `--slate-500` | `#64748B` | Texto secundário |
| `--slate-700` | `#334155` | Texto de corpo |
| `--slate-800` | `#1E293B` | Subheadings |
| `--slate-900` | `#0F172A` | Headings principais |
| `--accent-blue` | `#2563EB` | CTAs primários, links, badges |
| `--accent-dark` | `#1E4A6B` | Hover states, elementos de marca |
| `--accent-light` | `#3B82F6` | Destaques sutis |
| `--success` | `#16C456` | Checkmarks, status positivo |
| `--warning` | `#F59E0B` | Avisos |
| `--danger` | `#DC2626` | Erros, negativos |

---

## 3. Tipografia

| Função | Fonte | Tamanho (Desktop) | Peso | Cor |
|--------|-------|-------------------|------|-----|
| H1 Hero | Geist Sans | 64px | 700 | `--slate-900` |
| H2 Section | Geist Sans | 42px | 700 | `--slate-900` |
| H3 Card | Geist Sans | 20px | 600 | `--slate-800` |
| Body Large | Geist Sans | 18px | 400 | `--slate-500` |
| Body | Geist Sans | 16px | 400 | `--slate-700` |
| Label | Geist Sans | 13px | 500 | `--accent-blue` |
| Button | Geist Sans | 15px | 600 | White / `--slate-900` |
| Caption | Geist Sans | 14px | 400 | `--slate-400` |
| Price | Geist Sans | 40px | 700 | `--slate-900` |

### Escala Tipográfica Responsiva

| Elemento | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| H1 Hero | 64px | 48px | 36px |
| H2 Section | 42px | 36px | 28px |
| H3 Card | 20px | 18px | 17px |
| Body | 16px | 16px | 15px |
| Button | 15px | 15px | 14px |

---

## 4. Layout & Grid

- **Container máximo:** 1200px
- **Padding lateral:** 24px (mobile) | 32px (tablet) | 48px (desktop)
- **Espaçamento vertical entre seções:** 120px (desktop) | 80px (mobile)
- **Grid:** 12 colunas, gap 24px
- **Whitespace:** GENEROSO. Não tenha medo de espaço vazio.

---

## 5. Componentes

### Botão Primário (CTA)
```css
.btn-primary {
  background: #2563EB;
  color: white;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  transition: all 150ms ease;
}
.btn-primary:hover {
  background: #1D4ED8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}
.btn-primary:active {
  transform: scale(0.97);
}
```

### Botão Secundário (Outline)
```css
.btn-secondary {
  background: transparent;
  color: #2563EB;
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #E2E8F0;
  font-weight: 600;
  font-size: 15px;
  transition: all 150ms ease;
}
.btn-secondary:hover {
  border-color: #2563EB;
  background: rgba(37, 99, 235, 0.04);
}
```

### Card
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  border: 1px solid #E2E8F0;
  transition: all 200ms ease;
}
.card:hover {
  border-color: #CBD5E1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}
```

### Badge
```css
.badge {
  background: rgba(37, 99, 235, 0.08);
  color: #2563EB;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
}
```

---

## 6. Seções — Cores por Seção

| Seção | Fundo | Texto Principal | Texto Secundário |
|-------|-------|-----------------|------------------|
| Navigation | Branco + blur sutil | `--slate-900` | `--slate-500` |
| Hero | Branco | `--slate-900` | `--slate-500` |
| Problema | `--off-white` | `--slate-900` | `--slate-500` |
| Solução | Branco | `--slate-900` | `--slate-500` |
| Features | `--off-white` | `--slate-900` | `--slate-500` |
| Como Funciona | Branco | `--slate-900` | `--slate-500` |
| Testimonials | `--off-white` | `--slate-900` | `--slate-500` |
| Pricing | Branco | `--slate-900` | `--slate-500` |
| FAQ | `--off-white` | `--slate-900` | `--slate-500` |
| Final CTA | `--slate-900` (escuro!) | Branco | `--slate-400` |
| Footer | `--slate-900` | `--slate-400` | `--slate-500` |

**Nota:** Apenas o Final CTA e Footer usam fundo escuro. Isso cria um contraste dramático no final da página, deixando o CTA memorável. Todo o resto é branco/off-white.

---

## 7. Mockups & Imagens

### Hero
- Mockup do app em dispositivo flutuando à direita
- Sombra suave: `0 20px 60px rgba(0, 0, 0, 0.08)`
- Sem glassmorphism — frame sólido, clean
- Animação: float sutil (translateY -8px a 8px, 5s)

### App Showcase
- Screenshots do app em frames de dispositivo
- Bordas arredondadas (16px)
- Sombra sutil
- Sem efeitos de glass

---

## 8. Animações

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 400ms ease-out, transform 400ms ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger (para grids)
```
Delay entre items: 60ms
Máximo: 300ms total
```

### Button Hover
```css
transition: all 150ms ease;
transform: translateY(-1px); /* no hover */
transform: scale(0.97); /* no active */
```

### Card Hover
```css
transition: all 200ms ease;
transform: translateY(-2px);
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
```

---

## 9. Responsividade

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Adaptações Mobile
- Navigation: hamburger menu
- Hero: texto acima, mockup abaixo, centralizado
- Features: 1 coluna
- Steps: 1 coluna vertical
- Testimonials: 1 coluna
- Pricing: cards empilhados (Pro primeiro)

---

## 10. Princípios Anti-AI

### ❌ O que foi removido
- Glassmorphism em cards
- Gradientes de fundo em seções
- Glow orbs flutuando
- Bordas ciano brilhantes
- Backgrounds azul escuro dominantes
- Cantos arredondados exagerados (999px em tudo)
- Sombra colorida (azul/ciano)
- Texto com text-shadow glow

### ✅ O que foi mantido/adicionado
- Fundo branco limpo
- Whitespace generoso
- Tipografia bold e confidente
- Azul usado com parcimônia (só em CTAs e badges)
- Cards com bordas sutis e sombras mínimas
- Contraste dramático só no final (CTA escuro)
- Layout arejado, inspirado em sites Awwwards

---

*Design visual v2 criado em: 2026-08-04*
*Baseado na spec de design e copy da LP*
