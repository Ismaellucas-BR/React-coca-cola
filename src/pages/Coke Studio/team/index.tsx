import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";

import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import HeroCokeStudio2024FriendsWithSunGlassesAndColaDesktop from "../../../assets/ShareACoke/team/HeroCokeStudio2024FriendsWithSunGlassesAndColaDesktop.webp";
import HeroCokeStudio2024FriendsWithSunGlassesAndColaMobile from "../../../assets/ShareACoke/team/HeroCokeStudio2024FriendsWithSunGlassesAndColaMobile.webp";
import CokeStudio2024Newjeans from "../../../assets/CokeStudio/CokeStudio2024Newjeans.webp";
import CokeStudio2024KarolG from "../../../assets/CokeStudio/CokeStudio2024KarolG.webp";
import CokeStudio2024PeggyGou from "../../../assets/CokeStudio/CokeStudio2024PeggyGou.webp";
import CokeStudio24RockInRio from "../../../assets/CokeStudio/CokeStudio24RockInRio.webp";
import CokeStudio24Lolla25 from "../../../assets/CokeStudio/CokeStudio24Lolla25.webp";

export default function Team() {
  const { t } = useTranslation(["common", "Team"]);
  return (
    <div className="flex flex-col items-center pt-30 lg:pt-20">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] lg:my-10 lg:mt-20 nv:max-w-[70rem]">
        <span>
          <Link
            to="coke-studio"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            <span>{t("common:Coke")}/</span>
          </Link>
          <Link
            to="coke-studio/experiences"
            className="font-Noto font-semibold text-black">
            <span>{t("Team:Team")}</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 lg:gap-14">
        <MegaBanner
          urlImage={HeroCokeStudio2024FriendsWithSunGlassesAndColaDesktop}
          urlImageMobile={HeroCokeStudio2024FriendsWithSunGlassesAndColaMobile}
          span="COKE STUDIO 2025"
          title={t("Team:Our2025Team")}
        />
        <div className="flex flex-col items-center text-center gap-3 md:max-w-[65%] lg:max-w-[45%]">
          <h2 className="title-section">{t("Team:TheCokeStudioTeam")}</h2>
          <span>{t("Team:StayTunedForMore")}</span>
        </div>
        <section className="flex flex-col items-center text-center gap-5 max-w-screen lg:max-w-[46rem]">
          <h2 className="title-section">{t("Team:FullTeam")}</h2>
          <div className="flex flex-wrap gap-7 justify-center items-center mt-3  pb-20">
            <div className="flex flex-wrap flex-col items-center justify-center gap-3  w-[40%] md:w-[45%]  lg:w-[30%]">
              <img
                src={CokeStudio2024Newjeans}
                alt={t("Team:NewJeansAreWearing")}
                className="rounded-xl shadow-2xl"
              />
              <h3 className="font-Noto font-semibold  underline">NewJeans</h3>
            </div>
            <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
              <img
                src={CokeStudio2024KarolG}
                alt="Karol G com cabelo longo e ondulado em tom rosa claro, vestindo um top de biquíni branco decorado com tachas prateadas e uma blusa rosa amarrada na frente. Ela segura uma garrafa de vidro de Coca-Cola com o rótulo vermelho visível, enquanto posa confiante contra um fundo lilás claro."
                className="rounded-xl shadow-2xl"
              />
              <h3 className="font-Noto font-semibold  underline">Karol G</h3>
            </div>
            <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
              <img
                src={CokeStudio2024PeggyGou}
                alt="Peggy Gou usando um casaco vermelho felpudo e um top preto, com várias tatuagens visíveis no colo e pescoço. O fundo branco destaca o visual vibrante e ousado."
                className="rounded-xl shadow-2xl"
              />
              <h3 className="font-Noto font-semibold  underline">Peggy Gou</h3>
            </div>
            <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
              <img
                src={CokeStudio24RockInRio}
                alt={t("Team:APersonWearingFuturistic")}
                className="rounded-xl shadow-2xl"
              />
              <h3 className="font-Noto font-semibold  underline">
                Rock in Rio
              </h3>
            </div>
            <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
              <img
                src={CokeStudio24Lolla25}
                alt={t("Team:PromotionalImageWith")}
                className="rounded-xl shadow-2xl"
              />
              <h3 className="font-Noto font-semibold  underline">
                Lollapalooza BR
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
