import PricingCard from "@/registry/components/edil-ozi/pricing-card";

type Card = {
  heading: string;
  description: string;
  price: number;
  buttonText: string;
  list: string[];
  discount?: number;
  listHeading?: string;
  className?: string;
  onClick?: () => void;
};

export default function PricingCardDemo() {
  const cards: Card[] = [
    {
      heading: "Room 1",
      description: "One of the best rooms longer text sample ",
      price: 299,
      discount: 40,
      list: ["Clean", "Soft", "With beautiful view", "Bedroom"],
      buttonText: "Book now!",
      className: "",
    },
    {
      heading: "Room 2",
      description: "One of the best rooms",
      price: 399.45,
      list: ["Clean", "Soft", "With beautiful view", "Bedroom"],
      buttonText: "Book now!",
      className: "",
    },
    {
      heading: "Room 3",
      description: "One of the best rooms",
      price: 499,
      discount: 15,
      list: ["Clean", "Soft", "With beautiful view", "Bedroom"],
      buttonText: "Book now!",
      className: "",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card) => (
        <PricingCard
          key={card.heading}
          {...card}
        />
      ))}
    </div>
  );
}
