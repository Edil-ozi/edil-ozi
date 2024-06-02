import { FC } from "react";

interface Props {
  heading: string;
  description: string;
  price: number;
  discount?: number;
  list: string[];
  listHeading?:string;
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

function withDiscount(price:number, discount:number) {
  const res = price - ((price * discount) / 100);
  return res
}

const PricingCard: FC<Props> = ({ heading, description, price, discount, list, listHeading, buttonText, className, onClick }) => {
  return (
    <div className={`bg-gradient-to-br h-fit w-fit from-indigo-900 to-gray-900 relative border xl:min-w-[310px] min-w-56 border-gray-800 rounded-lg shadow-lg p-6 lg:p-8 transform hover:scale-105 transition duration-300 overflow-hidden ${className}`}>
      <div className="mb-4 lg:mb-6 xl:mb-8">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-white">{heading}</h3>
        <p className="mt-2 lg:mt-4 text-gray-300 lg:text-xl xl:text-2xl">{description}</p>
      </div>
      <div className="mb-6 flex space-x-2 xl:mb-8">
        <span className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white">${(!discount ? price : withDiscount(price, discount)).toFixed(2)}</span>
        {discount && <span className="text-gray-300 line-through md:text-lg lg:text-xl xl:text-2xl">${(price * discount / 100).toFixed(0)}</span>}
      </div>
      {discount && <div className="top-0 right-[-50%] lg:text-lg xl:text-xl -translate-x-6 translate-y-4 origin-center-right w-full text-center rotate-45 bg-gradient-to-r from-blue-500 to-purple-500 absolute ">
        {discount}%
      </div>}
      <button
      onClick={onClick}
        className="w-full mb-4 lg:mb-6 xl:mb-8 py-2 px-6 text-center sm:text-lg lg:text-xl xl:text-2xl rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
      >
        {buttonText}
      </button>
      <ul className={`space-y-1 text-gray-200 lg:text-lg xl:text-xl ${list}`}>
        <li>{listHeading}</li>
        {list.map((text, index) => (
          <li
            key={index}
            className={`flex items-center ${list}`}
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
  );
};
export default PricingCard;
