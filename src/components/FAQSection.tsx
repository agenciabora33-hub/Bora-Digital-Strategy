import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS, buildWhatsAppUrl } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0E131F] border-b border-gray-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes & Respostas Diretas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Tudo o Que Você Precisa Saber Para Aparecer no Google
          </h2>

          <p className="mt-4 text-base text-gray-300">
            Respostas claras e transparentes para as dúvidas mais comuns sobre criação de sites, anúncios patrocinados e Google Meu Negócio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#131B2B] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-800/40 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-gray-800/80 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                      <span>Categoria: {faq.category}</span>
                      <a
                        href={buildWhatsAppUrl(`Olá! Tenho uma dúvida específica sobre: "${faq.question}"`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                      >
                        Tirar dúvida no WhatsApp &rarr;
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Ainda tem alguma dúvida sobre seu negócio?</h4>
            <p className="text-xs sm:text-sm text-gray-400">Converse diretamente com o especialista responsável sem compromisso.</p>
          </div>
          <a
            href={buildWhatsAppUrl("Olá! Gostaria de esclarecer uma dúvida personalizada para o meu projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
