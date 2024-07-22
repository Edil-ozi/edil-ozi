import { cn } from '@/lib/utils'
import { HTMLProps } from 'react'

interface BackgroundGridProps {
  color: string
  cellSize: string | number
  strokeWidth: number | string
  classes?: string
}

const BackgroundGrid = ({
  cellSize = '25px',
  strokeWidth = '3px',
  color = 'rgb(255, 100, 0, 0.6)',
  classes,
  ...props
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className={cn(`pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full ${classes}`)}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: cellSize,
      }}
      {...props}
    ></div>
  )
}

export default BackgroundGrid