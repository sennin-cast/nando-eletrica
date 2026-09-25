import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Check, 
  Copy, 
  Sparkles,
  Phone,
  Instagram
} from 'lucide-react';
import { NEIGHBORHOODS_RJ, CONTACT_INFO } from '../data/electricalData';

interface QuoteFormProps {
  selectedServicePreload?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ selectedServicePreload }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Quadro de Distribuição / Disjuntores');
  const [neighborhood, setNeighborhood] = useState('');
  const [details, setDetails] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServicePreload) {
      setService(selectedServicePreload);
    }
  }, [selectedServicePreload]);

  const serviceOptions = [
    'Quadro de Distribuição / Disjuntores',
    'Conserto de Curto-Circuito (Urgente)',
    'Iluminação Nova / Perfis de LED',
    'Sistema de CFTV e Câmeras',
    'Troca de Chuveiro / Aquecedor',
    'Adição de Tomadas / Torres Retráteis',
    'Padrão de Entrada Light RJ',
    'Automação Residencial Smart Home',
    'Revisão Elétrica Completa / Laudo',
    'Outro Serviço Elétrico'
  ];

  const generateMessage = () => {
    let msg = `Olá Nando! Gostaria de um orçamento para serviço elétrico:\n`;
    msg += `• *Nome:* ${name || '[Não preenchido]'}\n`;
    msg += `• *Telefone:* ${phone || '[Não preenchido]'}\n`;
    msg += `• *Serviço:* ${service}\n`;
    msg += `• *Bairro:* ${neighborhood || '[Rio de Janeiro]'}\n`;
    if (details.trim()) {
      msg += `• *Detalhes:* ${details}\n`;
    }
    msg += `\n(Enviado pelo site Nando Elétrica RJ)`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = generateMessage();
    const waUrl = `https://wa.me/5521973121322?text=${encodeURIComponent(formattedText)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="contato" className="py-20 lg:py-24 bg-[#131315] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#18181b] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-[#facc15]/10 rounded-full blur-3xl"></div>
          <div className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
            
            {/* Left Column: Direct Contact Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#facc15] block mb-2">
                  Atendimento Direto & Redes Sociais
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Canais de Contato & Redes
                </h2>
                <p className="text-zinc-400 mt-2 text-sm sm:text-base leading-relaxed">
                  Fale diretamente com o Nando via WhatsApp, acompanhe as obras e serviços no Instagram ou envie seu projeto por e-mail. Resposta rápida e orçamento detalhado sem custo.
                </p>
              </div>

              {/* Action Buttons Stack */}
              <div className="flex flex-col gap-3">
                {/* 1. Priority WhatsApp Action Card */}
                <div className="bg-[#201f24] border border-zinc-800 p-4 sm:p-5 rounded-2xl flex flex-col gap-2.5 shadow-lg hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                        Canal Mais Rápido
                      </span>
                      <strong className="text-base sm:text-lg font-bold text-white block">WhatsApp Direto</strong>
                      <span className="text-sm sm:text-base text-[#facc15] font-extrabold">{CONTACT_INFO.phone}</span>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#22c55e] text-white flex items-center justify-center shadow-lg shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                  </div>

                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.35)] transition-all group"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chamar no WhatsApp ({CONTACT_INFO.phone})</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* 2. Instagram Action Card */}
                <div className="bg-[#201f24] border border-zinc-800 p-4 sm:p-5 rounded-2xl flex flex-col gap-2.5 shadow-lg hover:border-pink-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 block">
                        Fotos de Obras & Portfólio
                      </span>
                      <strong className="text-base sm:text-lg font-bold text-white block">Instagram Oficial</strong>
                      <span className="text-sm text-pink-300 font-semibold">{CONTACT_INFO.instagramHandle}</span>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 text-white flex items-center justify-center shadow-lg shrink-0">
                      <Instagram className="w-6 h-6" />
                    </div>
                  </div>

                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(236,72,153,0.35)] transition-all group"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Acessar Instagram @nandoeletric</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* 3. Email Action Card */}
                <div className="bg-[#201f24] border border-zinc-800 p-4 sm:p-5 rounded-2xl flex flex-col gap-2.5 shadow-lg hover:border-sky-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-sky-400 block">
                        Envio de Projetos & Plantas
                      </span>
                      <strong className="text-base sm:text-lg font-bold text-white block">E-mail Técnico</strong>
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">{CONTACT_INFO.email}</span>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-lg shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>

                  <a
                    href={CONTACT_INFO.emailUrl}
                    className="mt-1 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-all group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar E-mail para {CONTACT_INFO.email}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Additional Contact Channels */}
              <div className="flex flex-col gap-3 text-xs text-zinc-300">
                <div className="flex items-start gap-3 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                  <MapPin className="w-4 h-4 text-[#facc15] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Região Atendida:</span>
                    <span className="text-zinc-400">{CONTACT_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold block">Horário de Funcionamento:</span>
                    <span className="text-zinc-400">{CONTACT_INFO.hours} • Atendimento ágil para quadros, sobrecargas e curto-circuito</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Fast Quote Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#201f24] border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Solicite um Orçamento Rápido
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Preencha o formulário abaixo que entraremos em contato rapidamente pelo WhatsApp ou telefone.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Carlos Eduardo"
                      className="bg-[#131315] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(21) 99999-9999"
                      className="bg-[#131315] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection & Neighborhood */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Serviço Desejado *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-[#131315] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#18181b] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-zinc-300">
                      Bairro no Rio de Janeiro *
                    </label>
                    <input
                      type="text"
                      required
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Ex: Barra, Copacabana, Tijuca..."
                      className="bg-[#131315] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all"
                    />
                  </div>
                </div>

                {/* Quick Neighborhood Suggestions */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] text-zinc-400">Sugestões rápidas:</span>
                  {['Tijuca', 'Barra', 'Copacabana', 'Botafogo', 'Recreio', 'Centro'].map((bairro) => (
                    <button
                      key={bairro}
                      type="button"
                      onClick={() => setNeighborhood(bairro)}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                    >
                      {bairro}
                    </button>
                  ))}
                </div>

                {/* Details Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-zinc-300">
                    Detalhes do que precisa ser feito (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Descreva brevemente o problema elétrico, reforma ou quantidade de pontos..."
                    className="bg-[#131315] border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Live WhatsApp Message Preview */}
                <div className="bg-[#131315] border border-zinc-800 rounded-xl p-3.5 text-xs">
                  <div className="flex items-center justify-between text-zinc-400 mb-2">
                    <span className="font-semibold text-zinc-300 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#facc15]" />
                      Mensagem que será enviada:
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap font-sans text-zinc-300 text-[11px] bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-800">
                    {generateMessage()}
                  </pre>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#facc15] hover:bg-[#eab308] text-zinc-950 font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(250,204,21,0.3)] hover:shadow-[0_0_32px_rgba(250,204,21,0.45)] transition-all cursor-pointer group"
                  >
                    <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>Enviar Solicitação via WhatsApp</span>
                  </button>

                  <span className="text-[11px] text-zinc-400 text-center block mt-2">
                    Você será redirecionado para o WhatsApp com os dados preenchidos prontos para envio direto.
                  </span>
                </div>

                {submitted && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 text-center">
                    ✓ Janela do WhatsApp aberta! Se a janela não abriu, você pode clicar no botão verde de WhatsApp ou copiar a mensagem acima.
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
