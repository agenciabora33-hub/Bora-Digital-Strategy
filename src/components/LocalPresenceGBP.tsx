import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, Globe, Shield, ExternalLink, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, buildWhatsAppUrl } from '../data/content';
import { TiltCard } from './3d/TiltCard';

export const LocalPresenceGBP: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#14171A] border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Local SEO & GEO Value */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Globe className="w-4 h-4 text-[#FA842D]" />
              <span>Sede em Caxias do Sul • Atendimento Global</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Sede em Caxias do Sul, Atendimento Global Especialista em Negócios Locais
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Com sede física no Bairro Exposição em Caxias do Sul/RS, atendemos empresas em todo o Brasil e no exterior. Somos especialistas em colocar o seu negócio local em primeiro lugar nas pesquisas — multiplicando sua visibilidade para atrair mais clientes, gerar vendas diárias, agendamentos frequentes e mais faturamento no seu caixa.
            </p>

            {/* Address and Contact Information Card */}
            <div className="mt-8 bg-[#1B1E23] border border-[#2D3136] rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-[#FA842D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Endereço da Sede:</strong>
                  <span>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}</span>
                  <span className="block text-gray-400 text-xs">{COMPANY_INFO.address.neighborhood} • {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state} • CEP {COMPANY_INFO.address.zipCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-300 pt-3 border-t border-gray-800">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Abrangência de Atendimento:</strong>
                  <span>{COMPANY_INFO.coverage}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-300 pt-3 border-t border-gray-800">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Horário de Funcionamento:</strong>
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-300 pt-3 border-t border-gray-800">
                <Phone className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Canal Direto de Conversão:</strong>
                  <span>WhatsApp & Telefone: <strong>{COMPANY_INFO.phoneFormatted}</strong></span>
                  <span className="block text-gray-400 text-xs">E-mail corporativo: {COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.googleMapsQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-5 py-3 rounded-xl text-sm border border-stone-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#FA842D]" />
                <span>Ver Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href={buildWhatsAppUrl("Olá! Gostaria de agendar uma reunião ou tirar dúvidas sobre atendimento em Caxias do Sul e online.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Falar com o Estrategista</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Business Profile Preview Mockup */}
          <div className="lg:col-span-5">
            <TiltCard intensity={8} depth={18} className="w-full">
              <div className="glass-panel-3d border border-orange-500/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">Google Business Profile (GBP)</span>
                </div>

                {/* Mockup Card representing high ranking in Caxias do Sul */}
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FA842D] font-extrabold font-display">
                      BDS
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        Bora Digital Strategy
                      </h4>
                      <p className="text-xs text-[#FA842D] font-medium">
                        Criação de Sites • Google Ads • GBP
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-amber-400 font-semibold">
                        <span>5.0</span>
                        <span>★★★★★</span>
                        <span className="text-gray-400 font-normal">(Avaliações Verificadas)</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-gray-300">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Localidade:</span>
                      <span className="text-white font-medium">Bairro Exposição, Caxias do Sul</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-gray-300">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold">Status:</span>
                      <span className="text-emerald-400 font-medium">Aberto • Responde rápido</span>
                    </div>
                  </div>

                  {/* Simulated Local Search Mock */}
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800 text-xs space-y-2">
                    <p className="text-gray-400 text-[11px] font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Como os clientes encontram sua empresa no mapa:
                    </p>
                    <div className="bg-slate-950 p-2.5 rounded-lg text-gray-200 border border-slate-800 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">"criação de site em caxias do sul"</p>
                        <p className="text-[10px] text-gray-400">1º Lugar no Pacote Local do Google Maps</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                        Top 1
                      </span>
                    </div>
                  </div>

                  {/* Direct Action Link in Mockup */}
                  <a
                    href={buildWhatsAppUrl("Olá! Quero que minha empresa apareça no topo do mapa do Google Meu Negócio em Caxias do Sul e região.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl text-xs sm:text-sm border border-slate-700 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Quero Esse Posicionamento Local</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
