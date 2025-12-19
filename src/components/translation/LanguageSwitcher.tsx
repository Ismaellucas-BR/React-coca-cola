import { useLanguage } from "./LanguageContext";

function LanguageSwitcher() {
  const { lang, changeLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center">
      {/* Fundo do switcher */}
      <div className="w-16 h-8 bg-gray-300 rounded-full relative transition-colors">
        {/* Switcher */}
        <div
          className={`w-8 h-8 bg-white rounded-full absolute transition-transform transform ${
            lang === "en" ? "translate-x-8" : "translate-x-0"
          }`}></div>
      </div>

      {/* Botões para trocar idioma */}
      <button
        onClick={() => changeLanguage("pt")}
        className="absolute left-0 w-8 h-8 text-center text-sm text-black font-semibold cursor-pointer">
        PT
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="absolute right-0 w-8 h-8 text-center text-sm text-black font-semibold cursor-pointer">
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
