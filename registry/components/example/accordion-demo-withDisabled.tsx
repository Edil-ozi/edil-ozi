import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
  disabled?: boolean;
};
const AccordionDemoDisabled = () => {
  const accordions: Accordion[] = [
    {
      title: "How do I access documentation?",
      text: "There is below documentation about this API.",
    },
    {
      title: "Form Validation Techniques",
      text: "Implementing client-side form validation with JavaScript improved data integrity and provided immediate feedback to users on input errors.",
    },
    {
      title: "Disabled accordion",
      text: "How did you open it?",
      disabled: true,
    },
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
};

export default AccordionDemoDisabled;
