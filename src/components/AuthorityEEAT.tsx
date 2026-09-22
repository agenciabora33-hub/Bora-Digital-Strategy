import React from 'react';
import { Award, ShieldCheck, GraduationCap, Cpu, Sparkles, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';
import { CERTIFICATIONS, buildWhatsAppUrl } from '../data/content';

export const AuthorityEEAT: React.FC = () => {
  return (
    <section id="autoridade" className="py-20 bg-[#14171A] border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pilar de Confiabilidade & EEAT Comprovado</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Autoridade Técnica Reconhecida Internacionalmente
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            No mercado digital de hoje, os algoritmos do Google e as IAs generativas priorizam negócios embasados em{' '}
            <strong className="text-white">EEAT (Experiência, Especialidade, Autoridade e Confiabilidade)</strong>.
            Na Bora Digital Strategy, sua estratégia é liderada por formação contínua nas maiores referências de tecnologia e marketing do mundo.
          </p>
        </div>

        {/* 6 Official Certifications Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isGoogle = cert.category === 'Google';
            const isIBM = cert.category === 'IBM';
            const isUni = cert.category === 'Universidade Internacional';

            return (
              <div
                key={cert.id}
                className="group relative bg-[#1B1E23] hover:bg-[#22262D] rounded-2xl p-6 border border-[#2D3136] hover:border-orange-500/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Pill and Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${
                        isGoogle
                          ? 'bg-orange-950/60 border-orange-500/40 text-orange-300'
                          : isIBM
                          ? 'bg-amber-950/60 border-amber-500/40 text-amber-300'
                          : isUni
                          ? 'bg-purple-950/60 border-purple-500/40 text-purple-300'
                          : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      }`}
                    >
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400 bg-stone-800/80 px-2 py-0.5 rounded border border-stone-700">
                      {cert.year}
                    </span>
                  </div>

                  {/* Institution and Title */}
                  <p className="text-xs uppercase tracking-wider text-[#FA842D] font-semibold mb-1">
                    {cert.institution}
                  </p>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-orange-200 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="mt-5 pt-4 border-t border-gray-800/80">
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Competências Aplicadas:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-stone-900/90 text-gray-300 border border-stone-700/60 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why this protects the client box */}
        <div className="mt-12 bg-gradient-to-r from-orange-950/30 via-stone-900/80 to-orange-950/20 border border-orange-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#FA842D] font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>O que isso significa na prática para o seu faturamento?</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                Sua empresa não corre risco de ser banida ou ignorada pelo Google
              </h4>
              <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
                Agências amadoras usam robôs genéricos e sites lentos que gastam sua verba de Google Ads sem gerar clientes. 
                Aqui, cada centavo investido em <strong className="text-white">anúncios patrocinados no Google</strong> e cada linha de código do seu <strong className="text-white">site profissional</strong> respeitam as diretrizes oficiais de indexação, Core Web Vitals e conformidade algorítmica.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl("Olá! Vi as certificações oficiais da Bora Digital Strategy e gostaria de conversar sobre a estratégia da minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#FA842D] hover:bg-[#ea731b] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Validar Estratégia no WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
