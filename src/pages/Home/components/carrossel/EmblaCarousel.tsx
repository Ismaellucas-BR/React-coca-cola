import React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

export type Slide = {
  bgDesktop?: string;
  bgMobile?: string;
  title?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  videoUrl?: string;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  // Função para pegar imagem certa de acordo com a largura
  const getBackground = (slide: Slide) => {
    if (typeof window === "undefined") return slide.bgDesktop ?? "";
    return window.innerWidth < 1024
      ? slide.bgMobile ?? slide.bgDesktop ?? ""
      : slide.bgDesktop ?? "";
  };

  return (
    <section className="embla w-full max-w-screen overflow-hidden mx-auto">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              {slide.videoUrl ? (
                <div className="embla__slide__number w-full min-h-[34.375rem]">
                  <iframe
                    className="w-full h-full rounded-3xl"
                    src={slide.videoUrl}
                    title={`Video Slide ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              ) : (
                <div
                  className="relative embla__slide__number bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url('${getBackground(slide)}')`,
                  }}>
                  <div className="absolute inset-0 bg-black/30 z-0 rounded-lg" />
                  <div className="relative flex flex-col items-center justify-end w-full h-full text-center gap-4 pb-1.5 text-white font-Noto z-10 lg:ml-15 lg:w-1/2 lg:justify-center lg:text-left lg:items-start nv:w-1/3">
                    {slide.title && (
                      <h2 className="text-[1.57rem] lg:text-[2.375rem] leading-8 lg:leading-none font-bold">
                        {slide.title}
                      </h2>
                    )}
                    {slide.text && (
                      <p className="text-[1.2rem] lg:text-[1rem] leading-6">
                        {slide.text}
                      </p>
                    )}
                    {slide.buttonText && slide.buttonLink && (
                      <a
                        href={slide.buttonLink}
                        className="w-full lg:w-3/5 text-center bg-white text-black rounded-full shadow px-16 py-2 font-bold">
                        {slide.buttonText}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons & Dots */}
      <div className="embla__controls w-full! flex! justify-center! mt-4">
        <div className="embla__dots flex! justify-center!">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-4 h-4 rounded-full border border-black bg-[#eeeeee] flex items-center justify-center mx-1 transition-all duration-300
          ${
            index === selectedIndex
              ? "after:content-[''] after:w-2 after:h-2 after:rounded-full after:bg-black"
              : ""
          }
        `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
