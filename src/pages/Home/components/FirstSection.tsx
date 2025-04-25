import EmblaCarousel from "./carrossel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES: any = [];

export default function FirstSection() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
