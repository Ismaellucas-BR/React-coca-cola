import { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router";
import { MouseEventHandler, useState } from "react";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import useEmblaCarousel from "embla-carousel-react";
import FloatBar from "@/components/FloatBar";
import EmblaCarousel from "../../Home/components/carrossel/EmblaCarousel";
import FormSections from "@/pages/shareACoke/components/FormSections";
import Lolla2025Hero1 from "../../../assets/ShareACoke/lolla/Lolla2025Hero1.webp";
import Lolla2025Hero1Mobile from "../../../assets/ShareACoke/lolla/Lolla2025Hero1Mobile.webp";
import Lolla25JaoBannerDesktop from "../../../assets/ShareACoke/lolla/Lolla25JaoBannerDesktop.webp";
import Lolla25JaoBannerMobile from "../../../assets/ShareACoke/lolla/Lolla25JaoBannerMobile.webp";
import GanadorContentCard from "../../../assets/ShareACoke/lolla/GanadorContentCard.webp";

// @ts-ignore
const OPTIONS: EmblaOptionsType = { loop: true };
// @ts-ignore
const SLIDE_COUNT = 5;
// @ts-ignore
const SLIDES: any = [];

export default function lollapalooza() {
  const { t } = useTranslation(["common", "Lolla"]);
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);
  }, []);
  // @ts-ignore
  type PropType = {
    slides: any;
    options?: EmblaOptionsType;
  }; // @ts-ignore
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo: MouseEventHandler<HTMLDivElement> | undefined = () => {
    setIsPlaying(true);
  };
  return (
    <div className="flex flex-col items-center w-full pt-30 pb-20 xl:pt-20 ">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] xl:my-10 nv:max-w-[70rem]">
        <span>
          <Link
            to="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            {t("common:Coke")}/
          </Link>
          <Link to="#" className="font-Noto font-semibold text-black">
            <span>Lollapalooza BR</span>
          </Link>
        </span>
      </div>
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop: Lolla2025Hero1,
            bgMobile: Lolla2025Hero1Mobile,
            title: t("Lolla:ReliveTheMagic"),
            text: t("Lolla:TheFestivalEnergy"),
            buttonText: "",
            buttonLink: "",
          },
          {
            bgDesktop: Lolla25JaoBannerDesktop,
            bgMobile: Lolla25JaoBannerMobile,
            title: "Pov: Jão",
            text: t("Lolla:ExperienceJaos"),
          },
          {
            bgDesktop: Lolla2025Hero1,
            bgMobile: Lolla2025Hero1Mobile,
            title: t("Lolla:ReliveTheMagic"),
            text: t("Lolla:TheFestivalEnergy"),
            buttonText: "",
            buttonLink: "",
          },

          {
            bgDesktop: Lolla25JaoBannerDesktop,
            bgMobile: Lolla25JaoBannerMobile,
            title: "Pov: Jão",
            text: t("Lolla:ExperienceJaos"),
          },
        ]}
      />
      <div className="flex flex-col items-center gap-5 xl:gap-10 mt-5 xl:mt-10">
        <h2 className="title-section">{t("Lolla:Congratulations")}</h2>
        <div className="flex flex-col shadow-md rounded-lg w-full lg:w-[22rem] max-w-[90%]">
          <img
            src={GanadorContentCard}
            alt='"Ganhador" em branco sobre um fundo preto com linhas onduladas vermelhas.'
            className="rounded-t-md h-[16.5rem] w-full object-cover md:h-[45rem] lg:h-[16.5rem]"
          />

          <div className="flex flex-col justify-between flex-1 py-5 px-7 pb-6 bg-white rounded-b-lg">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-Noto font-bold text-[1.25rem] lg:text-[1.5rem]">
                Maria R
              </h2>
              <span className="font-Noto font-normal text-base">
                527.XXX.XXX-80<br></br>
                Itapecerica da Serra – SP<br></br>
                6.36940
              </span>
            </div>
          </div>
        </div>
        <FormSections
          title={t("Lolla:GetReadyForUnforgettable")}
          span1={t("Lolla:StayTuned")}
          extraClasse="mt-10"
        />
        <section className="flex flex-col items-center text-center gap-5">
          <h2 className="title-section">{t("Lolla:OfficialPlaylist")}</h2>
          <span className="content-section text-lg! px-10">
            {t("Lolla:GetInTheMood")}
          </span>
          <div className="w-[90%]">
            <iframe
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUDmmJgDi7O8?utm_source=iframe-api"
              width="100%"
              height="398"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              allowFullScreen
              frameBorder="0"
              title="Spotify Playlist"></iframe>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center text-center gap-5 w-[90%]">
          <h2 className="title-section">{t("Lolla:ReliveWhatLollapalooza")}</h2>
          {isPlaying ? (
            <iframe
              className="w-full  rounded-lg h-[13.25rem]"
              src="https://www.youtube.com/embed/2gRwix3onBU?start=3&autoplay=1"
              title="Lollapalooza Brasil - YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          ) : (
            <div
              className="relative flex flex-col items-center justify-center thumbnail h-[13.25rem] overflow-hidden rounded-lg md:w-full md:min-w-[25.5rem] md:h-[25.5rem] xl:h-[39.5rem]"
              onClick={handlePlayVideo}
              style={{ cursor: "pointer" }}>
              <img
                src="https://i.ytimg.com/vi/2gRwix3onBU/maxresdefault.jpg"
                alt="Lollapalooza Brasil - Thumbnail"
                className="h-[18.25rem] w-full md:h-[40rem]"
              />
              <span className="absolute top-1/2 left-1/2 -translate-1/2 p-2 bg-white rounded-full shadow">
                <Play size={32} />
              </span>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
