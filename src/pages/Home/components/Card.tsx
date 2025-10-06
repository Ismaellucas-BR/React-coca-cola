import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
interface CardProps {
  urlImage: string;
  titleCard: string;
  content: string;
  urlAncora: string;
}

export default function Card({
  urlImage,
  titleCard,
  content,
  urlAncora,
}: CardProps) {
  return (
    <div className="rounded-md shadow-md bg-white">
      <img
        src={urlImage}
        alt={titleCard}
        className="rounded-tl-md rounded-tr-md"
      />
      <div className="flex flex-col gap-1.5 p-5 pb-6 ">
        <h2 className="font-Noto font-bold text-[1.25rem] lg:text-[1.5rem] lg:font-bold">
          {titleCard}
        </h2>
        <span className="font-Noto font-normal text-base">{content}</span>
        <a
          href={urlAncora}
          className="flex gap-1.5 items-center font-Noto font-bold text-[1.1rem] underline mt-4 arrowAfter">
          Saiba mais
          <ArrowRight className="fill-black" size={18} />
        </a>
      </div>
    </div>
  );
}
