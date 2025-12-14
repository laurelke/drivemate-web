'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail:
        '從實際道路起步，包含起步、變換車道、路口判斷與停車技巧，協助學員建立正確駕駛觀念與信心。',
      price: 'NT$3,000 / 堂',
      duration: '180 分鐘',
    },
    {
      key: 'advanced',
      title: '進階駕駛',
      summary: '適合已有駕駛經驗、想提升技巧者',
      detail:
        '針對高速道路、複雜路況、夜間與長途駕駛進行訓練，提升判斷力與駕駛流暢度。',
      price: 'NT$9,000 / 堂',
      duration: '180 分鐘',
    },
    {
      key: 'track',
      title: '賽道駕駛',
      summary: '適合熱愛操控與進階技巧的學員',
      detail:
        '於封閉場地進行操控極限、彎道技巧與安全駕駛訓練，建立正確賽道觀念。',
      price: 'NT$12,000 / 堂',
      duration: '180 分鐘',
    },
  ]

  return (
    <>
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DriveMate 道路駕駛課程
            </h1>
            <p className="text-lg mb-6">
              從新手到進階操駕，陪你安全、自信地上路
            </p>
            <button className="rounded-full bg-black px-8 py-3 text-white">
              立即預約
            </button>
          </div>
        </div>
      </section>

      {/* Why Section */}
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

      {/* Course Cards */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">課程簡介</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.key}
                onClick={() =>
                  setOpen(open === course.key ? null : course.key)
                }
                className="cursor-pointer rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.summary}</p>

                <div className="mt-4 text-sm text-gray-500">
                  <p>⏱ {course.duration}</p>
                  <p>💰 {course.price}</p>
                </div>

                {open === course.key && (
                  <div className="mt-4 border-t pt-4 text-gray-700">
                    {course.detail}
                  </div>
                )}
              </div>
            ))}
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
        <button className="rounded-full bg-black px-10 py-4 text-white">
          立即預約
        </button>
      </section>
    </>
  )
}
