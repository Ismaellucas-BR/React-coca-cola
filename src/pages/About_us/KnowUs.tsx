import SectionFloatContent from "@/components/SectionFloatContent";
import EsMexicoNuestraCompaniaCampaignCard from "../../assets/AboutUs/KnowUs/EsMexicoNuestraCompaniaCampaignCard.webp";
import NosConheca0 from "../../assets/AboutUs/KnowUs/NosConheca0.webp";
import NosConheca1 from "../../assets/AboutUs/KnowUs/NosConheca1.webp";
import NosConheca2 from "../../assets/AboutUs/KnowUs/NosConheca2.webp";
import NosConheca3 from "../../assets/AboutUs/KnowUs/NosConheca3.webp";
import NosConheca4 from "../../assets/AboutUs/KnowUs/NosConheca4.webp";
import NosConheca5 from "../../assets/AboutUs/KnowUs/NosConheca5.webp";

import { useTranslation } from "react-i18next";
export default function KnowUs() {
  const { t } = useTranslation("GetToKnowUs");
  return (
    <div className="flex flex-col gap-2 items-center  w-full py-10 xl:py-15">
      <div
        className="relative w-full max-w-[90%] h-[35.5rem] bg-center bg-cover bg-no-repeat flex justify-center items-center lg:max-w-[90%]  xl:max-w-[80rem] rounded-xl"
        style={{
          backgroundImage: `url(${EsMexicoNuestraCompaniaCampaignCard})`,
        }}>
        <div className="absolute inset-0 bg-black/50 z-0 rounded-xl" />
        <h1 className="title-section text-white! text-[1.5rem]! z-10 lg:text-[2.375rem]!">
          {t("OurCompany")}
        </h1>
      </div>
      <div className="flex flex-col max-w-[90%] gap-3 mt-5 xl:max-w-[70rem] xl:pb-10">
        <span className="content-section whitespace-pre-line">
          {t("OnMay8")}
        </span>
      </div>
      <section className="flex flex-col gap-10 lg:gap-5 items-center">
        <SectionFloatContent
          title={t("OurPurposeIs")}
          span={t("WeAreCommitted")}
          urlImage={NosConheca0}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center lg:w-full xl:flex-row "
          extraClassDiv="-bottom-10! max-w-[90%] xl:-ml-20"
        />
        <SectionFloatContent
          title={t("TotalBeverageCompany")}
          span={t("OurBeveragePortfolio")}
          urlImage={NosConheca1}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center xl:flex-row-reverse"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title={t("OurPeopleAre")}
          span={t("TogetherWithOurBottling")}
          urlImage={NosConheca2}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center xl:flex-row"
          extraClassDiv="-bottom-10! max-w-[90%] xl:-ml-20"
        />
        <SectionFloatContent
          title={t("PrioritizingSustainability")}
          span={t("WeDoBusiness")}
          urlImage={NosConheca3}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center xl:flex-row-reverse"
          extraClassDiv="-bottom-10! max-w-[90%] xl:-ml-20"
        />
        <SectionFloatContent
          title={t("OurPeopleDrive")}
          span={t("AsAPurpose")}
          urlImage={NosConheca4}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center xl:flex-row"
          extraClassDiv="-bottom-10! max-w-[90%] xl:-ml-20"
        />
        <SectionFloatContent
          title={t("TheCocaColaSystem")}
          span={t("LocalBottlerswork")}
          urlImage={NosConheca5}
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center xl:flex-row-reverse"
          extraClassDiv="-bottom-10! max-w-[90%] xl:-ml-20"
        />
      </section>
    </div>
  );
}
