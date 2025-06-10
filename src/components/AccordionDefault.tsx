import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface PropsAccordion {
  title: string;
  content: string;
}
export default function AccordionDefault(props: PropsAccordion) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent>{props.content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
