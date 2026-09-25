import React from 'react';
import { Zap, Check, MessageCircle, Mail, MapPin, ShieldCheck, Lock, Instagram, ArrowUpRight, Code } from 'lucide-react';
import { IMAGES, CONTACT_INFO, DEVELOPER_INFO } from '../data/electricalData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0a0a0c] text-zinc-400 pt-16 pb-12 border-t border-zinc-800/80 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Quick Action Buttons Header in Footer */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-[#18181b] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Precisa de atendimento elétrico confiável no Rio de Janeiro?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Fale pelo WhatsApp, acompanhe novos projetos no Instagram ou envie seu pedido de orçamento.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {CONTACT_INFO.phone}</span>
            </a>

            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram {CONTACT_INFO.instagramHandle}</span>
            </a>

            <a
              href={CONTACT_INFO.emailUrl}
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl flex items-center gap-2 border border-zinc-700 transition-all"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* 4-column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 flex items-center justify-center shrink-0">
                <img
                  src={IMAGES.logo}
                  alt="Logo Nando Elétrica"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== IMAGES.logoFallback) {
                      target.src = IMAGES.logoFallback;
                    }
                  }}
                />
                <Zap className="w-5 h-5 text-[#facc15] absolute opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Nando <span className="text-[#facc15]">Elétrica</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Serviços elétricos residenciais, comerciais e industriais de alto padrão no Rio de Janeiro. Rigor técnico, segurança e conformidade total com a norma NBR 5410.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-1">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-zinc-900 text-[#facc15] px-2.5 py-1 rounded border border-zinc-800">
                NBR 5410
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-zinc-900 text-sky-400 px-2.5 py-1 rounded border border-zinc-800">
                NR-10 Certificado
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-zinc-900 text-emerald-400 px-2.5 py-1 rounded border border-zinc-800">
                Garantia Formal
              </span>
            </div>
          </div>

          {/* Column 2: Specialized Services */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Serviços Especializados
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-zinc-400">
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Instalações e Reformas Elétricas</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Quadros de Distribuição (QDC)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Manutenção de Curto-Circuito & Sobrecargas</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Sistemas de Segurança (CFTV e Câmeras)</span>
              </li>
              <li className="hover:text-white transition-colors flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#facc15] shrink-0" />
                <span>Aterramento e Proteção Contra Surtos (DPS)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">WhatsApp:</strong>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-emerald-400 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Instagram:</strong>
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-pink-400 transition-colors flex items-center gap-1">
                    <span>{CONTACT_INFO.instagramHandle}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">E-mail:</strong>
                  <a href={CONTACT_INFO.emailUrl} className="text-zinc-300 hover:text-sky-400 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Região Atendida:</strong>
                  <span className="text-zinc-400 leading-tight block">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Warranty & Accreditation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Garantia & Procedência
            </h4>
            <div className="bg-[#18181b] border border-zinc-800 p-4 rounded-xl flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#facc15]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold text-white">100% de Conformidade</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Todos os serviços acompanham laudo de entrega, testes de carga pontual e garantia por escrito do profissional responsável.
              </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5" />
              <span>Atendimento Seguro e Credenciado</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="pt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 border-b border-zinc-900/80">
          <p>© {new Date().getFullYear()} Nando Elétrica. Todos os direitos reservados. Eletricista no Rio de Janeiro - RJ.</p>
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              Instagram {CONTACT_INFO.instagramHandle}
            </a>
            <span>•</span>
            <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Developer Responsible Attribution at the very end */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#141416] border border-zinc-800 text-zinc-400 shadow-sm hover:border-zinc-700 transition-all">
            <Code className="w-3.5 h-3.5 text-[#facc15]" />
            <span>Desenvolvido por <strong className="text-white font-semibold">{DEVELOPER_INFO.name}</strong></span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <a
              href={DEVELOPER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5 transition-colors group"
            >
              <MessageCircle className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>Whatsapp: {DEVELOPER_INFO.whatsapp}</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
