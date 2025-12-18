import HeroStatic from "./components/HeroStatic";
import FormSections from "../shareACoke/components/FormSections";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";

import HeroBannerDesktop from "../../assets/Sprite/AtHome/HeroBannerDesktop.webp";
import HeroBannerMobile from "../../assets/Sprite/AtHome/HeroBannerMobile.webp";

import MoodCard from "../../assets/Sprite/AtHome/MoodCard.webp";
export default function AtHome() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem] py-10">
      <HeroStatic
        bgDesktop={HeroBannerDesktop}
        bgMobile={HeroBannerMobile}
        preTitle="SOBREVIVA AO CALOR"
        title="Não aguenta mais o calor em casa?"
        text="Refresque-se em casa ou no trabalho com as ofertas especiais da Sprite."
      />
      <FormSections
        title="Complete seus dados para participar das experiências com Sprite"
        span1="Refresque-se com Sprite!"
      />
      <ComponentDefaultPlusTitle
        titleSecondary="Combata o calor fora de casa"
        span="Descubra as experiências mais refrescantes."
        urlButton="/brands/sprite/inthestreet"
        textButton="Estou derretendo"
        urlImg={MoodCard}
        alt="banner promocional da sprite"
        flexDirection="flex xl:flex-row-reverse"
      />
    </div>
  );
}
