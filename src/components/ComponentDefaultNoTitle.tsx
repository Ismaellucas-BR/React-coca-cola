interface PropsSectionNoTitleMain {
  urlImage: string;
  title: string;
  span: string;
  urlButton?: string;
  textButton?: string;
  openInNewTab?: boolean;
  flexDirection: string;
  alt: string;
}

export default function ComponentDefaultNoTitle(
  props: PropsSectionNoTitleMain
) {
  return (
    <section
      className={`flex flex-col gap-3 p-5 items-center max-w-screen md:w-full xl:max-w-[70rem] nv:max-w-[70rem] xl:${props.flexDirection}`}>
      <div className="md:w-full xl:w-1/2">
        <img
          src={props.urlImage}
          alt={props.alt}
          className="md:w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center text-center p-2.5 xl:w-1/2 xl:text-left xl:items-baseline xl:pl-14">
        <h2 className="title-section">{props.title}</h2>
        <span className="content-section">{props.span}</span>
        {props.urlButton && (
          <a
            href={props.urlButton}
            onClick={(e) => {
              if (!props.openInNewTab) {
                e.preventDefault();
                window.location.href = props.urlButton!;
              }
            }}
            target={props.openInNewTab ? "_blank" : undefined}
            rel={props.openInNewTab ? "noopener noreferrer" : undefined}
            className="button-default">
            {props.textButton}
          </a>
        )}
      </div>
    </section>
  );
}
