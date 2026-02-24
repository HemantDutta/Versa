import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const GITHUB_URL = "https://github.com/HemantDutta/Versa";

const About = () => (
  <div className="min-h-screen bg-[#0d0d0d] text-white font-[Jost]">
    <SEO
      title="About"
      description="Versa is a free, open-source Markdown-to-PDF carousel generator. No sign-up, no servers — your content never leaves your browser."
      path="/about"
    />

    {/* ── Navbar ─────────────────────────────────── */}
    <nav className="flex items-center justify-between px-6 py-5 md:px-16 border-b-2 border-white/10">
      <Link to="/" className="flex items-baseline gap-0">
        <span className="text-versa-one font-black text-3xl leading-none tracking-tighter">V</span>
        <span className="font-bold text-xl leading-none tracking-tight">ersa</span>
      </Link>
      <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/about" className="text-white transition-colors">About</Link>
        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
        <Link
          to="/create"
          className="bg-versa-one text-black font-black px-5 py-2.5 hover:bg-white transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </nav>

    {/* ── Content ────────────────────────────────── */}
    <main className="px-6 py-24 md:px-16 md:py-36 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
        About <span className="text-versa-one italic">Versa</span>
      </h1>

      <div className="space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
        <p>
          Versa is a free, open-source tool that converts Markdown into
          beautiful PDF carousels designed for LinkedIn. No sign-ups, no
          servers, no paywall — just your browser.
        </p>
        <p>
          It was built out of frustration with existing carousel generators
          that are either overpriced, privacy-invasive, or painful to use.
          Versa takes a different approach: write in the language developers
          and writers already know — Markdown — and let the tool handle
          pagination, theming, and export.
        </p>
        <p>
          The entire app runs client-side. Your content never leaves your
          device. The source code is available on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-versa-one hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <div className="mt-16 border-t-2 border-white/10 pt-10">
        <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-6">
          // Built By
        </h2>
        <p className="text-white font-black text-2xl tracking-tight">
          Hemant Dutta
        </p>
        <div className="flex flex-wrap items-center gap-5 mt-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm transition-colors"
          >
            <i className="fa-brands fa-github mr-2" aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hemantduttahd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm transition-colors"
          >
            <i className="fa-brands fa-linkedin mr-2" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href="https://x.com/hemantduttahd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm transition-colors"
          >
            <i className="fa-brands fa-x-twitter mr-2" aria-hidden="true" />
            X
          </a>
          <a
            href="https://www.instagram.com/hemantduttacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm transition-colors"
          >
            <i className="fa-brands fa-instagram mr-2" aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default About;
