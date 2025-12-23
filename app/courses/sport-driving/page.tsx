import type { Metadata } from 'next'
import SportDrivingClient from './SportDrivingClient'

export const metadata: Metadata = {
  title: '運動駕駛訓練課程｜進階操控與駕駛技巧提升',
  description:
    'DriveMate 運動駕駛訓練課程，適合已有基礎的駕駛者，透過系統化操控訓練，提升油門、煞車與轉向協調，建立穩定且可重複的駕駛技巧，而非單純追求速度。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/sport-driving',
  },
}

export default function Page() {
  return (
    <>
      {/* ================= Course Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            '@id': 'https://drivemate-tw.com/courses/sport-driving#course',
            name: '運動駕駛操控訓練課程',
            description:
              '專為希望提升操控技巧與車輛動態理解的駕駛設計，透過系統化訓練強化油門、煞車、轉向與操控協調。',
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
                name: '運動駕駛課程',
                item: 'https://drivemate-tw.com/courses/sport-driving',
              },
            ],
          }),
        }}
      />

      {/* ================= FAQ Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '運動駕駛課程適合一般駕駛嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    '適合。本課程並非競速課程，而是針對一般駕駛在日常道路中，強化操控穩定性、煞車控制與轉向判斷，提升整體行車安全。',
                },
              },
              {
                '@type': 'Question',
                name: '需要有進階或賽車經驗才能參加嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    '不需要。課程會依學員程度調整訓練內容，從正確操控姿勢與視線運用開始，循序建立駕駛技巧。',
                },
              },
              {
                '@type': 'Question',
                name: '運動駕駛課程與道路駕駛課程有什麼不同？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    '運動駕駛課程更著重於操控細節與駕駛技術提升，適合希望精進操控穩定性與技術邏輯的學員。',
                },
              },
            ],
          }),
        }}
      />

      <SportDrivingClient />
    </>
  )
}