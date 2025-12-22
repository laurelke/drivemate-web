'use client'

import Image from 'next/image'
import React from 'react'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'

export const metadata = {
  title: '賽道駕駛訓練｜真正理解車輛操控與極限｜DriveMate',
  description:
    'DriveMate 賽道駕駛訓練課程，透過專業教練一對一指導，在安全賽道環境中學習車輛操控、彎道節奏與駕駛極限，建立真正的駕駛信心。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/track-driving',
  },
}

export default function TrackDrivingPage() {
  return (
    <>
      {/* ================= Course Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            '@id': 'https://drivemate-tw.com/courses/track-driving#course',
            name: '賽道駕駛訓練課程',
            description:
              '在專業賽道中進行的一對一駕駛訓練，學習車輛操控、彎道節奏與安全極限控制。',
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
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: '首頁',
                item: 'https://drivemate-tw.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '課程介紹',
                item: 'https://drivemate-tw.com/courses',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: '賽道駕駛訓練',
                item: 'https://drivemate-tw.com/courses/track-driving',
              },
            ],
          }),
        }}
      />
{/* ================= FAQ Schema｜賽道駕駛課程 ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "沒有賽道經驗，也可以參加賽道駕駛訓練嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可以。本課程不以刷圈速為目標，而是專注於車輛操控與駕駛觀念建立。即使沒有賽道經驗，教練也會依你的程度循序引導，在安全可控的環境中學習。"
          }
        },
        {
          "@type": "Question",
          "name": "賽道駕駛訓練是不是就是開很快？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不是。賽道訓練的核心在於理解車輛動態、煞車與轉向協調，以及彎道節奏判斷。速度只是結果，課程重點是『可控』與『穩定』的駕駛能力。"
          }
        },
        {
          "@type": "Question",
          "name": "一般道路駕駛者，學賽道駕駛有幫助嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "非常有幫助。賽道是最安全放大駕駛錯誤的環境，能讓你清楚感受煞車距離、轉向反應與車輛極限，進而提升日常道路行駛的穩定性與安全性。"
          }
        },
        {
          "@type": "Question",
          "name": "課程是一對一教學嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "是的，DriveMate 賽道駕駛訓練採一對一教學，由專業教練全程陪同，依個人駕駛習慣即時調整與指導，確保學習品質與安全。"
          }
        },
        {
          "@type": "Question",
          "name": "這門賽道課程適合想刷圈速或比快的人嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不適合。本課程專注於駕駛觀念與操控能力建立，而非競速或刷圈。如果你希望透過正確方式提升駕駛穩定度與理解車輛，這門課程才會適合你。"
          }
        }
      ]
    })
  }}
/>
      <main className="min-h-screen bg-neutral-50 text-neutral-800">
        {/* ================= Hero ================= */}
        <section className="relative h-[50vh] md:h-[72vh] w-full overflow-hidden">
          <Image
            src="/images/courses/track-driving-hero.jpg"
            alt="賽道駕駛訓練課程"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1920px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold md:text-5xl leading-tight">
                真正把車開好，不只是開得快
              </h1>

              <p className="mt-6 text-lg text-neutral-200">
                賽道不是飆速場，而是最安全、最有效率的駕駛訓練環境。  
                在可控條件下，學會操控、理解車輛極限，建立真正的駕駛信心。
              </p>

              <div className="mt-10">
                <HeroCTA href="#pricing">查看課程內容</HeroCTA>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 課程定位 ================= */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-8 text-3xl font-bold text-center">
            賽道駕駛，不是為了更快，而是更懂控制
          </h2>

          <p className="mx-auto max-w-3xl text-center text-neutral-600 leading-relaxed">
            在 DriveMate，我們把賽道視為「放大駕駛能力」的訓練場。  
            沒有行人、沒有突發路況，你可以專注感受車輛在加速、煞車、
            轉向時的真實反饋，修正平常在道路上被忽略的錯誤習慣。
          </p>
        </section>

        {/* ================= 適合誰 ================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="mb-10 text-3xl font-bold text-center">
              這門賽道駕駛課程，適合誰？
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border p-6">
                <h3 className="mb-4 text-xl font-semibold">適合你，如果你：</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 已經會開車，但不清楚車輛極限</li>
                  <li>• 想提升高速或彎道行駛的穩定度</li>
                  <li>• 希望用正確方式學習操控技巧</li>
                  <li>• 對駕駛技術有認真學習的態度</li>
                </ul>
              </div>

              <div className="rounded-2xl border p-6 bg-neutral-50">
                <h3 className="mb-4 text-xl font-semibold">不適合你，如果你：</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• 只想刷圈速、比快</li>
                  <li>• 不願意被教練糾正駕駛習慣</li>
                  <li>• 把賽道當成飆車場</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 課程內容 ================= */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-3xl font-bold text-center">
            賽道駕駛訓練內容重點
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              '正確駕駛姿勢與視線控制',
              '煞車點與入彎節奏判斷',
              '油門、煞車、方向盤協調',
              '車輛動態與抓地力理解',
              '即時修正錯誤操控習慣',
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow">
                <p className="font-medium">{item}</p>
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
                  <li>• 一對一賽道實地操控訓練</li>
          <li>• 煞車點、入彎與出彎節奏解析</li>
          <li>• 車輛動態與重心轉移理解</li>
          <li>• 即時回饋與修正駕駛動作</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">進階賽道課</h3>
              <p className="text-3xl font-bold">NT$14,000</p>
              <ul className="mt-4 text-neutral-700 space-y-1">
                <li>• 4 節課程</li>
                 <li>• 依個人駕駛風格客製訓練內容</li>
          <li>• 高速穩定性與極限控制練習</li>
          <li>• 賽道行車路線與節奏優化</li>
          <li>• 建立可長期複製的操控能力</li>
              </ul>
            </div>
          </div>
          </div>
           </section>
        {/* ================= CTA ================= */}
        <BottomCTA
          title="想真正理解車輛，而不是盲目追求速度？"
          description="賽道駕駛是一場駕駛能力的校正過程。讓專業教練在安全環境中，帶你建立真正的操控與信心。"
          buttonText="立即預約賽道駕駛訓練"
        />
      </main>
    </>
  )
}
