import CokeLogo from "../../assets/Brands/CoKeLogo.png";
import SpriteLogo from "../../assets/Brands/SpriteLogo.webp";
import FantaLogo from "../../assets/Brands/FantaLogo.webp";
import LogoSchweppes from "../../assets/Brands/LogoSchweppes.webp";
import CrystalLogo from "../../assets/Brands/CrystalLogo.webp";
import KuatLogo from "../../assets/Brands/KuatLogo.webp";
import LemonDouLogo from "../../assets/Brands/LemonDouLogo.webp";
import JandCLogo from "../../assets/Brands/JandCLogo.webp";
import DelValleLogo from "../../assets/Brands/DelValleLogo.webp";
import AdesLogo from "../../assets/Brands/AdesLogo.webp";
import SchweppesLogo from "../../assets/Brands/SchweppesLogo.webp";
import LogoPwd from "../../assets/Brands/LogoPwd.webp";

const brands = [
  CokeLogo,
  SpriteLogo,
  FantaLogo,
  LogoSchweppes,
  CrystalLogo,
  KuatLogo,
  LemonDouLogo,
  JandCLogo,
  DelValleLogo,
  AdesLogo,
  SchweppesLogo,
  LogoPwd,
];

export default function BrandsComponent() {
  return (
    <section className="flex flex-col justify-center items-center px-5 pb-14 gap-8 pt-10 md:gap-8 lg:max-w-[70rem] lg:pt-14 lg:pb-20">
      <h1 className="title-section">Explore Nossas Marcas</h1>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {brands.map((brand) => (
          <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] bg-white p-5 md:h-[22rem] md:w-[22rem] shadow-lg rounded-md  lg:w-[14rem] lg:h-[14rem] hover:scale-105 transition-transform">
            <img src={brand} alt="Logo Sprite" />
          </div>
        ))}
      </div>
    </section>
  );
}
