import { useEffect, useState } from "react";
import { MessageCircle, Check, Zap, Sparkles, ChevronDown } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: ELITE CINEMATIC EXPERIENCE
 * - Ultra-premium visual impact with dramatic lighting
 * - Dominant focal points and aggressive hierarchy
 * - Jarvis/Tony Stark interface aesthetic
 * - Impossible-to-ignore CTA with pulsing glow
 * - Cinematographic lighting and volumetric effects
 * - Deep blacks vs glowing orange/yellow contrast
 * - Layered depth with shadows and glassmorphism
 * - Premium fashion service, not a store
 */

const WHATSAPP_NUMBER = "5534984148067";
const WHATSAPP_MESSAGE = "Quero receber 2 looks em casa";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = document.querySelectorAll("[data-section]");
      const newVisible = new Set<string>();
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          newVisible.add(section.getAttribute("data-section") || "");
        }
      });
      
      setVisibleSections(newVisible);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground overflow-hidden touch-manipulation">
      {/* PREMIUM FLOATING CTA - ALWAYS VISIBLE */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 active:scale-95 transition-transform hover:scale-110"
      >
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffd700] opacity-75 blur-xl hover:blur-2xl transition-all duration-300 animate-pulse-glow"></div>
          
          {/* Button */}
          <button className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 border-2 border-[#ffd700]">
            <MessageCircle size={24} className="text-[#0a0a0a]" />
          </button>
        </div>
      </a>

      {/* ============ HERO SECTION - CINEMATIC ENTRANCE ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Dramatic background with lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/tech-interface-background-eRiwdSXG42DMat3KPqqRzB.webp"
            alt="Tech background"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
          
          {/* Spotlight effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* LEFT: DOMINANT TEXT + MEGA CTA */}
          <div
            className={`space-y-8 ${isVisible("hero") ? "fade-in-glow-premium" : "opacity-0"}`}
            data-section="hero"
          >
            {/* Headline - AGGRESSIVE & BOLD */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#ff6b00] bg-[#ff6b00]/10 backdrop-blur-sm">
                <span className="text-xs font-bold text-[#ffd700] tracking-widest">NOVA TECNOLOGIA</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
                Receba seu look em casa em até{" "}
                <span className="holographic-text-premium">2 horas</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
                Sem escolher. Sem sair. Prove e pague só o que ficar.
              </p>
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-3 text-sm font-semibold">
              <div className="w-3 h-3 rounded-full bg-[#00d9ff] animate-pulse"></div>
              <span className="text-[#ffd700]">Entrega ativa em Uberaba • Até 2 horas</span>
            </div>

            {/* MEGA CTA BUTTON - IMPOSSIBLE TO IGNORE */}
            <div className="pt-6 md:pt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group block">
                <button className="mega-cta-button w-full md:w-auto">
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 font-black text-base md:text-lg">
                    <Sparkles size={20} className="md:w-6 md:h-6" />
                    <span className="hidden sm:inline">QUERO RECEBER AGORA</span>
                    <span className="sm:hidden">RECEBER AGORA</span>
                  </span>
                </button>
              </a>
              <p className="text-xs text-gray-400 mt-3 md:mt-4 text-center md:text-left">
                Resposta em menos de 5 minutos • Sem compromisso
              </p>
            </div>

            {/* Trust signals - Premium style */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-8 md:pt-12 border-t border-[#2a2a2a]">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-[#ff6b00]">100+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Clientes</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-[#ffd700]">98%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Satisfação</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-[#00d9ff]">2h</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Entrega</div>
              </div>
            </div>
          </div>

          {/* RIGHT: HERO IMAGE - CINEMATIC */}
          <div className={`relative ${isVisible("hero") ? "fade-in-glow-premium" : "opacity-0"}`}>
            <div className="relative z-10 group">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/hero-cinematic-premium-V3atjV5Sscvh37EF2W8EEV.webp"
                alt="Modelo premium"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-2 border-[#ff6b00]/30"
              />
              {/* Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#ff6b00] via-[#ffd700] to-[#00d9ff] rounded-2xl opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-[#ff6b00]" />
        </div>
      </section>

      {/* ============ HOW IT WORKS - SYSTEM MODULES ============ */}
      <section
        className="py-32 relative"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)" }}
        data-section="how-it-works"
      >
        <div className="container">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">Como o Sistema Funciona</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">Uma tecnologia inteligente que entende exatamente o que você precisa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Escolha seu estilo",
                description: "Urbano, essencial ou premium. Você define o vibe.",
                icon: "✨",
              },
              {
                step: "02",
                title: "Receba 2 looks",
                description: "Em até 2 horas, 2 outfits completos na sua porta.",
                icon: "📦",
              },
              {
                step: "03",
                title: "Aprove e pague",
                description: "Só paga pelo que gostar. Sem compromisso.",
                icon: "✓",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`premium-card ${
                  isVisible("how-it-works") ? "stagger-fade-premium" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("how-it-works") ? `${idx * 0.15}s` : "0s",
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff6b00] to-[#ffd700] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                
                <div className="relative p-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/80 backdrop-blur-xl group-hover:border-[#ff6b00]/50 transition-all duration-500">
                  <div className="text-6xl mb-4 opacity-50">{item.icon}</div>
                  <div className="text-sm font-bold text-[#ff6b00] mb-2 tracking-widest">PASSO {item.step}</div>
                  <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUTFIT SHOWCASE - PREMIUM DISPLAY ============ */}
      <section className="py-32 relative" data-section="outfits">
        <div className="container">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">Seus Looks Premium</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">Escolha o módulo que mais combina com você</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Modo Urbano",
                description: "Tech, moderno, pronto para a rua",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-hero-spotlight-GUdqgipQZNjjRDkv98bwLS.webp",
                accent: "#ff6b00",
              },
              {
                name: "Modo Essencial",
                description: "Versátil, clássico, sempre funciona",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-essential-premium-dgHuQoj4qz4zphBnEh8fga.webp",
                accent: "#ffd700",
              },
              {
                name: "Modo Premium",
                description: "Elegante, sofisticado, impacto garantido",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-premium-formal-gthfXvR5d9kjyrgG8hZF7T.webp",
                accent: "#00d9ff",
              },
            ].map((outfit, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer ${
                  isVisible("outfits") ? "stagger-fade-premium" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("outfits") ? `${idx * 0.15}s` : "0s",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Accent glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: outfit.accent }}
                  ></div>
                </div>
                
                <h3 className="text-2xl font-black mb-2">{outfit.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outfit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RISK REVERSAL - PREMIUM GUARANTEE ============ */}
      <section
        className="py-32 relative"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)" }}
        data-section="risk-reversal"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Benefits */}
            <div
              className={`space-y-8 ${
                isVisible("risk-reversal") ? "fade-in-glow-premium" : "opacity-0"
              }`}
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Sem Risco. Sem Compromisso.</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Você controla tudo. Aprova o que quer, devolve o que não gostar. Garantia de satisfação 100%.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Você só paga pelo que ficar",
                  "Devolução fácil e rápida",
                  "Sem taxa de entrega",
                  "Garantia de satisfação",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ffd700] flex items-center justify-center mt-1 shadow-lg">
                      <Check size={18} className="text-[#0a0a0a] font-bold" />
                    </div>
                    <span className="text-lg font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div
              className={`grid grid-cols-2 gap-6 ${
                isVisible("risk-reversal") ? "fade-in-glow-premium" : "opacity-0"
              }`}
            >
              {[
                { label: "Taxa de satisfação", value: "98%", color: "#ff6b00" },
                { label: "Clientes que repetem", value: "87%", color: "#ffd700" },
                { label: "Tempo de entrega", value: "< 2h", color: "#00d9ff" },
                { label: "Cidades atendidas", value: "1+", color: "#ff6b00" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="premium-stat-card group"
                >
                  <div className="relative p-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/80 backdrop-blur-xl group-hover:border-[#ff6b00]/50 transition-all duration-500 text-center">
                    <div
                      className="text-4xl font-black mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ URGENCY - SCARCITY TRIGGER ============ */}
      <section className="py-24 relative" data-section="urgency">
        <div className="container">
          <div
            className={`premium-urgency-card ${
              isVisible("urgency") ? "fade-in-glow-premium" : "opacity-0"
            }`}
          >
            <div className="relative p-12 md:p-16 rounded-2xl border-2 border-[#ff6b00] bg-gradient-to-br from-[#ff6b00]/10 to-[#ffd700]/5 backdrop-blur-xl overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] via-transparent to-[#ffd700] opacity-10 blur-3xl"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap size={24} className="text-[#ffd700] animate-pulse" />
                  <span className="text-sm font-black text-[#ffd700] tracking-widest">ATENÇÃO</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black">
                  Agenda de entregas quase cheia hoje
                </h3>
                
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Últimas vagas disponíveis. Clique agora para garantir seu horário.
                </p>
                
                <div className="pt-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <button className="mega-cta-button">
                      <span className="relative z-10 flex items-center justify-center gap-3 font-black text-lg">
                        GARANTIR VAGA AGORA
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section
        className="py-32 relative"
        style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)" }}
        data-section="testimonials"
      >
        <div className="container">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4">O que dizem</h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg">Histórias reais de clientes satisfeitos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos M.",
                role: "Empresário",
                text: "Não tenho tempo para escolher roupa. Agora recebo looks prontos em casa. Mudou meu dia.",
                rating: 5,
              },
              {
                name: "Felipe R.",
                role: "Desenvolvedor",
                text: "Adorei a experiência. Chegou rápido, as roupas são de qualidade e paguei só o que usei.",
                rating: 5,
              },
              {
                name: "Lucas S.",
                role: "Consultor",
                text: "Finalmente alguém que entende o que eu preciso. Serviço impecável, recomendo muito.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`premium-testimonial-card ${
                  isVisible("testimonials") ? "stagger-fade-premium" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("testimonials") ? `${idx * 0.15}s` : "0s",
                }}
              >
                <div className="relative p-8 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a]/80 backdrop-blur-xl hover:border-[#ff6b00]/50 transition-all duration-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-base mb-6 leading-relaxed text-gray-300">"{testimonial.text}"</p>
                  <div>
                    <div className="font-black text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA - MAXIMUM IMPACT ============ */}
      <section className="py-32 relative overflow-hidden" data-section="final-cta">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/20 via-[#0a0a0a] to-[#ffd700]/20"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#ff6b00] rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div
            className={`space-y-6 md:space-y-8 max-w-3xl mx-auto ${
              isVisible("final-cta") ? "fade-in-glow-premium" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ativar Entrega Agora
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Seu look perfeito está a apenas um clique de distância. Clique no botão abaixo ou no ícone do WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-6 md:pt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                <button className="mega-cta-button">
                  <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3 font-black text-base md:text-lg">
                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                    <span className="hidden sm:inline">INICIAR CONVERSA</span>
                    <span className="sm:hidden">CONVERSA</span>
                  </span>
                </button>
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 pt-3 md:pt-4">
              ⚡ Responderemos em menos de 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#2a2a2a] py-16 bg-[#0f0f0f]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-black text-lg mb-3">Fluxo Outlet</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Moda masculina premium entregue em casa. Receba, prove e pague só o que ficar.
              </p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-3">Contato</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#ff6b00] hover:text-[#ffd700] transition-colors font-semibold"
              >
                WhatsApp: 5534984148067
              </a>
            </div>
            <div>
              <h4 className="font-black text-lg mb-3">Localização</h4>
              <p className="text-sm text-gray-400">Uberaba, MG • Entrega em até 2 horas</p>
            </div>
          </div>

          <div className="border-t border-[#2a2a2a] pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Fluxo Outlet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
