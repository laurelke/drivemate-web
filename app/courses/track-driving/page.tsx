'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TrackDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image src="/images/courses/track-driving-hero.jpg" fill alt="賽道駕駛課程" priority className="object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">賽道駕駛體驗與進階課程</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
            專注車輛操控、煞車與線路判斷，在封閉安全場地提升你的駕駛技巧。
          </p>
          <Link href="#pricing" className="mt-8 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            查看方案與報名
          </Link>
        </div>
      </section>

      {/* 描述重點 */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold">賽道課程重點</h2>
        <ul className="list-disc space-y-3 pl-6 text-neutral-700">
          <li>封閉賽道環境安全訓練</li>
          <li>有效掌握煞車與過彎控制</li>
          <li>進階操控技巧與重心運用</li>
          <li>循序練習提升車感穩定度</li>
        </ul>
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
          <div className="mt-8 text-center">
            <Link href="#signup" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
              LINE 報名諮詢
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
