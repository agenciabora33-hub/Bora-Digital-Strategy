import React from 'react';
import { Globe, Target, MapPinned, Zap, ArrowRight, CheckCircle2, MessageCircle, Smartphone } from 'lucide-react';
import { SERVICES, buildWhatsAppUrl } from '../data/content';
import { TiltCard } from './3d/TiltCard';

export const ServicesSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'site-profissional':
        return <Globe className="w-6 h-6 text-[#FA842D]" />;
      case 'google-ads':
        return <Target className="w-6 h-6 text-emerald-400" />;
      case 'google-meu-negocio':
        return <MapPinned className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#121417] relative border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-4 h-4" />
            <span>Soluções Mobile-First de Alta Conversão</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Serviços Estratégicos para Sua Empresa Aparecer no Google
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300">
            Não criamos páginas estáticas sem vida. Estruturamos canais de aquisição ativa pensados para transformar pessoas que buscam no celular em conversas reais com sua equipe no WhatsApp.
          </p>
        </div>

        {/* 3D Services Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <TiltCard key={service.id} intensity={6} depth={15} className="h-full">
              <div className="bg-[#191C20]/90 rounded-3xl p-7 sm:p-8 border border-[#2D3238] hover:border-orange-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  {/* Header with Icon and Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center shadow-inner">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-stone-800/90 text-orange-300 border border-stone-700">
                      {service.badge}
                    </span>
                  </div>

                  {/* Sub-Keyword Headline & Main Title */}
                  <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wide mb-1">
                    {service.headlineKeyword}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Target Audience */}
                  <div className="bg-stone-900/80 rounded-xl p-3.5 border border-stone-800 mb-5 text-xs sm:text-sm text-stone-300">
                    <strong className="text-white block mb-1">Público recomendado:</strong>
                    {service.targetAudience}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs uppercase tracking-wider text-stone-400 font-bold">
                      O que está incluso no projeto:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Conversion Objective */}
                  <div className="text-xs text-orange-200 bg-orange-950/30 border border-orange-800/40 p-3 rounded-lg mb-6">
                    <strong className="text-white">Objetivo final: </strong>
                    {service.conversionFocus}
                  </div>
                </div>

                {/* Action Button to WhatsApp */}
                <a
                  href={buildWhatsAppUrl(service.whatsappPresetMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-bold py-3.5 px-5 rounded-xl text-sm sm:text-base transition-all shadow-md hover:shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>Pedir Orçamento Deste Serviço</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Banner with combo package */}
        <div className="mt-12 bg-gradient-to-r from-stone-900 via-orange-950/40 to-stone-900 border border-orange-500/30 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
              Estratégia 360º de Máxima Tração
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Combo Completo: Site Profissional + Google Ads + Google Meu Negócio
            </h4>
            <p className="text-sm text-gray-300 mt-2 max-w-2xl">
              A fórmula definitiva para empresas e profissionais liberais que querem dominar a primeira página do Google em Caxias do Sul e em todo o país simultaneamente.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl("Olá! Tenho interesse no Combo Completo (Site Profissional + Google Ads + Google Meu Negócio). Poderia me passar os detalhes?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Consultar Combo no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
