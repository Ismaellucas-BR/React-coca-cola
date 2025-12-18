import HeroStatic from "./components/HeroStatic";
import Card from "../Home/components/Card";
import FormSections from "../shareACoke/components/FormSections";

import HeroBannerDesktop from "../../assets/Sprite/HeroBannerDesktop.webp";
import HeroBannerMobile from "../../assets/Sprite/HeroBannerMobile.webp";

import ContentCard3 from "../../assets/Sprite/Summer/ContentCard3.webp";
import ContentCard2 from "../../assets/Sprite/Summer/ContentCard2.webp";
export default function Summer() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem] py-10">
      <HeroStatic
        bgDesktop={HeroBannerDesktop}
        bgMobile={HeroBannerMobile}
        title="Um Toque de Frescor Para Seu Dia"
        text="Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!"
      />
      <FormSections
        title="Complete seus dados para participar das experiências com Sprite"
        span1="Refresque-se com Sprite!"
      />
      <div className="flex flex-col items-center gap-7 lg:gap-10">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="title-section">Seu Alívio para o Calor</h2>
          <span className="text-base text-center font-normal leading-5">
            Cada calor pede um tipo diferente de refresco. Seja em casa, no
            trabalho ou curtindo a vida ao ar livre Sprite está aqui para te
            resgatar. Escolha seu tipo de calor e descubra como aproveitar ao
            máximo o verão com Sprite.
          </span>
        </div>
        <div className="flex flex-col items-center gap-7 lg:gap-10 lg:flex-row">
          <Card
            urlImage={ContentCard3}
            titleCard="Sobreviva em casa ou no trabalho"
            hCard="h-[17rem] md:h-[33rem] lg:h-[22rem] xl:h-[28rem]"
            content="Fique fresco com uma Sprite bem gelada e plantado na frente do ventilador. Aqui você vai encontrar os pontos de lojas mais verdes, os nossos parceiros e lojas com as ofertas mais refrescantes."
            buttonText="Estou com muito calor"
            urlAncora="/brands/sprite/athome"
          />

          <Card
            urlImage={ContentCard2}
            titleCard="Combata o calor fora de casa"
            hCard="h-[17rem] md:h-[33rem] lg:h-[22rem] xl:h-[28rem]"
            content="Descubra as experiências mais refrescantes. Todos os detalhes do eventos, datas, locais e atividades que Sprite vai dar aquele refresco necessário no seu verão."
            buttonText="Estou derretendo"
            urlAncora="/brands/sprite/inthestreet"
          />
        </div>
      </div>
    </div>
  );
}
