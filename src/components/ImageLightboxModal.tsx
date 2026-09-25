import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../data/electricalData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(item.imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#18181b] border border-[#2e2e33] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2e2e33] bg-[#131315]">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-[#facc15]/10 text-[#facc15]">
              <ZoomIn className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg line-clamp-1">{item.title}</h3>
              <p className="text-xs text-zinc-400">{item.location || 'Rio de Janeiro - RJ'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with high contrast backdrop */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[58vh]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[58vh]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-[#facc15] border border-[#facc15]/30">
              {item.tag}
            </span>
          </div>
        </div>

        {/* Details & Actions Footer */}
        <div className="p-5 bg-[#18181b] border-t border-[#2e2e33] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm text-zinc-300 mb-2">{item.description}</p>
            {item.specs && item.specs.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.specs.map((spec, idx) => (
                  <span key={idx} className="text-xs text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    • {spec}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action buttons including direct image link */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Copiar URL direta da foto"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>

            <a
              href={item.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#facc15] hover:bg-[#eab308] text-zinc-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
              title="Abrir imagem original em nova aba"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Imagem Original</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
