'use client'

import Image from 'next/image'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'

export default function RoadDrivingClient() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero（與首頁 100% 對齊） ================= */}
    <section className="relative h-[50vh] md:h-[72vh] w-full overflow-hidden">
  <Image
    src="/images/courses/road-driving-hero.jpg"
    alt="道路駕駛實戰課程"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 1920px"
className="object-cover md:object-cover object-center md:[object-position:50%_30%]"
  />

  {/* 遮罩 */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

  {/* 文字內容（完全對齊首頁） */}
  <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
    <div className="max-w-xl text-white">
      <h1 className="text-4xl font-bold md:text-5xl leading-tight">
        道路駕駛實戰課程
      </h1>

      <p className="mt-6 text-lg text-neutral-200">
        從評估、矯正到穩定上路，  
        用最貼近真實生活的方式，建立你的駕駛信心。
      </p>

      <div className="mt-10">
        {/* ✅ 改用共用 HeroCTA */}
        <HeroCTA href="#pricing">
          查看課程方案
        </HeroCTA>
      </div>
    </div>
  </div>
</section>

      {/* ================= 為什麼需要道路駕駛訓練 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          為什麼很多人「有駕照，卻不敢上路」？
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: '缺乏真實路況經驗',
              desc: '考照練習與實際道路差距極大，一上路就緊張。',
            },
            {
              title: '錯誤習慣未被糾正',
              desc: '方向盤、煞車、路口判斷的小錯誤，會累積成壓力。',
            },
            {
              title: '心理壓力大於技術問題',
              desc: '很多時候不是不會開，而是不敢開。',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-7 md:p-6 shadow text-center">
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="mx-auto max-w-[16rem] text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
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
          <li>• 14 天循序練習節奏(4 堂課程)</li>
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
          <li>• 21 天密集練習步調(8 堂課程)</li>
          <li>• 尖峰與高流量路況應對</li>
          <li>• 建立長期穩定駕駛習慣</li>
        </ul>
      </div>
    </div>
  </div>
</section>

           {/* ================= CTA ================= */}
      <BottomCTA
        title="想知道你卡住的是技術，還是心理？"
        description="多數學員不是不會開，而是缺少正確評估與引導。讓教練依你的實際狀況，幫你找出最適合的道路訓練方式。"
        buttonText="立即預約駕駛評估"
        bgImage="/images/cta/road-driving.jpg"
      />
    </main>
  )
}