import React, { useState, useEffect } from 'react';
import {
  Search,
  TrendingUp,
  Smartphone,
  UserCheck,
  MapPin,
  ShieldCheck,
  Zap,
  Bot,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Award,
  Globe,
  Phone,
  FileText,
  Layers,
  BarChart3,
  Check,
  X,
  Compass,
  Building2,
  Scale,
  Stethoscope,
  Briefcase
} from 'lucide-react';
import { SeoPageData, SEO_PAGES } from '../data/seoPages';
import { COMPANY_INFO, buildWhatsAppUrl, KEYWORD_MATRIX } from '../data/content';
import { Ambient3DGrid } from './3d/Ambient3DGrid';

interface ServiceKeywordPageProps {
  slug: string;
  onNavigate: (view: string, slug?: string) => void;
}

export const ServiceKeywordPage: React.FC<ServiceKeywordPageProps> = ({ slug, onNavigate }) => {
  const pageData: SeoPageData = SEO_PAGES[slug] || SEO_PAGES['criacao-de-sites'] || SEO_PAGES['aparecer-no-google'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState<number>(0);

  // Dynamic SEO Head Updates & JSON-LD Injection for Google, Bing, Meta and AI crawlers
  useEffect(() => {
    // 1. Update Document Title
    const originalTitle = document.title;
    document.title = pageData.seo.title;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', pageData.seo.description);
    }

    // 3. Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageData.seo.ogTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageData.seo.ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    const currentCanonicalUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${pageData.seo.canonicalPath}`
      : `https://boradigital.com.br${pageData.seo.canonicalPath}`;
    if (ogUrl) ogUrl.setAttribute('content', currentCanonicalUrl);

    // 4. Update Canonical Link tag
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const originalCanonical = canonicalTag ? canonicalTag.getAttribute('href') : '';
    if (canonicalTag) {
      canonicalTag.setAttribute('href', currentCanonicalUrl);
    }

    // 5. Update Twitter Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageData.seo.ogTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageData.seo.ogDescription);

    // 6. Inject Structured Data (Schema.org JSON-LD: Service + LocalBusiness + FAQPage + BreadcrumbList + HowTo + Speakable)
    const jsonLdScriptId = 'service-keyword-jsonld';
    let scriptTag = document.getElementById(jsonLdScriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdScriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${currentCanonicalUrl}#webpage`,
          'url': currentCanonicalUrl,
          'name': pageData.seo.title,
          'description': pageData.seo.description,
          'inLanguage': 'pt-BR',
          'speakable': {
            '@type': 'SpeakableSpecification',
            'cssSelector': ['.aeo-direct-answer-text', '.aeo-takeaway-item']
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${currentCanonicalUrl}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Início',
              'item': typeof window !== 'undefined' ? window.location.origin : 'https://boradigital.com.br'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Serviços Estratégicos',
              'item': typeof window !== 'undefined' ? `${window.location.origin}/#servicos` : 'https://boradigital.com.br/#servicos'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': pageData.keyword,
              'item': currentCanonicalUrl
            }
          ]
        },
        {
          '@type': 'Service',
          '@id': `${currentCanonicalUrl}#service`,
          'name': `${pageData.keyword} - Bora Digital Strategy`,
          'serviceType': pageData.keyword,
          'description': pageData.seo.description,
          'provider': {
            '@type': 'LocalBusiness',
            'name': COMPANY_INFO.fullName,
            'alternateName': COMPANY_INFO.shortName,
            'telephone': COMPANY_INFO.phoneFormatted,
            'email': COMPANY_INFO.email,
            'url': typeof window !== 'undefined' ? window.location.origin : 'https://boradigital.com.br',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.suite}`,
              'addressLocality': COMPANY_INFO.address.city,
              'addressRegion': COMPANY_INFO.address.state,
              'postalCode': COMPANY_INFO.address.zipCode,
              'addressCountry': 'BR'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': -29.1687,
              'longitude': -51.1794
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5.0',
              'reviewCount': '48'
            },
            'areaServed': [
              { '@type': 'Country', 'name': 'Brasil' },
              { '@type': 'City', 'name': 'Caxias do Sul' }
            ]
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Entregáveis do Serviço',
            'itemListElement': pageData.deliverables.map((item, index) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': item
              },
              'position': index + 1
            }))
          }
        },
        {
          '@type': 'HowTo',
          '@id': `${currentCanonicalUrl}#howto`,
          'name': `Processo de Execução de ${pageData.keyword}`,
          'step': pageData.processSteps.map((step, idx) => ({
            '@type': 'HowToStep',
            'position': idx + 1,
            'name': step.title,
            'text': step.desc
          }))
        },
        {
          '@type': 'FAQPage',
          '@id': `${currentCanonicalUrl}#faq`,
          'mainEntity': pageData.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);

    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Cleanup on unmount or page change
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonicalTag && originalCanonical) canonicalTag.setAttribute('href', originalCanonical);
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [pageData]);

  // Helper to render icon by name
  const renderIcon = (name: string, className = 'w-6 h-6') => {
    switch (name) {
      case 'Search':
        return <Search className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'UserCheck':
        return <UserCheck className={className} />;
      case 'MapPin':
        return <MapPin className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Bot':
        return <Bot className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const getSegmentIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Stethoscope className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Scale className="w-5 h-5 text-amber-400" />;
      case 2:
        return <Briefcase className="w-5 h-5 text-orange-400" />;
      default:
        return <Building2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="min-h-screen bg-[#121417] text-[#F3F4F6] selection:bg-[#FA842D] selection:text-white flex flex-col relative overflow-hidden">
      {/* 3D Global Ambient Spatial Canvas */}
      <Ambient3DGrid />

      {/* Top Header / Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#0F1114]/95 backdrop-blur-md border-b border-[#2A2E33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#FA842D] transition-transform group-hover:-translate-x-1" />
            <span>Voltar ao Início</span>
          </button>

          {/* Breadcrumb path for SEO & Crawlers */}
          <nav aria-label="Navegação Estruturada Breadcrumb" className="hidden md:flex items-center gap-2 text-xs text-stone-400">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-stone-200 transition-colors cursor-pointer"
            >
              Início
            </button>
            <span>/</span>
            <span className="text-stone-400">Serviços</span>
            <span>/</span>
            <span className="text-[#FA842D] font-medium">{pageData.keyword}</span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-xs text-stone-400 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{pageData.readingTime}</span>
            </span>

            <a
              href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* =========================================================================
            HERO SECTION: H1 Principal, Subtítulo, Checkmarks e Métricas
            ========================================================================= */}
        <section className="relative pt-10 pb-14 lg:pt-16 lg:pb-20 z-10 border-b border-stone-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Kicker badge */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FA842D] mb-4 tracking-wide uppercase">
                <Award className="w-4 h-4 text-[#FA842D]" />
                <span>{pageData.hero.kicker}</span>
              </div>

              {/* H1 Headline semântico único */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] font-display">
                {pageData.hero.h1Main}{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FA842D] to-amber-300">
                    {pageData.hero.h1Highlight}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FA842D] to-transparent rounded-full opacity-80" />
                </span>{' '}
                {pageData.hero.h1Suffix}
              </h1>

              {/* Subtitle detalhado */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
                {pageData.hero.subtitle}
              </p>

              {/* Benefit Checkmarks */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-300">
                {pageData.hero.checkmarks.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-[0_12px_30px_-5px_rgba(37,211,102,0.35)] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-slate-950" />
                  <span>{pageData.hero.primaryCtaText}</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('planos')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B1E23] hover:bg-[#22272E] border border-stone-700 hover:border-orange-500/60 text-white font-semibold text-base px-6 py-4 rounded-2xl transition-all cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-[#FA842D]" />
                  <span>Ver Planos & Proposta</span>
                </button>
              </div>

              {/* Quick Proof Metrics Strip */}
              <div className="mt-12 max-w-2xl mx-auto bg-stone-900/70 backdrop-blur-md border border-stone-800/90 rounded-2xl p-4 sm:p-5 shadow-xl">
                <div className="grid grid-cols-3 divide-x divide-stone-800 text-center">
                  {pageData.hero.stats.map((stat, idx) => (
                    <div key={idx} className="px-2 sm:px-4">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white tracking-tight block text-amber-400">
                        {stat.value}
                      </span>
                      <p className="text-[11px] sm:text-xs text-stone-200 font-semibold mt-1">
                        {stat.label}
                      </p>
                      <p className="text-[10px] text-stone-400 hidden sm:block">
                        {stat.sublabel}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SXO INTERACTIVE TABLE OF CONTENTS (NAVEGAÇÃO RÁPIDA DE LEITURA)
            ========================================================================= */}
        <nav aria-label="Índice de Navegação da Página" className="bg-[#15181C] border-b border-stone-800 py-3 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
              <span className="text-xs uppercase tracking-wider font-bold text-stone-400 shrink-0 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#FA842D]" />
                <span className="hidden sm:inline">Índice da Página:</span>
              </span>

              <div className="flex items-center gap-2 shrink-0 text-xs">
                <button
                  type="button"
                  onClick={() => scrollToSection('aeo-direct-answer')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Resposta Direta (AEO)
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('mecanica-informacional')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Mecânica Algorítmica
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('comparativo-comercial')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Comparativo Comercial
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('segmentos-mercado')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Por Segmento
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('metodologia-entregaveis')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  Processo & Entregas
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('perguntas-frequentes')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 hover:border-orange-500/50 text-stone-300 hover:text-white transition-colors cursor-pointer"
                >
                  FAQ Técnico
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* =========================================================================
            AEO DIRECT ANSWER BLOCK (OTIMIZADO PARA IA OVERVIEWS, PERPLEXITY E SGE)
            ========================================================================= */}
        <section id="aeo-direct-answer" className="py-12 bg-gradient-to-b from-[#16181D] to-[#121417] border-b border-stone-800/80 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1A1D23] border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500/10 text-emerald-300 text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl border-l border-b border-emerald-500/30 flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Destaque para IAs (AEO) & Featured Snippets</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase text-emerald-400 tracking-wider mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Resposta Direta & Conceito Oficial</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">
                {pageData.aeoDirectAnswer.question}
              </h2>

              <p className="text-sm sm:text-base text-stone-200 leading-relaxed bg-stone-900/60 p-4 rounded-xl border border-stone-800 aeo-direct-answer-text">
                {pageData.aeoDirectAnswer.answer}
              </p>

              <div className="mt-5 pt-4 border-t border-stone-800">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                  Pontos Fundamentais de Destaque:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-300">
                  {pageData.aeoDirectAnswer.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 aeo-takeaway-item">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTENÇÃO INFORMACIONAL: MECÂNICA ALGORÍTMICA & PRINCÍPIOS TÉCNICOS
            ========================================================================= */}
        <section id="mecanica-informacional" className="py-16 bg-[#14161A] border-b border-stone-800/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Layers className="w-3.5 h-3.5 text-[#FA842D]" />
                    <span>Intenção Informacional & SEO Técnico</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                    {pageData.informationalIntent.title}
                  </h2>
                </div>

                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                  {pageData.informationalIntent.paragraphs.map((para, idx) => (
                    <p key={idx} className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/60">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {pageData.informationalIntent.corePrinciples.map((principle, idx) => (
                    <div key={idx} className="bg-[#1A1D22] border border-stone-800 p-4.5 rounded-2xl hover:border-orange-500/40 transition-colors">
                      <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{principle.title}</span>
                      </h4>
                      <p className="text-xs text-stone-400 leading-relaxed">
                        {principle.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local & Trust Sede Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#1A1D23] border border-[#2D3136] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl sticky top-24">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FA842D]">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Bora Digital Strategy</h3>
                      <p className="text-xs text-stone-400">Atendimento Global · Sede em Caxias do Sul/RS</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-stone-800 text-xs text-stone-300">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#FA842D] shrink-0 mt-0.5" />
                      <span>
                        {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite} — {COMPANY_INFO.address.neighborhood}, Caxias do Sul - RS
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <a
                        href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                      >
                        Atendimento: WhatsApp Oficial
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{COMPANY_INFO.workingHours}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Garantia de Qualidade & Performance
                    </span>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Projetos homologados segundo as diretrizes oficiais do Google Search Console, Bing Webmaster Tools e com conformidade técnica à LGPD.
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Falar com o Estrategista no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTENÇÃO COMERCIAL: COMPARATIVO LADO A LADO
            ========================================================================= */}
        <section id="comparativo-comercial" className="py-16 bg-[#121417] border-b border-stone-800/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                <span>Intenção Comercial & Decisão Racional</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                {pageData.commercialIntent.title}
              </h2>
              <p className="mt-3 text-stone-300 text-sm sm:text-base">
                {pageData.commercialIntent.subtitle}
              </p>
            </div>

            {/* Side-by-side Comparison Matrix */}
            <div className="bg-[#181B20] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 border-b border-stone-800 bg-stone-900/90 text-xs font-bold uppercase tracking-wider text-stone-300 py-3.5 px-6">
                <div className="md:col-span-4 text-stone-400">Critério de Avaliação</div>
                <div className="md:col-span-4 text-rose-400 flex items-center gap-1.5 mt-2 md:mt-0">
                  <X className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Abordagem Comum / Amadora</span>
                </div>
                <div className="md:col-span-4 text-emerald-400 flex items-center gap-1.5 mt-2 md:mt-0">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estratégia Bora Digital</span>
                </div>
              </div>

              <div className="divide-y divide-stone-800/80">
                {pageData.commercialIntent.comparison.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 py-4 px-6 text-xs sm:text-sm hover:bg-stone-900/40 transition-colors">
                    <div className="md:col-span-4 font-bold text-white flex items-center pr-4 mb-1 md:mb-0">
                      {item.criterion}
                    </div>
                    <div className="md:col-span-4 text-stone-400 pr-4 flex items-start gap-2 mb-2 md:mb-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5 md:hidden" />
                      <span>{item.amateurApproach}</span>
                    </div>
                    <div className="md:col-span-4 text-emerald-200 font-medium flex items-start gap-2 bg-emerald-950/20 md:bg-transparent p-2 md:p-0 rounded-lg">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.boraDigitalStrategy}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            APLICAÇÕES PRÁTICAS POR SEGMENTO DE MERCADO
            ========================================================================= */}
        {pageData.commercialIntent.segmentApplications && pageData.commercialIntent.segmentApplications.length > 0 && (
          <section id="segmentos-mercado" className="py-16 bg-[#16181C] border-b border-stone-800/80 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <span className="text-xs uppercase tracking-wider text-[#FA842D] font-bold">
                  Customização por Nicho
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mt-1">
                  Como Este Serviço se Aplica ao Seu Setor
                </h2>
                <p className="mt-2 text-stone-400 text-xs sm:text-sm">
                  Selecione sua área e veja a dor específica resolvida e o resultado esperado.
                </p>
              </div>

              {/* Segment Selector Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {pageData.commercialIntent.segmentApplications.map((seg, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSegmentIdx(idx)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedSegmentIdx === idx
                        ? 'bg-orange-500/20 border border-orange-500 text-white shadow-lg'
                        : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800'
                    }`}
                  >
                    {getSegmentIcon(idx)}
                    <span>{seg.segment}</span>
                  </button>
                ))}
              </div>

              {/* Selected Segment Details Card */}
              {pageData.commercialIntent.segmentApplications[selectedSegmentIdx] && (
                <div className="max-w-4xl mx-auto bg-[#1B1E24] border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FA842D]">
                      {getSegmentIcon(selectedSegmentIdx)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {pageData.commercialIntent.segmentApplications[selectedSegmentIdx].segment}
                      </h3>
                      <p className="text-xs text-stone-400">Estratégia sob medida para este segmento</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                    <div className="bg-stone-900/70 p-4 rounded-2xl border border-stone-800">
                      <strong className="text-rose-400 block mb-1 uppercase tracking-wide text-xs">
                        A Dor Típica:
                      </strong>
                      <p className="text-stone-300 leading-relaxed">
                        {pageData.commercialIntent.segmentApplications[selectedSegmentIdx].painPoint}
                      </p>
                    </div>

                    <div className="bg-stone-900/70 p-4 rounded-2xl border border-stone-800">
                      <strong className="text-orange-400 block mb-1 uppercase tracking-wide text-xs">
                        A Solução Implementada:
                      </strong>
                      <p className="text-stone-300 leading-relaxed">
                        {pageData.commercialIntent.segmentApplications[selectedSegmentIdx].solution}
                      </p>
                    </div>

                    <div className="bg-stone-900/70 p-4 rounded-2xl border border-stone-800">
                      <strong className="text-emerald-400 block mb-1 uppercase tracking-wide text-xs">
                        O Retorno Comercial:
                      </strong>
                      <p className="text-stone-300 leading-relaxed">
                        {pageData.commercialIntent.segmentApplications[selectedSegmentIdx].expectedOutcome}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* =========================================================================
            PILARES DA NOSSA ENTREGA (FEATURES)
            ========================================================================= */}
        <section className="py-16 bg-[#121417] border-b border-stone-800/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Pilares da Nossa Entrega em {pageData.keyword}
              </h2>
              <p className="mt-3 text-stone-400 text-sm sm:text-base">
                Métodos consolidados, conformidade com as diretrizes do Google e tecnologia web de ponta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pageData.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#181B20] border border-stone-800 hover:border-orange-500/50 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-[#FA842D] mb-4 group-hover:scale-110 transition-transform">
                    {renderIcon(feat.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            INTENÇÃO TRANSACIONAL: METODOLOGIA & ENTREGÁVEIS
            ========================================================================= */}
        <section id="metodologia-entregaveis" className="py-16 bg-[#16181C] border-b border-stone-800/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Step-by-step process */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FA842D] font-bold">
                    Metodologia Comprovada
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mt-1">
                    Como Executamos do Início ao Fim
                  </h2>
                </div>

                <div className="space-y-4">
                  {pageData.processSteps.map((stepItem, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-stone-900/70 border border-stone-800/90 rounded-2xl p-4.5">
                      <span className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 text-[#FA842D] font-extrabold flex items-center justify-center text-sm shrink-0">
                        {stepItem.step}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-sm font-bold text-white">{stepItem.title}</h4>
                          {stepItem.timeline && (
                            <span className="text-[10px] font-semibold uppercase text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-800/40">
                              {stepItem.timeline}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-stone-400 leading-relaxed">{stepItem.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checklist of Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                    O Que Está Incluso
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mt-1">
                    Entregáveis e Garantias Técnicas
                  </h2>
                </div>

                <div className="bg-[#1A1D22] border border-[#2D3136] rounded-3xl p-6 sm:p-7 space-y-3.5 shadow-xl">
                  {pageData.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-200 leading-snug">{item}</span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-stone-800">
                    <a
                      href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>Solicitar Orçamento Deste Serviço</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FAQ TÉCNICO & REGULATÓRIO (SCHEMA.ORG FAQPAGE SYNCED)
            ========================================================================= */}
        <section id="perguntas-frequentes" className="py-16 bg-[#121417] border-b border-stone-800/80 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5 text-[#FA842D]" />
                <span>Dúvidas Técnicas & Comerciais</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                Perguntas Frequentes sobre {pageData.keyword}
              </h2>
              <p className="mt-2 text-stone-400 text-xs sm:text-sm">
                Respostas diretas e sem rodeios para apoiar sua tomada de decisão.
              </p>
            </div>

            <div className="space-y-3">
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#181B20] border border-stone-800 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-orange-300 transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#FA842D] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/80">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SEMANTIC CROSS-LINKING (REDE INTERNA DE SERVIÇOS & SITEMAP NAVEGÁVEL)
            ========================================================================= */}
        <section className="py-12 bg-[#16181C] border-b border-stone-800/80 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-4 text-center">
              Explore Nossas Outras Páginas Dedicadas de Serviços:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {KEYWORD_MATRIX.map((item, idx) => {
                const isCurrent = item.slug === pageData.slug || (pageData.slug === 'criacao-de-sites' && item.slug === 'site-profissional') || (pageData.slug === 'google-meu-negocio' && item.slug === 'cadastro-google-meu-negocio') || (pageData.slug === 'seo-aeo-sxo' && item.slug === 'aparecer-no-google');
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onNavigate('service', item.slug)}
                    className={`inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-orange-500/20 border-orange-500 text-orange-200 font-bold'
                        : 'bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300 hover:text-white'
                    }`}
                  >
                    <span>{item.keyword}</span>
                    {!isCurrent && <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-70" />}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => onNavigate('planos')}
                className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/50 transition-all font-semibold cursor-pointer"
              >
                <FileText className="w-3 h-3" />
                <span>Ver Planos & Proposta Comercial</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CLOSING CTA BANNER
            ========================================================================= */}
        <section className="py-16 bg-[#121417] relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-[#1C2026] to-[#121417] border border-orange-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-[#FA842D] text-xs font-bold uppercase tracking-wider">
                {pageData.closingCta.badge}
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display max-w-2xl mx-auto">
                {pageData.closingCta.title}
              </h2>

              <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                {pageData.closingCta.description}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={buildWhatsAppUrl(pageData.closingCta.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-lg transition-all cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 fill-slate-950" />
                  <span>Conversar no WhatsApp Agora</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white font-semibold text-sm px-6 py-4 rounded-2xl transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar à Página Principal</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simples da Página Dedicada */}
      <footer className="bg-black/80 border-t border-stone-900 py-6 px-4 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto space-y-2">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Sede no Bairro Exposição em Caxias do Sul/RS · Atendimento em Todo o Brasil.</p>
          <div className="flex items-center justify-center gap-3 text-[11px] text-stone-400">
            <a href="/termos-de-uso" className="hover:text-white underline">Termos de Uso</a>
            <span>•</span>
            <a href="/politicas-de-privacidade" className="hover:text-white underline">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
    </article>
  );
};
