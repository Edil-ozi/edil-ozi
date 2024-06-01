import PricingCard from "../edil-ozi/pricing-card";

export default function PricingCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      <PricingCard
        heading="Room 1"
        description="One of the best rooms"
        price={299}
        discount={40}
        list={["Clean", "Soft", "With beautiful view", "Bedroom"]}
        buttonText="Book now!"
      />
      <PricingCard
        heading="Room 2"
        description="One of the best rooms"
        price={399.45}
        listHeading="Why should you choose us:"
        list={["Clean", "Soft", "With beautiful view", "Bedroom"]}
        buttonText="Book now!"
      />
      <PricingCard
      className="hidden xl:block"
        heading="Room 3"
        description="One of the best rooms"
        price={499}
        discount={15}
        listHeading="Why should you choose us:"
        list={["Clean", "Soft", "With beautiful view", "Bedroom"]}
        buttonText="Book now!"
      />
    </div>
  );
}
