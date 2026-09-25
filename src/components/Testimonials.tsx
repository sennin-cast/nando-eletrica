import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/electricalData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-24 bg-[#0e0e10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] block mb-2">
            Avaliações Verificadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que dizem os clientes no Rio
          </h2>
          <p className="text-zinc-400 mt-2 text-base leading-relaxed">
            Confiança construída com pontualidade, transparência e serviços concluídos com perfeição em residências e empresas cariocas.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#18181b] border border-zinc-800/80 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col gap-3.5">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#facc15]">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#facc15]" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 italic leading-relaxed">
                  “{testimonial.comment}”
                </p>

                <div className="mt-1">
                  <span className="text-[11px] text-[#facc15] font-semibold bg-[#facc15]/10 px-2 py-0.5 rounded">
                    {testimonial.serviceDone}
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-sm text-[#facc15] shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <strong className="text-sm font-bold text-white block">
                    {testimonial.name}
                  </strong>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
