import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, FileText } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/content';

interface NavbarProps {
  onNavigateToPlanos?: () => void;
  onNavigateToHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToPlanos, onNavigateToHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      window.location.href = `/#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#121417]/95 backdrop-blur-md border-b border-[#2A2E33] shadow-lg py-2'
          : 'bg-[#121417]/80 backdrop-blur-sm border-b border-stone-800/40 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo & Brand Identity */}
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateToHome) {
                e.preventDefault();
                onNavigateToHome();
              }
            }}
            className="flex items-center shrink-0 focus:outline-none focus:ring-1 focus:ring-[#FA842D] rounded-lg py-0.5"
            aria-label="Bora Digital Strategy - Início"
          >
            <img
              src="/logo.webp"
              alt="Bora Digital Strategy"
              width="210"
              height="40"
              fetchPriority="high"
              decoding="async"
              className="h-8 sm:h-10 w-auto max-w-[160px] sm:max-w-[210px] object-contain transition-transform duration-200 hover:scale-105"
            />
          </a>

          {/* Menu Reduzido / Compact Nav (Desktop & Tablet) */}
          <nav
            aria-label="Navegação Principal"
            className="hidden md:flex items-center gap-1 bg-[#181B20]/90 backdrop-blur-md border border-stone-800 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-300 shadow-sm"
          >
            <a
              href="#diferenciais"
              onClick={(e) => handleNavClick(e, 'diferenciais')}
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-stone-800/80 transition-all"
            >
              Diferenciais
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, 'servicos')}
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-stone-800/80 transition-all"
            >
              Serviços
            </a>
            <a
              href="#planos"
              onClick={(e) => {
                if (onNavigateToPlanos) {
                  e.preventDefault();
                  onNavigateToPlanos();
                } else {
                  handleNavClick(e, 'planos');
                }
              }}
              className="px-2.5 py-1 rounded-full text-[#FA842D] hover:text-orange-300 hover:bg-orange-500/10 transition-all flex items-center gap-1"
            >
              <span>Planos</span>
            </a>
            <a
              href="#simulador"
              onClick={(e) => handleNavClick(e, 'simulador')}
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-stone-800/80 transition-all"
            >
              Simulador
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-stone-800/80 transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action: Direct WhatsApp & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              id="navbar-whatsapp-button"
              href={buildWhatsAppUrl("Olá! Gostaria de conversar com a equipe da Bora Digital Strategy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 font-bold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs transition-all shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Button (Reduzido) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800 focus:outline-none"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FA842D]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Reduzido) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pt-2 pb-3 border-t border-stone-800/80 bg-[#15171B]/95 backdrop-blur-md rounded-2xl px-3 shadow-xl space-y-1 text-xs">
            <a
              href="#diferenciais"
              onClick={(e) => handleNavClick(e, 'diferenciais')}
              className="block px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/70 font-medium transition-colors"
            >
              • Diferenciais Competitivos
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleNavClick(e, 'servicos')}
              className="block px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/70 font-medium transition-colors"
            >
              • Serviços de Alta Conversão
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToPlanos?.();
              }}
              className="w-full text-left flex items-center justify-between px-3 py-2 rounded-xl text-[#FA842D] hover:bg-orange-500/10 font-bold transition-colors"
            >
              <span>• Planos & Proposta Comercial</span>
              <FileText className="w-3.5 h-3.5" />
            </button>
            <a
              href="#simulador"
              onClick={(e) => handleNavClick(e, 'simulador')}
              className="block px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/70 font-medium transition-colors"
            >
              • Simulador de Potencial
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="block px-3 py-2 rounded-xl text-stone-300 hover:text-white hover:bg-stone-800/70 font-medium transition-colors"
            >
              • Perguntas Frequentes (FAQ)
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

