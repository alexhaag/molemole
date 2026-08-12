import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  X,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5551997762599?text=Ol%C3%A1%2C%20Molemole!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';
const INSTAGRAM_URL = 'https://instagram.com/molemole.ab';

const printServices = [
  { name: 'Wind Banner', note: 'presença que se movimenta', image: '/mole17_1786544121256.png' },
  { name: 'Banner & Faixa', note: 'ideia grande, impressão à altura', image: '/mole15_1786544121256.png' },
  { name: 'Adesivos à prova d’água', note: 'cor que fica', image: '/mole09_1786544121257.png' },
  { name: 'Perfurite', note: 'qualquer medida, qualquer janela', image: '/mole07_1786544121258.png' },
  { name: 'Lonas', note: 'resistência para qualquer formato', image: '/mole02_1786544121260.png' },
];

const apparelServices = [
  'Camisetas',
  'Camisas Pólos',
  'Canecas',
  'Almofadas',
  'Moletons',
  'Agasalhos',
  'Calça',
  'Corsário',
  'Bermudas',
  'Shorts',
];

const portfolioPhotos = [
  { image: '/mole01_1786544121261.png', label: 'Adesivação de portas', alt: 'Portas de vidro adesivadas para o Sindicato Rural de General Câmara' },
  { image: '/mole02_1786544121260.png', label: 'Fachada e vitrine', alt: 'Fachada de barbearia com comunicação visual personalizada' },
  { image: '/mole03_1786544121260.png', label: 'Confecção personalizada', alt: 'Araras com moletons e agasalhos personalizados' },
  { image: '/mole04_1786544121260.png', label: 'Adesivo de vitrine', alt: 'Adesivo personalizado aplicado em porta de vidro' },
  { image: '/mole05_1786544121259.png', label: 'Comunicação para loja', alt: 'Faixa azul aplicada em portas de vidro de uma loja' },
  { image: '/mole06_1786544121259.png', label: 'Wind Banner', alt: 'Wind banner Bel Modas em frente à loja' },
  { image: '/mole07_1786544121258.png', label: 'Perfurite automotivo', alt: 'Perfurite aplicado no vidro traseiro de um carro' },
  { image: '/mole08_1786544121258.png', label: 'Camiseta personalizada', alt: 'Camiseta personalizada com estampa da Eletro Solar' },
  { image: '/mole09_1786544121257.png', label: 'Adesivos personalizados', alt: 'Cartela de adesivos personalizados para pet shop' },
  { image: '/mole10_1786544121257.png', label: 'Etiqueta personalizada', alt: 'Etiqueta personalizada aplicada em uma sobremesa' },
  { image: '/mole11_1786544121257.png', label: 'Canecas personalizadas', alt: 'Coleção de canecas personalizadas coloridas' },
  { image: '/mole13_1786544121256.png', label: 'Lona para veículo', alt: 'Lona publicitária aplicada na traseira de uma caminhonete' },
  { image: '/mole14_1786544121256.png', label: 'Agenda personalizada', alt: 'Agenda personalizada com acabamento espiral' },
  { image: '/mole15_1786544121256.png', label: 'Faixa para comércio', alt: 'Faixa de comunicação visual aplicada em fachada' },
  { image: '/mole16_1786544121256.png', label: 'Wind Banner para hortifruti', alt: 'Wind banner azul em frente a uma loja de frutas e verduras' },
  { image: '/mole17_1786544121256.png', label: 'Wind Banner para empresa', alt: 'Wind banner amarelo instalado em frente a uma empresa' },
];

const faqs = [
  {
    question: 'Vocês fazem peças em qualquer medida?',
    answer:
      'Sim. Trabalhamos com Perfurite e Lonas em qualquer medida, além de adaptar a produção ao espaço e à quantidade que você precisa.',
  },
  {
    question: 'Posso pedir um orçamento pelo WhatsApp?',
    answer:
      'Pode, e é o jeito mais rápido. Envie sua ideia, quantidade e, se tiver, uma referência visual. A gente retorna com as possibilidades e o preço.',
  },
  {
    question: 'A Molemole atende empresas?',
    answer:
      'Atendemos empresas, eventos, equipes e quem quer presentear com algo que tenha identidade. Criamos desde uma peça até pedidos maiores.',
  },
];

function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`flex items-center gap-2 ${dark ? 'text-[#f7f0df]' : 'text-[#164b47]'}`}
      data-testid="link-brand-home"
      aria-label="Molemole, voltar ao início"
    >
      <img
        src="/molemole-logo.png"
        alt="Molemole"
        className={`h-11 w-[132px] rounded-md object-cover ${dark ? 'ring-1 ring-[#f7f0df]/10' : 'shadow-sm'}`}
      />
    </a>
  );
}

function SectionKicker({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`font-mono-custom text-[11px] uppercase tracking-[.22em] ${light ? 'text-[#f4cc48]' : 'text-[#f16b4f]'}`}>
      {children}
    </p>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="grain min-h-[100dvh] overflow-hidden bg-[#f5f0e2] text-[#164b47]">
      <header className="absolute left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <BrandMark />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            <a className="nav-link text-sm font-bold" href="#servicos" data-testid="link-nav-services">O que fazemos</a>
            <a className="nav-link text-sm font-bold" href="#trabalhos" data-testid="link-nav-work">Trabalhos</a>
            <a className="nav-link text-sm font-bold" href="#sobre" data-testid="link-nav-about">A Molemole</a>
            <a className="nav-link text-sm font-bold" href="#contato" data-testid="link-nav-contact">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#164b47] px-5 py-3 text-xs font-extrabold text-[#f7f0df] transition-transform hover:-translate-y-0.5 md:block"
            data-testid="link-header-whatsapp"
          >
            Fale com a gente <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5" />
          </a>
          <button
            className="rounded-full bg-[#164b47] p-3 text-[#f7f0df] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-5 rounded-2xl border border-[#164b47]/10 bg-[#f7f0df] p-4 shadow-lg md:hidden" aria-label="Menu mobile">
            {[
              ['#servicos', 'O que fazemos'],
              ['#trabalhos', 'Trabalhos'],
              ['#sobre', 'A Molemole'],
              ['#contato', 'Contato'],
            ].map(([href, label]) => (
              <a key={href} href={href} onClick={closeMenu} className="block border-b border-[#164b47]/10 px-2 py-3 font-bold last:border-0" data-testid={`link-mobile-${label.toLowerCase().replaceAll(' ', '-')}`}>
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-[#f5f0e2] px-5 pb-20 pt-36 sm:px-8 lg:min-h-[800px] lg:px-10 lg:pt-48">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
            <div className="relative z-10 max-w-[640px]">
              <div className="reveal mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#f16b4f]" />
                <SectionKicker>Desde 2012 · General Câmara — RS</SectionKicker>
              </div>
              <h1 className="reveal reveal-delay-1 font-display text-[clamp(3.7rem,9vw,7.8rem)] font-extrabold leading-[.88] tracking-[-.09em] text-[#164b47]">
                Ideias que
                <br />
                <span className="outline-text">ganham</span>
                <br />
                forma.
              </h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-[475px] text-lg leading-relaxed text-[#426560]">
                Impressão e confecção personalizada para sua empresa, seu evento e tudo que merece sair do papel — com qualidade Molemole.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full bg-[#f16b4f] px-6 py-4 font-extrabold text-[#f7f0df] shadow-[5px_5px_0_#164b47] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#164b47]" data-testid="link-hero-whatsapp">
                  Solicite um orçamento <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href="#trabalhos" className="font-mono-custom text-xs font-medium uppercase tracking-[.12em] text-[#164b47] underline decoration-[#f16b4f] decoration-2 underline-offset-4" data-testid="link-hero-work">
                  Ver nossos trabalhos
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-[390px] w-full max-w-[570px] sm:h-[500px]">
              <div className="absolute right-2 top-4 h-[83%] w-[79%] rotate-[5deg] rounded-[2.4rem] bg-[#f16b4f] sm:right-6" />
              <div className="absolute left-1 top-12 h-[82%] w-[78%] -rotate-[8deg] rounded-[2.4rem] border-[3px] border-[#164b47] bg-[#f4cc48] sm:left-6" />
              <div className="float-slow absolute inset-x-7 top-0 h-[84%] overflow-hidden rounded-[2.4rem] border-[3px] border-[#164b47] bg-[#164b47] shadow-[10px_12px_0_rgba(22,75,71,.2)] sm:inset-x-12">
                <img src="/mole17_1786544121256.png" alt="Wind banner amarelo produzido pela Molemole" className="h-full w-full object-cover opacity-85 mix-blend-screen" />
                <div className="absolute inset-0 bg-[#164b47]/35 mix-blend-multiply" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#f4cc48]">feito aqui</p>
                  <p className="mt-1 font-display text-3xl font-bold leading-none text-[#f7f0df]">com cor,<br />cuidado e coragem.</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-2 flex rotate-[-6deg] items-center gap-2 rounded-xl bg-[#f7f0df] px-4 py-3 text-xs font-extrabold shadow-md sm:right-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f16b4f]" /> qualidade que aparece
              </div>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full border-[35px] border-[#f16b4f]/15" />
          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono-custom text-[10px] uppercase tracking-[.2em] text-[#426560] lg:flex">
            <span>desça para explorar</span><ChevronDown className="h-4 w-4 animate-bounce" />
          </div>
        </section>

        <section className="bg-[#164b47] px-5 py-4 text-[#f7f0df] sm:px-8">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-8 gap-y-3 py-2">
            <p className="font-display text-lg font-bold tracking-[-.03em]">Do seu jeito. No seu tamanho.</p>
            <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#c8d7c9]">
              <span>impressão digital</span><span>confecção</span><span>personalização</span><span>entrega local</span>
            </div>
          </div>
        </section>

        <section id="servicos" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <SectionKicker>01 · O que fazemos</SectionKicker>
                <h2 className="mt-5 max-w-[410px] font-display text-5xl font-bold leading-[.95] tracking-[-.07em] sm:text-6xl">A sua ideia, em <span className="text-[#f16b4f]">qualquer superfície.</span></h2>
                <p className="mt-6 max-w-[360px] leading-relaxed text-[#426560]">A gente combina técnica, acabamento e olhar atento para transformar uma necessidade em uma peça que dá gosto de ver.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-mono-custom text-xs uppercase tracking-[.14em] text-[#164b47] underline decoration-[#f16b4f] decoration-2 underline-offset-4" data-testid="link-services-whatsapp">conte seu projeto <ArrowUpRight size={15} /></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {printServices.map((service, index) => (
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" key={service.name} className={`photo-card group relative overflow-hidden rounded-2xl border border-[#164b47]/10 bg-[#e9dfc9] ${index === 0 ? 'sm:row-span-2' : ''}`} data-testid={`card-print-service-${index}`}>
                    <div className={`${index === 0 ? 'aspect-[.9]' : 'aspect-[1.3]'} relative`}>
                      <img src={service.image} alt={`${service.name} produzido pela Molemole`} className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#164b47]/85 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-[#f7f0df]">
                        <div className="flex items-end justify-between gap-3">
                          <div><h3 className="font-display text-2xl font-bold tracking-[-.05em]">{service.name}</h3><p className="mt-1 text-xs text-[#d7e1cf]">{service.note}</p></div>
                          <span className="rounded-full bg-[#f4cc48] p-2 text-[#164b47] transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="trabalhos" className="bg-[#e7ddca] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><SectionKicker>02 · Dá uma olhada</SectionKicker><h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-[-.08em] sm:text-7xl">Peças que<br /><span className="text-[#f16b4f]">falam.</span></h2></div>
              <p className="max-w-[300px] text-sm leading-relaxed text-[#426560]">Do primeiro rabisco ao acabamento final, cada detalhe tem uma razão para estar aqui.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-[1.3fr_.7fr_.95fr] md:grid-rows-[260px_220px]">
              <div className="photo-card group relative overflow-hidden rounded-3xl md:row-span-2">
                <img src="/mole03_1786544121260.png" alt="Moletons e agasalhos personalizados" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164b47]/80 to-transparent" />
                <p className="absolute bottom-5 left-6 font-display text-3xl font-bold text-[#f7f0df]">vestir a<br />sua marca.</p>
              </div>
              <div className="photo-card group relative overflow-hidden rounded-3xl">
                <img src="/mole09_1786544121257.png" alt="Adesivos personalizados à prova d’água" className="h-full w-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-[#f4cc48] p-4"><p className="font-mono-custom text-[10px] uppercase tracking-[.14em]">adesivos</p><p className="mt-1 font-bold">cor que fica.</p></div>
              </div>
              <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f16b4f] p-6 text-[#f7f0df]">
                <ArrowUpRight className="ml-auto h-8 w-8" />
                <div><p className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#f9d9cd]">para sua empresa</p><p className="mt-2 font-display text-3xl font-bold leading-none">presença que<br />não passa batida.</p></div>
              </div>
              <div className="photo-card relative overflow-hidden rounded-3xl bg-[#164b47] md:col-span-2">
                <img src="/mole11_1786544121257.png" alt="Canecas personalizadas" className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-[#164b47]/35" />
                <p className="absolute bottom-5 left-6 font-display text-2xl font-bold text-[#f7f0df]">um presente com nome e sobrenome.</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {portfolioPhotos.map((photo) => (
                <figure key={photo.image} className="group relative overflow-hidden rounded-2xl bg-[#164b47]">
                  <img src={photo.image} alt={photo.alt} loading="lazy" className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#164b47]/90 to-transparent px-4 pb-3 pt-10 font-mono-custom text-[9px] uppercase tracking-[.14em] text-[#f7f0df]">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-[#f16b4f] px-5 py-24 text-[#f7f0df] sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionKicker light>03 · A gente é daqui</SectionKicker>
              <h2 className="mt-5 max-w-[570px] font-display text-5xl font-bold leading-[.92] tracking-[-.08em] sm:text-7xl">Pequena no tamanho.<br /><span className="text-[#f4cc48]">Gigante no cuidado.</span></h2>
            </div>
            <div className="max-w-[470px]">
              <p className="text-xl leading-relaxed">Desde 2012, a Molemole trabalha para que cada impressão e cada produto personalizado tenha a cara de quem pediu.</p>
              <p className="mt-6 text-base leading-relaxed text-[#f9d9cd]">Somos um estúdio de General Câmara — RS. Conhecemos o valor de uma entrega feita no capricho, de uma conversa olho no olho e de ver a ideia pronta nas mãos.</p>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#f7f0df]/25 pt-6 sm:grid-cols-3">
                <div><p className="font-display text-4xl font-bold">12+</p><p className="mt-1 text-xs text-[#f9d9cd]">anos criando</p></div>
                <div><p className="font-display text-4xl font-bold">RS</p><p className="mt-1 text-xs text-[#f9d9cd]">feito por aqui</p></div>
                <div><p className="font-display text-4xl font-bold">1:1</p><p className="mt-1 text-xs text-[#f9d9cd]">atendimento próximo</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#164b47] px-5 py-24 text-[#f7f0df] sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[1240px]">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div><SectionKicker light>04 · Para vestir a ideia</SectionKicker><h2 className="mt-5 font-display text-5xl font-bold leading-[.94] tracking-[-.07em] sm:text-6xl">Sua marca,<br /><span className="text-[#f4cc48]">do seu jeito.</span></h2><p className="mt-6 max-w-[340px] leading-relaxed text-[#c8d7c9]">Confecção personalizada para sua empresa, sua equipe ou aquele projeto que merece virar produto.</p></div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-0 border-t border-[#f7f0df]/25">
                {apparelServices.map((item, index) => <div key={item} className="flex items-center justify-between border-b border-[#f7f0df]/15 py-4 text-sm"><span className="text-[#d7e1cf]"><span className="mr-3 font-mono-custom text-[10px] text-[#f16b4f]">0{index + 1}</span>{item}</span><Check className="h-4 w-4 text-[#f4cc48]" /></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-[900px]">
            <div className="text-center"><SectionKicker>05 · Perguntas frequentes</SectionKicker><h2 className="mt-4 font-display text-5xl font-bold leading-none tracking-[-.08em] sm:text-6xl">Vamos deixar fácil.</h2></div>
            <div className="mt-12 divide-y divide-[#164b47]/15 border-y border-[#164b47]/15">
              {faqs.map((faq, index) => <div key={faq.question}><button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left font-display text-xl font-bold tracking-[-.04em]" aria-expanded={activeFaq === index} data-testid={`button-faq-${index}`}><span>{faq.question}</span>{activeFaq === index ? <Minus className="shrink-0 text-[#f16b4f]" /> : <Plus className="shrink-0 text-[#f16b4f]" />}</button>{activeFaq === index && <p className="max-w-[690px] pb-6 pr-10 leading-relaxed text-[#426560]">{faq.answer}</p>}</div>)}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-[#f4cc48] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="relative z-10 mx-auto max-w-[1240px]">
            <div className="max-w-[820px]"><SectionKicker>06 · Bora fazer?</SectionKicker><h2 className="mt-5 font-display text-[clamp(3.4rem,8vw,7rem)] font-extrabold leading-[.88] tracking-[-.1em] text-[#164b47]">Solicite um orçamento e encontre <span className="text-[#f16b4f]">preço de qualidade.</span></h2><p className="mt-8 max-w-[520px] text-lg leading-relaxed text-[#426560]">Mande uma mensagem com a sua ideia. A gente conversa, entende e encontra o melhor jeito de tirar do papel.</p><div className="mt-9 flex flex-col gap-4 sm:flex-row"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#164b47] px-7 py-4 font-extrabold text-[#f7f0df] transition-transform hover:-translate-y-1" data-testid="link-contact-whatsapp"><MessageCircle size={18} /> Chamar no WhatsApp</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#164b47] px-7 py-4 font-extrabold text-[#164b47] transition-colors hover:bg-[#164b47] hover:text-[#f7f0df]" data-testid="link-contact-instagram"><Instagram size={18} /> @molemole.ab</a></div></div>
          </div>
          <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full border-[55px] border-[#f16b4f]/25" />
          <div className="absolute right-[14%] top-14 hidden rotate-12 font-display text-[130px] font-bold leading-none text-[#164b47]/[.07] lg:block">mo</div>
        </section>
      </main>

      <footer className="bg-[#164b47] px-5 py-10 text-[#f7f0df] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><BrandMark dark /><p className="mt-5 max-w-[280px] text-sm leading-relaxed text-[#c8d7c9]">Qualidade em impressão e produtos personalizados, feitos em General Câmara — RS.</p></div>
          <div className="flex flex-col gap-3 text-sm text-[#c8d7c9] md:items-end"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-[#f4cc48]" data-testid="link-footer-whatsapp">(51) 9 9776-2599</a><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[#f4cc48]" data-testid="link-footer-instagram">@molemole.ab</a><p className="mt-3 font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#829f96]">© Molemole · desde 2012</p></div>
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp" className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-[#f16b4f] px-4 py-3 text-sm font-extrabold text-[#f7f0df] shadow-[4px_4px_0_#164b47] transition-transform hover:-translate-y-1 sm:bottom-7 sm:right-7" data-testid="link-floating-whatsapp"><MessageCircle size={19} /> <span className="hidden sm:inline">Orçamento</span></a>
      {showTop && <a href="#inicio" className="fixed bottom-5 left-5 z-30 rounded-full border border-[#164b47]/20 bg-[#f7f0df] p-3 text-[#164b47] shadow-md sm:bottom-7 sm:left-7" aria-label="Voltar ao início" data-testid="link-back-to-top"><ArrowUpRight className="h-4 w-4 -rotate-45" /></a>}
    </div>
  );
}

export default App;