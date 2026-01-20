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

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./translation/LanguageSwitcher";
import { useState } from "react";
export default function MenuMobile() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger onClick={() => setOpen(true)}>
        <List size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t("Coke")}</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col justify-start items-start text-left w-full py-5 ">
              <h2 className="title-section text-black! text-xl!">
                {t("UsefulLinks")}
              </h2>
              <ul className="flex flex-col gap-3 mt-3">
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="brands"
                    onClick={() => setOpen(false)}>
                    {t("Brands")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="share-a-coke"
                    onClick={() => setOpen(false)}>
                    {t("ShareACocaCola")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="coke-studio"
                    onClick={() => setOpen(false)}>
                    Coke Studio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="instituto-coca-cola-brasil"
                    onClick={() => setOpen(false)}>
                    {t("Institute")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="sustainability"
                    onClick={() => setOpen(false)}>
                    {t("Sustainability")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="/sobre-nos/nos-conheca"
                    onClick={() => setOpen(false)}>
                    {t("GetTonowUs")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="/sobre-nos/proposito-e-visao"
                    onClick={() => setOpen(false)}>
                    {t("PurposeAndVision")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black font-Noto text-sm"
                    to="brands/sprite"
                    onClick={() => setOpen(false)}>
                    Sprite
                  </Link>
                </li>
                <li className="mt-3">
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Link
                className="border-2 border-black rounded-full p-2 hover:translatssse-1.5 transition-all"
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
