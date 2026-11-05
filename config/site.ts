import {
  Skull,
  Car,
  Eye,
  Hand,
  Moon,
  Heart,
  MessageSquareOff,
  User,
  Terminal,
  Gauge,
  Wrench,
  Ban,
  Crosshair,
  DoorOpen,
  Bomb,
  Lock,
  Siren,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "Cidade Nova Roleplay",
  shortName: "CNV",
  description:
    "Uma comunidade de roleplay séria, imersiva e organizada, ambientada em Brookhaven. Viva uma nova vida na Cidade Nova.",
  discordUrl: "https://discord.gg/SEU-CONVITE",
};

export const storyConfig = {
  title: "A História da CNV",
  paragraphs: [
    "A história da CNV começa em 2022, com o idealizor Bada, nos primeiros meses, a Cidade foi situada no Brasil por um longo período. Em 2023 até 2024, tivemos uma nova sub direção, onde, teve vários ajustes na cidade, acabndo por deixá-la situada nos EUA." "Porém, no final de ano de 2024, a CNV fechou as portas por causa da escassez de jogadores, mas hoje em dia, ela volta com tudo." "Sua história começa agora. Quem você vai ser na Cidade Nova?",
  ],
};

export type RuleItem = { icon: LucideIcon; title: string; description: string };

export const rulesConfig: {
  title: string;
  subtitle: string;
  rules: RuleItem[];
  safeZones: { title: string; description: string; places: string[] };
} = {
  title: "Regras de Roleplay",
  subtitle: "Conceitos essenciais que todo cidadão da CNV precisa conhecer.",
  rules: [
    {
      icon: Heart,
      title: "Amor à Vida (Fear RP)",
      description:
        "Seu personagem é humano e teme pela própria vida. Se alguém apontar uma arma para você em menor número ou sem chance de defesa, você deve se render e obedecer. Reagir de forma irrealista é proibido.",
    },
    {
      icon: Skull,
      title: "RDM (Random Deathmatch)",
      description:
        "É proibido matar ou agredir outros jogadores sem um motivo prévio e desenvolvimento dentro do Roleplay.",
    },
    {
      icon: Car,
      title: "VDM (Vehicle Deathmatch)",
      description:
        "É proibido usar veículos para atropelar outros jogadores intencionalmente sem motivo de RP (usar o carro como arma de forma aleatória).",
    },
    {
      icon: Eye,
      title: "Metagaming (MG)",
      description:
        "É proibido usar informações de fora do jogo dentro do personagem (exemplo: chamar um jogador pelo nome que aparece em cima do boneco sem que ele tenha se apresentado no RP, ou usar informações do Discord no jogo).",
    },
    {
      icon: Hand,
      title: "Powergaming (PG)",
      description:
        "É proibido forçar uma ação no outro jogador sem dar a ele chance de defesa, ou realizar ações fisicamente impossíveis na vida real.",
    },
    {
      icon: Moon,
      title: "Amnésia Pós-Desmaio (NLR - New Life Rule)",
      description:
        "Não se pode lembrar dos últimos acontecimentos. Após ser desmaiado, o jogador perde a memória dos 5 minutos anteriores ao ocorrido (não pode reconhecer quem o atacou ou voltar ao local do crime imediatamente).",
    },
  ],
  safeZones: {
    title: "Zonas Seguras (Safe Zones)",
    description:
      "É estritamente proibido realizar assaltos, sequestros, iniciar tiroteios ou cometer crimes nas seguintes áreas:",
    places: [
      "Hospital (Interior e arredores imediatos).",
      "Praça Principal (Todo o centro de Brookhaven).",
    ],
  },
};

export type SystemItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
};

export const systemsConfig: {
  title: string;
  subtitle: string;
  systems: SystemItem[];
} = {
  title: "Sistemas e Mecânicas",
  subtitle: "Entenda como funciona o dia a dia da cidade.",
  systems: [
    {
      icon: MessageSquareOff,
      title: "Comunicação Fora do Personagem (OOC)",
      description:
        "O uso de barras duplas (//) é estritamente proibido para falar fora do Roleplay no chat. Tudo o que for digitado deve ser do personagem.",
    },
    {
      icon: User,
      title: "Padrão de Avatar",
      description:
        "O boneco deve ser realista e ter proporções humanas. É obrigatório o uso do modelo padrão Roblox Boy (proibido avatares minúsculos, gigantes ou não-humanos).",
    },
    {
      icon: Terminal,
      title: "Comandos de Ação (*)",
      description:
        "As ações devem ser narradas APENAS para situações que não possuem animação no jogo e que realmente precisem de um comando para o outro jogador entender (como dar uma coronhada, revistar, fabricar armas). A regra é usar o asterisco apenas no começo da frase.",
      details: [
        "Exemplo correto: *dando uma coronhada na cabeça do indivíduo",
        "Exemplo correto: *fabricando o armamento",
        "O que não fazer: é proibido usar comando para ações óbvias que o jogo já mostra (como pular, sentar) e não se deve fechar o asterisco no final da frase.",
      ],
    },
  ],
};

export type LawItem = { icon: LucideIcon; article: string; title: string; description: string };

export const lawsConfig: {
  title: string;
  subtitle: string;
  laws: LawItem[];
} = {
  title: "Código de Leis de Brookhaven",
  subtitle: "O desconhecimento da lei não isenta ninguém de suas consequências.",
  laws: [
    {
      icon: Gauge,
      article: "Artigo 1º",
      title: "Velocidade",
      description: "O limite máximo de velocidade em todas as vias da cidade é 80.",
    },
    {
      icon: Wrench,
      article: "Artigo 2º",
      title: "Modificação Veicular",
      description:
        "O nível de Turbo máximo permitido nos veículos é o Nível 1. O uso ou instalação de Turbo Nível 2 é estritamente ilegal.",
    },
    {
      icon: Ban,
      article: "Artigo 3º",
      title: "Faixas Restritas",
      description:
        "É expressamente proibido estar, parar ou estacionar veículos em cima da faixa vermelha.",
    },
    {
      icon: Crosshair,
      article: "Artigo 4º",
      title: "Porte Ostensivo",
      description:
        "É ilegal transitar com armas de grosso calibre (fuzis e espingardas) em mãos nas vias públicas. Armas leves (pistolas) devem permanecer ocultadas no inventário até o momento de uso justificável.",
    },
    {
      icon: DoorOpen,
      article: "Artigo 5º",
      title: "Invasão de Propriedade",
      description:
        "Pular muros, forçar portas, acampar em quintais alheios sem permissão ou usar métodos para invadir residências trancadas configura crime de invasão a domicílio. O arrombamento de cofres agrava a pena.",
    },
    {
      icon: Bomb,
      article: "Artigo 6º",
      title: "Terrorismo e Danos",
      description:
        "A posse e a detonação de explosivos (C4) em residências, estabelecimentos comerciais ou vias públicas são classificadas como atos de terrorismo e destruição de patrimônio.",
    },
    {
      icon: Car,
      article: "Artigo 7º",
      title: "Obstrução de Via",
      description:
        "É ilegal largar veículos no meio das ruas, em cima das calçadas, ou bloqueando as portas de instituições públicas (como a Delegacia e o Hospital).",
    },
    {
      icon: Lock,
      article: "Artigo 8º",
      title: "Sequestro e Cárcere",
      description:
        "É crime trancar cidadãos dentro de residências contra a sua vontade ou forçá-los a viajar no porta-malas de veículos.",
    },
    {
      icon: Siren,
      article: "Artigo 9º",
      title: "Desobediência e Fuga",
      description:
        "Ignorar ordens de parada dadas por viaturas policiais com sirenes ou luzes de emergência ativadas e iniciar uma perseguição configura crime de evasão.",
    },
  ],
};

export const navLinks = [
  { href: "#historia", label: "História" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#regras", label: "Regras" },
  { href: "#leis", label: "Leis" },
];
