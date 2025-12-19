import BrasilCardSpotify from "../../../assets/ShareACoke/BrasilCardSpotify.webp";

import { useTranslation } from "react-i18next";

export default function ThirdSection() {
  const { t } = useTranslation("ShareACoke");
  return (
    <section className="section-main gap-5  lg:!flex-row lg:w-full lg:gap-28 lg:max-w-[70rem]">
      <div className="lg:w-2/4">
        <img
          src={BrasilCardSpotify}
          alt="Tres pessoas brindando com coca-cola"
          className="rounded-lg lg:w-full"
        />
      </div>
      <div className="flex flex-col gap-5 lg:w-2/4 lg:justify-center">
        <h2 className="title-section text-center lg:text-left lg:text-[2rem] lg:leading-14">
          {t("TakeYourNextHangout")}
        </h2>
        <span className="content-section text-center lg:text-left">
          {t("CokeAndSpotify")}
        </span>
      </div>
    </section>
  );
}
