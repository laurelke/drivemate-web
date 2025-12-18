'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function InstructorTrainingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image src="/images/courses/instructor-training-hero.jpg" fill alt="教練培訓課程" priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">道路駕駛教練培訓課程</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            建立完整教學架構、心理溝通與實地演練的專業教練技能。
          </p>
          <Link href="#pricing" className="mt-8 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            了解培訓方案
          </Link>
        </div>
      </section>

      {/* 課程亮點 */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold">課程特色</h2>
        <ul className="list-disc space-y-3 pl-6 text-neutral-700">
          <li>從駕駛技術到教學方法完整培訓</li>
          <li>小班制＋實地教學演練</li>
          <li>學員溝通與安全控管技巧</li>
          <li>建立教學流程與課程設計能力</li>
        </ul>
      </section>

      {/* Training Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">培訓費用說明</h2>
          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="mb-4 text-neutral-700">課程為長期系統性培訓，費用依培訓內容與時間安排彈性設計。</p>
            <p className="mb-6 text-3xl font-bold text-neutral-800">NT$128,000</p>
            <ul className="mb-6 text-neutral-600 space-y-1">
              <li>• 小班制實務演練</li>
              <li>• 教學溝通與流程設計</li>
              <li>• 安全控管與心理技巧</li>
            </ul>
            <Link href="https://lin.ee/" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white block text-center">
              預約培訓諮詢
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
