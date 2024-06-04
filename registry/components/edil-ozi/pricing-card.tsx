import { FC } from "react";

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

interface Props extends Card {}

const PricingCard: FC<Props> = ({
  heading,
  description,
  price,
  discount,
  list,
  listHeading,
  buttonText,
  className,
  onClick,
}) => {
  const withDiscount = (function () {
    return price - (price * (discount ?? 100)) / 100;
  })();
  return (
    <div
      className={`relative w-full min-w-56 max-w-[300px] transform overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br from-indigo-900 to-gray-900 p-6 shadow-lg transition duration-300 hover:scale-[none] md:hover:scale-105 lg:p-8 xl:min-w-[310px] ${className}`}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="mb-4 lg:mb-6 xl:mb-8">
          <h3 className="mb-2 text-2xl font-semibold lg:mb-4 lg:text-3xl xl:text-4xl">
            {heading}
          </h3>
          <p className="text-gray-300 lg:text-base xl:text-xl">{description}</p>
        </div>
        <div>
          <div className="mb-3 flex space-x-2 xl:mb-4">
            <span className="text-3xl font-extrabold lg:text-4xl xl:text-5xl">
              ${discount ? withDiscount : price}
            </span>
            {discount && (
              <span className="text-gray-400 line-through md:text-lg lg:text-xl xl:text-2xl">
                {price}$
              </span>
            )}
          </div>
          {discount && (
            <div className="origin-center-right absolute right-[-50%] top-0 w-full -translate-x-6 translate-y-4 rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 text-center lg:text-lg xl:text-xl">
              {discount}%
            </div>
          )}
          <button
            onClick={onClick}
            className="w-full rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-center font-medium text-white hover:from-blue-600 hover:to-purple-600 sm:text-lg lg:text-xl xl:text-2xl"
          >
            {buttonText}
          </button>
          <ul
            className={`mt-4 space-y-1 text-gray-200 lg:mt-6 lg:text-lg xl:mt-8 xl:text-xl`}
          >
            <h5>{listHeading}</h5>
            {list.map((text, index) => (
              <li key={index} className={`flex items-center`}>
                <svg
                  className="mr-2 h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PricingCard;
