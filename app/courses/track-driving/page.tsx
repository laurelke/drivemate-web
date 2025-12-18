'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TrackDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero ================= */}
      <section className="relative h-[75vh] min-h-[520px]">
        <Image
          src="/images/courses/track-driving-hero.jpg"
          alt="賽道駕駛體驗課程"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">
            賽道駕駛體驗課程
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            在安全可控的賽道環境中，  
            深入理解操控極限，建立真正的駕駛手感。
          </p>

          <div className="mt-8">
            <Link
              href="#pricing"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600"
            >
              查看課程方案
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 為什麼要上賽道 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          為什麼真正會開車的人，都上過賽道？
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: '安全探索操控極限',
              desc: '賽道是唯一能安全體驗加速、煞車與過彎極限的環境。',
            },
            {
              title: '理解車輛動態反饋',
              desc: '學會感受轉向、抓地力與重量轉移，而不只是「開過去」。',
            },
            {
              title: '提升道路駕駛判斷力',
              desc: '懂極限的人，反而在日常道路上更穩、更安全。',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">課程方案</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">賽道體驗課</h3>
              <p className="text-3xl font-bold">NT$7,000</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 2 節課程</li>
                <li>• 基礎線路與煞車練習</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">進階賽道課</h3>
              <p className="text-3xl font-bold">NT$14,000</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 4 節課程</li>
                <li>• 煞車控制與賽道線路掌握</li>
              </ul>
            </div>
          </div>

          </div>
           </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            想體驗真正的駕駛樂趣？
          </h2>
          <p className="mb-8 text-neutral-300">
            加入 LINE，了解最近賽道場次與適合你的方案。
          </p>
          <Link
            href="https://lin.ee/J22IVRg"
            className="inline-block rounded-xl bg-orange-500 px-10 py-4 text-lg font-semibold hover:bg-orange-600"
          >
            立即預約諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}