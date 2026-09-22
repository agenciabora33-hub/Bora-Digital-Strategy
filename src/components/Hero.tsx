import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Star, Award, TrendingUp, CheckCircle2, Search, MapPin } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-gray-800/60"
    >
      {/* Subtle Background Glows without AI clichés */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[450px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-[220px] h-[220px] bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Pills / Micro badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-600/40 text-blue-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Certificações Oficiais Google & IBM GenAI</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-gray-300 text-xs sm:text-sm font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Sede em Caxias do Sul/RS • Brasil e Exterior</span>
          </div>
        </div>

        {/* Central Core Pitch (H1 and Value Proposition) */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-display">
            Sua empresa pronta para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 underline decoration-blue-500/40 decoration-wavy">
              Aparecer no Google
            </span>{' '}
            e receber clientes diretos no WhatsApp
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Especialistas em desenvolvimento de <strong className="text-white font-semibold">site profissional</strong> e{' '}
            <strong className="text-white font-semibold">site para profissionais liberais</strong>, campanhas de{' '}
            <strong className="text-white font-semibold">anúncio patrocinado no Google</strong> (Google Ads) e{' '}
            <strong className="text-white font-semibold">cadastro no Google Meu Negócio</strong> de alta autoridade.
          </p>

          {/* Quick Pillars Chips */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Mobile-First Ultra Rápido</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Foco Total em Contato no WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pronto para SEO, GEO e IAs</span>
            </div>
          </div>

          {/* Action CTAs (Mobile-First touch target ≥ 44px) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="hero-primary-cta"
              href={buildWhatsAppUrl("Olá! Quero colocar minha empresa para aparecer no Google e receber contatos no WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all animate-whatsapp-pulse cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 text-slate-950" />
              <span>Solicitar Consultoria no WhatsApp</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </a>

            <a
              id="hero-secondary-cta"
              href="#simulador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base px-6 py-4 rounded-xl transition-colors hover:border-slate-600"
            >
              <Search className="w-5 h-5 text-blue-400" />
              <span>Simular Potencial da Minha Região</span>
            </a>
          </div>

          {/* Live response and trust prompt */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Atendimento humano e direto pelo número <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
          </div>
        </div>

        {/* Proof & Impact Metrics Bar */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-display">100%</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Arquitetura Mobile-First focada em conversão</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">&lt; 5 min</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Tempo médio de resposta no WhatsApp</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">6+</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Certificações de Excelência (Google, IBM, UC Davis)</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">Caxias do Sul</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Sede no Bairro Exposição e alcance global</p>
          </div>
        </div>
      </div>
    </section>
  );
};
