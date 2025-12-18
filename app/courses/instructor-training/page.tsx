'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function InstructorTrainingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero（與首頁 100% 對齊） ================= */}
<section className="relative h-[75vh] min-h-[520px]">
  <Image
    src="/images/courses/instructor-training-hero.jpg"
    alt="駕駛教練培訓課程"
    fill
    priority
    className="object-cover"
  />

  {/* 首頁同款遮罩 */}
  <div className="absolute inset-0 bg-black/50" />

  {/* === 關鍵：首頁 Hero Content 容器 === */}
  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-24">
    {/* === 首頁同款文字寬度 === */}
    <div className="max-w-2xl text-white">
      <h1 className="text-4xl font-bold md:text-5xl leading-tight">
        駕駛教練培訓課程
      </h1>

      <p className="mt-6 text-lg text-neutral-200">
        不只是會開車，  
        而是能「教得好、帶得穩」的專業駕駛教練。
      </p>

      {/* 首頁同款 CTA 間距 */}
      <div className="mt-10">
        <Link
          href="#pricing"
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-10 py-4 text-lg font-semibold hover:bg-orange-600"
        >
          查看培訓方案
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* ================= 誰適合這門課 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          這門課適合誰？
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: '現職或準教練',
              desc: '希望建立系統化教學能力與專業方法論。',
            },
            {
              title: '高階駕駛者',
              desc: '想將自身經驗轉化為可教學的能力。',
            },
            {
              title: '品牌合作培訓',
              desc: '企業、車廠、車隊內部培訓需求。',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Training Pricing */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">
            培訓費用說明
          </h2>

          <div className="rounded-2xl bg-white p-8 shadow">
            <p className="mb-4 text-neutral-700">
              課程為長期系統性培訓，培訓內容與深度彈性規劃。
            </p>

            <p className="mb-6 text-3xl font-bold text-neutral-800">
              NT$128,000
            </p>

            <ul className="mb-6 space-y-1 text-neutral-600">
              <li>• 建立教學結構、溝通技巧與基礎帶課能力</li>
              <li>• 強化課程設計、評估能力與學員管理</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-neutral-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            想成為真正專業的駕駛教練？
          </h2>
          <p className="mb-8 text-neutral-300">
            加入 LINE，了解完整培訓流程與合作方式。
          </p>
          <Link
            href="https://lin.ee/J22IVRg"
            className="inline-block rounded-xl bg-orange-500 px-10 py-4 text-lg font-semibold hover:bg-orange-600"
          >
            聯絡我們
          </Link>
        </div>
      </section>
    </main>
  )
}
