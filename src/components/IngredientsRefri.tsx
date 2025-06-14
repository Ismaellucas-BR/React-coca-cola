interface PropsIngredients {
  urlImage: string;
  alt: string;
  title: string;
  content: string;
  headerAccodion: string;
  titleAccodion: string;
  subtitle: string;
  quantityPerServing: string;
  energyValue: string;
  energyValueNumber: Number;
  energyValueNumberValue: Number;
  item1Title: string;
  item1Number: Number;
  item1Value: Number;
  item2Title: string;
  item2Number: Number;
  item2Value: Number;
  item3Title: string;
  item3Number: Number;
  item3Value: Number;
  item4Title: string;
  item4Number: Number;
  item4Value: Number;
}

export default function IngredientsRefri(props: PropsIngredients) {
  return (
    <section>
      <div className=" xl:w-1/2">
        {" "}
        <img src={props.urlImage} alt={props.alt} />
      </div>
      <div className=" xl:w-1/2">
        <h2>{props.title}</h2>
      </div>
    </section>
  );
}
