import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroCTAProps {
  href: string
  children: ReactNode
  external?: boolean
}

export function HeroCTA({
  href,
  children,
  external = false,
}: HeroCTAProps) {
  const base = `
    inline-flex items-center justify-center
    rounded-full
    px-8 py-3
    font-medium
    backdrop-blur-md
    transition-all duration-300 ease-out
    hover:scale-105
    hover:shadow-lg
  `

  const style = `
    border border-white/40
    bg-white/10
    text-white
    hover:bg-white hover:text-black
  `

  /** CTA 點擊追蹤（Google Ads Conversion） */
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.trackCTAConversion?.()
      // debug 用，可留可刪
      // console.log('[CTA] HeroCTA conversion fired')
    }
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={base + style}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={base + style}
    >
      {children}
    </Link>
  )
}
