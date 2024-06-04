import { FC } from "react"

type Logo = { title: string, url: string }

interface Props {
  logos: Logo[]
  animate?: boolean
  shadows?: boolean
}

const LogoCarousel: FC<Props> = ({ logos, animate = true, shadows = true }) => {
  return (
    <div
      className="flex space-x-6 overflow-hidden"
      style={{
        maskImage:
          `${shadows && "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)"}`
      }}
    >
      {/* If your logos don't fit entirely on your screen, try increasing the length of the array below. */}
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`flex shrink-0 space-x-6 ${animate && "animate-logo-carousel"}`}>
          {logos.map(({ title, url }) => (
            <img
              key={title}
              src={url}
              className="h-10 w-28 px-2 brightness-0 dark:invert"
              alt={title}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default LogoCarousel