import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Editor } from "./pages/Editor";
import { MainLayout } from "./layouts/MainLayout";

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<MainLayout><Home /></MainLayout>} />
            <Route path={"/editor"} element={<Editor />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

export default App;
