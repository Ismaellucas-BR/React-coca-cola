import EmblaCarousel from "./carrossel/EmblaCarousel";
import { useTranslation } from "react-i18next";

import HeroDesktop from "../../../assets/HeroDesktop.webp";
import HeroMobile from "../../../assets/HeroMobile.webp";
import HeroBannerDesktop from "../../../assets/HeroBannerDesktop.webp";
import HeroNuevo from "../../../assets/HeroNuevo.webp";

export default function FirstSection() {
  const { t } = useTranslation(["home", "common"]);
  return (
    <EmblaCarousel
      options={{ loop: true }}
      slides={[
        {
          bgDesktop: HeroDesktop,
          bgMobile: HeroMobile,
          title: t("home:h1HeroSectionSlide1"),
          text: t("home:SubTitleHeroSlide1"),
          buttonText: t("common:LearnMore"),
          buttonLink: "share-a-coke",
        },
        {
          bgDesktop: HeroBannerDesktop,
          bgMobile: HeroBannerDesktop,
          title: t("home:h1HeroSectionSlide2"),
          text: t("home:SubTitleHeroSlide2"),
        },
        {
          bgDesktop: HeroNuevo,
          bgMobile: HeroNuevo,
          title: "",
          text: "",
          buttonText: "",
          buttonLink: "",
        },
        {
          videoUrl:
            "https://www.youtube.com/embed/0Ab-F7Y3IXc?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=0Ab-F7Y3IXc",
        },
      ]}
    />
  );
}
