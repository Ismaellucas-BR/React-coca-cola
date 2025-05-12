export default function FourthSection() {
  return (
    <section className="flex flex-col-reverse lg:max-w-[70rem] lg:flex-row-reverse lg:pt-40 lg:pb-20">
      <img
        alt="Rio com mato e montanhas ao fundo"
        className="z-10 lg:w-1/2 rounded-lg"
        src="https://www.coca-cola.com/content/dam/onexp/br/pt/homepage/sust-and-social/v2/latam_home_sustainability_campaign%20card_1280x1024_v2.jpg/width3840.jpg"
      />
      <div className="px-8 py-0 relative -bottom-10 z-50 lg:w-1/2 lg:bottom-14 lg:p-0 lg:-mr-14">
        <div className="flex flex-col rounded-lg shadow-lg p-6 gap-2 z-20 bg-white h-full lg:items-left lg:justify-between lg:p-14">
          <div className="lg:flex lg:flex-col lg:gap-3">
            <h2 className="title-section">Sustentabilidade</h2>
            <span className="content-section">
              A longevidade da Coca‑Cola Brasil só é possível se a nossa forma
              de trabalhar trouxer ganhos para a sociedade e o planeta. É
              imprescindível crescer de forma consciente e sustentável
            </span>
          </div>
          <a href="#" className="button-default">
            Entenda melhor
          </a>
        </div>
      </div>
    </section>
  );
}
