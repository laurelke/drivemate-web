'use client'

import Image from 'next/image'
import { useState } from 'react'

const LINE_URL = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '入門首選',
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
        '於封閉場地進行操控極限、彎道技巧與安全駕駛訓練，建立正確賽道駕駛觀念。',
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
          <div className="text-white text-center max-w-2xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DriveMate 道路駕駛課程
            </h1>
            <p className="text-lg mb-6">
              從新手到進階操駕，陪你安全、自信地上路
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              className="inline-block rounded-full bg-black px-8 py-3"
            >
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">為什麼選擇 DriveMate？</h2>
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          <div className="rounded-2xl border p-8">
            <h3 className="mb-2 text-xl font-semibold">實際道路教學</h3>
            <p className="text-gray-600">
              非模擬場地，直接上路，培養真實駕駛判斷力
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-2 text-xl font-semibold">專業教練指導</h3>
            <p className="text-gray-600">
              循序漸進，依學員程度量身調整課程
            </p>
          </div>
          <div className="rounded-2xl border p-8">
            <h3 className="mb-2 text-xl font-semibold">安心陪駕</h3>
            <p className="text-gray-600">
              加強路況判斷與信心建立，安心上路不緊張
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">課程簡介</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => {
              const isOpen = open === course.key
              return (
                <div
                  key={course.key}
                  onClick={() =>
                    setOpen(isOpen ? null : course.key)
                  }
                  className="cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
                      {course.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-gray-600">{course.summary}</p>

                  <div className="mt-4 text-sm text-gray-500">
                    ⏱ {course.duration} <br /> 💰 {course.price}
                  </div>

                  {isOpen && (
                    <div className="mt-4 border-t pt-4 text-gray-700">
                      {course.detail}
                    </div>
                  )}
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
          現在就預約課程，讓 DriveMate 陪你安全上路
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          className="inline-block rounded-full bg-black px-10 py-4 text-white"
        >
          立即預約
        </a>
      </section>
    </>
  )
}
