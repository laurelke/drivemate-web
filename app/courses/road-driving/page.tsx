import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '道路駕駛實戰課程｜新手上路陪駕訓練｜DriveMate',
  description:
    'DriveMate 道路駕駛實戰課程，專為剛拿到駕照、不敢上路或缺乏實際道路經驗者設計，一對一陪駕教學，建立安全、自信的駕駛能力。',
  openGraph: {
    title: '道路駕駛實戰課程｜新手上路陪駕訓練｜DriveMate',
    description:
      '專為新手上路、不敢開車者設計的一對一道路駕駛陪駕課程，實際道路操作，安心建立駕駛信心。',
    url: 'https://drivemate-tw.com/courses/road-driving',
  },
}

export default function RoadDrivingPage() {
  return (
    <>
      {/* ================= Course + FAQ Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Course',
                '@id': 'https://drivemate-tw.com/courses/road-driving#course',
                name: '道路駕駛實戰訓練課程',
                description:
                  '專為新手上路、不敢開車與缺乏實際道路經驗者設計的一對一道路駕駛陪駕課程。',
                provider: {
                  '@type': 'Organization',
                  name: 'DriveMate 駕駛訓練中心',
                  url: 'https://drivemate-tw.com',
                },
                courseMode: ['Onsite', 'Practical'],
                areaServed: {
                  '@type': 'Country',
                  name: 'TW',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://drivemate-tw.com/courses/road-driving#faq',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: '完全沒有實際道路經驗可以上道路駕駛課程嗎？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '可以。本課程專為新手上路與不敢開車者設計，教練會依學員狀況安排適合的道路環境，循序漸進陪同教學。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: '可以使用自己的車上道路駕駛課程嗎？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '可以。學員可使用自家車上課，教練會依車輛狀況調整教學方式，讓學習更貼近日常駕駛。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: '道路駕駛課程會去哪裡上課？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '課程會在實際市區道路進行，包含路口、變換車道、停車與日常常見路況，並依學員程度安排。',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: '上完課真的敢自己開車上路嗎？',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: '多數學員在課程結束後能獨立完成日常通勤與生活駕駛，教練會協助建立正確觀念與實戰信心。',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* ================= Page Content ================= */}
      <main className="bg-white">
        {/* Hero */}
        <section className="relative bg-black text-white">
          <div className="relative h-[50vh]">
            <Image
              src="/hero-1.jpg"
              alt="道路駕駛實戰訓練課程"
              fill
              priority
              className="object-cover opacity-70"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-4xl px-6">
              <h1 className="mb-4 text-3xl md:text-5xl font-bold">
                道路駕駛實戰訓練課程
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                新手上路・不敢開車・缺乏實際道路經驗  
                一對一陪駕教學，真正學會每天都用得到的駕駛能力
              </p>
            </div>
          </div>
        </section>

        {/* 課程介紹 */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 space-y-8">
            <h2 className="text-2xl font-bold">這堂課適合誰？</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>剛拿到駕照，卻不敢獨立上路的新手</li>
              <li>考到駕照多年，但幾乎沒有實際開車經驗</li>
              <li>對市區道路、停車、變換車道感到緊張</li>
              <li>希望建立安全、穩定駕駛習慣的駕駛者</li>
            </ul>

            <h2 className="text-2xl font-bold">課程內容包含</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>實際市區道路陪駕訓練</li>
              <li>路口判斷與變換車道技巧</li>
              <li>各式停車情境實戰</li>
              <li>駕駛心理調整與信心建立</li>
            </ul>

            <h2 className="text-2xl font-bold">課程特色</h2>
            <p className="text-gray-700">
              DriveMate 道路駕駛課程不是制式化教學，而是由專業教練
              依照你的實際狀況，量身規劃學習節奏，讓你從「不敢開」
              到「能安心上路」。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-20 text-center">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">
            想安心學會真正的道路駕駛嗎？
          </h2>
          <p className="mb-8 text-gray-600">
            立即聯絡 DriveMate，安排你的道路駕駛實戰課程
          </p>
          <a
            href="https://lin.ee/J22IVRg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-8 py-4 text-white font-semibold hover:scale-105 transition"
          >
            透過 LINE 預約課程
          </a>
        </section>
      </main>
    </>
  )
}
