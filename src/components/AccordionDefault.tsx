import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";
interface PropsAccordion {
  title: string;
  content: ReactNode;
}
export default function AccordionDefault(props: PropsAccordion) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-Noto font-bold text-base capitalize border-y border-[#737373/40] rounded-none hover:cursor-pointer transition-all">
          {props.title}
        </AccordionTrigger>
        <AccordionContent>{props.content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
