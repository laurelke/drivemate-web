'use client'

import Link from 'next/link'

export default function TrackDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">賽道駕駛課程</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            專為想深入理解車輛動態與極限操控的駕駛者打造。
          </p>
          <Link href="#signup" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            查看課程方案
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">適合對象</h3>
            <p className="text-neutral-600">已有道路駕駛經驗，想挑戰更高操控層次者。</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">訓練重點</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• 過彎路線與煞車點</li>
              <li>• 車輛重心轉移</li>
              <li>• 視線與節奏控制</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">學習成果</h3>
            <p className="text-neutral-600">更精準地掌握車輛反應，提升整體駕駛安全與穩定度。</p>
          </div>
        </div>
      </section>

      <section id="signup" className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">賽道不是比快，而是比準</h2>
          <p className="mb-8 text-neutral-300">立即聯絡我們，了解近期開課與費用。</p>
          <Link href="https://lin.ee/" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            LINE 諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
