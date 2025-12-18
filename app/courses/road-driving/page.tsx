'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function RoadDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Banner */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">道路駕駛實戰課程</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            從不敢上路到安心駕駛，建立真正能在日常道路使用的駕駛能力。
          </p>
          <Link href="#signup" className="inline-block rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow hover:bg-orange-600">
            立即諮詢 / 報名
          </Link>
        </div>
      </section>

      {/* Info Cards */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">適合對象</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• 剛拿到駕照、不敢實際上路</li>
              <li>• 長時間未開車、缺乏信心</li>
              <li>• 想建立安全駕駛習慣者</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">課程內容</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• 市區與快速道路實戰</li>
              <li>• 路口判斷與變換車道</li>
              <li>• 停車與倒車情境</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">課程特色</h3>
            <p className="text-neutral-600">
              一對一陪駕，依照學員程度量身調整，真正解決你在道路上的恐懼與盲點。
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-bold">你會學到什麼？</h2>
          <ul className="space-y-3 text-lg text-neutral-700">
            <li>✓ 如何判斷路況並提前應對</li>
            <li>✓ 建立穩定的駕駛節奏與視線管理</li>
            <li>✓ 面對複雜交通環境仍能保持冷靜</li>
          </ul>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">準備好安心上路了嗎？</h2>
          <p className="mb-8 text-neutral-600">歡迎透過 LINE 與我們聯絡，了解最適合你的課程安排。</p>
          <Link href="https://lin.ee/" className="inline-block rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600">
            LINE 諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
