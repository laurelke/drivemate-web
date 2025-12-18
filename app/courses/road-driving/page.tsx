'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function RoadDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/courses/road-driving-hero.jpg"
          alt="道路駕駛實戰課程"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">道路駕駛實戰課程</h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200">
  由專業教練一對一陪駕，從基本操作、複雜路況判斷到應變能力，
  真正讓你上路更安心、自信。
</p>
          <Link
            href="#pricing"
            className="mt-8 rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white"
          >
            查看方案與費用
          </Link>
        </div>
      </section>

      {/* 課程重點 */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold">你會學到什麼</h2>
        <ul className="list-disc space-y-3 pl-6 text-neutral-700">
          <li>基本車輛控制與駕駛信心建立</li>
          <li>市區道路／高速路況實際演練</li>
          <li>路口判斷與變換車道技巧</li>
          <li>倒車、停車與狹窄路段應對</li>
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">課程方案與費用</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-neutral-50 p-6 shadow">
              <h3 className="text-xl font-semibold">《駕駛能力評估＋關鍵矯正》</h3>
              <p className="text-neutral-600">適合初次上路或想試試看者</p>
              <p className="text-3xl font-bold text-neutral-800">NT$4,990</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 1 堂 / 3 小時陪駕</li>
                <li>• 市區與基礎道路練習</li>
              </ul>
              <Link href="#signup" className="mt-6 block rounded-xl bg-orange-500 py-3 text-center text-white font-semibold">
                立即預約
              </Link>
            </div>

            <div className="rounded-2xl border-2 border-orange-500 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold">進階方案</h3>
              <p className="text-neutral-600">《14 天獨立上路成果計畫》</p>
              <p className="text-3xl font-bold text-neutral-800">NT$16,990</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 4 堂 / 共 12 小時課程</li>
                <li>• 包含高速、複雜路況與停車情境</li>
              </ul>
              <Link href="#signup" className="mt-6 block rounded-xl bg-orange-500 py-3 text-center text-white font-semibold">
                立即諮詢
              </Link>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-6 shadow">
              <h3 className="text-xl font-semibold">彈性加強</h3>
              <p className="text-neutral-600">《21 天通勤駕駛穩定方案》</p>
              <p className="text-3xl font-bold text-neutral-800">NT$35,000</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 單項技巧加強</li>
                <li>• 依需求個別安排</li>
              </ul>
              <Link href="#signup" className="mt-6 block rounded-xl bg-neutral-800 py-3 text-center text-white font-semibold">
                方案諮詢
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="mb-8 text-neutral-600">
            歡迎透過 LINE 與我們聯絡，安排最適合你的道路駕駛方案與時段。
          </p>
          <Link href="https://lin.ee/" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            LINE 諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
