import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";
import FormSections from "@/pages/shareACoke/components/FormSections";
import FriendsDrinkingCokeInParkDesktop from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeInParkDesktop.webp";
import FriendsDrinkingCokeInParkMobile from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeInParkDesktop.webp";
import FriendsDrinkingCokeAndSmilingInPark from "../../../assets/ShareACoke/promos/FriendsDrinkingCokeAndSmilingInPark.webp";
import PeggyGouWallpaperGeneric from "../../../assets/CokeStudio/PeggyGouWallpaperGeneric.webp";
import WallpaperPeggyGouCokeStudio2024 from "../../../assets/CokeStudio/WallpaperPeggyGouCokeStudio2024.webp";
import AutographPeggyGouCokeStudio2024 from "../../../assets/CokeStudio/AutographPeggyGouCokeStudio2024.webp";
import KarolGWallpaperGeneric from "../../../assets/CokeStudio/KarolGWallpaperGeneric.webp";
import WallpaperKarolGCokeStudio2024 from "../../../assets/CokeStudio/WallpaperKarolGCokeStudio2024.webp";
import NewJeansAutographGeneric from "../../../assets/CokeStudio/NewJeansAutographGeneric.webp";
import NewjeansAutograph from "../../../assets/CokeStudio/NewjeansAutograph.webp";

export default function Promos() {
  return (
    <div className="flex flex-col items-center w-full pt-30 pb-20 xl:pt-20 xl:max-w-[80rem]">
      <FloatBar />
      <div className="flex items-start justify-start w-full  mb-5  max-w-[90%] xl:my-10 nv:max-w-[70rem]">
        <span>
          <a
            href="/"
            className="font-Noto font-normal text-[rgb(108, 108, 108)]">
            Coca‑Cola/
          </a>
          <a href="#" className="font-Noto font-semibold text-black">
            <span>Promoções</span>
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center gap-5">
        <MegaBanner
          urlImage={FriendsDrinkingCokeInParkDesktop}
          urlImageMobile={FriendsDrinkingCokeInParkMobile}
          title="Promoções
"
          span="COKE STUDIO 2025"
        />
        <ComponentDefaultPlusTitle
          titleMain="Promoções disponíveis"
          subTitle="Cadastre-se no Coke Studio para concorrer a prêmios dos seus artistas favoritos! Tá esperando o que?"
          urlImg={FriendsDrinkingCokeAndSmilingInPark}
          alt="Imagem promocional com o texto 'Promoção Você VIP no Lolla Brasil', acompanhado dos logotipos da Coca-Cola e do LollapaloozaBrasil. O fundo é preto com linhas vermelhas onduladas, criando um efeito dinâmico."
          titleSecondary="Aumente o volume!"
          span="O Lolla tá chegando! Vem sentir a energia da música, dos palcos e do pessoal com Coca‑Cola e Coke Studio."
          flexDirection="xl:flex xl:flex-row-reverse "
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title="Papel de parede da Peggy Gou"
          span="Pra deixar sua tela do celular eletrizante como as pistas de dança."
          urlButton={WallpaperPeggyGouCokeStudio2024}
          textButton="Eu quero"
          urlImage={PeggyGouWallpaperGeneric}
          alt="Peggy Gou posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title="Autógrafo digital da Peggy Gou"
          span="Aqui você encontra uma foto autografada para mostrar todo seu amor de fã pela Peggy."
          urlButton={AutographPeggyGouCokeStudio2024}
          textButton="Eu quero"
          urlImage={PeggyGouWallpaperGeneric}
          alt="Mulher (Peggy) segurando uma garrafa de coca-cola"
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title="Deixe sua tela no estilo com o papel de parede da Karol G"
          span="Um presente que todo fã de verdade da Karol G vai querer ter."
          urlButton={WallpaperKarolGCokeStudio2024}
          textButton="Eu quero"
          urlImage={KarolGWallpaperGeneric}
          alt="Karol G posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title="Foto Autografada com NewJeans no Coke Studio"
          span="Baixe já sua foto do NewJeans no Coke Studio, assinado pelo grupo."
          urlButton={NewjeansAutograph}
          textButton="Eu quero"
          urlImage={NewJeansAutographGeneric}
          alt="NewJeans posando para foto"
        />
        <FormSections
          title="Prepare-se para momentos inesquecíveis"
          span1="Fique de olho para saber dos próximos festivais, novidades, experiências e muito mais com Coke Studio. Assine a newsletter para ter acesso."
          extraClasse="xl:mt-20 xl"
        />
      </div>
    </div>
  );
}
