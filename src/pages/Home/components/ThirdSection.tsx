import Card from "./Card";

export default function ThirdSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 px-8 lg:max-w-[70rem]">
      <h2 className="title-section">Experiências</h2>
      <div className=" flex flex-col gap-10 xl:flex-row">
        <Card
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/campaign-cards/coke_studio_card.jpg/width1024.jpg"
          titleCard="Coke Studio"
          content="Experimenta a magia da música"
          urlAncora="coke-studio"
        />
        <Card
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/sprite-summer/content_card_1_fpo.jpg/width1024.jpg"
          titleCard="Sobreviva ao calor do verão"
          content="Não deixe seu ânimo derreter com sorvete no asfalto, refresque-se!"
          urlAncora="#"
        />
      </div>
    </section>
  );
}
