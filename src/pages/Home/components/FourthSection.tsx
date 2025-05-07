export default function FourthSection() {
  return (
    <section className="flex flex-col-reverse">
      <img
        alt="Rio com mato e montanhas ao fundo"
        className="z-10"
        src="https://www.coca-cola.com/content/dam/onexp/br/pt/homepage/sust-and-social/v2/latam_home_sustainability_campaign%20card_1280x1024_v2.jpg/width3840.jpg"
      />
      <div className="p-8 pb-0 relative -bottom-10 z-50">
        <div className="flex flex-col rounded-md shadow-lg p-6 gap-2 z-20 bg-white">
          <h2 className="title-section">Sustentabilidade</h2>
          <span className="content-section">
            A longevidade da Coca‑Cola Brasil só é possível se a nossa forma de
            trabalhar trouxer ganhos para a sociedade e o planeta. É
            imprescindível crescer de forma consciente e sustentável
          </span>
          <a href="#" className="button-default">
            Entenda melhor
          </a>
        </div>
      </div>
    </section>
  );
}
