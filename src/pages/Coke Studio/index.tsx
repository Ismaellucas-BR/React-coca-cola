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

import PeggyGouWithCoKe from "../../assets/CokeStudio/PeggyGouWithCoKe.webp";
import NewJeansWithCoke from "../../assets/CokeStudio/NewJeansWithCoke.webp";
import NewJeansFans from "../../assets/CokeStudio/NewJeansFans.webp";
import HeroImageDesktop from "../../assets/CokeStudio/HeroImageDesktop.webp";
import HeroImageMobile from "../../assets/CokeStudio/HeroImageMobile.webp";
import JaoBannerDesktop from "../../assets/CokeStudio/JaoBannerDesktop.webp";
import JaoBannerMobile from "../../assets/CokeStudio/JaoBannerMobile.webp";
import PeggyGouSmilingDesktop from "../../assets/CokeStudio/PeggyGouSmilingDesktop.webp";
import PeggyGouSmilingMobile from "../../assets/CokeStudio/PeggyGouSmilingMobile.webp";
import karolGPosingDesktop from "../../assets/CokeStudio/karolGPosingDesktop.webp";
import karolGPosingMobile from "../../assets/CokeStudio/karolGPosingMobile.webp";
import NewJeansPosingDesktop from "../../assets/CokeStudio/NewJeansPosingDesktop.webp";
import NewJeansPosingMobile from "../../assets/CokeStudio/NewJeansPosingMobile.webp";
import PeggyGouAutographGeneric from "../../assets/CokeStudio/PeggyGouAutographGeneric.webp";
import PeggyGouWallpaperGeneric from "../../assets/CokeStudio/PeggyGouWallpaperGeneric.webp";
import KarolGWallpaperGeneric from "../../assets/CokeStudio/KarolGWallpaperGeneric.webp";
import NewJeansAutographGeneric from "../../assets/CokeStudio/NewJeansAutographGeneric.webp";
import MagicMomentsPeggyGou from "../../assets/CokeStudio/MagicMomentsPeggyGou.webp";
import AutographPeggyGouCokeStudio2024 from "../../assets/CokeStudio/AutographPeggyGouCokeStudio2024.webp";
import WallpaperPeggyGouCokeStudio2024 from "../../assets/CokeStudio/WallpaperPeggyGouCokeStudio2024.webp";
import WallpaperKarolGCokeStudio2024 from "../../assets/CokeStudio/WallpaperKarolGCokeStudio2024.webp";
import NewjeansAutograph from "../../assets/CokeStudio/NewjeansAutograph.webp";

// @ts-ignore
const OPTIONS: EmblaOptionsType = { loop: true };
// @ts-ignore
const SLIDE_COUNT = 5;
// @ts-ignore
const SLIDES: any = [];

export default function CokeStudio() {
  const cardsContent: CardProps[] = [
    {
      urlImage: PeggyGouWithCoKe,
      titleCard: "Peggy Gou comanda as pickups na entrevista com o Coke Studio",
      content:
        "Descubra o que não pode faltar no camarim da Peggy Gou durante suas turnês enquanto ela responde às perguntas mais quentes nessa entrevista.",
      alt: "Artista Peggy Gou sorrindo e posando com uma lata de Coca-Cola",
    },
    {
      urlImage: NewJeansWithCoke,
      titleCard: "Entrevista com NewJeans no Coke Studio",
      content:
        "O pessoal do NewJeans respondeu às perguntas mais populares dos fãs em uma entrevista imperdível diretamente do Coke Studio.",
      alt: "NewJeans posando juntas, cada uma segurando uma lata de Coca-Cola.",
    },
    {
      urlImage: NewJeansFans,
      titleCard: "Coke Studio Ao vivo - part. NewJeans",
      content:
        "Assista ao NewJeans performando seu último sucesso direto do Coke Studio Show em Tóquio.",
      alt: "Grupo de pessoas curtindo Coca-Cola em um evento.",
    },
  ];
  return (
    <div className="relative flex flex-col items-center pt-30 lg:pt-10">
      <div className="sticky top-24 z-40 flex justify-center w-full mb-5">
        <FloatBar />
      </div>
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] lg:mb-10 nv:max-w-[70rem]">
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
            bgDesktop: HeroImageDesktop,
            bgMobile: HeroImageMobile,
            title: "Lollapalooza Brasil: Reviva a Magia!",
            text: "A energia do festival ao seu alcance. Relembre os melhores momentos do LollaBR!",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop: JaoBannerDesktop,
            bgMobile: JaoBannerMobile,
            title: "Pocket Show do Jão pela Coke Studio",
            text: "Viva a jornada criativa de Jão em nossa série exclusiva e descubra a inspiração por trás do seu som único.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop: PeggyGouSmilingDesktop,
            bgMobile: PeggyGouSmilingMobile,
            title: "Que comece a festa! Peggy Gou tá na pista!",
            text: "Os melhores beats é ela que toca. Entre no ritmo com Peggy Gou e Coke Studio.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop: karolGPosingDesktop,
            bgMobile: karolGPosingMobile,
            title: "Aumente o volume... a Karol G chegou!",
            text: "Fique em sintonia com o Coke Studio para as últimas atualizações inacreditáveis sobre a Karol G.",
            buttonText: "Saiba mais",
            buttonLink: "#",
          },
          {
            bgDesktop: NewJeansPosingDesktop,
            bgMobile: NewJeansPosingMobile,
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
      <div className="flex flex-col items-center gap-5 lg:gap-14">
        <ComponentDefaultPlusTitle
          titleMain="Promoções"
          titleSecondary="Autógrafo digital da Peggy Gou"
          span="Aqui você encontra uma foto autografada para mostrar todo seu amor de fã pela Peggy."
          urlButton={AutographPeggyGouCokeStudio2024}
          textButton="Eu quero"
          urlImg={PeggyGouAutographGeneric}
          alt="Mulher (Peggy) segurando uma garrafa de coca-cola"
          flexDirection="flex-row-reverse"
          FirstSectionPadding="pt-10"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row-reverse xl:mt-[.5rem]"
          title="Papel de parede da Peggy Gou"
          span="Pra deixar sua tela do celular eletrizante como as pistas de dança."
          urlButton={WallpaperPeggyGouCokeStudio2024}
          textButton="Eu quero"
          urlImage={PeggyGouWallpaperGeneric}
          alt="Peggy Gou posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[.5rem]"
          title="Deixe sua tela no estilo com o papel de parede da Karol G"
          span="Um presente que todo fã de verdade da Karol G vai querer ter."
          urlButton={WallpaperKarolGCokeStudio2024}
          textButton="Eu quero"
          urlImage={KarolGWallpaperGeneric}
          alt="Karol G posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row-reverse xl:mt-[.5rem]"
          title="Foto Autografada com NewJeans no Coke Studio"
          span="Baixe já sua foto do NewJeans no Coke Studio, assinado pelo grupo."
          urlButton={NewjeansAutograph}
          textButton="Eu quero"
          urlImage={NewJeansAutographGeneric}
          alt="NewJeans posando para foto"
        />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-2 xl:mt-5">
        <h3 className="font-Noto font-bold text-[1.8rem] xl:text-[2rem] text-black">
          Experiências
        </h3>
        <div className="flex flex-col gap-10 p-5 items-center mb-10 max-w-screen nv:max-w-[70rem] lg:flex-row justify-center lg:gap-10">
          {cardsContent.map((card, index) => {
            return <CardDefault key={index} {...card} />;
          })}
        </div>
      </div>
      <SectionFloatContent
        havePreTitle={true}
        preTitle="Momentos mágicos de verdade"
        urlImage={MagicMomentsPeggyGou}
        alt="Peggy Gou DJ em uma performance ao vivo no Coca-Cola Studio, com uma iluminação vibrante em vermelho e o logo ao fundo. Ela está vestindo um vestido vermelho e possui tatuagens visíveis nos braços. No horizonte, há indivíduos e um clima de celebração e sons musicais."
        title="Peggy Gou nas picapes"
        span="A nossa DJ superstar vai dar um giro pela sua vida nessa sessão de perguntas e respostas com seus fãs, mais um momento exclusivo que você só encontra no Coke Studio."
        extraClassSection="flex-col xl:flex-row"
        extraClassDiv="-top-10 xl:top-0! xl:-ml-10"
      />
      <CokeStudioTeam />
    </div>
  );
}
