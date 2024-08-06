import CardHoverEffect from '@/registry/components/edil-ozi/card-hover-effect'

const items = [
  {
    title: "Edil Ozi",
    description:
      "Explore the principles of minimalist design, where simplicity and functionality converge.",
  },
  {
    title: "Color Psychology in UI/UX Design",
    description:
      "Discover how to strategically use colors to evoke emotions, convey messages, and improve overall design effectiveness",
  },
  {
    title: "Responsive Design for a Seamless User Experience",
    description:
      "Learn techniques to create adaptable interfaces that provide a consistent and optimal user experience across various screen sizes.",
  },
  {
    title: "Typography in Digital Design",
    description:
      "Explore different font types, pairings, and typographic hierarchies to enhance readability, convey brand personality, and elevate your designs.",
  },
  {
    title: "User-Centered Design: Putting People First",
    description:
      "Dive into the principles of user-centered design, where user needs and preferences guide the design process.",
  },
  {
    title: "The Future of Interactive Design",
    description:
      "From augmented reality to voice interfaces, explore how emerging innovations are transforming the way users interact with digital products.",
  },
];

const Index = () => {
  return (
    <div className='bg-stone-100 dark:bg-stone-900 z-10 px-10 py-8 rounded-xl'>
      <CardHoverEffect items={items} />
    </div>
  )
};
export default Index