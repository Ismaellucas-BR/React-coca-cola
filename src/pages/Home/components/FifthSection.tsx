export default function FifthSection() {
  return (
    <section className="flex flex-col gap-3 p-5 items-center lg:max-w-[70rem] lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src="https://www.coca-cola.com/content/dam/onexp/br/pt/br-site-loja/card_homepage_loja_br.jpg/width500.jpg"
          alt="homem andando de skate"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-center p-2.5 lg:w-1/2 lg:text-left lg:items-baseline lg:pl-14">
        <h2 className="title-section">Encontre Seu Estilo na Loja Coca‑Cola</h2>
        <span className="content-section">
          Descubra o merchandising oficial na Loja Coca‑Cola. Uma coleção única
          para você celebrar a sua conexão com a felicidade!
        </span>
        <a href="#" target="_blank" className="button-default">
          Entre na Loja
        </a>
      </div>
    </section>
  );
}
