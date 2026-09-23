export interface SeoPageData {
  slug: string;
  keyword: string;
  badge: string;
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
  'aparecer-no-google': {
    slug: 'aparecer-no-google',
    keyword: 'Aparecer no Google',
    badge: 'Visibilidade Orgânica & GEO',
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
    overview: {
      title: 'Por Que Estar na Primeira Página do Google Muda o Jogo do Seu Negócio?',
      description: 'Aparecer no Google não é vaidade: é o canal mais qualificado de vendas do mundo. Quando alguém pesquisa pelo seu serviço ou produto, essa pessoa já está com a dor, com o dinheiro na mão e pronta para contratar. Se a sua empresa não estiver no topo, seu concorrente direto ficará com essa venda.',
      whyItMatters: [
        'Intenção Ativa de Compra: Diferente das redes sociais, onde você interrompe o usuário, no Google o cliente está ativamente buscando contratar você.',
        'Autoridade Imediata: Empresas que ocupam os primeiros resultados transmitem credibilidade instantânea, segurança e liderança no setor.',
        'SXO (Search Experience Optimization): Otimizamos cada detalhe do site para que o clique se transforme em mensagem enviada no WhatsApp em menos de 30 segundos.',
        'Pronto para as IAs Generativas (GEO): O algoritmo do Google e os motores de IA precisam entender sem ambiguidades quem você é, onde está e o que vende.'
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
        desc: 'Identificamos como o Google enxerga seu negócio hoje, erros de indexação e as oportunidades deixadas pelos concorrentes.'
      },
      {
        step: '02',
        title: 'Estruturação Semântica & Código Limpo',
        desc: 'Implementação de metadados, Schema.org LocalBusiness, sitemaps dinâmicos e otimização dos Core Web Vitals.'
      },
      {
        step: '03',
        title: 'Copywriting Persuasivo (EEAT)',
        desc: 'Textos orientados a resolver a dúvida do visitante com autoridade técnica, conduzindo-o diretamente para o fechamento.'
      },
      {
        step: '04',
        title: 'Acompanhamento & Crescimento Contínuo',
        desc: 'Monitoramento no Google Search Console e ajustes regulares para manter e expandir as posições conquistadas.'
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

  'anuncio-patrocinado-google': {
    slug: 'anuncio-patrocinado-google',
    keyword: 'Anúncio patrocinado no Google',
    badge: 'Google Ads de Alta Conversão & ROI',
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
      h1Highlight: 'Anúncio Patrocinado no Google',
      h1Suffix: 'focadas em custo por lead baixo e mais vendas no caixa',
      subtitle: 'Pare de queimar dinheiro com cliques curiosos. Criamos e gerenciamos anúncios no Google Ads com segmentação cirúrgica, negativação rigorosa de palavras inúteis e direcionamento imediato para o seu WhatsApp comercial.',
      checkmarks: [
        'Apareça no Topo Absoluto no Mesmo Dia',
        'Negativação Rigorosa de Palavras Inúteis (Zero Desperdício)',
        'Relatórios Transparentes de Contatos Gerados'
      ],
      primaryCtaText: 'Quero Anunciar no Google Ads com Retorno',
      whatsappMessage: 'Olá! Gostaria de gerenciar anúncios patrocinados no Google Ads para atrair mais clientes e vendas para minha empresa.',
      stats: [
        { value: 'Top 1', label: 'Destaque Imediato', sublabel: 'Posição privilegiada no momento da busca' },
        { value: '-45%', label: 'Custo por Lead', sublabel: 'Otimização com inteligência de lances' },
        { value: '5x a 12x', label: 'Retorno Médio (ROAS)', sublabel: 'Vendas geradas sobre o investimento' }
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
        desc: 'Compreendemos seu ticket médio, margem de lucro e capacidade de atendimento para definir a meta de custo por cliente.'
      },
      {
        step: '02',
        title: 'Estruturação da Conta & Landing Page',
        desc: 'Criação dos grupos de anúncios segmentados, redação de títulos persuasivos e conexão com a página de conversão.'
      },
      {
        step: '03',
        title: 'Lançamento & Testes A/B',
        desc: 'Ativação das campanhas com monitoramento minucioso das primeiras horas para garantir exibição impecável.'
      },
      {
        step: '04',
        title: 'Otimização Contínua & Escala',
        desc: 'Refinamento semanal de lances, negativação de novos termos irrelevantes e direcionamento do orçamento para as palavras mais lucrativas.'
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
      }
    ],
    closingCta: {
      badge: 'Acelere Seus Resultados',
      title: 'Quer clientes ligando e chamando no WhatsApp ainda esta semana?',
      description: 'Estruture suas campanhas com quem possui certificações oficiais do Google e metodologia comprovada de conversão direta.',
      whatsappMessage: 'Olá! Gostaria de falar sobre criar ou otimizar anúncios no Google Ads para o meu negócio.'
    }
  },

  'site-profissional': {
    slug: 'site-profissional',
    keyword: 'Site profissional',
    badge: 'Engenharia Mobile-First & Conversão',
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
        'Hospedagem Blindada e Certificado SSL Gratuito'
      ],
      primaryCtaText: 'Solicitar Projeto de Site Profissional',
      whatsappMessage: 'Olá! Quero criar um site profissional de alta conversão para o meu negócio. Como podemos começar?',
      stats: [
        { value: '< 0.4s', label: 'Tempo de Carregamento', sublabel: 'Navegação instantânea no celular' },
        { value: '100%', label: 'Mobile-First Real', sublabel: 'Pensado para o comportamento do smartphone' },
        { value: 'Zero', label: 'Burocracia de Entrega', sublabel: 'Site pronto em 7 a 15 dias úteis' }
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
        desc: 'Entendemos seus principais produtos/serviços, seu diferencial competitivo e o público que você deseja atrair.'
      },
      {
        step: '02',
        title: 'Estruturação do Layout & Copywriting',
        desc: 'Desenvolvimento do design exclusivo, alinhado à sua identidade visual e com textos focados em conversão comercial.'
      },
      {
        step: '03',
        title: 'Programação de Alta Performance & Testes',
        desc: 'Construção em tecnologia moderna, homologação em múltiplos celulares e conferência da velocidade de carregamento.'
      },
      {
        step: '04',
        title: 'Publicação & Conexão com Google',
        desc: 'Lançamento oficial no seu domínio próprio (.com.br), configuração de DNS e envio do sitemap para indexação no Google.'
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

  'site-para-profissionais-liberais': {
    slug: 'site-para-profissionais-liberais',
    keyword: 'Site para profissionais liberais',
    badge: 'Autoridade Médica, Jurídica & Consultoria',
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
      subtitle: 'Médicos, advogados, dentistas, psicólogos e consultores não vendem produtos: vendem confiança. Criamos sites que posicionam você como a maior referência da sua especialidade e tornam o agendamento de consultas simples e imediato.',
      checkmarks: [
        'Alinhamento com Diretrizes Éticas (CFM, OAB, CRO, CRP)',
        'Apresentação de Currículo, Títulos e Áreas de Atuação',
        'Fluxo de Agendamento Facilitado para Sua Secretária ou WhatsApp'
      ],
      primaryCtaText: 'Construir Minha Autoridade Digital',
      whatsappMessage: 'Olá! Sou profissional liberal e gostaria de conversar sobre um site profissional voltado para minha área e agendamentos.',
      stats: [
        { value: '+420%', label: 'Mais Agendamentos', sublabel: 'Pacientes e clientes diretos via busca' },
        { value: '100%', label: 'Ética Profissional', sublabel: 'Comunicação sóbria e regulamentada' },
        { value: 'Top 1', label: 'Especialista Local', sublabel: 'Ranqueamento da sua especialidade no Google' }
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
        desc: 'Identificamos seus procedimentos-chave, público-alvo preferencial e particularidades da sua área de atuação.'
      },
      {
        step: '02',
        title: 'Design Sóbrio & Refinado',
        desc: 'Criação de uma identidade visual que equilibra sofisticação, acolhimento e credibilidade médica ou jurídica.'
      },
      {
        step: '03',
        title: 'Revisão Editorial & Ética',
        desc: 'Checagem rigorosa de todos os textos para garantir total conformidade com o conselho da sua categoria profissional.'
      },
      {
        step: '04',
        title: 'Publicação & Indexação da Especialidade',
        desc: 'Colocação no ar e envio ao Google para que você apareça quando buscarem pela sua especialidade na cidade.'
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
        answer: 'Sim, seguimos com rigor as resoluções mais recentes de publicidade médica do CFM (incluindo número de CRM, RQE, ausência de sensacionalismo e critérios corretos para fotos e depoimentos).'
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
      }
    ],
    closingCta: {
      badge: 'Sua Autoridade Reconhecida',
      title: 'Posicione seu nome como a primeira escolha de referência na sua área.',
      description: 'Converse diretamente com nosso estrategista e veja exemplos práticos de como estruturar sua presença digital com ética e eficiência.',
      whatsappMessage: 'Olá! Sou profissional liberal e gostaria de uma proposta para desenvolver meu site de autoridade.'
    }
  },

  'cadastro-google-meu-negocio': {
    slug: 'cadastro-google-meu-negocio',
    keyword: 'Cadastro no Google Meu Negócio',
    badge: 'Dominância no Google Maps Local',
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
        'Verificação Oficial e Recuperação de Fichas',
        'Estratégia para Conquista de Avaliações 5 Estrelas',
        'Categorização Precisa e Palavras-Chave Locais'
      ],
      primaryCtaText: 'Dominar o Google Maps na Minha Cidade',
      whatsappMessage: 'Olá! Gostaria de cadastrar ou otimizar o Google Meu Negócio da minha empresa para aparecer no topo do mapa.',
      stats: [
        { value: 'Top 3', label: 'Local Map Pack', sublabel: 'Onde se concentram 70% das decisões' },
        { value: '5x Mais', label: 'Ligações & Rotas', sublabel: 'Clientes que visitam no mesmo dia' },
        { value: '100%', label: 'Ficha Verificada', sublabel: 'Proteção contra alterações indevidas' }
      ]
    },
    overview: {
      title: 'O Canal Mais Lucrativo para Quem Atende Clientes na Cidade e Região',
      description: 'O Google Meu Negócio (atual Google Perfil de Empresa) é a vitrine local mais poderosa do planeta. Ele aparece antes mesmo dos sites orgânicos no celular, com botões diretos de "Ligar", "Como Chegar" e "Conversar". Estar bem posicionado aqui garante clientes presenciais e solicitações instantâneas de orçamento.',
      whyItMatters: [
        'Decisão Imediata de Consumo: Quem busca no mapa precisa do serviço agora (ex: "oficina mecânica perto de mim", "restaurante aberto agora", "clínica de exames").',
        'Avaliações que Vendem por Você: Um perfil com dezenas de avaliações 5 estrelas destrói qualquer objeção de preço e passa segurança inabalável.',
        'Imune a Custos por Clique: Diferente dos anúncios, os cliques e chamadas gerados pelo Google Maps orgânico são 100% gratuitos.',
        'Alimentação para IAs Locais: O Gemini e assistentes de voz utilizam a base do Google Maps para responder onde comer, onde comprar e onde agendar serviços.'
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
        description: 'Resolução de pendências de código postal, verificação por vídeo oficial e proteção contra concorrentes que tentam alterar seus dados.'
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
        title: 'Criação ou Reivindicação da Ficha',
        desc: 'Verificamos se sua empresa já possui perfil duplicado, inativo ou incorreto e tomamos posse oficial da propriedade.'
      },
      {
        step: '02',
        title: 'Otimização Técnica dos Dados NAP',
        desc: 'Padronização impecável de Nome, Endereço e Telefone (NAP) em conformidade total com as diretrizes do Google.'
      },
      {
        step: '03',
        title: 'Enriquecimento Visual e Palavras-Chave',
        desc: 'Inserção de fotos de alta resolução da sede, equipe, produtos e redação de descrições ricas em termos de busca locais.'
      },
      {
        step: '04',
        title: 'Monitoramento & Gestão de Avaliações',
        desc: 'Orientação de respostas profissionais e acompanhamento periódico das métricas de chamadas e rotas no painel do Google.'
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
  }
};
