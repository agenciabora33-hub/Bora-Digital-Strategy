import React, { useState } from 'react';
import { Check, MessageCircle, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Flame, ExternalLink, Copy, CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS, PRICING_RULES, buildWhatsAppUrl, COMPANY_INFO } from '../data/content';
import { TiltCard } from './3d/TiltCard';

interface PricingSectionProps {
  onOpenPlanosPage?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenPlanosPage }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const copyProposalUrl = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/planos` : 'https://boradigital.com.br/planos';
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <section id="planos" className="py-20 bg-[#121417] border-b border-gray-800/80 relative">
      {/* Background glow behind highlighted plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-[#FA842D]/12 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Planos Transparentes & Sem Pegadinhas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Planos e Opções de Investimento
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            Escolha o nível de aceleração ideal para o momento da sua empresa. Da presença digital profissional à dominância total nas buscas e anúncios do Google.
          </p>

          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-medium">
            <span>*</span>
            <span>Os valores podem sofrer alterações conforme a demanda e especificidades de cada cliente.</span>
          </p>
        </div>

        {/* Pricing Grid: Mobile stacked vertical, Desktop 3 comparative columns with 3D Tilt */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;

            return (
              <TiltCard key={plan.id} intensity={isHighlight ? 8 : 5} depth={isHighlight ? 25 : 12} className="h-full">
                <div
                  id={`card-${plan.id}`}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 h-full backdrop-blur-sm ${
                    isHighlight
                      ? 'bg-gradient-to-b from-[#272B31] via-[#1E2227] to-[#16181B] border-2 border-[#FA842D] shadow-[0_15px_45px_rgba(250,132,45,0.25)] lg:-translate-y-2 z-10'
                      : 'bg-[#191C20]/95 border border-[#2D3238] hover:border-[#3E454E] shadow-xl'
                  }`}
                >
                {/* Top Badge for OPÇÃO 3 (Mais Vendida) */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#25D366] text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      <Flame className="w-3.5 h-3.5 fill-slate-950" />
                      {plan.badge || 'MAIS VENDIDA'}
                    </span>
                  </div>
                )}

                <div>
                  {/* Option Label Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isHighlight ? 'text-emerald-400' : 'text-gray-400'
                      }`}
                    >
                      {plan.optionLabel}
                    </span>
                    {!isHighlight && plan.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-950/80 border border-orange-700/60 text-orange-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Plan Title & Objective */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-display mb-2">
                    {plan.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 min-h-[38px] leading-relaxed mb-6">
                    {plan.objective}
                  </p>

                  {/* Price Block: Setup + Monthly */}
                  <div className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-4 mb-6">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-gray-400 uppercase font-semibold">Setup inicial:</span>
                      <span className="text-lg sm:text-xl font-bold text-white font-display">
                        {plan.setupPrice}
                      </span>
                    </div>

                    <div className="my-2 border-t border-slate-800" />

                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-emerald-400 uppercase font-semibold">Manutenção & Gestão:</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">
                          {plan.monthlyPrice}
                        </span>
                        <span className="text-xs text-gray-400"> / mês</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Recursos e Entregáveis Inclusos:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isHighlight
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : 'bg-orange-500/20 text-[#FA842D] border border-orange-500/30'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <div>
                          <p className="font-semibold text-white leading-snug">{feature.text}</p>
                          {feature.detail && (
                            <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{feature.detail}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button directly to WhatsApp */}
                <div>
                  <a
                    id={`btn-plano-${plan.id}`}
                    href={buildWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-extrabold py-3.5 px-4 rounded-xl text-sm sm:text-base transition-all duration-200 active:scale-98 shadow-md ${
                      isHighlight
                        ? 'bg-[#25D366] hover:bg-[#20ba59] text-slate-950 hover:shadow-emerald-500/30 shadow-emerald-500/20 animate-whatsapp-pulse'
                        : 'bg-[#FA842D] hover:bg-[#ea731b] text-white hover:shadow-orange-500/25'
                    }`}
                  >
                    <MessageCircle
                      className={`w-5 h-5 ${isHighlight ? 'fill-slate-950 text-slate-950' : 'fill-white text-white'}`}
                    />
                    <span>Contratar {plan.optionLabel.split('•')[0].trim()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-center text-gray-400 mt-2">
                    Resposta em minutos via WhatsApp ({COMPANY_INFO.phoneFormatted})
                  </p>
                </div>
              </div>
            </TiltCard>
          );
        })}
        </div>

        {/* 3. Observações e Regras de Negócio (Microcopy de Rodapé do Bloco) */}
        <div className="mt-12 bg-[#1B1E23] border border-[#2D3136] rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-[#FA842D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Observações e Regras Comerciais da Proposta
              </h4>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-300">
                {PRICING_RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Banner para Enviar Link Separado aos Clientes */}
        <div className="mt-8 bg-gradient-to-r from-orange-950/40 via-[#1C1F23] to-stone-900 border border-orange-500/35 rounded-2xl p-5 sm:p-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA842D] flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Link Exclusivo para Clientes
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Deseja encaminhar esta proposta completa em uma página separada?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Criamos uma página limpa e executiva com comparativo detalhado para o cliente analisar e confirmar a escolha via WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={copyProposalUrl}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-stone-800 hover:bg-stone-700 text-gray-200 border border-stone-600 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
              title="Copiar URL direta da proposta"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#FA842D]" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>

            {onOpenPlanosPage ? (
              <button
                type="button"
                onClick={onOpenPlanosPage}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#FA842D] hover:bg-[#ea731b] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer"
              >
                <span>Ver Página de Proposta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <a
                href="/planos"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-[#FA842D] hover:bg-[#ea731b] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-orange-500/20"
              >
                <span>Ver Página de Proposta</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
