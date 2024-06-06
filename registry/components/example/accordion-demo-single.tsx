import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
}
export default function AccordionDemo() {
  const accordions: Accordion[] = [
    { title: "Why we?", text: "We made new future, new design, new abilities. very very very very very very very very very very very very very very very very very very very very very very very very very very very long text" },
    { title: "Is it animated ?", text: "Just a little bit."},
    { title: "How do I access documentation?", text: "There is below documentation about this API."},
  ]
  return (
    <div className="w-full z-10">
      <Accordion multiple={false}>
        {accordions.map(({ title, text}) =>
          <AccordionItem key={title} value={title}>
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        )}
      </Accordion>
    </div>

  );
}