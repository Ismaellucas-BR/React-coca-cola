import { useEffect } from "react";

export default function SixthSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="flex justify-center px-5 pb-20 lg:max-w-[70rem] lg:w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DJb9nc7PRN1/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: "1em auto",
          maxWidth: 540,
          width: "100%",
        }}></blockquote>
    </section>
  );
}
