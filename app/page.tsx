'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

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
      price: 'NT$3,000 / 堂',
      duration: '180 分鐘',
    },
    {
      key: 'advanced',
      title: '運動駕駛',
      badge: '技術提升',
      summary: '適合已有駕駛經驗、想提升技巧者',
      detail:
        '荷重應用、循跡煞車、底盤以及方向盤操控論點，山路路線選擇、講解及應用。',
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
          alt="DriveMate 道路駕駛課程"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-white max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DriveMate 道路駕駛課程</h1>
            <p className="text-lg mb-6">從新手到進階操駕，陪你安全、自信地上路</p>
            <button className="rounded-full bg-black px-8 py-3 text-white">立即預約</button>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">課程簡介</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => {
              const isOpen = open === course.key

              return (
                <div
                  key={course.key}
                  onClick={() => setOpen(isOpen ? null : course.key)}
                  className="group cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-xl font-semibold">{course.title}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs text-white">
                        <Sparkles className="h-3 w-3" /> {course.badge}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-gray-600">{course.summary}</p>

                  {/* Meta */}
                  <div className="mt-4 flex justify-between text-sm text-gray-500">
                    <span>⏱ {course.duration}</span>
                    <span>💰 {course.price}</span>
                  </div>

                  {/* Expand */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="border-t pt-4 text-gray-700">{course.detail}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">準備好開始你的駕駛旅程了嗎？</h2>
        <p className="mb-8 text-gray-600">現在就預約課程，讓 DriveMate 陪你安全上路</p>
        <button className="rounded-full bg-black px-10 py-4 text-white">立即預約</button>
      </section>
    </>
  )
}
