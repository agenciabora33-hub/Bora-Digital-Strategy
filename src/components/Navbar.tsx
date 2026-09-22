import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

interface NavbarProps {
  onNavigateToPlanos?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToPlanos }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Planos & Preços', href: '#planos' },
    { label: 'Autoridade & EEAT', href: '#autoridade' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Caxias do Sul & GBP', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-gray-800/80 shadow-lg py-3'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top micro banner for trust on mobile & desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="Bora Digital Strategy - Início"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-950 via-slate-900 to-black border border-blue-500/30 flex items-center justify-center overflow-hidden shadow-md group-hover:border-blue-400 transition-colors">
              <img
                src="/logo-transparent.png"
                alt="Logo Bora Digital Strategy"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
              <span className="sr-only">Bora Digital Strategy</span>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
                BORA <span className="text-blue-500 font-extrabold">DIGITAL</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium tracking-wide uppercase">
                Strategy • Ads • Sites • GBP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA & Mobile Menu */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Direct Link to Client Proposal Page */}
            {onNavigateToPlanos && (
              <button
                type="button"
                onClick={onNavigateToPlanos}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
                title="Abrir página de planos e proposta comercial pronta para enviar ao cliente"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Página de Proposta</span>
              </button>
            )}

            {/* Direct WhatsApp Call */}
            <a
              id="navbar-whatsapp-button"
              href={buildWhatsAppUrl("Olá! Gostaria de tirar dúvidas sobre os serviços da Bora Digital Strategy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 font-bold px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span className="hidden xs:inline">Falar no WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/70 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-gray-800 bg-[#0B0F17]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-800">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-800 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Atendimento imediato no WhatsApp: <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
            </div>

            <nav className="flex flex-col gap-2">
              {onNavigateToPlanos && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateToPlanos();
                  }}
                  className="px-3 py-2.5 rounded-lg text-base font-bold text-emerald-400 bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    Página de Proposta (Link do Cliente)
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-gray-200 hover:text-blue-400 hover:bg-slate-800/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-800 mt-2">
                <a
                  href={buildWhatsAppUrl("Olá! Gostaria de solicitar um diagnóstico de presença digital para o meu negócio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-transform active:scale-95 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
                  Iniciar Conversa no WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
