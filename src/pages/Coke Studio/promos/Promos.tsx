import ComponentDefaultNoTitle from "@/components/ComponentDefaultNoTitle";
import ComponentDefaultPlusTitle from "@/components/ComponentDefaultPlusTitle";
import FloatBar from "@/components/FloatBar";
import MegaBanner from "@/components/MegaBanner";
import FormSections from "@/pages/shareACoke/components/FormSections";

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
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero_cokestudio2024_friends-drinking-coke-in-park_desktop.jpg/width3840.jpg"
          urlImageMobile="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/hero_cokestudio2024_friends-drinking-coke_mobile.jpg/width500.jpg"
          title="Promoções
"
          span="COKE STUDIO 2025"
        />
        <ComponentDefaultPlusTitle
          titleMain="Promoções disponíveis"
          subTitle="Cadastre-se no Coke Studio para concorrer a prêmios dos seus artistas favoritos! Tá esperando o que?"
          urlImg="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/43ca6a591987618fbe8a8396421ea7bd.jpeg/width1338.jpeg"
          alt="Imagem promocional com o texto 'Promoção Você VIP no Lolla Brasil', acompanhado dos logotipos da Coca-Cola e do LollapaloozaBrasil. O fundo é preto com linhas vermelhas onduladas, criando um efeito dinâmico."
          titleSecondary="Aumente o volume!"
          span="O Lolla tá chegando! Vem sentir a energia da música, dos palcos e do pessoal com Coca‑Cola e Coke Studio."
          urlButton="#"
          textButton="Saiba mais"
          flexDirection="xl:flex xl:flex-row-reverse"
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title="Papel de parede da Peggy Gou"
          span="Pra deixar sua tela do celular eletrizante como as pistas de dança."
          urlButton="#"
          textButton="Eu quero"
          urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_peggy-gou-wallpaper_generic.jpg/width1960.jpg"
          alt="Peggy Gou posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title="Autógrafo digital da Peggy Gou"
          span="Aqui você encontra uma foto autografada para mostrar todo seu amor de fã pela Peggy."
          urlButton="#"
          textButton="Eu quero"
          urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_peggy-gou-autograph_generic.jpg/width1960.jpg"
          alt="Mulher (Peggy) segurando uma garrafa de coca-cola"
        />
        <ComponentDefaultNoTitle
          flexDirection="xl:flex xl:flex-row-reverse xl:mt-[3.5rem]"
          title="Deixe sua tela no estilo com o papel de parede da Karol G"
          span="Um presente que todo fã de verdade da Karol G vai querer ter."
          urlButton="#"
          textButton="Eu quero"
          urlImage="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-studio-2024/general-card_cokestudio2024_karol-g-wallpaper_generic.jpg/width1960.jpg"
          alt="Karol G posando para foto"
        />
        <ComponentDefaultNoTitle
          flexDirection="flex-row xl:mt-[3.5rem]"
          title="Foto Autografada com NewJeans no Coke Studio"
          span="Baixe já sua foto do NewJeans no Coke Studio, assinado pelo grupo."
          urlButton="#"
          textButton="Eu quero"
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/coke-studio-24/general-card_cokestudio2024_new-jeans-autograph-generic.jpg/width1960.jpg"
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
