import { Accordion, AccordionItem, AccordionSummary, AccordionDetails } from "../edil-ozi/accordion";

type Accordion = {
  title: string;
  text: string;
};
const AccordionDemo = () => {
  const accordions: Accordion[] = [
    {
      title: "Cross-Browser Compatibility",
      text: "Ensuring cross-browser compatibility, we tested our web application on multiple browsers and platforms to provide a consistent user experience.",
    },
    {
      title: "Implementing Dark Mode",
      text: "We added a dark mode toggle to our website, allowing users to switch between light and dark themes based on their preferences."
    },
    {
      title: "Single Page Applications (SPA)",
      text: "Developing our site as a single page application (SPA) with Vue.js improved the user experience by reducing page reloads and increasing responsiveness."
    },
  ];
  return (
    <div className="z-10 w-full">
      <Accordion multiple={false}>
        {accordions.map(({ title, text }) => (
          <AccordionItem
            key={title}
            value={title}
          >
            <AccordionSummary>{title}</AccordionSummary>
            <AccordionDetails>{text}</AccordionDetails>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionDemo