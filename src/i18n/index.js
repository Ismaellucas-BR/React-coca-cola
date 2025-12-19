import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import ptCommon from "./locales/pt/common.json";
import ptHome from "./locales/pt/home.json";
import enHome from "./locales/en/home.json";
import ptBrands from "./locales/pt/brands.json";
import enBrands from "./locales/en/brands.json";
import ptShareACoke from "./locales/pt/ShareACoke.json";
import enShareACoke from "./locales/en/ShareACoke.json";
import ptFormSection from "./locales/pt/FormSection.json";
import enFormSection from "./locales/en/FormSection.json";
import ptCokeStudio from "./locales/pt/CokeStudio.json";
import enCokeStudio from "./locales/en/CokeStudio.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      brands: enBrands,
      ShareACoke: enShareACoke,
      FormSection: enFormSection,
      CokeStudio: enCokeStudio,
    },
    pt: {
      common: ptCommon,
      home: ptHome,
      brands: ptBrands,
      ShareACoke: ptShareACoke,
      FormSection: ptFormSection,
      CokeStudio: ptCokeStudio,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: ["common", "home", "brands", "ShareACoke", "FormSection", "CokeStudio"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
