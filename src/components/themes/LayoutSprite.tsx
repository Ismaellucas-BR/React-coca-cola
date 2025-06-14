import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import AlertHome from "../AlertHome";
import HeaderFantaOrSprite from "../HeaderFantaOrSprite";

const LayoutSprite = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <AlertHome />
      <HeaderFantaOrSprite
        urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/br_sprite_logo.png"
        alt="Logomarca da Sprite"
      />
      <main className="flex flex-col items-center gap-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutSprite;
