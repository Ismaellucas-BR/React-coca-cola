import FloatBar from "@/components/FloatBar";
import EmblaCarousel from "../../Home/components/carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];
export default function lollapalooza() {
  return (
    <div className="flex flex-col items-center w-full pt-30 pb-20 xl:pt-20 xl:max-w-[80rem]">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] xl:my-10 nv:max-w-[70rem]">
        <span>
          <Link
            to="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            Coca‑Cola/
          </Link>
          <Link
            to="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            Time/
          </Link>
          <Link to="#" className="font-Noto font-semibold text-black">
            <span>Lollapalooza BR</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5">
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
              buttonLink: "https://www.coca-cola.com",
            },
            {
              bgDesktop:
                "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width3840.jpg",
              bgMobile:
                "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width3840.jpg",
              title: " Um Toque de Frescor Para Seu Dia",
              text: "Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!",
              buttonText: "Saiba mais",
              buttonLink: "#",
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
      </div>
    </div>
  );
}
