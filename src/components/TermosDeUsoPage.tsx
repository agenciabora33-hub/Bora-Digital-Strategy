import React, { useEffect } from 'react';
import {
  Scale,
  FileCheck,
  Shield,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Layers,
  ChevronRight,
  HelpCircle,
  FileText,
  BadgeCheck
} from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { Ambient3DGrid } from './3d/Ambient3DGrid';

interface TermosDeUsoPageProps {
  onBackToHome: () => void;
  onNavigateToPrivacidade: () => void;
}

export const TermosDeUsoPage: React.FC<TermosDeUsoPageProps> = ({
  onBackToHome,
  onNavigateToPrivacidade
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Termos de Uso & Condições Gerais de Serviço | Bora Digital Strategy';
  }, []);

  const lastUpdated = '13 de Outubro de 2026';

  return (
    <div className="min-h-screen bg-[#121417] text-[#F3F4F6] selection:bg-[#FA842D] selection:text-white relative overflow-hidden">
      {/* 3D Ambient Canvas */}
      <Ambient3DGrid />

      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#121417]/95 backdrop-blur-md border-b border-[#2A2E33] py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white bg-stone-900 border border-stone-700/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title="Voltar ao início"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao site</span>
            </button>

            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Bora Digital Strategy"
                width="210"
                height="40"
                className="h-8 sm:h-10 w-auto max-w-[160px] sm:max-w-[210px] object-contain cursor-pointer"
                onClick={onBackToHome}
              />
              <span className="hidden md:inline-block text-[11px] text-stone-400 font-medium border-l border-stone-700 pl-3">
                Termos de Uso & Condições Contratuais
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onNavigateToPrivacidade}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700 px-3 py-1.5 rounded-lg transition-all"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ver Políticas de Privacidade</span>
            </button>

            <a
              href={buildWhatsAppUrl("Olá! Tenho uma dúvida sobre os Termos de Uso e Contratação da Bora Digital Strategy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-3.5 py-1.5 sm:py-2 rounded-xl text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
              <span className="hidden sm:inline">WhatsApp Oficial</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-b border-gray-800/60 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-[#FA842D] border border-orange-500/30">
              <Scale className="w-3.5 h-3.5" />
              Diretrizes Google Ads · Bing Ads · Meta Ads & Marco Civil da Internet
            </span>
            <span className="text-xs text-stone-400">
              Última atualização: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Termos de Uso e Condições Gerais de Serviço
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            Bem-vindo ao website oficial da <strong className="text-white">Bora Digital Strategy</strong>.
            Estes Termos de Uso regulam o acesso e a utilização dos nossos serviços digitais, páginas institucionais,
            simuladores e canais de contato. Nossas diretrizes foram estruturadas em estrita consonância com a legislação brasileira
            (Marco Civil da Internet - Lei nº 12.965/2014, Código Civil e Código de Defesa do Consumidor) e com as políticas operacionais e publicitárias
            do <strong className="text-white">Google</strong>, da <strong className="text-white">Microsoft (Bing)</strong> e da <strong className="text-white">Meta</strong>.
          </p>

          {/* Quick Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FA842D] flex items-center justify-center mb-2">
                <BadgeCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Transparência Comercial</h3>
              <p className="text-xs text-stone-400 mt-1">Escopos claros, propostas sem pegadinhas e formalização detalhada em contrato.</p>
            </div>

            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Entregáveis & Titularidade</h3>
              <p className="text-xs text-stone-400 mt-1">O cliente detém a propriedade integral de seu domínio e código após a entrega acordada.</p>
            </div>

            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Foro & Legislação</h3>
              <p className="text-xs text-stone-400 mt-1">Relações pautadas pela boa-fé com foro na Comarca de Caxias do Sul - RS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Sumário */}
        <nav aria-label="Sumário dos Termos" className="bg-[#181B20] border border-stone-800 rounded-2xl p-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#FA842D]" />
            Sumário dos Termos de Uso
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a href="#aceitacao" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 1. Aceitação e Qualificação das Partes
            </a>
            <a href="#objeto" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 2. Objeto e Escopo dos Serviços
            </a>
            <a href="#propostas" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 3. Orçamentos, Planos e Contratação
            </a>
            <a href="#diretrizes-anuncios" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 4. Diretrizes Google, Bing e Meta
            </a>
            <a href="#obrigacoes" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 5. Direitos e Obrigações do Usuário
            </a>
            <a href="#propriedade" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 6. Propriedade Intelectual e Códigos
            </a>
            <a href="#limitacoes" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 7. Limitações de Responsabilidade
            </a>
            <a href="#foro" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 8. Legislação Aplicável e Foro Eleito
            </a>
          </div>
        </nav>

        {/* 1. Aceitação */}
        <section id="aceitacao" className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">1</span>
            Aceitação dos Termos e Identificação da Prestadora
          </h2>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Ao navegar, acessar ou utilizar as informações deste website, você declara ter lido, compreendido e concordado
              integralmente com estes <strong>Termos de Uso</strong> e com a nossa <strong>Política de Privacidade</strong>.
              Caso discorde de qualquer cláusula aqui descrita, solicitamos que não utilize os formulários ou simuladores do portal.
            </p>
            <div className="bg-stone-900/80 p-3.5 rounded-xl border border-stone-800 text-xs space-y-1">
              <span className="text-stone-400 block font-semibold">Prestadora e Titular do Serviço:</span>
              <strong className="text-white text-sm">{COMPANY_INFO.fullName}</strong>
              <p className="text-stone-300">
                Endereço da sede: {COMPANY_INFO.address.fullFormatted} • CEP {COMPANY_INFO.address.zipCode}
              </p>
              <p className="text-stone-400">
                Atendimento Oficial: WhatsApp Oficial (<code className="text-stone-300 text-[11px]">https://wa.me/message/N5NVC77KSMOKE1</code>)
                · Telefone institucional em conformidade legal: {COMPANY_INFO.phoneFormatted}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Objeto e Escopo */}
        <section id="objeto" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">2</span>
            Objeto e Escopo dos Serviços Digitais
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              A Bora Digital Strategy atua no desenvolvimento, execução técnica e consultoria de soluções estratégicas
              em marketing digital e presença online, englobando prioritariamente:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl space-y-1.5">
                <strong className="text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#FA842D]" />
                  Criação de Sites de Alta Conversão
                </strong>
                <p className="text-xs text-stone-400">
                  Desenvolvimento em código moderno, arquitetura SPA/Vite/Next, otimização Core Web Vitals, design responsivo mobile-first e integração direta de conversão para WhatsApp.
                </p>
              </div>

              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl space-y-1.5">
                <strong className="text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  SEO, AEO e SXO (Otimização para Busca e IA)
                </strong>
                <p className="text-xs text-stone-400">
                  Estruturação semântica de Schema.org JSON-LD, sitemaps automatizados, protocolo IndexNow e técnicas para citação em mecanismos de inteligência artificial (ChatGPT, Gemini, Perplexity).
                </p>
              </div>

              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl space-y-1.5">
                <strong className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Google Meu Negócio & Perfil da Empresa
                </strong>
                <p className="text-xs text-stone-400">
                  Otimização de presença física no Google Maps, consolidação de dados NAP (Nome, Endereço e Telefone), gestão de avaliações e relevância geolocalizada na Serra Gaúcha e em todo o Brasil.
                </p>
              </div>

              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl space-y-1.5">
                <strong className="text-white flex items-center gap-2">
                  <Scale className="w-4 h-4 text-cyan-400" />
                  Gestão Estratégica de Tráfego Pago
                </strong>
                <p className="text-xs text-stone-400">
                  Campanhas de pesquisa e performance no Google Ads e anúncios direcionados de alta precisão no ecossistema Meta Ads (Facebook e Instagram), com rastreamento analítico via GA4.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Propostas e Contratação */}
        <section id="propostas" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">3</span>
            Orçamentos, Planos Comerciais e Contratação
          </h2>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Para assegurar transparência absoluta, conforme exigido pelas diretrizes de proteção ao consumidor e políticas de anúncios:
            </p>
            <ul className="space-y-2 list-none text-xs text-stone-300">
              <li className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Caráter das Tabelas de Preço:</strong> Os valores e planos apresentados na página de planos
                  (<code className="text-stone-300">/planos</code>) refletem modelos referenciais vigentes. Cada cliente recebe um diagnóstico consultivo
                  personalizado com orçamento técnico formal detalhado.
                </div>
              </li>
              <li className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Validade das Propostas:</strong> Salvo disposição expressa em contrário no documento emitido,
                  propostas comerciais formais possuem validade padrão de <strong>15 (quinze) dias corridos</strong> a contar da emissão.
                </div>
              </li>
              <li className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Formalização em Contrato:</strong> O início dos serviços é formalizado mediante assinatura
                  de Contrato de Prestação de Serviços, no qual constam expressamente escopo de desenvolvimento, cronograma de entregas,
                  condições de pagamento e garantias técnicas.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Diretrizes Google, Bing e Meta */}
        <section id="diretrizes-anuncios" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Conformidade com Diretrizes Publicitárias do Google, Bing e Meta
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Em conformidade com os padrões globais de compliance do <strong>Google Ads</strong>, <strong>Microsoft Advertising (Bing)</strong>
              e <strong>Meta Ads</strong>:
            </p>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block mb-1">Ausência de Promessas Enganosas:</strong>
                A Bora Digital Strategy não faz alegações irreais, tais como "garantia de primeiro lugar absoluto e eterno no Google" ou "retorno financeiro sem investimento".
                O posicionamento orgânico e os leilões de tráfego pago dependem de fatores competitivos de mercado, qualidade do produto/serviço do cliente e diretrizes algorítmicas de terceiros.
              </div>

              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block mb-1">Relação Independente com Plataformas Globais:</strong>
                Somos prestadores de serviços especializados e homologados. A Google LLC, a Microsoft Corporation, a Meta Platforms Inc.
                e a WhatsApp LLC são corporações independentes, detentoras de seus respectivos termos de uso, marcas e tecnologias.
              </div>

              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block mb-1">Verba Direta de Anúncios:</strong>
                Nas campanhas de tráfego pago (Google Ads e Meta Ads), o valor destinado à veiculação de anúncios é pago diretamente pelo cliente às plataformas de mídia,
                salvo contratação de modalidade com gestão unificada devidamente acordada em contrato.
              </div>
            </div>
          </div>
        </section>

        {/* 5. Obrigações do Usuário */}
        <section id="obrigacoes" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Direitos e Obrigações do Usuário e Visitante
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>Ao utilizar este website e nossos canais oficiais, o usuário se compromete a:</p>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-stone-400">
              <li>Fornecer dados verídicos e precisos ao solicitar contato comercial ou diagnósticos de presença digital.</li>
              <li>Não realizar atos que comprometam a segurança física ou lógica da plataforma (ex: ataques DDoS, injeção de scripts maliciosos ou tentativas de invasão).</li>
              <li>Não efetuar web scraping massivo, extração robotizada desautorizada ou reprodução não autorizada do design institucional.</li>
              <li>Utilizar o canal de WhatsApp Oficial (<code className="text-stone-300">https://wa.me/message/N5NVC77KSMOKE1</code>) exclusivamente para comunicações legítimas de consulta, contratação ou suporte institucional.</li>
            </ul>
          </div>
        </section>

        {/* 6. Propriedade Intelectual */}
        <section id="propriedade" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">6</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Propriedade Intelectual e Titularidade de Códigos
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Todos os elementos que compõem este website — incluindo a marca comercial "Bora Digital Strategy", logotipos,
              textos autorais, matrizes semânticas de palavras-chave, elementos gráficos e código-fonte — são de titularidade
              exclusiva da Bora Digital Strategy ou utilizados sob licença válida (Lei de Direitos Autorais nº 9.610/98 e Lei de Propriedade Industrial nº 9.279/96).
            </p>
            <p className="text-stone-400 text-xs">
              <strong className="text-white">Nos projetos sob contratação:</strong> O cliente adquire a titularidade integral sobre os códigos-fonte,
              arquivos de design e materiais desenvolvidos especificamente para a sua empresa após a entrega formal e a quitação integral das obrigações contratuais pactuadas.
            </p>
          </div>
        </section>

        {/* 7. Limitações de Responsabilidade */}
        <section id="limitacoes" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">7</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Limitações de Responsabilidade e Disponibilidade
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Empregamos as melhores práticas técnicas de disponibilidade e resiliência de servidores. Não obstante, a Bora Digital Strategy
              não se responsabiliza por:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-stone-400">
              <li>Interrupções temporárias de conectividade causadas por operadoras de telecomunicações, provedores de DNS ou servidores de terceiros fora de seu controle direto.</li>
              <li>Mudanças unilaterais em regras de políticas ou algoritmos de exibição realizados por Google, Microsoft, Meta ou WhatsApp.</li>
              <li>Decisões de negócio tomadas pelo usuário exclusivamente com base em materiais informativos públicos deste website.</li>
            </ul>
          </div>
        </section>

        {/* 8. Foro e Legislação */}
        <section id="foro" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">8</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Legislação Aplicável e Foro de Eleição
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Estes Termos de Uso são regidos e interpretados segundo as leis da República Federativa do Brasil,
              notadamente o Marco Civil da Internet (Lei nº 12.965/2014), o Código de Defesa do Consumidor (Lei nº 8.078/1990)
              e a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
            </p>
            <div className="bg-stone-900 border border-stone-800 p-3.5 rounded-xl text-xs text-stone-300">
              <strong className="text-white block mb-1">Foro Competente:</strong>
              Para dirimir quaisquer controvérsias oriundas da utilização deste portal ou dos serviços prestados,
              fica eleito o <strong>Foro da Comarca de Caxias do Sul, Estado do Rio Grande do Sul</strong>,
              com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </div>
          </div>
        </section>

        {/* Bottom Switcher CTA */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Página Inicial</span>
          </button>

          <button
            type="button"
            onClick={onNavigateToPrivacidade}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <Shield className="w-4 h-4" />
            <span>Consultar Políticas de Privacidade</span>
          </button>
        </div>
      </main>

      {/* Footer Legal Padronizado */}
      <footer className="bg-black/90 border-t border-stone-900 py-8 px-4 sm:px-6 lg:px-8 text-xs text-stone-400 mt-12">
        <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-stone-800/80 pb-4">
            <div>
              <p className="font-bold text-stone-200">{COMPANY_INFO.fullName}</p>
              <p className="text-[11px] text-stone-400">
                Sede física: {COMPANY_INFO.address.fullFormatted} • CEP {COMPANY_INFO.address.zipCode}
              </p>
            </div>
            <div className="text-[11px] bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-lg text-stone-300">
              <span className="text-stone-400">Telefone Institucional (Legal): </span>
              <strong className="text-stone-200">{COMPANY_INFO.phoneFormatted}</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-500">
            <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <span className="text-stone-300 font-semibold">Termos de Uso</span>
              <span>•</span>
              <button
                type="button"
                onClick={onNavigateToPrivacidade}
                className="text-stone-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Política de Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
