'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white border-b">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <Image
              src="/logo.png"
              alt="DriveMate"
              width={32}
              height={32}
              priority
            />
            <span className="text-base md:text-lg">DriveMate</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#courses" className="hover:text-gray-600">
              課程
            </Link>
            <Link href="#pricing" className="hover:text-gray-600">
              價格
            </Link>
            <Link href="#contact" className="hover:text-gray-600">
              聯絡
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-gray-600"
            >
              Instagram
            </Link>
            <Link
              href="#reserve"
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              立即預約
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* ===== Mobile Menu Overlay ===== */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute right-0 top-0 h-full w-3/4 bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold">選單</span>
              <button
                className="text-2xl"
                aria-label="Close Menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-base">
              <Link href="#courses" onClick={() => setOpen(false)}>
                課程
              </Link>
              <Link href="#pricing" onClick={() => setOpen(false)}>
                價格
              </Link>
              <Link href="#contact" onClick={() => setOpen(false)}>
                聯絡
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                onClick={() => setOpen(false)}
              >
                Instagram
              </Link>

              <Link
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-md bg-black px-4 py-3 text-center text-white"
              >
                立即預約
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
