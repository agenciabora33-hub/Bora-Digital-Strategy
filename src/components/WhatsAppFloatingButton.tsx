import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles, Send, Check, FileText, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';

interface WhatsAppFloatingButtonProps {
  onNavigateToPlanos?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onNavigateToPlanos }) => {
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

  const quickWhatsAppOptions = [
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
        <div className="mb-3 max-w-[290px] sm:max-w-xs bg-[#181B20]/95 border border-emerald-500/40 rounded-3xl p-4 shadow-2xl animate-fade-in relative backdrop-blur-md">
          <button
            type="button"
            onClick={() => {
              setShowTooltip(false);
              setHasInteracted(true);
            }}
            className="absolute top-3 right-3 p-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Atendimento Online</span>
          </div>

          <p className="text-xs text-stone-200 leading-relaxed">
            Olá! Precisa de mais clientes ligando ou chamando no WhatsApp? Como podemos ajudar sua empresa hoje?
          </p>

          <div className="mt-3 flex flex-col gap-1.5">
            {/* 1. Direcionamento prioritário para a Página de Planos */}
            <a
              href="/planos"
              onClick={(e) => {
                e.preventDefault();
                setHasInteracted(true);
                setShowTooltip(false);
                if (onNavigateToPlanos) {
                  onNavigateToPlanos();
                } else {
                  window.location.href = '/planos';
                }
              }}
              className="text-[11px] font-bold text-[#FA842D] hover:text-orange-200 bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/45 hover:border-orange-400 px-3 py-2 rounded-xl transition-all flex items-center justify-between group shadow-sm hover:shadow-orange-500/20 active:scale-98"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#FA842D] shrink-0" />
                <span>Ver Planos & Proposta Comercial</span>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FA842D] transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Opções de consulta rápida via WhatsApp */}
            {quickWhatsAppOptions.map((opt, idx) => (
              <a
                key={idx}
                href={buildWhatsAppUrl(opt.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setHasInteracted(true)}
                className="text-[11px] font-semibold text-emerald-300 hover:text-white bg-stone-900 hover:bg-emerald-950/60 border border-stone-800 hover:border-emerald-500/50 px-3 py-1.5 rounded-xl transition-all flex items-center justify-between group"
              >
                <span>{opt.label}</span>
                <Send className="w-3 h-3 text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Trigger Button with 3D tactile elevation */}
      <a
        id="btn-whatsapp-flutuante"
        href={buildWhatsAppUrl("Olá! Gostaria de falar com a Bora Digital Strategy pelo WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp no número 54981164282"
        className="group relative flex items-center gap-3 bg-gradient-to-tr from-[#20ba59] to-[#25D366] hover:brightness-105 active:scale-95 text-slate-950 p-4 sm:px-5 sm:py-3.5 rounded-full shadow-[0_12px_32px_rgba(37,211,102,0.45)] border border-emerald-300/40 transition-all duration-200 animate-whatsapp-pulse cursor-pointer hover:-translate-y-1"
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
