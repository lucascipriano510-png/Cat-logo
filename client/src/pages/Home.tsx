import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Zap, Package, Heart, Star } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Cyberpunk Noir - Tech Noir Elegante
 * - Dark UI (black #0a0a0a) with neon orange (#ff6b00) and yellow (#ffd700) accents
 * - Asymmetric layout with diagonal cuts and floating elements
 * - Holographic text effects and glowing borders
 * - Smooth animations: fade-in + glow, hover pulse, scroll stagger
 * - Minimalist but powerful - focus on conversion and WhatsApp action
 */

const WHATSAPP_NUMBER = "5534999999999"; // Replace with actual number
const WHATSAPP_MESSAGE = "Quero receber 2 looks em casa";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Trigger animations for visible sections
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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = (section: string) => visibleSections.has(section);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg neon-glow-hover hover:scale-110 transition-transform duration-300"
        aria-label="Enviar mensagem no WhatsApp"
      >
        <MessageCircle size={24} className="text-[#0a0a0a]" />
      </a>

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16 md:pt-20 md:pb-20">
        {/* Background with holographic effect */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/holographic-tech-background-CveZcVamiXAbc7gFisknUf.webp"
            alt="Tech background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div
            className={`space-y-6 ${isVisible("hero") ? "fade-in-glow" : "opacity-0"}`}
            data-section="hero"
          >
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Receba seu look em casa em até{" "}
                <span className="holographic-text">2 horas</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Sem escolher. Sem sair. Prove e pague só o que ficar.
              </p>
            </div>

            {/* Microcopy */}
            <div className="flex items-center gap-2 text-sm font-medium text-[#ffd700]">
              <Zap size={16} />
              <span>Disponível hoje em Uberaba</span>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <button className="btn-neon w-full">
                  Quero receber em casa
                </button>
              </a>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-[#2a2a2a]">
              <div>
                <div className="text-2xl font-bold text-[#ff6b00]">100+</div>
                <div className="text-sm text-muted-foreground">Clientes atendidos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#ffd700]">2h</div>
                <div className="text-sm text-muted-foreground">Entrega garantida</div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className={`relative ${isVisible("hero") ? "fade-in-glow" : "opacity-0"}`}>
            <div className="relative z-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/hero-male-model-tech-5WPGXitKX75PYWMSz9Xz4u.webp"
                alt="Modelo em ambiente futurista"
                className="w-full h-auto rounded-lg neon-border"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff6b00] to-[#00d9ff] rounded-lg opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section
        className="py-20 relative clip-diagonal-top"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)" }}
        data-section="how-it-works"
      >
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Um sistema inteligente que entende o que você quer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Escolha seu estilo",
                description: "Diga qual é seu vibe: urbano, essencial ou premium",
                icon: "✨",
              },
              {
                step: 2,
                title: "Receba 2 opções",
                description: "Em até 2 horas, 2 looks completos chegam na sua porta",
                icon: "📦",
              },
              {
                step: 3,
                title: "Prove e pague",
                description: "Você só paga pelo que gostar. Sem compromisso.",
                icon: "✓",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`glass p-8 rounded-lg neon-border-hover ${
                  isVisible("how-it-works") ? "stagger-fade" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("how-it-works") ? `${idx * 0.1}s` : "0s",
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="text-sm font-bold text-[#ff6b00] mb-2">
                  PASSO {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUTFIT SHOWCASE ============ */}
      <section className="py-20 relative" data-section="outfits">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Seus looks</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Escolha o módulo que mais combina com você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Modo Urbano",
                description: "Tech, moderno, pronto para a rua",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-urban-mode-oXKvRXx6DEajBFxjAyfLxS.webp",
                color: "#ff6b00",
              },
              {
                name: "Modo Essencial",
                description: "Versátil, clássico, sempre funciona",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-essential-mode-G8rU5UvKAenHczRbxmTeTN.webp",
                color: "#ffd700",
              },
              {
                name: "Modo Premium",
                description: "Elegante, sofisticado, impacto garantido",
                image:
                  "https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/outfit-premium-mode-QVbj2qE22bvaQX726vDUXJ.webp",
                color: "#00d9ff",
              },
            ].map((outfit, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer ${
                  isVisible("outfits") ? "stagger-fade" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("outfits") ? `${idx * 0.1}s` : "0s",
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 neon-border-hover aspect-square">
                  <img
                    src={outfit.image}
                    alt={outfit.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{outfit.name}</h3>
                <p className="text-muted-foreground text-sm">{outfit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RISK REVERSAL ============ */}
      <section
        className="py-20 relative clip-diagonal-bottom"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)" }}
        data-section="risk-reversal"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Benefits */}
            <div
              className={`space-y-6 ${
                isVisible("risk-reversal") ? "fade-in-glow" : "opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Sem risco. Sem compromisso.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Você controla tudo. Aprova o que quer, devolve o que não gostar.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  "Você só paga pelo que ficar",
                  "Devolução fácil e rápida",
                  "Sem taxa de entrega",
                  "Garantia de satisfação",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff6b00] flex items-center justify-center mt-1">
                      <Check size={16} className="text-[#0a0a0a]" />
                    </div>
                    <span className="text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div
              className={`grid grid-cols-2 gap-4 md:gap-6 ${
                isVisible("risk-reversal") ? "fade-in-glow" : "opacity-0"
              }`}
            >
              {[
                { label: "Taxa de satisfação", value: "98%" },
                { label: "Clientes que repetem", value: "87%" },
                { label: "Tempo de entrega", value: "< 2h" },
                { label: "Cidades atendidas", value: "1+" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-lg neon-border text-center"
                >
                  <div className="text-3xl font-bold text-[#ff6b00] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ URGENCY MODULE ============ */}
      <section className="py-16 relative" data-section="urgency">
        <div className="container">
          <div
            className={`glass p-8 md:p-12 rounded-lg neon-border text-center ${
              isVisible("urgency") ? "fade-in-glow" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap size={20} className="text-[#ffd700]" />
              <span className="text-sm font-bold text-[#ffd700]">ATENÇÃO</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Agenda de entregas quase cheia hoje
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Últimas vagas disponíveis. Clique agora para garantir seu horário.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="btn-neon mx-auto">
                Garantir meu horário agora
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section
        className="py-20 relative"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)" }}
        data-section="testimonials"
      >
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">O que dizem</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Histórias reais de clientes satisfeitos
            </p>
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
                className={`glass p-6 rounded-lg neon-border ${
                  isVisible("testimonials") ? "stagger-fade" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible("testimonials") ? `${idx * 0.1}s` : "0s",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
                <p className="text-base mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 relative overflow-hidden" data-section="final-cta">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] via-[#0a0a0a] to-[#00d9ff] opacity-10"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div
            className={`space-y-6 max-w-2xl mx-auto ${
              isVisible("final-cta") ? "fade-in-glow" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Ativar entrega agora
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Seu look perfeito está a apenas um clique de distância. Clique no botão abaixo ou no ícone do WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="btn-neon w-full flex items-center justify-center gap-2">
                  <MessageCircle size={18} />
                  Iniciar conversa
                </button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              Responderemos em menos de 5 minutos
            </p>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#2a2a2a] py-12 bg-[#0f0f0f]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">Fashion Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Receba 2 looks em casa em até 2 horas. Prove e pague só o que ficar.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#ff6b00] hover:text-[#ffd700] transition-colors"
              >
                WhatsApp
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-3">Localização</h4>
              <p className="text-sm text-muted-foreground">Uberaba, MG</p>
            </div>
          </div>

          <div className="border-t border-[#2a2a2a] pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Fashion Delivery. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
