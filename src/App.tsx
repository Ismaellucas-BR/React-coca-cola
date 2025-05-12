import FifthSection from "./pages/Home/components/FifthSection";
import FirstSection from "./pages/Home/components/FirstSection";
import FourthSection from "./pages/Home/components/FourthSection";
import SecondSection from "./pages/Home/components/SecondSection";
import SixthSection from "./pages/Home/components/SixthSection";
import ThirdSection from "./pages/Home/components/ThirdSection";

function App() {
  return (
    <main className="flex flex-col items-center gap-5">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </main>
  );
}

export default App;
