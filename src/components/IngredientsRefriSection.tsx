import AccordionDefault from "./AccordionDefault";
import IngredientsRefriCard from "./IngredientsRefriCard";
import { ReactNode } from "react";

import { NutritionItem } from "../types/IngredientsTypes";

interface PropsIngredients {
  urlImage: string;
  alt: string;
  title: string;
  content: string;
  accordionTitle: string;
  cardProps: {
    subtitle: string;
    quantityPerServingValue: string;
    energyValue: string;
    energyValueNumber: ReactNode;
    energyValueNumberValue: ReactNode;
    items: NutritionItem[];
    ingredientes: boolean;
  };
  RowDir: string;
}

export default function IngredientsRefriSection(props: PropsIngredients) {
  return (
    <section className={`flex flex-col gap-10 w-full ${props.RowDir}`}>
      <div className="flex flex-col items-center justify-center h-[24rem] bg-white w-full xl:w-1/2">
        <img
          src={props.urlImage}
          alt={props.alt}
          className="min-w-[7rem] h-[21rem]"
        />
      </div>
      <div className="flex flex-col items-center gap-3 text-left xl:w-1/2">
        <h2 className="title-section w-full">{props.title}</h2>
        <span className="content-section w-full">{props.content}</span>
        <div className="flex flex-col w-full">
          <AccordionDefault
            title={props.accordionTitle}
            content={<IngredientsRefriCard {...props.cardProps} />}
          />
        </div>
      </div>
    </section>
  );
}
