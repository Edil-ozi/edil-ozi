"use client";
import { FC } from "react";

interface Props {
  text: string;
}

const TextGlitch: FC<Props> = ({ text }) => {
  text;
  return (
    <div className="group relative inline-block overflow-hidden">
      <span className="invisible">Text Glitch Effect</span>
      <span className="absolute left-0 top-0 text-zinc-800 transition duration-300 ease-in-out group-hover:-translate-y-full dark:text-gray-400">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full text-zinc-800 transition duration-300 ease-in-out group-hover:translate-y-0 dark:text-gray-400">
        {text}
      </span>
    </div>
  );
};

export default TextGlitch;
