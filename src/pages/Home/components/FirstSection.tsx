import EmblaCarousel from "./carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];

export default function FirstSection() {
  return (
    <EmblaCarousel
      options={{ loop: true }}
      slides={[
        {
          bgDesktop:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/share-a-coke/hero-desktop.jpg/width3840.jpg",
          bgMobile:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/share-a-coke/hero-mobile.jpg/width500.jpg",
          title: "Descubra os ingredientes para a conexão perfeita:",
          text: "Latas personalizadas, jogos, músicas e muito mais.",
          buttonText: "Saiba mais",
          buttonLink: "share-a-coke",
        },
        {
          bgDesktop:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width3840.jpg",
          bgMobile:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width3840.jpg",
          title: " Um Toque de Frescor Para Seu Dia",
          text: "Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!",
        },
        {
          bgDesktop:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/vai-de-retornavel/hero_nuevo.jpg/width3840.jpg",
          bgMobile:
            "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/vai-de-retornavel/hero_nuevo.jpg/width3840.jpg",
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
