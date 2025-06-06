import { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router";
import { MouseEventHandler, useState } from "react";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "../../Home/components/carrossel/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../Home/components/carrossel/EmblaCarouselArrowButtons";
import { useEffect } from "react";
import FloatBar from "@/components/FloatBar";
import EmblaCarousel from "../../Home/components/carrossel/EmblaCarousel";
import FormSections from "@/pages/shareACoke/components/FormSections";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];

export default function lollapalooza() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);
  }, []);
  type PropType = {
    slides: any;
    options?: EmblaOptionsType;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
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
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/ar/es/offerings/coke-studio-24/lolla-2025/xonexp_ar_tccc_cctm_verano2025_heronuevo_1440x810.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/ar/es/offerings/coke-studio-24/lolla-2025/xonexp_ar_tccc_cctm_verano2025_heronuevo_1440x2560.jpg/width1024.jpg",
            title: "Lollapalooza Brasil: Reviva a Magia!",
            text: "A energia do festival ao seu alcance. Relembre os melhores momentos do LollaBR!",
            buttonText: "",
            buttonLink: "",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-mobile.jpg/width1024.jpg",
            title: "Pov: Jão",
            text: "Viva a jornada criativa de Jão em nossa série exclusiva e descubra a inspiração por trás do seu som único.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/ar/es/offerings/coke-studio-24/lolla-2025/xonexp_ar_tccc_cctm_verano2025_heronuevo_1440x810.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/ar/es/offerings/coke-studio-24/lolla-2025/xonexp_ar_tccc_cctm_verano2025_heronuevo_1440x2560.jpg/width1024.jpg",
            title: "Lollapalooza Brasil: Reviva a Magia!",
            text: "A energia do festival ao seu alcance. Relembre os melhores momentos do LollaBR!",
            buttonText: "",
            buttonLink: "",
          },

          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-mobile.jpg/width1024.jpg",
            title: "Pov: Jão",
            text: "Viva a jornada criativa de Jão em nossa série exclusiva e descubra a inspiração por trás do seu som único.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
        ]}
      />
      <div className="flex flex-col items-center gap-5 xl:gap-20">
        <h2 className="title-section">Parabéns!</h2>
        <div className="flex flex-col shadow-md rounded-lg w-full lg:w-[22rem] max-w-[90%]">
          <img
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/ganador_content_card_mobile_1198x_.png/width1960.png"
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
          title="Prepare-se para momentos inesquecíveis"
          span1="Fique de olho para saber dos próximos festivais, novidades, experiências e muito mais com Coke Studio. Assine a newsletter para ter acesso."
          extraClasse="mt-10"
        />
        <section className="flex flex-col items-center text-center gap-5">
          <h2 className="title-section">Playlist oficial</h2>
          <span className="content-section text-lg! px-10">
            Entre no clima do Lollapalooza Brasil 2025!Curta a playlist oficial
            no Spotify e sinta a vibração do festival antes mesmo de ele
            começar.
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
          <h2 className="title-section">
            Relembre como foi o Lollapalooza 2024
          </h2>
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
        <section className="flex flex-col items-center text-center">
          <h2 className="title-section">Reviva a magia do Lollapalooza 2025</h2>
        </section>
        <section className="embla w-full max-w-screen overflow-hidden mx-auto ">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex">
              {/* Slide 1 */}
              <div className="embla__slide flex-[0_0_100%]">
                <div className="embla__slide__number w-full md:min-h-[56.25rem]!">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/reel/DICz6GcMmXB/?utm_source=ig_embed&ig_rid=7a1bb4d2-4fb0-4a66-99f6-5b34f1638043&ig_mid=B8E10520-606E-46C4-96E1-92C963A64CF0"
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      margin: "1em auto",
                      maxWidth: 540,
                      width: "100%",
                    }}></blockquote>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="embla__slide flex-[0_0_100%]">
                <div className="embla__slide__number w-full md:min-h-[56.25rem]!">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DH2QPnDNGx7/"
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      margin: "1em auto",
                      maxWidth: 540,
                      width: "100%",
                    }}></blockquote>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="embla__slide flex-[0_0_100%]">
                <div className="embla__slide__number w-full md:min-h-[56.25rem]!">
                  <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/p/DH_K1MpRc8B/"
                    data-instgrm-version="14"
                    style={{
                      background: "#FFF",
                      border: 0,
                      margin: "1em auto",
                      maxWidth: 540,
                      width: "100%",
                    }}></blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons & Dots */}
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={`embla__dot${
                    index === selectedIndex ? " embla__dot--selected" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
