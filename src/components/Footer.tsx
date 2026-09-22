import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl, KEYWORD_MATRIX } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#070A10] border-t border-gray-800 text-gray-400 text-sm">
      {/* Upper Footer: Core Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-transparent.png"
                  alt="Logo Bora Digital Strategy"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="text-lg font-bold text-white font-display">
                BORA <span className="text-blue-500">DIGITAL</span>
              </span>
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
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
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
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Strategic Navigation & Keywords */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>• Site Profissional para Médicos e Dentistas</li>
              <li>• Site para Advogados e Profissionais Liberais</li>
              <li>• Campanhas de Anúncios no Google Ads (ROI)</li>
              <li>• Cadastro e Otimização no Google Meu Negócio</li>
              <li>• SEO Local e Otimização para IAs (GEO)</li>
            </ul>
          </div>
        </div>

        {/* Semantic Keyword Tags for SXO & Indexation */}
        <div className="mt-12 pt-8 border-t border-gray-800/80">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-3">
            Termos e Especialidades Atendidas:
          </p>
          <div className="flex flex-wrap gap-2">
            {KEYWORD_MATRIX.map((item, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-900 border border-slate-800 text-gray-300 px-3 py-1 rounded-full"
                title={item.context}
              >
                {item.keyword}
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
