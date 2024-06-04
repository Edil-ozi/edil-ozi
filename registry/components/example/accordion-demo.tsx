import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  value: string;
  title: string;
  text: string;
}
export default function AccordionDemo() {
  const accordions: Accordion[] = [
    {value: "item-1", title: "Why we?", text: "We made new future, new design, new abilities."},
    {value: "item-2", title: "Is it animated ?", text: "Just a little bit."},
    {value: "item-3", title: "How do I access documentation?", text: "There is below documentation about this API."},
  ]
  return (
      <Accordion type="single">
        {accordions.map(({value, title, text}) =>
          <AccordionItem key={value} value={value} className="p-5 border-b border-b-neutral-700">
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        )}
      </Accordion>

  );
}