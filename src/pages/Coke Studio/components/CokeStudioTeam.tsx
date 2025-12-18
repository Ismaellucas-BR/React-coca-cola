import CokeStudio2024Newjeans from "../../../assets/CokeStudio/CokeStudio2024Newjeans.webp";
import CokeStudio2024KarolG from "../../../assets/CokeStudio/CokeStudio2024KarolG.webp";
import CokeStudio2024PeggyGou from "../../../assets/CokeStudio/CokeStudio2024PeggyGou.webp";
import CokeStudio24RockInRio from "../../../assets/CokeStudio/CokeStudio24RockInRio.webp";
import CokeStudio24Lolla25 from "../../../assets/CokeStudio/CokeStudio24Lolla25.webp";
export default function CokeStudioTeam() {
  return (
    <section className="flex flex-col items-center text-center gap-5 max-w-screen lg:max-w-[46rem]">
      <h2 className="title-section">Nosso time Coke Studio</h2>
      <span className="content-section md:px-20">
        Continue com a gente para mais anúncios e atualizações dos lançamentos,
        experiências e muito mais nessa temporada de 2024 do Coke Studio.
      </span>
      <div className="flex flex-wrap gap-7 justify-center items-center mt-3  pb-20">
        <div className="flex flex-wrap flex-col items-center justify-center gap-3  w-[40%] md:w-[45%]  lg:w-[30%]">
          <img
            src={CokeStudio2024Newjeans}
            alt="NewJeans vestindo roupas casuais e estilosas, incluindo moletons, jaquetas esportivas e bandanas. Eles estão sorrindo e posando juntos em frente a um fundo branco, transmitindo um espírito jovem e descontraído."
            className="rounded-xl shadow-2xl"
          />
          <h3 className="font-Noto font-semibold  underline">NewJeans</h3>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
          <img
            src={CokeStudio2024KarolG}
            alt="Karol G com cabelo longo e ondulado em tom rosa claro, vestindo um top de biquíni branco decorado com tachas prateadas e uma blusa rosa amarrada na frente. Ela segura uma garrafa de vidro de Coca-Cola com o rótulo vermelho visível, enquanto posa confiante contra um fundo lilás claro."
            className="rounded-xl shadow-2xl"
          />
          <h3 className="font-Noto font-semibold  underline">Karol G</h3>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
          <img
            src={CokeStudio2024PeggyGou}
            alt="Peggy Gou usando um casaco vermelho felpudo e um top preto, com várias tatuagens visíveis no colo e pescoço. O fundo branco destaca o visual vibrante e ousado."
            className="rounded-xl shadow-2xl"
          />
          <h3 className="font-Noto font-semibold  underline">Peggy Gou</h3>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
          <img
            src={CokeStudio24RockInRio}
            alt="Pessoa com óculos futuristas e uma garrafa de Coca-Cola em um ambiente de festa."
            className="rounded-xl shadow-2xl"
          />
          <h3 className="font-Noto font-semibold  underline">Rock in Rio</h3>
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 w-[40%] md:w-[45%] lg:w-[30%]">
          <img
            src={CokeStudio24Lolla25}
            alt="Imagem promocional com o texto 'Promoção Você VIP no Lolla Brasil', acompanhado dos logotipos da Coca-Cola e do Lollapalooza Brasil. O fundo é preto com linhas vermelhas onduladas, criando um efeito dinâmico."
            className="rounded-xl shadow-2xl"
          />
          <h3 className="font-Noto font-semibold  underline">
            Lollapalooza BR
          </h3>
        </div>
      </div>
    </section>
  );
}
