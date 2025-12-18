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
    <h2 className="mb-4 text-center text-3xl font-bold">
      道路駕駛課程方案與費用
    </h2>
    <p className="mx-auto mb-12 max-w-3xl text-center text-neutral-600">
      依你的駕駛狀況與目標，選擇最適合的成果型訓練方案。
    </p>

    <div className="grid gap-8 md:grid-cols-3">
      {/* A */}
      <div className="rounded-2xl border bg-white p-6 shadow">
        <h3 className="mb-1 text-xl font-semibold">
          駕駛能力評估＋關鍵矯正
        </h3>
        <p className="mb-4 text-sm text-neutral-500">
          入門｜快速診斷型
        </p>

        <p className="mb-6 text-3xl font-bold text-neutral-800">
          NT$4,990
        </p>

        <ul className="mb-8 space-y-2 text-sm text-neutral-600">
          <li>• 一對一教練陪同上路</li>
          <li>• 駕駛習慣與路況判斷評估</li>
          <li>• 即時矯正關鍵錯誤操作</li>
          <li>• 個人化練習建議方向</li>
        </ul>

        <a>
        </a>
      </div>

      {/* B - 主推 */}
      <div className="relative rounded-2xl border-2 border-orange-500 bg-white p-6 shadow-lg">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white">
          最多人選擇
        </span>

        <h3 className="mb-1 text-xl font-semibold">
          14 天獨立上路成果計畫
        </h3>
        <p className="mb-4 text-sm text-orange-600">
          進階｜成果導向
        </p>

        <p className="mb-6 text-3xl font-bold text-neutral-800">
          NT$16,990
        </p>

        <ul className="mb-8 space-y-2 text-sm text-neutral-600">
          <li>• 系統化道路駕駛訓練</li>
          <li>• 14 天循序練習節奏</li>
          <li>• 多元實際道路情境演練</li>
          <li>• 明確成果檢核與回饋</li>
        </ul>

        <a>
        </a>
      </div>

      {/* C */}
      <div className="rounded-2xl border bg-white p-6 shadow">
        <h3 className="mb-1 text-xl font-semibold">
          21 天通勤駕駛穩定方案
        </h3>
        <p className="mb-4 text-sm text-neutral-500">
          高階｜生活整合型
        </p>

        <p className="mb-6 text-3xl font-bold text-neutral-800">
          NT$35,000
        </p>

        <ul className="mb-8 space-y-2 text-sm text-neutral-600">
          <li>• 以應對所有路型/路線為訓練核心</li>
          <li>• 21 天密集練習步調</li>
          <li>• 尖峰與高流量路況應對</li>
          <li>• 建立長期穩定駕駛習慣</li>
        </ul>

        <a>
        </a>
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
            立即預約
          </Link>
        </div>
      </section>
    </main>
  )
}
