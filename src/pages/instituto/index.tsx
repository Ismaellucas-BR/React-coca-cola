import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import SectionFloatContent from "@/components/SectionFloatContent";

export default function Instituto() {
  return (
    <div className="flex flex-col gap-2 items-center  w-full">
      <div
        className="relative w-full lg:max-w-[90%] h-[35.5rem] bg-center bg-cover bg-no-repeat flex justify-center items-center xl:max-w-[90rem]"
        style={{
          backgroundImage:
            'url("https://www.coca-cola.com/content/dam/onexp/br/pt/instituto/2023/845a2324.jpg/width3840.jpg")',
        }}>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <h1 className="title-section text-white! text-[1.5rem]! z-10">
          De milhares para milhões
        </h1>
      </div>
      <section className="flex flex-col justify-center items-center xl:max-w-[70rem]">
        <div className="flex flex-col gap-15 py-10 max-w-[90%] justify-center items-center">
          <span className="content-section">
            {" "}
            Somos o Instituto Coca‑Cola Brasil, mas pode nos chamar de ICCB.
            Também somos uma Organização da Sociedade Civil de Interesse Público
            (OSCIP) que atua como agente de transformação social para reduzir as
            desigualdades e contribuir para o desenvolvimento socioeconômico do
            país, potencializado por parcerias e pelo Sistema Coca‑Cola.
            Acreditamos que o único caminho para quebrar ciclos de pobreza é por
            meio do fomento à diversidade, equidade e inclusão e, por isso,
            atuamos promovendo empregabilidade e empoderamento econômico de
            jovens.{" "}
          </span>
          <img
            src="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/instituto-coca-cola-brasil/infografico_dados_1920x1080.jpg/width3840.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-16 justify-center items-center md:gap-5">
          <SectionFloatContent
            title="Confira nossos resultados"
            span="Está disponível o Relatório Institucional de 2024 do Instituto Coca‑Cola Brasil (ICCB). Nele, você encontra nossos resultados e iniciativas para empoderar economicamente 5 milhões de pessoas até 2030, além de muitas histórias e curiosidades sobre nossa atuação. Vamos juntos?"
            urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/instituto-coca-cola-brasil/relatorio_institucional_2024_nueva.jpg/width3840.jpg"
            alt=""
            textButton="Baixe aqui"
            urlButton="#"
            extraClassSection="flex flex-col justify-center items-center xl:flex-row! xl:mt-10! xl:pb-0"
            extraClassDiv="-top-10 xl:top-0 xl:-left-10 max-w-[90%] xl:mt-0"
          />
          <ComponentDefaultPlusTitle
            titleMain="Nossas iniciativas "
            titleSecondary="
        Coletivo Online
    "
            span="Maior programa de empregabilidade do ICCB que impulsiona e prepara jovens acima de 16 anos e de todo Brasil para o mercado de trabalho e os conecta a oportunidades de trabalho nas nossas empresas parceiras. Tudo para estar lado a lado de jovens que sonham em conquistar o primeiro emprego. É online, de curta duração, gratuito e feito para você."
            urlImg="https://www.coca-cola.com/content/dam/onexp/br/pt/instituto/2023/pagina_inicial_coletivo_online_rev_marcelly.jpg/width3840.jpg"
            alt=""
            textButton="Comece o seu sonho agora "
            urlButton="#"
            flexDirection="flex xl:flex-row"
          />
          <ComponentDefaultNoTitle
            title="
        Plataforma Coletivo Jovem
    "
            span="Plataforma que reúne diversas iniciativas de capacitação profissional e conexão com oportunidades de trabalho nas empresas parceiras."
            urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/history/fotos-2022/pagina_inicial_coletivo_jovem_rev_marcelly.jpg/width3840.jpg"
            alt=""
            textButton="Veja as iniciativas "
            urlButton="#"
            flexDirection="flex xl:flex-row"
          />
          <SectionFloatContent
            title="Rumo aos milhões"
            span="Reconhecidos por nossa inovação social e capacidade de escala, queremos contribuir para o empoderamento econômico de 5 milhões de pessoas até 2030. Nos propomos a criar oportunidades no mundo do trabalho para jovens, prioritariamente negros e mulheres em situação de vulnerabilidade socioeconômica, que serão potencializadas por parcerias, pelo Sistema Coca Cola e pela sua participação."
            urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/history/fotos-2022/pagina_inicial_rumo_aos_milhoes.jpg/width3840.jpg"
            alt=""
            extraClassSection="flex flex-col justify-center items-center xl:flex-row"
            extraClassDiv="-top-10 xl:min-h-[34.5rem]  max-w-[90%] xl:mt-0! xl:-ml-10"
          />
        </div>
      </section>
    </div>
  );
}
