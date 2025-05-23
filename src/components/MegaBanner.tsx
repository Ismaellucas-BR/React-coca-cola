import { useEffect, useState } from "react";

interface PropsMegaBanner {
  urlImage: string;
  urlImageMobile: string;
  title: string;
  span: string;
}

export default function MegaBanner(props: PropsMegaBanner) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile ? props.urlImageMobile : props.urlImage;

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat min-h-[38.75rem] w-[90%] rounded-lg uppercase text-white md:min-h-[61.75rem] md:w-[60%] xl:min-w-[80rem] xl:w-[90%] xl:min-h-[37.75rem]">
      <span className="text-base font-semibold">{props.span}</span>
      <h2 className="text-lg font-bold lg:text-3xl">{props.title}</h2>
    </div>
  );
}
