import { GithubLogo } from "@phosphor-icons/react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <section className="flex flex-col justify-center items-center bg-black  w-full py-12 ">
      <div className="xl:max-w-[70rem] w-full max-w-[90%]">
        <div className="flex flex-col items-baseline justify-baseline w-full border-b border-white pb-5 gap-5 md:flex-row md:justify-between">
          <img
            src="https://www.coca-cola.com/content/dam/onexp/global/icons/logo-white-large.svg"
            alt="Logo coca-cola branco"
          />
          <span className="text-white">Brasil</span>
        </div>
        <div className="flex flex-col justify-start items-baseline text-left w-full py-5">
          <h2 className="title-section text-white! text-xl!">Links úteis</h2>
          <ul>
            <li>
              <Link className="text-white font-Noto text-sm" to="/coke-studio">
                Coke Studio
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Link
            className="border-2 border-white rounded-full p-2"
            to="https://github.com/Ismaellucas-BR"
            target="_blank">
            {" "}
            <GithubLogo className="fill-white" size={16} />
          </Link>
          <Link
            className="border-2 border-white rounded-full p-2"
            to="https://developerismaellucas.com/"
            target="_blank">
            <SquareArrowOutUpRight className="text-white" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
