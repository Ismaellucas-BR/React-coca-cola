import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

import SustainabilityBannerDesktop from "../../assets/sustainability/SustainabilityBannerDesktop.webp";
import SustainabilityBannerMobile from "../../assets/sustainability/SustainabilityBannerMobile.webp";
import BannerAgua from "../../assets/sustainability/BannerAgua.webp";
import Empaques from "../../assets/sustainability/Empaques.webp";
import PortafolioDeProductos from "../../assets/sustainability/PortafolioDeProductos.webp";
export default function Sustainability() {
  const { t } = useTranslation("Sustainability");
  return (
    <div className="flex flex-col gap-8 pb-10 w-full justify-center items-center">
      <div className="flex w-full justify-center">
        <img
          src={SustainabilityBannerDesktop}
          alt=""
          className="hidden lg:flex"
        />
        <img src={SustainabilityBannerMobile} alt="" className=" lg:hidden" />
      </div>
      <section className=" flex flex-col justify-center items-center gap-8 max-w-[90%] xl:max-w-[70rem] xl:pt-5">
        <div className="flex flex-col justify-center items-center text-center gap-3 xl:gap-5">
          <h1 className="title-section xl:text-[2.375rem]!">
            {t("Sustainability")}
          </h1>
          <span className="content-section xl:max-w-[60rem]">
            {t("BeverageCompany")}
          </span>
        </div>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-10">
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src={BannerAgua}
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("PrioritizingWaterReplenishment")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("Since2015")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("AdoptingALocal")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("WeHaveOperations")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src={Empaques}
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Design
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("WeAimToUse")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("CollaborateToCollect")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  {t("ToHelpEnsure")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="embalagens">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("ObjectiveForPackaging")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("OurGoalIs")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="objetivo">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("CollectionObjective​")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  {t("OurGoalIsToHelp")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src={PortafolioDeProductos}
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("ReducingEmissions")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("WeHaveSetATarget")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  {t("Objective")}
                </AccordionTrigger>
                <AccordionContent className="content-section py-5 whitespace-pre-line">
                  {t("OurGoalIsToReduce")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
