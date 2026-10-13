export interface SeoPageData {
  slug: string;
  keyword: string;
  badge: string;
  readingTime: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
    ogTitle: string;
    ogDescription: string;
    keywords: string[];
    schemaType: 'Service' | 'LocalBusiness' | 'WebPage';
  };
  hero: {
    kicker: string;
    h1Main: string;
    h1Highlight: string;
    h1Suffix: string;
    subtitle: string;
    checkmarks: string[];
    primaryCtaText: string;
    whatsappMessage: string;
    stats: {
      value: string;
      label: string;
      sublabel: string;
    }[];
  };
  // AEO: Direct Answer Snippet for AI Engines (Perplexity, SGE, ChatGPT Search)
  aeoDirectAnswer: {
    question: string;
    answer: string;
    keyTakeaways: string[];
  };
  // Informational Search Intent: Deep algorithmic mechanics & technical explanation
  informationalIntent: {
    title: string;
    paragraphs: string[];
    corePrinciples: {
      title: string;
      explanation: string;
    }[];
  };
  // Commercial Investigation Search Intent: Comparison & Sector applications
  commercialIntent: {
    title: string;
    subtitle: string;
    comparison: {
      criterion: string;
      amateurApproach: string;
      boraDigitalStrategy: string;
    }[];
    segmentApplications: {
      segment: string;
      painPoint: string;
      solution: string;
      expectedOutcome: string;
    }[];
  };
  overview: {
    title: string;
    description: string;
    whyItMatters: string[];
  };
  features: {
    iconName: 'Search' | 'TrendingUp' | 'Smartphone' | 'UserCheck' | 'MapPin' | 'ShieldCheck' | 'Zap' | 'Bot';
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    desc: string;
    timeline?: string;
  }[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  closingCta: {
    badge: string;
    title: string;
    description: string;
    whatsappMessage: string;
  };
}

export const SEO_PAGES: Record<string, SeoPageData> = {
  // =========================================================================
  // SERVIÇO 1: CRIAÇÃO DE SITES PROFISSIONAIS & LANDING PAGES
  // =========================================================================
  'criacao-de-sites': {
    slug: 'criacao-de-sites',
    keyword: 'Criação de Sites Profissionais',
    badge: 'Engenharia Mobile-First & Alta Conversão',
    readingTime: '6 min de leitura',
    seo: {
      title: 'Criação de Sites Profissionais e Rápidos | Bora Digital Strategy',
      description: 'Criação de sites profissionais com carregamento instantâneo (< 0.4s), arquitetura mobile-first e conversão no WhatsApp. Atendimento em todo o Brasil.',
      canonicalPath: '/criacao-de-sites',
      ogTitle: 'Criação de Sites Profissionais e Rápidos | Bora Digital Strategy',
      ogDescription: 'Mais de 85% dos clientes navegam pelo celular. Desenvolvemos sites profissionais ultra-rápidos que transformam visitantes em vendas reais no WhatsApp.',
      keywords: [
        'Criação de Sites Profissionais',
        'criação de sites Caxias do Sul',
        'desenvolvimento de landing pages',
        'site mobile first rápido',
        'site profissional para empresas',
        'construção de sites de alta conversão',
        'site para WhatsApp',
        'Core Web Vitals site rápido'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Engenharia Web & Conversão • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Criação de',
      h1Highlight: 'Sites Profissionais & Landing Pages',
      h1Suffix: 'que transformam buscas no celular em clientes no seu WhatsApp',
      subtitle: 'Mais de 85% do tráfego comercial atual ocorre na tela do smartphone. Desenvolvemos sites ultra-rápidos (carregamento em menos de 0.4s), estruturados para responder à intenção exata de busca do seu cliente e conduzi-lo diretamente para fechar negócio com a sua equipe.',
      checkmarks: [
        'Velocidade Extrema (Core Web Vitals com Nota Máxima)',
        'Arquitetura Mobile-First com Ergonomia para o Polegar',
        'Indexação Completa no Google, Bing e Motores de IA',
        'Certificado de Segurança SSL e Adequação Técnica à LGPD'
      ],
      primaryCtaText: 'Solicitar Projeto de Site Profissional',
      whatsappMessage: 'Olá! Gostaria de um orçamento para a Criação de um Site Profissional de alta conversão para o meu negócio.',
      stats: [
        { value: '< 0.4s', label: 'Tempo de Carregamento', sublabel: 'Navegação instantânea no smartphone' },
        { value: '100%', label: 'Mobile-First Real', sublabel: 'Desenhado para o comportamento mobile' },
        { value: '7 a 15', label: 'Dias de Entrega', sublabel: 'Processo ágil e sem burocracia' }
      ]
    },
    aeoDirectAnswer: {
      question: 'O que é a criação de site profissional e por que ela é indispensável para negócios locais e prestadores de serviço?',
      answer: 'A criação de site profissional é o desenvolvimento de uma plataforma digital estratégica sob medida, projetada para carregar instantaneamente no celular (menos de 0.5 segundo), atender aos requisitos técnicos de indexação do Google e Bing (Core Web Vitals e Schema.org) e direcionar o usuário com clareza para a ação de contato no WhatsApp. Diferente de modelos genéricos ou redes sociais de terceiros, o site profissional é um ativo proprietário que transmite autoridade imediata e converte visitantes em clientes pagantes 24 horas por dia.',
      keyTakeaways: [
        'Propriedade digital definitiva: seu domínio e dados são 100% seus.',
        'Indexabilidade orgânica comprovada para buscas no Google e Bing.',
        'Taxa de rejeição reduzida para menos de 25% com performance ultrarrápida.',
        'Fluxo direto de conversão para o WhatsApp comercial.'
      ]
    },
    informationalIntent: {
      title: 'Como Funciona a Criação de um Site de Alta Performance na Prática?',
      paragraphs: [
        'A maioria das empresas comete o erro clássico de contratar sites baseados em templates pesados, com dezenas de plugins desnecessários que travam no smartphone do cliente. No cenário atual, os algoritmos do Googlebot e do Bingbot penalizam severamente páginas que demoram mais de 2.5 segundos para renderizar o maior elemento da tela (métrica LCP do Core Web Vitals).',
        'Nossa metodologia utiliza engenharia de código limpo e moderno. O site é planejado em camadas: primeiro a arquitetura semântica para os robôs de busca e IAs, em seguida o design ergonômico focado no alcance do polegar do usuário, e por fim uma redação comercial persuasiva (copywriting analítico) que responde em segundos às dores e objeções do seu potencial comprador.'
      ],
      corePrinciples: [
        {
          title: 'Core Web Vitals Otimizados (LCP, INP e CLS)',
          explanation: 'Garantimos pontuação verde nos testes oficiais do Google PageSpeed Insights, assegurando que seu site tenha vantagem competitiva imediata no ranking sobre concorrentes lentos.'
        },
        {
          title: 'Estruturação Semântica Schema.org JSON-LD',
          explanation: 'Incluímos marcações técnicas oficiais para que o Google Search Console, Bing e motores de IA compreendam seus serviços, telefones, endereço e horários sem ambiguidades.'
        },
        {
          title: 'Ergonomia de Polegar & Gatilhos de WhatsApp',
          explanation: 'Botões de ação posicionados na zona de toque natural do celular, com links pré-formatados que identificam o serviço exato que o cliente estava visualizando.'
        },
        {
          title: 'Conformidade com Privacidade e LGPD',
          explanation: 'Transparência, avisos de privacidade, certificado criptográfico SSL (HTTPS) e ausência de scripts invasivos que comprometam a segurança dos visitantes.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Site Genérico vs Engenharia Bora Digital Strategy',
      subtitle: 'Entenda por que economizar em uma página amadora pode custar centenas de milhares de reais em vendas perdidas.',
      comparison: [
        {
          criterion: 'Velocidade de Carregamento',
          amateurApproach: 'Lento (3 a 7 segundos). Mais de 50% dos visitantes desistem antes de abrir.',
          boraDigitalStrategy: 'Ultrarrápido (< 0.4s). Abre instantaneamente mesmo no 4G de rua.'
        },
        {
          criterion: 'Design no Celular (Mobile)',
          amateurApproach: 'Versão de computador apenas "encolhida" para celular, difícil de ler.',
          boraDigitalStrategy: 'Arquitetura 100% Mobile-First pensada exclusivamente para o uso do smartphone.'
        },
        {
          criterion: 'Objetivo de Conversão',
          amateurApproach: 'Formulários longos que ninguém preenche ou e-mails que caem no spam.',
          boraDigitalStrategy: 'Gatilho direto para WhatsApp com mensagem personalizada e botão de ligação.'
        },
        {
          criterion: 'SEO e Indexação',
          amateurApproach: 'Zero dados estruturados. O site não é encontrado nem buscando pelo nome.',
          boraDigitalStrategy: 'Marcação Schema.org completa, sitemap XML validado no Google Search Console.'
        },
        {
          criterion: 'Propriedade da Marca',
          amateurApproach: 'Preso a plataformas de assinatura com mensalidades ocultas.',
          boraDigitalStrategy: 'Domínio próprio (.com.br) registrado em nome da sua empresa.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Médicos, Dentistas e Clínicas',
          painPoint: 'Pacientes particulares procuram profissionais de confiança e não encontram referências claras.',
          solution: 'Página sóbria com currículo, tratamentos e agendamento direto com a secretária no WhatsApp.',
          expectedOutcome: 'Aumento expressivo em consultas particulares e redução do tempo gasto pela recepção.'
        },
        {
          segment: 'Advogados & Escritórios Jurídicos',
          painPoint: 'Clientes com causas urgentes precisam de segurança institucional e discrição.',
          solution: 'Layout com áreas de prática detalhadas, artigos informativos e contato ético em conformidade com a OAB.',
          expectedOutcome: 'Captação de clientes qualificados com dúvidas pontuais prontos para contratação.'
        },
        {
          segment: 'Comércio Local e Prestadores de Serviços',
          painPoint: 'Consumidores locais pesquisam na hora da necessidade e contratam quem responde mais rápido.',
          solution: 'Landing page ultra-rápida com fotos dos trabalhos realizados, avaliações e botão de orçamento.',
          expectedOutcome: 'Fluxo ininterrupto de pedidos de orçamento pelo WhatsApp todos os dias úteis.'
        },
        {
          segment: 'Indústrias e Negócios B2B',
          painPoint: 'Compradores técnicos exigem especificações detalhadas e catálogo de produtos.',
          solution: 'Catálogo institucional estruturado com download de fichas técnicas e canal comercial dedicado.',
          expectedOutcome: 'Recebimento de RFQs e cotações corporativas de alto valor agregado.'
        }
      ]
    },
    overview: {
      title: 'Seu Site é o Seu Principal Executivo de Vendas 24 Horas por Dia',
      description: 'No mercado atual, o site da sua empresa é o showroom, o cartão de visitas e o balcão de atendimento simultaneamente. Quando alguém ouve falar do seu negócio ou pesquisa no Google pelo seu serviço, o site é onde a decisão de fechar ou descartar é tomada em menos de 5 segundos.',
      whyItMatters: [
        'Primeira Impressão Incomparável: Transmita solidez, modernidade e segurança para clientes que nunca ouviram falar de você.',
        'Carregamento em Menos de 1 Segundo: Cada fração de segundo de lentidão reduz as conversões em até 20%. Nossos sites são programados em código limpo e ultra-otimizado.',
        'Copywriting Orientado à Ação: Textos objetivos que respondem às dúvidas do cliente e comprovam por que sua empresa é a melhor escolha.',
        'Indexação Completa: Já entregamos o site com sitemap, dados estruturados e validação no Google Search Console e Bing Webmaster Tools.'
      ]
    },
    features: [
      {
        iconName: 'Smartphone',
        title: 'Design Responsivo com Ergonomia Mobile',
        description: 'Elementos desenhados para a área de alcance natural do polegar, facilitando o toque nos botões de WhatsApp e ligação rápida.'
      },
      {
        iconName: 'Zap',
        title: 'Performance Core Web Vitals Superior',
        description: 'Otimização avançada de imagens em formato moderno WebP, código minificado e entrega em servidores de altíssima velocidade.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Segurança & Certificado SSL HTTPS',
        description: 'Site blindado contra vulnerabilidades e sem o aviso alarmante de "Não Seguro" nos navegadores dos seus potenciais clientes.'
      },
      {
        iconName: 'UserCheck',
        title: 'Integração Nativa com WhatsApp & Telefone',
        description: 'Links que abrem o aplicativo do WhatsApp diretamente com mensagem formatada para você identificar de onde veio o lead.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Briefing Ágil & Proposta de Valor',
        desc: 'Mapeamos seus principais produtos/serviços, seu diferencial competitivo, localização física e o perfil exato do cliente que deseja atrair.',
        timeline: 'Dia 1 a 2'
      },
      {
        step: '02',
        title: 'Estruturação do Layout & Copywriting Técnico',
        desc: 'Desenvolvimento do design exclusivo alinhado à sua identidade visual e redação de textos persuasivos focados em converter dúvidas em ação.',
        timeline: 'Dia 3 a 7'
      },
      {
        step: '03',
        title: 'Programação de Alta Performance & Testes Mobile',
        desc: 'Construção em tecnologia moderna, homologação em múltiplos smartphones (iOS e Android) e conferência da velocidade de carregamento.',
        timeline: 'Dia 8 a 11'
      },
      {
        step: '04',
        title: 'Publicação & Indexação no Google e Bing',
        desc: 'Lançamento oficial no domínio próprio (.com.br), configuração de DNS, SSL e envio imediato do sitemap para os robôs do Google e Bing.',
        timeline: 'Dia 12 a 15'
      }
    ],
    deliverables: [
      'Site institucional profissional ou Landing Page de altíssima conversão',
      'Design mobile-first ergonômico para smartphones, tablets e computadores',
      'Configuração de domínio próprio (.com.br) e hospedagem de alta performance',
      'Integração com WhatsApp, botão de chamada telefônica direta e e-mail corporativo',
      'Marcação técnica Schema.org JSON-LD (Service, LocalBusiness e Breadcrumbs)',
      'Instalação de Google Analytics 4, Meta Pixel e Google Search Console',
      'Certificado de Segurança SSL (HTTPS) e adequação às boas práticas da LGPD'
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para meu site profissional ficar pronto e no ar?',
        answer: 'Nosso processo foi planejado para eliminar lentidões e reuniões desnecessárias. Entregamos seu site completo, testado e publicado entre 7 a 15 dias úteis após o recebimento das informações básicas da sua empresa.'
      },
      {
        question: 'Eu preciso ter um domínio registrado (.com.br) antes de contratar?',
        answer: 'Não se preocupe caso ainda não tenha. Nós auxiliamos no registro oficial no Registro.br diretamente no seu nome ou no CNPJ da sua empresa, garantindo que a titularidade e a propriedade da sua marca sejam 100% suas.'
      },
      {
        question: 'O site funciona com rapidez em conexões móveis lentas de celular?',
        answer: 'Sim! Nossos sites são programados em código leve e não utilizam plugins pesados que travam celulares. Eles carregam em menos de 0.5 segundo mesmo em redes móveis 4G ou 3G com sinal oscilante.'
      },
      {
        question: 'O site já vem preparado para fazer anúncios no Google Ads e Meta Ads?',
        answer: 'Perfeitamente. Todas as páginas já são entregues com tags de conversão configuradas e tempos de carregamento instantâneos, o que melhora o Índice de Qualidade no Google Ads e reduz o custo por clique dos seus anúncios.'
      },
      {
        question: 'Qual a diferença entre criar um site com a Bora Digital Strategy e usar construtores amadores como Wix ou WordPress pesado?',
        answer: 'Construtores genéricos geram códigos poluídos, cheios de scripts que aumentam o tempo de carregamento para 4 a 8 segundos no celular, aumentando a taxa de rejeição e prejudicando o SEO. Nosso código é desenvolvido sob medida, limpo, ultra-rápido e focado exclusivamente em conversão para o WhatsApp.'
      },
      {
        question: 'O que acontece após o site ser publicado? Vocês oferecem suporte?',
        answer: 'Sim, oferecemos planos de acompanhamento contínuo, hospedagem gerenciada, backups automáticos e suporte técnico para que seu site permaneça seguro, atualizado e gerando resultados continuamente.'
      }
    ],
    closingCta: {
      badge: 'Modernize Sua Presença Digital',
      title: 'Sua empresa merece um site profissional que realmente coloque dinheiro no caixa.',
      description: 'Converse agora com nosso estrategista pelo WhatsApp e descubra como colocar seu projeto no ar com excelência técnica e velocidade recorde.',
      whatsappMessage: 'Olá! Gostaria de um orçamento para a Criação de um Site Profissional para minha empresa.'
    }
  },

  // Alias para retrocompatibilidade
  'site-profissional': {
    slug: 'site-profissional',
    keyword: 'Site Profissional',
    badge: 'Engenharia Mobile-First & Alta Conversão',
    readingTime: '6 min de leitura',
    seo: {
      title: 'Criação de Site Profissional Mobile-First & Rápido | Bora Digital Strategy',
      description: 'Criação de site profissional com carregamento instantâneo (< 0.4s), design mobile-first e conversão no WhatsApp. Atendimento global com sede em Caxias do Sul.',
      canonicalPath: '/site-profissional',
      ogTitle: 'Criação de Site Profissional Mobile-First & Rápido | Bora Digital Strategy',
      ogDescription: 'Mais de 85% dos seus clientes navegam pelo celular. Desenvolvemos sites profissionais ultra-rápidos que transformam visitantes em vendas reais.',
      keywords: [
        'Site profissional',
        'criação de site profissional',
        'desenvolvimento de sites Caxias do Sul',
        'site mobile-first rápido',
        'landing page para WhatsApp',
        'site para empresas',
        'site de alta conversão',
        'especialista em sites Google'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Engenharia Web & Performance • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Criação de',
      h1Highlight: 'Site Profissional',
      h1Suffix: 'mobile-first, ultra-rápido e focado em fechar negócios no WhatsApp',
      subtitle: 'Um site lento ou com design ultrapassado faz você perder clientes para a concorrência antes mesmo de poder apresentar seu preço. Criamos sites elegantes, que abrem em menos de 0.5 segundo e conduzem o visitante a iniciar uma conversa.',
      checkmarks: [
        'Velocidade Extrema (Core Web Vitals Nota Máxima)',
        'Botões Anatômicos para o Polegar no Celular',
        'Hospedagem Blindada e Certificado SSL Gratuito',
        'Indexação Completa no Google Search Console'
      ],
      primaryCtaText: 'Solicitar Projeto de Site Profissional',
      whatsappMessage: 'Olá! Quero criar um site profissional de alta conversão para o meu negócio. Como podemos começar?',
      stats: [
        { value: '< 0.4s', label: 'Tempo de Carregamento', sublabel: 'Navegação instantânea no celular' },
        { value: '100%', label: 'Mobile-First Real', sublabel: 'Pensado para o comportamento do smartphone' },
        { value: 'Zero', label: 'Burocracia de Entrega', sublabel: 'Site pronto em 7 a 15 dias úteis' }
      ]
    },
    aeoDirectAnswer: {
      question: 'O que define um site profissional e como ele impacta os resultados de vendas?',
      answer: 'Um site profissional é uma aplicação web construída com código limpo, velocidade de resposta abaixo de 0.5 segundo no celular, dados estruturados Schema.org para indexação nos buscadores e copy comercial orientada a solucionar a dúvida do visitante. Ele serve como autoridade central de uma marca, transformando o tráfego gerado por buscas orgânicas e anúncios em contatos diretos no WhatsApp comercial.',
      keyTakeaways: [
        'Abre instantaneamente em qualquer conexão móvel.',
        'Atende às diretrizes de indexação do Googlebot e Bingbot.',
        'Posiciona a marca como referência indiscutível no seu mercado.',
        'Gera leads qualificados diretamente no WhatsApp.'
      ]
    },
    informationalIntent: {
      title: 'Por Que o Google Prioriza Sites Mobile-First Ultrarrápidos?',
      paragraphs: [
        'Desde que o Google implementou a indexação Mobile-First (Mobile-First Indexing), o robô de busca rastreia e pontua o seu site exclusivamente pela versão em smartphones. Se a experiência móvel for truncada ou demorada, a autoridade do seu domínio é rebaixada em todos os resultados de busca.',
        'Além disso, a introdução das métricas Core Web Vitals estabeleceu limites rígidos para o tempo de resposta e estabilidade visual. Sites desenvolvidos pela Bora Digital Strategy são construídos para superar esses padrões com folga, assegurando a melhor experiência de busca (SXO) possível para seus clientes.'
      ],
      corePrinciples: [
        {
          title: 'Arquitetura Ergonômica Mobile',
          explanation: 'Distribuição dos elementos de texto e botões calculada para o alcance natural de uma mão só segurando o telefone.'
        },
        {
          title: 'Redação Persuasiva com Respostas Claras',
          explanation: 'O visitante encontra em 3 segundos o que você faz, onde atende e o botão para falar com você.'
        },
        {
          title: 'Marcação Estruturada Schema.org',
          explanation: 'Garante que os assistentes de busca e robôs entendam seu horário de funcionamento, endereço e serviços.'
        },
        {
          title: 'Segurança e Confiabilidade SSL',
          explanation: 'Criptografia total HTTPS para proteger os dados e transmitir confiança irrestrita.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Por Que Escolher a Bora Digital Strategy?',
      subtitle: 'Resultados comprovados para negócios que buscam faturamento sólido.',
      comparison: [
        {
          criterion: 'Velocidade Real no Celular',
          amateurApproach: 'Mais de 3.5 segundos de espera no carregamento.',
          boraDigitalStrategy: 'Carregamento abaixo de 0.4 segundo com nota verde nos Core Web Vitals.'
        },
        {
          criterion: 'Foco na Conversão',
          amateurApproach: 'Textos genéricos e formulários de e-mail que quase ninguém usa.',
          boraDigitalStrategy: 'Gatilho direto para WhatsApp com mensagem personalizada para atendimento rápido.'
        },
        {
          criterion: 'Adequação para IAs e Buscadores',
          amateurApproach: 'Sem marcação de dados estruturados ou sitemaps.',
          boraDigitalStrategy: 'Totalmente estruturado para citações em Google, Bing e IAs generativas.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Clínicas e Consultórios Médicos',
          painPoint: 'Pacientes particulares buscam facilidade de agendamento e clareza de especialidades.',
          solution: 'Apresentação ética de tratamentos, RQE e agendamento instantâneo via WhatsApp da secretária.',
          expectedOutcome: 'Aumento na taxa de conversão de visitantes em consultas agendadas.'
        },
        {
          segment: 'Profissionais Liberais e Consultores',
          painPoint: 'Dificuldade em demonstrar autoridade para justificar honorários adequados.',
          solution: 'Portfólio de cases, depoimentos e biografia técnica bem posicionada.',
          expectedOutcome: 'Maior percepção de valor e fechamento de contratos de maior ticket.'
        }
      ]
    },
    overview: {
      title: 'Seu Site é o Seu Principal Vendedor 24 Horas por Dia',
      description: 'No mercado atual, o site da sua empresa é o cartão de visitas, o showroom e o balcão de atendimento. Se ele demora para carregar ou é difícil de ler no celular, o cliente volta para a página do Google e clica no próximo resultado. Nós criamos ferramentas comerciais que geram faturamento contínuo.',
      whyItMatters: [
        'Primeira Impressão Incomparável: Transmita solidez, modernidade e segurança para clientes que nunca ouviram falar de você.',
        'Carregamento em Menos de 1 Segundo: Cada segundo de atraso reduz as conversões em até 20%. Nossos sites são programados em código leve e ultra-otimizado.',
        'Copywriting Orientado à Ação: Textos objetivos que respondem às principais dúvidas do cliente e mostram por que sua empresa é a melhor escolha.',
        'Indexação Completa: Já entregamos o site com sitemap, dados estruturados e validação no Google Search Console.'
      ]
    },
    features: [
      {
        iconName: 'Smartphone',
        title: 'Design Responsivo com Ergonomia Mobile',
        description: 'Elementos desenhados para a área de alcance natural do polegar, facilitando o toque nos botões de WhatsApp e ligação.'
      },
      {
        iconName: 'Zap',
        title: 'Performance Core Web Vitals',
        description: 'Otimização avançada de imagens em formato WebP, código minificado e servidores de última geração.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Segurança & Certificado SSL HTTPS',
        description: 'Site protegido contra invasões e sem o temido aviso de "Não Seguro" nos navegadores dos seus clientes.'
      },
      {
        iconName: 'UserCheck',
        title: 'Integração Nativa com WhatsApp & Telefone',
        description: 'Links que abrem o WhatsApp diretamente com mensagem personalizada para você identificar de onde veio o cliente.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Briefing Ágil & Proposta de Valor',
        desc: 'Entendemos seus principais produtos/serviços, seu diferencial competitivo e o público que você deseja atrair.',
        timeline: 'Dia 1 a 2'
      },
      {
        step: '02',
        title: 'Estruturação do Layout & Copywriting',
        desc: 'Desenvolvimento do design exclusivo, alinhado à sua identidade visual e com textos focados em conversão comercial.',
        timeline: 'Dia 3 a 7'
      },
      {
        step: '03',
        title: 'Programação de Alta Performance & Testes',
        desc: 'Construção em tecnologia moderna, homologação em múltiplos celulares e conferência da velocidade de carregamento.',
        timeline: 'Dia 8 a 11'
      },
      {
        step: '04',
        title: 'Publicação & Conexão com Google',
        desc: 'Lançamento oficial no seu domínio próprio (.com.br), configuração de DNS e envio do sitemap para indexação no Google.',
        timeline: 'Dia 12 a 15'
      }
    ],
    deliverables: [
      'Site institucional profissional ou Landing Page de alta conversão',
      'Design responsivo para smartphones, tablets e computadores',
      'Configuração de domínio próprio e hospedagem de alta velocidade',
      'Integração com WhatsApp, botão de chamada telefônica e e-mail',
      'Instalação de Google Analytics 4 e Google Search Console',
      'Certificado de Segurança SSL (HTTPS) incluso'
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para meu site profissional ficar pronto?',
        answer: 'Nosso processo foi desenhado para eliminar lentidões burocráticas. Entregamos seu site completo, testado e publicado entre 7 a 15 dias úteis após o envio das informações básicas da sua empresa.'
      },
      {
        question: 'Eu preciso ter um domínio registrado (.com.br) antes de contratar?',
        answer: 'Não se preocupe se ainda não tiver. Nós auxiliamos no registro oficial no Registro.br em seu próprio nome ou CPF/CNPJ, garantindo que a propriedade da sua marca seja 100% sua.'
      },
      {
        question: 'O site funciona bem em celulares antigos ou conexões fracas?',
        answer: 'Sim! Nossos sites são programados em código leve e não utilizam plugins pesados que travam celulares. Eles carregam rapidamente mesmo em conexões 4G ou 3G oscilantes.'
      },
      {
        question: 'O que acontece após o site ser lançado? Tem suporte?',
        answer: 'Oferecemos planos de suporte contínuo, manutenção mensal e hospedagem gerenciada para que seu site nunca fique fora do ar, desatualizado ou vulnerável a problemas técnicos.'
      }
    ],
    closingCta: {
      badge: 'Modernize Sua Imagem',
      title: 'Sua empresa merece um site profissional que realmente gere clientes.',
      description: 'Fale agora com nosso especialista pelo WhatsApp e descubra como colocar seu projeto no ar com rapidez e excelência técnica.',
      whatsappMessage: 'Olá! Gostaria de um orçamento para criar um site profissional para o meu negócio.'
    }
  },

  // =========================================================================
  // SERVIÇO 2: GESTÃO DO GOOGLE MEU NEGÓCIO (PERFIL DA EMPRESA NO GOOGLE)
  // =========================================================================
  'google-meu-negocio': {
    slug: 'google-meu-negocio',
    keyword: 'Google Meu Negócio',
    badge: 'Dominância no Google Maps Local',
    readingTime: '7 min de leitura',
    seo: {
      title: 'Gestão e Otimização do Google Meu Negócio | Bora Digital Strategy',
      description: 'Gestão do Google Meu Negócio (Perfil da Empresa no Google). Fique no Top 3 do Google Maps para receber mais ligações, rotas e clientes no WhatsApp.',
      canonicalPath: '/google-meu-negocio',
      ogTitle: 'Gestão e Otimização do Google Meu Negócio | Bora Digital Strategy',
      ogDescription: 'Mais de 80% das pesquisas locais terminam em visita ou ligação no mesmo dia. Coloque sua empresa nas 3 primeiras posições do Google Maps.',
      keywords: [
        'Google Meu Negócio',
        'gestão do perfil da empresa no Google',
        'Google Meu Negócio Caxias do Sul',
        'como colocar empresa no Google Maps',
        'otimização perfil Google Meu Negócio',
        'primeiro lugar no Google Maps',
        'avaliações Google Meu Negócio',
        'SEO local Google Maps'
      ],
      schemaType: 'LocalBusiness'
    },
    hero: {
      kicker: 'Google Maps & Busca Local • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Gestão e Otimização do',
      h1Highlight: 'Google Meu Negócio (GBP)',
      h1Suffix: 'para colocar sua empresa no Top 3 do Google Maps e gerar clientes diários',
      subtitle: 'Quando alguém pesquisa pelo seu produto ou serviço na sua cidade, os 3 primeiros lugares do mapa (Local 3-Pack) captam mais de 70% de todas as ligações, rotas do Waze e contatos no WhatsApp. Otimizamos sua ficha oficial para dominar sua região.',
      checkmarks: [
        'Criação, Verificação Oficial e Recuperação de Fichas Suspensas',
        'Otimização Completa de Categorias Primárias e Secundárias',
        'Estratégia Comprovada para Conquista de Avaliações 5 Estrelas',
        'Proteção Ativa contra Alterações Indevidas e Concorrência Desleal'
      ],
      primaryCtaText: 'Dominar o Google Maps na Minha Cidade',
      whatsappMessage: 'Olá! Gostaria de uma análise para cadastrar ou otimizar o Google Meu Negócio da minha empresa para ficar no topo do mapa.',
      stats: [
        { value: 'Top 3', label: 'Local Map Pack', sublabel: 'Onde se concentram 70% das decisões locais' },
        { value: '5x Mais', label: 'Ligações & Rotas', sublabel: 'Clientes que tomam decisão no mesmo dia' },
        { value: '100%', label: 'Ficha Verificada', sublabel: 'Proteção total da propriedade digital' }
      ]
    },
    aeoDirectAnswer: {
      question: 'O que é o Google Meu Negócio (Perfil da Empresa no Google) e como ele funciona para atrair clientes locais?',
      answer: 'O Google Meu Negócio (oficialmente chamado de Perfil da Empresa no Google ou Google Business Profile - GBP) é a ferramenta oficial do Google que gerencia a presença de negócios no Google Maps e nos resultados locais de pesquisa. O algoritmo classifica as empresas baseado em três fatores primordiais: Relevância (compatibilidade de categorias e palavras-chave), Distância (proximidade geográfica do usuário) e Proeminência (volume e nota de avaliações, consistência de dados NAP e autoridade do site vinculado). Estar no Top 3 gera ligações telefônicas, pedidos de rota e mensagens no WhatsApp sem pagar por clique.',
      keyTakeaways: [
        'Exibição privilegiada antes mesmo dos resultados orgânicos tradicionais.',
        'Cliques, rotas e ligações telefônicas 100% gratuitos.',
        'Fator decisivo para consumidores com intenção imediata de compra.',
        'Alimentação direta para assistentes de voz e inteligência artificial local.'
      ]
    },
    informationalIntent: {
      title: 'Quais os Fatores Determinantes para Chegar ao Top 3 do Google Maps?',
      paragraphs: [
        'A maioria dos empresários acredita que basta preencher o nome da empresa e esperar para aparecer no mapa. No entanto, o algoritmo do Google Maps avalia centenas de sinais técnicos e comportamentais para decidir quais 3 estabelecimentos merecem o destaque do cobiçado Local 3-Pack.',
        'Se os dados de Nome, Endereço e Telefone (NAP) estiverem divergentes em outros canais, se as categorias secundárias forem mal escolhidas ou se a empresa não receber novas avaliações com termos descritivos, o perfil é empurrado para a segunda página do mapa, onde menos de 3% dos usuários chegam.'
      ],
      corePrinciples: [
        {
          title: 'Consistência NAP (Name, Address, Phone)',
          explanation: 'Padronização impecável do nome cadastral, endereço físico com geolocalização exata e telefone em todas as menções digitais da empresa.'
        },
        {
          title: 'Estratégia de Categorias Primárias e Secundárias',
          explanation: 'A categoria primária é responsável por até 60% do peso do algoritmo de relevância local. Selecionamos a combinação exata para seu setor.'
        },
        {
          title: 'Frequência e Sentimento das Avaliações (Reviews)',
          explanation: 'Perfis que recebem avaliações constantes de clientes reais contendo palavras-chave dos serviços ganham impulso algorítmico expressivo.'
        },
        {
          title: 'Conexão e Relevância do Site Profissional',
          explanation: 'O Google Maps cruza as informações da ficha com o site oficial da empresa. Um site com SEO técnico e Schema.org fortalece o posicionamento no mapa.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Perfil Abandonado vs Gestão Especializada Bora Digital',
      subtitle: 'Descubra a diferença de impacto comercial entre ter uma ficha passiva e dominar o mapa da sua cidade.',
      comparison: [
        {
          criterion: 'Posicionamento no Mapa',
          amateurApproach: 'Invisível ou na 15ª posição, onde ninguém clica.',
          boraDigitalStrategy: 'Otimizado para o Top 3 nas pesquisas mais valiosas do seu bairro e cidade.'
        },
        {
          criterion: 'Atração de Avaliações',
          amateurApproach: 'Poucas avaliações antigas, sem resposta e vulnerável a notas baixas.',
          boraDigitalStrategy: 'Método ativo para conquistar dezenas de avaliações 5 estrelas éticas com palavras-chave.'
        },
        {
          criterion: 'Catálogo de Serviços',
          amateurApproach: 'Vazio ou incompleto, sem fotos profissionais nem preços.',
          boraDigitalStrategy: 'Catálogo completo com descrições ricas em SEO, fotos de alta qualidade e horários especiais.'
        },
        {
          criterion: 'Proteção contra Alterações',
          amateurApproach: 'Concorrentes sugerem edição no Google e alteram telefone ou endereço.',
          boraDigitalStrategy: 'Monitoramento contínuo e blindagem contra alterações maliciosas e suspensões.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Clínicas Médicas e Consultórios',
          painPoint: 'Pacientes que pesquisam "clínica perto de mim" ou "médico especialista em Caxias" escolhem a clínica mais bem avaliada.',
          solution: 'Ficha com fotos da infraestrutura, acessibilidade, estacionamento e botão direto de rota e agendamento.',
          expectedOutcome: 'Liderança nas buscas de proximidade com fluxo constante de pacientes particulares.'
        },
        {
          segment: 'Escritórios de Advocacia',
          painPoint: 'Clientes com problemas urgentes pesquisam escritórios próximos e checam a reputação antes de ligar.',
          solution: 'Otimização com categorias jurídicas precisas, endereço verificado no Bairro Exposição ou região e avaliações sérias.',
          expectedOutcome: 'Recebimento de chamadas telefônicas diretas de potenciais clientes da cidade.'
        },
        {
          segment: 'Comércio, Restaurantes e Serviços Rápidos',
          painPoint: 'Consumidores decidem onde almoçar, consertar o carro ou comprar em questão de 3 minutos no mapa.',
          solution: 'Horários atualizados em tempo real, fotos dos pratos/produtos e botão de chamada no celular.',
          expectedOutcome: 'Multiplicação de clientes entrando pela porta física e solicitando entregas no WhatsApp.'
        }
      ]
    },
    overview: {
      title: 'O Canal Mais Lucrativo para Quem Atende Clientes na Cidade e Região',
      description: 'O Google Meu Negócio (atual Google Perfil de Empresa) é a vitrine local mais poderosa do planeta. Ele aparece antes mesmo dos sites orgânicos no celular, com botões diretos de "Ligar", "Como Chegar" e "Conversar". Estar bem posicionado aqui garante clientes presenciais e solicitações instantâneas de orçamento.',
      whyItMatters: [
        'Decisão Imediata de Consumo: Quem busca no mapa precisa do serviço agora (ex: "oficina mecânica perto de mim", "advogado trabalhista perto de mim", "dentista aberto agora").',
        'Avaliações que Vendem por Você: Um perfil com dezenas de avaliações 5 estrelas destrói qualquer objeção de preço e passa segurança inabalável.',
        'Imune a Custos por Clique: Diferente dos anúncios, os cliques e chamadas gerados pelo Google Maps orgânico são 100% gratuitos.',
        'Alimentação para IAs Locais: O Gemini, Perplexity e assistentes de voz utilizam a base do Google Maps para responder onde comprar e onde contratar.'
      ]
    },
    features: [
      {
        iconName: 'MapPin',
        title: 'Auditoria de Raio Geográfico & Categorias',
        description: 'Seleção das categorias primárias e secundárias que mais destravam visibilidade para o seu nicho no Google Maps.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Verificação Oficial e Blindagem',
        description: 'Resolução de pendências de verificação oficial por vídeo/código e proteção contra concorrentes que tentam alterar seus dados.'
      },
      {
        iconName: 'Zap',
        title: 'Catálogo de Produtos, Serviços & Fotos',
        description: 'Organização visual completa com fotos profissionais, descrição de serviços e horários especiais de funcionamento.'
      },
      {
        iconName: 'UserCheck',
        title: 'Método para Atração de Avaliações 5★',
        description: 'Estratégia simples e comprovada para fazer seus clientes satisfeitos deixarem comentários positivos com palavras-chave relevantes.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Criação ou Reivindicação da Propriedade',
        desc: 'Verificamos se sua empresa possui perfis duplicados, inativos ou incorretos e tomamos posse oficial administrativa da propriedade no Google.',
        timeline: 'Dia 1 a 3'
      },
      {
        step: '02',
        title: 'Otimização Técnica dos Dados NAP & Categorias',
        desc: 'Padronização impecável de Nome, Endereço e Telefone (NAP) em conformidade total com as diretrizes do Google e escolha de categorias.',
        timeline: 'Dia 4 a 6'
      },
      {
        step: '03',
        title: 'Enriquecimento Visual, Catálogo & Palavras-Chave',
        desc: 'Inserção de fotos tratadas da sede, equipe, produtos e redação de descrições ricas em termos de busca locais mais digitados.',
        timeline: 'Dia 7 a 10'
      },
      {
        step: '04',
        title: 'Ativação do Método de Avaliações & Monitoramento',
        desc: 'Disponibilização do link direto de avaliações, orientação de respostas profissionais e monitoramento periódico de chamadas e rotas.',
        timeline: 'Acompanhamento Contínuo'
      }
    ],
    deliverables: [
      'Criação, recuperação ou verificação oficial do perfil no Google',
      'Otimização completa das categorias primárias e secundárias do setor',
      'Configuração das áreas de atendimento e raio de cobertura na cidade e região',
      'Cadastro detalhado do menu de serviços e catálogo de produtos com fotos',
      'Inserção de fotos tratadas e logotipo oficial em alta definição',
      'Link direto personalizado e roteiro prático para solicitar avaliações 5 estrelas',
      'Relatórios mensais de interações (chamadas telefônicas, rotas e visualizações)'
    ],
    faqs: [
      {
        question: 'Quem não tem endereço aberto ao público pode ter Google Meu Negócio?',
        answer: 'Sim! Prestadores de serviço que atendem na casa ou empresa do cliente (encanadores, eletricistas, consultores, advogados) podem configurar o perfil como "Área de Atendimento", sem expor publicamente o endereço residencial no mapa.'
      },
      {
        question: 'Minha empresa já tem uma ficha, mas está abandonada ou sem acesso. Vocês recuperam?',
        answer: 'Com certeza. Muitas empresas possuem fichas criadas automaticamente pelo Google ou por ex-funcionários com dados desatualizados. Nós realizamos o processo oficial de reivindicação de propriedade, recuperamos o controle total e otimizamos o perfil.'
      },
      {
        question: 'Como funciona o método para conseguir avaliações 5 estrelas de clientes?',
        answer: 'Nós geramos um link curto direto e um roteiro de mensagem pelo WhatsApp para você enviar aos clientes satisfeitos logo após o atendimento. Com nosso método, seus clientes avaliam com facilidade e usando termos que ajudam no ranqueamento.'
      },
      {
        question: 'Vale a pena ter Google Meu Negócio mesmo já tendo um site profissional?',
        answer: 'Com certeza! Na verdade, eles se complementam de forma perfeita. O Google Meu Negócio dá mais relevância local para o seu site, e um site rápido e estruturado ajuda sua ficha do mapa a subir para as primeiras posições do ranking.'
      },
      {
        question: 'Quanto tempo leva para começar a receber ligações e rotas do Google Maps?',
        answer: 'Geralmente, logo nos primeiros 7 a 15 dias após a otimização completa e verificação, o perfil já começa a registrar aumento significativo nas impressões e interações locais, acelerando conforme novas avaliações forem recebidas.'
      },
      {
        question: 'O Google cobra mensalidade para manter a empresa no Google Maps?',
        answer: 'Não. O Google Meu Negócio é uma plataforma gratuita do Google. O que você contrata conosco é o serviço técnico especializado de cadastro, verificação, posicionamento estratégico no ranking e gestão contínua para superar a concorrência.'
      }
    ],
    closingCta: {
      badge: 'Destaque Local Imediato',
      title: 'Coloque sua empresa no mapa onde seus clientes mais compram.',
      description: 'Fale com nossa equipe pelo WhatsApp para realizarmos o diagnóstico gratuito do seu perfil no Google Maps hoje mesmo.',
      whatsappMessage: 'Olá! Gostaria de uma proposta para cadastrar ou otimizar o Google Meu Negócio da minha empresa.'
    }
  },

  // Alias para retrocompatibilidade
  'cadastro-google-meu-negocio': {
    slug: 'cadastro-google-meu-negocio',
    keyword: 'Cadastro no Google Meu Negócio',
    badge: 'Dominância no Google Maps Local',
    readingTime: '7 min de leitura',
    seo: {
      title: 'Cadastro e Otimização no Google Meu Negócio (GBP) | Bora Digital Strategy',
      description: 'Cadastro, verificação e otimização do Google Meu Negócio (Google Maps). Fique em 1º lugar na sua cidade para receber mais ligações e clientes locais.',
      canonicalPath: '/cadastro-google-meu-negocio',
      ogTitle: 'Cadastro e Otimização no Google Meu Negócio (GBP) | Bora Digital Strategy',
      ogDescription: 'Mais de 80% das buscas com intenção local terminam em visita ou ligação no mesmo dia. Coloque sua empresa no 1º lugar do Google Maps.',
      keywords: [
        'Cadastro no Google Meu Negócio',
        'Google Meu Negócio Caxias do Sul',
        'como colocar empresa no Google Maps',
        'otimização perfil Google Meu Negócio',
        'GBP perfil da empresa no Google',
        'primeiro lugar no Google Maps',
        'avaliações Google Meu Negócio',
        'SEO local Google Maps'
      ],
      schemaType: 'LocalBusiness'
    },
    hero: {
      kicker: 'Google Maps & Busca Local • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Especialistas em',
      h1Highlight: 'Cadastro no Google Meu Negócio',
      h1Suffix: 'para colocar sua empresa em 1º lugar no Google Maps',
      subtitle: 'Quando alguém pesquisa pelo seu serviço ou produto perto de onde está, os 3 primeiros lugares do mapa ficam com mais de 70% de todas as ligações e rotas. Otimizamos sua ficha oficial para dominar sua cidade e região.',
      checkmarks: [
        'Verificação Oficial e Recuperação de Fichas Suspensas',
        'Estratégia para Conquista de Avaliações 5 Estrelas',
        'Categorização Precisa e Palavras-Chave Locais',
        'Blindagem contra Alterações Indevidas no Perfil'
      ],
      primaryCtaText: 'Dominar o Google Maps na Minha Cidade',
      whatsappMessage: 'Olá! Gostaria de cadastrar ou otimizar o Google Meu Negócio da minha empresa para aparecer no topo do mapa.',
      stats: [
        { value: 'Top 3', label: 'Local Map Pack', sublabel: 'Onde se concentram 70% das decisões' },
        { value: '5x Mais', label: 'Ligações & Rotas', sublabel: 'Clientes que visitam no mesmo dia' },
        { value: '100%', label: 'Ficha Verificada', sublabel: 'Proteção contra alterações indevidas' }
      ]
    },
    aeoDirectAnswer: {
      question: 'Como funciona o cadastro e a otimização da ficha da empresa no Google Meu Negócio?',
      answer: 'O cadastro no Google Meu Negócio consiste em registrar e validar oficialmente o endereço físico ou área de atuação da empresa junto ao Google. Uma vez verificada, a otimização estratégica inclui o preenchimento exato de categorias comerciais, fotos de alta qualidade, catálogo de produtos e serviços e coleta ativa de avaliações de clientes. Isso garante posicionamento de destaque nas buscas locais do Google e Google Maps.',
      keyTakeaways: [
        'Aparece antes dos sites convencionais em smartphones.',
        'Permite ligações diretas e rotas por GPS em um toque.',
        'Aumenta a confiança através de avaliações verificadas.',
        'Atrai clientes locais prontos para fechar negócio no dia.'
      ]
    },
    informationalIntent: {
      title: 'Por Que o Google Maps é o Canal Mais Rápido de Conversão Local?',
      paragraphs: [
        'Diferente de quem está apenas navegando em redes sociais, quem pesquisa "advogado trabalhista em Caxias do Sul", "clínica de raio-x aberta agora" ou "oficina mecânica no Bairro Exposição" possui urgência imediata.',
        'O Google Maps resolve essa dor instantaneamente exibindo a rota, o telefone e as notas de quem já foi atendido. Estar entre os 3 primeiros recomendados significa canalizar essa demanda diretamente para a sua empresa.'
      ],
      corePrinciples: [
        {
          title: 'Geolocalização e Proximidade',
          explanation: 'O Google prioriza estabelecimentos verificados mais próximos do usuário no momento da pesquisa.'
        },
        {
          title: 'Autoridade por Reputação e Avaliações',
          explanation: 'Comentários com 5 estrelas e palavras descritivas aumentam a probabilidade de recomendação pelo algoritmo.'
        },
        {
          title: 'Atualização Constante de Informações',
          explanation: 'Fichas que postam novidades, fotos recentes e horários em feriados recebem mais relevância na busca.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Ficha Comum vs Ficha Estratégica Bora Digital',
      subtitle: 'Como transformar uma presença passiva em uma máquina diária de novos contatos.',
      comparison: [
        {
          criterion: 'Visibilidade nas Buscas',
          amateurApproach: 'Só aparece se a pessoa digitar o nome exato da empresa.',
          boraDigitalStrategy: 'Aparece para termos genéricos do setor (ex: "dentista", "advogado", "site profissional").'
        },
        {
          criterion: 'Reputação e Confiança',
          amateurApproach: 'Menos de 3 avaliações e sem respostas da empresa.',
          boraDigitalStrategy: 'Dezenas de avaliações 5 estrelas respondidas com profissionalismo e técnica SEO.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Comércio Local e Varejo',
          painPoint: 'Consumidores locais compram no concorrente porque não sabem que a sua loja existe por perto.',
          solution: 'Ficha com fotos de fachada, catálogo de produtos e horários especiais.',
          expectedOutcome: 'Aumento imediato de fluxo de clientes na loja física.'
        }
      ]
    },
    overview: {
      title: 'O Canal Mais Lucrativo para Quem Atende Clientes na Cidade e Região',
      description: 'O Google Meu Negócio (atual Google Perfil de Empresa) é a vitrine local mais poderosa do planeta. Ele aparece antes mesmo dos sites orgânicos no celular, com botões diretos de "Ligar", "Como Chegar" e "Conversar". Estar bem posicionado aqui garante clientes presenciais e solicitações instantâneas de orçamento.',
      whyItMatters: [
        'Decisão Imediata de Consumo: Quem busca no mapa precisa do serviço agora.',
        'Avaliações que Vendem por Você: Um perfil com dezenas de avaliações 5 estrelas destrói qualquer objeção de preço.',
        'Imune a Custos por Clique: Diferente dos anúncios, os cliques e chamadas gerados pelo Google Maps orgânico são 100% gratuitos.',
        'Alimentação para IAs Locais: O Gemini e assistentes de voz utilizam a base do Google Maps para responder onde comprar e onde contratar.'
      ]
    },
    features: [
      {
        iconName: 'MapPin',
        title: 'Auditoria de Raio Geográfico & Categorias',
        description: 'Seleção das categorias primárias e secundárias que mais destravam visibilidade para o seu nicho no Google Maps.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Verificação Oficial e Blindagem',
        description: 'Resolução de pendências de código postal, verificação por vídeo oficial e proteção contra concorrentes.'
      },
      {
        iconName: 'Zap',
        title: 'Catálogo de Produtos, Serviços & Fotos',
        description: 'Organização visual completa com fotos profissionais, descrição de serviços e horários especiais.'
      },
      {
        iconName: 'UserCheck',
        title: 'Método para Atração de Avaliações 5★',
        description: 'Estratégia simples e comprovada para fazer seus clientes satisfeitos deixarem comentários positivos.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Criação ou Reivindicação da Ficha',
        desc: 'Verificamos se sua empresa já possui perfil duplicado, inativo ou incorreto e tomamos posse oficial da propriedade.',
        timeline: 'Dia 1 a 3'
      },
      {
        step: '02',
        title: 'Otimização Técnica dos Dados NAP',
        desc: 'Padronização impecável de Nome, Endereço e Telefone (NAP) em conformidade total com as diretrizes do Google.',
        timeline: 'Dia 4 a 6'
      },
      {
        step: '03',
        title: 'Enriquecimento Visual e Palavras-Chave',
        desc: 'Inserção de fotos de alta resolução da sede, equipe, produtos e redação de descrições ricas em termos de busca locais.',
        timeline: 'Dia 7 a 10'
      },
      {
        step: '04',
        title: 'Monitoramento & Gestão de Avaliações',
        desc: 'Orientação de respostas profissionais e acompanhamento periódico das métricas de chamadas e rotas no painel do Google.',
        timeline: 'Contínuo'
      }
    ],
    deliverables: [
      'Criação, recuperação ou verificação oficial do perfil no Google',
      'Otimização completa das categorias primárias e secundárias do setor',
      'Configuração das áreas de atendimento e raio de cobertura na cidade',
      'Cadastro detalhado do menu de serviços e catálogo de produtos',
      'Inserção de fotos tratadas e logotipo oficial em alta definição',
      'Link direto personalizado para solicitar avaliações 5 estrelas aos clientes'
    ],
    faqs: [
      {
        question: 'Quem não tem endereço aberto ao público pode ter Google Meu Negócio?',
        answer: 'Sim! Prestadores de serviço que atendem na casa ou empresa do cliente (encanadores, eletricistas, consultores, advogados) podem configurar o perfil como "Área de Cobertura", sem expor publicamente o endereço residencial.'
      },
      {
        question: 'Minha empresa já tem uma ficha, mas está abandonada. Vocês arrumam?',
        answer: 'Com certeza. Muitas empresas possuem fichas criadas automaticamente pelo Google com telefone errado, fotos antigas ou sem acesso administrativo. Nós recuperamos o controle, atualizamos tudo e otimizamos para o topo.'
      },
      {
        question: 'Como faço para conseguir avaliações 5 estrelas de clientes?',
        answer: 'Nós geramos um link curto direto e um roteiro de mensagem pelo WhatsApp para você enviar aos clientes satisfeitos logo após o atendimento. Com nosso método, seus clientes avaliam com facilidade e usando termos que ajudam no ranqueamento.'
      },
      {
        question: 'Vale a pena ter Google Meu Negócio mesmo já tendo um site profissional?',
        answer: 'Com certeza! Na verdade, eles se complementam de forma perfeita. O Google Meu Negócio dá mais relevância local para o seu site, e um site rápido e estruturado ajuda sua ficha do mapa a subir para as primeiras posições do ranking.'
      }
    ],
    closingCta: {
      badge: 'Destaque Local Imediato',
      title: 'Coloque sua empresa no mapa onde seus clientes mais compram.',
      description: 'Fale com nossa equipe pelo WhatsApp para realizarmos o diagnóstico do seu perfil no Google Maps hoje mesmo.',
      whatsappMessage: 'Olá! Gostaria de uma proposta para cadastrar ou otimizar o Google Meu Negócio da minha empresa.'
    }
  },

  // =========================================================================
  // SERVIÇO 3: ANÚNCIOS PATROCINADOS NO GOOGLE (GOOGLE ADS)
  // =========================================================================
  'anuncio-patrocinado-google': {
    slug: 'anuncio-patrocinado-google',
    keyword: 'Anúncio Patrocinado no Google',
    badge: 'Google Ads de Alta Conversão & ROI',
    readingTime: '7 min de leitura',
    seo: {
      title: 'Anúncio Patrocinado no Google Ads com Alto Retorno | Bora Digital Strategy',
      description: 'Gestão de Anúncios Patrocinados no Google Ads focada em custo por lead reduzido, conversão direta no WhatsApp e ROI comprovado. Atendimento global.',
      canonicalPath: '/anuncio-patrocinado-google',
      ogTitle: 'Anúncio Patrocinado no Google Ads com Alto Retorno | Bora Digital Strategy',
      ogDescription: 'Coloque sua empresa no topo absoluto do Google hoje mesmo. Campanhas lucrativas no Google Ads com foco em cliques que compram e agendam.',
      keywords: [
        'Anúncio patrocinado no Google',
        'Google Ads para empresas locais',
        'campanhas no Google Ads',
        'anúncios de links patrocinados',
        'tráfego pago para WhatsApp',
        'gestão de tráfego Caxias do Sul',
        'Google Ads ROI',
        'anúncio no topo do Google'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Tráfego Pago & ROI Real • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Campanhas de',
      h1Highlight: 'Anúncio Patrocinado no Google Ads',
      h1Suffix: 'focadas em custo por lead baixo e mais vendas no seu caixa',
      subtitle: 'Pare de queimar dinheiro com cliques curiosos e termos irrelevantes. Criamos e gerenciamos campanhas cirúrgicas no Google Ads (Rede de Pesquisa, Performance Max e Google Maps) com negativação rigorosa diária e direcionamento imediato para o seu WhatsApp comercial.',
      checkmarks: [
        'Apareça no Topo Absoluto da Pesquisa no Mesmo Dia da Ativação',
        'Negativação Diária Rigorosa de Palavras Inúteis (Zero Desperdício)',
        'Rastreamento Preciso de Cliques no WhatsApp e Ligações Telefônicas',
        'Gestão Estratégica com Profissional Certificado Oficialmente pelo Google'
      ],
      primaryCtaText: 'Quero Anunciar no Google Ads com Retorno',
      whatsappMessage: 'Olá! Gostaria de gerenciar anúncios patrocinados no Google Ads para atrair mais clientes e vendas para minha empresa.',
      stats: [
        { value: 'Top 1', label: 'Destaque Imediato', sublabel: 'Posição privilegiada no momento da busca' },
        { value: '-45%', label: 'Custo por Lead', sublabel: 'Otimização com inteligência de lances' },
        { value: '5x a 12x', label: 'Retorno Médio (ROAS)', sublabel: 'Vendas geradas sobre o investimento' }
      ]
    },
    aeoDirectAnswer: {
      question: 'O que são anúncios patrocinados no Google Ads e como eles funcionam para gerar vendas imediatas?',
      answer: 'Os anúncios patrocinados no Google Ads são inserções comerciais pagas que aparecem no topo absoluto da página de resultados de busca do Google e no Google Maps quando um usuário pesquisa por uma palavra-chave específica. O anunciante paga apenas quando uma pessoa interessada clica no anúncio (modelo Pay-Per-Click ou CPC). A exibição é imediata e atinge pessoas com intenção ativa de compra ou contratação, gerando ligações telefônicas e conversas no WhatsApp comercial desde o primeiro dia de veiculação.',
      keyTakeaways: [
        'Exibição imediata no topo do Google no mesmo dia da aprovação.',
        'Pagamento apenas por pessoas reais que clicam no anúncio.',
        'Filtro rigoroso por cidade, bairro, raio de distância e horário.',
        'Controle financeiro total com orçamento diário flexível.'
      ]
    },
    informationalIntent: {
      title: 'A Mecânica do Leilão do Google Ads: Por Que o Maior Lance Nem Sempre Vence?',
      paragraphs: [
        'Muitas empresas acreditam que o Google Ads favorece apenas quem tem mais dinheiro para gastar. Na realidade, o leilão do Google é determinado pela métrica de Ad Rank (Classificação do Anúncio), calculada pela fórmula: Lance Máximo × Índice de Qualidade (Quality Score) + Impacto Esperado das Extensões.',
        'O Índice de Qualidade avalia a relevância do anúncio para a pesquisa do usuário e a velocidade da página de destino (landing page). Quando conectamos seus anúncios a páginas ultra-rápidas construídas sob medida pela Bora Digital Strategy, seu Índice de Qualidade atinge notas 8 a 10, permitindo pagar até 50% mais barato por clique que seus concorrentes desorganizados.'
      ],
      corePrinciples: [
        {
          title: 'Índice de Qualidade (Quality Score 8/10 a 10/10)',
          explanation: 'Páginas rápidas e anúncios hiper-relevantes barateiam o custo do clique e garantem posições superiores no leilão.'
        },
        {
          title: 'Negativação Ativa de Palavras Irrelevantes',
          explanation: 'Bloqueamos termos que queimam verba sem gerar compras, como "grátis", "como fazer", "salário", "PDF", "faculdade" e cidades fora da sua área.'
        },
        {
          title: 'Inteligência de Lances (Smart Bidding com IA do Google)',
          explanation: 'Modelos de machine learning que ajustam lances em tempo real para disputar apenas os cliques com maior probabilidade de conversão.'
        },
        {
          title: 'Tracking Completo no Google Analytics 4',
          explanation: 'Monitoramento detalhado de cada evento: clique no botão do WhatsApp, início de conversa, ligação telefônica e envio de formulário.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Anunciar Sozinho vs Gestão Especializada com Certificação Google',
      subtitle: 'Entenda por que a maioria das empresas queixa-se de "queimar dinheiro" no Google quando tenta operar sem método.',
      comparison: [
        {
          criterion: 'Palavras-Chave Utilizadas',
          amateurApproach: 'Termos genéricos em correspondência ampla (ex: "advocacia", "dentista"). Metade dos cliques é desperdiçada.',
          boraDigitalStrategy: 'Termos cirúrgicos de intenção imediata de compra (ex: "advogado trabalhista urgente", "implante dentário valor").'
        },
        {
          criterion: 'Filtro de Termos Negativos',
          amateurApproach: 'Lista de palavras negativas vazia. Paga cliques de pessoas procurando empregos ou dicas gratuitas.',
          boraDigitalStrategy: 'Lista negativa com mais de 500 termos pré-bloqueados e refinamento semanal constante.'
        },
        {
          criterion: 'Página de Destino',
          amateurApproach: 'Manda o tráfego para a página inicial cheia de distrações que demora 5 segundos para abrir.',
          boraDigitalStrategy: 'Landing page dedicada de alta conversão (< 0.4s) com botão anatômico de WhatsApp.'
        },
        {
          criterion: 'Relatórios e Transparência',
          amateurApproach: 'Métricas de vaidade (apenas impressões e cliques) sem saber quantas vendas reais entraram.',
          boraDigitalStrategy: 'Foco obsessivo em custo por contato (CPA), número de leads no WhatsApp e retorno sobre o investimento (ROAS).'
        }
      ],
      segmentApplications: [
        {
          segment: 'Médicos e Profissionais da Saúde',
          painPoint: 'Necessidade de captar pacientes particulares de convênio ou procedimentos eletivos.',
          solution: 'Campanhas focadas em sintomas e especialidades, com comunicação ética e botão de agendamento.',
          expectedOutcome: 'Fluxo diário de consultas particulares preenchendo a agenda semanal.'
        },
        {
          segment: 'Advogados & Escritórios Jurídicos',
          painPoint: 'Clientes com demandas judiciais urgentes que precisam de atendimento imediato.',
          solution: 'Anúncios de pesquisa para termos de nicho (inventário, divórcio, trabalhista, empresarial) com direcionamento para o WhatsApp.',
          expectedOutcome: 'Recebimento de contatos qualificados para consulta jurídica inicial.'
        },
        {
          segment: 'Prestadores de Serviços & Assistência Técnica',
          painPoint: 'Consumidores com problemas emergenciais (eletricista, encanador, guincho, ar condicionado).',
          solution: 'Campanhas de chamada telefônica no celular com exibição prioritária no Google Maps e pesquisa.',
          expectedOutcome: 'Telefone tocando ao longo de todo o expediente comercial.'
        }
      ]
    },
    overview: {
      title: 'A Maneira Mais Rápida e Previsível de Gerar Clientes Todos os Dias',
      description: 'O Anúncio Patrocinado no Google Ads é o acelerador comercial definitivo. Enquanto o SEO orgânico constrói patrimônio de médio prazo, o anúncio patrocinado coloca seu telefone e WhatsApp para tocar hoje. Nossa gestão é orientada à margem de lucro e dinheiro no caixa, não a métricas de vaidade.',
      whyItMatters: [
        'Captura da Intenção Máxima: Seu anúncio é exibido no instante exato em que o cliente pesquisa "advogado trabalhista", "implante dentário" ou "orçamento de serviço".',
        'Controle Total de Orçamento: Você decide exatamente quanto quer investir por dia e pode escalar o orçamento conforme as vendas forem entrando.',
        'Página de Destino de Alta Conversão: De nada adianta pagar pelo clique se o site não converte. Desenvolvemos landing pages ultra-rápidas que transformam o clique em conversa no WhatsApp.',
        'Inteligência de Conversão e Tracking: Conectamos o Google Ads ao Google Analytics 4 e aos eventos de clique para saber exatamente qual palavra gerou cada venda.'
      ]
    },
    features: [
      {
        iconName: 'TrendingUp',
        title: 'Pesquisa Aprofundada de Intenção',
        description: 'Focamos apenas em palavras com alta propensão de fechamento, eliminando buscas genéricas ou puramente informativas.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Lista de Palavras Negativas Diária',
        description: 'Bloqueamos termos como "grátis", "como fazer", "pdf" e cidades fora da sua área para não gastar nem um centavo à toa.'
      },
      {
        iconName: 'Zap',
        title: 'Extensões de Anúncio Completas',
        description: 'Adicionamos botões de chamada rápida, mensagens de WhatsApp, localização física e diferenciais para ocupar mais espaço na tela.'
      },
      {
        iconName: 'Bot',
        title: 'Lances Inteligentes com IA do Google',
        description: 'Aproveitamos a tecnologia de Machine Learning do Google Ads para disputar os cliques com maior probabilidade de conversão.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Alinhamento Estratégico & Metas de Venda',
        desc: 'Compreendemos seu ticket médio, margem de lucro e capacidade de atendimento para definir a meta de custo por cliente.',
        timeline: 'Dia 1'
      },
      {
        step: '02',
        title: 'Estruturação da Conta & Landing Page',
        desc: 'Criação dos grupos de anúncios segmentados, redação de títulos persuasivos e conexão com a página de conversão.',
        timeline: 'Dia 2 a 3'
      },
      {
        step: '03',
        title: 'Lançamento & Testes A/B',
        desc: 'Ativação das campanhas com monitoramento minucioso das primeiras horas para garantir exibição impecável.',
        timeline: 'Dia 4'
      },
      {
        step: '04',
        title: 'Otimização Contínua & Escala',
        desc: 'Refinamento semanal de lances, negativação de novos termos irrelevantes e direcionamento do orçamento para as palavras mais lucrativas.',
        timeline: 'Semanal'
      }
    ],
    deliverables: [
      'Planejamento estratégico de palavras-chave comerciais de alto valor',
      'Configuração profissional de campanhas na Rede de Pesquisa e Google Maps',
      'Redação persuasiva de títulos e descrições com alta taxa de cliques (CTR)',
      'Implementação de extensões de anúncio (chamada, frases de destaque, sitelinks)',
      'Instalação de tags de rastreamento de conversão para WhatsApp e formulários',
      'Acompanhamento semanal com relatórios claros e diretos pelo WhatsApp'
    ],
    faqs: [
      {
        question: 'Quanto preciso investir no Google Ads além da gestão da agência?',
        answer: 'O valor da verba de mídia é pago diretamente ao Google via cartão de crédito ou boleto bancário. Recomendamos investimentos a partir de R$ 20 a R$ 50/dia para negócios locais, permitindo captar cliques diários e gerar um fluxo consistente de contatos.'
      },
      {
        question: 'Em quanto tempo os anúncios começam a gerar mensagens no WhatsApp?',
        answer: 'Assim que as campanhas são aprovadas pelo Google (geralmente em poucas horas após a publicação), os anúncios passam a concorrer nos leilões. É comum receber os primeiros contatos no mesmo dia ou nos primeiros dias úteis de veiculação.'
      },
      {
        question: 'Como sei que o dinheiro dos anúncios não está sendo desperdiçado?',
        answer: 'Realizamos uma rotina rígida de negativação de termos de pesquisa. Se você vende "prótese dentária", bloqueamos termos como "curso de prótese", "prótese grátis" ou "vagas de emprego". Seu anúncio só aparece para quem quer pagar pelo seu serviço.'
      },
      {
        question: 'Posso pausar ou aumentar o investimento quando quiser?',
        answer: 'Sim, você tem total flexibilidade e controle. Não há fidelidade que prenda seu orçamento de mídia: você pode aumentar a verba em épocas de maior demanda ou pausar temporariamente se sua agenda estiver cheia.'
      },
      {
        question: 'O Google Ads funciona para negócios que atuam apenas em uma cidade ou bairro?',
        answer: 'Com certeza! Essa é uma das maiores forças do Google Ads. Nós delimitamos a exibição dos anúncios estritamente para o raio geográfico que você atende (ex: apenas Caxias do Sul e cidades vizinhas ou até mesmo bairros específicos), garantindo que 100% dos cliques venham de pessoas locais.'
      },
      {
        question: 'A gestão da Bora Digital Strategy possui certificação oficial do Google?',
        answer: 'Sim. Nosso estrategista possui Certificado Profissional de Marketing Digital e E-commerce emitido oficialmente pelo Google, além de especializações internacionais em métricas e inteligência artificial.'
      }
    ],
    closingCta: {
      badge: 'Acelere Seus Resultados',
      title: 'Quer clientes ligando e chamando no WhatsApp ainda esta semana?',
      description: 'Estruture suas campanhas com quem possui certificações oficiais do Google e metodologia comprovada de conversão direta.',
      whatsappMessage: 'Olá! Gostaria de falar sobre criar ou otimizar anúncios no Google Ads para o meu negócio.'
    }
  },

  // Alias para retrocompatibilidade
  'anuncios-google-ads': {
    slug: 'anuncios-google-ads',
    keyword: 'Anúncios no Google Ads',
    badge: 'Google Ads de Alta Conversão & ROI',
    readingTime: '7 min de leitura',
    seo: {
      title: 'Anúncios no Google Ads: Gestão Profissional de Tráfego Pago | Bora Digital',
      description: 'Gestão de campanhas no Google Ads focada em retorno financeiro real, negativação diária e conversão direta no WhatsApp. Atendimento em todo o Brasil.',
      canonicalPath: '/anuncios-google-ads',
      ogTitle: 'Anúncios no Google Ads: Gestão Profissional de Tráfego Pago | Bora Digital',
      ogDescription: 'Campanhas profissionais no Google Ads para empresas e prestadores de serviço que desejam clientes diários no WhatsApp sem desperdício de verba.',
      keywords: [
        'Anúncios no Google Ads',
        'gestão de Google Ads',
        'tráfego pago Caxias do Sul',
        'anúncios patrocinados Google',
        'Google Ads para empresas',
        'campanhas de alta conversão'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Tráfego Pago & ROI Real • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Gestão de',
      h1Highlight: 'Anúncios no Google Ads',
      h1Suffix: 'para captar clientes com intenção imediata de compra',
      subtitle: 'Estruturamos campanhas profissionais na Rede de Pesquisa do Google para colocar seu telefone e WhatsApp em evidência exatamente no momento em que seu cliente mais precisa.',
      checkmarks: [
        'Exibição Imediata no Topo das Buscas',
        'Negativação Rigorosa de Palavras Inúteis',
        'Páginas de Destino Ultrarrápidas (< 0.4s)',
        'Certificação Oficial Google'
      ],
      primaryCtaText: 'Quero Anunciar no Google Ads',
      whatsappMessage: 'Olá! Gostaria de conversar sobre gestão de Anúncios no Google Ads para a minha empresa.',
      stats: [
        { value: 'Top 1', label: 'Destaque Imediato', sublabel: 'No topo da pesquisa' },
        { value: '-45%', label: 'Custo por Lead', sublabel: 'Lances inteligentes' },
        { value: '5x a 12x', label: 'ROAS Médio', sublabel: 'Retorno sobre a verba' }
      ]
    },
    aeoDirectAnswer: {
      question: 'Como os anúncios no Google Ads auxiliam empresas a gerar novos clientes com rapidez?',
      answer: 'Os anúncios no Google Ads posicionam a empresa no topo dos resultados de pesquisa no momento exato em que o usuário digita uma busca com intenção de compra. O tráfego qualificado é direcionado para uma página de conversão rápida que estimula o contato imediato via WhatsApp, permitindo gerar novos atendimentos comerciais em questão de horas.',
      keyTakeaways: [
        'Ativação rápida e clientes qualificados no mesmo dia.',
        'Pagamento exclusivo por cliques reais.',
        'Total controle financeiro do investimento diário.',
        'Resultados mensuráveis por conversões no WhatsApp.'
      ]
    },
    informationalIntent: {
      title: 'Por Que Anúncios de Busca São Mais Eficientes que Anúncios em Redes Sociais?',
      paragraphs: [
        'Em redes sociais como Instagram e Facebook, o usuário está consumindo entretenimento e é interrompido por um anúncio que ele não solicitou (tráfego de interrupção).',
        'No Google Ads, o usuário está buscando ativamente por uma solução (tráfego de intenção). Ele já sabe o que quer e está pronto para contratar quem apresentar a melhor proposta de forma ágil e transparente.'
      ],
      corePrinciples: [
        {
          title: 'Intenção Ativa de Compra',
          explanation: 'O cliente pesquisa voluntariamente pelo seu serviço.'
        },
        {
          title: 'Segmentação Geográfica Fina',
          explanation: 'Seus anúncios só aparecem para pessoas localizadas na sua área de atendimento.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial de Resultados',
      subtitle: 'Como a Bora Digital Strategy maximiza o retorno do seu investimento.',
      comparison: [
        {
          criterion: 'Otimização de Lances',
          amateurApproach: 'Lances fixos manuais sem análise de horário ou dispositivo.',
          boraDigitalStrategy: 'Ajustes automatizados por inteligência artificial focados em horários de maior taxa de fechamento.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Empresas de Serviços e Comércio Local',
          painPoint: 'Necessidade de fluxo contínuo de caixa.',
          solution: 'Campanhas hiperlocais com chamadas para ação claras.',
          expectedOutcome: 'Recebimento diário de novos contatos no WhatsApp.'
        }
      ]
    },
    overview: {
      title: 'A Maneira Mais Rápida e Previsível de Gerar Clientes Todos os Dias',
      description: 'O Anúncio Patrocinado no Google Ads é o acelerador comercial definitivo. Enquanto o SEO orgânico constrói patrimônio de médio prazo, o anúncio patrocinado coloca seu telefone e WhatsApp para tocar hoje. Nossa gestão é orientada à margem de lucro e dinheiro no caixa, não a métricas de vaidade.',
      whyItMatters: [
        'Captura da Intenção Máxima: Seu anúncio é exibido no instante exato da pesquisa.',
        'Controle Total de Orçamento: Você decide quanto quer investir por dia.',
        'Página de Destino de Alta Conversão: Landing pages ultra-rápidas que transformam cliques em mensagens.',
        'Inteligência de Conversão: Rastreamento preciso de cada lead gerado.'
      ]
    },
    features: [
      {
        iconName: 'TrendingUp',
        title: 'Pesquisa Aprofundada de Intenção',
        description: 'Focamos apenas em palavras com alta propensão de fechamento, eliminando buscas genéricas ou puramente informativas.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Lista de Palavras Negativas Diária',
        description: 'Bloqueamos termos irrelevantes para não gastar nem um centavo à toa.'
      },
      {
        iconName: 'Zap',
        title: 'Extensões de Anúncio Completas',
        description: 'Adicionamos botões de chamada rápida, mensagens de WhatsApp e localização física.'
      },
      {
        iconName: 'Bot',
        title: 'Lances Inteligentes com IA do Google',
        description: 'Aproveitamos a tecnologia de Machine Learning do Google Ads para disputar os melhores cliques.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Alinhamento Estratégico',
        desc: 'Definição de metas e verba de mídia ideal para o seu setor.',
        timeline: 'Dia 1'
      },
      {
        step: '02',
        title: 'Criação e Configuração',
        desc: 'Montagem dos grupos de anúncios e conexão com a landing page.',
        timeline: 'Dia 2 a 3'
      },
      {
        step: '03',
        title: 'Ativação das Campanhas',
        desc: 'Início da veiculação com acompanhamento em tempo real.',
        timeline: 'Dia 4'
      },
      {
        step: '04',
        title: 'Otimização Contínua',
        desc: 'Refinamento diário de termos negativos e melhoria de ROI.',
        timeline: 'Semanal'
      }
    ],
    deliverables: [
      'Planejamento estratégico de palavras-chave comerciais',
      'Configuração profissional de campanhas na Rede de Pesquisa',
      'Redação de títulos persuasivos e extensões completas',
      'Instalação de tags de rastreamento para conversões no WhatsApp',
      'Acompanhamento e relatórios semanais diretos'
    ],
    faqs: [
      {
        question: 'Quanto preciso investir por dia no Google Ads?',
        answer: 'Recomendamos a partir de R$ 20 a R$ 50 por dia para negócios locais, permitindo colher dados e gerar um fluxo regular de contatos.'
      },
      {
        question: 'Posso pausar a qualquer momento?',
        answer: 'Sim, você tem controle total. Seus anúncios podem ser pausados ou ter a verba alterada a qualquer momento sem custos adicionais.'
      }
    ],
    closingCta: {
      badge: 'Acelere Seus Resultados',
      title: 'Quer novos contatos chegando no seu WhatsApp ainda esta semana?',
      description: 'Estruture suas campanhas com quem possui certificações oficiais do Google e método comprovado.',
      whatsappMessage: 'Olá! Gostaria de falar sobre gerenciar anúncios no Google Ads para o meu negócio.'
    }
  },

  // =========================================================================
  // SERVIÇO 4: SEO, AEO (RESPOSTAS DE IA / GEO) & SXO
  // =========================================================================
  'seo-aeo-sxo': {
    slug: 'seo-aeo-sxo',
    keyword: 'SEO, AEO e SXO',
    badge: 'Autoridade Orgânica & Respostas de IA',
    readingTime: '8 min de leitura',
    seo: {
      title: 'SEO, AEO (Respostas de IA) & SXO de Alta Performance | Bora Digital',
      description: 'Especialistas em SEO técnico, AEO (Answer Engine Optimization para ChatGPT e Gemini) e SXO. Domine a primeira página orgânica sem pagar por clique.',
      canonicalPath: '/seo-aeo-sxo',
      ogTitle: 'SEO, AEO (Respostas de IA) & SXO de Alta Performance | Bora Digital',
      ogDescription: 'Posicione sua empresa no topo orgânico do Google, Bing e em respostas de IA generativa. Construa um ativo permanente de clientes e autoridade.',
      keywords: [
        'SEO AEO SXO',
        'otimização para motores de busca',
        'AEO Answer Engine Optimization',
        'GEO Generative Engine Optimization',
        'SXO Search Experience Optimization',
        'aparecer no Google organicamente',
        'consultoria SEO Caxias do Sul',
        'Schema.org JSON-LD'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Autoridade Permanente & IAs Generativas • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Estratégia Avançada de',
      h1Highlight: 'SEO, AEO & SXO',
      h1Suffix: 'para dominar o Google orgânico e ser a principal resposta nas IAs',
      subtitle: 'O comportamento de busca mudou. Além dos resultados tradicionais do Google e Bing, os usuários agora recebem respostas diretas de assistentes como ChatGPT Search, Perplexity, Gemini e Google AI Overviews. Estruturamos seu negócio para ser a referência inquestionável em todos esses canais simultaneamente.',
      checkmarks: [
        'SEO Técnico com Marcações Avançadas Schema.org JSON-LD',
        'AEO & GEO: Otimizado para Citações Oficiais em IAs Generativas',
        'SXO (Search Experience Optimization): O clique vira conversa em 30 segundos',
        'Autoridade EEAT (Experiência, Especialidade, Autoridade e Confiabilidade)'
      ],
      primaryCtaText: 'Construir Minha Autoridade Orgânica',
      whatsappMessage: 'Olá! Gostaria de uma consultoria em SEO, AEO e SXO para minha empresa dominar o Google e as respostas de IA.',
      stats: [
        { value: '+92%', label: 'Cliques na 1ª Página', sublabel: 'Quem não é visto não existe' },
        { value: 'Zero', label: 'Custo por Clique', sublabel: 'Tráfego orgânico permanente' },
        { value: '+340%', label: 'Novos Contatos', sublabel: 'Crescimento médio em 90 dias' }
      ]
    },
    aeoDirectAnswer: {
      question: 'O que são SEO, AEO e SXO e como essas três disciplinas se integram no marketing moderno?',
      answer: 'SEO (Search Engine Optimization) é o conjunto de técnicas técnicas, editoriais e estruturais para posicionar páginas nas primeiras colocações orgânicas de motores como Google e Bing. AEO (Answer Engine Optimization) e GEO são a evolução que formata o conteúdo para ser extraído e citado diretamente por inteligências artificiais generativas (como Gemini, Perplexity e ChatGPT Search). Já o SXO (Search Experience Optimization) une o SEO à experiência do usuário (UX), garantindo que após o clique, o visitante navegue com rapidez e conclua uma ação comercial imediata, como chamar no WhatsApp.',
      keyTakeaways: [
        'Tráfego contínuo e qualificado sem pagar por cada clique.',
        'Citação prioritária em resumos inteligentes gerados por IA.',
        'Experiência de navegação ergonômica com Core Web Vitals perfeitos.',
        'Ativo proprietário que valoriza a marca no longo prazo.'
      ]
    },
    informationalIntent: {
      title: 'Por Que Depender Apenas de Tráfego Pago é um Risco para o Seu Negócio?',
      paragraphs: [
        'Empresas que dependem 100% de anúncios patrocinados vivem em um leilão constante: se o custo por clique (CPC) do setor sobe ou se você pausa o investimento por qualquer motivo, seu fluxo de novos clientes zera no mesmo instante.',
        'O trabalho integrado de SEO, AEO e SXO constrói um patrimônio digital sólido. As posições orgânicas conquistadas mantêm sua empresa no topo durante meses e anos, recebendo cliques qualificados todos os dias sem custo por clique, enquanto alimentam os modelos de linguagem que agora orientam o consumo das pessoas.'
      ],
      corePrinciples: [
        {
          title: 'Arquitetura Semântica & Marcação Estruturada',
          explanation: 'Implementação de grafos semânticos JSON-LD (Service, LocalBusiness, FAQPage, HowTo e Speakable) que removem qualquer ambiguidade sobre quem você é e onde atua.'
        },
        {
          title: 'Otimização para Sintaxe Direta de IA (AEO)',
          explanation: 'Redação organizada em blocos de resposta direta de 40 a 60 palavras, ideais para o Google AI Overviews e mecanismos de busca por chat.'
        },
        {
          title: 'Search Experience Optimization (SXO)',
          explanation: 'Foco total no comportamento pós-clique: tempo de permanência alto, taxa de rejeição baixa e botões de contato no WhatsApp sempre à vista.'
        },
        {
          title: 'Diretrizes de Qualidade EEAT do Google',
          explanation: 'Validação de sinais de experiência comprovada, especialidade acadêmica, autoridade no mercado e confiabilidade institucional.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: SEO Antigo vs Metodologia Moderna SEO + AEO + SXO',
      subtitle: 'Por que velhas técnicas de repetição de palavras-chave não funcionam mais no Google moderno.',
      comparison: [
        {
          criterion: 'Abordagem de Conteúdo',
          amateurApproach: 'Textos robóticos repetindo a mesma palavra 30 vezes para tentar enganar o algoritmo.',
          boraDigitalStrategy: 'Copywriting analítico rico em semântica (LSI), respondendo com clareza à dor real do usuário.'
        },
        {
          criterion: 'Presença em Ferramentas de IA',
          amateurApproach: 'Totalmente ignorado pelo ChatGPT, Perplexity e Gemini por falta de dados estruturados.',
          boraDigitalStrategy: 'Marcação Schema.org e blocos sintéticos desenhados especificamente para citações de IA.'
        },
        {
          criterion: 'Conversão em Contatos',
          amateurApproach: 'Gera visitas que saem da página sem interagir porque o site é confuso.',
          boraDigitalStrategy: 'Engenharia SXO: layout focado no polegar com botão de WhatsApp gerando leads contínuos.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Clínicas Médicas e Consultórios Especializados',
          painPoint: 'Pacientes pesquisam sobre sintomas e procedimentos complexos antes de agendar.',
          solution: 'Páginas informativas de alta autoridade que respondem à dúvida do paciente e convidam ao agendamento.',
          expectedOutcome: 'Posicionamento como autoridade médica máxima na cidade e região.'
        },
        {
          segment: 'Advogados & Escritórios de Advocacia',
          painPoint: 'Clientes com dores jurídicas pesquisam sobre direitos, prazos e soluções legais.',
          solution: 'Artigos técnicos e páginas de serviço esclarecendo pontos práticos de forma sóbria e ética.',
          expectedOutcome: 'Recebimento de consultas de clientes com alto nível de consciência e prontos para fechar.'
        },
        {
          segment: 'Indústrias e Serviços Especializados B2B',
          painPoint: 'Compradores corporativos pesquisam fornecedores qualificados e especificações técnicas.',
          solution: 'Estruturação técnica que coloca sua empresa no radar das buscas de suprimentos e compras industriais.',
          expectedOutcome: 'Novas oportunidades comerciais com empresas de grande porte.'
        }
      ]
    },
    overview: {
      title: 'O Canal Mais Sustentável e Rentável no Longo Prazo',
      description: 'Aparecer no topo orgânico do Google e ser citado pelas novas ferramentas de IA não é vaidade: é o ativo mais valioso que sua marca pode construir na internet. Quando alguém pesquisa pelo seu serviço ou tira dúvidas com um assistente virtual, seu negócio precisa ser a primeira recomendação indiscutível.',
      whyItMatters: [
        'Intenção Ativa de Compra: Quem pesquisa no Google já está com a dor e com a decisão de contratar tomada.',
        'Autoridade Inabalável: Empresas no topo orgânico transmitem credibilidade instantânea superior a anúncios.',
        'Zero Custo por Clique: Todo o tráfego gerado é 100% gratuito e permanente.',
        'Preparado para a Era da Inteligência Artificial: Seu negócio pronto para o Perplexity, Gemini e ChatGPT Search.'
      ]
    },
    features: [
      {
        iconName: 'Search',
        title: 'Arquitetura Semântica & Palavras-Chave',
        description: 'Mapeamos os termos exatos que seus potenciais clientes digitam no momento da compra na sua cidade ou em nível nacional.'
      },
      {
        iconName: 'Bot',
        title: 'AEO & GEO para IAs Generativas',
        description: 'Dados estruturados oficiais para que robôs do Gemini, ChatGPT e Perplexity indiquem sua empresa como a melhor recomendação.'
      },
      {
        iconName: 'Smartphone',
        title: 'Mobile-First Real (< 0.4s)',
        description: 'Páginas que abrem instantaneamente em redes móveis 4G/5G, garantindo pontuação máxima nas diretrizes do Googlebot.'
      },
      {
        iconName: 'Zap',
        title: 'SXO com Foco em WhatsApp',
        description: 'Layout projetado para o polegar humano: botões de contato estrategicamente posicionados para gerar agendamentos contínuos.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico & Auditoria Técnica Completa',
        desc: 'Identificamos como o Google e o Bing enxergam seu negócio hoje, erros de rastreamento no Search Console e brechas dos concorrentes.',
        timeline: 'Semana 1'
      },
      {
        step: '02',
        title: 'Estruturação Semântica & Schema.org JSON-LD',
        desc: 'Implementação de metadados, sitemaps XML dinâmicos, dados estruturados LocalBusiness e otimização dos Core Web Vitals.',
        timeline: 'Semana 2 a 3'
      },
      {
        step: '03',
        title: 'Copywriting Persuasivo com Foco em AEO e EEAT',
        desc: 'Redação de blocos de resposta direta, FAQs estruturadas e textos orientados a resolver as intenções de busca dos usuários.',
        timeline: 'Semana 4 a 6'
      },
      {
        step: '04',
        title: 'Monitoramento & Expansão de Autoridade',
        desc: 'Acompanhamento semanal de impressões e cliques no Google Search Console e refinamento para alcançar as primeiras posições.',
        timeline: 'Acompanhamento Contínuo'
      }
    ],
    deliverables: [
      'Auditoria completa de indexação no Google Search Console e Bing Webmaster Tools',
      'Configuração de marcações Schema.org JSON-LD (Service, LocalBusiness, FAQPage, BreadcrumbList e Speakable)',
      'Otimização profunda de velocidade nos Core Web Vitals (LCP, INP e CLS)',
      'Estratégia completa de palavras-chave locais e nacionais de alta intenção comercial',
      'Estruturação de conteúdo e copywriting focado nas diretrizes de qualidade EEAT',
      'Otimização para motores de resposta de inteligência artificial (AEO / GEO)',
      'Relatórios mensais de posições, impressões orgânicas e contatos gerados'
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para uma empresa aparecer na primeira página do Google organicamente?',
        answer: 'Para estratégias orgânicas de SEO técnico e AEO, os primeiros ganhos consistentes de posicionamento costumam surgir entre 30 a 90 dias, dependendo da concorrência e autoridade prévia do domínio. Diferente de anúncios pagos que param ao pausar o cartão, os resultados orgânicos constroem um patrimônio contínuo.'
      },
      {
        question: 'O que é AEO e como a Inteligência Artificial afeta o tráfego do meu site?',
        answer: 'AEO (Answer Engine Optimization) é a otimização focada em motores de resposta inteligente como ChatGPT Search, Perplexity e Google AI Overviews. Esses sistemas não listam apenas links azuis, mas sintetizam respostas prontas citando as fontes mais confiáveis. Estruturamos seus dados para que seu negócio seja a fonte oficial recomendada.'
      },
      {
        question: 'O que significa SXO e por que ele é indispensável?',
        answer: 'SXO significa Search Experience Optimization (Otimização da Experiência de Busca). Não basta levar o usuário até o site; se a página for confusa, lenta ou não tiver um botão evidente de WhatsApp, o usuário volta ao Google em 3 segundos. O SXO garante que o visitante encontre a resposta imediata e converta em cliente.'
      },
      {
        question: 'Vocês atendem apenas empresas de Caxias do Sul ou de todo o Brasil?',
        answer: 'Temos sede física no Bairro Exposição em Caxias do Sul - RS, mas nossa consultoria e implementação de SEO atendem empresas de qualquer estado do Brasil e clientes no exterior, com reuniões ágeis online e acompanhamento contínuo.'
      },
      {
        question: 'Como comprovar que o trabalho de SEO está funcionando?',
        answer: 'Utilizamos relatórios oficiais extraídos diretamente do Google Search Console e Google Analytics 4, exibindo a evolução real no número de impressões, posições médias no ranking, cliques orgânicos e cliques no botão do WhatsApp.'
      }
    ],
    closingCta: {
      badge: 'Construa Seu Patrimônio Digital',
      title: 'Pronto para colocar sua empresa na 1ª página do Google e nas IAs?',
      description: 'Converse diretamente com nosso estrategista pelo WhatsApp e receba uma análise preliminar gratuita do potencial de buscas do seu mercado.',
      whatsappMessage: 'Olá! Li a página sobre SEO, AEO e SXO e gostaria de solicitar uma análise para colocar meu negócio no topo orgânico.'
    }
  },

  // Alias para retrocompatibilidade
  'aparecer-no-google': {
    slug: 'aparecer-no-google',
    keyword: 'Como Aparecer no Google',
    badge: 'Visibilidade Orgânica & GEO',
    readingTime: '8 min de leitura',
    seo: {
      title: 'Como Aparecer no Google: 1ª Página e IAs Generativas | Bora Digital Strategy',
      description: 'Saiba como colocar sua empresa na 1ª página do Google organicamente e em respostas de IA (GEO). Atendimento global com sede em Caxias do Sul para gerar vendas.',
      canonicalPath: '/aparecer-no-google',
      ogTitle: 'Como Aparecer no Google: 1ª Página e IAs Generativas | Bora Digital Strategy',
      ogDescription: 'Descubra como colocar sua empresa na primeira página do Google e em respostas de IA. Multiplique seus clientes, vendas e agendamentos no WhatsApp.',
      keywords: [
        'Aparecer no Google',
        'como colocar empresa no Google',
        'primeira página do Google',
        'SEO local',
        'GEO inteligência artificial',
        'otimização para Google',
        'consultoria SEO Caxias do Sul',
        'visibilidade no Google'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Visibilidade Orgânica & IAs • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Como',
      h1Highlight: 'Aparecer no Google',
      h1Suffix: 'e transformar buscas em clientes diários no seu WhatsApp',
      subtitle: 'Mais de 90% das decisões de compra e contratação começam com uma pesquisa. Estruturamos seu negócio para dominar a primeira página e ser citado pelas novas ferramentas de IA generativa (ChatGPT, Gemini e Copilot).',
      checkmarks: [
        'Indexação Técnica Avançada (Schema.org JSON-LD)',
        'Otimização GEO para IAs Generativas',
        'Conversão Direta para WhatsApp Sem Fricção'
      ],
      primaryCtaText: 'Quero Minha Empresa no Topo do Google',
      whatsappMessage: 'Olá! Gostaria de uma análise para minha empresa Aparecer no Google na primeira página e gerar contatos no WhatsApp.',
      stats: [
        { value: '+92%', label: 'Cliques na 1ª Página', sublabel: 'Quem não está visível não vende' },
        { value: '0.4s', label: 'Core Web Vitals', sublabel: 'Carregamento prioritário pelo Google' },
        { value: '+340%', label: 'Novos Contatos', sublabel: 'Média de aumento no WhatsApp' }
      ]
    },
    aeoDirectAnswer: {
      question: 'Como fazer uma empresa aparecer na primeira página do Google?',
      answer: 'Para colocar uma empresa na primeira página do Google, é necessário combinar três pilares: SEO técnico (código limpo, carregamento abaixo de 0.5s e marcação Schema.org), otimização de autoridade local no Google Meu Negócio e conteúdo de alta relevância (EEAT) que responde diretamente à intenção de busca do usuário. Para resultados imediatos, combina-se a estratégia com anúncios no Google Ads.',
      keyTakeaways: [
        'Estruturação técnica impecável com dados Schema.org.',
        'Presença sólida no mapa do Google Meu Negócio.',
        'Textos informativos claros e focados na conversão no WhatsApp.',
        'Velocidade máxima no celular aprovada nos Core Web Vitals.'
      ]
    },
    informationalIntent: {
      title: 'Por Que Estar na Primeira Página do Google Muda o Jogo do Seu Negócio?',
      paragraphs: [
        'Aparecer no Google não é vaidade: é o canal mais qualificado de vendas do mundo. Quando alguém pesquisa pelo seu serviço ou produto, essa pessoa já está com a dor, com o dinheiro na mão e pronta para contratar. Se a sua empresa não estiver no topo, seu concorrente direto ficará com essa venda.',
        'Nossa abordagem cobre tanto as buscas tradicionais do Google e Bing quanto a nova realidade das buscas generativas alimentadas por inteligência artificial.'
      ],
      corePrinciples: [
        {
          title: 'Intenção Ativa de Compra',
          explanation: 'Diferente das redes sociais, onde você interrompe o usuário, no Google o cliente está ativamente buscando contratar você.'
        },
        {
          title: 'Autoridade Imediata',
          explanation: 'Empresas que ocupam os primeiros resultados transmitem credibilidade instantânea, segurança e liderança no setor.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial de Visibilidade',
      subtitle: 'Entenda os benefícios da primeira página para a sua empresa.',
      comparison: [
        {
          criterion: 'Volume de Contatos',
          amateurApproach: 'Menos de 2 contatos por semana de clientes curiosos.',
          boraDigitalStrategy: 'Fluxo regular e previsível de leads prontos para comprar no WhatsApp.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Empresas e Profissionais em Geral',
          painPoint: 'Invisibilidade digital perante a concorrência.',
          solution: 'Posicionamento no topo das pesquisas locais e regionais.',
          expectedOutcome: 'Liderança de mercado e aumento expressivo no faturamento.'
        }
      ]
    },
    overview: {
      title: 'Por Que Estar na Primeira Página do Google Muda o Jogo do Seu Negócio?',
      description: 'Aparecer no Google não é vaidade: é o canal mais qualificado de vendas do mundo. Quando alguém pesquisa pelo seu serviço ou produto, essa pessoa já está com a dor, com o dinheiro na mão e pronta para contratar. Se a sua empresa não estiver no topo, seu concorrente direto ficará com essa venda.',
      whyItMatters: [
        'Intenção Ativa de Compra: Diferente das redes sociais, no Google o cliente está ativamente buscando contratar você.',
        'Autoridade Imediata: Empresas que ocupam os primeiros resultados transmitem credibilidade instantânea e segurança.',
        'SXO (Search Experience Optimization): Otimizamos cada detalhe do site para que o clique se transforme em conversa no WhatsApp.',
        'Pronto para as IAs Generativas (GEO): O algoritmo do Google e os motores de IA entendem quem você é e o que vende.'
      ]
    },
    features: [
      {
        iconName: 'Search',
        title: 'Arquitetura Semântica & Palavras-Chave',
        description: 'Mapeamos os termos exatos que seus potenciais clientes digitam no momento da compra na sua cidade ou em nível nacional.'
      },
      {
        iconName: 'Bot',
        title: 'GEO (Generative Engine Optimization)',
        description: 'Dados estruturados oficiais para que robôs do Gemini, ChatGPT e Perplexity indiquem sua empresa como a melhor recomendação.'
      },
      {
        iconName: 'Smartphone',
        title: 'Mobile-First Real (< 0.5s)',
        description: 'Páginas que abrem instantaneamente em redes móveis 4G/5G, garantindo pontuação máxima nas diretrizes do Googlebot.'
      },
      {
        iconName: 'Zap',
        title: 'SXO com Foco em WhatsApp',
        description: 'Layout projetado para o polegar humano: botões de contato estrategicamente posicionados para gerar agendamentos contínuos.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Diagnóstico & Auditoria Técnica',
        desc: 'Identificamos como o Google enxerga seu negócio hoje, erros de indexação e as oportunidades deixadas pelos concorrentes.',
        timeline: 'Semana 1'
      },
      {
        step: '02',
        title: 'Estruturação Semântica & Código Limpo',
        desc: 'Implementação de metadados, Schema.org LocalBusiness, sitemaps dinâmicos e otimização dos Core Web Vitals.',
        timeline: 'Semana 2'
      },
      {
        step: '03',
        title: 'Copywriting Persuasivo (EEAT)',
        desc: 'Textos orientados a resolver a dúvida do visitante com autoridade técnica, conduzindo-o diretamente para o fechamento.',
        timeline: 'Semana 3 a 4'
      },
      {
        step: '04',
        title: 'Acompanhamento & Crescimento Contínuo',
        desc: 'Monitoramento no Google Search Console e ajustes regulares para manter e expandir as posições conquistadas.',
        timeline: 'Contínuo'
      }
    ],
    deliverables: [
      'Auditoria completa de indexação no Google Search Console',
      'Configuração de marcações Schema.org JSON-LD para motores de busca e IAs',
      'Otimização total de velocidade (Core Web Vitals LCP, FID e CLS)',
      'Estratégia de palavras-chave locais e nacionais de alta intenção comercial',
      'Estruturação de conteúdo focada em EEAT (Especialidade, Experiência e Autoridade)',
      'Gatilhos de conversão direta para o WhatsApp com links pré-formatados'
    ],
    faqs: [
      {
        question: 'Quanto tempo leva para uma empresa aparecer na primeira página do Google?',
        answer: 'Para estratégias orgânicas e SEO técnico, os primeiros ganhos de posicionamento costumam surgir entre 30 a 90 dias, dependendo da concorrência do setor. Quando combinamos o site profissional com Google Ads (anúncios patrocinados), sua empresa entra no topo no mesmo dia em que as campanhas são ativadas.'
      },
      {
        question: 'Qual a diferença entre aparecer no Google de graça (orgânico) e pago (anúncio)?',
        answer: 'Na busca orgânica e no Google Maps, você não paga nada por clique recebido, gerando um ativo sólido e duradouro para sua empresa. Já nos anúncios do Google Ads, você paga por cada clique de cliente qualificado e tem garantia de exibição imediata no topo absoluto. O ideal é integrar ambas as frentes.'
      },
      {
        question: 'A Bora Digital Strategy atende apenas Caxias do Sul ou outras regiões?',
        answer: 'Temos sede física em Caxias do Sul (Bairro Exposição), mas nosso atendimento é 100% estruturado para atender empresas em qualquer cidade do Brasil e no exterior. Todo o alinhamento, desenvolvimento e acompanhamento ocorrem com agilidade direta pelo WhatsApp e reuniões online.'
      },
      {
        question: 'O que é GEO e como a Inteligência Artificial afeta as buscas no Google?',
        answer: 'GEO (Generative Engine Optimization) é a evolução do SEO para a era da inteligência artificial. Com assistentes como Gemini e ChatGPT respondendo a buscas cotidianas, nosso código inclui marcações estruturadas para que esses robôs compreendam sua autoridade e recomendem seu negócio para os usuários.'
      }
    ],
    closingCta: {
      badge: 'Comece Hoje Mesmo',
      title: 'Pronto para colocar sua empresa na 1ª página do Google?',
      description: 'Converse diretamente com nosso estrategista comercial pelo WhatsApp e receba uma análise preliminar gratuita do potencial de buscas do seu mercado.',
      whatsappMessage: 'Olá! Li a página sobre Aparecer no Google e gostaria de solicitar uma análise para colocar meu negócio no topo.'
    }
  },

  // =========================================================================
  // SERVIÇO 5: SITE PARA PROFISSIONAIS LIBERAIS (MÉDICOS, ADVOGADOS, CONSULTORES)
  // =========================================================================
  'site-para-profissionais-liberais': {
    slug: 'site-para-profissionais-liberais',
    keyword: 'Site para Profissionais Liberais',
    badge: 'Autoridade Médica, Jurídica & Consultoria',
    readingTime: '7 min de leitura',
    seo: {
      title: 'Site para Profissionais Liberais: Médicos, Advogados & Consultores | Bora Digital',
      description: 'Criação de site para profissionais liberais (médicos, dentistas, advogados, psicólogos). Autoridade, agendamento no WhatsApp e respeito às diretrizes éticas.',
      canonicalPath: '/site-para-profissionais-liberais',
      ogTitle: 'Site para Profissionais Liberais: Médicos, Advogados & Consultores | Bora Digital',
      ogDescription: 'Construa autoridade inquestionável na sua área de atuação. Sites profissionais desenhados para agendamentos rápidos de consultas e atendimentos.',
      keywords: [
        'Site para profissionais liberais',
        'site para médicos',
        'site para advogados OAB',
        'site para dentistas CRO',
        'site para psicólogos CRP',
        'agendamento de consultas WhatsApp',
        'autoridade profissional liberal',
        'marketing ético profissionais'
      ],
      schemaType: 'Service'
    },
    hero: {
      kicker: 'Autoridade & Agendamentos • Atendimento Global • Sede em Caxias do Sul',
      h1Main: 'Desenvolvimento de',
      h1Highlight: 'Site para Profissionais Liberais',
      h1Suffix: 'com autoridade máxima e agendamento direto no WhatsApp',
      subtitle: 'Médicos, advogados, dentistas, psicólogos e consultores não vendem produtos comuns: vendem confiança técnica e reputação. Criamos sites que posicionam você como a maior referência da sua especialidade e tornam o agendamento de consultas simples, rápido e ético.',
      checkmarks: [
        'Rigoroso Alinhamento com Códigos Éticos (CFM, OAB, CRO, CRP)',
        'Apresentação Elegante de Currículo, Títulos, RQE e Especialidades',
        'Fluxo de Agendamento Otimizado para Sua Secretária ou WhatsApp',
        'Estruturado para Consultas Presenciais e Telemedicina / Atendimento Online'
      ],
      primaryCtaText: 'Construir Minha Autoridade Digital',
      whatsappMessage: 'Olá! Sou profissional liberal e gostaria de conversar sobre um site profissional voltado para minha área e agendamentos.',
      stats: [
        { value: '+420%', label: 'Mais Agendamentos', sublabel: 'Pacientes e clientes diretos via busca' },
        { value: '100%', label: 'Ética Profissional', sublabel: 'Comunicação sóbria e regulamentada' },
        { value: 'Top 1', label: 'Especialista Local', sublabel: 'Ranqueamento da sua especialidade no Google' }
      ]
    },
    aeoDirectAnswer: {
      question: 'Por que profissionais liberais (médicos, advogados, consultores) precisam de um site profissional especializado?',
      answer: 'Profissionais liberais precisam de um site especializado porque pacientes e clientes qualificados pesquisam no Google para validar a credibilidade de um especialista antes de agendar uma consulta. Um site profissional estruturado apresenta títulos, áreas de atuação e credenciais (CRM, RQE, OAB), respeitando com rigor os códigos deontológicos e de publicidade profissional, além de fornecer um canal direto e seguro de agendamento via WhatsApp, reduzindo a fricção e gerando consultas particulares de alto valor.',
      keyTakeaways: [
        'Validação imediata da autoridade técnica e acadêmica.',
        'Respeito irrestrito às normas de publicidade ética de cada conselho.',
        'Facilitação do fluxo de agendamento para a recepção ou secretária.',
        'Atração de pacientes e clientes particulares qualificados.'
      ]
    },
    informationalIntent: {
      title: 'A Importância da Validação Digital da Autoridade Profissional',
      paragraphs: [
        'Mesmo quando um paciente ou cliente chega até você por indicação de um amigo ou familiar, a primeira atitude dele antes de mandar mensagem é digitar seu nome no Google. Se ele encontrar apenas um perfil incompleto ou nenhum site oficial, a percepção de valor diminui e ele pode optar por outro especialista.',
        'Nosso desenvolvimento cria um ecossistema de autoridade digital que comprova sua excelência acadêmica, explica seus procedimentos em linguagem compreensível e acolhedora e elimina todas as barreiras para o agendamento.'
      ],
      corePrinciples: [
        {
          title: 'Conformidade com Conselhos de Classe (CFM, OAB, etc.)',
          explanation: 'Garantia de ausência de sensacionalismo, promessas de resultados milagrosos ou mercantilização indevida, em total consonância com as resoluções vigentes.'
        },
        {
          title: 'Educação do Paciente e Cliente (Content Authority)',
          explanation: 'Textos claros sobre patologias, sintomas, tratamentos e áreas de prática para responder às dúvidas com profundidade técnica.'
        },
        {
          title: 'Integração de Agendamento Híbrido (Presencial + Online)',
          explanation: 'Orientação clara sobre localização física do consultório (com rotas pelo mapa) e orientações completas para teleconsultas ou atendimentos remotos.'
        }
      ]
    },
    commercialIntent: {
      title: 'Comparativo Comercial: Presença Genérica vs Autoridade Especializada',
      subtitle: 'Como a Bora Digital Strategy posiciona seu nome no mais alto escalão do seu setor.',
      comparison: [
        {
          criterion: 'Apresentação de Credenciais',
          amateurApproach: 'Currículo resumido jogado em texto simples sem destaque.',
          boraDigitalStrategy: 'Linha do tempo elegante de formação, residências, pós-graduações e publicações.'
        },
        {
          criterion: 'Canal de Agendamento',
          amateurApproach: 'Telefone fixo que vive ocupado ou formulário que demora 48h para ser respondido.',
          boraDigitalStrategy: 'Botão integrado que conecta o paciente diretamente com a secretária no WhatsApp.'
        },
        {
          criterion: 'Segurança e Privacidade',
          amateurApproach: 'Sem política de privacidade ou termos de uso.',
          boraDigitalStrategy: 'Conformidade técnica com a LGPD e certificado criptográfico SSL.'
        }
      ],
      segmentApplications: [
        {
          segment: 'Médicos e Especialistas em Saúde',
          painPoint: 'Pacientes de planos de saúde sobrecarregam a agenda e faltam consultas particulares.',
          solution: 'Página exclusiva para consultas particulares com explicação detalhada da metodologia de atendimento.',
          expectedOutcome: 'Aumento na procura por atendimentos particulares e procedimentos de alto padrão.'
        },
        {
          segment: 'Advogados & Escritórios de Advocacia',
          painPoint: 'Clientes desconfiam de contatos informais em redes sociais para assuntos delicados.',
          solution: 'Site institucional sóbrio com artigos informativos e apresentação dos sócios da banca.',
          expectedOutcome: 'Maior índice de fechamento de contratos de honorários expressivos.'
        },
        {
          segment: 'Dentistas, Psicólogos & Fisioterapeutas',
          painPoint: 'Dificuldade em explicar a diferença de qualidade dos seus tratamentos em relação a franquias populares.',
          solution: 'Apresentação refinada do espaço físico, equipamentos de última geração e abordagem individualizada.',
          expectedOutcome: 'Fidelização de pacientes que valorizam atendimento humanizado e personalizado.'
        }
      ]
    },
    overview: {
      title: 'Transforme Sua Formação e Experiência em Pacientes e Clientes Agendados',
      description: 'Anos de dedicação acadêmica, residência, pós-graduações e especializações merecem uma apresentação à altura no ambiente digital. Pacientes e clientes qualificados procuram no Google antes de agendar uma consulta. Se o seu site não transmite sofisticação e clareza, eles buscam outro profissional.',
      whyItMatters: [
        'Confiança Antes do Primeiro Contato: Apresente suas credenciais, membros de sociedades, artigos e depoimentos éticos de maneira impecável.',
        'Menos Trabalho para Sua Secretária: O site esclarece dúvidas sobre convênios, formas de atendimento e localização antes do agendamento.',
        'Atendimento Presencial e Telemedicina / Online: Estrutura pronta para captar pacientes locais no seu consultório e atendimentos remotos em qualquer estado.',
        'Conformidade Ética Absoluta: Respeitamos os códigos de ética de cada classe profissional (sem promessas sensacionalistas ou condutas vedadas).'
      ]
    },
    features: [
      {
        iconName: 'UserCheck',
        title: 'Perfil de Autoridade do Profissional',
        description: 'Destaque estratégico para sua formação, títulos de especialista (RQE/OAB/CRO) e histórico de atuação de maneira clara e elegante.'
      },
      {
        iconName: 'Zap',
        title: 'Agendamento em 1 Clique no WhatsApp',
        description: 'Botão destacado que permite ao paciente solicitar dia e horário com sua equipe em questão de segundos.'
      },
      {
        iconName: 'MapPin',
        title: 'Localização Integrada do Consultório',
        description: 'Mapa interativo com rotas fáceis pelo Waze e Google Maps, além de orientações de estacionamento e acessibilidade.'
      },
      {
        iconName: 'ShieldCheck',
        title: 'Linguagem Técnica & Acessível',
        description: 'Explicações claras sobre sintomas, tratamentos e áreas de prática para educar o paciente sem jargões confusos.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Mapeamento da Sua Especialidade',
        desc: 'Identificamos seus procedimentos-chave, público-alvo preferencial e particularidades da sua área de atuação.',
        timeline: 'Dia 1 a 2'
      },
      {
        step: '02',
        title: 'Design Sóbrio & Refinado',
        desc: 'Criação de uma identidade visual que equilibra sofisticação, acolhimento e credibilidade médica ou jurídica.',
        timeline: 'Dia 3 a 7'
      },
      {
        step: '03',
        title: 'Revisão Editorial & Ética',
        desc: 'Checagem rigorosa de todos os textos para garantir total conformidade com o conselho da sua categoria profissional.',
        timeline: 'Dia 8 a 10'
      },
      {
        step: '04',
        title: 'Publicação & Indexação da Especialidade',
        desc: 'Colocação no ar e envio ao Google para que você apareça quando buscarem pela sua especialidade na cidade.',
        timeline: 'Dia 11 a 15'
      }
    ],
    deliverables: [
      'Site institucional sob medida para profissionais liberais e clínicas',
      'Páginas dedicadas para cada especialidade ou área de atuação',
      'Seção de biografia profissional com registro em conselho (CFM, OAB, etc.)',
      'Botões de agendamento rápido com direcionamento para WhatsApp ou recepção',
      'Guia de localização com mapa do consultório e áreas atendidas',
      'Adequação completa às normas de publicidade ética profissional'
    ],
    faqs: [
      {
        question: 'O site para médicos e profissionais de saúde respeita as normas do CFM?',
        answer: 'Sim, seguimos com rigor as resoluções mais recentes de publicidade médica do CFM (incluindo número de CRM, RQE, ausência de sensacionalismo e critérios corretos para fotos e informações de tratamentos).'
      },
      {
        question: 'Para advogados, o site atende ao Provimento da OAB sobre marketing jurídico?',
        answer: 'Com certeza. O marketing jurídico exige caráter estritamente informativo e vedação a mercantilização. Nossos sites para escritórios de advocacia transmitem sobriedade, conhecimento técnico e autoridade sem infringir o Código de Ética da OAB.'
      },
      {
        question: 'O site pode integrar agendamento de consultas por telemedicina ou online?',
        answer: 'Sim! Se você atende pacientes ou clientes de outras cidades e estados via atendimento online, incluímos áreas específicas para teleconsultas com orientações claras sobre como funciona o atendimento remoto.'
      },
      {
        question: 'Quem já tem consultório estabelecido precisa de um site novo?',
        answer: 'Mesmo profissionais consagrados por indicação ganham muito com um site atualizado. Hoje, os pacientes recomendados checam seu nome no Google antes de marcar. Um site moderno valida a recomendação e atrai novos pacientes particulares de alto padrão.'
      },
      {
        question: 'Como a secretária gerencia os contatos recebidos pelo site?',
        answer: 'O botão de WhatsApp envia uma mensagem padronizada informando que o paciente encontrou o profissional pelo site e deseja informações sobre agendamento, permitindo que sua secretária responda rapidamente com os horários disponíveis.'
      }
    ],
    closingCta: {
      badge: 'Sua Autoridade Reconhecida',
      title: 'Posicione seu nome como a primeira escolha de referência na sua área.',
      description: 'Converse diretamente com nosso estrategista e veja exemplos práticos de como estruturar sua presença digital com ética e eficiência.',
      whatsappMessage: 'Olá! Sou profissional liberal e gostaria de uma proposta para desenvolver meu site de autoridade.'
    }
  }
};
