import Card from "./Card";

import { useTranslation } from "react-i18next";

import CokeStudioCard from "../../../assets/CokeStudioCard.webp";
import ContentCard1Fpo from "../../../assets/Sprite/ContentCard1Fpo.webp";
export default function ThirdSection() {
  const { t } = useTranslation(["common", "home"]);
  return (
    <section className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem]">
      <h2 className="title-section">{t("home:Experiences")}</h2>
      <div className=" flex flex-col gap-10 xl:flex-row">
        <Card
          urlImage={CokeStudioCard}
          titleCard="Coke Studio"
          content={t("home:ExperienceTheMagic")}
          urlAncora="coke-studio"
        />
        <Card
          urlImage={ContentCard1Fpo}
          titleCard={t("home:SurviveTheSummerHeat")}
          content={t("home:DontLetYourSpirits")}
          urlAncora="/brands/sprite/sprite-e-verao"
        />
      </div>
    </section>
  );
}
