'use client'

import Link from 'next/link'

interface BottomCTAProps {
  title: string
  description: string
  buttonText: string
  href?: string
  bgImage?: string // ✅ 新增（可選背景）
}

export default function BottomCTA({
  title,
  description,
  buttonText,
  href = 'https://lin.ee/J22IVRg',
  bgImage,
}: BottomCTAProps) {
  return (
    <section
      className={`
        relative overflow-hidden
        text-white
        ${bgImage
          ? ''
          : 'bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900'}
      `}
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* 背景遮罩（只有有 bgImage 才出現） */}
      {bgImage && (
        <div className="absolute inset-0 bg-black/55" />
      )}

      {/* 微光背景層（保留你的質感，但降低存在感） */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-white/80">
          {description}
        </p>

        <Link
          href={href}
          target="_blank"
          className="
            inline-flex items-center justify-center
            rounded-2xl
            bg-gradient-to-b from-neutral-100 to-neutral-200
            px-10 py-4
            text-lg font-semibold text-neutral-900
            shadow-lg shadow-black/30
            ring-1 ring-black/10
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-xl
            active:translate-y-0 active:shadow-md
          "
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
