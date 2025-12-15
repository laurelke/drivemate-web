'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

function handleCTAClick() {
  if (typeof window !== 'undefined' && (window as any).trackCTAConversion) {
    ;(window as any).trackCTAConversion()
  }
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

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 text-sm md:flex"
            aria-label="Primary Navigation"
          >
            <Link href="#courses" className="hover:text-black/70">
              常見 Q&A
            </Link>
            <Link href="#pricing" className="hover:text-black/70">
              付款方式
            </Link>
            <Link href="#contact" className="hover:text-black/70">
              預約資訊
            </Link>
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* Drawer Panel */}
          <div
            className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold">選單</span>
              <button
                type="button"
                aria-label="Close menu"
                className="text-2xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base">
              <Link href="#courses" onClick={() => setOpen(false)}>
                常見 Q&A
              </Link>
              <Link href="#pricing" onClick={() => setOpen(false)}>
                付款方式
              </Link>
              <Link href="#contact" onClick={() => setOpen(false)}>
                預約資訊
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </nav>

            {/* Mobile CTA */}
            <a
              href={LINE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className="mt-10 block w-full rounded-lg bg-black py-3 text-center text-white transition hover:scale-[1.02]"
            >
              立即預約
            </a>
          </div>
        </div>
      )}
    </>
  )
}
