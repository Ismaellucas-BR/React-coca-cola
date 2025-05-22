import FourthSection from "./components/FourthSection";
import FormSections from "./components/FormSections";
import ThirdSection from "./components/ThirdSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";

export default function ShareACoke() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 ">
      <section className=" w-full flex justify-center pt-16">
        <div className="relative embla__slide__number first-slide1-1  w-full  text-white font-Noto lg:justify-center lg:text-left lg:items-start bg-cover bg-no-repeat bg-center min-h-[34.375rem] max-w-11/12 md:h-[118.75rem]  lg:w-full">
          <div className="absolute rounded-xl inset-0 bg-gradient-to-t  from-black/40 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/60"></div>
          <div className="flex flex-col items-end justify-end text-center gap-4 pb-1.5 h-full z-10 md:items-center md:h-[45rem] lg:justify-center lg:text-left lg:items-baseline lg:w-1/3 lg:ml-16">
            <h2 className="text-[1.57rem] md:text-[2rem] lg:text-[2rem] leading-8 lg:leading-10 font-bold ">
              A magia está em compartilhar
            </h2>
            <div className="font-Noto text-base font-normal">
              <p className="text-[1rem] leading-6 md:text-[1.2rem] lg:text-[1rem]">
                Coca‑Cola chega em forma de nomes e muito mais pra surpreender
                quem você quiser.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FormSections
        title="Fique por dentro de tudo!"
        span1="Seja o primeiro a receber novidades e participar de novas experiências
          junto com a Coca-Cola."
      />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </div>
  );
}
