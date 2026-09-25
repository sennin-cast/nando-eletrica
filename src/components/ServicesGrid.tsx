import React, { useState } from 'react';
import { 
  Zap, 
  Lightbulb, 
  Droplet, 
  Camera, 
  Cpu, 
  Cable, 
  Sliders, 
  PlugZap, 
  ArrowRight, 
  Send, 
  Info, 
  Clock, 
  ShieldCheck, 
  X, 
  Check 
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/electricalData';

interface ServicesGridProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'flash_on':
        return <Zap className="w-6 h-6 text-[#facc15]" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-emerald-400" />;
      case 'shower':
        return <Droplet className="w-6 h-6 text-sky-400" />;
      case 'videocam':
        return <Camera className="w-6 h-6 text-sky-400" />;
      case 'home_iot_device':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'electrical_services':
        return <Cable className="w-6 h-6 text-[#facc15]" />;
      case 'switch':
        return <Sliders className="w-6 h-6 text-[#facc15]" />;
      case 'power':
        return <PlugZap className="w-6 h-6 text-sky-400" />;
      default:
        return <Zap className="w-6 h-6 text-[#facc15]" />;
    }
  };

  const filteredServices = activeFilter === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeFilter);

  const handleRequestQuote = (title: string) => {
    onSelectServiceForQuote(title);
    // Smooth scroll to quote section
    const elem = document.getElementById('contato');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-[#131315] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] block mb-2">
              Catálogo Técnico
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nossos Serviços Especializados
            </h2>
            <p className="text-zinc-400 mt-2 text-base leading-relaxed">
              Soluções completas com cálculo de carga, ferramentas de calibração e acabamento primoroso para que você não tenha dores de cabeça.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5521973121322?text=Ol%C3%A1%20Nando,%20gostaria%20de%20uma%20consultoria%20t%C3%A9cnica%20para%20meu%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 hover:bg-zinc-700 text-[#facc15] text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 border border-zinc-700 transition-colors"
            >
              <span>Consultoria para projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'todos', label: 'Todos os Serviços' },
            { id: 'reparo', label: 'Reparos & Curto-Circuito' },
            { id: 'instalacao', label: 'Instalação Elétrica & LED' },
            { id: 'seguranca', label: 'CFTV & Segurança' },
            { id: 'automacao', label: 'Automação Smart Home' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#facc15] text-zinc-950 shadow-md font-bold'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80 border border-zinc-700/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#1b1b1f] hover:bg-[#202026] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-5 flex flex-col justify-between shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 text-xs flex items-center gap-1 transition-colors"
                    title="Ver detalhes técnicos"
                  >
                    <Info className="w-4 h-4" />
                    <span className="text-[11px]">Detalhes</span>
                  </button>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#facc15] transition-colors leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-zinc-800/60 flex flex-col gap-2">
                <button
                  onClick={() => handleRequestQuote(service.title)}
                  className="w-full bg-[#2a2a30] hover:bg-[#facc15] text-zinc-200 hover:text-zinc-950 text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Pedir orçamento</span>
                </button>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1">
                  <span>Norma: {service.norma}</span>
                  <span>{service.estimatedTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-[#18181b] border border-zinc-700 max-w-lg w-full rounded-2xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0">
                  {getServiceIcon(selectedService.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                  <span className="text-xs text-[#facc15] font-semibold">{selectedService.norma}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-4">
              {selectedService.fullDesc}
            </p>

            <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800 mb-5">
              <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                O que está incluído no serviço:
              </span>
              <ul className="space-y-2 text-xs text-zinc-300">
                {selectedService.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 mb-6 px-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#facc15]" />
                Tempo estimado: {selectedService.estimatedTime}
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Garantia formal
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/5521973121322?text=Ol%C3%A1%20Nando,%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o:%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <span>Chamar no WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  const service = selectedService;
                  setSelectedService(null);
                  handleRequestQuote(service.title);
                }}
                className="px-4 py-3 rounded-lg bg-[#facc15] hover:bg-[#eab308] text-zinc-950 font-bold text-xs sm:text-sm transition-all"
              >
                Preencher Formulário
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
