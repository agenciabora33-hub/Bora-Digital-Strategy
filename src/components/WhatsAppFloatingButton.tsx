import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Send, Check } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Show friendly prompt bubble after 4 seconds if not closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowTooltip(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const quickOptions = [
    { label: 'Planos & Preços', message: 'Olá! Vi os planos no site da Bora Digital Strategy e gostaria de tirar dúvidas sobre os valores.' },
    { label: 'Site Profissional', message: 'Olá! Gostaria de um orçamento para criar um Site Profissional.' },
    { label: 'Google Meu Negócio', message: 'Olá! Quero otimizar o cadastro da minha empresa no Google Meu Negócio.' },
    { label: 'Anúncios Google Ads', message: 'Olá! Gostaria de criar anúncios patrocinados no Google Ads.' },
  ];

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 max-w-[290px] sm:max-w-xs bg-[#111827] border border-emerald-500/40 rounded-2xl p-4 shadow-2xl animate-fade-in relative backdrop-blur-md">
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="absolute top-2.5 right-2.5 p-1 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Online</span>
          </div>

          <p className="text-xs text-gray-200 leading-relaxed">
            Olá! Precisa de mais clientes ligando ou chamando no WhatsApp? Como podemos ajudar sua empresa hoje?
          </p>

          <div className="mt-3 flex flex-col gap-1.5">
            {quickOptions.map((opt, idx) => (
              <a
                key={idx}
                href={buildWhatsAppUrl(opt.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="text-[11px] font-semibold text-emerald-300 hover:text-white bg-slate-900 hover:bg-emerald-950/60 border border-slate-700/60 hover:border-emerald-500/50 px-2.5 py-1.5 rounded-lg transition-all flex items-center justify-between group"
              >
                <span>{opt.label}</span>
                <Send className="w-3 h-3 text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <a
        id="btn-whatsapp-flutuante"
        href={buildWhatsAppUrl("Olá! Gostaria de falar com a Bora Digital Strategy pelo WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp no número 54981164282"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-slate-950 p-4 sm:px-5 sm:py-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.35)] transition-all animate-whatsapp-pulse cursor-pointer"
      >
        {/* Pulsing indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-700 border-2 border-[#0B0F17]" />
        </span>

        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950 shrink-0" />
        
        <div className="hidden sm:flex flex-col text-left pr-1">
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">
            Online Agora
          </span>
          <span className="text-sm font-extrabold text-slate-950 leading-tight">
            Chamar no WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
};
