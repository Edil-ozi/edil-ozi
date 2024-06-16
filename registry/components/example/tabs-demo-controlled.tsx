import { useState } from "react";

import { Tabs, Tab, TabContainer, TabPanel } from "@/registry/components/edil-ozi/tabs";
import PricingCard from "../edil-ozi/pricing-card";

export default function TabsDemo() {
  const [selected, setSelected] = useState("Manual");

  const tabs = ["Monthly", "Annual"];
  const cards = [
    {
      heading: "Basic",
      description: "For Daily Usage",
      price: 0,
      list: ["Free", "20+ components", "Open Source", "Light weight"],
      buttonText: "Start Enjoying!",
      className: "",
    },
    {
      heading: "Professional",
      description: "For Professional Usage",
      price: selected === "Monthly" ? 9 : 94,
      discount: 12,
      list: ["30+ Components", "10+ Animations", "With beautiful view", "LightWeight"],
      buttonText: "Book now!",
      className: "",
    },
    {
      heading: "Enterprise",
      description: "For Teams & Enterprises",
      price: selected === "Monthly" ? 29 : 298,
      discount: 18,
      list: ["Dedicated Support", "Everything in Professional plan", "With beautiful view", "training sessions"],
      buttonText: "Book now!",
      className: "",
    },
  ];

  return (
    <div className="z-10 w-full p-2 py-6">
      <h1 className="text-center text-4xl">Fair pricing, amazing advantage.</h1>
      <h5 className="my-4 text-center text-xl">
        Get started with Edil-Ozi today and take your business to the next level!
      </h5>
      <TabContainer
        onChange={setSelected}
        className="flex flex-col items-center"
      >
        <Tabs
          className="flex justify-center bg-transparent shadow-none dark:bg-transparent"
          activeClassName="bg-gradient-to-br from-indigo-700 to-purple-700 rounded-md shadow-md"
        >
          {tabs.map((title) => (
            <Tab
              key={title}
              value={title}
              className={`text-xl font-bold ${selected === title && "text-white"}`}
            >
              {title}
            </Tab>
          ))}
        </Tabs>
        <TabPanel
          value={selected}
          className="flex flex-col items-center justify-center space-y-4 bg-transparent shadow-none dark:bg-transparent lg:flex-row lg:items-stretch lg:space-x-4 lg:space-y-0"
        >
          {cards.map((card, index) => (
            <PricingCard
              key={index}
              {...card}
            ></PricingCard>
          ))}
        </TabPanel>
      </TabContainer>
    </div>
  );
}
