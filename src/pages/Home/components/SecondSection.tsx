export default function SecondSection() {
  return (
    <section className="flex flex-col justify-center items-center lg:max-w-[70rem] w-full">
      <h3 className="font-Noto font-bold text-[1.8rem] lg:text-[2rem] text-black">
        O que há de novo?
      </h3>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col justify-center items-center text-black text-center gap-3 p-5 lg:w-1/2 lg:text-left lg:items-baseline lg:pr-16 ">
          <h2 className="font-Noto font-bold text-[1.8rem] leading-8 lg:text-[2rem] lg:leading-9">
            Sprite Lemon Fresh deixa tudo bem mais leve
          </h2>
          <span className="font-Noto text-[1.1rem] font-normal">
            Descubra a leveza.
          </span>
          <a
            href="#"
            className="mt-5 w-full lg:w-3/5 text-center border-2 border-black text-black rounded-full shadow px-16 py-2 font-Noto font-bold lg:py-1">
            Saiba mais
          </a>
        </div>
        <div className="px-8 pb-2 pt-5 lg:w-1/2">
          <img
            className="rounded-lg"
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/sprite_lemon.jpg/width1338.jpg"
            alt="banner promocional da sprite"
          />
        </div>
      </div>
    </section>
  );
}
