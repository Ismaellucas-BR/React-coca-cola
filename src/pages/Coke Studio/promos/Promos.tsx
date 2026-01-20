import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";
import FormSections from "@/pages/shareACoke/components/FormSections";
import FriendsDrinkingCokeInParkDesktop from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeInParkDesktop.webp";
import FriendsDrinkingCokeInParkMobile from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeInParkDesktop.webp";
import FriendsDrinkingCokeAndSmilingInPark from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeAndSmilingInPark.webp";
import PeggyGouWallpaperGeneric from "../../../assets/CokeStudio/PeggyGouWallpaperGeneric.webp";
import WallpaperPeggyGouCokeStudio2024 from "../../../assets/CokeStudio/WallpaperPeggyGouCokeStudio2024.webp";
import AutographPeggyGouCokeStudio2024 from "../../../assets/CokeStudio/AutographPeggyGouCokeStudio2024.webp";
import KarolGWallpaperGeneric from "../../../assets/CokeStudio/KarolGWallpaperGeneric.webp";
import WallpaperKarolGCokeStudio2024 from "../../../assets/CokeStudio/WallpaperKarolGCokeStudio2024.webp";
import NewJeansAutographGeneric from "../../../assets/CokeStudio/NewJeansAutographGeneric.webp";
import NewjeansAutograph from "../../../assets/CokeStudio/NewjeansAutograph.webp";

import { useTranslation } from "react-i18next";

export default function Promos() {
  const { t } = useTranslation(["common", "Promos"]);
  return (
    <div className="flex flex-col items-center w-full pt-30 pb-20 xl:pt-20 xl:max-w-[80rem]">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] xl:my-10 nv:max-w-[70rem]">
        <span>
          <a
            href="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            {t("common:Coke")}/
          </a>
          <a href="#" className="font-Noto font-semibold text-black">
            <span>{t("Promos:Promotions")}</span>
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5">
        <MegaBanner
          urlImage={FriendsDrinkingCokeInParkDesktop}
          urlImageMobile={FriendsDrinkingCokeInParkMobile}
          title={t("Promos:Promotions")}
          span="COKE STUDIO 2025"
        />
        <ComponentDefaultPlusTitle
          titleMain={t("Promos:PromotionsAvailable")}
          subTitle={t("Promos:SignUpForCoke")}
          urlImg={FriendsDrinkingCokeAndSmilingInPark}
          alt={t("Promos:PromotionalImage")}
          titleSecondary={t("Promos:TurnUptheVolume")}
          span={t("Promos:LollapaloozaIsAlmostHere")}
          flexDirection="xl:flex xl:flex-row-reverse "
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title={t("Promos:PeggyGouWallpaper")}
          span={t("Promos:ToMakeYourPhone")}
          urlButton={WallpaperPeggyGouCokeStudio2024}
          textButton={t("common:IWant")}
          urlImage={PeggyGouWallpaperGeneric}
          alt={t("Promos:PeggyGouPosing")}
          openInNewTab
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title={t("Promos:PeggyGouDigitalAutograph")}
          span={t("Promos:HereYoullFind")}
          urlButton={AutographPeggyGouCokeStudio2024}
          textButton={t("common:IWant")}
          urlImage={PeggyGouWallpaperGeneric}
          alt={t("Promos:PeggyHoldingACoke")}
          openInNewTab
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title={t("Promos:StyleYourScreen")}
          span={t("Promos:AGiftThatEvery")}
          urlButton={WallpaperKarolGCokeStudio2024}
          textButton={t("common:IWant")}
          urlImage={KarolGWallpaperGeneric}
          alt={t("Promos:KarolGPosing")}
          openInNewTab
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title={t("Promos:AutographedPhotoWithNewJeans")}
          span={t("Promos:DownloadYourNewJeansPhoto")}
          urlButton={NewjeansAutograph}
          textButton={t("common:IWant")}
          urlImage={NewJeansAutographGeneric}
          alt={t("Promos:NewJeansPosingForAPhoto")}
          openInNewTab
        />
        <FormSections
          title={t("Promos:GetReadyForUnforgettable")}
          span1={t("Promos:StayTunedForUpcomingFestivals")}
          extraClasse="xl:mt-20 xl"
        />
      </div>
    </div>
  );
}
