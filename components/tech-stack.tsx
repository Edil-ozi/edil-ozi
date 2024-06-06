import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TechComponentType = {
  name: string;
  icon: JSX.Element;
};

type TechComponents = Record<string, TechComponentType>;

const techComponents: TechComponents = {
  nextjs: {
    name: "Next.js 14",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        fill="currentColor"
      >
        <title>Next.js</title>
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
      </svg>
    ),
  },
  react: {
    name: "React",
    icon: (
      <svg
        role="img"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        fill="currentColor"
      >
        <title>React</title>
        <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z" />
      </svg>
    ),
  },
  typescript: {
    name: "Typescript ",
    icon: (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        fill="currentColor"
      >
        <path d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z" />
      </svg>
    ),
  },

  tailwindcss: {
    name: "Tailwind CSS",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        fill="currentColor"
      >
        <title>Tailwind CSS</title>
        <path d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" />
      </svg>
    ),
  },
  framermotion: {
    name: "Framer Motion",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Framer Motion</title>
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
        <path d="M20 12l-8 8l-4 -4" />
      </svg>
    ),
  },
  shadcn: {
    name: "shadcn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="size-8"
        fill="none"
        stroke="currentColor"
      >
        {/* <rect width="256" height="256" fill="none"></rect> */}
        <line
          x1="208"
          y1="128"
          x2="128"
          y2="208"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="192"
          y1="40"
          x2="40"
          y2="192"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </svg>
    ),
  },
};

export default function TechStack({ technologies, className }: { technologies: string[]; className?: string }) {
  return (
    <div className={cn("not-prose flex flex-row gap-2", className)}>
      {technologies.map((tech) => (
        <Tooltip key={tech}>
          <TooltipTrigger>{techComponents[tech].icon}</TooltipTrigger>
          <TooltipContent>
            <p>{techComponents[tech].name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
