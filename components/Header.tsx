'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/drivemate-logo.JPG"
              alt="DriveMate"
              width={36}
              height={36}
            />
            <span className="text-lg font-bold">DriveMate</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="#courses">課程</Link>
            <Link href="#pricing">價格</Link>
            <Link href="#contact">聯絡</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            aria-label="Open menu"
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
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-bold">選單</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-base">
              <Link href="#courses" onClick={() => setOpen(false)}>課程</Link>
              <Link href="#pricing" onClick={() => setOpen(false)}>價格</Link>
              <Link href="#contact" onClick={() => setOpen(false)}>聯絡</Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </nav>

            <button className="mt-10 w-full rounded-lg bg-black py-3 text-white">
              立即預約
            </button>
          </div>
        </div>
      )}
    </>
  )
}
