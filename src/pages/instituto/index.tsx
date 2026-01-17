import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import SectionFloatContent from "@/components/SectionFloatContent";
import institutoHero from "../../assets/instituto/institutoHero.webp";
import InfograficoDados from "../../assets/instituto/InfograficoDados.webp";
import RelatorioInstitucional2024 from "../../assets/instituto/RelatorioInstitucional2024.webp";
import InstitutoCocaColaBrasilRelatoriDeResultados2024 from "../../assets/instituto/InstitutoCocaColaBrasilRelatoriDeResultados2024.pdf";
import PaginaInicialColetivoOnlineRevMarcelly from "../../assets/instituto/PaginaInicialColetivoOnlineRevMarcelly.webp";
import PaginaInicialColetivoJovemRevMarcelly from "../../assets/instituto/PaginaInicialColetivoJovemRevMarcelly.webp";
import PaginaInicialRumoAosMilhoes from "../../assets/instituto/PaginaInicialRumoAosMilhoes.webp";

import { useTranslation } from "react-i18next";

export default function Instituto() {
  const { t } = useTranslation(["common", "Institute"]);
  return (
    <div className="flex flex-col gap-2 items-center  w-full">
      <div
        className="relative w-full lg:max-w-[90%] h-[35.5rem] bg-center bg-cover bg-no-repeat flex justify-center items-center xl:max-w-[90rem]"
        style={{
          backgroundImage: `url(${institutoHero})`,
        }}>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="title-section text-white! text-[1.5rem]! z-10">
          {t("Institute:FromThousandsToMillions")}
        </h1>
      </div>
      <section className="flex flex-col justify-center items-center xl:max-w-[70rem]">
        <div className="flex flex-col gap-15 py-10 max-w-[90%] justify-center items-center">
          <span className="content-section">
            {" "}
            {t("Institute:WeAreTheInstitute")}{" "}
          </span>
          <img src={InfograficoDados} alt="" />
        </div>
        <div className="flex flex-col gap-16 justify-center items-center md:gap-5">
          <SectionFloatContent
            title={t("Institute:CheckOutOurResults")}
            span={t("Institute:The2024InstitutionalReport")}
            urlImage={RelatorioInstitucional2024}
            alt=""
            openInNewTab
            textButton={t("common:DownloadHere")}
            urlButton={InstitutoCocaColaBrasilRelatoriDeResultados2024}
            extraClassSection="flex flex-col justify-center items-center xl:flex-row! xl:mt-10! xl:pb-0"
            extraClassDiv="-top-10 xl:top-0 xl:-left-10 max-w-[90%] xl:mt-0"
          />
          <ComponentDefaultPlusTitle
            titleMain={t("Institute:OurInitiatives")}
            titleSecondary={t("Institute:OnlineCollective")}
            span={t("Institute:LargestEmployabilityProgram")}
            urlImg={PaginaInicialColetivoOnlineRevMarcelly}
            alt=""
            flexDirection="flex xl:flex-row"
          />
          <ComponentDefaultNoTitle
            title={t("Institute:YouthCollectivePlatform")}
            span={t("Institute:APlatformThatBrings")}
            urlImage={PaginaInicialColetivoJovemRevMarcelly}
            alt=""
            flexDirection="flex xl:flex-row"
          />
          <SectionFloatContent
            title={t("Institute:TowardsTheMillions")}
            span={t("Institute:RecognizedForOurSocial")}
            urlImage={PaginaInicialRumoAosMilhoes}
            alt=""
            extraClassSection="flex flex-col justify-center items-center xl:flex-row"
            extraClassDiv="-top-10 xl:min-h-[34.5rem]  max-w-[90%] xl:mt-0! xl:-ml-10"
          />
        </div>
      </section>
    </div>
  );
}
