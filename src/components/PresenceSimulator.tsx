import React, { useState } from 'react';
import { Calculator, CheckCircle, ArrowRight, MessageCircle, Sparkles, Building, Stethoscope, Scale, Briefcase, Store } from 'lucide-react';
import { BUSINESS_SEGMENTS, buildWhatsAppUrl } from '../data/content';

export const PresenceSimulator: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('medicos-saude');
  const [currentSituation, setCurrentSituation] = useState<string>('sem-site');
  const [targetRegion, setTargetRegion] = useState<string>('caxias-serra');

  const activeSegment = BUSINESS_SEGMENTS.find((s) => s.id === selectedSegmentId) || BUSINESS_SEGMENTS[0];

  const getSegmentIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Store':
        return <Store className="w-5 h-5" />;
      default:
        return <Building className="w-5 h-5" />;
    }
  };

  const getSituationLabel = (key: string) => {
    switch (key) {
      case 'sem-site':
        return 'Ainda não tenho site profissional nem cadastro otimizado';
      case 'site-lento':
        return 'Tenho um site antigo / lento que não gera contatos';
      case 'invisivel-mapa':
        return 'Não apareço nas buscas do Google Meu Negócio no mapa';
      default:
        return 'Já faço anúncios no Google mas quero melhorar o retorno';
    }
  };

  const getRegionLabel = (key: string) => {
    switch (key) {
      case 'caxias-serra':
        return 'Caxias do Sul e Serra Gaúcha';
      case 'rio-grande-sul':
        return 'Todo o Estado do Rio Grande do Sul';
      case 'brasil':
        return 'Nível Brasil (Nacional)';
      default:
        return 'Brasil e Mercado Exterior';
    }
  };

  // Generate customized WhatsApp query message based on selections
  const whatsappSimulatorMessage = `Olá! Fiz a simulação no site da Bora Digital Strategy:
• Segmento: ${activeSegment.name}
• Situação atual: ${getSituationLabel(currentSituation)}
• Região de foco: ${getRegionLabel(targetRegion)}

Gostaria de receber a análise de viabilidade e um plano para gerar contatos no WhatsApp!`;

  return (
    <section id="simulador" className="py-20 bg-[#0E131F] border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            <span>Ferramenta Interativa de Diagnóstico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Simulador de Potencial de Clientes & Estratégia Digital
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Descubra qual a combinação ideal de <strong className="text-white">Site Profissional</strong>, <strong className="text-white">Google Ads</strong> e <strong className="text-white">Google Meu Negócio</strong> para o momento do seu negócio.
          </p>
        </div>

        {/* Interactive Container */}
        <div className="mt-12 bg-[#131B2B] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Segment */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-3">
                  1. Qual é a área ou segmento da sua empresa?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BUSINESS_SEGMENTS.map((segment) => {
                    const isSelected = segment.id === selectedSegmentId;
                    return (
                      <button
                        key={segment.id}
                        type="button"
                        onClick={() => setSelectedSegmentId(segment.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                            : 'bg-slate-900/70 border-slate-800 text-gray-300 hover:border-slate-700'
                        }`}
                      >
                        <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-400'}`}>
                          {getSegmentIcon(segment.iconName)}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold">{segment.name}</p>
                          <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{segment.averageSearchesLocal}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Current Situation */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">
                  2. Qual é o seu momento atual na internet?
                </label>
                <select
                  value={currentSituation}
                  onChange={(e) => setCurrentSituation(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-sm text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="sem-site">Ainda não tenho site nem cadastro otimizado</option>
                  <option value="site-lento">Tenho um site antigo ou lento que não traz clientes</option>
                  <option value="invisivel-mapa">Minha empresa não aparece no Google Meu Negócio / Maps</option>
                  <option value="quero-otimizar-ads">Já faço anúncios, mas o custo por contato está alto</option>
                </select>
              </div>

              {/* Step 3: Target Region */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-300 mb-2">
                  3. Qual a sua abrangência de atendimento?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'caxias-serra', label: 'Caxias & Serra' },
                    { id: 'rio-grande-sul', label: 'Todo o RS' },
                    { id: 'brasil', label: 'Nível Brasil' },
                    { id: 'exterior', label: 'Brasil & Exterior' },
                  ].map((reg) => (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setTargetRegion(reg.id)}
                      className={`p-2.5 rounded-lg border text-xs font-semibold transition-all ${
                        targetRegion === reg.id
                          ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                          : 'bg-slate-900 border-slate-800 text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      {reg.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Diagnosis & WhatsApp Action */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#0B0F17] border border-blue-500/30 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Recomendação Estratégica Bora Digital</span>
              </div>

              <h4 className="text-xl font-bold text-white mb-2 font-display">
                {activeSegment.name}
              </h4>

              <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-3 mb-4">
                <p className="text-xs text-blue-300">
                  <strong className="text-white">Demanda estimada:</strong> {activeSegment.averageSearchesLocal}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
                {activeSegment.description}
              </p>

              <div className="space-y-2.5 mb-6 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-gray-400 block text-[11px] uppercase font-bold">Solução Recomendada:</span>
                  <span className="text-white font-semibold">{activeSegment.recommendedService}</span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                  <span className="text-gray-400 block text-[11px] uppercase font-bold">Foco de Conversão:</span>
                  <span className="text-emerald-400 font-semibold">{activeSegment.strategicFocus}</span>
                </div>
              </div>

              <a
                id="simulator-send-whatsapp"
                href={buildWhatsAppUrl(whatsappSimulatorMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-slate-950 font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md hover:shadow-emerald-500/20"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                <span>Enviar Diagnóstico no WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              <p className="text-[11px] text-gray-400 text-center mt-3">
                Sem compromisso. Análise feita pelo estrategista em até 5 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
