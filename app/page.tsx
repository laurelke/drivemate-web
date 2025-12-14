'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail:
        '基本控制、市區道路駕駛、各類停車技巧，建立正確車感與駕駛信心。',
      duration: '單堂 180 分鐘',
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
      detail:
        '封閉場地練習彎道技巧、制動控制與安全極限判斷。',
      duration: '單節 30 分鐘',
      pricing: [{ label: '4 節', price: '$12,000' }],
    },
  ]

  return (
    <>
      {/* Hero */}
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
              專業教練一對一指導，從新手到進階操駕<br />
              真實道路訓練，安全建立駕駛信心
            </p>
            <a
              href={LINE_LINK}
              target="_blank"
              className="inline-block rounded-full bg-black px-8 py-3 text-white
                         transition-all duration-300
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]
                         animate-pulse hover:animate-none"
            >
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* Why DriveMate */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            為什麼選擇 DriveMate 道路駕駛課程？
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['實際道路教學', '真實交通環境訓練，學到每天都用得到的駕駛技巧'],
              ['專業教練指導', '依學員程度客製課程，循序漸進提升'],
              ['安心陪駕', '強化路況判斷與心理穩定度，安心上路'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            道路駕駛課程介紹（新手・運動・賽道）
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {courses.map((course) => {
              const isOpen = open === course.key

              return (
                <div
                  key={course.key}
                  className="min-w-[280px] md:min-w-0 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div
                    onClick={() => setOpen(isOpen ? null : course.key)}
                    className="flex cursor-pointer items-start justify-between"
                  >
                    <div>
                      <h3 className="mb-1 text-xl font-semibold">
                        {course.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs text-white">
                        <Sparkles className="h-3 w-3" />
                        {course.badge}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="mt-4 text-gray-600">{course.summary}</p>

                  {/* 只在新手上路 & 運動駕駛顯示 */}
                  {course.key !== 'track' && (
                    <p className="mt-2 text-sm font-medium text-black">
                      📍 全台到府服務
                    </p>
                  )}

                  <p className="mt-2 text-sm text-gray-500">
                    ⏱ {course.duration}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="border-t pt-4 text-gray-700 space-y-4">
                      <p>{course.detail}</p>

                      <div>
                        <h4 className="mb-2 font-semibold">收費方案</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {course.pricing.map((p) => (
                            <li key={p.label}>
                              ▸ {p.label}｜{p.price}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          準備好開始你的駕駛旅程了嗎？
        </h2>
        <p className="mb-8 text-gray-600">
          立即加入 DriveMate 道路駕駛課程，
          由專業教練陪同，安心累積實際駕駛經驗。
        </p>
        <a
          href={LINE_LINK}
          target="_blank"
          className="inline-block rounded-full bg-black px-10 py-4 text-white
                     transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          立即預約
        </a>
      </section>
    </>
  )
}
