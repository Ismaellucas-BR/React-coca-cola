import EmblaCarousel from "../Home/components/carrossel/EmblaCarousel";
import Card from "../Home/components/Card";
import FormSections from "../shareACoke/components/FormSections";
import IngredientsRefriSection from "@/components/IngredientsRefriSection";
import HeroBannerDesktop from "../../assets/Sprite/HeroBannerDesktop.webp";
import HeroBannerMobile from "../../assets/Sprite/HeroBannerMobile.webp";
import SpriteLemonFreshDesktop from "../../assets/Sprite/SpriteLemonFreshDesktop.webp";
import SpriteLemonFreshMobile from "../../assets/Sprite/SpriteLemonFreshMobile.webp";
import ContentCard1Fpo from "../../assets/Sprite/ContentCard1Fpo.webp";
import ContentCardSpriteSummer from "../../assets/Sprite/ContentCardSpriteSummer.webp";
import SpriteSaborLimao from "../../assets/Sprite/SpriteSaborLimao.webp";
import SpriteNoSugar from "../../assets/Sprite/SpriteNoSugar.webp";
import SpriteLemonFreshPet from "../../assets/Sprite/SpriteLemonFreshPet.webp";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem] pb-10 xl:pb-20">
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop: HeroBannerDesktop,
            bgMobile: HeroBannerMobile,
            title: "Um Toque de Frescor Para Seu Dia",
            text: "Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!",
            buttonText: "Saiba mais",
            buttonLink: "/brands/sprite/sprite-e-verao",
            extraClass: "xl:w-1/2!",
          },
          {
            bgDesktop: SpriteLemonFreshDesktop,
            bgMobile: SpriteLemonFreshMobile,
            title: "Sprite Lemon Fresh deixa tudo bem mais leve",
            text: "Conheça a nova cara da leveza.",
          },
        ]}
      />
      <div className="flex flex-col items-center gap-7 lg:gap-10">
        <h2 className="title-section">Experiências</h2>
        <div className="flex flex-col items-center gap-7 lg:gap-10 md:flex-row">
          <Card
            urlImage={ContentCard1Fpo}
            titleCard="Refresque-se com Sprite"
            hCard="h-[17rem] lg:h-[22rem] xl:h-[28rem]"
            content="Em casa ou na rua, o calor pode ser sufocante."
            urlAncora="/brands/sprite/sprite-e-verao"
          />
          <Card
            urlImage={ContentCardSpriteSummer}
            titleCard="Encontre um Chuveirão Sprite"
            hCard="h-[17rem] lg:h-[22rem] xl:h-[28rem]"
            content="Refresque-se fora de casa com o Chuveirão Sprite! Experiência multissensorial neste verão. Registre-se."
            urlAncora="/brands/sprite/inthestreet"
          />
        </div>
      </div>
      <FormSections
        title="Complete seus dados para participar das experiências com Sprite"
        span1="Refresque-se com Sprite!"
      />
      <IngredientsRefriSection
        RowDir="xl:flex-row"
        urlImage={SpriteSaborLimao}
        alt="Uma lata de Sprite"
        title="Sprite"
        content="A cada gole é possível sentir o sabor único do limão, ideal para saciar sua sede. O refrigerante perfeito para te ajudar a se refrescar em qualquer momento do dia."
        accordionTitle="Ver Informação nutricional"
        cardProps={{
          subtitle: "Porção de 200 ml (1 copo)",
          quantityPerServingValue: "| %VD (*)",
          energyValue: "Valor energético",
          energyValueNumber: 81,
          energyValueNumberValue: 4,
          ingredientes: true,
          items: [
            { title: "Carboidratos, dos quais", number: 20, value: 7 },
            { title: "Açúcares", number: 20 },
            { title: "Sódio", number: 15, value: 1 },
            { title: "Fibra alimentar", number: 2, value: 3 },
          ],
        }}
      />
      <IngredientsRefriSection
        RowDir="xl:flex-row-reverse"
        urlImage={SpriteNoSugar}
        alt="Uma lata de Sprite Sem Açucar"
        title="Sprite Sem Açucar"
        content="A maneira mais saborosa e refrescante de curtir o sabor do limão, com uma receita que contém aromas naturais e sem açúcar. O melhor de tudo? Tem o mesmo sabor intenso e clássico do Sprite original."
        accordionTitle="Ver Informação nutricional"
        cardProps={{
          subtitle: "Porção de 200 ml (1 unidade)",
          quantityPerServingValue: "| %VD (*)",
          energyValue: "Valor energético (kcal)",
          energyValueNumber: 0,
          energyValueNumberValue: 0,
          ingredientes: true,
          items: [
            { title: "Carboidratos (g) ", number: 0, value: 0 },
            { title: "Açúcares totais (g)", number: 0 },
            { title: "Açúcares adicionados (g)", number: 0, value: 0 },
            { title: "Sodio (mg)", number: 31, value: 2 },
          ],
        }}
      />
      <IngredientsRefriSection
        RowDir="xl:flex-row"
        urlImage={SpriteLemonFreshPet}
        alt="Uma garrafa de Sprite Lemon Fresh"
        title="Sprite Lemon Fresh"
        content="Refrigerante de limão de baixa caloria levemente gaseificado"
        accordionTitle="Ver Informação nutricional"
        cardProps={{
          subtitle: "Porção: 200 ml (1 unidade)",
          quantityPerServingValue: "%VD*",
          energyValue: "Valor energético (kcal) ",
          energyValueNumber: 0,
          energyValueNumberValue: 0,
          ingredientes: true,
          items: [
            { title: "Carboidratos (g) ", number: 0, value: 0 },
            { title: "Açúcares totais (g)", number: 0 },
            { title: "Açúcares adicionados (g)", number: 0, value: 0 },
            { title: "Sodio (mg)", number: 12, value: 1 },
          ],
        }}
      />
    </div>
  );
}
