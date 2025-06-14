import { ReactNode } from "react";

import { NutritionItem } from "../types/IngredientsTypes";

interface PropsIngredientsCard {
  subtitle: string;
  quantityPerServingValue: string;
  energyValue: string;
  energyValueNumber: ReactNode;
  energyValueNumberValue: ReactNode;
  items: NutritionItem[]; // <- lista dinâmica de itens
  ingredientes: boolean;
}

export default function IngredientsRefriCard(props: PropsIngredientsCard) {
  return (
    <div className="flex flex-col w-full bg-white p-7">
      <div className="flex flex-col gap-3 border-b-4 border-gray-200 text-left">
        <h2 className="title-section text-2xl!">Informação nutricional</h2>
        <h3 className="text-base font-bold pb-3">{props.subtitle}</h3>
      </div>

      <div className="flex justify-between gap-3 border-b border-gray-200 text-base font-bold py-3 w-full!">
        <span>Quantidade por porção</span>
        {props.quantityPerServingValue}
      </div>

      <div className="flex justify-between gap-3 border-b border-gray-200 text-base font-bold py-3 w-full!">
        <div className="flex gap-2">
          {props.energyValue} {props.energyValueNumber}
        </div>
        {props.energyValueNumberValue}
      </div>

      {/* Renderiza todos os itens dinamicamente */}
      <div className="flex flex-col gap-3 border-b border-gray-200">
        {props.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-3 border-b border-gray-200">
            <div className="flex gap-2">
              {item.title} {item.number}
            </div>
            {item.value}
          </div>
        ))}
      </div>

      {props.ingredientes && (
        <div>
          <h2 className="title-section">Ingredientes</h2>
          <span className="content-section border-b border-gray-200 pb-5">
            Não contém quantidade significativa de proteína, gorduras total,
            gorduras saturada, gorduras trans e fibra alimentar
          </span>
          <span className="content-section">
            Valores diários com base em uma dieta de 2000 kcal ou 8400kj. Seus
            valores diários podem ser maiores ou menores dependendo de suas
            necessidades energéticas (**) VD não estabelecido.
          </span>
        </div>
      )}
    </div>
  );
}
