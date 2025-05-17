export default function FifthSection() {
  return (
    <section className="flex flex-col gap-5 px-5 lg:max-w-[70rem] lg:w-full">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="title-section">A fantasia chegou!</h2>
        <span className="content-section">
          Assista ao clipe completo de FANTASÍA com Pabllo Vittar e Nathy Peluso
          ❤️‍🔥❤️‍🔥❤️‍🔥
        </span>
      </div>
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/YytAYddUnDc?si=Fk_nYMskHy_S_AO7"
        className=" rounded-lg md:h-96 lg:h-[39.375rem]"></iframe>
    </section>
  );
}
