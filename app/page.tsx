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
        '從實際道路起步，包含起步、變換車道、路口判斷與停車技巧，協助學員建立正確駕駛觀念與信心。',
      price: 'NT$5,000 / 堂',
      duration: '180 分鐘',
    },
    {
      key: 'advanced',
      title: '運動駕駛',
      badge: '技術提升',
      summary: '適合已有駕駛經驗、想提升技巧者',
      detail:
        '學習掌握車輛荷重應用、循跡煞車、底盤以及方向盤操控論點，山路路線選擇、講解及應用。',
      price: 'NT$9,000 / 堂',
      duration: '180 分鐘',
    },
    {
      key: 'track',
      title: '賽道駕駛',
      badge: '進階體驗',
      summary: '適合熱愛操控與進階技巧的學員',
      detail:
        '於封閉場地進行操控極限、彎道技巧與安全駕駛訓練，建立正確賽道觀念。',
      price: 'NT$12,000 / 堂',
      duration: '180 分鐘',
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
              專為新手與進階駕駛打造的實際道路駕駛課程<br />
              由專業教練一對一指導，安全、自信地上路
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
            為什麼選擇 DriveMate 道路駕駛教練？
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold">實際道路教學</h3>
              <p className="text-gray-600">
                以真實交通環境進行訓練，非模擬、不紙上談兵，
                學到的是每天都用得到的駕駛技巧。
              </p>
            </div>

            <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold">專業教練指導</h3>
              <p className="text-gray-600">
                由具備實務經驗的專業教練一對一指導，
                依學員程度客製課程內容。
              </p>
            </div>

            <div className="rounded-2xl border p-6 text-center shadow-sm transition hover:shadow-md">
              <h3 className="mb-2 text-lg font-semibold">安心陪駕</h3>
              <p className="text-gray-600">
                針對緊張、缺乏信心的學員，
                強化路況判斷與心理穩定度，安心上路。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            道路駕駛課程介紹（新手・進階・賽道）
          </h2>

          {/* Mobile horizontal scroll */}
          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {courses.map((course) => {
              const isOpen = open === course.key

              return (
                <div
                  key={course.key}
                  className="min-w-[280px] md:min-w-0 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  {/* Clickable Header ONLY */}
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
                      className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <p className="mt-4 text-gray-600">{course.summary}</p>

                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>⏱ {course.duration}</span>
                    <span>💰 {course.price}</span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="border-t pt-4 text-gray-700">
                      {course.detail}
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
