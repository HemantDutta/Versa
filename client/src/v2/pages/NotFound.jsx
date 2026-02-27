import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import V2Navbar from "../components/V2Navbar";

const NotFound = () => (
  <div className="min-h-screen bg-[#0d0d0d] text-white font-[Jost] flex flex-col">
    <SEO title="404 — Page Not Found" description="This page doesn't exist." path="/404" />

    <V2Navbar />

    {/* Content */}
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[clamp(8rem,20vw,16rem)] font-black leading-none tracking-tighter text-white/[0.04] select-none">
        404
      </span>
      <h1 className="text-4xl md:text-5xl font-black tracking-tight -mt-10 mb-4">
        Page <span className="text-versa-one italic">Not Found</span>
      </h1>
      <p className="text-neutral-400 text-base max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="bg-versa-one text-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
        >
          Go Home
        </Link>
        <Link
          to="/create"
          className="border-2 border-white/10 hover:border-white/30 text-white font-semibold text-sm uppercase tracking-widest px-6 py-3.5 transition-colors"
        >
          Open Editor
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
