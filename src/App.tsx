import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(["common", "home"]);
  return (
    <main className="flex flex-col items-center gap-5">
      <FirstSection />
      <div className="flex flex-col items-center gap-5 xl:max-w-[70rem]">
        <SecondSection
          titleMain={t("home:WhatsNew")}
          titleSecondary={t("home:SpriteLemonFresh")}
          span={t("home:DiscoverLightness")}
          urlButton="/brands/sprite"
          textButton={t("home:LearnMore")}
          urlImg={SpriteLemon}
          alt={t("home:SpritePromotionalBanner")}
          flexDirection="flex xl:flex-row"
        />
        <ThirdSection />
        <SectionFloatContent
          havePreTitle={false}
          urlImage={LatamSustainability}
          alt={t("home:RiverWithVegetation")}
          title={t("home:Sustainability")}
          span={t("home:TheLongevityOfCocaCola")}
          urlButton="/sustainability"
          textButton={t("common:UnderstandBetter")}
          extraClassSection="flex-col-reverse xl:flex-row w-[90%]"
          extraClassDiv="-bottom-10 xl:-bottom-10! xl:-ml-10"
        />
        <FifthSection
          flexDirection="flex  xl:flex-row w-[90%]! xl:max-w-[70rem]!"
          title={t("home:FindYourStyle")}
          span={t("home:DiscoverTheOfficial")}
          urlImage={CardHomepageLoja}
          alt={t("home:ManRidingSkateboard")}
        />
        <SixthSection />
      </div>
    </main>
  );
}

export default App;
