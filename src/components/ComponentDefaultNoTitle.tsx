interface PropsSectionNoTitleMain {
  urlImage: string;
  title: string;
  span: string;
  urlButton: string;
  textButton: string;
  flexDirection: string;
  alt: string;
}

export default function ComponentDefaultNoTitle(
  props: PropsSectionNoTitleMain
) {
  return (
    <section
      className={`flex flex-col gap-3 p-5 items-center max-w-screen nv:max-w-[70rem] xl:${props.flexDirection}`}>
      <div className="xl:w-1/2">
        <img src={props.urlImage} alt={props.alt} className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-center p-2.5 xl:w-1/2 xl:text-left xl:items-baseline xl:pl-14">
        <h2 className="title-section">{props.title}</h2>
        <span className="content-section">{props.span}</span>
        <a href={props.urlButton} target="_blank" className="button-default">
          {props.textButton}
        </a>
      </div>
    </section>
  );
}
