import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { CONTACT_INFO } from '../data/electricalData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Floating Instagram Action */}
      <a
        href={CONTACT_INFO.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Siga Nando Elétrica no Instagram"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 text-white shadow-[0_0_24px_rgba(219,39,119,0.4)] hover:scale-110 transition-all duration-300"
      >
        <Instagram className="w-5 h-5" />
        <span className="absolute right-14 bg-[#18181b] border border-zinc-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 hidden sm:block">
          Instagram @nandoeletric
        </span>
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#22c55e] text-white shadow-[0_0_32px_-4px_rgba(34,197,94,0.6)] hover:bg-[#16a34a] hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Pulse Ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 pointer-events-none"></span>

        {/* Tooltip Label */}
        <span className="absolute right-16 bg-[#18181b] border border-zinc-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 hidden sm:block">
          WhatsApp: (21) 97312-1322
        </span>
      </a>
    </aside>
  );
};
