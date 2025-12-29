'use client'

import Link from 'next/link'
import { Instagram, MessageCircle, AtSign, Mail, Phone } from 'lucide-react'

const SOCIALS = [
  {
    href: 'https://www.instagram.com/drivemate.tw',
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://lin.ee/J22IVRg',
    label: 'LINE',
    Icon: MessageCircle,
  },
  {
    href: 'https://www.threads.net/@drivemate.tw',
    label: 'Threads',
    Icon: AtSign,
  },
] as const

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* ================= Grid 內容 ================= */}
        <div
          className="
            grid gap-10
            text-center
            md:grid-cols-3 md:text-left
            md:items-start
          "
        >
          {/* ================= Brand ================= */}
          <div className="space-y-2">
            <p className="text-lg font-semibold text-neutral-900">
              DriveMate 駕駛訓練中心
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              專注於道路駕駛、運動駕駛與賽道體驗，
              <br />
              以實戰與信心建立為核心的駕駛訓練。
            </p>
          </div>

          {/* ================= Contact ================= */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-neutral-900 tracking-wide">
              聯絡我們
            </p>

            <ul className="space-y-2 text-sm text-neutral-600">
              {/* Email */}
              <li>
                <a
                  href="mailto:drivemate.tw@gmail.com"
                  className="
                    inline-flex items-center gap-2
                    transition-colors hover:text-neutral-900
                    underline-offset-4 hover:underline
                    justify-center md:justify-start
                  "
                  aria-label="寄信給 DriveMate drivemate.tw@gmail.com"
                >
                  <Mail className="h-4 w-4 text-neutral-400" />
                  <span>drivemate.tw@gmail.com</span>
                </a>
              </li>

              {/* Phone 1 */}
              <li>
                <a
                  href="tel:+886906896750"
                  className="
                    inline-flex items-center gap-2
                    transition-colors hover:text-neutral-900
                    underline-offset-4 hover:underline
                    justify-center md:justify-start
                  "
                  aria-label="致電 DriveMate 0906-896-750"
                >
                  <Phone className="h-4 w-4 text-neutral-400" />
                  <span>0906-896-750</span>
                </a>
              </li>

              {/* Phone 2 */}
              <li>
                <a
                  href="tel:+886960840750"
                  className="
                    inline-flex items-center gap-2
                    transition-colors hover:text-neutral-900
                    underline-offset-4 hover:underline
                    justify-center md:justify-start
                  "
                  aria-label="致電 DriveMate 0960-840-750"
                >
                  <Phone className="h-4 w-4 text-neutral-400" />
                  <span>0960-840-750</span>
                </a>
              </li>
            </ul>
          </div>

          {/* ================= Social ================= */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-neutral-900">
              關注我們
            </p>

            <div className="flex justify-center gap-5 md:justify-start">
              {SOCIALS.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`DriveMate ${label}`}
                  className="
                    inline-flex items-center justify-center
                    h-12 w-12 md:h-10 md:w-10
                    rounded-full
                    border border-neutral-300
                    text-neutral-700
                    transition-all duration-200 ease-out
                    hover:bg-neutral-900 hover:text-white
                    active:scale-95 active:bg-neutral-800
                  "
                >
                  <Icon className="h-5 w-5 md:h-4 md:w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Footer Bottom ================= */}
        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} DriveMate 駕駛訓練中心 ｜ 以實戰與信心為核心的駕駛訓練
        </div>
      </div>

      {/* ================= sameAs JSON-LD Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DriveMate 駕駛訓練中心',
            url: 'https://drivemate-tw.com/',
            sameAs: [
              'https://www.instagram.com/drivemate.tw',
              'https://lin.ee/J22IVRg',
              'https://www.threads.net/@drivemate.tw',
            ],
          }),
        }}
      />
    </footer>
  )
}
