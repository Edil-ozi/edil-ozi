import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
  disabled?: boolean;
};
const AccordionDemoDisabled = () => {
  const accordions: Accordion[] = [
    {
      title: "Why we?",
      text: "We made new future, new design, new abilities. very very very very very very very very very very very very very very very very very very very very very very very very very very very long text",
    },
    { title: "Is it animated ?", text: "Just a little bit." },
    { title: "Disabled accordion", text: "How did you open it?", disabled: true },
    { title: "How do I access documentation?", text: "There is below documentation about this API." },
  ];
  return (
    <div className="z-10 w-full">
      <Accordion multiple={false}>
        {accordions.map(({ title, text, disabled }) => (
          <AccordionItem
            key={title}
            value={title}
            className="border-b border-b-neutral-300 dark:border-b-neutral-800"
            disabled={disabled}
          >
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}


export default AccordionDemoDisabled