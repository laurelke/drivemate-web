'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'

const pricingPlans = [
  {
    name: '小資專案',
    subtitle: '基礎上路實戰',
    price: 'NT$3,000',
    description: '適合剛拿到駕照、想先建立基本道路駕駛能力的新手。',
    items: [
      '教練車實際上路，免自備車輛',
      '一堂課 2 小時',
      '適合考到駕照但還不敢自己開車',
      '內容包含基礎車輛控制、停車、路口基本判斷、市區道路行駛',
      '不含高快速道路與山路',
      '上課地點為台中地區指定路段',
      '接送地點為台中捷運北屯總站',
    ],
    featured: false,
  },
  {
    name: '駕駛能力評估＋關鍵矯正',
    subtitle: '入門｜快速診斷型',
    price: 'NT$4,990',
    description: '適合已有駕照、會開但不穩，想先找出核心問題的人。',
    items: [
      '使用自家車，可加購教練車',
      '一對一教練陪同上路',
      '駕駛習慣與路況判斷評估',
      '即時矯正關鍵錯誤操作',
      '提供個人化練習方向',
      '全台到府服務',
      '可補差價升級其他成果導向方案',
    ],
    featured: false,
  },
  {
    name: '14 天獨立上路成果計畫',
    subtitle: '進階｜成果導向',
    price: 'NT$16,990',
    description: '適合想在短時間內建立獨立、安全上路能力的學員。',
    items: [
      '使用自家車，可加購教練車',
      '系統化道路駕駛訓練',
      '14 天循序練習節奏，共 4 堂課',
      '多元實際道路情境演練',
      '明確成果檢核與教練回饋',
      '全台到府服務',
      '可補差價升級 21 天通勤駕駛穩定方案',
    ],
    featured: true,
  },
  {
    name: '21 天通勤駕駛穩定方案',
    subtitle: '高階｜生活整合型',
    price: 'NT$35,000',
    description: '適合需要面對日常通勤、尖峰車流與複雜路況的人。',
    items: [
      '使用自家車，可加購教練車',
      '以各類路型與實際路線為訓練核心',
      '21 天密集練習步調，共 8 堂課',
      '尖峰與高流量路況應對',
      '建立長期穩定駕駛習慣',
      '全台到府服務',
    ],
    featured: false,
  },
]

const suitableFor = [
  '剛拿到駕照，但還不敢獨自開車上路',
  '長時間沒有開車，駕駛感覺明顯變生疏',
  '會基本操作，但在市區、路口或停車時容易慌張',
  '想練通勤路線、接送路線或固定生活動線',
]

const faqs = [
  {
    q: '道路駕駛課程是什麼？',
    a: '道路駕駛課程是在真實道路環境中，由教練一對一陪同進行的實戰駕駛訓練。和只在場地內練習不同，重點是幫助學員建立真正能上路的判斷、操作與信心。',
  },
  {
    q: '沒有駕駛經驗也可以報名嗎？',
    a: '可以。若你剛拿到駕照、缺乏實際道路經驗，教練會依你的程度安排內容，從基礎操作、道路判斷到實際上路循序建立能力。',
  },
  {
    q: '已經有駕照但很久沒開車，適合這門課嗎？',
    a: '非常適合。很多學員的問題不是不會開，而是久未駕駛後缺乏信心。本課程會協助你重新建立對車輛、路況與自身判斷的掌握。',
  },
  {
    q: '道路駕駛課程費用怎麼算？',
    a: '費用會依訓練堂數、目標與是否客製化而不同。你可以先從單堂或評估方案開始，再依狀況升級為成果導向課程。',
  },
  {
    q: '課程會練到哪些內容？',
    a: '常見內容包含基礎車輛控制、市區道路、路口判斷、車道變換、停車技巧，以及實際生活中常用的通勤路線。',
  },
  {
    q: '一定要自備車輛嗎？',
    a: '不一定。部分方案可直接使用教練車，若你想熟悉自己的車輛，也可使用自家車上課。',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${
            light ? 'text-white/60' : 'text-neutral-400'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? 'text-white/75' : 'text-neutral-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default function RoadDrivingClient() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      <section className="relative h-[62vh] w-full overflow-hidden md:h-[84vh]">
        <Image
          src="/images/courses/road-driving-hero.jpg"
          alt="道路駕駛課程實戰訓練，一對一教練陪同上路"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-center md:[object-position:50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-white/75">
              Road Driving Course
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              給新手與不敢上路者的實戰訓練
              <br />
              給新手與不敢上路者的實戰訓練
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              DriveMate 道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，
              透過一對一教練陪同與真實路況訓練，幫助你建立安全、穩定且可落地的駕駛能力。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <HeroCTA href="#pricing">查看課程方案</HeroCTA>
              <HeroCTA href="#faq">先看常見問題</HeroCTA>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Who is this for"
          title="道路駕駛課程適合哪些人？"
          description="如果你已經有駕照，卻仍不敢上路，或是一遇到車流、路口、停車就容易緊張，那麼道路駕駛課程通常會比單純重複場地練習更有效。這類課程的目標不是讓你更會考試，而是讓你更能應付真實道路。"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {suitableFor.map((item) => (
            <div
              key={item}
              className="group flex min-h-[130px] items-center justify-center rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-neutral-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-50 hover:shadow-lg hover:ring-neutral-300"
            >
              <p className="text-base leading-8 text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 md:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Why people get stuck"
            title="為什麼很多人有駕照，卻不敢上路？"
            description="多數人的問題不是完全不會開車，而是缺少在真實道路中被正確引導與修正的機會。"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: '缺乏真實路況經驗',
                desc: '考照訓練與實際道路差距很大，一進入車流、路口與停車場就容易緊張。',
              },
              {
                title: '錯誤習慣沒有被即時修正',
                desc: '方向盤控制、煞車時機、視線配置與車道判斷，只要有小錯誤就會讓壓力持續累積。',
              },
              {
                title: '心理壓力大於技術問題',
                desc: '很多學員其實會開，但因為缺乏信心與安全感，始終不敢獨立上路。',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-neutral-50 p-8 text-center shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Course content
              </p>
              <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
                道路駕駛課程內容有哪些？
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                課程會依學員狀況客製安排，但大多會圍繞以下幾個核心能力展開，目的是讓你從「知道怎麼開」走到「能穩定上路」。
              </p>
            </div>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: '基礎車輛控制與視線建立',
                  desc: '包含坐姿、方向盤操作、油門與煞車控制、視線與後照鏡使用習慣。',
                },
                {
                  title: '市區道路與路口判斷',
                  desc: '練習常見市區路況、轉彎、變換車道、路口判斷與車流互動。',
                },
                {
                  title: '停車與倒車技巧',
                  desc: '依實際需求安排路邊停車、倒車入庫與停車場進出。',
                },
                {
                  title: '生活化路線實戰',
                  desc: '可依需求安排通勤、接送、特定生活圈或常用路線的實際練習。',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Summary
            </p>
            <h3 className="text-2xl font-bold">這頁重點整理</h3>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80">
              <li>• 道路駕駛課程重點在真實道路實戰，而不是只做場地練習。</li>
              <li>• 適合新手、久未開車、會開但不敢上路的人。</li>
              <li>• 常見內容包含市區道路、路口判斷、停車與客製化路線。</li>
              <li>• 可先從單堂體驗或評估方案開始，再依需求升級。</li>
            </ul>

            <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
              <p className="text-sm leading-7 text-white/80">
                想知道你現在卡住的是技術、判斷，還是心理壓力？
                可以先從評估型方案開始，教練會依你的實際狀況給出最適合的訓練方向。
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Plans & pricing"
            title="道路駕駛課程方案與費用"
            description="道路駕駛課程費用會依訓練深度、堂數與是否客製化而不同。你可以先從基礎方案開始，再依實際狀況升級為成果導向或長期穩定訓練方案。"
          />

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  plan.featured
                    ? 'border-2 border-orange-500 bg-white ring-1 ring-orange-200'
                    : 'bg-white ring-1 ring-neutral-200'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    最多人選擇
                  </span>
                ) : null}

                <p
                  className={`text-sm font-medium ${
                    plan.featured ? 'text-orange-600' : 'text-neutral-500'
                  }`}
                >
                  {plan.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                  {plan.name}
                </h3>

                <p className="mt-4 text-3xl font-bold text-neutral-900">
                  {plan.price}
                </p>

                <p className="mt-4 leading-7 text-neutral-600">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-700">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {plan.name !== '小資專案' ? (
                  <div className="mt-6 text-sm text-neutral-600">
                    需要教練車？
                    <Link
                      href="/courses/road-driving/instructor-car"
                      className="ml-2 text-orange-600 underline underline-offset-4 transition hover:text-orange-700"
                    >
                      查看教練車加購方案
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="rounded-[2rem] bg-neutral-900 px-8 py-10 text-white shadow-xl md:px-12 md:py-12">
          <SectionHeading
            eyebrow="How to choose"
            title="如何選擇適合自己的道路駕駛課程？"
            description=""
            light
          />

          <div className="mx-auto mt-8 max-w-4xl">
            <ul className="space-y-4 text-base leading-8 text-white/80">
              <li>• 如果你幾乎沒有道路經驗，建議先從基礎方案或評估課開始。</li>
              <li>• 如果你會開但常在特定情境失誤，評估＋矯正方案通常最有效率。</li>
              <li>• 如果你的目標是短時間內獨立上路，可選擇 14 天成果計畫。</li>
              <li>• 如果你需要面對固定通勤、尖峰車流或複雜生活動線，21 天穩定方案會更適合。</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="道路駕駛課程常見問題"
            description="以下整理學員最常問的問題，包含適合對象、課程內容、費用與使用車輛方式。"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl bg-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-neutral-900 marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-8 text-neutral-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="rounded-[2rem] bg-orange-50 p-8 shadow-sm ring-1 ring-orange-100 md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
            Final takeaway
          </p>
          <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
            道路駕駛課程的核心目標，不只是把車開出去
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-700">
            真正重要的是，當你面對真實道路、車流與生活情境時，能不能維持穩定判斷與安全操作。
            如果你想從「不敢上路」走到「可以自己上路」，道路駕駛課程會比單純反覆考照式練習更貼近真實需求。
          </p>
        </div>
      </section>

      <BottomCTA
        title="想知道你卡住的是技術，還是心理？"
        description="多數學員不是不會開，而是缺少正確評估與引導。讓教練依你的實際狀況，幫你找出最適合的道路訓練方式。"
        buttonText="立即預約駕駛評估"
        bgImage="/images/cta/road-driving.jpg"
      />
    </main>
  )
}
