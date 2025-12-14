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
              src="/logo.png"
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

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full bg-white transform transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}
        md:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <span className="text-lg font-bold">選單</span>
          <button
            className="text-2xl"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        {/* Menu Content */}
        <nav className="flex flex-col gap-6 px-6 py-8 text-lg">
          <Link href="#courses" onClick={() => setOpen(false)}>課程</Link>
          <Link href="#pricing" onClick={() => setOpen(false)}>價格</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>聯絡</Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            Instagram
          </Link>

          <Link
            href="/booking"
            className
