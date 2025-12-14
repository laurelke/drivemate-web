'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)
  const [active, setActive] = useState<string>('')

  /* ================= 平滑滾動 ================= */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  /* ================= Header 點擊定位 + 展開 ================= */
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (!hash) return

    const section = document.getElementById(hash)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    // 自動展開對應卡片
    if (['qa', 'payment', 'booking'].includes(hash)) {
      setOpen(hash)
    }
  }, [])

  /* ================= Scroll Spy ================= */
  useEffect(() => {
    const sections = ['courses', 'info', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ================= 課程 ================= */
  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail: '基本控制、市區道路駕駛、停車技巧，建立正確車感與信心。',
      duration: '單堂 180 分鐘',
      highlight: '📍 全台到府服務',
      pricing: [
        { label: '3 小時', price: '$4,990' },
        { label: '12 小時', price: '$16,990' },
        { label: '24 小時', price: '$35,000' },
      ],
    },
    {
      key: 'advanced',
      title: '運動駕駛',
      badge: '技術提升',
      summary: '適合已有駕駛經驗、想提升操控技巧者',
      detail: '荷重轉移、方向盤操作、山路駕駛實戰。',
      duration: '單堂 180 分鐘',
      highlight: '📍 全台到府服務',
      pricing: [
        { label: '3 小時', price: '$9,000' },
        { label: '9 小時', price: '$25,000' },
        { label: '12 小時', price: '$32,000' },
      ],
    },
    {
      key: 'track',
      title: '賽道駕駛',
      badge: '進階體驗',
      summary: '適合熱愛操控與極限體驗的學員',
      detail: '封閉賽道彎道、制動與安全極限判斷。',
      duration: '單節 30 分鐘',
      pricing: [{ label: '4 節', price: '$12,000' }],
    },
  ]

  /* ================= 資訊 ================= */
  const infoCards = [
    {
      key: 'qa',
      title: '常見 Q&A',
      content: (
        <ul className="space-y-3 text-sm text-gray-600">
          <li>Q：可以使用自己的車上課嗎？<br />A：可以，或加購教練車。</li>
          <li>Q：完全沒經驗可以上課嗎？<br />A：可以，新手上路專為此設計。</li>
          <li>Q：可以帶家人旁聽嗎？<br />A：需事先告知。</li>
          <li>Q：使用自家車安全嗎？<br />A：教練具專業訓練，完整控管安全。</li>
        </ul>
      ),
    },
    {
      key: 'payment',
      title: '付款方式',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>僅接受 <b>轉帳匯款</b></p>
          <p>銀行：005 土地銀行</p>
          <p>帳號：022005804039</p>
        </div>
      ),
    },
    {
      key: 'booking',
      title: '預約資訊',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <ul className="list-disc pl-5">
            <li>09:00 – 12:00</li>
            <li>14:00 – 17:00</li>
            <li>19:00 – 22:00</li>
          </ul>
          <p>單次課程 3 小時</p>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* ================= Hero ================= */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="/hero-driving.jpg"
          alt="DriveMate 道路駕駛課程"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DriveMate 道路駕駛課程
            </h1>
            <p className="mb-6">從新手到進階，安心上路</p>
            <a
              href={LINE_LINK}
              target="_blank"
              className="rounded-full bg-black px-8 py-3 inline-block"
            >
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* ================= Courses ================= */}
      <section id="courses" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold mb-12">
            課程介紹
          </h2>

          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3">
            {courses.map((c) => {
              const isOpen = open === c.key
              return (
                <div key={c.key} className="min-w-[280px] rounded-2xl border bg-white p-6">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : c.key)}
                  >
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <ChevronDown className={isOpen ? 'rotate-180' : ''} />
                  </div>

                  <p className="mt-3 text-gray-600">{c.summary}</p>
                  {c.highlight && <p className="mt-2">{c.highlight}</p>}

                  <div className={`${isOpen ? 'mt-4' : 'hidden'}`}>
                    <p className="text-sm">{c.detail}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= Info ================= */}
      <section id="info" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3">
            {infoCards.map((i) => {
              const isOpen = open === i.key
              return (
                <div key={i.key} className="min-w-[280px] rounded-2xl border p-6">
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => setOpen(isOpen ? null : i.key)}
                  >
                    <h3 className="font-semibold">{i.title}</h3>
                    <ChevronDown className={isOpen ? 'rotate-180' : ''} />
                  </div>

                  {isOpen && <div className="mt-4">{i.content}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="bg-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          準備好開始你的駕駛旅程了嗎？
        </h2>
        <a
          href={LINE_LINK}
          target="_blank"
          className="inline-block rounded-full bg-black px-10 py-4 text-white hover:scale-105 transition"
        >
          DriveMate 官方 LINE
        </a>
      </section>
    </>
  )
}
