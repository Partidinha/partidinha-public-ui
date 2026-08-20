# Partidinha — Design Specification

## 1. Visão Geral do Produto

**Partidinha** é um aplicativo de gerenciamento de peladas de futebol amador. Ele conecta administradores de grupos de pelada a seus times via WhatsApp através de um bot inteligente, eliminando planilhas, papel e caneta do dia a dia do futebol amador.

### Problema que resolve
- Administradores perdem tempo organizando confirmações de jogadores via mensagens dispersas
- Difícil controlar quem pagou e quem não pagou a mensalidade/dia de jogo
- Sorteio de times no dia do jogo é manual e demorado
- Estatísticas de jogadores (gols, assistências, cartões) são perdidas ou guardadas em papel
- Lista de presença por ordem de chegada é difícil de manter
- Não há visibilidade centralizada de quem confirmou, desconfirmou ou faltou

### Público-alvo
- Administradores e líderes de grupos de pelada de futebol amador
- Homens, principalmente 25-45 anos
- Brasileiros, linguagem casual e direta
- Familiarizados com WhatsApp como principal canal de comunicação

### Diferenciais
- Integração nativa com WhatsApp (bot entra automaticamente no grupo)
- Cobrança automática de inadimplentes via bot
- Sorteio de times automático
- Estatísticas em tempo real
- Tabela de classificação gerada automaticamente
- Lista de presença por ordem de chegada

---

## 2. Identidade Visual

### 2.1 Paleta de Cores (Extraída do Ícone)

O ícone do Partidinha utiliza um visual **glassmorphism** com tons de azul profundo, transmitindo tecnologia, confiança e modernidade — mas com um toque leve e amigável.

| Token | Hex | Uso |
|-------|-----|-----|
| `--deep-navy` | `#0B1E2D` | Fundos escuros, hero, seções principais |
| `--midnight` | `#142B3D` | Cards escuros, camadas secundárias |
| `--ocean-blue` | `#1E4A6B` | Bordas glass, acentos sutis |
| `--sky-blue` | `#4A90C2` | Elementos primários, botões, links |
| `--bright-cyan` | `#6BB3E0` | Hover states, destaques, gradientes |
| `--ice-blue` | `#A8D4F0` | Textos de destaque, ícones, highlights |
| `--pure-white` | `#FFFFFF` | Texto principal em fundos escuros |
| `--soft-white` | `#F0F4F8` | Fundos claros, seções alternadas |
| `--warm-gray` | `#8A9AAB` | Textos secundários, captions |
| `--success-green` | `#2ECC71` | Confirmações, status positivos |
| `--alert-amber` | `#F39C12` | Avisos, pendências |
| `--danger-red` | `#E74C3C` | Cobranças, faltas, negativos |

### 2.2 Gradientes

```
Hero Gradient:    linear-gradient(135deg, #0B1E2D 0%, #142B3D 50%, #1E4A6B 100%)
Glass Overlay:    linear-gradient(180deg, rgba(107, 179, 224, 0.08) 0%, rgba(30, 74, 107, 0.15) 100%)
Accent Glow:      radial-gradient(ellipse at center, rgba(107, 179, 224, 0.2) 0%, transparent 70%)
```

### 2.3 Tipografia

| Função | Fonte | Pesos | Uso |
|--------|-------|-------|-----|
| Display / Headings | Inter / Geist | 700, 800 | H1, H2, hero text |
| Body | Inter / Geist | 400, 500, 600 | Parágrafos, descrições |
| Mono (opcional) | Geist Mono | 400 | Stats, números, comandos do bot |

### 2.4 Estilo Visual — Glassmorphism Moderno

O design deve transmitir:
- **Tecnologia** — visual moderno, limpo, glassmorphism
- **Leveza** — transparências, blur, bordas suaves
- **Confiança** — azul profundo como base
- **Energia** — toques de cyan/branco como destaques
- **Brasil** — linguagem informal, gírias do futebol, tom de "papo de vestiário"

### 2.5 Elementos Visuais Recorrentes

- **Glass Cards**: `background: rgba(30, 74, 107, 0.15); backdrop-filter: blur(20px); border: 1px solid rgba(107, 179, 224, 0.2); border-radius: 24px;`
- **Glow Orbs**: Círculos desfocados com gradiente cyan como elementos decorativos de fundo
- **Floating Elements**: Cards e imagens com leve `transform: translateY(-4px)` e shadow em hover
- **WhatsApp Green Accents**: Toques sutis de verde (#25D366) onde faz sentido destacar a integração WhatsApp
- **Particle/Mesh backgrounds**: Gradiente animado sutil no hero

---

## 3. Estrutura da Landing Page

### Seções (top-down):

1. **Navigation** — Logo + links + CTA "Criar meu grupo"
2. **Hero** — Headline impactante + subheadline + CTA primário + mockup do app
3. **Social Proof** — Contador de grupos/jogadores + logos de times (se houver) ou avatares
4. **Problem / Story** — "A organização da pelada não precisa ser um sufoco" — mostrar o caos antes
5. **Features Grid** — 6 features principais em cards glassmorphism
6. **How It Works** — 4 passos simples do fluxo (Criar grupo → Bot entra → Criar partida → Relaxar)
7. **App Showcase** — Mockups do app em ação (criar partida, sortear times, estatísticas)
8. **Testimonials** — Depoimentos de administradores de pelada
9. **Pricing** — Planos (Free / Pro) — simples, direto
10. **FAQ** — Dúvidas comuns
11. **Final CTA** — "Bora pro campo?" — CTA grande e impactante
12. **Footer** — Links, contato, redes sociais

---

## 4. Animações & Micro-interações (Diretrizes)

> Nota: Implementação técnica será feita posteriormente. Aqui definimos o comportamento desejado.

| Elemento | Animação | Timing |
|----------|----------|--------|
| Hero text | Fade-in + slide-up | 0.6s, ease-out |
| Hero mockup | Float animation (subir/descer suave) | 4s, infinite, ease-in-out |
| Glass cards | Scale-up + fade-in on scroll | 0.5s, stagger 0.1s |
| Feature icons | Pulse glow on hover | 0.3s |
| CTA buttons | Scale 1.02 + glow intensify on hover | 0.2s |
| Background orbs | Slow drift + scale pulse | 8-12s, infinite |
| Stats counters | Count-up animation on scroll | 2s, ease-out |
| Section transitions | Parallax sutil entre seções | scroll-driven |
| WhatsApp messages | Typing animation mock | 1.5s, stagger |

---

## 5. Tom de Voz & Copy

- **Tom**: Conversacional, direto, com gírias leves do futebol brasileiro
- **Evitar**: Linguagem corporativa, robótica, cheia de jargões
- **Usar**: "Bora", "Já era", "Sufoco", "Bagunça", "Partiu", "Na trave"
- **Pessoa**: 2ª pessoa ("você", "seu grupo")
- **CTAs fortes e curtos**: "Criar meu grupo", "Bora pro campo", "Testar grátis"

---

## 6. Assets Necessários

- [ ] Logo Partidinha (SVG/PNG com fundo transparente)
- [ ] Mockups do app (telas: dashboard, criar partida, sortear times, estatísticas, tabela)
- [ ] Ícones das features (SVG)
- [ ] Fotos/avatars de usuários para testimonials
- [ ] Ícones de times fictícios ou genéricos para social proof
- [ ] Elementos decorativos: bolas de futebol, apitos, chuteiras (subtins, glassmorphism)

---

## 7. Responsividade

- **Desktop** (1024px+): Layout completo, 2-3 colunas, mockups lado a lado
- **Tablet** (768-1023px): 2 colunas, mockups empilhados
- **Mobile** (<768px): 1 coluna, CTAs full-width, mockups centralizados, hamburger menu

---

## 8. SEO & Meta

- **Title**: Partidinha — Organize sua pelada sem sufoco
- **Description**: Gerencie seu grupo de futebol amador com um bot no WhatsApp. Confirmações, cobranças, sorteio de times e estatísticas automáticas.
- **Keywords**: pelada, futebol amador, organizar pelada, bot whatsapp futebol, app pelada, gerenciador time futebol

---

## 9. Referências Visuais

- Glassmorphism: https://ui.glass (inspiração)
- Motion: https://www.framer.com (smooth animations)
- Modern SaaS: Linear.app, Vercel.com (clean, dark, modern)
- Sports apps: Nike Run Club, Strava (energia, stats)

---

*Spec criada em: 2026-08-04*
*Versão: 1.0*
*Projeto: partidinha-public-ui*
