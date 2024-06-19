import { Tabs, Tab, TabContainer, TabPanel } from "@/registry/components/edil-ozi/tabs";

const tabs = [
  {
    title: "Item 1",
    heading: "Section 1 Content",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae! Accusamus, sunt nisi! Accusantium error molestiae fugiat laboriosam consectetur mollitia consequuntur voluptatum modi amet, eligendi pariatur esse nesciunt assumenda. Neque.",
  },
  {
    title: "Item 2",
    heading: "Section 2 Content",
    text: "Consectetur adipisicing elit. Ratione, molestiae! Accusamus, sunt nisi! Accusantium error molestiae fugiat laboriosam consectetur mollitia consequuntur voluptatum modi amet.",
  },
  {
    title: "Item 3",
    heading: "Section 3 Content",
    text: "Adipisicing elit. Ratione, molestiae! Accusamus, sunt nisi! Accusantium error molestiae fugiat laboriosam consectetur mollitia consequuntur voluptatum modi amet, eligendi pariatur esse nesciunt assumenda.",
  },
  {
    title: "Item 4",
    heading: "Section 4 Content",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molestiae! Accusamus, sunt nisi! Accusantium error molestiae fugiat laboriosam consectetur mollitia consequuntur voluptatum modi amet, eligendi pariatur esse nesciunt assumenda. Neque.",
  },
];

const TabsDemo = () => {
  return (
    <div className="z-10 w-full p-3">
      <TabContainer>
        <Tabs>
          {tabs.map(({ title }) => (
            <Tab
              key={title}
              value={title}
            >
              {title}
            </Tab>
          ))}
        </Tabs>
        {tabs.map(({ title, heading, text }) => (
          <TabPanel
            key={title}
            value={title}
          >
            <h2 className="mb-2 text-2xl font-semibold text-blue-600">{heading}</h2>
            {text}
          </TabPanel>
        ))}
      </TabContainer>
    </div>
  );
}

export default TabsDemo