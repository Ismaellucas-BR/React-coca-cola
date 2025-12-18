import Card from "./Card";
import CokeStudioCard from "../../../assets/CokeStudioCard.webp";
import ContentCard1Fpo from "../../../assets/Sprite/ContentCard1Fpo.webp";
export default function ThirdSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem]">
      <h2 className="title-section">Experiências</h2>
      <div className=" flex flex-col gap-10 xl:flex-row">
        <Card
          urlImage={CokeStudioCard}
          titleCard="Coke Studio"
          content="Experimenta a magia da música"
          urlAncora="coke-studio"
        />
        <Card
          urlImage={ContentCard1Fpo}
          titleCard="Sobreviva ao calor do verão"
          content="Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!"
          urlAncora="/brands/sprite/sprite-e-verao"
        />
      </div>
    </section>
  );
}
