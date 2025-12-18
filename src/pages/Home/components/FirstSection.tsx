import EmblaCarousel from "./carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import HeroDesktop from "../../../assets/HeroDesktop.webp";
import HeroMobile from "../../../assets/HeroMobile.webp";
import HeroBannerDesktop from "../../../assets/HeroBannerDesktop.webp";
import HeroNuevo from "../../../assets/HeroNuevo.webp";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];

export default function FirstSection() {
  return (
    <EmblaCarousel
      options={{ loop: true }}
      slides={[
        {
          bgDesktop: HeroDesktop,
          bgMobile: HeroMobile,
          title: "Descubra os ingredientes para a conexão perfeita:",
          text: "Latas personalizadas, jogos, músicas e muito mais.",
          buttonText: "Saiba mais",
          buttonLink: "share-a-coke",
        },
        {
          bgDesktop: HeroBannerDesktop,
          bgMobile: HeroBannerDesktop,
          title: " Um Toque de Frescor Para Seu Dia",
          text: "Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!",
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
