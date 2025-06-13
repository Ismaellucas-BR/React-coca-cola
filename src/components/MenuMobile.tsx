import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GithubLogo, List } from "@phosphor-icons/react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";
export default function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <List size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Coca-cola</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col justify-start items-start text-left w-full py-5 ">
              <h2 className="title-section text-black! text-xl!">
                Links úteis
              </h2>
              <ul>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="/coke-studio">
                    Coke Studio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Link
                className="border-2 border-black rounded-full p-2 hover:translate-1.5 transition-all"
                to="https://github.com/Ismaellucas-BR"
                target="_blank">
                {" "}
                <GithubLogo className="fill-black text-red-500" size={16} />
              </Link>
              <Link
                className="border-2 border-black rounded-full p-2"
                to="https://developerismaellucas.com/"
                target="_blank">
                <SquareArrowOutUpRight className="text-black" size={16} />
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
