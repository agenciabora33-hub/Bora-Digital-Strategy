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
  FileText
} from 'lucide-react';
import { SeoPageData, SEO_PAGES } from '../data/seoPages';
import { COMPANY_INFO, buildWhatsAppUrl, KEYWORD_MATRIX } from '../data/content';
import { Ambient3DGrid } from './3d/Ambient3DGrid';

interface ServiceKeywordPageProps {
  slug: string;
  onNavigate: (view: string, slug?: string) => void;
}

export const ServiceKeywordPage: React.FC<ServiceKeywordPageProps> = ({ slug, onNavigate }) => {
  const pageData: SeoPageData = SEO_PAGES[slug] || SEO_PAGES['aparecer-no-google'];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic SEO Head Updates & JSON-LD Injection
  useEffect(() => {
    // 1. Update Document Title
    const originalTitle = document.title;
    document.title = pageData.seo.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
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

    // 4. Update Twitter Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', pageData.seo.ogTitle);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', pageData.seo.ogDescription);

    // 5. Inject Structured Data (Schema.org JSON-LD)
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
          '@type': 'BreadcrumbList',
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
              'name': 'Especialidades',
              'item': currentCanonicalUrl
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
          'name': `${pageData.keyword} - Bora Digital Strategy`,
          'serviceType': pageData.keyword,
          'description': pageData.seo.description,
          'provider': {
            '@type': 'LocalBusiness',
            'name': COMPANY_INFO.fullName,
            'telephone': COMPANY_INFO.phoneFormatted,
            'email': COMPANY_INFO.email,
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.suite}`,
              'addressLocality': COMPANY_INFO.address.city,
              'addressRegion': COMPANY_INFO.address.state,
              'postalCode': COMPANY_INFO.address.zipCode,
              'addressCountry': 'BR'
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
          }
        },
        {
          '@type': 'FAQPage',
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

  return (
    <div className="min-h-screen bg-[#121417] text-[#F3F4F6] selection:bg-[#FA842D] selection:text-white flex flex-col relative overflow-hidden">
      {/* 3D Global Ambient Spatial Canvas */}
      <Ambient3DGrid />

      {/* Top Header / Breadcrumb Bar */}
      <header className="sticky top-0 z-40 bg-[#0F1114]/90 backdrop-blur-md border-b border-[#2A2E33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-stone-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#FA842D] transition-transform group-hover:-translate-x-1" />
            <span>Voltar para Início</span>
          </button>

          {/* Breadcrumb path */}
          <nav aria-label="Breadcrumb" className="hidden md:flex items-center gap-2 text-xs text-stone-400">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-stone-200 transition-colors"
            >
              Início
            </button>
            <span>/</span>
            <span className="text-[#FA842D] font-medium">{pageData.keyword}</span>
          </nav>

          <a
            href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
            <span className="hidden sm:inline">WhatsApp Direto</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 z-10 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FA842D] mb-4 tracking-wide uppercase">
              <Award className="w-4 h-4 text-[#FA842D]" />
              <span>{pageData.hero.kicker}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display">
              {pageData.hero.h1Main}{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FA842D] to-amber-300">
                  {pageData.hero.h1Highlight}
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FA842D] to-transparent rounded-full opacity-80" />
              </span>{' '}
              {pageData.hero.h1Suffix}
            </h1>

            {/* Subtitle */}
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

      {/* Deep-Dive Overview Section */}
      <section className="py-16 bg-[#16181C] border-b border-stone-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#FA842D]" />
                <span>Visão Estratégica</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                {pageData.overview.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
                {pageData.overview.description}
              </p>

              <div className="mt-6 space-y-3">
                {pageData.overview.whyItMatters.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-stone-900/60 border border-stone-800 p-3.5 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-stone-300 leading-snug">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Physical & Global Trust Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#1A1D22] border border-[#2D3136] rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
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
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WhatsApp Comercial: {COMPANY_INFO.phoneFormatted}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Garantia de Atendimento
                  </span>
                  <p className="text-xs text-stone-300">
                    Atendimento ágil com alinhamentos estratégicos gravados ou ao vivo, suporte humanizado e foco obsessivo em dinheiro gerado no seu caixa.
                  </p>
                </div>

                <a
                  href={buildWhatsAppUrl(pageData.hero.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Grid */}
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

      {/* Methodology & Deliverables */}
      <section className="py-16 bg-[#16181C] border-b border-stone-800/80 relative z-10">
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
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{stepItem.title}</h4>
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
                  Entregáveis e Garantias do Projeto
                </h2>
              </div>

              <div className="bg-[#1A1D22] border border-[#2D3136] rounded-3xl p-6 sm:p-7 space-y-3.5">
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

      {/* Specific FAQ Section (SEO FAQPage Schema Grounded) */}
      <section className="py-16 bg-[#121417] border-b border-stone-800/80 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#FA842D]" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Perguntas Frequentes sobre {pageData.keyword}
            </h2>
            <p className="mt-2 text-stone-400 text-xs sm:text-sm">
              Tudo o que você precisa saber antes de contratar.
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Semantic Cross-Linking to other 4 pages */}
      <section className="py-12 bg-[#16181C] border-b border-stone-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-4 text-center">
            Explore Nossas Outras Especialidades & Páginas:
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {KEYWORD_MATRIX.map((item, idx) => {
              const isCurrent = item.slug === pageData.slug;
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
              <span>Ver Planos & Proposta</span>
            </button>
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
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

      {/* Simple Footer */}
      <footer className="bg-black/80 border-t border-stone-900 py-6 text-center text-xs text-stone-500">
        <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Sede em Caxias do Sul/RS · Atendimento Global.</p>
      </footer>
    </div>
  );
};
