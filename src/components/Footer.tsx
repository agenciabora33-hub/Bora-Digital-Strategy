import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp, FileText, ArrowRight, Zap, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl, KEYWORD_MATRIX } from '../data/content';

interface FooterProps {
  onNavigateToPlanos?: () => void;
  onNavigateToKeywordPage?: (slug: string) => void;
  onOpenIndexNow?: () => void;
  onNavigateToTermos?: () => void;
  onNavigateToPrivacidade?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToPlanos,
  onNavigateToKeywordPage,
  onOpenIndexNow,
  onNavigateToTermos,
  onNavigateToPrivacidade
}) => {
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

            {/* Google Search Profile Badge */}
            <div className="pt-2">
              <a
                href="https://profile.google.com/@example"
                aria-label="Find us on Google Search"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <img
                  src="/path/to/google-search-badge.svg"
                  alt="Google Search"
                  width="170"
                  height="40"
                  className="h-10 w-auto"
                />
              </a>
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
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Oficial</span>
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
                  href="/criacao-de-sites"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('criacao-de-sites');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Criação de Sites Profissionais</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#FA842D] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                </a>
              </li>
              <li>
                <a
                  href="/google-meu-negocio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('google-meu-negocio');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>Google Meu Negócio & Maps</span>
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
                  href="/seo-aeo-sxo"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToKeywordPage?.('seo-aeo-sxo');
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-colors py-1 px-2 -mx-2 rounded-lg hover:bg-stone-800/60"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#FA842D] font-bold">•</span>
                    <span>SEO, AEO & SXO (Respostas de IA)</span>
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

      {/* Informações Legais & Atendimento Regulamentar */}
      <div className="bg-[#0D0F12] border-t border-gray-900 px-4 sm:px-6 lg:px-8 py-5 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-semibold text-stone-300">
              Informações Legais & Cadastro Corporativo:
            </p>
            <p className="text-[11px] text-stone-400">
              {COMPANY_INFO.fullName} • Sede: {COMPANY_INFO.address.fullFormatted} • CEP {COMPANY_INFO.address.zipCode}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="text-stone-400">Diretrizes de Conformidade:</span>
              <a
                href="/termos-de-uso"
                onClick={(e) => {
                  if (onNavigateToTermos) {
                    e.preventDefault();
                    onNavigateToTermos();
                  }
                }}
                className="text-stone-300 hover:text-[#FA842D] underline decoration-stone-700 underline-offset-2 transition-colors font-medium"
              >
                Termos de Uso
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="/politicas-de-privacidade"
                onClick={(e) => {
                  if (onNavigateToPrivacidade) {
                    e.preventDefault();
                    onNavigateToPrivacidade();
                  }
                }}
                className="text-stone-300 hover:text-emerald-400 underline decoration-stone-700 underline-offset-2 transition-colors font-medium"
              >
                Políticas de Privacidade (LGPD · Google · Bing · Meta)
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
            <div className="text-[11px] text-stone-300 bg-stone-900 border border-stone-800 px-3.5 py-2 rounded-xl">
              <span className="text-stone-400">Telefone Institucional (Legal): </span>
              <strong className="text-stone-200">{COMPANY_INFO.phoneFormatted}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-black/60 border-t border-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.
            </p>
            <span className="hidden sm:inline text-stone-600">|</span>
            <div className="flex items-center gap-3 text-stone-400">
              <a
                href="/termos-de-uso"
                onClick={(e) => {
                  if (onNavigateToTermos) {
                    e.preventDefault();
                    onNavigateToTermos();
                  }
                }}
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <span>•</span>
              <a
                href="/politicas-de-privacidade"
                onClick={(e) => {
                  if (onNavigateToPrivacidade) {
                    e.preventDefault();
                    onNavigateToPrivacidade();
                  }
                }}
                className="hover:text-white transition-colors"
              >
                Privacidade
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenIndexNow && (
              <button
                type="button"
                onClick={onOpenIndexNow}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 transition-all cursor-pointer font-medium text-xs shadow-sm hover:shadow-amber-500/10"
                title="Visualizar status e submissões do protocolo IndexNow (Microsoft Bing, Yandex, Seznam)"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>IndexNow: Ativo (Bing)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </button>
            )}

            <a
              href="https://profile.google.com/@example"
              aria-label="Find us on Google Search"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-90"
            >
              <img
                src="/path/to/google-search-badge.svg"
                alt="Google Search"
                width="150"
                height="36"
                className="h-8 w-auto"
              />
            </a>
          </div>

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
