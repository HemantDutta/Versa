import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SEO from "../components/SEO";

/* ── Grain overlay (inlined SVG noise) ─────────────────────── */
const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`;

const GITHUB_URL = "https://github.com/HemantDutta/Versa";

/* ── Marquee keywords ──────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Markdown",
  "PDF",
  "LinkedIn",
  "Carousel",
  "1 600+ Fonts",
  "35 Themes",
  "Auto-Pagination",
  "100% Private",
  "No Sign-Up",
  "Open Source",
];

/**
 * Home — v2 Landing page for Versa Carousel Generator.
 * Awwwards-inspired brutalist: grain, two-colour, oversized type, personality.
 */
const Home = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // hero stagger
      gsap.from("[data-hero]", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
      // features fade-up
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.6,
        ease: "power2.out",
      });
      // stats counter
      gsap.from("[data-stat]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="v2-home relative min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden font-[Jost]">
      <SEO
        title="Free LinkedIn Carousel Generator"
        description="Convert Markdown into polished PDF carousels for LinkedIn. 35 themes, 1 600+ Google Fonts, auto-pagination — free, private, open source."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Versa",
          url: "https://versacarousel.vercel.app",
          applicationCategory: "DesignApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Free, open-source tool that converts Markdown into PDF carousels for LinkedIn. 35 themes, 1 600+ fonts, AI prompt helper. Runs entirely in the browser.",
        }}
      />

      {/* ── Grain texture overlay ──────────────────────────── */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-40"
        style={{ backgroundImage: GRAIN_SVG, backgroundRepeat: "repeat" }}
        aria-hidden="true"
      />

      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav
        className="relative z-40 flex items-center justify-between px-6 py-5 md:px-16 border-b-2 border-white/10"
        aria-label="Main navigation"
      >
        <a href="/" className="flex items-baseline gap-0" aria-label="Versa home">
          <span className="text-versa-one font-black text-3xl leading-none tracking-tighter">V</span>
          <span className="font-bold text-xl leading-none tracking-tight">ersa</span>
        </a>

        {/* center links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how" className="hover:text-white transition-colors">Process</a>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-neutral-500 hover:text-white text-[11px] uppercase tracking-widest font-bold transition-colors"
            aria-label="View on GitHub"
          >
            <i className="fa-brands fa-github text-sm" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <Link
            to="/create"
            className="bg-versa-one text-black font-black text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 hover:bg-white transition-colors"
          >
            Open Editor
          </Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="relative z-10 px-6 pt-24 pb-10 md:px-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
          {/* left column */}
          <div>
            <span
              data-hero
              className="inline-block border border-versa-one/40 text-versa-one text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-8"
            >
              Free &middot; Open Source &middot; No Backend
            </span>

            <h1 data-hero className="text-[clamp(3rem,8vw,8rem)] font-black leading-[0.9] tracking-tighter mb-8">
              Markdown
              <br />
              <span className="text-versa-one italic">to Carousel.</span>
            </h1>

            <p data-hero className="text-neutral-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Write your slides in Markdown. Choose from 1 600+ Google Fonts and
              35 handcrafted themes. Export a pixel-perfect PDF carousel for
              LinkedIn&nbsp;&mdash;&nbsp;entirely in your browser. No sign-up,
              no servers, no nonsense.
            </p>

            <div data-hero className="flex flex-wrap items-center gap-4">
              <Link
                to="/create"
                className="group bg-versa-one text-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-2"
              >
                Start Creating
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white border-2 border-white/10 hover:border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-widest transition-colors"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                Star on GitHub
              </a>
            </div>
          </div>

          {/* right column — vertical ticker label */}
          <div data-hero className="hidden lg:flex flex-col items-end text-right select-none">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600 mb-2">
              Version 2.0
            </span>
            <span className="text-[120px] font-black leading-none text-white/[0.03] tracking-tighter">
              V2
            </span>
          </div>
        </div>
      </header>

      {/* ── Marquee Strip ──────────────────────────────────── */}
      <div className="relative z-10 border-y-2 border-white/10 overflow-hidden py-4 select-none" aria-hidden="true">
        <div className="marquee-track flex gap-8 whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="text-xs font-black uppercase tracking-[0.3em] text-neutral-600 flex items-center gap-8">
              {item}
              <span className="text-versa-one text-lg">&bull;</span>
            </span>
          ))}
        </div>
        {/* inline keyframes */}
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── What is Versa — editorial block ────────────────── */}
      <section className="relative z-10 px-6 py-20 md:px-16 md:py-32" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          <h2
            id="about-heading"
            className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500 pt-2"
          >
            // What is Versa
          </h2>
          <div className="max-w-3xl">
            <p className="text-3xl md:text-[2.75rem] font-black leading-[1.15] tracking-tight mb-6">
              A free,{" "}
              <span className="text-versa-one italic">open-source</span> tool
              that turns plain Markdown into stunning LinkedIn PDF carousels.
            </p>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Most carousel generators force you into clunky drag-and-drop editors
              or lock features behind a paywall. Versa is different.
              Write in the language you already know&nbsp;&mdash;&nbsp;Markdown&nbsp;&mdash;&nbsp;and
              Versa handles the rest: auto-pagination, theming, typography,
              and a crisp PDF export. Everything runs locally in your browser.
              Your content never touches a server.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t-2 border-white/10 mx-6 md:mx-16" aria-hidden="true" />

      {/* ── Stats Band ─────────────────────────────────────── */}
      <section className="relative z-10 px-6 py-16 md:px-16 md:py-24" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-2 border-white/10">
          <Stat data-stat value="1 600+" label="Google Fonts" />
          <Stat data-stat value="35" label="Themes" />
          <Stat data-stat value="$0" label="Forever Free" />
          <Stat data-stat value="0" label="Data Sent to Servers" />
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t-2 border-white/10 mx-6 md:mx-16" aria-hidden="true" />

      {/* ── Features ───────────────────────────────────────── */}
      <section id="features" className="relative z-10 px-6 py-20 md:px-16 md:py-32" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          <h2
            id="features-heading"
            className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500 pt-2"
          >
            // Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-2 border-white/10">
            <FeatureCard
              num="01"
              icon="fa-solid fa-wand-magic-sparkles"
              title="Auto-Pagination"
              desc="Write once, let Versa flow your content into perfectly sized slides. No manual splitting, no overflow."
            />
            <FeatureCard
              num="02"
              icon="fa-solid fa-font"
              title="1 600+ Fonts"
              desc="The entire Google Fonts library at your fingertips. Search, preview, and apply with a single click."
            />
            <FeatureCard
              num="03"
              icon="fa-solid fa-palette"
              title="35 Handcrafted Themes"
              desc="From clean white to neon gradients, dark modes to pastels — 35 themes designed specifically for the LinkedIn carousel format."
            />
            <FeatureCard
              num="04"
              icon="fa-solid fa-file-pdf"
              title="PDF Export"
              desc="High-resolution, print-ready PDF output. Every slide is pixel-perfect. Upload straight to LinkedIn."
            />
            <FeatureCard
              num="05"
              icon="fa-solid fa-code"
              title="Full Markdown"
              desc="Headings, lists, tables, code blocks, images, blockquotes, task lists — if Markdown supports it, so do we."
            />
            <FeatureCard
              num="06"
              icon="fa-solid fa-wand-magic-sparkles"
              title="AI Prompt Helper"
              desc="One-click copy a fine-tuned prompt for ChatGPT, Claude, or any LLM. It generates Markdown that's ready to paste straight into Versa."
            />
            <FeatureCard
              num="07"
              icon="fa-solid fa-shield-halved"
              title="100% Private"
              desc="Zero servers. Zero tracking. Your browser does all the work. Content stays on your machine, always."
            />
            <FeatureCard
              num="08"
              icon="fa-solid fa-mobile-screen"
              title="Mobile Friendly"
              desc="Full editor experience on any device. Toggle between edit and preview panels, access all tools from a slide-out menu."
            />
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t-2 border-white/10 mx-6 md:mx-16" aria-hidden="true" />

      {/* ── How It Works ───────────────────────────────────── */}
      <section id="how" className="relative z-10 px-6 py-20 md:px-16 md:py-32" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          <h2
            id="how-heading"
            className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500 pt-2"
          >
            // Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-2 border-white/10">
            <Step num="01" title="Write" desc="Type or paste your content in Markdown. Use --- to create slide breaks. Versa's live preview updates instantly." />
            <Step num="02" title="Style" desc="Browse 35 themes and 1 600+ fonts. Mix and match until it feels right. See every change in real-time." />
            <Step num="03" title="Export" desc="One click. High-res PDF. Upload to LinkedIn and watch the engagement roll in." />
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t-2 border-white/10 mx-6 md:mx-16" aria-hidden="true" />

      {/* ── Why Versa ──────────────────────────────────────── */}
      <section className="relative z-10 px-6 py-20 md:px-16 md:py-32" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
          <h2
            id="why-heading"
            className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500 pt-2"
          >
            // Why Versa
          </h2>

          <div className="max-w-3xl space-y-10">
            <WhyItem
              title="No walled gardens."
              desc="Other tools lock basic features behind subscriptions. Versa is completely free and open source. Fork it, extend it, make it yours."
            />
            <WhyItem
              title="Markdown-first workflow."
              desc="No drag-and-drop. No WYSIWYG bloat. If you can write a README, you can build a carousel. Developers and content creators both feel at home."
            />
            <WhyItem
              title="Privacy by design."
              desc="There's no backend to hack because there is no backend. Everything — parsing, rendering, PDF generation — happens in your browser tab."
            />
            <WhyItem
              title="Stupidly fast."
              desc="No server round-trips. Real-time preview as you type. PDF export takes seconds, not minutes."
            />
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <div className="border-t-2 border-white/10 mx-6 md:mx-16" aria-hidden="true" />

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 py-24 md:px-16 md:py-36 text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter leading-[0.9] mb-6">
          Stop designing.<br />
          <span className="text-versa-one italic">Start writing.</span>
        </h2>
        <p className="text-neutral-300 text-base md:text-lg mb-10 max-w-md mx-auto">
          Your next LinkedIn carousel is a few lines of Markdown away.
        </p>
        <Link
          to="/create"
          className="group inline-flex items-center gap-2 bg-versa-one text-black font-black text-sm uppercase tracking-widest px-10 py-5 hover:bg-white transition-colors"
        >
          Open Editor
          <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="relative z-10 border-t-2 border-white/10 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* brand */}
          <div>
            <a href="/" className="flex items-baseline gap-0 mb-2" aria-label="Versa home">
              <span className="text-versa-one font-black text-2xl leading-none tracking-tighter">V</span>
              <span className="font-bold text-base leading-none tracking-tight">ersa</span>
            </a>
            <p className="text-neutral-400 text-xs max-w-xs">
              Free, open-source LinkedIn carousel generator. Built with Markdown.
            </p>
          </div>

          {/* link columns */}
          <div className="flex gap-16 text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-600">
            <div className="flex flex-col gap-3">
              <span className="text-neutral-500 mb-1">Product</span>
              <Link to="/create" className="hover:text-white transition-colors">Editor</Link>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how" className="hover:text-white transition-colors">Process</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-neutral-500 mb-1">More</span>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-neutral-500 mb-1">Legacy</span>
              <Link to="/v1" className="hover:text-white transition-colors">v1 Editor</Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-700 text-[10px] uppercase tracking-widest font-semibold">
            &copy; {new Date().getFullYear()} Versa. Open source under MIT.
          </p>
          <p className="text-neutral-700 text-[10px] uppercase tracking-widest font-semibold">
            Made by{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              Hemant Dutta
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

/* ── Sub-components ────────────────────────────────────────── */

const FeatureCard = ({ num, icon, title, desc }) => (
  <article className="feature-card bg-[#0d0d0d] p-8 md:p-10 hover:bg-[#141414] transition-colors group relative overflow-hidden">
    {/* large background number */}
    <span className="absolute top-3 right-4 text-[5rem] font-black leading-none text-white/[0.03] select-none pointer-events-none">{num}</span>
    <i className={`${icon} text-versa-one text-base mb-6 block`} aria-hidden="true" />
    <h3 className="font-black text-sm uppercase tracking-[0.15em] mb-3 group-hover:text-versa-one transition-colors">
      {title}
    </h3>
    <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
  </article>
);

const Step = ({ num, title, desc }) => (
  <div className="bg-[#0d0d0d] p-8 md:p-10 relative overflow-hidden">
    <span className="text-versa-one font-black text-5xl md:text-6xl block mb-4">{num}</span>
    <h3 className="font-black text-lg uppercase tracking-wide mb-3">{title}</h3>
    <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Stat = ({ value, label, ...rest }) => (
  <div className="bg-[#0d0d0d] py-10 px-8 text-center" {...rest}>
    <span className="block text-4xl md:text-5xl font-black tracking-tight text-versa-one">{value}</span>
    <span className="block mt-2 text-[11px] font-black uppercase tracking-[0.25em] text-neutral-400">{label}</span>
  </div>
);

const WhyItem = ({ title, desc }) => (
  <div className="border-l-2 border-versa-one/40 pl-6">
    <h3 className="font-black text-xl md:text-2xl tracking-tight mb-2">{title}</h3>
    <p className="text-neutral-300 text-sm md:text-base leading-relaxed">{desc}</p>
  </div>
);

export default Home;
