import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import AlertHome from "../AlertHome";
import HeaderFantaOrSprite from "../HeaderFantaOrSprite";
import FloatBar from "@/pages/sprite/FloatBar";

import BrSpriteLogo from "../../assets/Sprite/BrSpriteLogo.webp";

const LayoutSprite = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <AlertHome />
      <HeaderFantaOrSprite urlImage={BrSpriteLogo} alt="Logomarca da Sprite" />
      <main className=" relative flex flex-col items-center gap-10 pt-12">
        <FloatBar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSprite;
