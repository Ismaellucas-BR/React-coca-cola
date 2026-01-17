import { Link } from "react-router";
import { useTranslation } from "react-i18next";

import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";

import FormSections from "../../shareACoke/components/FormSections";
import heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop from "../../../assets/ShareACoke/xp/heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop.webp";
import HeroCokeStudio2024MusicFansWithCokeBottlesMobile from "../../../assets/ShareACoke/xp/HeroCokeStudio2024MusicFansWithCokeBottlesMobile.webp";
import JaoExclusiveGeneralCardDesktop from "../../../assets/ShareACoke/xp/JaoExclusiveGeneralCardDesktop.webp";
import GameExperienceCokeStudio2024PeggyGou from "../../../assets/ShareACoke/xp/GameExperienceCokeStudio2024PeggyGou.webp";
import GeneralCardCokeStudio2024PeggyGouWithCokeLight from "../../../assets/ShareACoke/xp/GeneralCardCokeStudio2024PeggyGouWithCokeLight.webp";
import ContentCardCokeStudio2024NewJeansWithCoke from "../../../assets/ShareACoke/xp/ContentCardCokeStudio2024NewJeansWithCoke.webp";
import ContentCardCokeStudio2024NewJeansFansAtEvent from "../../../assets/ShareACoke/xp/ContentCardCokeStudio2024NewJeansFansAtEvent.webp";

export default function Experiences() {
  const { t } = useTranslation(["common", "Experiences"]);
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
            <span>{t("Experiences:Experiences")}</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 lg:gap-14 pb-10">
        <MegaBanner
          urlImage={heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop}
          urlImageMobile={HeroCokeStudio2024MusicFansWithCokeBottlesMobile}
          span="COKE STUDIO 2025"
          title={t("Experiences:Experiences")}
        />
        <ComponentDefaultPlusTitle
          titleMain={t("Experiences:AvailableExperiences")}
          subTitle={t("Experiences:LiveTheExtraordinary")}
          titleSecondary={t("Experiences:JaoByCokeStudio")}
          span={t("Experiences:TheVibeFromJao")}
          urlImg={JaoExclusiveGeneralCardDesktop}
          alt={t("Experiences:SingerJaoSinging")}
          flexDirection="flex xl:flex-row"
        />
        <ComponentDefaultNoTitle
          title={t("Experiences:PeggyGouOnHer")}
          span={t("Experiences:JoinPeggyOnHer")}
          urlImage={GameExperienceCokeStudio2024PeggyGou}
          alt={t("Experiences:GameImage")}
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title={t("Experiences:PeggyGouIsOn")}
          span={t("Experiences:DiscoverWhatsEssential")}
          urlImage={GeneralCardCokeStudio2024PeggyGouWithCokeLight}
          alt={t("Experiences:PeggyGouHolding")}
          flexDirection="flex xl:flex-row-reverse
        "
        />
        <ComponentDefaultNoTitle
          title={t("Experiences:InterviewWithNewJeans")}
          span={t("Experiences:TheNewJeansTeam")}
          urlImage={ContentCardCokeStudio2024NewJeansWithCoke}
          alt={t("Experiences:NewJeansPosing")}
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title={t("Experiences:CokeStudioLive")}
          span={t("Experiences:WatchNewJeansPerform")}
          urlImage={ContentCardCokeStudio2024NewJeansFansAtEvent}
          alt={t("Experiences:AGroupOfPeople")}
          flexDirection="flex xl:flex-row-reverse
        "
        />
        <FormSections
          title={t("Experiences:GetReadyForUnforgettable")}
          span1={t("Experiences:StayTunedFor")}
        />
      </div>
    </div>
  );
}
