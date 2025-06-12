interface PropsSectionFloatContent {
  urlImage: string;
  title: string;
  span: string;
  urlButton?: string;
  textButton?: string;
  alt: string;
  havePreTitle?: boolean;
  preTitle?: string;
  extraClassSection?: string;
  extraClassDiv?: string;
}
export default function SectionFloatContent(props: PropsSectionFloatContent) {
  return (
    <section
      className={`flex  xl:max-w-[70rem]  lg:px-0  lg:pt-10 lg:pb-20 lg:items-center lg:justify-center xl:mt-30 ${props.extraClassSection}`}>
      <img
        src={props.urlImage}
        alt={props.alt}
        className="z-10   w-full rounded-none xl:rounded-lg xl:w-[40rem] xl:h-[32rem]"
      />
      <div
        className={`px-8 relative -bottom-10 z-10 xl:w-1/2 lg:bottom-14 lg:p-0 xl:-mr-14 lg:max-w-[90%] ${props.extraClassDiv} flex flex-col rounded-lg shadow-lg p-6 gap-2 z-20 bg-white h-full lg:items-left lg:justify-between lg:p-14  xl:min-h-[34.5rem] xl:-mt-70`}>
        <div className="flex flex-col gap-2 lg:flex lg:flex-col lg:gap-3 ">
          <span
            className={`${
              props.havePreTitle == false ? "hidden" : " "
            } font-Noto font-bold text-[0.9rem] uppercase`}>
            {props.preTitle}
          </span>
          <h2 className="title-section">{props.title}</h2>
          <span className="content-section">{props.span}</span>
        </div>
        {props.urlButton && (
          <a href={props.urlButton} className="button-default w-3/4">
            {props.textButton}
          </a>
        )}
      </div>
    </section>
  );
}
