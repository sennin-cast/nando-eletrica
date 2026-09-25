import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  FileText, 
  MessageCircle, 
  ListFilter, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Maximize2,
  Instagram,
  Mail
} from 'lucide-react';
import { IMAGES, GalleryItem, CONTACT_INFO } from '../data/electricalData';

interface HeroProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectImage }) => {
  const heroQdcItem: GalleryItem = {
    id: 'hero-qdc',
    title: 'Quadro de Distribuição QDC Padrão NBR-5410',
    description: 'Montagem técnica com organização de circuitos, barramento pente e proteção contra sobrecargas.',
    category: 'quadros',
    tag: 'Padrão Técnico',
    tagType: 'primary',
    imageUrl: IMAGES.heroQdc,
    specs: ['Barramento pente isolado', 'Disjuntores termomagnéticos', 'Equilíbrio de cargas']
  };

  const heroLedItem: GalleryItem = {
    id: 'hero-led',
    title: 'Perfis de LED e Iluminação Indireta',
    description: 'Design de luz contemporâneo em forro de gesso e sancas com temperatura de cor aconchegante.',
    category: 'iluminacao',
    tag: 'Design & Acabamento',
    tagType: 'info',
    imageUrl: IMAGES.heroLed,
    specs: ['Perfis de alumínio anodizado', 'Fita LED alta densidade', 'Drivers blindados']
  };

  const heroCftvItem: GalleryItem = {
    id: 'hero-cftv',
    title: 'CFTV & Monitoramento em Tempo Real',
    description: 'Câmeras de alta definição com infravermelho e configuração para visualização remota no celular.',
    category: 'cftv',
    tag: 'Segurança Contínua',
    tagType: 'success',
    imageUrl: IMAGES.heroCftv,
    specs: ['Acesso via smartphone', 'Gravação contínua', 'Detecção inteligente']
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0e0e10] pt-32 pb-16 lg:pt-36 lg:pb-24">
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 right-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Verification Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f1e24] text-[#facc15] text-[11px] font-bold uppercase tracking-wider border border-[#facc15]/20">
                <Zap className="w-3.5 h-3.5" />
                Atendimento Rápido RJ
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f1e24] text-sky-400 text-[11px] font-bold uppercase tracking-wider border border-sky-400/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Normas NBR-5410 & NR-10
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f1e24] text-emerald-400 text-[11px] font-bold uppercase tracking-wider border border-emerald-400/20">
                <FileText className="w-3.5 h-3.5" />
                Orçamento Sem Compromisso
              </span>
            </div>

            {/* Slogan & Main Headline */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-[#facc15] text-sm font-semibold">
                <span className="w-8 h-[2px] bg-[#facc15]"></span>
                <span className="italic font-medium">“Do simples ao mais complexo, estou pronto para resolver suas necessidades!”</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-extrabold text-white tracking-tight">
                Soluções Elétricas Profissionais & Sistemas de <span className="text-[#facc15]">CFTV</span> com Segurança e Pontualidade
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Atendimento especializado no Rio de Janeiro para residências, condomínios e comércios. Instalações de quadros, iluminação decorativa em LED, automação residencial e monitoramento de câmeras com rigor técnico e laudo de entrega.
            </p>

            {/* Action CTAs: WhatsApp + Instagram + Ver Fotos */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
              {/* WhatsApp Button */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(34,197,94,0.35)] hover:shadow-[0_0_32px_rgba(34,197,94,0.5)] transition-all group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Chamar no WhatsApp</span>
              </a>

              {/* Instagram Button */}
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 text-white font-bold text-sm sm:text-base px-5 py-3.5 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_24px_rgba(236,72,153,0.3)] hover:shadow-[0_0_32px_rgba(236,72,153,0.45)] transition-all group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram @nandoeletric</span>
              </a>

              {/* Portfolio Link */}
              <a
                href="#portfolio"
                className="bg-zinc-800/90 hover:bg-zinc-700 text-zinc-100 text-sm font-semibold px-4 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <ListFilter className="w-4 h-4 text-[#facc15]" />
                <span>Ver Galeria</span>
              </a>
            </div>

            {/* Direct Line & Status */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-zinc-400">
              <a 
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-white font-bold hover:text-[#facc15] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#facc15]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <span className="text-zinc-600">•</span>
              <a 
                href={CONTACT_INFO.emailUrl}
                className="flex items-center gap-1.5 text-zinc-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Atendimento Técnico Ativo no RJ</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Bento (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-3.5">
              
              {/* Bento Card 1: QDC (Large 2-col) */}
              <div className="col-span-2 bg-[#18181b] border border-zinc-800 rounded-2xl p-2.5 shadow-2xl relative overflow-hidden group">
                <div className="relative h-60 sm:h-64 overflow-hidden rounded-xl bg-zinc-900">
                  <img
                    src={IMAGES.heroQdc}
                    alt="Quadro de distribuição elétrica Nando Elétrica com organização padrão NBR 5410"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#facc15] block">
                        Padrão Técnico
                      </span>
                      <strong className="text-base sm:text-lg font-bold">
                        Quadro de Distribuição QDC
                      </strong>
                    </div>
                    <button
                      onClick={() => onSelectImage(heroQdcItem)}
                      className="p-2 rounded-lg bg-black/60 hover:bg-[#facc15] hover:text-zinc-950 text-white backdrop-blur-sm transition-colors border border-white/10"
                      title="Ver foto ampliada e link direto"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bento Card 2: LED */}
              <div className="col-span-1 bg-[#18181b] border border-zinc-800 rounded-2xl p-2 shadow-xl relative overflow-hidden group">
                <div className="relative h-40 sm:h-44 overflow-hidden rounded-xl bg-zinc-900">
                  <img
                    src={IMAGES.heroLed}
                    alt="Instalação de perfis de fita de LED em sanca e teto de gesso"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-emerald-400 block">
                        Design & Acabamento
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                        Perfis de LED
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectImage(heroLedItem)}
                      className="p-1.5 rounded bg-black/60 hover:bg-[#facc15] hover:text-zinc-950 text-white backdrop-blur-sm transition-colors"
                      title="Ampliar foto"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bento Card 3: CFTV */}
              <div className="col-span-1 bg-[#18181b] border border-zinc-800 rounded-2xl p-2 shadow-xl relative overflow-hidden group">
                <div className="relative h-40 sm:h-44 overflow-hidden rounded-xl bg-zinc-900">
                  <img
                    src={IMAGES.heroCftv}
                    alt="Câmera de segurança CFTV instalada com cabeamento estruturado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-sky-400 block">
                        Monitoramento Remoto
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                        CFTV & Câmeras
                      </p>
                    </div>
                    <button
                      onClick={() => onSelectImage(heroCftvItem)}
                      className="p-1.5 rounded bg-black/60 hover:bg-[#facc15] hover:text-zinc-950 text-white backdrop-blur-sm transition-colors"
                      title="Ampliar foto"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating Credential Seal */}
            <div className="absolute -bottom-6 -left-6 bg-[#1f1f23]/95 backdrop-blur-md p-3.5 rounded-xl shadow-2xl hidden md:flex items-center gap-3.5 border border-zinc-700/80">
              <div className="w-11 h-11 rounded-lg bg-[#facc15] text-zinc-950 flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">NBR 5410</div>
                <p className="text-xs text-zinc-400">Conformidade e Proteção</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
