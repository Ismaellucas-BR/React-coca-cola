import FifthSection from "./components/ComponentDefaultNoTitle";
import FirstSection from "./pages/Home/components/FirstSection";
import SectionFloatContent from "./components/SectionFloatContent";
import SecondSection from "./components/ComponentDefaultPlusTitle";
import SixthSection from "./pages/Home/components/SixthSection";
import ThirdSection from "./pages/Home/components/ThirdSection";

import SpriteLemon from "./assets/SpriteLemon.webp";
import LatamSustainability from "./assets/LatamSustainability.webp";
import CardHomepageLoja from "./assets/CardHomepageLoja.webp";

function App() {
  return (
    <main className="flex flex-col items-center gap-5">
      <FirstSection />
      <div className="flex flex-col items-center gap-5 xl:max-w-[70rem]">
        <SecondSection
          titleMain="O que há de novo?"
          titleSecondary="Sprite Lemon Fresh deixa tudo bem mais leve"
          span="Descubra a leveza."
          urlButton="/brands/sprite"
          textButton="Saiba mais"
          urlImg={SpriteLemon}
          alt="banner promocional da sprite"
          flexDirection="flex xl:flex-row"
        />
        <ThirdSection />
        <SectionFloatContent
          havePreTitle={false}
          urlImage={LatamSustainability}
          alt="Rio com mato e montanhas ao fundo"
          title="Sustentabilidade"
          span="A longevidade da Coca‑Cola Brasil só é possível se a
              nossa forma de trabalhar trouxer ganhos para a sociedade e o
              planeta. É imprescindível crescer de forma consciente e
              sustentável"
          urlButton="/sustainability"
          textButton="Entenda melhor"
          extraClassSection="flex-col-reverse xl:flex-row w-[90%]"
          extraClassDiv="-bottom-10 xl:-bottom-10! xl:-ml-10"
        />
        <FifthSection
          flexDirection="flex  xl:flex-row w-[90%]! xl:max-w-[70rem]!"
          title="Encontre Seu Estilo na Loja Coca‑Cola"
          span="Descubra o merchandising oficial na Loja Coca‑Cola. Uma coleção única
          para você celebrar a sua conexão com a felicidade!"
          urlImage={CardHomepageLoja}
          alt="homem andando de skate"
        />
        <SixthSection />
      </div>
    </main>
  );
}

export default App;
