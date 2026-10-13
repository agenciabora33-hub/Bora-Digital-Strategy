import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  ArrowLeft,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Cookie,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Scale
} from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { Ambient3DGrid } from './3d/Ambient3DGrid';

interface PoliticaPrivacidadePageProps {
  onBackToHome: () => void;
  onNavigateToTermos: () => void;
}

export const PoliticaPrivacidadePage: React.FC<PoliticaPrivacidadePageProps> = ({
  onBackToHome,
  onNavigateToTermos
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Política de Privacidade & Proteção de Dados (LGPD) | Bora Digital Strategy';
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
                Políticas de Privacidade & Diretrizes Globais
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={onNavigateToTermos}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700 px-3 py-1.5 rounded-lg transition-all"
            >
              <Scale className="w-3.5 h-3.5 text-[#FA842D]" />
              <span>Ver Termos de Uso</span>
            </button>

            <a
              href={buildWhatsAppUrl("Olá! Tenho uma dúvida sobre a Política de Privacidade e Proteção de Dados da Bora Digital Strategy.")}
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Conformidade LGPD · Google · Bing · Meta
            </span>
            <span className="text-xs text-stone-400">
              Última atualização: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-display">
            Política de Privacidade e Proteção de Dados Pessoais
          </h1>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            A <strong className="text-white">Bora Digital Strategy</strong> preza pela transparência, privacidade e segurança
            dos dados de seus clientes, usuários e visitantes. Este documento descreve minuciosamente como tratamos dados pessoais
            em total observância à <strong className="text-emerald-400">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>,
            às <strong className="text-white">Políticas de Privacidade do Google (Google Ads, Google Search e Google Analytics 4)</strong>,
            às <strong className="text-white">Políticas da Microsoft / Bing (IndexNow e Microsoft Advertising)</strong> e
            aos <strong className="text-white">Termos de Ferramentas de Negócios e Publicidade da Meta (Facebook / Instagram)</strong>.
          </p>

          {/* Quick Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-[#FA842D] flex items-center justify-center mb-2">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Criptografia & SSL</h3>
              <p className="text-xs text-stone-400 mt-1">Conexões 100% criptografadas via HTTPS e conformidade de segurança de ponta a ponta.</p>
            </div>

            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                <Eye className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Zero Venda de Dados</h3>
              <p className="text-xs text-stone-400 mt-1">Nunca comercializamos, alugamos ou repassamos seus dados a terceiros não autorizados.</p>
            </div>

            <div className="bg-[#181B20] border border-stone-800 p-4 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2">
                <Scale className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Direitos do Titular</h3>
              <p className="text-xs text-stone-400 mt-1">Acesso, retificação, eliminação e revogação de consentimento garantidos a qualquer momento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Sumário Rápido */}
        <nav aria-label="Sumário da Política" className="bg-[#181B20] border border-stone-800 rounded-2xl p-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-stone-300 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#FA842D]" />
            Sumário da Política
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a href="#controlador" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 1. Controlador de Dados & Encarregado (DPO)
            </a>
            <a href="#dados-coletados" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 2. Dados Pessoais que Coletamos
            </a>
            <a href="#finalidade" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 3. Finalidades e Bases Legais (LGPD)
            </a>
            <a href="#google" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 4. Conformidade com Diretrizes do Google
            </a>
            <a href="#bing" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 5. Conformidade com a Microsoft / Bing
            </a>
            <a href="#meta" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 6. Conformidade com a Meta (Facebook & IG)
            </a>
            <a href="#cookies" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 7. Gestão de Cookies e Opt-Out
            </a>
            <a href="#direitos" className="text-stone-300 hover:text-[#FA842D] flex items-center gap-1.5 transition-colors">
              <ChevronRight className="w-3 h-3 text-[#FA842D]" /> 8. Seus Direitos como Titular (Art. 18 LGPD)
            </a>
          </div>
        </nav>

        {/* 1. Controlador de Dados & DPO */}
        <section id="controlador" className="space-y-4 pt-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">1</span>
            Identificação do Controlador e Encarregado de Proteção de Dados (DPO)
          </h2>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300">
            <p>
              O controlador responsável pelo tratamento de dados pessoais coletados neste website é:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800/80 space-y-1">
                <span className="text-stone-400 block font-semibold">Razão Social / Identificação:</span>
                <strong className="text-white text-sm">{COMPANY_INFO.fullName}</strong>
                <p className="text-stone-400 text-[11px]">Sede: {COMPANY_INFO.address.fullFormatted}</p>
                <p className="text-stone-400 text-[11px]">CEP: {COMPANY_INFO.address.zipCode} · Caxias do Sul - RS, Brasil</p>
              </div>
              <div className="bg-stone-900/80 p-3 rounded-xl border border-stone-800/80 space-y-1">
                <span className="text-stone-400 block font-semibold">Canal Oficial do Encarregado (DPO / LGPD):</span>
                <p className="text-stone-200">
                  E-mail: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#FA842D] hover:underline font-medium">{COMPANY_INFO.email}</a>
                </p>
                <p className="text-stone-400 text-[11px]">Telefone Institucional (Regulamentar): {COMPANY_INFO.phoneFormatted}</p>
                <p className="text-stone-400 text-[11px]">Canal de Atendimento Rápido: WhatsApp Oficial</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Dados que Coletamos */}
        <section id="dados-coletados" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">2</span>
            Dados Pessoais que Coletamos
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Coletamos a menor quantidade de dados necessária para prestar nossos serviços de consultoria estratégica,
              criação de sites e publicidade digital de alta performance. As categorias de dados incluem:
            </p>
            <ul className="space-y-2 list-none pt-1">
              <li className="flex items-start gap-2.5 bg-[#181B20] border border-stone-800/70 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Dados Fornecidos Voluntariamente:</strong> Nome, número de WhatsApp/telefone,
                  e-mail institucional e dados sobre sua empresa informados pelo usuário ao iniciar conversas através de nosso link oficial
                  de WhatsApp (<code className="text-stone-300 text-xs">https://wa.me/message/N5NVC77KSMOKE1</code>) ou ao solicitar orçamentos e propostas comerciais.
                </div>
              </li>
              <li className="flex items-start gap-2.5 bg-[#181B20] border border-stone-800/70 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Dados de Navegação e Dispositivo (Métricas Agregadas):</strong> Endereço IP (anonimizado),
                  tipo de navegador, sistema operacional, resolução de tela, localização geográfica aproximada (nível cidade/país), páginas
                  visitadas, tempo de permanência e caminhos de navegação (coletados via Google Analytics 4).
                </div>
              </li>
              <li className="flex items-start gap-2.5 bg-[#181B20] border border-stone-800/70 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Interações de Conversão:</strong> Cliques em botões de contato, visualização da página de planos
                  e interações em simuladores de presença digital para avaliar a eficiência dos serviços ofertados.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 3. Finalidades e Bases Legais */}
        <section id="finalidade" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">3</span>
            Finalidades do Tratamento e Bases Legais (LGPD)
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Em conformidade com o Artigo 7º da Lei Federal nº 13.709/2018 (LGPD), todo tratamento de dados realizado pela
              Bora Digital Strategy possui embasamento em uma das seguintes bases legais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Art. 7º, Inciso V (Execução de Contrato)
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">Procedimentos Preliminares</h4>
                <p className="text-xs text-stone-400">
                  Elaboração de propostas comerciais personalizadas, diagnóstico de presença no Google e formalização de contratos de prestação de serviços a pedido do titular.
                </p>
              </div>

              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Art. 7º, Inciso IX (Legítimo Interesse)
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">Aprimoramento Contínuo</h4>
                <p className="text-xs text-stone-400">
                  Melhoria da usabilidade do site, prevenção a fraudes técnicas, medição agregada de audiência e segurança da infraestrutura de tecnologia da informação.
                </p>
              </div>

              <div className="bg-[#181B20] border border-stone-800 p-4 rounded-xl">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                  Art. 7º, Inciso I (Consentimento)
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">Contato Voluntário</h4>
                <p className="text-xs text-stone-400">
                  Consentimento expresso concedido pelo visitante ao aceitar cookies de navegação e ao enviar mensagens de consulta pelos canais de atendimento digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Conformidade com Diretrizes do Google */}
        <section id="google" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Conformidade Rigorosa com as Diretrizes do Google
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Como agência especializada em Google Ads, Google Meu Negócio e ecossistema de busca Google, cumprimos rigorosamente as
              <strong> Diretrizes de Terceiros do Google</strong>, as <strong>Políticas de Publicidade do Google Ads</strong> e as regras de
              <strong> Consentimento do Usuário da União Europeia e LGPD</strong>:
            </p>

            <div className="space-y-3 pt-1">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <h4 className="font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  Google Tag Manager e Google Analytics 4 (ID: G-G0VHDNNSB1)
                </h4>
                <p className="text-xs text-stone-400">
                  Utilizamos a biblioteca oficial <code className="text-stone-300">gtag.js</code> configurada com a propriedade de mensuração
                  <strong> G-G0VHDNNSB1</strong>. O Google Analytics coleta informações como visualizações de página, tipo de dispositivo e conversões
                  sem associar esses dados a identidades civis de pessoas físicas. O IP dos usuários é anonimizado por padrão na arquitetura do GA4.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <h4 className="font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Google Ads e Políticas de Publicidade Personalizada
                </h4>
                <p className="text-xs text-stone-400">
                  Nossas páginas de destino seguem o padrão de clareza do Google Ads: não realizamos alegações milagrosas ou enganosas,
                  mantemos o modelo de precificação e termos contratuais claramente descritos, e não coletamos dados financeiros ou
                  informações sensíveis de saúde, crença ou orientação dos visitantes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <h4 className="font-bold text-white flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Google Maps e Serviços de Geolocalização
                </h4>
                <p className="text-xs text-stone-400">
                  A incorporação de mapas e rotas para nossa sede física no Bairro Exposição em Caxias do Sul - RS utiliza APIs do Google Maps,
                  sujeitas aos Termos de Serviço Adicionais do Google Maps/Google Earth e à Política de Privacidade do Google.
                </p>
              </div>
            </div>

            <div className="text-xs text-stone-400 pt-1 flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#FA842D]" />
              <span>
                Para saber mais sobre como o Google utiliza dados coletados por sites parceiros, consulte a{' '}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FA842D] hover:underline font-semibold"
                >
                  Política de Privacidade e Termos do Google
                </a>.
              </span>
            </div>
          </div>
        </section>

        {/* 5. Conformidade com a Microsoft / Bing */}
        <section id="bing" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Conformidade com Diretrizes da Microsoft / Bing & Protocolo IndexNow
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Nosso portal é auditado segundo as diretrizes de qualidade do <strong>Microsoft Advertising</strong> e das
              <strong> Diretrizes para Webmasters do Bing</strong>:
            </p>
            <ul className="space-y-2 list-disc list-inside text-xs text-stone-400 pt-1">
              <li>
                <strong className="text-stone-200">Protocolo IndexNow:</strong> Implementamos a chave criptográfica verificada
                (<code className="text-amber-300">d327c1871dbe4d068c9f53d68108a98d</code>) para notificar instantaneamente os mecanismos de busca
                (Microsoft Bing, Yandex, Seznam) sobre URLs novas ou alteradas. Essa comunicação envolve unicamente endereços web de páginas públicas,
                sem qualquer transmissão de dados pessoais de usuários.
              </li>
              <li>
                <strong className="text-stone-200">Políticas Editoriais e Comerciais do Bing:</strong> Informações transparentes de contato físico,
                suporte ao cliente, ausência de técnicas de cloaking ou conteúdo enganoso e compatibilidade total com navegadores modernos.
              </li>
              <li>
                <strong className="text-stone-200">Declaração de Privacidade da Microsoft:</strong> Detalhes sobre o tratamento de dados no ecossistema
                Microsoft podem ser consultados em{' '}
                <a
                  href="https://privacy.microsoft.com/pt-br/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FA842D] hover:underline"
                >
                  privacy.microsoft.com
                </a>.
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Conformidade com Diretrizes da Meta */}
        <section id="meta" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">6</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Conformidade com Diretrizes da Meta (Facebook, Instagram & Meta Ads)
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Em conformidade com os <strong>Termos das Ferramentas de Negócios da Meta (Meta Business Tools Terms)</strong> e as
              <strong> Políticas de Anúncios da Meta</strong>:
            </p>
            <div className="space-y-2.5 pt-1 text-xs text-stone-400">
              <p>
                • Informamos formalmente aos nossos usuários e visitantes que terceiros (incluindo a <strong>Meta Platforms Inc.</strong> e o
                <strong> Facebook/Instagram</strong>) podem usar cookies, web beacons e outras tecnologias de armazenamento para coletar ou receber
                informações deste website e de outros pontos da internet, utilizando essas informações para fornecer serviços de medição e direcionar anúncios.
              </p>
              <p>
                • A Bora Digital Strategy <strong>não compartilha dados financeiros, senhas ou dados sensíveis</strong> com a Meta.
                Toda mensuração de conversões publicitárias respeita as normas de privacidade aplicáveis e as preferências configuradas pelos usuários.
              </p>
              <p>
                • Os usuários têm a liberdade e o direito de optar por não participar da coleta e uso de informações para direcionamento de anúncios.
                As opções de desativação podem ser exercidas nas configurações de perfil do Facebook em{' '}
                <a
                  href="https://www.facebook.com/adpreferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FA842D] hover:underline font-semibold"
                >
                  Preferências de Anúncios do Facebook
                </a>{' '}
                ou através de ferramentas setoriais como a{' '}
                <a
                  href="https://optout.aboutads.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FA842D] hover:underline font-semibold"
                >
                  Digital Advertising Alliance (YourAdChoices)
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Cookies e Opt-Out */}
        <section id="cookies" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">7</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Gestão de Cookies, Tecnologias de Rastreamento e Como Desativar (Opt-Out)
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Cookies são pequenos arquivos de texto armazenados no navegador do visitante para viabilizar funcionalidades essenciais
              de navegação, segurança e medição estatística.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 space-y-1.5">
                <strong className="text-white flex items-center gap-1.5">
                  <Cookie className="w-4 h-4 text-amber-400" />
                  Cookies Estritamente Necessários
                </strong>
                <p className="text-stone-400">
                  Garantem a navegação fluida, preservam estados de formulário e a estabilidade técnica do aplicativo de página única (SPA).
                </p>
              </div>

              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 space-y-1.5">
                <strong className="text-white flex items-center gap-1.5">
                  <BarChartIcon className="w-4 h-4 text-emerald-400" />
                  Cookies Analíticos e de Desempenho
                </strong>
                <p className="text-stone-400">
                  Permitem calcular contagem de visitas, canais de tráfego e avaliar quais páginas têm maior relevância para os usuários.
                </p>
              </div>
            </div>

            <div className="bg-stone-900/90 border border-stone-800 p-4 rounded-xl space-y-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider">Como Gerenciar ou Desativar Cookies no seu Navegador:</h4>
              <p className="text-xs text-stone-400">
                Você pode a qualquer momento bloquear, desativar ou apagar cookies diretamente nas preferências de privacidade do seu navegador:
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="px-2.5 py-1 bg-stone-800 rounded-md text-stone-300">Google Chrome</span>
                <span className="px-2.5 py-1 bg-stone-800 rounded-md text-stone-300">Mozilla Firefox</span>
                <span className="px-2.5 py-1 bg-stone-800 rounded-md text-stone-300">Apple Safari</span>
                <span className="px-2.5 py-1 bg-stone-800 rounded-md text-stone-300">Microsoft Edge</span>
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                Para desativar especificamente a coleta do Google Analytics em todos os sites, instale o{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FA842D] hover:underline font-semibold"
                >
                  Complemento de Desativação do Google Analytics
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Direitos do Titular LGPD */}
        <section id="direitos" className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">8</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Seus Direitos como Titular de Dados Pessoais (Artigo 18 da LGPD)
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Você, na qualidade de titular de dados pessoais, tem o direito de obter da Bora Digital Strategy,
              a qualquer momento e mediante requisição expressa:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados cadastrais.</span>
              </div>
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Correção:</strong> Solicitar a retificação de dados pessoais incompletos, inexatos ou desatualizados.</span>
              </div>
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Anonimização ou Eliminação:</strong> Exigir a anonimização ou exclusão de dados desnecessários ou excessivos.</span>
              </div>
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviços.</span>
              </div>
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Revogação do Consentimento:</strong> Revogar o consentimento previamente fornecido com total facilidade.</span>
              </div>
              <div className="flex items-start gap-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Informação sobre Compartilhamento:</strong> Saber com quais entidades públicas ou privadas compartilhamos dados.</span>
              </div>
            </div>

            {/* Caixa de Solicitação DPO */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FA842D]" />
                  Como Exercer Seus Direitos
                </h4>
                <p className="text-xs text-stone-300">
                  Envie um e-mail para <strong className="text-white">{COMPANY_INFO.email}</strong> com o assunto "Direitos LGPD - Titular de Dados".
                  Responderemos em conformidade com os prazos legais da LGPD.
                </p>
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Solicita%C3%A7%C3%A3o%20LGPD%20-%20Bora%20Digital%20Strategy`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FA842D] hover:bg-[#ea731b] text-white font-bold rounded-xl text-xs transition-colors shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Enviar Solicitação</span>
              </a>
            </div>
          </div>
        </section>

        {/* 9. Segurança da Informação */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">9</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Medidas de Segurança Técnica e Armazenamento
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Adotamos salvaguardas técnicas, administrativas e operacionais aptas a proteger seus dados contra acessos não autorizados,
              destruição, perda, alteração ou qualquer modalidade de tratamento inadequado:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-stone-400">
              <li>Protocolo criptográfico TLS/HTTPS em 100% das comunicações web do domínio.</li>
              <li>Servidores com proteções firewall ativas e monitoramento de integridade de cabeçalhos HTTP.</li>
              <li>Princípio do menor privilégio no acesso a canais administrativos e caixa postal de atendimento.</li>
              <li>Retenção estritamente pelo período necessário ao cumprimento das finalidades ou prazos prescricionais legais.</li>
            </ul>
          </div>
        </section>

        {/* 10. Atualizações desta Política */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-500/20 text-[#FA842D] text-sm">10</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Alterações e Atualizações Desta Política
            </h2>
          </div>
          <div className="bg-[#181B20] border border-stone-800 rounded-2xl p-5 text-xs sm:text-sm text-stone-300 leading-relaxed space-y-2">
            <p>
              Podemos atualizar esta Política periodicamente para refletir mudanças legislativas, aprimoramentos técnicos
              ou alterações nos requisitos de privacidade de plataformas parceiras (Google, Bing e Meta).
            </p>
            <p className="text-stone-400 text-xs">
              A data da última revisão sempre constará no início desta página. O uso continuado dos nossos serviços após a publicação
              de atualizações configura ciência e concordância com os novos termos.
            </p>
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
            onClick={onNavigateToTermos}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FA842D] hover:bg-[#ea731b] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <Scale className="w-4 h-4" />
            <span>Consultar Termos de Uso</span>
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
              <button
                type="button"
                onClick={onNavigateToTermos}
                className="text-stone-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Termos de Uso
              </button>
              <span>•</span>
              <span className="text-stone-300 font-semibold">Política de Privacidade</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}
