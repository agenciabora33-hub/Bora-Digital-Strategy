import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121417]/95 backdrop-blur-md border-b border-[#2A2E33] shadow-xl py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity Oficial */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#FA842D] rounded-lg py-1"
            aria-label="Bora Digital Strategy - Início"
          >
            <img
              src="/logo-transparent.png"
              alt="Bora Digital Strategy"
              className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Menu superior oculto conforme solicitado: foco total na identidade e conversão direta */}

          {/* Right Action: Direct WhatsApp Call */}
          <div className="flex items-center gap-2.5 sm:gap-3">
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
          </div>
        </div>
      </div>
    </header>
  );
};
