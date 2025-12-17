'use client'
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    trackCTAConversion?: () => void
  }
}
import HeroText from '@/components/HeroText'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

const HERO_IMAGES = [
  '/hero-2.JPG',
  '/hero-4.JPG',
]

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)
  const [currentHero, setCurrentHero] = useState(0)

  /* ================= Hero 輪播 ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  /* ================= 全站平滑滾動 ================= */
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  /* ================= Header Active Scroll Spy ================= */
  useEffect(() => {
    const sections = [
      { id: 'courses' },
      { id: 'info' },
      { id: 'contact' },
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            history.replaceState(null, '', `#${entry.target.id}`)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ================= 課程資料 ================= */
  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者',
      detail:
        '基本控制、市區道路駕駛、各類停車技巧，建立正確車感與駕駛信心。',
      duration: '單堂 180 分鐘',
      highlight: '📍 全台到府服務',
      pricing: [
        { label: '《駕駛能力評估＋關鍵矯正》', price: '$4,990' },
        { label: '《14 天獨立上路成果計畫》', price: '$16,990' },
        { label: '《21 天通勤駕駛穩定方案》', price: '$35,000' },
      ],
    },
    {
      key: 'advanced',
      title: '運動駕駛',
      badge: '技術提升',
      summary: '適合已有駕駛經驗、想提升操控技巧者',
      detail:
        '學習掌握車輛荷重轉移、方向盤操作、山路駕駛路線選擇與實戰應用。',
      duration: '單堂 180 分鐘',
      highlight: '📍 全台到府服務',
      pricing: [
        { label: '3 小時', price: '$9,000' },
        { label: '9 小時', price: '$25,000' },
        { label: '12 小時', price: '$32,000' },
      ],
    },
    {
      key: 'track',
      title: '賽道駕駛',
      badge: '進階體驗',
      summary: '適合熱愛操控與極限體驗的學員',
      detail: '封閉場地練習彎道技巧、制動控制與安全極限判斷。',
      duration: '單節 30 分鐘',
      pricing: [
  { label: '2 節', price: '$7,000' },
  { label: '4 節', price: '$14,000' },
],
    },
    {
      key: 'training',
      title: '初階-道路駕駛教練培訓',
      badge: '技能培養',
      summary: '適合想投入駕駛教學、建立專業教練能力者',
      detail:
        '培訓內容涵蓋道路駕駛教學流程、課程設計與學員心理引導，透過實際陪同教學與案例解析，建立安全、穩定且可執行的駕駛教學 SOP，協助學員從「不會/不敢開車」進階到「可以獨立上路」。',
      duration: '訓練週期 3-6 個月',
      highlight: '📍 上課地點：台中',
      pricing: [
        { label: '完整教練培訓計畫', price: '$128,000' },
      ],
    }
  ]

  /* ================= 資訊卡片 ================= */
  const infoCards = [
    {
      key: 'qa',
      title: '常見 Q&A',
      content: (
        <ul className="space-y-3 text-sm text-gray-600">
          <li>Q：可以使用自己的車上課嗎？<br />A：可以，或加購教練車。</li>
          <li>Q：完全沒經驗可以上課嗎？<br />A：可以，新手上路專為此設計。</li>
          <li>Q：可以帶家人旁聽嗎？<br />A：以學員專注度為優先，需陪同請事先告知。</li>
          <li>Q：使用自家車會不會危險？<br />A：教練具備專業訓練與經驗，能完整控管教學安全。</li>
        </ul>
      ),
    },
    {
      key: 'payment',
      title: '付款方式',
      content: (
        <div className="space-y-2 text-sm text-gray-600">
          <p>付款方式透過官方LINE以獲取完整資訊。
          </p>
        </div>
      ),
    },
    {
      key: 'booking',
      title: '預約資訊',
      content: (
        <div className="space-y-3 text-sm text-gray-600">
          <p>課程時段：</p>
          <ul className="list-disc pl-5">
            <li>09:00 – 12:00</li>
            <li>14:00 – 17:00</li>
            <li>19:00 – 22:00</li>
          </ul>
          <p>單次課程為 3 小時</p>
          <p>教練將依學員狀況設定 2–3 個課綱，協助改善駕駛問題。</p>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* ================= Hero（動態輪播） ================= */}
      <section className="relative h-[60vh] md:h-[72vh] w-full overflow-hidden bg-black">
        {/* 輪播圖片 */}
        <div className="absolute inset-0 mx-auto max-w-[1920px]">
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHero ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
  src={src}
  alt="DriveMate 專業道路駕駛課程"
  fill
  priority={index === 0}
  quality={90}
  sizes="(max-width: 768px) 100vw, 1920px"
  className="
    object-cover
    object-center
    md:[object-position:50%_30%]
  "
/>

            </div>
          ))}
        </div>

        {/* 遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        {/* 文字內容 */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
  <div className="max-w-xl text-white">
    <HeroText />

    <a
      href={LINE_LINK}
      target="_blank"
      className="inline-block rounded-full bg-white px-8 py-3
                 font-medium text-black transition
                 hover:scale-105 hover:shadow-lg"
    >
      立即預約
    </a>
  </div>
</div>
      </section>


      {/* ================= Why ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            為什麼選擇 DriveMate 駕駛訓練中心？
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['實際道路教學', '在真實市區道路、高速與複雜路況中進行駕駛訓練，從變換車道、路口判斷到臨場應變，學會每天實際用得到的安全駕駛技巧，而不只是考照而已。'],
              ['專業駕駛教練一對一指導', '由經驗豐富的專業駕駛教練依照學員程度量身規劃課程，不論是新手上路、久未開車，或想加強特定路段，皆以循序漸進的方式，建立穩定且正確的駕駛觀念。'],
              ['安心陪駕，克服上路恐懼', '針對容易緊張、害怕上路的學員，透過陪駕訓練與實戰引導，強化路況判斷與心理穩定度，讓你從「不敢開」到「敢開、會開、開得安心」。'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border p-6 text-center shadow-sm">
                <h3 className="mb-2 font-semibold">{t}</h3>
                <p className="text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Courses ================= */}
      <section
        id="courses"
        className="bg-gray-50 py-20 scroll-mt-20"  /* ⭐新增 */
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">
            駕駛訓練課程介紹（新手・運動・賽道）
          </h2>

          <p className="mb-6 text-center text-sm text-gray-400 md:hidden animate-bounce">
            ← 左右滑動查看更多課程 →
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            {courses.map((course) => {
              const isOpen = open === course.key
              return (
                <div
                  key={course.key}
                  className="
    min-w-[280px] w-full
    rounded-2xl border bg-white p-6
    shadow-sm
    transition-transform transition-shadow duration-300 ease-out
    hover:-translate-y-1
    hover:shadow-lg
  "
>
                  <div
                    onClick={() => {
  setOpen(isOpen ? null : course.key)
  window.gtag?.('event', 'course_expand', {
    course: course.key
  })
}}
                  >
                    <div>
                      <h3 className="font-semibold text-xl">{course.title}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs text-white">
                        <Sparkles className="h-3 w-3" />
                        {course.badge}
                      </span>
                    </div>
                    <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <p className="mt-4 text-gray-600">{course.summary}</p>
                  {course.highlight && (
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {course.highlight}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">⏱ {course.duration}</p>

                  <div
                    className={`transition-all ${
                      isOpen ? 'max-h-96 mt-4' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className="border-t pt-4 space-y-3">
                      <p>{course.detail}</p>
                      <ul className="text-sm text-gray-600">
                        {course.pricing.map((p) => (
                          <li key={p.label}>
                            ▸ {p.label}｜{p.price}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= Info ================= */}
      <section
        id="info"
        className="bg-white py-20 scroll-mt-20"  /* ⭐新增 */
      >
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-sm text-gray-400 md:hidden animate-bounce">
            ← 左右滑動查看更多資訊 →
          </p>

          <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3">
            {infoCards.map((item) => {
              const isOpen = open === item.key
              return (
                <div
                  key={item.key}
                  className="min-w-[280px] rounded-2xl border p-6 shadow-sm"
                >
                  <div
                    onClick={() => setOpen(isOpen ? null : item.key)}
                    className="flex cursor-pointer justify-between"
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <ChevronDown className={`transition ${isOpen ? 'rotate-180' : ''}`} />
                  </div>

                  <div
                    className={`transition-all ${
                      isOpen ? 'max-h-96 mt-4' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className="border-t pt-4">{item.content}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-white py-24 text-center scroll-mt-20" /* ⭐新增 */
      >
        <h2 className="text-3xl font-bold mb-4">
          準備好開始你的駕駛旅程了嗎？
        </h2>
        <p className="mb-8 text-gray-600">
          立即預約 DriveMate 駕駛訓練課程，由專業教練陪同，安心累積實際駕駛經驗。
        </p>
        <a
          href={LINE_LINK}
  target="_blank"
  onClick={() => {
    window.gtag?.('event', 'hero_cta_click', {
      event_category: 'engagement',
      event_label: 'hero_line'
    })
    window.trackCTAConversion?.()
  }}
        >
          DriveMate 官方 LINE
        </a>
      </section>
    </>
  )
}
