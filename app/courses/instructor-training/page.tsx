'use client'

import Image from 'next/image'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'
import Link from 'next/link'

export default function InstructorTrainingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero（與首頁 100% 對齊） ================= */}
<section className="relative h-[50vh] md:h-[72vh] w-full overflow-hidden">
  <Image
    src="/images/courses/instructor-training-hero.JPG"
    alt="駕駛教練培訓課程"
    fill
    priority
className="object-contain md:object-cover object-center md:[object-position:50%_30%]"
  />

  {/* 首頁同款遮罩 */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

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
        {/* ✅ 改用共用 HeroCTA */}
        <HeroCTA href="#pricing">
          查看培訓方案
        </HeroCTA>
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
            <BottomCTA
              title="不只會開車，你準備好教人開車了嗎？"
              description="成為教練，靠的不只是技術，而是判斷、引導與系統化教學能力。我們協助你建立完整且可執行的專業教練基礎。"
              buttonText="諮詢教練培訓計畫"
            />
          </main>
        )
      }
