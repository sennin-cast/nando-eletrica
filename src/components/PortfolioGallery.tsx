import React, { useState } from 'react';
import { 
  Maximize2, 
  ExternalLink, 
  Copy, 
  Check, 
  SlidersHorizontal, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  Sparkles, 
  Camera, 
  CheckCircle2 
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, IMAGES } from '../data/electricalData';

interface PortfolioGalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onSelectImage }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'quadros' | 'iluminacao' | 'tomadas' | 'cftv'>('todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [compareMode, setCompareMode] = useState<'split' | 'before' | 'after'>('split');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleCopyLink = async (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(item.imageUrl);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // fallback
    }
  };

  const filteredItems = activeTab === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  // Group items by category for structured layout
  const quadrosItems = GALLERY_ITEMS.filter(item => item.category === 'quadros');
  const iluminacaoItems = GALLERY_ITEMS.filter(item => item.category === 'iluminacao' || item.category === 'tomadas');
  const cftvItems = GALLERY_ITEMS.filter(item => item.category === 'cftv');

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#0e0e10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] block mb-2">
            Registros Reais de Obra
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeria de Obras e Serviços Realizados
          </h2>
          <p className="text-zinc-400 mt-2 text-base leading-relaxed">
            Veja com os próprios olhos a diferença de um serviço elétrico realizado com critério técnico, alinhamento rigoroso e segurança absoluta no Rio de Janeiro.
          </p>

          {/* Quick Notice about Direct Links */}
          <div className="mt-4 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            <span>Você pode clicar em <strong>Link Direto</strong> em qualquer foto para abrir ou copiar o link original da imagem em alta resolução.</span>
          </div>
        </div>

        {/* Interactive Before & After Safety Audit Comparison */}
        <div className="mb-16 bg-[#161619] border border-zinc-800 rounded-2xl p-5 sm:p-7 shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#facc15] mb-1">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Comparativo de Segurança Elétrica</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Eliminação de Risco vs. Instalação Padrão NBR 5410
              </h3>
            </div>

            {/* Comparison Controls */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800 self-start md:self-auto">
              <button
                onClick={() => setCompareMode('before')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  compareMode === 'before' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'text-zinc-400 hover:text-white'
                }`}
              >
                ⚠️ Ponto Crítico (Antes)
              </button>
              <button
                onClick={() => setCompareMode('split')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  compareMode === 'split' ? 'bg-[#facc15] text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Interativo (Slider)
              </button>
              <button
                onClick={() => setCompareMode('after')}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                  compareMode === 'after' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-zinc-400 hover:text-white'
                }`}
              >
                ✅ Padrão Nando (Depois)
              </button>
            </div>
          </div>

          {/* Interactive Visual Comparison Frame */}
          <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden select-none bg-black border border-zinc-800">
            {compareMode === 'before' && (
              <div className="relative w-full h-full">
                <img
                  src={IMAGES.galleryQdcHazard}
                  alt="Quadro antigo com risco elétrico de curto e incêndio"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-rose-600/90 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Risco Crítico Encontrado: Fios carbonizados e conexões soltas
                </div>
              </div>
            )}

            {compareMode === 'after' && (
              <div className="relative w-full h-full">
                <img
                  src={IMAGES.galleryQdc1}
                  alt="Quadro elétrico novo homologado Nando Elétrica"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Solução Concluída: QDC moderno com barramento pente e DPS
                </div>
              </div>
            )}

            {compareMode === 'split' && (
              <div className="relative w-full h-full overflow-hidden">
                {/* Background image (AFTER: New QDC) */}
                <img
                  src={IMAGES.galleryQdc1}
                  alt="Depois: Quadro Organizado"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs uppercase px-2.5 py-1 rounded shadow pointer-events-none">
                  Depois (Padrão NBR 5410)
                </div>

                {/* Foreground image with clip-path (BEFORE: Hazard) */}
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={IMAGES.galleryQdcHazard}
                    alt="Antes: Risco de Incêndio"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600/90 text-white font-bold text-xs uppercase px-2.5 py-1 rounded shadow pointer-events-none">
                    Antes (Risco Crítico)
                  </div>
                </div>

                {/* Vertical Divider Line with handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-[#facc15] shadow-[0_0_15px_rgba(250,204,21,0.8)] cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#facc15] text-zinc-950 flex items-center justify-center font-bold text-xs shadow-xl">
                    ↔
                  </div>
                </div>

                {/* Hidden range input to easily scrub on mobile & desktop */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  aria-label="Controle de antes e depois"
                />
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
            <span>Arraste o slider para comparar a infraestrutura antiga com a segurança da nova montagem.</span>
            <div className="flex items-center gap-2">
              <a
                href={IMAGES.galleryQdc1}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#facc15] hover:underline flex items-center gap-1 font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Link direto foto QDC
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href={IMAGES.galleryQdcHazard}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Link direto foto Risco
              </a>
            </div>
          </div>
        </div>

        {/* Category Navigation Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todas as Obras' },
            { id: 'quadros', label: '1. Quadros & Disjuntores' },
            { id: 'iluminacao', label: '2. Iluminação de LED' },
            { id: 'tomadas', label: '3. Tomadas & Bancadas' },
            { id: 'cftv', label: '4. CFTV & Segurança' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#facc15] text-zinc-950 font-bold shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                  : 'bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 border border-zinc-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category 1: Quadros de Distribuição (Only if 'todos' or 'quadros') */}
        {(activeTab === 'todos' || activeTab === 'quadros') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="p-2 rounded-lg bg-zinc-800 text-[#facc15] border border-zinc-700">
                <Layers className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  1. Quadros de Distribuição, Disjuntores & Padrão
                </h3>
                <p className="text-xs text-zinc-400">Balanceamento de cargas, proteção contra surtos DPS e blindagem DR</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quadrosItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  copied={copiedId === item.id}
                  onCopyLink={(e) => handleCopyLink(e, item)}
                  onSelect={() => onSelectImage(item)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category 2: Iluminação & Tomadas (Only if 'todos' or 'iluminacao' or 'tomadas') */}
        {(activeTab === 'todos' || activeTab === 'iluminacao' || activeTab === 'tomadas') && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="p-2 rounded-lg bg-zinc-800 text-emerald-400 border border-zinc-700">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  2. Iluminação de Teto, Perfis de LED & Decoração
                </h3>
                <p className="text-xs text-zinc-400">Design linear em gesso, sancas, espelhos retroiluminados e torres embutidas</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {iluminacaoItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  copied={copiedId === item.id}
                  onCopyLink={(e) => handleCopyLink(e, item)}
                  onSelect={() => onSelectImage(item)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Category 3: CFTV & Segurança (Only if 'todos' or 'cftv') */}
        {(activeTab === 'todos' || activeTab === 'cftv') && (
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="p-2 rounded-lg bg-zinc-800 text-sky-400 border border-zinc-700">
                <Camera className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">
                  3. Segurança Eletrônica & Sistemas de CFTV
                </h3>
                <p className="text-xs text-zinc-400">Câmeras externas vedadas, eliminação de pontos cegos e visualização remota</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cftvItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  copied={copiedId === item.id}
                  onCopyLink={(e) => handleCopyLink(e, item)}
                  onSelect={() => onSelectImage(item)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  copied: boolean;
  onCopyLink: (e: React.MouseEvent) => void;
  onSelect: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, copied, onCopyLink, onSelect }) => {
  const getBadgeStyle = (type: GalleryItem['tagType']) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'warning':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'info':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'primary':
      default:
        return 'bg-[#facc15]/20 text-[#facc15] border-[#facc15]/30';
    }
  };

  return (
    <div 
      className="bg-[#18181b] border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden shadow-lg flex flex-col group transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onSelect}
    >
      {/* Photo Frame */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-black">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

        {/* Top Tag */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border backdrop-blur-md ${getBadgeStyle(item.tagType)}`}>
            {item.tag}
          </span>
        </div>

        {/* Floating Quick Action overlay buttons */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onCopyLink}
            className="p-1.5 rounded-lg bg-black/60 hover:bg-zinc-800 text-white backdrop-blur-sm border border-white/10 transition-colors"
            title="Copiar link direto da imagem"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <a
            href={item.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-lg bg-black/60 hover:bg-[#facc15] hover:text-zinc-950 text-white backdrop-blur-sm border border-white/10 transition-colors"
            title="Abrir imagem original diretamente no navegador"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onSelect}
            className="p-1.5 rounded-lg bg-black/60 hover:bg-[#facc15] hover:text-zinc-950 text-white backdrop-blur-sm border border-white/10 transition-colors"
            title="Ampliar visualização"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Description Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3">
        <div>
          <strong className="text-base font-bold text-white block group-hover:text-[#facc15] transition-colors leading-snug mb-1.5">
            {item.title}
          </strong>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Card Footer with Direct Links */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
          <button
            onClick={onSelect}
            className="text-[#facc15] font-semibold hover:underline flex items-center gap-1"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Ver detalhes</span>
          </button>

          <a
            href={item.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-zinc-400 hover:text-white flex items-center gap-1 text-[11px] hover:underline"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Link da Imagem</span>
          </a>
        </div>
      </div>
    </div>
  );
};
