/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityEEAT } from './components/AuthorityEEAT';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { PlanosPage } from './components/PlanosPage';
import { PresenceSimulator } from './components/PresenceSimulator';
import { LocalPresenceGBP } from './components/LocalPresenceGBP';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';
import { MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from './data/content';

export default function App() {
  const checkIsPlanosRoute = () => {
    if (typeof window === 'undefined') return false;
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      path.startsWith('/planos') ||
      path.startsWith('/precos') ||
      path.startsWith('/proposta') ||
      hash.startsWith('#/planos') ||
      hash.startsWith('#/precos') ||
      hash.startsWith('#/proposta') ||
      search.includes('pagina=planos') ||
      search.includes('view=planos')
    );
  };

  const [currentView, setCurrentView] = useState<'home' | 'planos'>(() => {
    return checkIsPlanosRoute() ? 'planos' : 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      if (checkIsPlanosRoute()) {
        setCurrentView('planos');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (view: 'home' | 'planos') => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      const targetUrl = view === 'planos' ? '/planos' : '/';
      window.history.pushState({}, '', targetUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update document title for SEO & clarity
      if (view === 'planos') {
        document.title = 'Planos & Proposta Comercial | Bora Digital Strategy';
      } else {
        document.title = 'Bora Digital Strategy | Criação de Sites, Google Ads e GBP em Caxias do Sul';
      }
    }
  };

  // Render standalone Planos & Proposta page
  if (currentView === 'planos') {
    return (
      <>
        <PlanosPage onBackToHome={() => navigateTo('home')} />
        <WhatsAppFloatingButton />
      </>
    );
  }

  // Render full landing page
  return (
    <div className="min-h-screen bg-[#121417] text-[#F3F4F6] selection:bg-[#FA842D] selection:text-white flex flex-col">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section (H1, Mobile-First, Target Keywords, Immediate WhatsApp CTA) */}
        <Hero />

        {/* 2. Authority & EEAT (Google & IBM Certifications, UC Davis, Illinois, FSG) */}
        <AuthorityEEAT />

        {/* 3. Core Services (Sites Profissionais, Google Ads, Google Meu Negócio, SEO/GEO) */}
        <ServicesSection />

        {/* 4. Pricing Grid (Opção 1, Opção 2 Mais Vendida, Opção 3 Aceleração Máxima) */}
        <PricingSection onOpenPlanosPage={() => navigateTo('planos')} />

        {/* 5. Interactive Potential Simulator & Custom Diagnostic */}
        <PresenceSimulator />

        {/* 6. Local Presence & Google Business Profile (Caxias do Sul - Bairro Exposição) */}
        <LocalPresenceGBP />

        {/* 7. Why Choose Us (SXO, GEO, Real Mobile-First Architecture) */}
        <WhyChooseUs />

        {/* 8. Social Proof & Verified Testimonials */}
        <Testimonials />

        {/* 9. High-Impact Closing CTA Banner */}
        <section id="conversao-final" className="py-16 bg-gradient-to-br from-orange-950/35 via-[#181A1D] to-stone-900 border-y border-orange-500/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Sem Burocracia • Resposta Rápida</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Pronto para colocar sua empresa na primeira página do Google?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Não perca clientes para a concorrência. Converse diretamente com nosso estrategista pelo WhatsApp e descubra o plano exato para atrair contatos qualificados.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                id="final-cta-whatsapp"
                href={buildWhatsAppUrl("Olá! Gostaria de falar sobre um projeto para minha empresa Aparecer no Google.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all cursor-pointer animate-whatsapp-pulse"
              >
                <MessageCircle className="w-6 h-6 fill-slate-950 text-slate-950" />
                <span>Chamar no WhatsApp ({COMPANY_INFO.phoneFormatted})</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </a>

              <button
                type="button"
                onClick={() => navigateTo('planos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FA842D] hover:bg-[#ea731b] text-white font-bold px-6 py-4 rounded-xl text-base transition-colors shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <span>Ver Opções de Planos e Preços</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Atendimento Direto com Especialista
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Caxias do Sul, Serra Gaúcha, Brasil & Exterior
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Sites Mobile-First Ultra Rápidos
              </span>
            </div>
          </div>
        </section>

        {/* 10. FAQ Accordion (Common queries, SEO snippets) */}
        <FAQSection />
      </main>

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer onNavigateToPlanos={() => navigateTo('planos')} />
    </div>
  );
}

