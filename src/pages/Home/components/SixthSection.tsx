import { Link } from "react-router";

export default function SixthSection() {
  return (
    <section className="flex flex-col justify-center items-center px-5 pb-14 md:gap-3 lg:max-w-[70rem] ">
      <h2 className="title-section">Conheças nossas marcas</h2>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem]">
          <img
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/christmas/Coca-Cola-original-logo-co.svg"
            alt="Logo Coca-cola"
          />
        </div>
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem]">
          <img
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/br_sprite_logo.png/width2674.png"
            alt="Logo Sprite"
          />
        </div>
        <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] md:h-[22rem] md:w-[22rem] shadow-lg rounded-md p-2.5 lg:w-[14rem] lg:h-[14rem]">
          <img
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/fanta-ccxp/fanta_logo.png/width2674.png"
            alt="Logo Fanta"
          />
        </div>
      </div>
      <Link to="#" className="button-default">
        Veja mais
      </Link>
    </section>
  );
}
