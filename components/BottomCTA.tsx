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
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {title}
        </h2>

        <p className="mb-10 text-neutral-300 leading-relaxed">
          {description}
        </p>

        <Link
          href={href}
          target="_blank"
          className="
            inline-flex items-center justify-center
            rounded-2xl
            bg-orange-500
            px-12 py-4
            text-lg font-semibold text-white
            shadow-lg shadow-orange-500/20
            transition-all duration-300 ease-out
            hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl
            active:translate-y-0 active:shadow-md
          "
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
