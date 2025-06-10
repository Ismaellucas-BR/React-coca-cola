import SectionFloatContent from "@/components/SectionFloatContent";

export default function KnowUs() {
  return (
    <div className="flex flex-col gap-2 items-center  w-full py-10 xl:py-15">
      <div
        className="relative w-full max-w-[90%] h-[35.5rem] bg-center bg-cover bg-no-repeat flex justify-center items-center lg:max-w-[80rem]  xl:max-w-[80rem] rounded-xl"
        style={{
          backgroundImage:
            'url("https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/es_mexico_nuestra_compania_campaign_card_1280x1024.jpg/width3840.jpg")',
        }}>
        <div className="absolute inset-0 bg-black/50 z-0 rounded-xl" />
        <h1 className="title-section text-white! text-[1.5rem]! z-10 lg:text-[2.375rem]!">
          NOSSA COMPANHIA
        </h1>
      </div>
      <div className="flex flex-col max-w-[90%] gap-3 mt-5">
        <span className="content-section">
          Em 8 de maio de 1886, o Dr. John Pemberton levou seu xarope
          aperfeiçoado para a Farmácia Jacobs no centro de Atlanta, onde foi
          servido o primeiro copo de Coca‑Cola. A partir dessa bebida icônica,
          evoluímos para uma empresa de bebidas completa. Mais de 2,2 bilhões de
          unidades de nossas bebidas são apreciadas em mais de 200 países e
          territórios todos os dias.
        </span>
        <span className="content-section">
          Estamos constantemente transformando nosso portfólio, em ações que vão
          desde a redução de açúcar adicionado em nossas bebidas até a
          introdução de novos produtos inovadores no mercado. Buscamos impactar
          positivamente a vida das pessoas, as comunidades e o planeta por meio
          da reposição de água, reciclagem de embalagens, práticas de
          fornecimento sustentável e redução de emissões de carbono em toda
          nossa cadeia de valor. Junto com nossos parceiros engarrafadores,
          empregamos mais de 700.000 pessoas, ajudando a trazer oportunidades
          econômica para comunidades locais em todo o mundo.
        </span>
      </div>
      <section className="flex flex-col gap-10 lg:gap-5">
        <SectionFloatContent
          title="
        Nosso Propósito é Refrescar o Mundo e Fazer a Diferença.
    "
          span="Estamos comprometidos em oferecer às pessoas as bebidas que desejam, em uma variedade de categorias e tamanhos, enquanto promovemos soluções sustentáveis que fortalecem a resiliência do nosso negócio e criam mudanças positivas para o planeta."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/0.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title="
        Empresa Total de Bebidas
    "
          span="Nosso portfólio de bebidas se expandiu para mais de 200 marcas e milhares de bebidas ao redor do mundo, desde refrigerantes e águas até cafés e chás. Saiba mais sobre nossas marcas e nosso compromisso com produtos de qualidade."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/1.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title="
        
        Nossas Pessoas São Tão Diversas Quanto Nossas Comunidades
    
    "
          span="Junto com nossos parceiros engarrafadores, empregamos mais de 700.000 pessoas, ajudando a trazer oportunidade econômica para comunidades locais em todo o mundo. éticas."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/2.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title="
        
        Priorizando a Sustentabilidade em Nossas Operações e Comunidades
    
    "
          span="Fazemos negócios da maneira correta, não apenas da maneira mais fácil. Saiba mais sobre nossas práticas de trabalho sustentáveis e éticas."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/3.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title="Nossas Pessoas Movem Nosso Propósito
    "
          span="Como uma empresa orientada por propósito, ajudamos a criar um futuro melhor para todos aqueles que são alcançados por nossas marcas e sistema de negócios, trabalhando para proporcionar acesso a oportunidades igualitárias e promovendo um senso de pertencimento tanto em nossos locais de trabalho quanto nas comunidades que servimos."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/4.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
        <SectionFloatContent
          title="O Sistema Coca‑Cola ."
          span="Engarrafadores locais trabalham conosco para levar nossas bebidas da marca Coca‑Cola para onde quer que você esteja no mundo. Mais de 225 parceiros engarrafadores em cerca de 900 plantas de envase compõem o sistema Coca‑Cola e nos ajudam a fornecer bebidas globalmente."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/about-us/nos-conheca/5.jpg/width3840.jpg"
          alt=""
          extraClassSection="flex flex-col-reverse justify-center items-center"
          extraClassDiv="-bottom-10! max-w-[90%]"
        />
      </section>
    </div>
  );
}
