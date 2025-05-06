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
    <div className="rouded-b-md rounded-r-md shadow-md">
      <img
        src={urlImage}
        alt={titleCard}
        className="rounded-t-md rounded-r-md"
      />
      <div className="flex flex-col gap-1.5">
        <h2 className="font-Noto font-bold text-[1.25rem]">{titleCard}</h2>
        <span className="font-Noto font-normal text-base">{content}</span>
        <a
          href={urlAncora}
          className="font-Noto font-bold text-[1.1rem] underline-offset-4">
          Saiba mais
        </a>
      </div>
    </div>
  );
}
