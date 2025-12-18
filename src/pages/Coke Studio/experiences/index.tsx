import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";
import { Link } from "react-router";
import FormSections from "../../shareACoke/components/FormSections";
import heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop from "../../../assets/ShareACoke/xp/heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop.webp";
import HeroCokeStudio2024MusicFansWithCokeBottlesMobile from "../../../assets/ShareACoke/xp/HeroCokeStudio2024MusicFansWithCokeBottlesMobile.webp";
import JaoExclusiveGeneralCardDesktop from "../../../assets/ShareACoke/xp/JaoExclusiveGeneralCardDesktop.webp";
import GameExperienceCokeStudio2024PeggyGou from "../../../assets/ShareACoke/xp/GameExperienceCokeStudio2024PeggyGou.webp";
import GeneralCardCokeStudio2024PeggyGouWithCokeLight from "../../../assets/ShareACoke/xp/GeneralCardCokeStudio2024PeggyGouWithCokeLight.webp";
import ContentCardCokeStudio2024NewJeansWithCoke from "../../../assets/ShareACoke/xp/ContentCardCokeStudio2024NewJeansWithCoke.webp";
import ContentCardCokeStudio2024NewJeansFansAtEvent from "../../../assets/ShareACoke/xp/ContentCardCokeStudio2024NewJeansFansAtEvent.webp";

export default function Experiences() {
  return (
    <div className="flex flex-col items-center pt-30 lg:pt-20">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] lg:my-10 lg:mt-20 nv:max-w-[70rem]">
        <span>
          <Link
            to="coke-studio"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            <span>Coke Studio/</span>
          </Link>
          <Link
            to="coke-studio/experiences"
            className="font-Noto font-semibold text-black">
            <span>Experiências</span>
          </Link>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5 lg:gap-14">
        <MegaBanner
          urlImage={heroCokeStudio2024MusicFansWithCocaColaBottlesDesktop}
          urlImageMobile={HeroCokeStudio2024MusicFansWithCokeBottlesMobile}
          span="COKE STUDIO 2025"
          title="Experiências"
        />
        <ComponentDefaultPlusTitle
          titleMain="Experiências disponíveis"
          subTitle="Viva o extraordinário! Conecte-se com os incríveis artistas do Coke Studio de uma forma nova... É pra aplaudir de pé!"
          titleSecondary="Jão by Coke Studio: A Música Continua!"
          span="A vibe do Jão by Coke Studio fica pra sempre! Reviva os melhores momentos e prepare-se, porque a música não para por aqui."
          urlImg={JaoExclusiveGeneralCardDesktop}
          alt="O cantor Jão cantando, segurando um microfone na mão, cercado pelo logo do Coke Studio com um fundo preto."
          flexDirection="flex xl:flex-row"
        />
        <ComponentDefaultNoTitle
          title="Peggy Gou a caminho de Puglia, o game"
          span="Acompanhe Peggy em sua emocionante jornada até o evento ao vivo do Coke Studio. Desvie dos obstáculos, colete power-ups e curta sua nova música. Está pronto para esta aventura mágica?"
          urlImage={GameExperienceCokeStudio2024PeggyGou}
          alt="Imagem de jogo com personagem segurando discos e uma scooter amarela."
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title="Peggy Gou comanda as pickups na entrevista com o Coke Studio"
          span="Descubra o que não pode faltar no camarim da Peggy Gou às perguntas mais quentes nessa entrevista."
          urlImage={GeneralCardCokeStudio2024PeggyGouWithCokeLight}
          alt="Peggy Gou segurando uma lata de Coca-Cola enquanto veste uma jaqueta de pele vermelha, em um fundo branco."
          flexDirection="flex xl:flex-row-reverse
        "
        />
        <ComponentDefaultNoTitle
          title="Entrevista com NewJeans no Coke Studio"
          span="O pessoal do NewJeans respondeu às perguntas mais populares dos fãs em uma entrevista imperdível diretamente do Coke Studio."
          urlImage={ContentCardCokeStudio2024NewJeansWithCoke}
          alt="NewJeans posando juntas, cada uma segurando uma lata de Coca-Cola."
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title="Coke Studio Ao vivo - part. NewJeans"
          span="Assista ao NewJeans performando seu último sucesso direto do Coke Studio Show em Tóquio."
          urlImage={ContentCardCokeStudio2024NewJeansFansAtEvent}
          alt="Grupo de pessoas curtindo Coca-Cola em um evento."
          flexDirection="flex xl:flex-row-reverse
        "
        />
        <FormSections
          title="Prepare-se para momentos inesquecíveis"
          span1="Fique de olho para saber dos próximos festivais, novidades, experiências e muito mais com Coke Studio. Assine a newsletter para ter acesso."
        />
      </div>
    </div>
  );
}
