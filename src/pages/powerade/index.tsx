import SectionFloatContent from "@/components/SectionFloatContent";
import FormSections from "../shareACoke/components/FormSections";

export default function Powerade() {
  return (
    <div className="flex flex-col items-center gap-15 pt-15 lg:gap-5">
      <FormSections
        title="Faça uma pausa e junte-se à comunidade com mais power
"
        span1="Cadastre-se e não perca os próximos eventos, histórias inspiradoras e muito mais para você."
      />
      <SectionFloatContent
        urlImage="https://www.coca-cola.com/content/dam/onexp/br/pt/offerings/powerade-olympics/notify-me/notifyme_card_powerade_desktop_br.jpg/width1960.jpg"
        alt="Ciclista de bicicleta de terno preto, viseiras e capacete"
        title="Dê um respiro para se inspirar"
        span="Motive-se com as histórias de atletas que fazem uma pausa para pegar o impulso perfeito nas nossas redes. Dê uma pausa hoje e conquiste o mundo amanhã."
        havePreTitle={false}
        extraClassSection="flex-col lx:flex xl:!flex-row"
        extraClassDiv="-top-10 xl:-left-10"
      />
    </div>
  );
}
