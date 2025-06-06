import FifthSection from "./components/ComponentDefaultNoTitle";
import FirstSection from "./pages/Home/components/FirstSection";
import SectionFloatContent from "./components/SectionFloatContent";
import SecondSection from "./components/ComponentDefaultPlusTitle";
import SixthSection from "./pages/Home/components/SixthSection";
import ThirdSection from "./pages/Home/components/ThirdSection";

function App() {
  return (
    <main className="flex flex-col items-center gap-5">
      <FirstSection />
      <div className="flex flex-col items-center gap-5 xl:max-w-[70rem]">
        <SecondSection
          titleMain="O que há de novo?"
          titleSecondary="Sprite Lemon Fresh deixa tudo bem mais leve"
          span="Descubra a leveza."
          urlButton="#"
          textButton="Saiba mais"
          urlImg="https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/sprite_lemon.jpg/width1338.jpg"
          alt="banner promocional da sprite"
          flexDirection="flex flex-row"
        />
        <ThirdSection />
        <SectionFloatContent
          havePreTitle={false}
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/homepage/sust-and-social/v2/latam_home_sustainability_campaign%20card_1280x1024_v2.jpg/width1960.jpg"
          alt="Rio com mato e montanhas ao fundo"
          title="Sustentabilidade"
          span="A longevidade da Coca‑Cola Brasil só é possível se a
              nossa forma de trabalhar trouxer ganhos para a sociedade e o
              planeta. É imprescindível crescer de forma consciente e
              sustentável"
          urlButton="#"
          textButton="Entenda melhor"
          extraClassSection="flex-col-reverse"
          extraClassDiv="-bottom-10"
        />
        <FifthSection
          flexDirection="flex flex-row xl:max-w-[70rem]!"
          title="Encontre Seu Estilo na Loja Coca‑Cola"
          span="Descubra o merchandising oficial na Loja Coca‑Cola. Uma coleção única
          para você celebrar a sua conexão com a felicidade!"
          urlButton="#"
          textButton="Entre na Loja"
          urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/br-site-loja/card_homepage_loja_br.jpg/width500.jpg"
          alt="homem andando de skate"
        />
        <SixthSection />
      </div>
    </main>
  );
}

export default App;
