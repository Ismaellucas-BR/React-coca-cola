export default function FormSections() {
  return (
    <section className="section-main xl:max-w-[46rem]">
      <div className="flex flex-col gap-2 font-Noto text-base">
        <h2 className="title-section">Fique por dentro de tudo!</h2>
        <span>
          Seja o primeiro a receber novidades e participar de novas experiências
          junto com a Coca-Cola.
        </span>
        <span>Os campos marcados com asterisco (*) são obrigatórios.</span>
      </div>
      <form action="#" className="flex flex-col gap-7">
        <div className="div-form">
          <label htmlFor="" className="font-Noto text-[0.8rem]">
            Nome*
          </label>
          <input
            type="text"
            placeholder="Nome"
            className="input-form p-2 border rounded"
          />
        </div>

        <div className="div-form">
          <label htmlFor="" className="font-Noto text-[0.8rem]">
            Endereço de email*
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input-form p-2 border rounded"
          />
        </div>

        <div className="div-form">
          <label htmlFor="" className="font-Noto text-[0.8rem]">
            Data de nascimento*
          </label>
          <input
            type="date"
            placeholder="Data"
            className="input-form p-2 border rounded"
          />
        </div>

        <div className="div-form">
          <label className="relative flex items-start gap-3 cursor-pointer font-Noto text-lg">
            <input
              type="checkbox"
              name="promocoes"
              required
              className="peer appearance-none border-2 border-black bg-white rounded w-10 h-6 checked:bg-[#6c6c6c] md:w-6"
            />
            <span className="pointer-events-none absolute left-[6px] top-[2px] text-white text-sm peer-checked:opacity-100 opacity-0 transition-opacity">
              ✔
            </span>
            <span>
              Concordo em receber comunicações sobre promoções e marcas da
              Coca-Cola.
            </span>
          </label>

          <label className="relative flex items-start gap-3 mt-4 cursor-pointer font-Noto text-lg">
            <input
              type="checkbox"
              name="aceita_termos"
              required
              className="peer appearance-none border-2 border-black bg-white rounded w-10 h-6 checked:bg-[#6c6c6c] md:w-6"
            />
            <span className="pointer-events-none absolute left-[6px] top-[2px] text-white text-sm peer-checked:opacity-100 opacity-0 transition-opacity">
              ✔
            </span>
            <span>
              Li e aceito os{" "}
              <a
                href="/termos.html"
                target="_blank"
                className="text-black font-bold underline">
                Termos de Uso
              </a>{" "}
              e a{" "}
              <a
                href="/termos.html"
                target="_blank"
                className="text-black font-bold underline">
                Política de Privacidade
              </a>{" "}
              do Consumidor da Coca-Cola.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded mt-4">
          Enviar
        </button>
      </form>
    </section>
  );
}
