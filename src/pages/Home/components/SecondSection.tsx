export default function SecondSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <h3 className="font-Noto font-bold text-[1.8rem]">O que há de novo?</h3>
      <div className="flex flex-col-reverse">
        <div className="flex flex-col justify-center items-center text-center gap-3 p-5">
          <h2 className="font-Noto font-bold text-[1.8rem] leading-8">
            Sprite Lemon Fresh deixa tudo bem mais leve
          </h2>
          <span className="font-Noto text-[1.1rem] font-normal">
            Descubra a leveza.
          </span>
          <a
            href="#"
            className="mt-5 w-full lg:w-3/5 text-center border-2 border-black text-black rounded-full shadow px-16 py-2 font-Noto font-bold">
            Saiba mais
          </a>
        </div>
        <div className="px-8 pb-2 pt-5">
          <img
            className="rounded-md"
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/sprite_lemon.jpg/width1338.jpg"
            alt="banner promocional da sprite"
          />
        </div>
      </div>
    </section>
  );
}
