import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
export interface CardProps {
  urlImage: string;
  titleCard: string;
  content: string;
  textButton?: string;
  urlAncora?: string;
  alt: string;
}
export default function CardDefault({
  urlImage,
  titleCard,
  content,
  urlAncora,
  alt,
  textButton,
}: CardProps) {
  return (
    <div className="flex flex-col shadow-md rounded-lg w-full lg:w-[22rem] min-h-[37.5rem]">
      <img
        src={urlImage}
        alt={alt}
        className="rounded-t-md h-[16.5rem] w-full object-cover md:h-[45rem] lg:h-[16.5rem]"
      />

      <div className="flex flex-col justify-between flex-1 py-5 px-7 pb-6 bg-white rounded-b-lg">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-Noto font-bold text-[1.25rem] lg:text-[1.5rem]">
            {titleCard}
          </h2>
          <span className="font-Noto font-normal text-base">{content}</span>
        </div>

        {textButton && (
          <a
            href={urlAncora}
            className="flex gap-1.5 items-center font-Noto font-bold text-[1.1rem] underline mt-4 arrowAfter">
            {textButton?.trim() === "" ? "Saiba mais" : textButton}
            <ArrowRight className="fill-black" size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
