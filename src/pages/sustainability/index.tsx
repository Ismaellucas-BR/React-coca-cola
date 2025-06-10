import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Sustainability() {
  return (
    <div className="flex flex-col gap-8 pb-10 w-full justify-center items-center">
      <div className="flex w-full justify-center">
        <img
          src="https://www.coca-cola.com/content/dam/onexp/br/pt/sustainability/new-sustainability/coca_banner-desktop_1440x8101.jpg/width1960.jpg"
          alt=""
          className="hidden lg:flex"
        />
        <img
          src="https://www.coca-cola.com/content/dam/onexp/br/pt/sustainability/new-sustainability/banner_mobile_sust.jpg/width1024.jpg"
          alt=""
          className=" lg:hidden"
        />
      </div>
      <section className=" flex flex-col justify-center items-center gap-8 max-w-[90%] xl:max-w-[70rem] xl:pt-5">
        <div className="flex flex-col justify-center items-center text-center gap-3 xl:gap-5">
          <h1 className="title-section xl:text-[2.375rem]!">
            SUSTENTABILIDADE
          </h1>
          <span className="content-section xl:max-w-[60rem]">
            Como uma companhia total de bebidas, somos guiados pelo nosso
            propósito de refrescar o mundo e fazer a diferença. Nosso objetivo é
            expandir nosso negócio de maneira que impulsione mudanças positivas
            e contribua para um futuro mais sustentável para o nosso planeta.
          </span>
        </div>
        <div className="flex flex-col gap-5 xl:flex-row xl:gap-10">
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src="https://www.coca-cola.com/content/dam/onexp/br/pt/sustainability/actualizacion-dec-2024/banner_agua.png/width3840.png"
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Design
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Aspiramos utilizar entre 35% e 40% de material reciclado* em
                  nossas embalagens primárias (plástico, vidro e alumínio),
                  incluindo aumentar globalmente o uso de plástico reciclado
                  para 30% ou 35% até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Colaborar para colectar​
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Ajudar a garantir a coleta de 70% a 75% do equivalente ao
                  número de garrafas e latas introduzidas no mercado anualmente
                  até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="embalagens">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Objetivo para embalagens
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Nosso objetivo é utilizar entre 35% e 40% de material
                  reciclado* em nossas embalagens primárias (plástico, vidro e
                  alumínio), incluindo aumentar o uso de plástico reciclado
                  globalmente para 30% ou 35% até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="objetivo">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Objetivo de coleta​
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Nosso objetivo é ajudar a garantir a coleta de 70% a 75% do
                  equivalente ao número de garrafas e latas introduzidas no
                  mercado anualmente até 2035.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src="https://www.coca-cola.com/content/dam/onexp/mx/es/sustainability/sustainability-new/empaques.png/width1024.png"
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Design
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Aspiramos utilizar entre 35% e 40% de material reciclado* em
                  nossas embalagens primárias (plástico, vidro e alumínio),
                  incluindo aumentar globalmente o uso de plástico reciclado
                  para 30% ou 35% até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Colaborar para colectar​
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Ajudar a garantir a coleta de 70% a 75% do equivalente ao
                  número de garrafas e latas introduzidas no mercado anualmente
                  até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="embalagens">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Objetivo para embalagens
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Nosso objetivo é utilizar entre 35% e 40% de material
                  reciclado* em nossas embalagens primárias (plástico, vidro e
                  alumínio), incluindo aumentar o uso de plástico reciclado
                  globalmente para 30% ou 35% até 2035.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="objetivo">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Objetivo de coleta​
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Nosso objetivo é ajudar a garantir a coleta de 70% a 75% do
                  equivalente ao número de garrafas e latas introduzidas no
                  mercado anualmente até 2035.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-5 xl:w-1/3">
            <img
              src="https://www.coca-cola.com/content/dam/onexp/mx/es/sustainability/sustainability-new/portafolio-de-productos.png/width1024.png"
              alt="Água."
              className="rounded-2xl border-b-[50px] border-white"
            />
            <Accordion type="single" collapsible>
              <AccordionItem value="design">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Reduzindo emissões
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Estabelecemos uma meta para reduzir nossas emissões de Alcance
                  1, 2 e 3 em linha com uma trajetória de 1.5°C para o ano de
                  2035, partindo de uma linha de base de 2019*.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="coletar">
                <AccordionTrigger className="font-Noto font-bold text-2xl border-b-2 border-[rgb(213, 213, 213)] rounded-none [&>svg]:size-8 [&>svg]:text-black">
                  Objetivo
                </AccordionTrigger>
                <AccordionContent className="content-section py-5">
                  Nosso objetivo é reduzir nossas emissões de Alcance 1, 2 e 3
                  em linha com uma trajetória de 1.5°C para o ano de 2035,
                  partindo de uma linha de base de 2019**.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
