import MenuMobile from "./MenuMobile";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-white">
      <Link to="/">
        <img
          src="https://www.coca-cola.com/content/dam/onexp/global/icons/Coke-company-logo-black.svg"
          alt="logo escrito: the coca-cola company"
        />
      </Link>

      <MenuMobile />
    </header>
  );
}
