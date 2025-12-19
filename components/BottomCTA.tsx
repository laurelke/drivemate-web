'use client'

import Link from 'next/link'

interface BottomCTAProps {
  title: string
  description: string
  buttonText: string
  href?: string
}

export default function BottomCTA({
  title,
  description,
  buttonText,
  href = 'https://lin.ee/J22IVRg',
}: BottomCTAProps) {
  return (
    <section className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {title}
        </h2>

        <p className="mb-10 text-neutral-300">
          {description}
        </p>

        <Link
          href={href}
          target="_blank"
          className="
            inline-flex items-center justify-center
            rounded-2xl
            bg-gradient-to-b from-neutral-900 to-black
            px-10 py-4
            text-lg font-semibold text-white
            shadow-lg shadow-black/30
            ring-1 ring-white/10
            transition-all duration-300 ease-out
            hover:-translate-y-1
            hover:shadow-xl hover:ring-white/20
            active:translate-y-0 active:shadow-md
          "
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}