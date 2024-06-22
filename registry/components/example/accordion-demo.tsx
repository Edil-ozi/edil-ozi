import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "@/registry/components/edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
  defaultExpanded?: boolean;
};
const AccordionDemo = () => {
  const accordions: Accordion[] = [
    {
      title: "Try light/dark modes",
      text: "Our components provide the best user experience in both dark and light modes.",
    },
    {
      title: "Implementing Responsive Design",
      text: "To ensure our website looks great on all devices, we utilized a responsive design approach with CSS media queries and flexible grid layouts.",
    },
    {
      title: "Optimizing Performance",
      text: "By lazy-loading images and leveraging browser caching, we significantly improved the performance and loading speed of our web application.",
    },
  ];
  return (
    <div className="z-10 w-full">
      <Accordion>
        {accordions.map(({ title, text, defaultExpanded }) => (
          <AccordionItem
            key={title}
            value={title}
            className="border-b border-b-neutral-300 dark:border-b-neutral-800"
          >
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionDemo;
