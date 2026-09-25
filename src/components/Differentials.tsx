import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Receipt, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { NBR_CHECKLIST, IMAGES } from '../data/electricalData';

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-24 bg-[#131315] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Differentials (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] block mb-2">
                Diferenciais Técnicos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Por que confiar na Nando Elétrica?
              </h2>
              <p className="text-zinc-400 mt-2 text-base leading-relaxed">
                Não colocamos sua família ou patrimônio em risco. Trabalhamos exclusivamente com metodologia de engenharia elétrica, equipamentos calibrados e materiais certificados pelo INMETRO.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#1b1b1f] border border-zinc-800/80 p-5 rounded-2xl flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#facc15]">
                  <div className="p-2 rounded-lg bg-[#facc15]/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <strong className="text-base font-bold text-white">Segurança em 1º Lugar</strong>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Aplicação estrita de Dispositivos Residuais (DR) e DPS. Prevenção ativa de incêndios e proteção contra choques acidentais.
                </p>
              </div>

              <div className="bg-[#1b1b1f] border border-zinc-800/80 p-5 rounded-2xl flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-sky-400">
                  <div className="p-2 rounded-lg bg-sky-500/10">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <strong className="text-base font-bold text-white">Ferramental Apropriado</strong>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Alicates amperímetros True-RMS, multímetros certificados, termovisores e testes de carga para certificar a estabilidade de cada circuito.
                </p>
              </div>

              <div className="bg-[#1b1b1f] border border-zinc-800/80 p-5 rounded-2xl flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <strong className="text-base font-bold text-white">Limpeza & Organização</strong>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Respeito ao seu imóvel. Trabalhamos com proteção de pisos, recolhimento de resíduos e entrega do local limpo e pronto para uso.
                </p>
              </div>

              <div className="bg-[#1b1b1f] border border-zinc-800/80 p-5 rounded-2xl flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#facc15]">
                  <div className="p-2 rounded-lg bg-[#facc15]/10">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <strong className="text-base font-bold text-white">Orçamento Transparente</strong>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Preço justo e previamente acordado, sem cobranças surpresas no final do serviço. Especificação clara de mão de obra e materiais.
                </p>
              </div>
            </div>

            {/* Guarantee Callout Banner */}
            <div className="bg-[#18181b] border border-zinc-800 p-4 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200">
                  Todos os serviços com garantia formal por escrito e emissão de laudo.
                </span>
              </div>
              <a
                href="https://wa.me/5521973121322?text=Ol%C3%A1%20Nando,%20quero%20saber%20mais%20sobre%20a%20garantia%20dos%20servi%C3%A7os."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#facc15] hover:text-[#eab308] text-xs font-bold whitespace-nowrap flex items-center gap-1"
              >
                <span>Tirar dúvidas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: Compliance Checklist (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#18181b] border border-zinc-800/90 p-6 sm:p-7 rounded-2xl shadow-2xl flex flex-col gap-5 relative">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#facc15]" />
                  Checklist de Conformidade
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-[#facc15]/20 text-[#facc15] px-2.5 py-1 rounded border border-[#facc15]/30">
                  Protocolo RJ
                </span>
              </div>

              <ul className="flex flex-col gap-3.5 text-xs text-zinc-300">
                {NBR_CHECKLIST.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Credential Seal Card */}
              <div className="bg-[#121214] p-3.5 rounded-xl border border-zinc-800 flex items-center gap-3.5 mt-2">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={IMAGES.logo}
                    alt="Logo Nando Elétrica"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Zap className="w-5 h-5 text-[#facc15]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Nando Elétrica</p>
                  <p className="text-xs text-zinc-400">Atendimento Técnico Credenciado no RJ</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
