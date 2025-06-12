import SectionFloatContent from "@/components/SectionFloatContent";

export default function Purpose() {
  return (
    <div className="flex flex-col gap-8 pb-10 w-full justify-center items-center  py-10 xl:max-w-[70rem]">
      <div className="flex flex-col gap-5 justify-center items-center max-w-[90%]">
        <h1 className="title-section text-[2rem]!">Propósito e Visão</h1>
        <div className="flex flex-col gap-3 text-left font-Noto">
          <span>
            <strong>Nosso Propósito:</strong> Refrescar o mundo e fazer a
            diferença.
          </span>
          <span>
            <strong>Nossa Visão:</strong> Nossa visão é criar as marcas e
            bebidas que as pessoas amam, para refrescá-las tanto fisicamente
            quanto espiritualmente. E fazer isso de maneiras que criem um
            negócio mais sustentável e um futuro compartilhado melhor, fazendo a
            diferença na vida das pessoas, comunidades e no nosso planeta.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full lg:mt-20">
        <SectionFloatContent
          title="Quem somos"
          span="Saiba mais sobre o propósito e visão da nossa companhia."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/proposito-e-visao/1.jpg/width1024.jpg"
          alt=""
          textButton="Leia mais"
          urlButton="https://www.coca-colacompany.com/content/dam/company/us/en/about-us/purpose-vision/coca-cola-company-purpose-summary.pdf"
          extraClassSection="justify-center items-center flex-col-reverse xl:flex-row"
          extraClassDiv="max-w-[90%] md:w-full lg:-mb-30 xl:-ml-30"
        />
        <SectionFloatContent
          title="Carta aos Funcionários do Presidente e CEO James Quincey"
          span="O propósito está no centro da estratégia de negócios da The Coca‑Cola Company. Saiba mais sobre nosso propósito e visão corporativa em uma carta compartilhada pelo principal executivo da empresa com funcionários ao redor do mundo."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/proposito-e-visao/2.jpg/width1960.jpg"
          alt=""
          textButton="Leia a carta"
          urlButton="https://www.coca-colacompany.com/content/dam/company/us/en/about-us/purpose-vision/james-quincey-letter-to-employees-coca-cola-company-purpose-dec-2023.pdf"
          extraClassSection="justify-center items-center flex-col-reverse xl:flex-row-reverse"
          extraClassDiv="max-w-[90%] md:w-full lg:-mb-30 xl:-mr-30"
        />
      </div>
    </div>
  );
}
