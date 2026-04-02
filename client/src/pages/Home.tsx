'use client';

import { useEffect, useState, useRef } from 'react';
import { MessageCircle, Sparkles, ArrowDown, Zap } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5534984148067?text=Quero%20receber%202%20looks%20em%20casa';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* FLOATING CTA - ALWAYS PRESENT */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ffd700] opacity-75 blur-2xl animate-pulse"></div>
          <button className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#ff6b00] to-[#ff8c00] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-2 border-[#ffd700]">
            <MessageCircle size={24} className="text-[#0a0a0a]" />
          </button>
        </div>
      </a>

      {/* ============ SECTION 1: IMMERSIVE HERO ============ */}
      <section
        id="hero"
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background with parallax effect */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/hero-immersive-cinematic-9HpPNg4fdyT83bdqs2jCqj.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.7,
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/20 via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />

        {/* Content */}
        <div className="container relative z-20 text-center space-y-8 max-w-4xl">
          {/* Badge */}
          <div
            className="inline-block"
            style={{
              opacity: 1 - scrollY / 500,
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="px-4 py-2 rounded-full border border-[#ff6b00] bg-[#ff6b00]/10 backdrop-blur-sm inline-block">
              <span className="text-xs font-black text-[#ffd700] tracking-widest">NOVA TECNOLOGIA</span>
            </div>
          </div>

          {/* Main Headline - AGGRESSIVE */}
          <div
            style={{
              transform: `translateY(${scrollY * 0.2}px) scale(${1 - scrollY / 1000})`,
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-6">
              <span className="block">Seu look</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ffd700] to-[#ff6b00] animate-pulse">
                em 2 horas
              </span>
              <span className="block">em casa</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Sem escolher. Sem sair. <span className="text-[#ffd700] font-bold">Prove e pague só o que ficar.</span>
          </p>

          {/* CTA - MEGA BUTTON */}
          <div className="pt-8 flex flex-col items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-lg font-black text-base sm:text-lg md:text-2xl text-[#0a0a0a] shadow-2xl hover:shadow-[0_0_40px_#ff6b00] transition-all duration-300 border-2 border-[#ffd700] overflow-hidden hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <Sparkles size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  <span className="text-sm sm:text-base md:text-lg">QUERO RECEBER AGORA</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#ff6b00] opacity-0 hover:opacity-20 transition-opacity duration-300" />
              </button>
            </a>

            {/* Scroll indicator */}
            <div className="animate-bounce pt-4">
              <ArrowDown size={24} className="text-[#ffd700]" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: DESIRE SHOWCASE ============ */}
      <section
        id="desire"
        data-section="desire"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/section-desire-showcase-ZQ9i7VPqVragXjdUFfBWwY.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${(scrollY - 1000) * 0.3}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />

        <div className="container relative z-10 text-center space-y-12">
          {/* Section Title */}
          <div
            className={`transition-all duration-1000 ${
              visibleSections.has('desire')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Três Vibes,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ffd700]">
                Infinitas Possibilidades
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Escolha o estilo que mais combina com você</p>
          </div>

          {/* Outfit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modo Urbano',
                desc: 'Tech, moderno, pronto para a rua',
                icon: '⚡',
              },
              {
                title: 'Modo Essencial',
                desc: 'Versátil, clássico, sempre funciona',
                icon: '✨',
              },
              {
                title: 'Modo Premium',
                desc: 'Elegante, sofisticado, impacto garantido',
                icon: '👑',
              },
            ].map((outfit, idx) => (
              <div
                key={idx}
                className={`group relative transition-all duration-1000 ${
                  visibleSections.has('desire')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${idx * 200}ms`,
                }}
              >
                <div className="relative h-96 rounded-lg overflow-hidden border-2 border-[#ff6b00]/30 group-hover:border-[#ff6b00] transition-colors duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-[#0a0a0a]">
                    <div className="text-5xl mb-4">{outfit.icon}</div>
                    <h3 className="text-2xl font-black mb-2">{outfit.title}</h3>
                    <p className="text-gray-400 text-sm">{outfit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: SPEED & URGENCY ============ */}
      <section
        id="speed"
        data-section="speed"
        className="relative min-h-screen flex items-center justify-center py-20"
        style={{
          background: 'linear-gradient(to bottom, #0a0a0a, #1a1a1a)',
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/section-speed-delivery-ZMosNv4tQRopfZG2n4yXBs.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${(scrollY - 2000) * 0.2}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

        <div className="container relative z-10 text-center space-y-12">
          <div
            className={`transition-all duration-1000 ${
              visibleSections.has('speed')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#ffd700] bg-[#ffd700]/10 mb-6">
              <Zap size={20} className="text-[#ffd700]" />
              <span className="font-black text-[#ffd700]">VELOCIDADE EXTREMA</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Entrega em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ffd700]">
                até 2 horas
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { number: '1', label: 'Você escolhe', desc: 'Seu estilo em segundos' },
                { number: '2', label: 'Preparamos', desc: 'Looks prontos para você' },
                { number: '3', label: 'Recebe', desc: 'Na sua porta em até 2h' },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-1000 ${
                    visibleSections.has('speed')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  <div className="p-6 rounded-lg border border-[#ff6b00]/20 hover:border-[#ff6b00] transition-colors duration-300 bg-[#0a0a0a]/50 backdrop-blur-sm">
                    <div className="text-5xl font-black text-[#ff6b00] mb-3">{step.number}</div>
                    <h3 className="font-black text-lg mb-2">{step.label}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: EXCLUSIVITY & SCARCITY ============ */}
      <section
        id="exclusivity"
        data-section="exclusivity"
        className="relative min-h-screen flex items-center justify-center py-20"
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/section-exclusivity-9zbjdnb3rY7SbqsoL8KKtJ.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${(scrollY - 3000) * 0.25}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]" />

        <div className="container relative z-10 text-center space-y-12">
          <div
            className={`transition-all duration-1000 ${
              visibleSections.has('exclusivity')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block px-6 py-3 rounded-lg border-2 border-[#ff6b00] bg-[#ff6b00]/10 mb-6">
              <span className="font-black text-[#ff6b00] text-lg">⚠️ ATENÇÃO</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Vagas Limitadas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] to-[#ff6b00]">
                Hoje
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Apenas <span className="font-black text-[#ff6b00]">5 slots</span> disponíveis para entrega hoje. Após isso, próxima disponibilidade é amanhã.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {['100+', '98%', '2h', '1k+'].map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border border-[#ff6b00]/30 bg-[#0a0a0a]/50 backdrop-blur-sm transition-all duration-1000 ${
                    visibleSections.has('exclusivity')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`,
                  }}
                >
                  <div className="text-3xl font-black text-[#ff6b00]">{stat}</div>
                  <div className="text-xs text-gray-400 mt-2">
                    {['Clientes', 'Satisfação', 'Entrega', 'Looks'][idx]}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-lg font-black text-base sm:text-lg text-[#0a0a0a] shadow-2xl hover:shadow-[0_0_40px_#ff6b00] transition-all duration-300 border-2 border-[#ffd700] hover:scale-105 active:scale-95">
                GARANTIR VAGA AGORA
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: EXPERIENCE ============ */}
      <section
        id="experience"
        data-section="experience"
        className="relative min-h-screen flex items-center justify-center py-20"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663504826005/PUHfFZeaeqgF3QvD5MkPbK/section-experience-W8MJ8a3pGvTjrPjbdKnMYp.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${(scrollY - 4000) * 0.2}px)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

        <div className="container relative z-10 text-center space-y-12">
          <div
            className={`transition-all duration-1000 ${
              visibleSections.has('experience')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Experiência{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ffd700]">
                Premium
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                { icon: '✓', title: 'Você só paga pelo que ficar', desc: 'Sem risco, sem compromisso' },
                { icon: '🚚', title: 'Devolução fácil e rápida', desc: 'Sem burocracias' },
                { icon: '💎', title: 'Roupas de qualidade premium', desc: 'Marcas selecionadas' },
                { icon: '⚡', title: 'Resposta em menos de 5 min', desc: 'Atendimento imediato' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-lg border border-[#ff6b00]/30 hover:border-[#ff6b00] transition-all duration-300 bg-[#0a0a0a]/50 backdrop-blur-sm transform hover:scale-105 transition-transform ${
                    visibleSections.has('experience')
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${idx * 150}ms`,
                  }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-black text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: FINAL CTA ============ */}
      <section
        id="final-cta"
        data-section="final-cta"
        className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />

        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6b00] rounded-full opacity-10 blur-3xl" />

        <div className="container relative z-10 text-center space-y-12 max-w-3xl">
          <div
            className={`transition-all duration-1000 ${
              visibleSections.has('final-cta')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8">
              Seu Look Perfeito{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ffd700]">
                Está Aqui
              </span>
            </h2>

            <p className="text-lg md:text-2xl text-gray-300 mb-12">
              Não pense mais. Não escolha mais. Deixe a gente fazer.
            </p>

            {/* Final CTA Button */}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <button className="px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] rounded-lg font-black text-base sm:text-xl md:text-2xl text-[#0a0a0a] shadow-2xl hover:shadow-[0_0_60px_#ff6b00] transition-all duration-300 border-2 border-[#ffd700] overflow-hidden hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <MessageCircle size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  <span className="text-sm sm:text-base md:text-lg">ATIVAR ENTREGA AGORA</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#ff6b00] opacity-0 hover:opacity-30 transition-opacity duration-300" />
              </button>
            </a>

            <p className="text-sm text-gray-400 pt-6">
              ⚡ Responderemos em menos de 5 minutos • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-[#ff6b00]/20 bg-[#0a0a0a]">
        <div className="container text-center text-gray-500 text-sm">
          <p>© 2026 Fluxo Outlet. Entrega em Uberaba.</p>
          <p className="mt-2">WhatsApp: 5534984148067</p>
        </div>
      </footer>
    </div>
  );
}
