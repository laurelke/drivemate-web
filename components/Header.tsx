'use client'

import { usePathname } from 'next/navigation'
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

  const headerOffset = 64
  const elementPosition = el.getBoundingClientRect().top
  const offsetPosition =
    elementPosition + window.scrollY - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export default function Header() {
  const pathname = usePathname()
  const isCoursePage = pathname.startsWith('/courses')
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo（永遠存在） */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80"
          >
            <Image
              src="/images/drivemate-logo.png"
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
            {isCoursePage ? (
              <>
                <Link href="/courses/road-driving" className="hover:text-black/70">
                  一般道路駕駛
                </Link>
                <Link href="/courses/sport-driving" className="hover:text-black/70">
                  運動駕駛
                </Link>
                <Link href="/courses/track-driving" className="hover:text-black/70">
                  賽道駕駛
                </Link>
                <Link href="/courses/instructor-training" className="hover:text-black/70">
                  教練培訓
                </Link>
                <Link href="/courses/road-driving/instructor-car" className="hover:text-black/70">
                  加購教練車
                </Link>
              </>
            ) : (
              <>
                <Link href="#info" className="hover:text-black/70">
                  常見 Q&A
                </Link>
                <Link href="#info" className="hover:text-black/70">
                  付款方式
                </Link>
                <Link href="#info" className="hover:text-black/70">
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
              </>
            )}

            <a
  href="https://lin.ee/J22IVRg"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    window.trackCTAConversion?.()
  }}
  className="rounded-full bg-black px-4 py-2 text-white"
>
  立即預約
</a>
          </nav>

          {/* Mobile Menu Button（課程頁不顯示） */}
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

      {/* Mobile Drawer（只在非課程頁） */}
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

            <nav className="flex flex-col gap-6 text-base">
  {isCoursePage ? (
    <>
      <Link
        href="/courses/road-driving"
        onClick={() => setOpen(false)}
      >
        一般道路駕駛
      </Link>

      <Link
        href="/courses/sport-driving"
        onClick={() => setOpen(false)}
      >
        運動駕駛
      </Link>

      <Link
        href="/courses/track-driving"
        onClick={() => setOpen(false)}
      >
        賽道駕駛
      </Link>

      <Link
        href="/courses/instructor-training"
        onClick={() => setOpen(false)}
      >
        教練培訓
      </Link>

      <Link
        href="/courses/road-driving/instructor-car"
        onClick={() => setOpen(false)}
      >
        加購教練車
      </Link>
    </>
  ) : (
    <>
      <button
        className="text-left"
        onClick={() => {
          setOpen(false)
          window.history.replaceState(null, '', '#qa')
          setTimeout(() => scrollToCard('info'), 80)
        }}
      >
        常見 Q&A
      </button>

      <button
        className="text-left"
        onClick={() => {
          setOpen(false)
          window.history.replaceState(null, '', '#payment')
          setTimeout(() => scrollToCard('info'), 80)
        }}
      >
        付款方式
      </button>

      <button
        className="text-left"
        onClick={() => {
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
    </>
  )}
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
