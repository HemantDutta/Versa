import { Link } from "react-router-dom";
import { memo } from "react";

/**
 * V2Navbar — Shared branded navigation bar for inner v2 pages
 * (About, Blog, BlogPost, NotFound, etc.).
 *
 * The Home page has its own nav with anchor links and GitHub button,
 * so it does NOT use this component.
 *
 * @param {{ activePage?: "home" | "about" | "blog" }} props
 */
const V2Navbar = ({ activePage }) => {
  const linkClass = (page) =>
    `transition-colors ${activePage === page ? "text-white" : "hover:text-white"}`;

  return (
    <nav className="flex items-center justify-between px-6 py-5 md:px-16 border-b-2 border-white/10">
      <Link to="/" className="flex items-baseline gap-0" aria-label="Versa home">
        <span className="text-versa-one font-black text-3xl leading-none tracking-tighter">V</span>
        <span className="font-bold text-xl leading-none tracking-tight">ersa</span>
      </Link>
      <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-500">
        <Link to="/" className={linkClass("home")}>Home</Link>
        <Link to="/about" className={linkClass("about")}>About</Link>
        <Link to="/blog" className={linkClass("blog")}>Blog</Link>
        <Link
          to="/create"
          className="bg-versa-one text-black font-black px-5 py-2.5 hover:bg-white transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </nav>
  );
};

export default memo(V2Navbar);
