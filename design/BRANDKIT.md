# Partidinha — Brandkit & Especificação Final de Design LP

> **Versão Final Aprovada (Protótipo Interativo)**  
> **Gerado em**: 2026-08-07  
> **Inspirações**: Billow.so (Tipografia Lastik & Glass Pills), Resend.com (Feixe de Luz Abstrato Conic Ray), Linea Prompt (Malha Técnica de Grid Overlay & Focused Cards)

---

## 1. Identidade & Extração de Cores Oficial

Análise e extração estrita das cores do ícone oficial da marca (eliminados quaisquer tons de roxo/magenta):

| Cor | Hex | RGB | Uso Principal |
|-----|-----|-----|---------------|
| **Deep Navy** | `#0B1926` | `rgb(11, 25, 38)` | Fundo da Hero Section, Seção Showcase, Footer e CTA Final |
| **Ocean Blue** | `#1E4A6B` | `rgb(30, 74, 107)` | Corpos dos componentes glass, degradês de fundo e bordas de estrutura |
| **Sky Cyan** | `#38BDF8` | `rgb(56, 189, 248)` | Highlights, feixe de luz abstrato (conic flare), glow em botões e badges |
| **Partidinha Accent Blue** | `#0284C7` | `rgb(2, 132, 199)` | CTAs primários, botões interativos e títulos em gradient text |
| **Ice Blue / Off-white** | `#E0F2FE` / `#F8FAFC` | `rgb(224, 242, 254)` | Fundo das seções claras, pills e badges informativos |

---

## 2. Tipografia Oficial

### 2.1 Headings & Títulos de Destaque
- **Fonte Principal de Títulos**: `Lastik Variable Variable Regular` / `Lastik Test Bold` (Fonte editorial do Billow.so)
- **Importação `@font-face`**:
  ```css
  @font-face {
    font-family: "Lastik Variable Variable Regular";
    src: url("https://framerusercontent.com/assets/0cNKkawYj3lQlwSys33leW5jRI.woff2");
    font-display: swap;
  }
  ```
- **Classe CSS**: `.font-lastik { font-family: "Lastik Variable Variable Regular", Georgia, serif, sans-serif; letter-spacing: -0.02em; }`

### 2.2 Corpo de Texto & UI
- **Interface e Leitura**: `Geist`, `Inter`, `sans-serif`
- **Código & Dados de Simulador**: `JetBrains Mono`, `font-mono`

---

## 3. Ritmo de Seções & Estrutura de Cores (60-30-10)

Para manter a página leve, legível e dinâmica, o fundo alterna entre o **Deep Navy oficial** (na Hero e seções técnicas/fechamento) e **fundos brancos/ice limpos com grid técnico**:

| Seção | Fundo (Hex) | Estilo & Efeitos |
|-------|-------------|------------------|
| **Floating Navbar** | Transparente | Glass Pill Flutuante Arredondada (`border-radius: 9999px`, `backdrop-filter: blur(20px)`) |
| **1. Hero Section** | `#0B1926` (Deep Navy) | Feixe de luz abstrato cônico em Sky Cyan (`hero-light-ray-navy`), Grid Overlay escuro |
| **2. Problema vs Solução** | `#F1F5F9` (Ice Slate) | Grid Overlay claro, Card em Caos Vermelho vs Card Focused Grid com Vestiário Digital |
| **3. Recursos Grid** | `#FFFFFF` (Branco Puro) | 6 Frosted Glass Cards com animação GSAP Stagger Load |
| **4. Como Funciona** | `#F8FAFC` (Off-white) | 4 Passos em Glass Cards com numeração em gradiente ciano |
| **5. App Showcase** | `#0B1926` (Deep Navy) | Card Glass Escuro em alto contraste com abas interativas |
| **6. Depoimentos** | `#FFFFFF` (Branco Puro) | Cards de testemunho com avatares em gradientes da marca |
| **7. Planos & Preços** | `#F8FAFC` (Off-white) | Card Free vs Card Pro (Focused Grid Card com borda ciano e badge RECOMENDADO) |
| **8. FAQ Accordion** | `#FFFFFF` (Branco Puro) | Accordions interativos em Glass com rotação de ícones |
| **9. Final CTA** | `#0B1926` (Deep Navy) | Aura radial em Sky Cyan (`#38BDF8`) e botão primário com brilho CTA Glow |

---

## 4. Efeitos Especiais de Design (UI Tokens)

### 4.1 Malha Técnica de Grid (Linea Prompt Style)
Grid técnico discreto aplicado ao background e dentro de cards de destaque:
```css
/* Grid claro para seções de fundo off-white */
.bg-grid-pattern-light {
  background-image: 
    linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
}

/* Focused Grid Card (Card com destaque e malha interna) */
.focused-grid-card-light {
  position: relative;
  background: linear-gradient(172deg, rgba(255, 255, 255, 0.96) 0%, rgba(224, 242, 254, 0.85) 100%);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1.5px solid rgba(14, 165, 233, 0.4);
  box-shadow: 0 20px 45px -15px rgba(14, 165, 233, 0.18), 0 1px 0 0 rgba(255, 255, 255, 0.95) inset;
  border-radius: 28px;
}
.focused-grid-card-light::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(14, 165, 233, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(14, 165, 233, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
  opacity: 0.7;
}
```

### 4.2 Feixe de Luz Abstrato (Resend-Style Conic Beam)
Flare luminoso cônico emanando do topo central da Hero Section:
```css
.hero-light-ray-navy {
  position: absolute;
  top: -140px;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  height: 750px;
  background: 
    conic-gradient(from 180deg at 50% 0%, 
      transparent 0deg, 
      rgba(14, 165, 233, 0.08) 130deg, 
      rgba(56, 189, 248, 0.4) 165deg, 
      rgba(2, 132, 199, 0.75) 180deg, 
      rgba(56, 189, 248, 0.4) 195deg, 
      rgba(14, 165, 233, 0.08) 230deg, 
      transparent 360deg),
    radial-gradient(ellipse at 50% 15%, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 80%);
  filter: blur(40px);
  pointer-events: none;
}
```

### 4.3 Cards em Frosted Glass (Billow / Framer Style)
```css
.billow-glass-card-light {
  background: linear-gradient(172deg, rgba(255, 255, 255, 0.92) 0%, rgba(240, 247, 255, 0.65) 100%);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(224, 242, 254, 0.95);
  box-shadow: 0 16px 36px -10px rgba(15, 23, 42, 0.05), 0 1px 0 0 rgba(255, 255, 255, 0.95) inset;
  border-radius: 28px;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.billow-glass-card-light:hover {
  transform: translateY(-5px);
  background: linear-gradient(172deg, rgba(255, 255, 255, 0.98) 0%, rgba(224, 242, 254, 0.85) 100%);
  border-color: rgba(14, 165, 233, 0.45);
  box-shadow: 0 25px 50px -15px rgba(14, 165, 233, 0.18), 0 0 0 1px rgba(14, 165, 233, 0.25) inset;
}
```

---

## 5. Animações GSAP & Interatividade

1. **GSAP Preloader**: Tela de carregamento com logo pulsante e progresso em percentual (`0%` → `100%`) antes da revelação fluida da página.
2. **GSAP ScrollTrigger**:
   - `gsap.fromTo('.gsap-reveal')`: Revelação com slide ascendente ao rolar pelas seções.
   - `gsap.fromTo('.gsap-stagger-card', ..., { clearProps: 'transform,opacity' })`: Carregamento sequencial em cascata sem falhas ou ocultação acidental de cards.

---

## 6. Configuração Tailwind CSS (`tailwind.config.ts`)

```typescript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1926',
          ocean: '#1E4A6B',
          cyan: '#38BDF8',
          ice: '#E0F2FE',
          accent: '#0284C7'
        },
        base: { 100: '#FFFFFF', 95: '#F8FAFC', 90: '#F1F5F9' },
        navy: { 900: '#0F172A', 800: '#1E293B', 700: '#334155', 600: '#475569', 500: '#64748B' },
        accent: { 600: '#0284C7', 500: '#0369A1', 400: '#38BDF8', 300: '#7DD3FC', 200: '#BAE6FD', 100: '#E0F2FE', 50: '#F0F9FF' },
        wa: { green: '#25D366', dark: '#075E54', chatBg: '#E5DDD5' }
      },
      boxShadow: {
        'cta-glow': '0 8px 32px rgba(56, 189, 248, 0.35)',
        'logo-glass': '0 10px 30px -5px rgba(2, 132, 199, 0.15)'
      }
    }
  }
}
```

---

*Documento atualizado com a especificação final validada no protótipo interativo.*

