import EmblaCarousel from "../../pages/Home/components/carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { CardProps } from "../../components/CardDefault";
import { useTranslation } from "react-i18next";

import FormSections from "../shareACoke/components/FormSections";
import ComponentDefaultPlusTitle from "../../components/ComponentDefaultPlusTitle";
import ComponentDefaultNoTitle from "../../components/ComponentDefaultNoTitle";
import CardDefault from "@/components/CardDefault";
import SectionFloatContent from "@/components/SectionFloatContent";
import CokeStudioTeam from "./components/CokeStudioTeam";
import FloatBar from "@/components/FloatBar";

import PeggyGouWithCoKe from "../../assets/CokeStudio/PeggyGouWithCoKe.webp";
import NewJeansWithCoke from "../../assets/CokeStudio/NewJeansWithCoke.webp";
import NewJeansFans from "../../assets/CokeStudio/NewJeansFans.webp";
import HeroImageDesktop from "../../assets/CokeStudio/HeroImageDesktop.webp";
import HeroImageMobile from "../../assets/CokeStudio/HeroImageMobile.webp";
import JaoBannerDesktop from "../../assets/CokeStudio/JaoBannerDesktop.webp";
import JaoBannerMobile from "../../assets/CokeStudio/JaoBannerMobile.webp";
import PeggyGouSmilingDesktop from "../../assets/CokeStudio/PeggyGouSmilingDesktop.webp";
import PeggyGouSmilingMobile from "../../assets/CokeStudio/PeggyGouSmilingMobile.webp";
import karolGPosingDesktop from "../../assets/CokeStudio/karolGPosingDesktop.webp";
import karolGPosingMobile from "../../assets/CokeStudio/karolGPosingMobile.webp";
import NewJeansPosingDesktop from "../../assets/CokeStudio/NewJeansPosingDesktop.webp";
import NewJeansPosingMobile from "../../assets/CokeStudio/NewJeansPosingMobile.webp";
import PeggyGouAutographGeneric from "../../assets/CokeStudio/PeggyGouAutographGeneric.webp";
import PeggyGouWallpaperGeneric from "../../assets/CokeStudio/PeggyGouWallpaperGeneric.webp";
import KarolGWallpaperGeneric from "../../assets/CokeStudio/KarolGWallpaperGeneric.webp";
import NewJeansAutographGeneric from "../../assets/CokeStudio/NewJeansAutographGeneric.webp";
import MagicMomentsPeggyGou from "../../assets/CokeStudio/MagicMomentsPeggyGou.webp";
import AutographPeggyGouCokeStudio2024 from "../../assets/CokeStudio/AutographPeggyGouCokeStudio2024.webp";
import WallpaperPeggyGouCokeStudio2024 from "../../assets/CokeStudio/WallpaperPeggyGouCokeStudio2024.webp";
import WallpaperKarolGCokeStudio2024 from "../../assets/CokeStudio/WallpaperKarolGCokeStudio2024.webp";
import NewjeansAutograph from "../../assets/CokeStudio/NewjeansAutograph.webp";

// @ts-ignore
const OPTIONS: EmblaOptionsType = { loop: true };
// @ts-ignore
const SLIDE_COUNT = 5;
// @ts-ignore
const SLIDES: any = [];

export default function CokeStudio() {
  const { t } = useTranslation(["CokeStudio", "common"]);
  const cardsContent: CardProps[] = [
    {
      urlImage: PeggyGouWithCoKe,
      titleCard: t("CokeStudio:PeggyGouIsOnTheTurntables"),
      content: t("CokeStudio:DiscoverWhatsEssential"),
      alt: t("CokeStudio:ArtistPeggyGouSmiling"),
    },
    {
      urlImage: NewJeansWithCoke,
      titleCard: t("CokeStudio:InterviewWithNewJeans"),
      content: t("CokeStudio:TheNewJeansTeamAnswered"),
      alt: t("CokeStudio:NewJeansPosingTogether"),
    },
    {
      urlImage: NewJeansFans,
      titleCard: t("CokeStudio:CokeStudioLiveNewJeans"),
      content: t("CokeStudio:WatchNewJeansPerform"),
      alt: t("CokeStudio:AGroupOfPeople"),
    },
  ];
  return (
    <div className="relative flex flex-col items-center pt-30 lg:pt-10">
      <div className="sticky top-24 z-40 flex justify-center w-full mb-5">
        <FloatBar />
      </div>
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] lg:mb-10 nv:max-w-[70rem]">
        <span>
          <a
            href="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            Coca‑Cola/
          </a>
          <a href="#" className="font-Noto font-semibold text-black">
            <span>Coke Studio</span>
          </a>
        </span>
      </div>
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop: HeroImageDesktop,
            bgMobile: HeroImageMobile,
            title: t("CokeStudio:LollapaloozaBrazil"),
            text: t("CokeStudio:TheFestivalEnergy"),
            buttonText: t("common:LearnMore"),
            buttonLink: "#",
          },
          {
            bgDesktop: JaoBannerDesktop,
            bgMobile: JaoBannerMobile,
            title: t("CokeStudio:PocketShow"),
            text: t("CokeStudio:ExperienceJao"),
            buttonText: t("common:LearnMore"),
            buttonLink: "#",
          },
          {
            bgDesktop: PeggyGouSmilingDesktop,
            bgMobile: PeggyGouSmilingMobile,
            title: t("CokeStudio:LetThePartyBegin"),
            text: t("CokeStudio:ShesPlayBestBeats"),
            buttonText: t("common:LearnMore"),
            buttonLink: "#",
          },
          {
            bgDesktop: karolGPosingDesktop,
            bgMobile: karolGPosingMobile,
            title: t("CokeStudio:TurnUpTheVolume"),
            text: t("CokeStudio:StayTuned"),
            buttonText: t("common:LearnMore"),
            buttonLink: "#",
          },
          {
            bgDesktop: NewJeansPosingDesktop,
            bgMobile: NewJeansPosingMobile,
            title: t("CokeStudio:NewJeansJoinedTeam"),
            text: t("CokeStudio:NewJeansHasArrived"),
            buttonText: t("common:LearnMore"),
            buttonLink: "#",
          },
        ]}
      />
      <div className="lg:max-w-[46rem] ">
        <FormSections
          title={t("CokeStudio:GetReadyForUnforgettable")}
          span1={t("CokeStudio:StayTunedForUpcoming")}
        />
      </div>
      <div className="flex flex-col items-center gap-5 lg:gap-14">
        <ComponentDefaultPlusTitle
          titleMain={t("CokeStudio:Promotions")}
          titleSecondary={t("CokeStudio:PeggyGousDigitalAutograph")}
          span={t("CokeStudio:HereYoullFind")}
          urlButton={AutographPeggyGouCokeStudio2024}
          textButton={t("CokeStudio:IWant")}
          urlImg={PeggyGouAutographGeneric}
          alt={t("CokeStudio:PeggyHoldingACoke")}
          flexDirection="flex-row-reverse"
          FirstSectionPadding="pt-10"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row-reverse xl:mt-[.5rem]"
          title={t("CokeStudio:PeggyGouWallpaper")}
          span={t("CokeStudio:ToMakeYourPhone")}
          urlButton={WallpaperPeggyGouCokeStudio2024}
          textButton={t("CokeStudio:IWant")}
          urlImage={PeggyGouWallpaperGeneric}
          alt={t("CokeStudio:PeggyGouPosingForAPhoto")}
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[.5rem]"
          title={t("CokeStudio:StyleYourScreenWithKarolG")}
          span={t("CokeStudio:AGiftThatEveryTrueKarolG")}
          urlButton={WallpaperKarolGCokeStudio2024}
          textButton={t("CokeStudio:IWant")}
          urlImage={KarolGWallpaperGeneric}
          alt={t("CokeStudio:KarolGPosing")}
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row-reverse xl:mt-[.5rem]"
          title={t("CokeStudio:AutographedPhotoNewJeans")}
          span={t("CokeStudio:DownloadYourNewJeansPhoto")}
          urlButton={NewjeansAutograph}
          textButton={t("CokeStudio:IWant")}
          urlImage={NewJeansAutographGeneric}
          alt={t("CokeStudio:NewJeansPosingForAPhoto")}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-2 xl:mt-5">
        <h3 className="font-Noto font-bold text-[1.8rem] xl:text-[2rem] text-black">
          {t("CokeStudio:Experiences")}
        </h3>
        <div className="flex flex-col gap-10 p-5 items-center mb-10 max-w-screen nv:max-w-[70rem] lg:flex-row justify-center lg:gap-10">
          {cardsContent.map((card, index) => {
            return <CardDefault key={index} {...card} />;
          })}
        </div>
      </div>
      <SectionFloatContent
        havePreTitle={true}
        preTitle={t("CokeStudio:TrulyMagicalMoments")}
        urlImage={MagicMomentsPeggyGou}
        alt={t("CokeStudio:PeggyGouDJ")}
        title={t("CokeStudio:PeggyGouInThePickuptrucks")}
        span={t("CokeStudio:OurSuperstarDJ")}
        extraClassSection="flex-col xl:flex-row"
        extraClassDiv="-top-10 xl:top-0! xl:-ml-10"
      />
      <CokeStudioTeam />
    </div>
  );
}
