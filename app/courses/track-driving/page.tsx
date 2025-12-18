import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '賽道駕駛課程｜進階操控體驗・安全學會極限｜DriveMate',
  description:
    'DriveMate 賽道駕駛課程，於專業封閉賽道進行實戰訓練，學習過彎、煞車、車輛動態與安全極限判斷，適合想精進操控技巧的駕駛者。',
  openGraph: {
    title: '賽道駕駛課程｜DriveMate',
    description:
      '在專業賽道中安全體驗車輛極限，學會正確操控與風險判斷。',
    url: 'https://drivemate-tw.com/courses/track-driving',
    images: ['/og-image.jpg'],
  },
}

export default function TrackDrivingPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/track-hero.jpg"
          alt="DriveMate 賽道駕駛課程"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center px-6">
          <div className="text-white">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold">賽道駕駛課程</h1>
            <p className="max-w-xl text-lg text-gray-200">
              在專業封閉賽道中，安全學會操控車輛極限，真正理解煞車、過彎與車輛動態。
            </p>
          </div>
        </div>
      </section>

      {/* 課程介紹 */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-2xl font-bold">什麼是賽道駕駛課程？</h2>
          <p className="text-gray-700 leading-relaxed">
            賽道駕駛課程是在封閉且安全的專業場地中，透過教練指導實際操作車輛，
            學習正確的過彎路線、煞車時機、油門控制與車輛重心轉移。
            與一般道路駕駛不同，賽道能讓你在無交通干擾的環境下，真正理解車輛極限，
            並建立「安全駕馭高性能」的正確觀念。
          </p>
        </div>
      </section>

      {/* 適合對象 */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-2xl font-bold">這門課適合誰？</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-gray-700">
            <li>✔ 已有道路駕駛經驗，想進一步提升操控技巧者</li>
            <li>✔ 對車輛動態、過彎與煞車技術有興趣的駕駛</li>
            <li>✔ 想安全體驗車輛性能，而非在道路上冒風險者</li>
            <li>✔ 熱愛駕駛、賽車文化與技術精進的學員</li>
          </ul>
        </div>
      </section>

      {/* 課程內容 */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-2xl font-bold">課程內容重點</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[ 
              ['過彎路線與視線控制', '學會正確進彎、出彎路線與視線引導技巧。'],
              ['煞車與減速技巧', '理解煞車點選擇、煞車力道與車身穩定性。'],
              ['車輛動態與極限判斷', '感受轉向不足、轉向過度並正確修正。'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border p-6 shadow-sm">
                <h3 className="mb-2 font-semibold">{t}</h3>
                <p className="text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-2xl font-bold">課程費用</h2>
          <ul className="space-y-3 text-gray-700">
            <li>▸ 2 節體驗課程：NT$7,000</li>
            <li>▸ 4 節進階課程：NT$14,000</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">實際上課賽道與時間依官方公告為準。</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="mb-6 text-3xl font-bold">想安全體驗真正的駕駛極限嗎？</h2>
        <p className="mb-8 text-gray-600">立即預約 DriveMate 賽道駕駛課程，由專業教練全程指導。</p>
        <a
          href="https://lin.ee/J22IVRg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-black px-10 py-4 text-white font-semibold hover:scale-105 transition"
        >
          官方 LINE 預約
        </a>
      </section>
    </main>
  )
}
