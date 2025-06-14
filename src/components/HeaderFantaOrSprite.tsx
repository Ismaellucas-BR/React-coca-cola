interface PropsFantaOrSprite {
  urlImage: string;
  alt: string;
}
export default function HeaderFantaOrSprite(props: PropsFantaOrSprite) {
  return (
    <div className="w-full flex justify-center items-center bg-white py-5">
      <img className="h-12 w-24" src={props.urlImage} alt={props.alt} />
    </div>
  );
}
