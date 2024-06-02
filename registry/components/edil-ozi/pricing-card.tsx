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
}

interface Props extends Card {

}


const PricingCard: FC<Props> = ({ heading, description, price, discount, list, listHeading, buttonText, className, onClick }) => {

  const withDiscount = (function () {
    return price - ((price * (discount ?? 100)) / 100);
  })()
  return (
    <div className={`bg-gradient-to-br w-full max-w-[300px] from-indigo-900 to-gray-900 relative border xl:min-w-[310px] min-w-56 border-gray-800 rounded-lg shadow-lg p-6 lg:p-8 transform hover:scale-[none] md:hover:scale-105 transition duration-300 overflow-hidden ${className}`}>
      <div className="flex flex-col justify-between h-full">

      <div className="mb-4 lg:mb-6 xl:mb-8">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-2 lg:mb-4">{heading}</h3>
          <p className=" text-gray-300 lg:text-base xl:text-xl">{description}</p>
      </div>
        <div>

          <div className="mb-3 flex space-x-2 xl:mb-4">
            <span className="text-3xl lg:text-4xl xl:text-5xl font-extrabold ">${(discount ? withDiscount : price)}</span>
            {discount && <span className="text-gray-400 line-through md:text-lg lg:text-xl xl:text-2xl">{price}$</span>}
      </div>
      {discount && <div className="top-0 right-[-50%] lg:text-lg xl:text-xl -translate-x-6 translate-y-4 origin-center-right w-full text-center rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 absolute ">
        {discount}%
      </div>}
      <button
      onClick={onClick}
            className="w-full py-2 px-6 text-center sm:text-lg lg:text-xl xl:text-2xl rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
      >
        {buttonText}
      </button>
          <ul className={`space-y-1 text-gray-200 lg:text-lg xl:text-xl mt-4 lg:mt-6 xl:mt-8 `}>
            <h5>{listHeading}</h5>
        {list.map((text, index) => (
          <li
            key={index}
            className={`flex items-center `}
          >
            <svg
              className="h-5 w-5 text-green-400 mr-2"
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
