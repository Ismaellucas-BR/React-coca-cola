import BrasilCardSpotify from "../../../assets/ShareACoke/BrasilCardSpotify.webp";
export default function ThirdSection() {
  return (
    <section className="section-main gap-5  lg:!flex-row lg:w-full lg:gap-28 lg:max-w-[70rem]">
      <div className="lg:w-2/4">
        <img
          src={BrasilCardSpotify}
          alt="Tres pessoas brindando com coca-cola"
          className="rounded-lg lg:w-full"
        />
      </div>
      <div className="flex flex-col gap-5 lg:w-2/4 lg:justify-center">
        <h2 className="title-section text-center lg:text-left lg:text-[2rem] lg:leading-14">
          Leve o nível do seu próximo encontro com a galera a outro nível
        </h2>
        <span className="content-section text-center lg:text-left">
          Coca‑Cola e Spotify se juntam mais uma vez pra criar a trilha sonora
          dos melhores momentos com a galera.
        </span>
      </div>
    </section>
  );
}
