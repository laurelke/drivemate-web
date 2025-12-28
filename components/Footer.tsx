'use client'

import Link from 'next/link'
import { Instagram, MessageCircle, AtSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* ================= Brand ================= */}
          <div>
            <p className="text-lg font-semibold text-neutral-900">
              DriveMate 駕駛訓練中心
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              專注於道路駕駛、運動駕駛與賽道體驗，
              <br />
              以實戰與信心建立為核心的駕駛訓練。
            </p>
          </div>

          {/* ================= Contact ================= */}
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">
              聯絡我們
            </p>

            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a
                  href="mailto:drivemate.tw@gmail.com"
                  className="hover:text-neutral-900"
                >
                  drivemate.tw@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+886906896750"
                  className="hover:text-neutral-900"
                >
                  +886 906896750
                </a>
              </li>
            </ul>
          </div>

          {/* ================= Social ================= */}
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-900">
              關注我們
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/drivemate.tw"
                target="_blank"
                aria-label="DriveMate Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-900 hover:text-white"
              >
                <Instagram size={18} />
              </Link>

              {/* LINE */}
              <Link
                href="https://lin.ee/J22IVRg"
                target="_blank"
                aria-label="DriveMate LINE"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-900 hover:text-white"
              >
                <MessageCircle size={18} />
              </Link>

              {/* Threads */}
              <Link
                href="https://www.threads.net/@drivemate.tw"
                target="_blank"
                aria-label="DriveMate Threads"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-900 hover:text-white"
              >
                <AtSign size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} DriveMate. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
