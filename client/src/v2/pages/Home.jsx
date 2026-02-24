import { Link } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";

/**
 * Home — v2 Landing page for Versa Carousel Generator.
 */
const Home = () => {
  // Animate hero on mount
  useEffect(() => {
    gsap.from(".hero-content > *", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
    });
    gsap.from(".feature-card", {
      y: 60,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="v2-home min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-16 border-b border-gray-800/50">
        <a href="/" className="flex items-baseline gap-0.5">
          <span className="text-versa-one font-bold text-2xl">V</span>
          <span className="font-semibold text-lg">ersa</span>
        </a>
        <div className="flex items-center gap-4">
          <Link
            to="/v1"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            v1 Editor
          </Link>
          <Link
            to="/create"
            className="bg-versa-one text-black font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Create Carousel
          </Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="hero flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="hero-content max-w-3xl">
          <div className="inline-block bg-versa-one/10 text-versa-one text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            Free &middot; No Sign-Up &middot; No Backend
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            LinkedIn PDF Carousel
            <br />
            <span className="text-versa-one">Generator</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Write your content in Markdown, pick a theme and font,
            and download a polished PDF carousel — all in your browser.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/create"
              className="bg-versa-one text-black font-bold text-base px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-versa-one/20"
            >
              Start Creating &rarr;
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white border border-gray-700 px-6 py-3 rounded-xl text-sm transition-colors"
            >
              <i className="fa-brands fa-github" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="features px-6 pb-24 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="fa-solid fa-wand-magic-sparkles"
            title="Auto-Pagination"
            desc="Content flows naturally into slides. No overlap, no abrupt cuts — just clean pages."
          />
          <FeatureCard
            icon="fa-solid fa-font"
            title="1600+ Fonts"
            desc="Choose from the entire Google Fonts library. Preview fonts before applying."
          />
          <FeatureCard
            icon="fa-solid fa-palette"
            title="Beautiful Themes"
            desc="8 handcrafted themes designed for LinkedIn carousels. More coming soon."
          />
          <FeatureCard
            icon="fa-solid fa-file-pdf"
            title="PDF Export"
            desc="Download your carousel as a print-ready PDF. Upload directly to LinkedIn."
          />
          <FeatureCard
            icon="fa-solid fa-code"
            title="Markdown Powered"
            desc="Write in Markdown with full support for lists, tables, code blocks, and more."
          />
          <FeatureCard
            icon="fa-solid fa-shield-halved"
            title="100% Private"
            desc="Everything runs in your browser. Your content never leaves your device."
          />
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="how-it-works px-6 pb-24 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            How It <span className="text-versa-one">Works</span>
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-center gap-8">
            <Step num="1" title="Write" desc="Type or paste your Markdown content. Use --- to create slide breaks." />
            <Step num="2" title="Style" desc="Pick a theme, choose a font. Preview your carousel in real-time." />
            <Step num="3" title="Export" desc="Download as PDF and post directly to LinkedIn. Done!" />
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="cta px-6 pb-20 text-center">
        <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">Ready to Create?</h2>
          <p className="text-gray-400 mb-6">
            No sign-up required. Start building your carousel now.
          </p>
          <Link
            to="/create"
            className="inline-block bg-versa-one text-black font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Open Editor &rarr;
          </Link>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-gray-800 py-6 px-6 text-center">
        <p className="text-gray-500 text-sm">
          Built with <span className="text-versa-one">&hearts;</span> by{" "}
          <span className="font-semibold text-white">Versa</span> &middot;{" "}
          <Link to="/v1" className="text-gray-400 hover:text-white transition-colors">
            v1 Editor
          </Link>
        </p>
      </footer>
    </div>
  );
};

/* ── Sub-components ────────────────────────────────────────── */

const FeatureCard = ({ icon, title, desc }) => (
  <div className="feature-card bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors">
    <i className={`${icon} text-versa-one text-xl mb-4 block`} />
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Step = ({ num, title, desc }) => (
  <div className="flex flex-col items-center text-center max-w-[200px]">
    <div className="w-12 h-12 rounded-full bg-versa-one text-black font-bold text-lg grid place-items-center mb-3">
      {num}
    </div>
    <h4 className="font-bold text-lg mb-1">{title}</h4>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default Home;
