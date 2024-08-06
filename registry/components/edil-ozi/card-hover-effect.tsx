import { FC, useState } from 'react';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  items: { title: string; description: string }[]
  wrapperClasses?: string
  itemClasses?: string
};

const Index: FC<Props> = ({ items, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn("grid md:grid-cols-3", itemClasses)}>
      {items.map(({ description, title }, idx) => (
        <div
          key={idx}
          className={cn("relative flex flex-col gap-3 p-4", itemClasses)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <AnimatePresence>
            {hoveredIdx === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 z-0 block h-full w-full rounded-xl bg-stone-200 dark:bg-stone-800",
                  wrapperClasses
                )}
                layoutId="cardHoverEffect"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="z-1 space-y-3">
            <h1 className="font-medium">{title}</h1>
            <p className="text-neutral-900 dark:text-neutral-400">{description}</p>
          </div>
        </div>
      ))}
    </div>

  )
};
export default Index

