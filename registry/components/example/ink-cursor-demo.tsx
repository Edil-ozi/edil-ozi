'use client'

import useInkCursor from '@/hooks/inkCursor'

const InkCursor = () => {

  const inkCursorComponent = useInkCursor();

  return (
    <>
      <div className='bg-zinc-100 dark:bg-zinc-900 w-full flex items-center justify-center text-center h-[350px] z-[10]'>
        Try it on the whole page
      </div>
      <div className='fixed top-0 left-0 z-[9]'>
        {inkCursorComponent}
      </div>
    </>
  )
};
export default InkCursor