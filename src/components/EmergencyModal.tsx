import React from 'react';
import { ShieldAlert, Phone, MessageCircle, X, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/electricalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#18181b] border border-red-500/40 max-w-lg w-full rounded-2xl p-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Atendimento Técnico de Urgência</h3>
            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">
              Atendimento Imediato Rio de Janeiro
            </span>
          </div>
        </div>

        {/* Safety First Instructions */}
        <div className="bg-red-950/30 border border-red-900/60 rounded-xl p-4 mb-5 text-xs text-zinc-300">
          <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Instruções de Segurança em caso de Curto ou Cheiro de Queimado:</span>
          </div>
          <ul className="space-y-1.5 list-disc pl-4 text-zinc-300">
            <li><strong>Desligue o disjuntor geral imediatamente</strong> no quadro de distribuição.</li>
            <li>Não toque em fios expostos ou caixas elétricas fumegantes.</li>
            <li>Desconecte aparelhos pesados (ar-condicionado, chuveiro, micro-ondas) da tomada.</li>
            <li>Evite jogar água em instalações elétricas energizadas.</li>
          </ul>
        </div>

        <p className="text-sm text-zinc-300 mb-6">
          O Nando está a postos para socorrer emergências elétricas graves, quedas de disjuntores gerais e falhas de fase no Rio de Janeiro.
        </p>

        {/* Immediate Contact Triggers */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Ligar Agora: {CONTACT_INFO.phone}</span>
          </a>

          <a
            href={CONTACT_INFO.whatsappEmergencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Urgente</span>
          </a>
        </div>
      </div>
    </div>
  );
};
