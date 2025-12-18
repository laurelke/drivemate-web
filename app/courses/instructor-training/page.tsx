'use client'

import Link from 'next/link'

export default function InstructorTrainingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      <section className="bg-neutral-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">道路駕駛教練培訓課程</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            建立專業、系統化的道路駕駛教學能力。
          </p>
          <Link href="#signup" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            了解培訓內容
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">適合對象</h3>
            <p className="text-neutral-600">希望成為專業道路駕駛教練的駕駛者。</p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">培訓內容</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>• 教學流程與課綱設計</li>
              <li>• 駕駛安全觀念</li>
              <li>• 學員心理與溝通</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="mb-3 text-xl font-semibold">培訓特色</h3>
            <p className="text-neutral-600">小班制實務導向，重視實際教學能力。</p>
          </div>
        </div>
      </section>

      <section id="signup" className="bg-neutral-100">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">成為值得信賴的駕駛教練</h2>
          <p className="mb-8 text-neutral-600">歡迎聯絡我們索取完整培訓資訊。</p>
          <Link href="https://lin.ee/" className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white">
            LINE 諮詢
          </Link>
        </div>
      </section>
    </main>
  )
}
