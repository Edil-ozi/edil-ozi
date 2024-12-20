'use client';
import { useState } from 'react';

import TextScramble from '@/registry/components/edil-ozi/text-scramble';

const TextScrambleDemo = () => {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <a
      href='#'
      className='text-zinc-500 transition-colors hover:text-black dark:hover:text-white z-10'
    >
      <TextScramble
        className='text-sm z-10'
        as='span'
        speed={0.01}
        trigger={isTrigger}
        onHoverStart={() => setIsTrigger(true)}
        onScrambleComplete={() => setIsTrigger(false)}
      >
        Tyler, The Creator - I Hope You Fin Your Way Home
      </TextScramble>
    </a>
  );
}

export default TextScrambleDemo