import SectionFloatContent from "@/components/SectionFloatContent";
import PropositoEVisao from "../../assets/AboutUs/Purpose/PropositoEVisao.webp";
import CocaColaCompanyPurposeSummary from "../../assets/AboutUs/Purpose/CocaColaCompanyPurposeSummary.pdf";
import PropositoEVisao2 from "../../assets/AboutUs/Purpose/PropositoEVisao2.webp";
import JamesQuinceyLetterToEmployees from "../../assets/AboutUs/Purpose/JamesQuinceyLetterToEmployees.pdf";

import { useTranslation } from "react-i18next";
export default function Purpose() {
  const { t } = useTranslation("Purpose");
  return (
    <div className="flex flex-col gap-8 pb-10 w-full justify-center items-center  py-10 xl:max-w-[70rem]">
      <div className="flex flex-col gap-5 justify-center items-center max-w-[90%]">
        <h1 className="title-section text-[2rem]!">{t("PurposeAndVision")}</h1>
        <div className="flex flex-col gap-3 text-left font-Noto">
          <span>
            <strong>{t("OurPurpose")}</strong>
            {t("RefreshingTheWorld")}
          </span>
          <span>
            <strong>{t("OurVision")}</strong>
            {t("OurVisionIsToCreate")}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:mt-20">
        <SectionFloatContent
          title={t("WhoWeAre")}
          span={t("LearnMoreAboutOur")}
          urlImage={PropositoEVisao}
          openInNewTab
          alt=""
          textButton={t("LearnMore")}
          urlButton={CocaColaCompanyPurposeSummary}
          extraClassSection="justify-center items-center flex-col-reverse xl:flex-row"
          extraClassDiv="max-w-[90%] md:w-full lg:-mb-30 xl:-ml-30"
        />
        <SectionFloatContent
          title={t("LetterToEmployees")}
          span={t("PurposeIsAtTheHeart")}
          urlImage={PropositoEVisao2}
          openInNewTab
          alt=""
          textButton={t("ReadTheLetter")}
          urlButton={JamesQuinceyLetterToEmployees}
          extraClassSection="justify-center items-center flex-col-reverse xl:flex-row-reverse"
          extraClassDiv="max-w-[90%] md:w-full lg:-mb-30 xl:-mr-30"
        />
      </div>
    </div>
  );
}
