'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Sparkles, Hand } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  /* ================= 課程資料 ================= */
  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail: '基本控制、市區道路駕駛、各類停車技巧，建立正確車感與駕駛信心。',
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
      detail: '學習掌握車輛荷重轉移、方向盤操作、山路駕駛路線選擇與實戰應用。',
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

  return (
    <>
      {/* ================= SEO ================= */}
      <Head>
        <title>DriveMate 道路駕駛課程｜新手上路・運動駕駛・賽道體驗</title>
        <meta
          name="description"
          content="DriveMate 提供一對一專業道路駕駛課程，從新手上路、運動駕駛到賽道體驗，全台到府服務，安全建立駕駛信心。"
        />
        <meta
          name="keywords"
          content="道路駕駛課程, 新手駕駛, 到府駕駛教學, 運動駕駛, 賽道駕駛"
        />

        {/* FAQ 結構化資料 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: '可以使用自己的車上課嗎？',
                  acceptedAnswer: { '@type': 'Answer', text: '可以，或加購教練車。' },
                },
                {
                  '@type': 'Question',
                  name: '完全沒經驗可以上課嗎？',
                  acceptedAnswer: { '@type': 'Answer', text: '可以，新手上路專為此設計。' },
                },
                {
                  '@type': 'Question',
                  name: '可以帶家人旁聽嗎？',
                  acceptedAnswer: { '@type': 'Answer', text: '以學員專注度為優先，若需陪同可事先告知。' },
                },
                {
                  '@type': 'Question',
                  name: '使用自家車會不會危險？',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: '教練具備專業訓練與經驗，可完整控管教學安全。',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ================= Hero ================= */}
      <section className="relative h-[70vh] w-full">
        <Image src="/hero-driving.jpg" alt="DriveMate 專業道路駕駛課程" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DriveMate 道路駕駛課程</h1>
            <p className="text-lg mb-6">專業教練一對一指導<br />從新手到進階，安全建立駕駛信心</p>
            <a href={LINE_LINK} target="_blank" className="inline-block rounded-full bg-black px-8 py-3 text-white animate-pulse">
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* ================= Courses ================= */}
      <section id="courses" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-6 text-center text-3xl font-bold">道路駕駛課程介紹</h2>

          {/* 行動版滑動提示 */}
          <div className="mb-6 flex justify-center gap-2 text-sm text-gray-400 md:hidden animate-bounce">
            <Hand className="h-4 w-4" /> 左右滑動查看更多
          </div>

          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3">
            {courses.map(course => {
              const isOpen = open === course.key
              return (
                <div key={course.key} className="min-w-[280px] rounded-2xl border bg-white p-6 shadow-sm">
                  <div onClick={() => setOpen(isOpen ? null : course.key)} className="flex justify-between cursor-pointer">
                    <div>
                      <h3 className="text-xl font-semibold">{course.title}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs text-white">
                        <Sparkles className="h-3 w-3" />{course.badge}
                      </span>
                    </div>
                    <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <p className="mt-4 text-gray-600">{course.summary}</p>
                  {course.highlight && <p className="mt-2 text-sm">{course.highlight}</p>}
                  <p className="mt-2 text-sm text-gray-500">⏱ {course.duration}</p>

                  <div className={`${isOpen ? 'max-h-96 mt-4' : 'max-h-0'} overflow-hidden transition-all`}>
                    <div className="border-t pt-4 space-y-3">
                      <p>{course.detail}</p>
                      <ul className="text-sm text-gray-600">
                        {course.pricing.map(p => (
                          <li key={p.label}>▸ {p.label}｜{p.price}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= Q&A ================= */}
      <section id="qa" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">常見 Q&A</h2>
          <ul className="space-y-4 text-gray-600">
            <li>可以使用自己的車上課嗎？可以，或加購教練車。</li>
            <li>完全沒經驗可以上課嗎？可以，新手上路專為此設計。</li>
            <li>可以帶家人旁聽嗎？需事先告知。</li>
            <li>使用自家車會不會危險？教練可完整控管安全。</li>
          </ul>
        </div>
      </section>

      <section id="payment" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">付款方式</h2>
          <p>僅接受轉帳匯款<br />005 土地銀行<br />022005804039</p>
        </div>
      </section>

      <section id="booking" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">預約資訊</h2>
          <p>09:00–12:00 / 14:00–17:00 / 19:00–22:00<br />單次課程 3 小時</p>
        </div>
      </section>

      <section id="contact" className="bg-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">準備好開始你的駕駛旅程了嗎？</h2>
        <a href={LINE_LINK} target="_blank" className="inline-block rounded-full bg-black px-10 py-4 text-white">
          DriveMate 官方 LINE
        </a>
      </section>
    </>
  )
}
