export interface HeadlineOption {
  key: string;
  label: string;
  titleHtml: string;
}

export const HEADLINES: HeadlineOption[] = [
  {
    key: "A",
    label: "Var A: Sua pelada no piloto automático",
    titleHtml: 'Sua pelada <span class="text-gradient-cyan">no piloto automático</span>',
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
    label: "Var D: A pelada que se organiza sozinha",
    titleHtml: 'A pelada que <span class="text-gradient-cyan">se organiza sozinha</span>',
  },
];

export const FEATURES_HEADER = {
  subtitle: "Tudo que seu time precisa",
  titleHtml: 'Tudo que sua pelada precisa <span class="text-gradient-light">para rodar no piloto automático</span>',
  description: "Cada recurso foi pensado para tirar o peso das costas do admin e devolver o prazer do futebol.",
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
    title: "Confirmações de Presença",
    description: "Automatize a lista no grupo e garanta time completo na sua próxima pelada.",
    iconBg: "bg-gradient-to-tr from-emerald-600 to-teal-400",
    isFocused: false,
  },
  {
    icon: "💰",
    title: "Cobrança de Devedores",
    description:
      "Marque quem pagou no app. O bot manda lembretes educados no grupo periodicamente. Pare de ser o chato da cobrança!",
    iconBg: "bg-gradient-to-tr from-amber-600 to-amber-400",
    isFocused: false,
  },
  {
    icon: "⚽",
    title: "Sorteio de Times",
    description:
      "Chegou no campo? Abra o app e sorteie os times em segundos direto da lista de confirmados, sem papelzinho nem confusão.",
    iconBg: "bg-gradient-to-tr from-sky-600 to-cyan-500",
    isFocused: true,
  },
  {
    icon: "📊",
    title: "Estatísticas em Tempo Real",
    description:
      "Registre gols, assistências e cartões durante o jogo. Ao final, o bot publica a imagem do ranking de artilheiros direto no grupo.",
    iconBg: "bg-gradient-to-tr from-[#1E4A6B] to-cyan-600",
    isFocused: false,
  },
  {
    icon: "🧾",
    title: "Controle de Pagamentos",
    description:
      "Depois de cada jogo, o admin marca quem pagou. A tela mostra saldo pago e devedores, e o próprio bot barra quem está devendo de confirmar presença nas próximas peladas, até o admin confirmar o pagamento no app.",
    iconBg: "bg-gradient-to-tr from-sky-700 to-sky-400",
    isFocused: false,
  },
];

export const HOW_IT_WORKS = [
  {
    step: "Passo 01",
    title: "Crie seu grupo",
    content: "Baixe o app, crie sua conta e cadastre o seu time em menos de 2 minutos.",
    description: "Baixe o app, crie sua conta e cadastre o seu time em menos de 2 minutos.",
  },
  {
    step: "Passo 02",
    title: "O bot entra no Whats",
    content: "Cole o link de convite do grupo. Nosso bot entra automaticamente e se apresenta aos atletas.",
    description: "Cole o link de convite do grupo. Nosso bot entra automaticamente e se apresenta aos atletas.",
  },
  {
    step: "Passo 03",
    title: "Crie a partida",
    content: "Defina data, hora e valor no app. O bot anuncia no Whats e colhe confirmações.",
    description: "Defina data, hora e valor no app. O bot anuncia no Whats e colhe confirmações.",
  },
  {
    step: "Passo 04",
    title: "Só chegar e jogar",
    content: "No dia do jogo, sorteie os times, anote os gols no app e veja a resenha acontecer.",
    description: "No dia do jogo, sorteie os times, anote os gols no app e veja a resenha acontecer.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Antes eu passava 2 horas por semana organizando a pelada no Whats. Agora crio a partida em 30 segundos no app e o bot faz o resto. Meu sábado voltou a ser meu.",
    initial: "A",
    name: "Alexandre",
    role: "Admin de pelada há 4 anos (TO)",
    gradient: "bg-gradient-to-tr from-[#1E4A6B] to-[#38BDF8]",
  },
  {
    quote:
      "A cobrança automática mudou nosso fut. Ninguém mais fica devendo 3 meses ou dando preju pro admin. O bot cobra de forma imparcial no grupo sem eu precisar ser o chato.",
    initial: "B",
    name: "Bruno",
    role: "Admin de pelada há 2 anos. (PE)",
    gradient: "bg-gradient-to-tr from-emerald-600 to-teal-400",
  },
  {
    quote:
      "A gente sorteava time no papel. Agora abre o app, clica e pronto. Ainda temos estatísticas de todo jogo direto no grupo",
    initial: "A",
    name: "Arthur",
    role: "Admin de Pelada há 2 anos (TO)",
    gradient: "bg-gradient-to-tr from-cyan-700 to-sky-400",
  },
];

export const FAQS = [
  {
    id: 1,
    question: "Meu grupo precisa baixar o app?",
    answer:
      "Não! Apenas você (o administrador) baixa o aplicativo. Seus jogadores interagem com o bot diretamente no grupo do WhatsApp, marcando o bot e digitando comandos simples como entrar ou sair.",
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
      "Assim que o bot entra no grupo ele manda um menu super simples explicativo. Se alguém digitar algo errado, o bot envia uma mensagem amigável mostrando os comandos e opções corretas.",
  },
  {
    id: 4,
    question: "Sou obrigado a bloquear quem atrasa o pagamento?",
    answer:
      "Não! O bloqueio fica nas configurações do grupo, e você decide se quer ativar. Se preferir usar só a lista de presença e o sorteio de times, pode deixar a cobrança e o bloqueio desligados — o admin escolhe só o que quiser usar.",
  },
  {
    id: 5,
    question: "O Partidinha cobra automaticamente via Pix ou cartão?",
    answer:
      "Ainda não. O bot automatiza o lembrete no grupo e o controle de quem pagou, mas quem recebe o pagamento (Pix, dinheiro, o que for) é você. Depois só marca no app quem já acertou.",
  },
  {
    id: 6,
    question: "Preciso pagar pra testar?",
    answer:
      "Não. O primeiro mês do Plano Pro é grátis, sem pedir cartão. Sem contrato — se não gostar, cancela quando quiser.",
  },
  {
    id: 7,
    question: "Dá pra usar em mais de uma pelada com a mesma conta?",
    answer:
      "Sim! Você pode gerenciar mais de um grupo com a mesma conta, cada um com suas próprias configurações e cobranças.",
  },
];
