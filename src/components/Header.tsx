import { ChevronRight } from "lucide-react";
import MenuMobile from "./MenuMobile";
import { Link } from "react-router";

import CokeCompanyLogoBlack from "../assets/CokeCompanyLogoBlack.webp";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white w-full flex justify-center items-center">
      <div className="flex justify-between items-center px-5 w-full xl:max-w-[80rem]">
        <Link to="/">
          <img
            src={CokeCompanyLogoBlack}
            className="h-[20px] w-[125px]"
            alt="logo escrito: the coca-cola company"
          />
        </Link>

        <ul className="hidden lg:flex gap-8 font-Noto text-black relative">
          <li className="flex items-center cursor-pointer font-semibold h-14 border-b-4 border-transparent hover:border-black transition-all duration-200">
            <Link to="/brands">Marcas</Link>
          </li>
          <li className="relative group">
            <div className="flex items-center gap-1 border-b-4 border-transparent group-hover:border-black transition-all duration-200 h-14">
              <span className="font-semibold">
                <span>Descobrir </span>{" "}
              </span>
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </div>
            <ul className="absolute left-0 top-12 mt-2 w-60 bg-white shadow-lg p-4 space-y-2 hidden group-hover:block min-w-max rounded-md z-40">
              <li className="flex items-center gap-3 hover:font-semibold cursor-pointer group/item">
                <Link to="share-a-coke"> Compartilhe uma Coca‑Cola</Link>
                <div className="hidden group-hover/item:block">
                  <ChevronRight size={16} />
                </div>
              </li>
              <li className="flex items-center gap-3 hover:font-semibold cursor-pointer group/item2">
                <Link to="coke-studio"> Coke Studio</Link>
                <div className="hidden group-hover/item2:block">
                  <ChevronRight size={16} />
                </div>
              </li>
              <li className="flex items-center gap-3 hover:font-semibold cursor-pointer group/item3">
                <Link to="instituto-coca-cola-brasil"> Instituto</Link>
                <div className="hidden group-hover/item3:block">
                  <ChevronRight size={16} />
                </div>
              </li>
            </ul>
          </li>
          <li className="flex items-center cursor-pointer font-semibold h-14 border-b-4 border-transparent hover:border-black transition-all duration-200">
            <Link to="sustainability"> Sustentabilidade</Link>
          </li>
          <li className="relative group">
            <div className="flex items-center gap-1 border-b-4 border-transparent group-hover:border-black transition-all duration-200 h-14">
              <span className="font-semibold">Sobre nós</span>
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </div>
            <ul className="absolute left-0 top-12 mt-2 w-60 bg-white shadow-lg p-4 space-y-2 hidden group-hover:block min-w-max rounded-md">
              <li className="flex items-center gap-3 hover:font-semibold cursor-pointer group/item">
                <Link to="/sobre-nos/nos-conheca"> Nos Conheca</Link>
                <div className="hidden group-hover/item:block">
                  <ChevronRight size={16} />
                </div>
              </li>
              <li className="flex items-center gap-3 hover:font-semibold cursor-pointer group/item2">
                <Link to="/sobre-nos/proposito-e-visao">
                  {" "}
                  Propósito e Visão
                </Link>
                <div className="hidden group-hover/item2:block">
                  <ChevronRight size={16} />
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div className="lg:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
