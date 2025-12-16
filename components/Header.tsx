'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

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
  const [active, setActive] = useState<string | null>(null)

  /* ================= Header Scroll Spy ================= */
  useEffect(() => {
    const sections = ['qa', 'payment', 'booking']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ================= Nav 樣式 ================= */
  function navClass(id: string) {
    return active === id
      ? 'text-black font-semibold'
      : 'text-black/60 hover:text-black'
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              setActive(null)
              window.location.href = '/'
            }}
            className="flex cursor-pointer items-center gap-2"
          >
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
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-6 text-sm md:flex"
            aria-label="Primary Navigation"
          >
            <a
              href="#qa"
              className={navClass('qa')}
              onClick={() => setActive('qa')}
            >
              常見 Q&A
            </a>

            <a
              href="#payment"
              className={navClass('payment')}
              onClick={() => setActive('payment')}
            >
              付款方式
            </a>

            <a
              href="#booking"
              className={navClass('booking')}
              onClick={() => setActive('booking')}
            >
              預約資訊
            </a>

            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/60 hover:text-black"
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

            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-6 text-base">
              <button
                className={`text-left ${
                  active === 'qa' ? 'font-semibold text-black' : 'text-black/70'
                }`}
                onClick={() => {
                  setActive('qa')
                  setOpen(false)
                  window.history.replaceState(null, '', '#qa')
                  setTimeout(() => scrollToCard('info'), 80)
                }}
              >
                常見 Q&A
              </button>

              <button
                className={`text-left ${
                  active === 'payment'
                    ? 'font-semibold text-black'
                    : 'text-black/70'
                }`}
                onClick={() => {
                  setActive('payment')
                  setOpen(false)
                  window.history.replaceState(null, '', '#payment')
                  setTimeout(() => scrollToCard('info'), 80)
                }}
              >
                付款方式
              </button>

              <button
                className={`text-left ${
                  active === 'booking'
                    ? 'font-semibold text-black'
                    : 'text-black/70'
                }`}
                onClick={() => {
                  setActive('booking')
                  setOpen(false)
                  window.history.replaceState(null, '', '#booking')
                  setTimeout(() => scrollToCard('info'), 80)
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
