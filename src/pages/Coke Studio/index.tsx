import EmblaCarousel from "../../pages/Home/components/carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { CardProps } from "../../components/CardDefault";
import FormSections from "../shareACoke/components/FormSections";
import ComponentDefaultPlusTitle from "../../components/ComponentDefaultPlusTitle";
import ComponentDefaultNoTitle from "../../components/ComponentDefaultNoTitle";
import CardDefault from "@/components/CardDefault";
import SectionFloatContent from "@/components/SectionFloatContent";
import CokeStudioTeam from "./components/CokeStudioTeam";
import FloatBar from "@/components/FloatBar";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];

export default function CokeStudio() {
  const cardsContent: CardProps[] = [
    {
      urlImage:
        "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/content-card_cokestudio2024_peggy-gou-with-coca-cola.jpg/width1960.jpg",
      titleCard: "Peggy Gou comanda as pickups na entrevista com o Coke Studio",
      content:
        "Descubra o que não pode faltar no camarim da Peggy Gou durante suas turnês enquanto ela responde às perguntas mais quentes nessa entrevista.",
      textButton: "Assistir agora",
      urlAncora: "#",
      alt: "Artista Peggy Gou sorrindo e posando com uma lata de Coca-Cola",
    },
    {
      urlImage:
        "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/content-card_cokestudio2024_new-jeans-with-coca-cola.jpg/width1960.jpg",
      titleCard: "Entrevista com NewJeans no Coke Studio",
      content:
        "O pessoal do NewJeans respondeu às perguntas mais populares dos fãs em uma entrevista imperdível diretamente do Coke Studio.",
      textButton: "Confira",
      urlAncora: "#",
      alt: "NewJeans posando juntas, cada uma segurando uma lata de Coca-Cola.",
    },
    {
      urlImage:
        "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/content-card_cokestudio2024_new-jeans-fans-at-event.jpg/width1960.jpg",
      titleCard: "Coke Studio Ao vivo - part. NewJeans",
      content:
        "Assista ao NewJeans performando seu último sucesso direto do Coke Studio Show em Tóquio.",
      textButton: "Assistir",
      urlAncora: "#",
      alt: "Grupo de pessoas curtindo Coca-Cola em um evento.",
    },
  ];
  return (
    <div className="flex flex-col items-center pt-30 lg:pt-20">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] lg:my-10 nv:max-w-[70rem]">
        <span>
          <a
            href="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            Coca‑Cola/
          </a>
          <a href="#" className="font-Noto font-semibold text-black">
            <span>Coke Studio</span>
          </a>
        </span>
      </div>
      <EmblaCarousel
        options={{ loop: true }}
        slides={[
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/heroimage_desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/heroimage_mobile.jpg/width1024.jpg",
            title: "Lollapalooza Brasil: Reviva a Magia!",
            text: "A energia do festival ao seu alcance. Relembre os melhores momentos do LollaBR!",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/jao-banner-mobile.jpg/width1024.jpg",
            title: "Pocket Show do Jão pela Coke Studio",
            text: "Viva a jornada criativa de Jão em nossa série exclusiva e descubra a inspiração por trás do seu som único.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero-carousel-element_cokestudio2024_peggy-gou-smiling_desktop1.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero-carousel-element_cokestudio2024_peggy-gou-smiling_mobile.jpg/width1024.jpg",
            title: "Que comece a festa! Peggy Gou tá na pista!",
            text: "Os melhores beats é ela que toca. Entre no ritmo com Peggy Gou e Coke Studio.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/hero_cokestudio2024_karol-g-posing_desktop.jpeg/width3840.jpeg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/hero-carousel-two_cokestudio2024_fans-enjoying-coke-at-festival_mobile.jpg/width1024.jpg",
            title: "Aumente o volume... a Karol G chegou!",
            text: "Fique em sintonia com o Coke Studio para as últimas atualizações inacreditáveis sobre a Karol G.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero-carousel-two_cokestudio2024_new-jeans-posing_desktop.jpg/width3840.jpg",
            bgMobile:
              "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero-carousel-two_cokestudio2024_new-jeans-posing_mobile.jpg/width1024.jpg",
            title: "NewJeans chegou ao time",
            text: "NewJeans chegou para essa nova temporada do Coke Studio! A magia vai rolar quando o grupo revelar seu novo hit esse ano. Fiquem ligados!",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
        ]}
      />
      <div className="lg:max-w-[46rem] ">
        <FormSections
          title="Prepare-se para momentos inesquecíveis"
          span1="Fique de olho para saber dos próximos festivais, novidades, experiências e muito mais com Coke Studio. Assine a newsletter para ter acesso."
        />
      </div>
      <ComponentDefaultPlusTitle
        titleMain="Promoções"
        titleSecondary="Autógrafo digital da Peggy Gou"
        span="Aqui você encontra uma foto autografada para mostrar todo seu amor de fã pela Peggy."
        urlButton="#"
        textButton="Eu quero"
        urlImg="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_peggy-gou-autograph_generic.jpg/width1960.jpg"
        alt="Mulher (Peggy) segurando uma garrafa de coca-cola"
        flexDirection="flex-row-reverse"
      />
      <ComponentDefaultNoTitle
        flexDirection="flex-row-reverse lg:mt-[7.5rem]"
        title="Papel de parede da Peggy Gou"
        span="Pra deixar sua tela do celular eletrizante como as pistas de dança."
        urlButton="#"
        textButton="Eu quero"
        urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_peggy-gou-wallpaper_generic.jpg/width1960.jpg"
        alt="Peggy Gou posando para foto"
      />
      <ComponentDefaultNoTitle
        flexDirection="flex-row lg:mt-[7.5rem]"
        title="Deixe sua tela no estilo com o papel de parede da Karol G"
        span="Um presente que todo fã de verdade da Karol G vai querer ter."
        urlButton="#"
        textButton="Eu quero"
        urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_karol-g-wallpaper_generic.jpg/width1960.jpg"
        alt="Karol G posando para foto"
      />
      <ComponentDefaultNoTitle
        flexDirection="flex-row-reverse lg:mt-[7.5rem]"
        title="Foto Autografada com NewJeans no Coke Studio"
        span="Baixe já sua foto do NewJeans no Coke Studio, assinado pelo grupo."
        urlButton="#"
        textButton="Eu quero"
        urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/general-card_cokestudio2024_new-jeans-autograph-generic.jpg/width1960.jpg"
        alt="NewJeans posando para foto"
      />
      <ComponentDefaultPlusTitle
        titleMain="Experiências"
        titleSecondary="Jão by Coke Studio: A Música Continua!"
        span="A vibe do Jão by Coke Studio fica pra sempre! Reviva os melhores momentos e prepare-se, porque a música não para por aqui."
        urlButton="#"
        textButton="Saiba mais"
        urlImg="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/lolla-25/jao-exclusive/general-card-desktop.jpg/width1960.jpg"
        alt="O cantor Jão cantando, segurando um microfone na mão, cercado pelo logo do Coke Studio com um fundo preto."
        flexDirection="flex-row"
      />
      <ComponentDefaultNoTitle
        flexDirection="flex-row lg:mt-[7.5rem]"
        title="Peggy Gou a caminho de Puglia, o game"
        span="Ajude Peggy a chegar ao evento ao vivo do Coke Studio. Esquive dos obstáculos, colete power-ups e entre no ritmo da sua última faixa! Preparado para embarcar nessa aventura mágica?"
        urlButton="#"
        textButton="Jogar"
        urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/game-experience_coke-studio-2024_peggy-gou_4_3_.jpg/width1960.jpg"
        alt="Imagem de jogo com personagem segurando discos e uma scooter amarela."
      />
      <div className="flex flex-col gap-10 p-5 items-center mb-10 max-w-screen nv:max-w-[70rem] lg:flex-row justify-center lg:gap-10">
        {cardsContent.map((card, index) => {
          return <CardDefault key={index} {...card} />;
        })}
      </div>
      <SectionFloatContent
        havePreTitle={true}
        preTitle="Momentos mágicos de verdade"
        urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/campaign-card_cokestudio2024_magicmoments-peggygou.jpg/width1960.jpg"
        alt="Peggy Gou DJ em uma performance ao vivo no Coca-Cola Studio, com uma iluminação vibrante em vermelho e o logo ao fundo. Ela está vestindo um vestido vermelho e possui tatuagens visíveis nos braços. No horizonte, há indivíduos e um clima de celebração e sons musicais."
        title="Peggy Gou nas picapes"
        span="A nossa DJ superstar vai dar um giro pela sua vida nessa sessão de perguntas e respostas com seus fãs, mais um momento exclusivo que você só encontra no Coke Studio."
        urlButton="#"
        textButton="Saiba mais"
        extraClassSection="flex-col"
        extraClassDiv="-top-10"
      />
      <CokeStudioTeam />
    </div>
  );
}
