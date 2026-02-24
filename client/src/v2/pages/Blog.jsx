import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import BLOG_POSTS from "../data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-[#0d0d0d] text-white font-[Jost]">
    <SEO
      title="Blog"
      description="Guides, templates, and tips on LinkedIn carousels, Markdown workflows, and PDF export. Learn how to get more from Versa."
      path="/blog"
    />

    {/* ── Navbar ─────────────────────────────────── */}
    <nav className="flex items-center justify-between px-6 py-5 md:px-16 border-b-2 border-white/10">
      <Link to="/" className="flex items-baseline gap-0">
        <span className="text-versa-one font-black text-3xl leading-none tracking-tighter">V</span>
        <span className="font-bold text-xl leading-none tracking-tight">ersa</span>
      </Link>
      <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/blog" className="text-white transition-colors">Blog</Link>
        <Link
          to="/create"
          className="bg-versa-one text-black font-black px-5 py-2.5 hover:bg-white transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </nav>

    {/* ── Header ─────────────────────────────────── */}
    <header className="px-6 pt-24 pb-12 md:px-16 md:pt-36 md:pb-16 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-4">
        <span className="text-versa-one italic">Blog</span>
      </h1>
      <p className="text-neutral-300 text-base md:text-lg max-w-xl">
        Guides, templates, and tips on turning Markdown into polished PDF
        carousels — and getting more reach on LinkedIn.
      </p>
    </header>

    {/* ── Post Grid ──────────────────────────────── */}
    <main className="px-6 pb-24 md:px-16 md:pb-36 max-w-4xl">
      <div className="grid gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block border-2 border-white/10 hover:border-versa-one/60 transition-colors p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3 text-[11px] uppercase tracking-[0.25em] font-bold">
              <span className="text-versa-one">{post.category}</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-600">{post.readTime}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight leading-snug group-hover:text-versa-one transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-neutral-300 text-sm md:text-base line-clamp-2">
              {post.metaDesc}
            </p>
          </Link>
        ))}
      </div>

    </main>
  </div>
);

export default Blog;
