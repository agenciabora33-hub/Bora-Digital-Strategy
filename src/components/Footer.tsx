import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl, KEYWORD_MATRIX } from '../data/content';

interface FooterProps {
  onNavigateToPlanos?: () => void;
  onNavigateToKeywordPage?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToPlanos, onNavigateToKeywordPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#0F1114] border-t border-[#2A2E33] text-gray-400 text-sm">
      {/* Upper Footer: Core Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Logo Bora Digital Strategy"
                width="220"
                height="48"
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-12 w-auto max-w-[220px] object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Estratégia digital de alta conversão para empresas e profissionais liberais que precisam de clientes reais entrando em contato pelo WhatsApp.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Atendimento em Caxias do Sul, Brasil e Exterior</span>
            </div>
          </div>

          {/* Physical Address & Local Footprint */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Sede Caxias do Sul / RS
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FA842D] shrink-0 mt-1" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}
                  <br />
                  {COMPANY_INFO.address.neighborhood}
                  <br />
                  {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state} • CEP {COMPANY_INFO.address.zipCode}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Direct Contacts & Conversion */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Canais de Atendimento
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={buildWhatsAppUrl("Olá! Gostaria de conversar com a Bora Digital Strategy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FA842D] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Strategic Navigation & Keywords */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Especialidades & Proposta
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a
                  href="/aparecer-no-google"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('aparecer-no-google');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Como Aparecer no Google & IAs</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              <li>
                <a
                  href="/anuncio-patrocinado-google"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('anuncio-patrocinado-google');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Anúncio Patrocinado no Google Ads</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              <li>
                <a
                  href="/site-profissional"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('site-profissional');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Criação de Site Profissional</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              <li>
                <a
                  href="/site-para-profissionais-liberais"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('site-para-profissionais-liberais');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Site para Profissionais Liberais</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              <li>
                <a
                  href="/cadastro-google-meu-negocio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('cadastro-google-meu-negocio');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Cadastro no Google Meu Negócio</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              {onNavigateToPlanos && (
                <li className="pt-2">
                  <a
                    href="/planos"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToPlanos();
                    }}
                    className="inline-flex items-center gap-2 text-[#FA842D] hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 px-3 py-2 rounded-xl font-bold transition-all text-xs w-full justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ver Página de Planos & Proposta</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Semantic Keyword Tags for SXO & Indexation */}
        <div className="mt-12 pt-8 border-t border-gray-800/80">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3 flex items-center justify-between">
            <span>Páginas & Especialidades Exclusivas (Clique para acessar a página dedicada):</span>
          </p>
          <div className="flex flex-wrap gap-2.5">
            {KEYWORD_MATRIX.map((item, idx) => (
              <span
                key={idx}
                role="button"
                tabIndex={0}
                onClick={() => onNavigateToKeywordPage?.(item.slug)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigateToKeywordPage?.(item.slug);
                  }
                }}
                className="group inline-flex items-center gap-1.5 text-xs bg-slate-900/90 hover:bg-orange-500/15 border border-slate-800 hover:border-orange-500/60 text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full transition-all duration-150 cursor-pointer shadow-sm hover:shadow-orange-500/10 active:scale-95"
                title={`${item.context} — Clique para abrir a página dedicada com dados completos e SEO.`}
              >
                <span>{item.keyword}</span>
                <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-black/60 border-t border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
