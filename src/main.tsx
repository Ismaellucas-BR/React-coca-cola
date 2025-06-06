import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Brands from "./pages/brands/index";
import Layout from "./components/themes/layout";
import ShareACoke from "./pages/shareACoke/share-a-coke";
import CokeStudio from "./pages/Coke Studio";
import Promos from "./pages/Coke Studio/promos/Promos";
import Lollapalooza from "./pages/Coke Studio/lollapalooza/Lollapalooza";
import Experiences from "./pages/Coke Studio/experiences";
import Team from "./pages/Coke Studio/team";
import ScrollToTop from "./components/ScrollToTop";

const root: HTMLElement | null = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="brands" element={<Brands />} />
        <Route path="share-a-coke" element={<ShareACoke />} />
        <Route path="coke-studio" element={<CokeStudio />} />
        <Route path="coke-studio/promos" element={<Promos />} />
        <Route
          path="coke-studio/lollapalooza-2025"
          element={<Lollapalooza />}
        />
        <Route path="coke-studio/experiences" element={<Experiences />} />
        <Route path="coke-studio/team" element={<Team />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
