import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";
import { Link } from "react-router";
import FormSections from "../shareACoke/components/FormSections";

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
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero_cokestudio2024_music-fans-with-coca-cola-bottles_desktop.jpg/width3840.jpg"
          urlImageMobile="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero_cokestudio2024_music-fans-with-coca-cola-bottles_mobile.jpg/width1024.jpg"
          span="COKE STUDIO 2025"
          title="Experiências"
        />
        <ComponentDefaultPlusTitle
          titleMain="Experiências disponíveis"
          subTitle="Viva o extraordinário! Conecte-se com os incríveis artistas do Coke Studio de uma forma nova... É pra aplaudir de pé!"
          titleSecondary="Jão by Coke Studio: A Música Continua!"
          span="A vibe do Jão by Coke Studio fica pra sempre! Reviva os melhores momentos e prepare-se, porque a música não para por aqui."
          textButton="Saiba mais"
          urlButton="#"
          urlImg="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/general-card-desktop.jpg/width1960.jpg"
          alt="O cantor Jão cantando, segurando um microfone na mão, cercado pelo logo do Coke Studio com um fundo preto."
          flexDirection="flex xl:flex-row"
        />
        <ComponentDefaultNoTitle
          title="Peggy Gou a caminho de Puglia, o game"
          span="Acompanhe Peggy em sua emocionante jornada até o evento ao vivo do Coke Studio. Desvie dos obstáculos, colete power-ups e curta sua nova música. Está pronto para esta aventura mágica?"
          urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/game-experience_coke-studio-2024_peggy-gou.png/width1960.png"
          alt="Imagem de jogo com personagem segurando discos e uma scooter amarela."
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title="Peggy Gou comanda as pickups na entrevista com o Coke Studio"
          span="Descubra o que não pode faltar no camarim da Peggy Gou às perguntas mais quentes nessa entrevista."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/general-card_cokestudio2024_peggy-gou-with-coca-cola_light.jpg/width3840.jpg"
          urlButton="#"
          textButton="Assistir agora"
          alt="Peggy Gou segurando uma lata de Coca-Cola enquanto veste uma jaqueta de pele vermelha, em um fundo branco."
          flexDirection="flex xl:flex-row-reverse
        "
        />
        <ComponentDefaultNoTitle
          title="Entrevista com NewJeans no Coke Studio"
          span="O pessoal do NewJeans respondeu às perguntas mais populares dos fãs em uma entrevista imperdível diretamente do Coke Studio."
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/content-card_cokestudio2024_new-jeans-with-coca-cola.jpg/width3840.jpg"
          urlButton="#"
          textButton="Assistir"
          alt="NewJeans posando juntas, cada uma segurando uma lata de Coca-Cola."
          flexDirection="flex xl:flex-row
        "
        />
        <ComponentDefaultNoTitle
          title="Coke Studio Ao vivo - part. NewJeans"
          span="Assista ao NewJeans performando seu último sucesso direto do Coke Studio Show em Tóquio."
          urlImage="https://www.coca-cola.com/content/dam/onexp/co/es/offerings/coke-studio-2024/content-card_cokestudio2024_new-jeans-fans-at-event.jpg/width1960.jpg"
          urlButton="#"
          textButton="Assistir"
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
