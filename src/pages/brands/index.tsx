const brands = [
  "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/christmas/Coca-Cola-original-logo-co.svg",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/sprite/br_sprite_logo.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/fanta-ccxp/fanta_logo.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/logos/Logo_Schweppes.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/logos/crystal_logo_500x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/logos/kuat_logo.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/lemon-dou/es_Mexico_Lemon-Dou_Logotype_Blue_500x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/jack-daniels/Brazil_JandC_Logo_180x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/del-valle/finals/es_Global%20delValle%20Logo%204C_180x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/logos/es_ades_logo_180x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/logos/brazil_schweppes_logo_anuncio_197x180.png",
  "https://www.coca-cola.com/content/dam/onexp/br/pt/brands/powerade/logo_pwd.png",
];

export default function BrandsComponent() {
  return (
    <section className="flex flex-col justify-center items-center px-5 pb-14 gap-8 pt-10 md:gap-8 lg:max-w-[70rem] lg:pt-14 lg:pb-20">
      <h1 className="title-section">Explore Nossas Marcas</h1>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {brands.map((brand) => (
          <div className="flex justify-center items-center h-[11.25rem] w-[11.25rem] bg-white p-5 md:h-[22rem] md:w-[22rem] shadow-lg rounded-md  lg:w-[14rem] lg:h-[14rem] hover:scale-105 transition-transform">
            <img src={brand} alt="Logo Sprite" />
          </div>
        ))}
      </div>
    </section>
  );
}
