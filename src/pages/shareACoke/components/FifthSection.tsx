import { useTranslation } from "react-i18next";

export default function FifthSection() {
  const { t } = useTranslation("ShareACoke");
  return (
    <section className="flex flex-col gap-5 px-5 lg:max-w-[70rem] lg:w-full">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="title-section">{t("TheFantasyHasArrived")}</h2>
        <span className="content-section">{t("WatchTheFullMusic")}</span>
      </div>
      <iframe
        width="100%"
        height="250"
        src="https://www.youtube.com/embed/YytAYddUnDc?si=Fk_nYMskHy_S_AO7"
        className=" rounded-lg md:h-96 lg:h-[39.375rem]"></iframe>
    </section>
  );
}
