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
import ptCokeStudioTeam from "./locales/pt/CokeStudioTeam.json";
import enCokeStudioTeam from "./locales/en/CokeStudioTeam.json";
import ptPromos from "./locales/pt/Promos.json";
import enPromos from "./locales/en/Promos.json";
import ptLolla from "./locales/pt/Lolla.json";
import enLolla from "./locales/en/Lolla.json";
import ptExperiences from "./locales/pt/Experiences.json";
import enExperiences from "./locales/en/Experiences.json";
import ptTeam from "./locales/pt/Team.json";
import enTeam from "./locales/en/Team.json";
import ptInstitute from "./locales/pt/Institute.json";
import enInstitute from "./locales/en/Institute.json";
import ptSustainability from "./locales/pt/Sustainability.json";
import enSustainability from "./locales/en/Sustainability.json";
import ptGetToKnowUs from "./locales/pt/GetToKnowUs.json";
import enGetToKnowUs from "./locales/en/GetToKnowUs.json";
import ptPurpose from "./locales/pt/Purpose.json";
import enPurpose from "./locales/en/Purpose.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      brands: enBrands,
      ShareACoke: enShareACoke,
      FormSection: enFormSection,
      CokeStudio: enCokeStudio,
      CokeStudioTeam: enCokeStudioTeam,
      Promos: enPromos,
      Lolla: enLolla,
      Experiences: enExperiences,
      Team: enTeam,
      Institute: enInstitute,
      Sustainability: enSustainability,
      GetToKnowUs: enGetToKnowUs,
      Purpose: enPurpose,
    },
    pt: {
      common: ptCommon,
      home: ptHome,
      brands: ptBrands,
      ShareACoke: ptShareACoke,
      FormSection: ptFormSection,
      CokeStudio: ptCokeStudio,
      Promos: ptPromos,
      Lolla: ptLolla,
      Experiences: ptExperiences,
      Team: ptTeam,
      Institute: ptInstitute,
      Sustainability: ptSustainability,
      GetToKnowUs: ptGetToKnowUs,
      Purpose: ptPurpose,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  ns: [
    "common",
    "home",
    "brands",
    "ShareACoke",
    "FormSection",
    "CokeStudio",
    "CokeStudioTeam",
    "Promos",
    "Lolla",
    "Experiences",
    "Team",
    "Institute",
    "Sustainability",
    "GetToKnowUs",
    "Purpose",
  ],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
