import React from 'react';
import { Award, ShieldCheck, Building2, CheckCircle } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      icon: Award,
      title: '+10 Anos',
      subtitle: 'De Experiência Prática',
      color: 'text-[#facc15]'
    },
    {
      icon: ShieldCheck,
      title: '100% Seguro',
      subtitle: 'Normas Rigorosas NBR',
      color: 'text-emerald-400'
    },
    {
      icon: Building2,
      title: 'Residencial',
      subtitle: '& Comercial em todo o RJ',
      color: 'text-sky-400'
    },
    {
      icon: CheckCircle,
      title: 'Garantia Total',
      subtitle: 'Em todos os serviços',
      color: 'text-[#facc15]'
    }
  ];

  return (
    <section className="bg-[#18181b] border-y border-zinc-800/80 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#201f24] border border-zinc-800/70 p-3.5 sm:p-4 rounded-xl flex items-center gap-3.5 hover:border-zinc-700 transition-colors"
              >
                <div className="p-2 sm:p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-extrabold text-white block tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-xs text-zinc-400 block leading-tight">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
