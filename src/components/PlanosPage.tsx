import React, { useState, useEffect } from 'react';
import {
  Check,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  Copy,
  CheckCircle2,
  Share2,
  ArrowLeft,
  Clock,
  Send,
  Building2,
  HelpCircle,
  FileText,
  Star
} from 'lucide-react';
import { PRICING_PLANS, PRICING_RULES, COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { PricingPlan } from '../types';
import { TiltCard } from './3d/TiltCard';
import { Ambient3DGrid } from './3d/Ambient3DGrid';

interface PlanosPageProps {
  onBackToHome?: () => void;
}

export const PlanosPage: React.FC<PlanosPageProps> = ({ onBackToHome }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('opcao-3');
  const [clientCompanyName, setClientCompanyName] = useState<string>('');

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[2];

  const getProposalUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/planos`;
    }
    return 'https://boradigital.com.br/planos';
  };

  const copyProposalLink = async () => {
    const url = getProposalUrl();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar link:', err);
    }
  };

  const handleCustomWhatsAppSend = () => {
    const company = clientCompanyName.trim() ? ` para a empresa "${clientCompanyName.trim()}"` : '';
    const message = `Olá! Analisei a proposta comercial da Bora Digital Strategy e escolhi a *${selectedPlan.optionLabel}* (${selectedPlan.title})${company}.\n\nValores:\n• Setup: ${selectedPlan.setupPrice}\n• Mensalidade: ${selectedPlan.monthlyPrice}/mês\n\nComo damos início à contratação?`;
    window.open(buildWhatsAppUrl(message), '_blank');
  };

  // Detailed comparison matrix rows
  const comparisonFeatures = [
    {
      feature: 'Hospedagem de Alta Performance & Segurança SSL',
      op1: 'Incluso',
      op2: 'Incluso',
      op3: 'Incluso',
    },
    {
      feature: 'Indexação no Google Search, Bing & IAs (GEO)',
      op1: 'Incluso',
      op2: 'Incluso',
      op3: 'Incluso',
    },
    {
      feature: 'Design Mobile-First com WhatsApp Integrado',
      op1: 'Incluso',
      op2: 'Incluso',
      op3: 'Incluso',
    },
    {
      feature: 'Manutenção Mensal de Conteúdo no Site',
      op1: '1 alteração / mês',
      op2: '2 alterações / mês',
      op3: 'Ilimitada',
    },
    {
      feature: 'Otimização Completa do Perfil Google Meu Negócio',
      op1: '—',
      op2: 'Incluso',
      op3: 'Incluso (Intensivo)',
    },
    {
      feature: 'Gestão de Reputação (Respostas Profissionais a Reviews)',
      op1: '—',
      op2: 'Incluso',
      op3: 'Incluso',
    },
    {
      feature: 'Postagens Semanais com Fotos/Vídeos no Perfil Google',
      op1: '—',
      op2: '1 post por semana',
      op3: '2 posts por semana',
    },
    {
      feature: 'Gestão de Campanhas de Anúncios no Google Ads (ROI)',
      op1: '—',
      op2: '—',
      op3: 'Incluso (Criação & Otimização)',
    },
    {
      feature: 'Relatório & Acompanhamento Estratégico',
      op1: 'Básico',
      op2: 'Mensal',
      op3: 'Quinzenal / Contínuo',
    },
  ];

  return (
    <div className="min-h-screen bg-[#121417] text-[#F3F4F6] selection:bg-[#FA842D] selection:text-white relative overflow-hidden">
      {/* 3D Ambient Particle Grid */}
      <Ambient3DGrid />

      {/* Top Proposal Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#121417]/95 backdrop-blur-md border-b border-[#2A2E33] py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white bg-stone-900 border border-stone-700/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Voltar ao site institucional principal"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar ao site</span>
              </button>
            )}

            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Bora Digital Strategy"
                width="210"
                height="40"
                className="h-8 sm:h-10 w-auto max-w-[170px] sm:max-w-[210px] object-contain"
              />
              <span className="hidden sm:inline-block text-[11px] text-stone-400 font-medium border-l border-stone-700 pl-3">
                Proposta Comercial Online
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct WhatsApp Consultant */}
            <a
              href={buildWhatsAppUrl("Olá! Estou visualizando a página de planos e gostaria de tirar uma dúvida com o estrategista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
              <span className="hidden sm:inline">WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Proposta Executiva & Orientação ao Cliente */}
      <section className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-b border-gray-800/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-[#FA842D]/12 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Proposta Oficial • Válida por 15 dias</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Planos Estratégicos de Investimento Digital
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Analise os 3 formatos abaixo preparados pela <strong className="text-white">Bora Digital Strategy</strong> e escolha o nível de aceleração ideal para sua empresa dominar o Google e receber contatos diretos no WhatsApp.
          </p>

          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-amber-300/90 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full font-medium">
            <span>*</span>
            <span>Os valores podem sofrer alterações conforme a demanda e especificidades de cada cliente.</span>
          </p>

          {/* Quick Agency Share Helper Box */}
          <div className="mt-6 p-4 rounded-2xl bg-[#1C1F23] border border-orange-500/35 inline-flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-300 max-w-xl mx-auto text-left shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#FA842D] flex items-center justify-center shrink-0">
              <Share2 className="w-4 h-4" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <p className="font-semibold text-white">Link direto para envio a clientes e sócios:</p>
              <p className="text-gray-400 truncate max-w-xs sm:max-w-md font-mono text-[11px] mt-0.5">
                {getProposalUrl()}
              </p>
            </div>
            <button
              type="button"
              onClick={copyProposalLink}
              className="bg-[#FA842D] hover:bg-[#ea731b] text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0 cursor-pointer shadow-md"
            >
              {copiedLink ? 'Copiado!' : 'Copiar URL'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards (1, 2, 3 [Mais Vendida]) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;
            const isSelected = selectedPlanId === plan.id;

            return (
              <TiltCard key={plan.id} intensity={isHighlight ? 8 : 5} depth={isHighlight ? 25 : 12} className="h-full">
                <div
                  id={`proposal-card-${plan.id}`}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer h-full backdrop-blur-sm ${
                    isHighlight
                      ? 'bg-gradient-to-b from-[#272B31] via-[#1E2227] to-[#16181B] border-2 border-[#FA842D] shadow-[0_15px_45px_rgba(250,132,45,0.25)] lg:-translate-y-2'
                      : 'bg-[#181B1F]/95 border border-[#2A2E33] hover:border-[#3E454E] shadow-xl'
                  } ${isSelected ? 'ring-2 ring-[#FA842D]' : ''}`}
                >
                {/* Highlight Badge */}
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#25D366] text-slate-950 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      <Flame className="w-4 h-4 fill-slate-950" />
                      {plan.badge || 'MAIS VENDIDA'}
                    </span>
                  </div>
                )}

                <div>
                  {/* Option Label */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isHighlight ? 'text-[#FA842D]' : 'text-gray-400'
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

                  {/* Title & Objective */}
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight font-display mb-2">
                    {plan.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-300 min-h-[42px] leading-relaxed mb-6">
                    {plan.objective}
                  </p>

                  {/* Investment Box (Setup + Monthly) */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 mb-6">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-gray-400 uppercase font-semibold">Setup inicial:</span>
                      <span className="text-lg sm:text-xl font-bold text-white font-display">
                        {plan.setupPrice}
                      </span>
                    </div>

                    <div className="my-2.5 border-t border-slate-800/90" />

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

                {/* Direct Action Button */}
                <div>
                  <a
                    id={`btn-escolher-${plan.id}`}
                    href={buildWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 font-extrabold py-4 px-4 rounded-xl text-sm sm:text-base transition-all duration-200 active:scale-98 shadow-md cursor-pointer ${
                      isHighlight
                        ? 'bg-[#25D366] hover:bg-[#20ba59] text-slate-950 hover:shadow-emerald-500/30 animate-whatsapp-pulse'
                        : 'bg-[#FA842D] hover:bg-[#ea731b] text-white hover:shadow-orange-500/25'
                    }`}
                  >
                    <MessageCircle
                      className={`w-5 h-5 ${isHighlight ? 'fill-slate-950 text-slate-950' : 'fill-white text-white'}`}
                    />
                    <span>Escolher {plan.optionLabel.split('•')[0].trim()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[11px] text-center text-gray-400 mt-2.5">
                    Conversa imediata com o estrategista no WhatsApp
                  </p>
                </div>
              </div>
            </TiltCard>
          );
        })}
        </div>
      </section>

      {/* Interactive Selection Assistant for Clients */}
      <section className="py-12 bg-[#15171B] border-y border-[#2A2E33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C2025] border border-orange-500/35 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FA842D]">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  Confirmação Rápida de Escolha
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Selecione o plano desejado e informe o nome da sua empresa para iniciar os trabalhos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {PRICING_PLANS.map((p) => {
                const active = selectedPlanId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPlanId(p.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      active
                        ? 'bg-orange-500/20 border-[#FA842D] text-white ring-1 ring-[#FA842D]'
                        : 'bg-stone-900/80 border-stone-800 text-gray-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FA842D]">{p.optionLabel.split('•')[0]}</span>
                      {active && <CheckCircle2 className="w-4 h-4 text-[#FA842D]" />}
                    </div>
                    <p className="text-xs font-bold text-white mt-1 line-clamp-1">{p.title}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{p.setupPrice} + {p.monthlyPrice}/mês</p>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:flex-1 relative">
                <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={clientCompanyName}
                  onChange={(e) => setClientCompanyName(e.target.value)}
                  placeholder="Nome da sua empresa ou profissional (opcional)"
                  className="w-full bg-stone-950 border border-stone-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#FA842D]"
                />
              </div>

              <button
                type="button"
                onClick={handleCustomWhatsAppSend}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg cursor-pointer shrink-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Confirmar {selectedPlan.optionLabel.split('•')[0].trim()} no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela Comparativa de Recursos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4 text-[#FA842D]" />
            <span>Comparativo Lado a Lado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            O Que Está Incluso em Cada Opção
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Transparência total para você tomar a melhor decisão para o seu momento.
          </p>
        </div>

        <div className="overflow-x-auto bg-[#181B1F] border border-[#2A2E33] rounded-2xl shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#2A2E33] bg-[#141619]">
                <th className="p-4 sm:p-5 font-bold text-gray-300">Recurso / Entregável</th>
                <th className="p-4 sm:p-5 font-bold text-gray-300 text-center">Opção 1</th>
                <th className="p-4 sm:p-5 font-bold text-gray-300 text-center">Opção 2</th>
                <th className="p-4 sm:p-5 font-extrabold text-[#FA842D] text-center bg-orange-950/20 border-x border-orange-500/20">
                  Opção 3 (Mais Vendida)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="hover:bg-stone-800/30 transition-colors">
                  <td className="p-4 font-medium text-gray-200">{row.feature}</td>
                  <td className="p-4 text-center text-gray-300">{row.op1}</td>
                  <td className="p-4 text-center text-gray-300">{row.op2}</td>
                  <td className="p-4 text-center font-semibold text-orange-300 bg-orange-950/20 border-x border-orange-500/20">
                    {row.op3}
                  </td>
                </tr>
              ))}
              <tr className="bg-[#141619] font-bold">
                <td className="p-4 text-white">Investimento</td>
                <td className="p-4 text-center text-white">
                  R$ 1.799
                  <br />
                  <span className="text-xs text-gray-400 font-normal">+ R$ 247/mês</span>
                </td>
                <td className="p-4 text-center text-white">
                  R$ 1.999
                  <br />
                  <span className="text-xs text-gray-400 font-normal">+ R$ 697/mês</span>
                </td>
                <td className="p-4 text-center text-[#FA842D] bg-orange-950/30 border-x border-orange-500/20 font-extrabold text-base">
                  R$ 2.499
                  <br />
                  <span className="text-xs text-orange-300 font-normal">+ R$ 997/mês</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Regras Comerciais & Segurança */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#1C1F23] border border-[#2A2E33] rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 text-[#FA842D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
                Observações e Regras Comerciais da Proposta
              </h4>
              <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-gray-300">
                {PRICING_RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FA842D] font-bold text-base leading-none">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-gray-400">
                  <span className="text-[#FA842D] font-bold text-base leading-none">•</span>
                  <span>Formas de pagamento facilitadas: Cartão de Crédito ou PIX, com emissão de nota fiscal de prestação de serviços digitais.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer da Proposta Comercial */}
      <footer className="py-12 border-t border-gray-800/80 bg-black/70 text-center text-xs text-gray-400 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Ações da Proposta no Rodapé */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={copyProposalLink}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-lg active:scale-95 ${
                copiedLink
                  ? 'bg-emerald-500 text-slate-950 font-extrabold shadow-emerald-500/25'
                  : 'bg-slate-900 hover:bg-slate-800 text-gray-200 border border-slate-700 hover:border-slate-600'
              }`}
              title="Copiar link desta proposta para enviar ao cliente"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Link Copiado para a Área de Transferência!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#FA842D]" />
                  <span>Copiar Link desta Proposta Comercial</span>
                </>
              )}
            </button>

            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-gray-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Site Principal</span>
              </button>
            )}
          </div>

          <div className="space-y-1.5 text-center">
            <p className="font-bold text-gray-200 text-sm">
              {COMPANY_INFO.fullName}
            </p>
            <p className="text-gray-400">
              {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite} • {COMPANY_INFO.address.neighborhood}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
            </p>
            <p className="text-emerald-400 font-bold">
              WhatsApp de Atendimento: {COMPANY_INFO.phoneFormatted}
            </p>
          </div>

          <p className="text-gray-500 pt-3 border-t border-gray-900 w-full text-[11px]">
            © {new Date().getFullYear()} Bora Digital Strategy. Proposta comercial com validade de 15 dias.
          </p>
        </div>
      </footer>
    </div>
  );
};
