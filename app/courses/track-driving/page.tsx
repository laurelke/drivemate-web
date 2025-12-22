import TrackDrivingClient from './TrackDrivingClient'

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
                name: '沒有賽道經驗，也可以參加賽道駕駛訓練嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '可以。本課程不以刷圈速為目標，而是專注於車輛操控與駕駛觀念建立，即使沒有賽道經驗也能安全學習。',
                },
              },
              {
                '@type': 'Question',
                name: '賽道駕駛訓練是不是就是開很快？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '不是。課程重點在於理解車輛動態、煞車與轉向協調，速度只是結果，而非目標。',
                },
              },
              {
                '@type': 'Question',
                name: '一般道路駕駛者學賽道駕駛有幫助嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '非常有幫助。賽道能安全放大駕駛錯誤，讓你更理解車輛極限，提升日常行駛的穩定性。',
                },
              },
              {
                '@type': 'Question',
                name: '課程是一對一教學嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '是的，DriveMate 賽道駕駛訓練採一對一教學，由專業教練全程陪同。',
                },
              },
              {
                '@type': 'Question',
                name: '這門課程適合想刷圈速的人嗎？',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '不適合。本課程專注於操控能力與觀念建立，而非競速或刷圈。',
                },
              },
            ],
          }),
        }}
      />

      <TrackDrivingClient />
    </>
  )
}