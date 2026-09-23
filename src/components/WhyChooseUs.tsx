import React from 'react';
import { Smartphone, Zap, Bot, Users, ShieldCheck, TrendingUp } from 'lucide-react';
import { TiltCard } from './3d/TiltCard';

export const WhyChooseUs: React.FC = () => {
  const differentials = [
    {
      icon: <Smartphone className="w-6 h-6 text-[#FA842D]" />,
      title: 'Engenharia Mobile-First Real',
      description: 'Mais de 85% dos cliques em anúncios locais vêm de celulares. Criamos interfaces leves, com botões anatômicos para o polegar e carregamento instantâneo em 4G/5G.'
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: 'SXO (Search Experience Optimization)',
      description: 'Não basta atrair o clique; é preciso converter. Reduzimos a taxa de rejeição com copywriting persuasivo (EEAT) que conduz o visitante a iniciar o diálogo no WhatsApp.'
    },
    {
      icon: <Bot className="w-6 h-6 text-orange-400" />,
      title: 'Pronto para GEO & IAs Generativas',
      description: 'Estruturação avançada de dados (Schema.org JSON-LD) para que sua empresa seja encontrada tanto no Google e Bing tradicionais quanto em respostas do ChatGPT, Gemini e Copilot.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      title: 'Google Ads Focado em Custo por Lead',
      description: 'Eliminamos palavras-chave inúteis que torcem o orçamento. Cada campanha é orientada ao retorno sobre investimento (ROI) e contatos reais de clientes qualificados.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-300" />,
      title: 'Contato Direto com o Estrategista',
      description: 'Sem burocracia ou intermediários. Você conversa diretamente com quem planeja, programa e gerencia sua presença digital pelo WhatsApp comercial.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Conformidade com Diretrizes Oficiais',
      description: 'Respeito estrito às políticas do Google Ads e boas práticas de SEO. Sua empresa cresce de forma sólida, segura e perene, sem atalhos perigosos.'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#15171B]/90 backdrop-blur-sm border-b border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-950/50 border border-orange-500/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Diferenciais Competitivos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Por Que Escolher a Bora Digital Strategy?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Combinamos rigor técnico de engenharia de software com estratégias comprovadas de marketing de resposta direta.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => (
            <TiltCard key={idx} intensity={6} depth={15} className="h-full">
              <div className="bg-[#1B1E23]/95 border border-[#2D3136] hover:border-orange-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-200 h-full flex flex-col justify-between shadow-lg">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
