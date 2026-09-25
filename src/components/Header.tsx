import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, Menu, X, ShieldAlert, Zap, Instagram, Mail } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data/electricalData';

interface HeaderProps {
  onOpenEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato & Orçamento', href: '#contato' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#131315]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
      {/* Top Announcement & Quick Contact Ticker */}
      <div className="bg-[#0e0e10] border-b border-zinc-900 text-zinc-400 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto h-9 flex items-center justify-between text-xs">
          <button
            onClick={onOpenEmergency}
            className="flex items-center gap-2 text-left hover:opacity-80 transition-opacity group cursor-pointer"
            title="Clique para detalhes do atendimento emergencial"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold group-hover:underline flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              Atendimento Técnico Especializado
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline text-zinc-400">Atendimento em todo o Rio de Janeiro - RJ</span>
          </button>

          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#facc15]" />
              {CONTACT_INFO.hours}
            </span>

            {/* Instagram Top Quick Link */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-pink-400 hover:text-pink-300 font-medium transition-colors"
              title="Siga no Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.instagramHandle}</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="text-[#facc15] hover:text-[#eab308] font-bold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 flex items-center justify-center shrink-0">
            <img
              src={IMAGES.logo}
              alt="Logo Nando Elétrica"
              className="h-full w-full object-cover group-hover:scale-110 transition-transform"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== IMAGES.logoFallback) {
                  target.src = IMAGES.logoFallback;
                }
              }}
            />
            <Zap className="w-5 h-5 text-[#facc15] absolute opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-lg tracking-tight flex items-center gap-1">
              Nando <span className="text-[#facc15]">Elétrica</span>
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-semibold">
              RJ • Padrão NBR 5410
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#facc15] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#facc15] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions: Instagram & WhatsApp */}
        <div className="flex items-center gap-2.5">
          {/* Instagram Action Button */}
          <a
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 text-white text-xs sm:text-sm font-bold px-3.5 py-2 sm:py-2.5 rounded-lg shadow-[0_0_18px_rgba(236,72,153,0.3)] hover:shadow-[0_0_24px_rgba(236,72,153,0.5)] transition-all whitespace-nowrap"
            title="Instagram Nando Elétrica"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          {/* WhatsApp Action Button */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-[0_0_18px_rgba(34,197,94,0.3)] hover:shadow-[0_0_24px_rgba(34,197,94,0.45)] transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Conversar</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18181b] border-b border-zinc-800 px-4 py-4 space-y-2 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-[#facc15] transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            {/* Instagram Mobile Button */}
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-3 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 flex items-center justify-center gap-2 shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram ({CONTACT_INFO.instagramHandle})</span>
            </a>

            {/* WhatsApp Mobile Button */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-3 py-2.5 rounded-lg text-xs font-bold text-white bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp ({CONTACT_INFO.phone})</span>
            </a>

            {/* Email Mobile Link */}
            <a
              href={CONTACT_INFO.emailUrl}
              className="w-full text-center px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full text-left px-3 py-2 rounded-md text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between"
            >
              <span>🚨 Atendimento Técnico de Urgência</span>
              <span className="text-[11px] underline">Ver contato</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
