interface PropsSectionFloatContent {
  urlImage: string;
  title: string;
  span: string;
  urlButton: string;
  textButton: string;
  alt: string;
  havePreTitle: boolean;
  preTitle?: string;
  extraClassSection?: string;
  extraClassDiv?: string;
}
export default function SectionFloatContent(props: PropsSectionFloatContent) {
  return (
    <section
      className={`flex  lg:max-w-[70rem] lg:px-0 lg:flex-row-reverse lg:pt-40 lg:pb-20 ${props.extraClassSection}`}>
      <img
        src={props.urlImage}
        alt={props.alt}
        className="z-10 lg:w-1/2 lg:rounded-lg"
      />
      <div
        className={`px-8 py-0 relative -bottom-10 z-10 lg:w-1/2 lg:bottom-14 lg:p-0 lg:-mr-14 ${props.extraClassDiv}`}>
        <div className="flex flex-col rounded-lg shadow-lg p-6 gap-2 z-20 bg-white h-full lg:items-left lg:justify-between lg:p-14">
          <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-3">
            <span
              className={`${
                props.havePreTitle == false ? "hidden" : " "
              } font-Noto font-bold text-[0.9rem] uppercase`}>
              {props.preTitle}
            </span>
            <h2 className="title-section">{props.title}</h2>
            <span className="content-section">{props.span}</span>
          </div>
          <a href={props.urlButton} className="button-default">
            {props.textButton}
          </a>
        </div>
      </div>
    </section>
  );
}
