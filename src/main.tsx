import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Brands from "./pages/brands/index";
import Layout from "./components/themes/layout";
import ShareACoke from "./pages/shareACoke/share-a-coke";
import CokeStudio from "./pages/Coke Studio";

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="brands" element={<Brands />} />
        <Route path="share-a-coke" element={<ShareACoke />} />
        <Route path="coke-studio" element={<CokeStudio />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
