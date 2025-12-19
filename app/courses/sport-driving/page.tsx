'use client'

import Image from 'next/image'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'

export default function SportDrivingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero（與首頁 100% 對齊） ================= */}
      <section className="relative h-[60vh] md:h-[72vh] w-full overflow-hidden bg-black">
        <Image
          src="/images/courses/sport-driving-hero.jpg"
          alt="運動駕駛技術提升課程"
          fill
          priority
          className="object-cover object-center md:[object-position:50%_35%]"
        />

        {/* 遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* 文字內容 */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              運動駕駛技術提升課程
            </h1>

            <p className="mt-6 text-lg text-neutral-200">
              不是開得更快，  
              而是開得更穩、更準、更可控。
            </p>

            <div className="mt-10">
              <HeroCTA href="#pricing">
                查看課程方案
              </HeroCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 為什麼要學運動駕駛 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          為什麼已經會開車，還需要學運動駕駛？
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: '多數駕駛其實是憑感覺在開',
              desc: '煞車、轉向與油門操作缺乏明確依據，路況一複雜就容易失誤。',
            },
            {
              title: '技術不足會放大壓力與風險',
              desc: '山路或連續彎道時，常出現過度修正或操作混亂。',
            },
            {
              title: '運動駕駛建立可預期的操控能力',
              desc: '讓每一個操作都有邏輯，而不是靠直覺硬撐。',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow"
            >
              <h3 className="mb-2 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 課程介紹 ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-center text-3xl font-bold">
            課程內容與訓練重點
          </h2>

          <div className="mx-auto max-w-3xl space-y-6 text-lg text-neutral-700">
            <p>
              本課程專為已有駕駛經驗的學員設計，  
              目標是將模糊的駕駛感覺，轉化為可控制、技巧精準化的技術。
            </p>

            <p>
              透過系統性理解車輛荷重轉移、方向盤操作邏輯，
              並實際應用於山路與初階賽道情境，
              建立穩定、可預期的操控反應。
            </p>

            <p>
              這不是賽道競速訓練，而是一門能直接回到日常駕駛中的
              「進階駕駛技術課程」。
            </p>
          </div>
        </div>
      </section>

      {/* ================= Pricing ================= */}
      <section id="pricing" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-4 text-center text-3xl font-bold">
            運動駕駛課程方案與費用
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-neutral-600">
            依你的駕駛程度與目標，安排最合適的訓練節奏。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: '基礎操控強化',
                tag: '入門',
                price: '$9,000',
                hours: '3 小時',
                items: [
                  '車輛荷重轉移基礎理解',
                  '方向盤與煞車操作修正',
                  '實際道路情境應用',
                ],
              },
              {
                title: '操控技術系統訓練',
                tag: '進階',
                price: '$25,000',
                hours: '9 小時',
                highlight: true,
                items: [
                  '完整操控邏輯建立',
                  '山路與連續彎道應用',
                  '穩定性與精準度提升',
                ],
              },
              {
                title: '長期技術整合訓練',
                tag: '高階',
                price: '$32,000',
                hours: '12 小時',
                items: [
                  '複雜路況應對策略',
                  '個人化技術調整',
                  '建立精準且細膩的操控習慣',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl border bg-white p-6 shadow ${
                  plan.highlight
                    ? 'border-neutral-900 shadow-lg'
                    : ''
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-neutral-900 px-4 py-1 text-xs font-semibold text-white">
                    最多人選擇
                  </span>
                )}

                <h3 className="mb-1 text-xl font-semibold">
                  {plan.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-500">
                  {plan.tag}｜{plan.hours}
                </p>

                <p className="mb-6 text-3xl font-bold">
                  {plan.price}
                </p>

                <ul className="space-y-2 text-sm text-neutral-600">
                  {plan.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Bottom CTA ================= */}
      <BottomCTA
        title="想讓駕駛變得更穩，而不是更緊張？"
        description="運動駕駛不是追求速度，而是讓你在任何路況下，都知道自己正在做什麼。讓教練依你的實際狀況，規劃最適合的技術提升方式。"
        buttonText="立即預約技術評估"
      />
    </main>
  )
}