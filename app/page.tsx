'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  /* ================= 平滑滾動（全站） ================= */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  /* ================= Header Active 區塊追蹤 ================= */
  useEffect(() => {
    const sections = ['courses', 'info', 'contact']
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            document.body.dataset.section = id
          }
        },
        { rootMargin: '-40% 0px -50% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* ================= 課程資料 ================= */
  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail:
        '基本控制、市區道路駕駛、各類停車技巧，建立正確車感與駕駛信心。',
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
      detail:
        '學習掌握車輛荷重轉移、方向盤操作、山路駕駛路線選擇與實戰應用。',
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
      detail: '封閉場地練習彎道技巧、制動控制與安全極限判斷。',
      duration: '單節 30 分鐘',
      pricing: [{ label: '4 節', price: '$12,000' }],
    },
  ]

  /* ================= 資訊卡片 ================= */
  const infoCards = [
    {
      key: 'qa',
      title: '常見 Q&A',
      content: (
        <ul className="space-y-3 text-sm text-gray-600">
          <li>Q：可以使用自己的車上課嗎？<br />A：可以，或加購教練車。</li>
          <li>Q：完全沒經驗可以上課嗎？<br />A：可以，新手上路專為此設計。</li>
          <li>Q：可以帶家人旁聽嗎？<br />A：以學員專注度為優先，需陪同請事先告知。</li>
          <li>Q：使用自家車會不會危險？<br />A：教練具備專業訓練與經驗，能完整控管教學安全。</li>
        </ul>
      ),
    },
    {
      key: 'payment',
      title: '付款方式',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>付款方式僅接受 <b>轉帳匯款</b></p>
          <p>銀行：005 土地銀行</p>
          <p>帳號：022005804039</p>
          <p className="pt-2 text-xs text-gray-500">
            轉帳完成麻煩主動告知並提供轉帳後五碼，我們將於確認款項後，主動告知課程預約完成。
          </p>
        </div>
      ),
    },
    {
      key: 'booking',
      title: '預約資訊',
      content: (
        <div className="space-y-3 text-sm text-gray-600">
          <p>課程時段：</p>
          <ul className="list-disc pl-5">
            <li>09:00 – 12:00</li>
            <li>14:00 – 17:00</li>
            <li>19:00 – 22:00</li>
          </ul>
          <p>單次課程為 3 小時</p>
          <p>教練將依學員狀況設定 4–8 個課綱，協助改善駕駛問題。</p>
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
          alt="DriveMate 專業道路駕駛課程"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DriveMate 道路駕駛課程
            </h1>
            <p className="text-lg mb-6">
              專業教練一對一指導<br />
              從新手到進階，安全建立駕駛信心
            </p>
            <a
              href={LINE_LINK}
              target="_blank"
              className="inline-block rounded-full bg-black px-8 py-3 text-white
                         transition-all duration-300 hover:scale-105 hover:shadow-lg
                         animate-pulse hover:animate-none"
            >
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* ================= Courses ================= */}
      <section
        id="courses"
        className="bg-gray-50 py-20 scroll-mt-20"
      >
        {/* 原本內容完全保留 */}
        {/* ... */}
      </section>

      {/* ================= Info ================= */}
      <section
        id="info"
        className="bg-white py-20 scroll-mt-20"
      >
        {/* 原本內容完全保留 */}
        {/* ... */}
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-white py-24 text-center scroll-mt-20"
      >
        {/* 原本內容完全保留 */}
        {/* ... */}
      </section>
    </>
  )
}
