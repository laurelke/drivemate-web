'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const LINE_LINK = 'https://lin.ee/J22IVRg'
const INSTAGRAM_LINK = 'https://www.instagram.com/drivemate.tw'

function handleCTAClick() {
  if (typeof window !== 'undefined' && (window as any).trackCTAConversion) {
    ;(window as any).trackCTAConversion()
  }
}

/* ⭐ 手機專用精準滾動 */
function scrollToCard(id: string) {
  const el = document.getElementById(id)
  if (!el) return

  const headerOffset = 64 // h-16
  const elementPosition = el.getBoundingClientRect().top
  const offsetPosition =
    elementPosition + window.scrollY - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/drivemate-logo.JPG"
              alt="DriveMate 道路駕駛課程"
              width={36}
              height={36}
              priority
            />
            <span className="text-lg font-bold tracking-tight">
              DriveMate
            </span>
          </Link>

          {/* Desktop Navigation（維持原本） */}
          <nav
            className="hidden items-center gap-6 text-sm md:flex"
            aria-label="Primary Navigation"
          >
            <Link href="#qa" className="hover:text-black/70">
              常見 Q&A
            </Link>
            <Link href="#payment" className="hover:text-black/70">
              付款方式
            </Link>
            <Link href="#booking" className="hover:text-black/70">
              預約資訊
            </Link>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/70"
            >
              Instagram
            </a>

            <a
              href={LINE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="rounded-full bg-black px-4 py-2 text-white transition hover:scale-105"
            >
              立即預約
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="text-2xl md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[999] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-lg">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold">選單</span>
              <button
                className="text-2xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* ⭐ 手機版：精準導向卡片 */}
            <nav className="flex flex-col gap-6 text-base">
              <button
                className="text-left"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => scrollToCard('qa'), 80)
                }}
              >
                常見 Q&A
              </button>

              <button
                className="text-left"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => scrollToCard('payment'), 80)
                }}
              >
                付款方式
              </button>

              <button
                className="text-left"
                onClick={() => {
                  setOpen(false)
                  setTimeout(() => scrollToCard('contact'), 80)
                }}
              >
                預約資訊
              </button>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </nav>

            <a
              href={LINE_LINK}
              target="_blank"
              onClick={handleCTAClick}
              className="mt-10 block w-full rounded-lg bg-black py-3 text-center text-white"
            >
              立即預約
            </a>
          </div>
        </div>
      )}
    </>
  )
}
