import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
  TrendingUp,
  CheckCircle2,
  Search,
  MapPin,
  Sparkles,
  Zap,
  Globe,
  Flame,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { TiltCard } from './3d/TiltCard';

// Lazy load Three.js 3D scene so it does not block initial mobile render or inflate main bundle
const Hero3DScene = React.lazy(() =>
  import('./3d/Hero3DScene').then((m) => ({ default: m.Hero3DScene }))
);

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'maps' | 'whatsapp'>('search');
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Enable 3D WebGL animation on both mobile & desktop (respecting reduced-motion preference)
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldRender3D(!prefersReduced);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-stone-800/80"
    >
      {/* 3D Global Scene - Active on Both Mobile and Desktop */}
      {shouldRender3D && (
        <React.Suspense fallback={null}>
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <Hero3DScene className="w-full h-full" />
          </div>
        </React.Suspense>
      )}

      {/* 3D Dynamic Ambient Light Glows with Official Google Colors */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[720px] h-[340px] sm:h-[620px] bg-[#4285F4]/12 blur-[110px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-3 sm:right-8 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] bg-[#EA4335]/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 sm:left-1/4 w-[240px] sm:w-[340px] h-[240px] sm:h-[340px] bg-[#FBBC05]/10 blur-[90px] sm:blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-8 right-4 sm:right-1/4 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] bg-[#34A853]/10 blur-[90px] sm:blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-8 w-[380px] h-[380px] bg-[#EA4335]/08 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[340px] h-[340px] bg-[#FBBC05]/08 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-8 right-1/4 w-[320px] h-[320px] bg-[#34A853]/08 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Punchy High-Converting Copy & Direct Action */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Clean Unboxed Kicker Metadata (Anti-slop) */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FA842D] mb-4 tracking-wide uppercase">
              <Award className="w-4 h-4 text-[#FA842D]" />
              <span>Certificações Oficiais Google & IBM</span>
            </div>

            {/* Main Conversion Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.14] font-display">
              Especialistas em dar{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FA842D] to-amber-300">
                  máxima visibilidade
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FA842D] to-transparent rounded-full opacity-80" />
              </span>{' '}
              a negócios locais para gerar mais clientes, vendas, agendamentos e dinheiro.
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="mt-5 text-base sm:text-lg lg:text-xl text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Com <strong className="text-white font-semibold">atendimento global</strong> e sede em <strong className="text-white font-semibold">Caxias do Sul/RS</strong>, desenvolvemos sites mobile-first de conversão imediata, campanhas lucrativas no <strong className="text-white font-semibold">Google Ads</strong> e dominância no <strong className="text-white font-semibold">Google Meu Negócio</strong> para transformar quem busca em dinheiro no seu caixa.
            </p>

            {/* Benefit Checkmarks */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento Global com Sede em Caxias do Sul</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mais Vendas, Agendamentos & Dinheiro no Caixa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Visibilidade Máxima no Google & Maps</span>
              </div>
            </div>

            {/* High-Impact Dual CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-primary-cta"
                href={buildWhatsAppUrl("Olá! Quero dar máxima visibilidade ao meu negócio local e gerar mais clientes, agendamentos, vendas e faturamento. Poderia me apresentar uma proposta?")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold text-base sm:text-lg px-8 py-4.5 rounded-2xl shadow-[0_12px_30px_-5px_rgba(37,211,102,0.35)] hover:shadow-[0_18px_35px_-5px_rgba(37,211,102,0.45)] transition-all duration-200 animate-whatsapp-pulse cursor-pointer border border-emerald-400/40"
              >
                <MessageCircle className="w-6 h-6 fill-slate-950 text-slate-950 transition-transform group-hover:scale-110" />
                <span>Gerar Mais Clientes & Vendas no WhatsApp</span>
                <ArrowRight className="w-5 h-5 text-slate-950 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#simulador"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1B1E23] hover:bg-[#22272E] border border-stone-700/80 hover:border-orange-500/60 text-white font-semibold text-base px-6 py-4.5 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <Search className="w-5 h-5 text-[#FA842D]" />
                <span>Simular Visibilidade e Agendamentos</span>
              </a>
            </div>

            {/* Live Reponse Guarantee */}
            <div className="mt-5 flex items-center justify-center lg:justify-start gap-2.5 text-xs text-stone-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>
                Atendimento global online agora: resposta em menos de 5 min via WhatsApp ({COMPANY_INFO.phoneFormatted})
              </span>
            </div>

            {/* Quick Proof Metrics Strip - Centralized on all screens */}
            <div className="mt-10 max-w-xl mx-auto bg-stone-900/70 backdrop-blur-md border border-stone-800/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-black/30">
              <div className="grid grid-cols-3 divide-x divide-stone-800/90 text-center">
                <div className="px-2 sm:px-3">
                  <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display tracking-tight">+340%</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-200 font-semibold leading-tight">Vendas & Clientes</p>
                  <p className="text-[10px] text-stone-400 hidden sm:block mt-0.5">Mais Dinheiro no Caixa</p>
                </div>
                <div className="px-2 sm:px-3">
                  <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display tracking-tight">Top 1</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-200 font-semibold leading-tight">Visibilidade Local</p>
                  <p className="text-[10px] text-stone-400 hidden sm:block mt-0.5">Google Maps & Busca</p>
                </div>
                <div className="px-2 sm:px-3">
                  <div className="flex items-center justify-center gap-1.5 text-[#FA842D] mb-1">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display tracking-tight">Global</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-200 font-semibold leading-tight">Atendimento Global</p>
                  <p className="text-[10px] text-stone-400 hidden sm:block mt-0.5">Sede Caxias do Sul/RS</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 3D Holographic Showcase Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Foreground 3D Tilt Showcase Card */}
            <div className="relative z-20 w-full max-w-md">
              <TiltCard intensity={10} depth={20} className="w-full">
                <div className="glass-panel-3d rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-stone-700/60 shadow-2xl">
                  
                  {/* Top Bar with Interactive 3D Tabs */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-800/90 gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Interactive Tab Switcher */}
                    <div className="flex items-center bg-stone-900/90 p-1 rounded-xl border border-stone-800 text-[11px] font-semibold">
                      <button
                        type="button"
                        onClick={() => setActiveTab('search')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          activeTab === 'search'
                            ? 'bg-[#FA842D] text-white shadow-sm'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        Google
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('maps')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          activeTab === 'maps'
                            ? 'bg-[#FA842D] text-white shadow-sm'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        Maps
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('whatsapp')}
                        className={`px-2.5 py-1 rounded-lg transition-all ${
                          activeTab === 'whatsapp'
                            ? 'bg-[#25D366] text-slate-950 font-bold shadow-sm'
                            : 'text-stone-400 hover:text-white'
                        }`}
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Tab 1: Google Search #1 Simulation */}
                  {activeTab === 'search' && (
                    <div className="mt-5 space-y-4 animate-fadeIn">
                      <div className="bg-stone-900/90 rounded-xl p-3 border border-stone-800 flex items-center gap-2.5">
                        <Search className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="text-xs text-stone-200 font-mono">
                          "seu serviço + sua cidade (ex: clínica, advocacia, comércio)"
                        </span>
                      </div>

                      {/* Result card highlighted */}
                      <div className="bg-[#121417] p-4 rounded-2xl border border-orange-500/40 shadow-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-[#FA842D] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Patrocinado · 1º Resultado da Cidade
                          </span>
                          <span className="text-[10px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 rounded">
                            CTR 19.8%
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-white hover:text-orange-300 transition-colors">
                          Sua Empresa no Topo do Google na Sua Região
                        </h4>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          Receba mais pedidos de orçamento e agendamentos direto no WhatsApp. Especialistas em colocar negócios locais em 1º lugar com atendimento global.
                        </p>
                        <div className="pt-2 flex items-center gap-2 text-[11px] text-stone-400">
                          <span className="text-emerald-400 font-medium">✓ Carregamento 0.4s</span>
                          <span>·</span>
                          <span>✓ Mais Vendas & Faturamento</span>
                        </div>
                      </div>

                      <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800 text-xs text-stone-300 flex items-center justify-between">
                        <span>Pessoas buscando na sua cidade:</span>
                        <strong className="text-white font-mono">+2.500 buscas/mês</strong>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Google Maps Dominance Simulation */}
                  {activeTab === 'maps' && (
                    <div className="mt-5 space-y-4 animate-fadeIn">
                      <div className="bg-[#121417] p-4 rounded-2xl border border-orange-500/40 shadow-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FA842D] font-extrabold shrink-0">
                            TOP 1
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-white leading-tight">
                              Seu Negócio Local em Destaque
                            </h4>
                            <p className="text-xs text-[#FA842D] font-medium mt-0.5">
                              Ficha Verificada & Otimizada no Google Maps
                            </p>
                            <div className="flex items-center gap-1.5 mt-1 text-xs text-amber-400 font-semibold">
                              <span>5.0</span>
                              <span>★★★★★</span>
                              <span className="text-stone-400 font-normal">(Avaliações Verificadas)</span>
                            </div>
                            <p className="text-[11px] text-stone-400 mt-1">
                              Sua Cidade & Região • Atendimento Físico e Online
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 text-center text-xs">
                          <div className="bg-stone-900/80 p-2 rounded-lg border border-stone-800">
                            <span className="text-[10px] text-stone-400 block">Posicionamento:</span>
                            <strong className="text-emerald-400">1º Lugar no Google Maps</strong>
                          </div>
                          <div className="bg-stone-900/80 p-2 rounded-lg border border-stone-800">
                            <span className="text-[10px] text-stone-400 block">Resultado:</span>
                            <strong className="text-white">Mais Ligações & Rotas</strong>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800 text-xs text-stone-300">
                        <strong className="text-white block mb-0.5">Vantagem de Visibilidade:</strong>
                        Negócios locais com mapa otimizado recebem até <span className="text-emerald-400 font-bold">5x mais agendamentos e clientes presenciais</span>.
                      </div>
                    </div>
                  )}

                  {/* Tab 3: WhatsApp Conversion Lead Machine */}
                  {activeTab === 'whatsapp' && (
                    <div className="mt-5 space-y-3 animate-fadeIn">
                      {/* Incoming Simulated WhatsApp bubble 1 */}
                      <div className="bg-stone-900/90 rounded-2xl rounded-tl-sm p-3.5 border border-stone-800 text-xs space-y-1 max-w-[90%]">
                        <p className="text-[10px] text-emerald-400 font-bold">Novo Cliente (via Google Search):</p>
                        <p className="text-stone-200">
                          "Olá! Vi a sua empresa no topo do Google e gostaria de fazer um agendamento para esta semana."
                        </p>
                        <span className="text-[10px] text-stone-500 block text-right font-mono">14:32</span>
                      </div>

                      {/* Reply bubble */}
                      <div className="bg-emerald-950/60 rounded-2xl rounded-tr-sm p-3.5 border border-emerald-800/60 text-xs space-y-1 max-w-[90%] ml-auto text-right">
                        <p className="text-[10px] text-emerald-300 font-bold">Seu WhatsApp Comercial:</p>
                        <p className="text-emerald-100 text-left">
                          "Olá! Perfeito, temos horários disponíveis para você. Vamos confirmar seu agendamento?"
                        </p>
                        <span className="text-[10px] text-emerald-400 block text-right font-mono">14:33 · Venda Fechada</span>
                      </div>

                      <div className="pt-2">
                        <a
                          href={buildWhatsAppUrl("Olá! Quero esse fluxo diário de novos clientes, agendamentos e vendas no WhatsApp da minha empresa.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md active:scale-95"
                        >
                          <MessageCircle className="w-4 h-4 fill-slate-950" />
                          <span>Quero Esse Volume de Vendas no Meu WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Micro Footer Inside Card */}
                  <div className="mt-5 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                    <span className="flex items-center gap-1.5 text-stone-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Motor de Aquisição Ativa
                    </span>
                    <a
                      href={buildWhatsAppUrl("Olá! Gostaria de falar sobre a estratégia da minha empresa.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FA842D] hover:underline font-semibold"
                    >
                      Ver Demonstração &rarr;
                    </a>
                  </div>

                </div>
              </TiltCard>

              {/* Floating 3D Satellite Badge 1 (Top Right) */}
              <div className="absolute -top-3.5 -right-2 sm:-top-5 sm:-right-5 z-30 flex items-center gap-2 sm:gap-2.5 bg-[#181B20]/95 border border-emerald-500/40 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.12)] backdrop-blur-md animate-float-medium pointer-events-none select-none">
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[9px] sm:text-[10px] text-stone-400 uppercase font-bold tracking-wider">Velocidade</p>
                  <p className="text-[11px] sm:text-[13px] font-extrabold text-white tracking-tight">0.4s Core Web Vitals</p>
                </div>
              </div>

              {/* Floating 3D Satellite Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-3.5 left-2 sm:-bottom-5 sm:left-3 lg:-left-6 z-30 flex items-center gap-2 sm:gap-2.5 bg-[#181B20]/95 border border-orange-500/40 px-2.5 py-1.5 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(250,132,45,0.12)] backdrop-blur-md animate-float-reverse pointer-events-none select-none">
                <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-orange-500/25 to-amber-500/15 border border-orange-500/30 text-[#FA842D] flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FA842D]" />
                </span>
                <div className="leading-tight">
                  <p className="text-[9px] sm:text-[10px] text-stone-400 uppercase font-bold tracking-wider">Retorno</p>
                  <p className="text-[11px] sm:text-[13px] font-extrabold text-white tracking-tight flex items-center gap-1 sm:gap-1.5">
                    <span>+340% Clientes</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
