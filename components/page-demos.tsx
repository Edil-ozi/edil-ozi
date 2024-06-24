import InfiniteTextDemo from "@/registry/components/example/infinite-text-demo";
import CardWrapper from "./card-wrapper";
import RotateBetweenWords from "@/registry/components/example/rotate-between-demo";
import InfiniteText from "@/registry/components/edil-ozi/infinite-text";

const words=[
  "Web Development.",
  "UI/UX Design.",
  "Frontend Frameworks.",
  "Responsive Design.",
  "JavaScript Libraries.",
]
const components = [
  { text: "hahah", component: <RotateBetweenWords/>, className: "col-span-2"},
  { text: "", component: <InfiniteTextDemo />, className: "col-span-1" },
]
function PageDemos() {
  return (
    <div className="grid grid-col-2 w-full">
      {components.map(({text, component, className}) =>
        <div className={`relative flex h-full p-3 w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background py-4 md:shadow-xl ${className}`}>
          {component}
        </div>
      )}
    </div>
  )
}

export default PageDemos;
