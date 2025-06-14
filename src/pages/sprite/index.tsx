import FloatBar from "@/components/FloatBar";
import EmblaCarousel from "../Home/components/carrossel/EmblaCarousel";
import Card from "../Home/components/Card";
import FormSections from "../shareACoke/components/FormSections";
import IngredientsRefriSection from "@/components/IngredientsRefriSection";

export default function index() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem]">
      <FloatBar />
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/hero_banner_desktop.jpg/width1024.jpg",
            title: "Um Toque de Frescor Para Seu Dia",
            text: "Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!",
            buttonText: "Saiba mais",
            buttonLink: "share-a-coke",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/kv_1.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/kv_2.jpg/width1024.jpg",
            title: "Sprite Lemon Fresh deixa tudo bem mais leve",
            text: "Conheça a nova cara da leveza.",
          },
        ]}
      />
      <div className="flex flex-col items-center gap-7 lg:gap-10">
        <h2 className="title-section">Experiências</h2>
        <Card
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/content_card_1_fpo.jpg/width1024.jpg"
          titleCard="Refresque-se com Sprite"
          content="Em casa ou na rua, o calor pode ser sufocante."
          urlAncora="/2"
        />
        <Card
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/content_card_sprite_summer.jpg/width3840.jpg"
          titleCard="Encontre um Chuveirão Sprite"
          content="Refresque-se fora de casa com o Chuveirão Sprite! Experiência multissensorial neste verão. Registre-se."
          urlAncora="/1"
        />
      </div>
      <FormSections
        title="Complete seus dados para participar das experiências com Sprite"
        span1="Refresque-se com Sprite!"
      />
      <IngredientsRefriSection
        urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/brand-landing/sprite/SPRITE%20ORIGINAL%20234%20x%20700.png/width3840.png"
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
    </div>
  );
}
