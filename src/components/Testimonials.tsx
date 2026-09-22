import React from 'react';
import { Star, Quote, MessageCircle, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, buildWhatsAppUrl } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#121417] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Resultados e Prova Social</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            O Que Nossos Clientes Dizem Sobre os Resultados
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Profissionais liberais e gestores que confiaram sua estratégia digital à Bora Digital Strategy e multiplicaram seus contatos comerciais.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#191C20] border border-[#2D3238] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-lg hover:border-orange-500/50 transition-all"
            >
              <div>
                {/* Highlight Badge */}
                <div className="inline-block bg-orange-950/60 border border-orange-600/40 text-orange-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {item.highlight}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-base font-bold text-white leading-tight">{item.name}</p>
                <p className="text-xs text-gray-400">{item.role} • {item.company}</p>
                <p className="text-[11px] text-[#FA842D] mt-1">{item.location}</p>
                <div className="mt-2 text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                  {item.serviceUsed}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppUrl("Olá! Vi os depoimentos de clientes da Bora Digital Strategy e quero entender como gerar resultados semelhantes para minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fale com quem entende de conversão pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
