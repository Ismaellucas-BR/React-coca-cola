interface PropsSectionPlusTitleMain {
  titleMain: string;
  subTitle?: string;
  titleSecondary: string;
  span: string;
  textButton: string;
  urlButton: string;
  urlImg: string;
  alt: string;
  flexDirection?: string;
  FirstSectionPadding?: string;
}

export default function ComponentDefaultPlusTitle(
  props: PropsSectionPlusTitleMain
) {
  return (
    <section
      className={`flex flex-col justify-center items-center text-center max-w-screen nv:max-w-[70rem] w-full gap-3 ${props.FirstSectionPadding}`}>
      <h3 className="font-Noto font-bold text-[1.8rem] xl:text-[2rem] text-black">
        {props.titleMain}
      </h3>

      {props.subTitle && (
        <span className="content-section !text-lg px-7">{props.subTitle}</span>
      )}

      <div className={`flex flex-col-reverse xl:${props.flexDirection}`}>
        <div className="flex flex-col justify-center items-center text-black text-center gap-3 px-10 p-5 lg:w-full xl:w-1/2 xl:text-left xl:items-baseline xl:pr-16 ">
          <h2 className="font-Noto font-bold text-[1.8rem] leading-8 xl:text-[2rem] xl:leading-9">
            {props.titleSecondary}
          </h2>
          <span className="font-Noto text-[1.1rem] font-normal">
            {props.span}
          </span>
          <a
            href={props.urlButton}
            className="mt-5 w-full xl:w-3/5 text-center border-2 border-black text-black rounded-full shadow px-16 py-2 font-Noto font-bold xl:py-1">
            {props.textButton}
          </a>
        </div>
        <div className="px-8 pb-2 pt-5 lg:w-full xl:w-1/2">
          <img
            className="rounded-lg lg:w-full"
            alt={props.alt}
            src={props.urlImg}
          />
        </div>
      </div>
    </section>
  );
}
