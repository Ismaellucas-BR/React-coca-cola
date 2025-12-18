import { Link } from "react-router";

import CokeLogo from "../../../assets/Brands/CoKeLogo.png";
import SpriteLogo from "../../../assets/Brands/SpriteLogo.webp";
import FantaLogo from "../../../assets/Brands/FantaLogo.webp";

export default function SixthSection() {
  return (
    <section className="flex flex-col justify-center items-center px-5 pb-14 md:gap-3 lg:max-w-[70rem] lg:gap-10">
      <h2 className="title-section">Conheças nossas marcas</h2>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem] bg-white hover:scale-105 transition-all">
          <img src={CokeLogo} alt="Logo Coca-cola" />
        </div>
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem] bg-white hover:scale-105 transition-all">
          <img src={SpriteLogo} alt="Logo Sprite" />
        </div>
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem] bg-white hover:scale-105 transition-all">
          <img src={FantaLogo} alt="Logo Fanta" />
        </div>
      </div>
      <Link to="/brands" className="button-default">
        Veja mais
      </Link>
    </section>
  );
}
