export interface HeadlineOption {
  key: string;
  label: string;
  titleHtml: string;
}

export const HEADLINES: HeadlineOption[] = [
  {
    key: "A",
    label: "Var A: Chega de sufoco antes do apito",
    titleHtml: 'Chega de sufoco <span class="text-gradient-cyan">antes do apito</span>',
  },
  {
    key: "B",
    label: "Var B: Sua pelada organizada, sem você fazer nada",
    titleHtml: 'Sua pelada organizada, <span class="text-gradient-cyan">sem você fazer nada</span>',
  },
  {
    key: "C",
    label: "Var C: Tem um bot no seu grupo que organiza tudo",
    titleHtml: 'Tem um bot no seu grupo que <span class="text-gradient-cyan">organiza tudo sozinho</span>',
  },
  {
    key: "D",
    label: "Var D: 1.200 grupos de pelada já pararam de sofrer",
    titleHtml: '1.200 grupos de pelada <span class="text-gradient-cyan">já pararam de sofrer</span>',
  },
];

export const FEATURES_HEADER = {
  subtitle: "Tudo que seu time precisa",
  titleHtml: 'Tudo que sua pelada precisa <span class="text-gradient-light">para rodar no piloto automático</span>',
  description: "Cada recurso foi pensado para tirar o estresse das costas do capitão e devolver o prazer do futebol.",
};

export const FEATURES = [
  {
    icon: "🤖",
    title: "Bot no WhatsApp",
    description:
      "Seu grupo não precisa baixar nada extra. O bot entra direto no seu grupo do Whats e responde instantaneamente aos comandos.",
    iconBg: "bg-gradient-to-tr from-[#1E4A6B] to-[#38BDF8]",
    isFocused: false,
  },
  {
    icon: "✅",
    title: "Confirmações Automáticas",
    description:
      "Saiba quem vai, quem não vai e quem está na lista de espera. Sem 'achei que ia' e sem surpresas no vestiário.",
    iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-400",
    isFocused: false,
  },
  {
    icon: "💰",
    title: "Cobrança de Inadimplentes",
    description:
      "Marque quem pagou no app. O bot manda lembretes educados no grupo periodicamente. Pare de ser o chato da cobrança!",
    iconBg: "bg-gradient-to-tr from-amber-600 to-amber-400",
    isFocused: false,
  },
  {
    icon: "⚽",
    title: "Sorteio de Times",
    description:
      "Chegou no campo? Abra o app e sorteie times equilibrados em 3 segundos baseando-se na nota e posição de cada atleta.",
    iconBg: "bg-gradient-to-tr from-sky-600 to-cyan-500",
    isFocused: true,
  },
  {
    icon: "📊",
    title: "Estatísticas em Tempo Real",
    description:
      "Registre gols, assistências e cartões durante o jogo. Ao final, o bot publica a tabela com o artilheiro do ano.",
    iconBg: "bg-gradient-to-tr from-[#1E4A6B] to-cyan-600",
    isFocused: false,
  },
  {
    icon: "📋",
    title: "Ordem de Chegada",
    description:
      "Quem chegou primeiro joga primeiro. O bot registra o horário exato de confirmação e chegada de cada jogador no campo.",
    iconBg: "bg-gradient-to-tr from-sky-700 to-sky-400",
    isFocused: false,
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "1. Crie seu grupo",
    description: "Baixe o app, crie sua conta e cadastre o seu time em menos de 2 minutos.",
  },
  {
    step: "02",
    title: "2. O bot entra no Whats",
    description: "Cole o link de convite do grupo. Nosso bot entra automaticamente e se apresenta aos atletas.",
  },
  {
    step: "03",
    title: "3. Crie a partida",
    description: "Defina data, hora e valor no app. O bot anuncia no Whats e colhe confirmações.",
  },
  {
    step: "04",
    title: "4. Relaxa e joga",
    description: "No dia do jogo, sorteie os times, anote os gols no app e veja a resenha acontecer.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Antes eu passava 2 horas por semana organizando a pelada no Whats. Agora crio a partida em 30 segundos no app e o bot faz o resto. Meu sábado voltou a ser meu.",
    initial: "C",
    name: "Carlos",
    role: "Admin do Ferroviários FC (SP)",
    gradient: "bg-gradient-to-tr from-[#1E4A6B] to-[#38BDF8]",
  },
  {
    quote:
      "A cobrança automática mudou nossa vida. Ninguém mais fica devendo 3 meses. O bot cobra de forma imparcial no grupo sem eu precisar ser o chato.",
    initial: "A",
    name: "André",
    role: "Admin do Tabajara F.C. (BH)",
    gradient: "bg-gradient-to-tr from-emerald-600 to-teal-400",
  },
  {
    quote:
      "A gente sorteava time no papel. Agora abre o app, clica e pronto. Ainda temos estatísticas do ano inteiro. A pelada virou campeonato amador de verdade!",
    initial: "R",
    name: "Rafael",
    role: "Admin do Pelada dos Cria (RJ)",
    gradient: "bg-gradient-to-tr from-cyan-700 to-sky-400",
  },
];

export const FAQS = [
  {
    id: 1,
    question: "Meu grupo precisa baixar o app?",
    answer:
      "Não! Apenas você (o administrador) baixa o aplicativo. Seus jogadores interagem com o bot diretamente no grupo do WhatsApp enviando comandos simples como !confirmar ou !lista.",
  },
  {
    id: 2,
    question: "O bot funciona em qualquer grupo de WhatsApp?",
    answer:
      "Sim! Basta você ser admin do grupo e fornecer o link de convite dentro do app Partidinha. O bot entra em instantes.",
  },
  {
    id: 3,
    question: "E se alguém não souber usar os comandos?",
    answer:
      "Assim que o bot entra no grupo ele manda um menu super simples explicativo. Se alguém digitar algo errado, o bot envia uma mensagem amigável mostrando os botões e opções corretas.",
  },
];
