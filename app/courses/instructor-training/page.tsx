'use client'

import Image from 'next/image'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'
import React from 'react'
export default function InstructorTrainingPage() {
  return (
                <React.Fragment>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': 'https://drivemate-tw.com/courses/instructor-training#course',
      name: '駕駛教練培訓與專業認證課程',
      description:
        '專為希望成為專業駕駛教練者設計的培訓課程，涵蓋教學技巧、駕駛評估方法、訓練規劃與實務指導能力。',
      provider: {
        '@type': 'Organization',
        name: 'DriveMate 駕駛訓練中心',
        url: 'https://drivemate-tw.com/',
      },
      areaServed: {
        '@type': 'Country',
        name: 'TW',
      },
      availableLanguage: ['zh-TW'],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'OnSite',
      },
    }),
  }}
/>
{/* ================= Breadcrumb Schema ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首頁",
          "item": "https://drivemate-tw.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "課程介紹",
          "item": "https://drivemate-tw.com/courses"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "教練培訓課程",
          "item": "https://drivemate-tw.com/courses/instructor-training"
        }
      ]
    })
  }}
/>
{/* ================= FAQ Schema（Instructor Training） ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "〖教練培訓課程〗適合什麼樣的人？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "本課程適合有駕駛經驗，並希望成為專業駕駛教練或提升教學能力的人士參加。"
          }
        },
        {
          "@type": "Question",
          "name": "一定要有教學經驗才能報名嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不一定。課程會從教學邏輯、學員心理與實際示範技巧開始，協助學員建立完整的教學能力。"
          }
        },
        {
          "@type": "Question",
          "name": "〖教練培訓課程〗會學到哪些內容？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "包含教學結構設計、駕駛示範技巧、學員評估方式與安全控管，讓你具備實際教學所需的專業能力。"
          }
        },
        {
          "@type": "Question",
          "name": "完成課程後可以成為正式教練嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "完成課程後可具備教練所需的核心能力，實際資格與執業方式仍需依相關規範與個人發展方向而定。"
          }
        },
        {
          "@type": "Question",
          "name": "這門課程偏重理論還是實作？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "課程以實務導向為主，搭配必要理論說明，確保學員能實際應用於教學與指導情境中。"
          }
        }
      ]
    })
  }}
/>
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero（與首頁 100% 對齊） ================= */}
<section className="relative h-[50vh] md:h-[72vh] w-full overflow-hidden">
  <Image
    src="/images/courses/instructor-training-hero.JPG"
    alt="駕駛教練培訓課程"
    fill
    priority
className="object-cover md:object-cover object-center md:[object-position:50%_60%]"
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
        不只是會開車，而是能<br />
        「教得好、帶得穩」的專業駕駛教練。
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
            <div key={item.title} className="rounded-2xl bg-white p-7 md:p-6 shadow text-center">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mx-auto max-w-[16rem] text-neutral-600">{item.desc}</p>
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
               bgImage="/images/cta/instructor-training.jpg"
            />
          </main>
          </React.Fragment>
        )
      }
