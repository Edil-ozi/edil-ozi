import React, { Children, cloneElement, createContext, FC, ReactElement, ReactNode, useContext, useState } from "react";


interface AccordionProps {
  children: ReactNode;
  type?: string
}
interface AccordionSummary {
  children:ReactNode;
  value?:string;
  isExpanded?:boolean;
  handleClick?:() => void;
}
interface AccordionDetails {
  children: ReactNode;
}
interface AccordionItemProps {
  children:ReactNode;
  value: string;
  className: string;
}
interface AccordionContextType {
  activeItem: string;
  setToggle: (value: string) => void;
  type: string;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined)


const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("No context found for Accordion");
  }
  return context;
}

const Accordion:FC<AccordionProps> = ({children, type="multiple"}) => {
  const [activeItem, setActiveItem] = useState("")

  const setToggle = (value: string) => {
      setActiveItem(() => {
        if (activeItem !== value) return value;
        return "";
      });
    };

  return (
    <AccordionContext.Provider value={{ activeItem, setToggle, type }}>
      <div className="w-full z-50">
        {children}
      </div>
    </AccordionContext.Provider>
  )
};
const AccordionSummary: FC<AccordionSummary> = ({children, value, isExpanded, handleClick}) => {
  return (
    <>
      <input id={value} type="checkbox" readOnly checked={isExpanded} className="hidden peer/accordion"/>
      <label htmlFor={value} className="flex justify-between items-center font-medium cursor-pointer" onClick={handleClick}>
				<span>{children}</span>
      <span className={`transition ${isExpanded && "rotate-180"}`}>
        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
      </span>
			</label>
    </>
  )
}

const AccordionDetails: FC<AccordionDetails> = ({children}) => {
  return (
    <div className="text-neutral-900 dark:text-neutral-300 mt-3 hidden peer-checked/accordion:block peer-checked/accordion:animate-fadeIn">
			{children}
		</div>
  )
}

const AccordionItem:FC<AccordionItemProps> = ({children, value, className}) => {
  const {activeItem, setToggle, type} = useAccordionContext()
  const [activeItemMultiple, setActiveItemMultiple] = useState("")
  const isExpanded = type==="single" ? activeItem === value : activeItemMultiple === value

  const handleClick = () => {
    if (type === 'single') {
      setToggle(value)
    } else{
      setActiveItemMultiple(() => {
        if(activeItemMultiple !== value) {
          return value
        }
        return ""
      }
      )
    }
  };

  return (
    <div className={` p-4 ${className}`}>
      {Children.map(children, child => {
        return cloneElement(child as ReactElement, {
          value: value,
          isExpanded: isExpanded,
          handleClick: handleClick
        })
      })}
    </div>
  )
}

export {Accordion, AccordionItem, AccordionSummary, AccordionDetails }
