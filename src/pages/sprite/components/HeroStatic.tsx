interface HeroStaticProps {
  bgDesktop: string;
  bgMobile: string;
  title: string;
  text: string;
  preTitle?: string;
}

export default function HeroStatic({
  bgDesktop,
  bgMobile,
  title,
  text,
  preTitle,
}: HeroStaticProps) {
  return (
    <section className="relative w-full h-[65vh] md:h-[37.75rem]  rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${bgMobile})` }}
      />

      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto gap-1 md:gap-0   ">
        {preTitle && (
          <p className="text-white text-[0.75rem] font-bold font-subtitulo md:text-lg max-w-2xl">
            {preTitle}
          </p>
        )}
        <h1 className="text-white  font-bold  text-[1.5rem] leading-7 md:leading-12 md:text-[2rem]">
          {title}
        </h1>
        <p className="text-white text-base md:text-lg max-w-2xl">{text}</p>
      </div>
    </section>
  );
}
