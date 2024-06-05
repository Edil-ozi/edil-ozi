import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
}
export default function AccordionDemo() {
  const accordions: Accordion[] = [
    { title: "Why we?", text: "We made new future, new design, new abilities. very very very very very very very very very very very long text"},
    { title: "Is it animated ?", text: "Just a little bit."},
    { title: "How do I access documentation?", text: "There is below documentation about this API."},
  ]
  return (
    <div className="max-w-[500px] z-10">
      <Accordion multiple={false}>
        {accordions.map(({ title, text}) =>
          <AccordionItem key={title} value={title} className="border-b border-b-neutral-300 dark:border-b-neutral-800">
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        )}
          <AccordionItem key={'last'} value={'last'} className="border-b border-b-neutral-300 dark:border-b-neutral-800" disabled={true}>
            <AccordionSummary>Disabled accordion</AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur placeat sunt neque maxime.</AccordionDetails>
          </AccordionItem>
      </Accordion>
    </div>

  );
}