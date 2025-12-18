import HeroStatic from "./components/HeroStatic";
import FormSections from "../shareACoke/components/FormSections";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";

import HeroBannerDesktopSpriteSummer from "../../assets/Sprite/InTheStreet/HeroBannerDesktopSpriteSummer.webp";
import ContentCard3 from "../../assets/Sprite/Summer/ContentCard3.webp";

export default function InTheStreet() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem] py-10">
      <HeroStatic
        bgDesktop={HeroBannerDesktopSpriteSummer}
        bgMobile={HeroBannerDesktopSpriteSummer}
        preTitle="SEU ALÍVIO ESTÁ AQUI"
        title="A refrescância não pode esperar"
        text="Pega uma Sprite e vai."
      />
      <FormSections
        title="Complete seus dados para participar das experiências com Sprite"
        span1="Refresque-se com Sprite!"
      />
      <ComponentDefaultPlusTitle
        titleSecondary="Sobreviva em casa ou no trabalho"
        span="Fique fresco com uma Sprite bem gelada e plantado na frente do ventilador."
        urlButton="/brands/sprite/athome"
        textButton="Estou com muito calor"
        urlImg={ContentCard3}
        alt="banner promocional da sprite"
        flexDirection="flex xl:flex-row-reverse"
      />
    </div>
  );
}
