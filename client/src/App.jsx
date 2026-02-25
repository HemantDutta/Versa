import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Route-based code splitting — each page is loaded on demand
const V2Home = lazy(() => import("./v2/pages/Home"));
const CarouselEditor = lazy(() => import("./v2/pages/CarouselEditor"));
const About = lazy(() => import("./v2/pages/About"));
const Blog = lazy(() => import("./v2/pages/Blog"));
const BlogPost = lazy(() => import("./v2/pages/BlogPost"));

// v1 (legacy) — also lazy-loaded
const V1Home = lazy(() => import("./v1/pages/Home").then((m) => ({ default: m.Home })));
const V1Editor = lazy(() => import("./v1/pages/Editor").then((m) => ({ default: m.Editor })));
const MainLayout = lazy(() => import("./v1/layouts/MainLayout").then((m) => ({ default: m.MainLayout })));

const Fallback = () => (
  <div className="flex items-center justify-center h-screen bg-[#0e0e0e]">
    <div className="text-gray-400 text-sm animate-pulse">Loading…</div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
      <Routes>
        {/* ── v2 routes (default) ─────────────────────── */}
        <Route path="/" element={<V2Home />} />
        <Route path="/create" element={<CarouselEditor />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* ── v1 legacy routes ────────────────────────── */}
        <Route path="/v1" element={<MainLayout><V1Home /></MainLayout>} />
        <Route path="/v1/editor" element={<V1Editor />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
