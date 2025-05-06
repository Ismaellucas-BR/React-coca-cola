import React from "react";
import type { EmblaOptionsType } from "embla-carousel";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons.tsx";
import useEmblaCarousel from "embla-carousel-react";

type Slide = {
  image: string;
  text: string;
};

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__number first-slide1 bg-cover bg-no-repeat bg-center">
              <div className="flex flex-col items-center justify-end w-full h-full text-center gap-4 pb-1.5 text-white font-Noto z-10 lg:ml-15 lg:w-1/2 lg:justify-center lg:text-left lg:items-start">
                <h2 className="text-[1.57rem] lg:text-[2.375rem] leading-8 lg:leading-none font-bold">
                  Descubra os ingredientes para a conexão perfeita:
                </h2>
                <div className="font-Noto text-base font-normal">
                  <p className="text-[1.2rem] leading-6 lg:text-[1rem]">
                    Latas personalizadas, jogos, músicas e muito mais.
                  </p>
                </div>
                <a
                  href="#"
                  className="w-full lg:w-3/5 text-center bg-white text-black rounded-full shadow px-16 py-2 font-Noto font-bold">
                  Saiba mais
                </a>
              </div>
              <div
                className="absolute inset-0 bg-black/30 z-2 rounded-lg first-overlay left-[1rem]
"></div>
            </div>
          </div>
          <div className="embla__slide ">
            <div className="relative w-full embla__slide__number first-slide2 bg-cover bg-no-repeat bg-center">
              <div className="flex flex-col items-center text-center gap-4 text-white font-Noto z-10 lg:ml-15 w-full lg:w-1/2 lg:text-left lg:items-start">
                <p className=" uppercase text-sm font-semibold">
                  Sprite E Verão
                </p>
                <h2 className="text-[1.57rem] lg:text-[2.375rem] leading-8 lg:leading-none font-bold">
                  Refresque-se do Calor do Verão
                </h2>
                <div className="font-Noto text-base font-normal text-[1.2rem] leading-6">
                  <p>Em casa ou na rua, o verão pode ser sufocante.</p>
                  <p>Sprite ajuda a manter o frescor.</p>
                </div>
                <a
                  href="#"
                  className="w-full lg:w-3/5 text-center bg-white text-black rounded-full shadow px-16 py-2 font-Noto font-bold">
                  Saiba mais
                </a>
              </div>
              <div className="absolute inset-0 bg-black/30 z-2 rounded-lg"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number first-slide3 bg-cover bg-no-repeat bg-center">
              <div className="flex flex-col items-center text-center gap-4 text-white font-Noto z-10 lg:ml-15 w-full lg:w-1/2 lg:items-start">
                <h2 className="text-[1.6rem] lg:text-[2.375rem] leading-none font-bold font-Noto text-base ">
                  The Athletes Code
                </h2>
                <a
                  href="#"
                  className="w-full lg:w-3/5 text-center bg-white text-black rounded-full shadow px-16 py-2 font-Noto font-bold">
                  Saiba mais
                </a>
              </div>
              <div
                className="absolute inset-0 bg-black/30 z-2 rounded-lg first-overlay left-[1rem]
"></div>
            </div>
          </div>
          <div className="embla__slide">
            <div className="embla__slide__number ">
              <iframe
                className="w-full min-h-[34.375rem] rounded-3xl"
                src="https://www.youtube.com/embed/0Ab-F7Y3IXc?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=0Ab-F7Y3IXc&cc_load_policy=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_: any, index: number) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
