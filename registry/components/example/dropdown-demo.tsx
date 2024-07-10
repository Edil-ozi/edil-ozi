import Dropdown from "@/registry/components/edil-ozi/dropdown";

const items = [
  {
    name: "Github",
    link: "https://github.com/Edil-ozi/edil-ozi",
  },
  {
    name: "Twitter",
    link: "https://x.com/shatlyk1415",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com",
  },
];

export default function DropdownDemo() {
  return (
    <div className="flex h-96 items-center">
      <Dropdown
        text="Links"
        items={items}
      />
    </div>
  );
}
