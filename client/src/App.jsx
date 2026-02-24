import { BrowserRouter, Route, Routes } from "react-router-dom";

// v1 (legacy)
import { Home as V1Home } from "./v1/pages/Home";
import { Editor as V1Editor } from "./v1/pages/Editor";
import { MainLayout } from "./v1/layouts/MainLayout";

// v2
import V2Home from "./v2/pages/Home";
import CarouselEditor from "./v2/pages/CarouselEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── v2 routes (default) ─────────────────────── */}
        <Route path="/" element={<V2Home />} />
        <Route path="/create" element={<CarouselEditor />} />

        {/* ── v1 legacy routes ────────────────────────── */}
        <Route path="/v1" element={<MainLayout><V1Home /></MainLayout>} />
        <Route path="/v1/editor" element={<V1Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
