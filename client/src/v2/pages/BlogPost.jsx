import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import V2Navbar from "../components/V2Navbar";
import BLOG_POSTS from "../data/blogPosts";

const SITE_URL = "https://versacarousel.vercel.app";

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  /* 404 — redirect to blog index */
  if (!post) return <Navigate to="/blog" replace />;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    author: { "@type": "Person", name: "Hemant Dutta" },
    publisher: {
      "@type": "Organization",
      name: "Versa",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-[Jost]">
      <SEO
        title={post.metaTitle.replace(/ — Versa$/, "")}
        description={post.metaDesc}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />

      <V2Navbar activePage="blog" />

      {/* ── Article ──────────────────────────────── */}
      <article className="px-6 py-16 md:px-16 md:py-24 max-w-3xl">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6 text-[11px] uppercase tracking-[0.25em] font-bold">
          <span className="text-versa-one">{post.category}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-600">{post.date}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-600">{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] mb-12">
          {post.title}
        </h1>

        {/* Sections */}
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="text-xl md:text-2xl font-black tracking-tight mb-4">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, j) => (
                <p
                  key={j}
                  className="text-neutral-300 text-base md:text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 border-t-2 border-white/10 pt-10">
          <Link
            to="/create"
            className="inline-block bg-versa-one text-black font-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-white transition-colors"
          >
            Try Versa Free &rarr;
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
