import { Certification, ServiceItem, FAQItem, Testimonial, BusinessSegmentOption, PricingPlan } from '../types';

export const COMPANY_INFO = {
  fullName: "Bora Digital Strategy - Criação de Sites, Google Meu Negócio e Campanhas no Google ADS",
  shortName: "Bora Digital Strategy",
  tagline: "Estratégia Digital de Alta Performance & Conversão Direta no WhatsApp",
  phoneRaw: "54981164282",
  phoneFormatted: "(54) 98116-4282",
  phoneInternational: "+55 54 98116-4282",
  email: "agenciabora33@gmail.com",
  address: {
    street: "Rua Carlos Giesen, 1297",
    suite: "sala 1212",
    neighborhood: "Bairro Exposição",
    city: "Caxias do Sul",
    state: "RS",
    zipCode: "95072-000",
    country: "Brasil",
    fullFormatted: "Rua Carlos Giesen, 1297, sala 1212, Bairro Exposição, Caxias do Sul - RS"
  },
  coverage: "Atendimento presencial e online em Caxias do Sul, Serra Gaúcha, todo o Brasil e Exterior.",
  workingHours: "Segunda a Sexta: 08:00 às 18:30 | Plantão de Atendimento no WhatsApp",
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Carlos+Giesen+1297+Bairro+Exposicao+Caxias+do+Sul+RS",
};

/**
 * Creates a clean direct WhatsApp click-to-chat URL with a pre-formatted message
 */
export function buildWhatsAppUrl(message?: string): string {
  const defaultText = "Olá! Gostaria de uma consultoria para minha empresa aparecer no Google e gerar contatos no WhatsApp.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/5554981164282?text=${text}`;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'fsg-jornalismo',
    title: 'Bacharelado em Jornalismo',
    institution: 'FSG - Centro Universitário da Serra Gaúcha',
    year: '2017',
    category: 'Formação Acadêmica',
    description: 'Domínio de apuração técnica, redação persuasiva, storytelling de autoridade e clareza na transmissão de valor para o leitor.',
    skills: ['Comunicação Institucional', 'Copywriting Analítico', 'Ética Editorial', 'Clareza de Proposta de Valor']
  },
  {
    id: 'google-digital-marketing',
    title: 'Certificado Profissional de Marketing Digital e Comércio Eletrônico',
    institution: 'Google (Coursera)',
    year: '2023',
    category: 'Google',
    description: 'Capacitação completa e oficial pelo Google em aquisição de clientes, funis digitais, Google Analytics 4, e-commerce e retenção.',
    skills: ['Google Ads', 'Métricas de Performance', 'Estratégia de Funil', 'Aquisição Multicanal']
  },
  {
    id: 'google-ai',
    title: 'Certificado Profissional de IA do Google',
    institution: 'Google (Coursera)',
    year: '2026',
    category: 'Google',
    description: 'Especialização de ponta em automação com inteligência artificial, engenharia de prompts e otimização para ferramentas generativas (GEO).',
    skills: ['IA Aplicada ao Marketing', 'GEO (Generative Engine Optimization)', 'Automação de Processos', 'Engenharia de Prompt']
  },
  {
    id: 'ibm-genai',
    title: 'Certificado Profissional de IBM Digital Marketing and Growth Hacking com GenAI',
    institution: 'IBM',
    year: '2025',
    category: 'IBM',
    description: 'Técnicas avançadas de growth hacking guiadas por modelos de inteligência artificial generativa para aceleração de testes e conversões.',
    skills: ['Growth Hacking', 'GenAI Corporativa', 'Otimização de Taxa de Conversão (CRO)', 'Experimentação Rápida']
  },
  {
    id: 'uc-davis-seo',
    title: 'Especialização em Otimização de Mecanismos de Busca (SEO)',
    institution: 'University of California, Davis',
    year: '2025',
    category: 'Universidade Internacional',
    description: 'Formação aprofundada em SEO técnico, arquitetura da informação, rastreamento algorítmico, autoridade de domínio e SXO (Search Experience).',
    skills: ['SEO On-Page & Off-Page', 'SEO Local para GBP', 'Schema.org JSON-LD', 'Core Web Vitals']
  },
  {
    id: 'illinois-marketing',
    title: 'Especialização em Digital Marketing: Audience, Campaigns, and Metrics',
    institution: 'University of Illinois Urbana-Champaign',
    year: '2026',
    category: 'Universidade Internacional',
    description: 'Metodologia científica para segmentação precisa de público-alvo, modelagem de atribuição de campanhas e governança de métricas.',
    skills: ['Psicologia do Consumidor', 'Gestão Estratégica de Campanhas', 'Retorno sobre Investimento (ROAS)', 'Análise Preditiva']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'site-profissional',
    title: 'Criação de Site Profissional & Landing Pages',
    headlineKeyword: 'Site profissional e site para profissionais liberais',
    badge: 'Alta Conversão Mobile-First',
    shortDescription: 'Desenvolvimento de sites ultra-rápidos e elegantes, pensados exclusivamente para transformar visitantes de celular em leads no WhatsApp.',
    targetAudience: 'Profissionais liberais (médicos, advogados, dentistas, psicólogos, consultores), prestadores de serviço e empresas locais.',
    deliverables: [
      'Design sob medida com arquitetura 100% Mobile-First',
      'Velocidade máxima de carregamento (essencial para tráfego pago)',
      'Botões e gatilhos de WhatsApp estrategicamente posicionados',
      'Estrutura SEO On-Page e indexação garantida no Google e Bing',
      'Configuração de tags analíticas de rastreamento (GA4 e Pixel)',
      'Certificado de segurança SSL e adequação à LGPD'
    ],
    conversionFocus: 'Redução drástica da taxa de rejeição e maximização de cliques diretos para o WhatsApp comercial.',
    whatsappPresetMessage: 'Olá! Gostaria de um orçamento para criar um Site Profissional para minha empresa.'
  },
  {
    id: 'google-ads',
    title: 'Campanhas de Anúncio Patrocinado no Google',
    headlineKeyword: 'Anúncio patrocinado no Google para captar clientes prontos',
    badge: 'Retorno sobre Investimento (ROI)',
    shortDescription: 'Colocamos sua marca no exato momento em que potenciais clientes estão pesquisando no Google pelos seus produtos ou serviços.',
    targetAudience: 'Empresas e profissionais que desejam receber ligações e mensagens no WhatsApp já nos primeiros dias.',
    deliverables: [
      'Pesquisa cirúrgica de palavras-chave de intenção de compra imediata',
      'Configuração de anúncios de texto atraentes na Rede de Pesquisa',
      'Campanhas de Máximo Desempenho (Performance Max) e Remarketing',
      'Negativação rigorosa de termos irrelevantes para economizar seu dinheiro',
      'Rastreamento minucioso de conversões (cliques no WhatsApp e ligações)',
      'Relatórios transparentes com foco em custo por contato e ROI'
    ],
    conversionFocus: 'Atrair tráfego qualificado que já está com a intenção ativa de contratar sua solução.',
    whatsappPresetMessage: 'Olá! Quero criar campanhas de Anúncio Patrocinado no Google para conseguir novos clientes.'
  },
  {
    id: 'google-meu-negocio',
    title: 'Cadastro e Otimização no Google Meu Negócio (GBP)',
    headlineKeyword: 'Cadastro no Google Meu Negócio e destaque no mapa local',
    badge: 'Dominância nas Buscas Locais',
    shortDescription: 'Seja a primeira opção recomendada no mapa de Caxias do Sul e na sua região quando alguém pesquisar pelo seu segmento.',
    targetAudience: 'Negócios físicos, clínicas, escritórios e profissionais que atendem em Caxias do Sul e cidades vizinhas.',
    deliverables: [
      'Criação, recuperação e verificação oficial da ficha no Google',
      'Otimização completa com categorias estratégicas e palavras-chave locais',
      'Estratégia comprovada para atração de avaliações 5 estrelas dos clientes',
      'Inclusão de fotos de alta qualidade, catálogo de serviços e horários',
      'Geolocalização precisa da sua sede no Bairro Exposição e áreas atendidas',
      'Conexão direta com botão de rota, chamada telefônica e WhatsApp'
    ],
    conversionFocus: 'Capturar o cliente de proximidade que busca no Google Maps e decide ligar ou mandar mensagem em segundos.',
    whatsappPresetMessage: 'Olá! Quero otimizar o Cadastro da minha empresa no Google Meu Negócio para aparecer no mapa.'
  },
  {
    id: 'seo-geo-sxo',
    title: 'Otimização para Motores de Busca, IAs (GEO) & SXO',
    headlineKeyword: 'Aparecer no Google organicamente e em respostas de IA',
    badge: 'Autoridade Permanente',
    shortDescription: 'Posicione sua marca tanto nos resultados orgânicos tradicionais do Google e Bing quanto nas novas buscas generativas (ChatGPT, Gemini, Perplexity).',
    targetAudience: 'Empresas que desejam construir autoridade sólida e receber contatos orgânicos sem depender 100% de tráfego pago.',
    deliverables: [
      'Marcação técnica avançada com Schema.org JSON-LD (LocalBusiness & Service)',
      'SXO (Search Experience Optimization) focado no comportamento do usuário',
      'GEO: Estruturação semântica para citações em IAs generativas',
      'Otimização dos Core Web Vitals (desempenho, estabilidade e interatividade)',
      'Auditoria de autoridade e EEAT (Experiência, Especialidade, Autoridade, Confiabilidade)',
      'Indexação rápida nos robôs do Googlebot e Bingbot'
    ],
    conversionFocus: 'Tráfego contínuo de alto valor e consolidação como autoridade de referência no seu mercado.',
    whatsappPresetMessage: 'Olá! Gostaria de entender mais sobre como fazer minha marca Aparecer no Google organicamente e nas IAs.'
  }
];

export const BUSINESS_SEGMENTS: BusinessSegmentOption[] = [
  {
    id: 'medicos-saude',
    name: 'Médicos, Dentistas e Clínicas de Saúde',
    iconName: 'Stethoscope',
    description: 'Pacientes buscam atendimento rápido, autoridade profissional e agendamento descomplicado pelo WhatsApp.',
    averageSearchesLocal: '+12.000 buscas/mês na região',
    recommendedService: 'Site Profissional + Google Meu Negócio + Google Ads',
    strategicFocus: 'Agendamento direto no WhatsApp com layout ético, limpo e de alta autoridade médica.'
  },
  {
    id: 'advogados-juridico',
    name: 'Advogados & Escritórios de Advocacia',
    iconName: 'Scale',
    description: 'Clientes com dores urgentes que pesquisam no Google por especialistas confiáveis na sua cidade.',
    averageSearchesLocal: '+8.500 buscas/mês na região',
    recommendedService: 'Site para Profissionais Liberais + Google Ads Especializado',
    strategicFocus: 'Página sóbria com foco em casos específicos e botão direto de contato preliminar.'
  },
  {
    id: 'consultores-liberais',
    name: 'Consultores, Arquitetos e Psicólogos',
    iconName: 'Briefcase',
    description: 'Profissionais autônomos que precisam transmitir credibilidade imediata para cobrar o valor justo pelo seu trabalho.',
    averageSearchesLocal: '+6.200 buscas/mês na região',
    recommendedService: 'Site Profissional Mobile-First + Posicionamento SEO',
    strategicFocus: 'Portfólio de autoridade, depoimentos reais e fluxo direto para conversa no WhatsApp.'
  },
  {
    id: 'comercio-servicos',
    name: 'Comércio Local, Oficinas e Serviços Rápidos',
    iconName: 'Store',
    description: 'Consumidores locais que estão prontos para comprar ou contratar quem estiver mais bem avaliado e próximo.',
    averageSearchesLocal: '+24.000 buscas/mês na região',
    recommendedService: 'Google Meu Negócio Otimizado + Tráfego Pago Local',
    strategicFocus: 'Destaque no mapa do Google, rotas fáceis e atendimento instantâneo.'
  },
  {
    id: 'industria-b2b',
    name: 'Indústrias, Distribuidores e Negócios B2B',
    iconName: 'Building2',
    description: 'Compradores corporativos que pesquisam fornecedores qualificados e exigem proposta comercial rápida.',
    averageSearchesLocal: '+4.800 buscas/mês no setor',
    recommendedService: 'Site Institucional Estratégico + Anúncio Patrocinado no Google B2B',
    strategicFocus: 'Formulário rápido, catálogos técnicos em PDF e WhatsApp direto do setor comercial.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Roberto Silveira',
    role: 'Médico Ortopedista',
    company: 'Consultório Particular',
    location: 'Caxias do Sul - RS',
    text: 'Após a reformulação do meu site e a gestão do Google Ads com a Bora Digital Strategy, meu WhatsApp passou a receber mensagens de novos pacientes todos os dias. A atenção com a linguagem médica e o foco em celular fizeram toda a diferença.',
    rating: 5,
    highlight: '+340% de contatos qualificados no WhatsApp',
    serviceUsed: 'Site para Profissional Liberal + Google Ads'
  },
  {
    id: 'test-2',
    name: 'Mariana Duarte',
    role: 'Sócia e Advogada',
    company: 'Duarte & Associados',
    location: 'Serra Gaúcha / Bento Gonçalves',
    text: 'Estávamos invisíveis no Google. O trabalho de otimização do Google Meu Negócio e o novo site profissional nos colocaram em primeiro lugar nas pesquisas da nossa região. O investimento se pagou logo no primeiro mês.',
    rating: 5,
    highlight: '1º Lugar no Google Meu Negócio',
    serviceUsed: 'Google Meu Negócio + SEO Técnico'
  },
  {
    id: 'test-3',
    name: 'Carlos Eduardo Meneghel',
    role: 'Diretor Comercial',
    company: 'Metalúrgica Serra Sul',
    location: 'Caxias do Sul - RS (Atendimento Brasil)',
    text: 'A precisão técnica e as certificações do Google e IBM se refletem no resultado prático. Não é apenas marketing bonitinho, é inteligência de tráfego que traz pedidos de cotação reais para nossa equipe comercial.',
    rating: 5,
    highlight: 'Mais de R$ 180 mil em orçamentos fechados via busca',
    serviceUsed: 'Anúncios Patrocinados no Google Ads'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como um site profissional ajuda minha empresa a Aparecer no Google?',
    answer: 'Um site profissional construído pela Bora Digital Strategy segue as diretrizes mais rigorosas do Google: arquitetura Mobile-First, alta velocidade de carregamento em redes 4G/5G, dados estruturados (Schema.org) e palavras-chave estratégicas da sua área. Isso faz com que os robôs do Google indexem seu negócio com prioridade e o apresentem para quem busca sua solução.',
    category: 'SEO & Site'
  },
  {
    question: 'Por que o WhatsApp é o canal principal de conversão?',
    answer: 'No Brasil, mais de 98% dos usuários de smartphone preferem tirar dúvidas e fechar negócios diretamente pelo WhatsApp. Em vez de obrigar o cliente a preencher formulários frios e esperar dias por um e-mail, direcionamos o visitante imediatamente para uma conversa humanizada, onde sua taxa de fechamento é até 5x maior.',
    category: 'Conversão'
  },
  {
    question: 'Qual a diferença entre Anúncio Patrocinado no Google (Ads) e busca orgânica?',
    answer: 'O Anúncio Patrocinado no Google (Google Ads) coloca sua empresa no topo absoluto da página de busca quase que imediatamente, pagando por cada clique qualificado recebido. Já o trabalho orgânico e o Google Meu Negócio garantem presença constante e sem custo por clique no longo prazo. O ideal para o máximo faturamento é combinar ambas as frentes.',
    category: 'Google Ads'
  },
  {
    question: 'Como funciona o Cadastro no Google Meu Negócio e quem pode fazer?',
    answer: 'Qualquer empresa, consultório ou prestador de serviços com atuação física ou atendimento local em Caxias do Sul e região pode ter sua ficha oficial. Nós cuidamos do cadastro, verificação, otimização de palavras-chave, categorização estratégica e fotos para que você apareça com destaque no Google Maps.',
    category: 'Google Meu Negócio'
  },
  {
    question: 'A Bora Digital Strategy atende apenas Caxias do Sul ou outras cidades?',
    answer: 'Nossa sede física fica no Bairro Exposição em Caxias do Sul/RS (Rua Carlos Giesen, 1297, sala 1212), mas atendemos empresas e profissionais liberais em toda a Serra Gaúcha, Porto Alegre, interior do Rio Grande do Sul, demais estados do Brasil e até clientes no exterior com reuniões ágeis e atendimento dedicado via WhatsApp e videoconferência.',
    category: 'Atendimento'
  },
  {
    question: 'Quanto tempo leva para um site profissional ficar pronto?',
    answer: 'Nosso processo é ágil e objetivo: entregamos landing pages e sites profissionais de alta performance entre 7 a 15 dias úteis, com tudo homologado, testado em smartphones e conectado diretamente ao seu WhatsApp comercial e ferramentas do Google.',
    category: 'Prazos'
  }
];

export const KEYWORD_MATRIX = [
  { keyword: 'Aparecer no Google', slug: 'aparecer-no-google', context: 'Estratégia orgânica e patrocinada para ser encontrado pelo cliente ideal.' },
  { keyword: 'Anúncio patrocinado no Google', slug: 'anuncio-patrocinado-google', context: 'Campanhas de Google Ads com alto índice de retorno e contatos diretos.' },
  { keyword: 'Site profissional', slug: 'site-profissional', context: 'Desenvolvimento ágil, responsivo e focado na melhor experiência do usuário.' },
  { keyword: 'Site para profissionais liberais', slug: 'site-para-profissionais-liberais', context: 'Autoridade e agendamentos para médicos, advogados e consultores.' },
  { keyword: 'Cadastro no Google Meu Negócio', slug: 'cadastro-google-meu-negocio', context: 'Destaque no mapa de Caxias do Sul e raio de atuação regional.' }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'opcao-1',
    optionLabel: 'OPÇÃO 1 • PRESENÇA ESSENCIAL',
    title: 'Site Institucional de Alta Conversão',
    format: 'Site Institucional de Alta Conversão',
    objective: 'Ideal para estabelecer autoridade e canal direto via WhatsApp.',
    setupPrice: 'R$ 1.799,00',
    monthlyPrice: 'R$ 247,00',
    isPopular: false,
    features: [
      {
        text: 'Hospedagem de Alta Performance',
        detail: 'Servidor seguro e otimizado para navegação rápida'
      },
      {
        text: 'Indexação Avançada',
        detail: 'Inclusão no Google Search, Bing e Inteligências Artificiais'
      },
      {
        text: 'Manutenção Mensal',
        detail: 'Inclui 1 alteração de conteúdo por mês'
      }
    ],
    whatsappMessage: 'Olá! Tenho interesse na OPÇÃO 1 • PRESENÇA ESSENCIAL (Site Institucional de Alta Conversão). Gostaria de iniciar o projeto!'
  },
  {
    id: 'opcao-2',
    optionLabel: 'OPÇÃO 2 • PRESENÇA + BUSCA LOCAL',
    title: 'Site + Google Meu Negócio (GMN)',
    format: 'Site + Google Meu Negócio (GMN)',
    objective: 'Focado em dominar as buscas locais da sua região e atrair clientes diariamente.',
    setupPrice: 'R$ 1.999,00',
    monthlyPrice: 'R$ 697,00',
    isPopular: false,
    features: [
      {
        text: 'Tudo da Opção 1',
        detail: 'Hospedagem completa e indexação no Google, Bing e IAs'
      },
      {
        text: 'Manutenção Ampliada',
        detail: '2 alterações de conteúdo por mês no site'
      },
      {
        text: 'Otimização Completa do Perfil GMN',
        detail: 'Configuração estratégica para topo de buscas locais'
      },
      {
        text: 'Gestão de Reputação & Conteúdo',
        detail: 'Respostas profissionais a avaliações, 1 postagem semanal + fotos/vídeos'
      }
    ],
    whatsappMessage: 'Olá! Tenho interesse na OPÇÃO 2 (Site + Google Meu Negócio). Gostaria de fechar essa proposta!'
  },
  {
    id: 'opcao-3',
    optionLabel: 'OPÇÃO 3 • ACELERAÇÃO MÁXIMA',
    title: 'Site + GMN + Google Ads (Anúncios)',
    format: 'Site + GMN + Google Ads (Anúncios)',
    objective: 'Estratégia completa para colocar sua empresa no topo imediato do Google.',
    setupPrice: 'R$ 2.499,00',
    monthlyPrice: 'R$ 997,00',
    isPopular: true,
    badge: 'MAIS VENDIDA',
    features: [
      {
        text: 'Tudo da Opção 2 com Suporte Ilimitado',
        detail: 'Hospedagem, indexação avançada e alterações de site ilimitadas'
      },
      {
        text: 'Gestão Intensa de GMN',
        detail: 'Otimização completa, resposta de avaliações, 2 postagens por semana + fotos/vídeos'
      },
      {
        text: 'Gestão de Anúncios Patrocinados (Google Ads)',
        detail: 'Criação e otimização de campanhas para primeiras posições'
      }
    ],
    whatsappMessage: 'Olá! Tenho interesse na OPÇÃO 3 • MAIS VENDIDA (Site + GMN + Google Ads). Gostaria de acelerar minhas vendas!'
  }
];

export const PRICING_RULES = [
  'Os valores mensais garantem gestão ativa, hospedagem de alta performance, segurança e otimizações contínuas.',
  'Os valores podem sofrer alterações conforme a demanda, porte e necessidades específicas do cliente.',
  'Na Opção 3 (Google Ads), o valor investido em mídia é definido pelo cliente e pago diretamente ao Google.',
  'Proposta válida por 15 dias.'
];

