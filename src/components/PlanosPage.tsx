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

interface PlanosPageProps {
  onBackToHome?: () => void;
}

export const PlanosPage: React.FC<PlanosPageProps> = ({ onBackToHome }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('opcao-2');
  const [clientCompanyName, setClientCompanyName] = useState<string>('');

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];

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
    <div className="min-h-screen bg-[#070A10] text-[#F3F4F6] selection:bg-[#2563EB] selection:text-white">
      {/* Top Proposal Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-gray-800/80 py-3.5 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onBackToHome && (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white bg-slate-900 border border-slate-700/80 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                title="Voltar ao site institucional principal"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Voltar ao site</span>
              </button>
            )}

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-blue-500/40 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-transparent.png"
                  alt="Bora Digital Strategy"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white leading-tight font-display">
                  BORA <span className="text-blue-500 font-extrabold">DIGITAL</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  Proposta Comercial Online
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Share / Copy Link Button for Client Delivery */}
            <button
              type="button"
              onClick={copyProposalLink}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                copiedLink
                  ? 'bg-emerald-500 text-slate-950 font-extrabold'
                  : 'bg-slate-800 hover:bg-slate-700 text-gray-200 border border-slate-600/70'
              }`}
              title="Copiar link desta proposta para enviar ao cliente"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Copiar Link da Proposta</span>
                  <span className="sm:hidden">Copiar Link</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Consultant */}
            <a
              href={buildWhatsAppUrl("Olá! Estou visualizando a página de planos e gostaria de tirar uma dúvida com o estrategista.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-3.5 py-2 rounded-xl text-xs transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
              <span className="hidden md:inline">WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
              <span className="md:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero: Proposta Executiva & Orientação ao Cliente */}
      <section className="pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-b border-gray-800/60 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

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

          {/* Quick Agency Share Helper Box */}
          <div className="mt-6 p-4 rounded-2xl bg-[#0F1626] border border-blue-500/30 inline-flex flex-col sm:flex-row items-center gap-3 text-xs text-gray-300 max-w-xl mx-auto text-left shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
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
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0 cursor-pointer"
            >
              {copiedLink ? 'Copiado!' : 'Copiar URL'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards (1, 2 [Mais Vendida], 3) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlight = plan.isPopular;
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                id={`proposal-card-${plan.id}`}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 cursor-pointer ${
                  isHighlight
                    ? 'bg-gradient-to-b from-[#182640] via-[#121D33] to-[#0E172A] border-2 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.22)] lg:-translate-y-2'
                    : 'bg-[#111827] border border-gray-800 hover:border-gray-700 shadow-xl'
                } ${isSelected ? 'ring-2 ring-emerald-400' : ''}`}
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
                        isHighlight ? 'text-emerald-400' : 'text-gray-400'
                      }`}
                    >
                      {plan.optionLabel}
                    </span>
                    {!isHighlight && plan.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-950 border border-blue-800/60 text-blue-300">
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
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
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
                        : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/20'
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
            );
          })}
        </div>
      </section>

      {/* Interactive Selection Assistant for Clients */}
      <section className="py-12 bg-[#0C121E] border-y border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111A2C] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
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
                        ? 'bg-blue-600/20 border-emerald-400 text-white ring-1 ring-emerald-400'
                        : 'bg-slate-900/80 border-slate-800 text-gray-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400">{p.optionLabel.split('•')[0]}</span>
                      {active && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
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
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4" />
            <span>Comparativo Lado a Lado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            O Que Está Incluso em Cada Opção
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            Transparência total para você tomar a melhor decisão para o seu momento.
          </p>
        </div>

        <div className="overflow-x-auto bg-[#111827] border border-gray-800 rounded-2xl shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-[#0E131F]">
                <th className="p-4 sm:p-5 font-bold text-gray-300">Recurso / Entregável</th>
                <th className="p-4 sm:p-5 font-bold text-gray-300 text-center">Opção 1</th>
                <th className="p-4 sm:p-5 font-extrabold text-emerald-400 text-center bg-emerald-950/20 border-x border-emerald-500/20">
                  Opção 2 (Mais Vendida)
                </th>
                <th className="p-4 sm:p-5 font-bold text-gray-300 text-center">Opção 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-medium text-gray-200">{row.feature}</td>
                  <td className="p-4 text-center text-gray-300">{row.op1}</td>
                  <td className="p-4 text-center font-semibold text-emerald-300 bg-emerald-950/20 border-x border-emerald-500/20">
                    {row.op2}
                  </td>
                  <td className="p-4 text-center text-gray-300">{row.op3}</td>
                </tr>
              ))}
              <tr className="bg-[#0E131F] font-bold">
                <td className="p-4 text-white">Investimento</td>
                <td className="p-4 text-center text-white">
                  R$ 1.799
                  <br />
                  <span className="text-xs text-gray-400 font-normal">+ R$ 190/mês</span>
                </td>
                <td className="p-4 text-center text-emerald-400 bg-emerald-950/30 border-x border-emerald-500/20 font-extrabold text-base">
                  R$ 1.999
                  <br />
                  <span className="text-xs text-emerald-300 font-normal">+ R$ 499/mês</span>
                </td>
                <td className="p-4 text-center text-white">
                  R$ 2.499
                  <br />
                  <span className="text-xs text-gray-400 font-normal">+ R$ 699/mês</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Regras Comerciais & Segurança */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#131B2B] border border-gray-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider font-display">
                Observações e Regras Comerciais da Proposta
              </h4>
              <ul className="mt-3.5 space-y-2.5 text-xs sm:text-sm text-gray-300">
                {PRICING_RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold text-base leading-none">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5 text-gray-400">
                  <span className="text-blue-400 font-bold text-base leading-none">•</span>
                  <span>Formas de pagamento facilitadas: Cartão de Crédito ou PIX, com emissão de nota fiscal de prestação de serviços digitais.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples da Proposta */}
      <footer className="py-10 border-t border-gray-800/80 bg-black/60 text-center text-xs text-gray-400 px-4">
        <p className="font-semibold text-gray-300">
          {COMPANY_INFO.fullName}
        </p>
        <p className="mt-1">
          {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite} • {COMPANY_INFO.address.neighborhood}, {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}
        </p>
        <p className="mt-1 text-emerald-400 font-bold">
          WhatsApp de Atendimento: {COMPANY_INFO.phoneFormatted}
        </p>
        <p className="mt-4 text-gray-400">
          © {new Date().getFullYear()} Bora Digital Strategy. Proposta com validade de 15 dias.
        </p>
      </footer>
    </div>
  );
};
