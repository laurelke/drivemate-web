import type { Metadata } from 'next'
import HomePage from '../components/HomeClient'

export const metadata: Metadata = {
  title: 'DriveMate駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
  description:
    'DriveMate 駕駛訓練中心提供專業道路駕駛、運動駕駛與賽道課程，從新手上路到教練培訓，一對一實戰教學，讓你安全、自信、真正掌控每一次駕駛。',
  openGraph: {
    title: 'DriveMate駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
  },
}

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'DriveMate 提供哪些駕駛課程？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'DriveMate 提供道路駕駛訓練、運動駕駛課程、賽道體驗課程，以及專業駕駛教練培訓，適合從新手到進階學員。',
        },
      },
      {
        '@type': 'Question',
        name: '完全沒有駕駛經驗也可以報名嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '可以。DriveMate 提供從零基礎開始的一對一駕駛訓練，依照學員程度客製課程內容，循序建立安全與自信。',
        },
      },
      {
        '@type': 'Question',
        name: '課程是一對一教學嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '是的，大多數課程採一對一實戰教學，確保學員能在實際道路與駕駛情境中獲得即時指導與回饋。',
        },
      },
      {
        '@type': 'Question',
        name: 'DriveMate 的課程地點在哪裡？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'DriveMate 提供全台到府教學服務。（教練培訓課程除外）',
        },
      },
      {
        '@type': 'Question',
        name: '如何報名或諮詢課程？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '可透過 DriveMate LINE 官方帳號進行諮詢與報名，將由專人協助你規劃最合適的駕駛課程。',
        },
      },
    ],
  }

  return (
    <>
      {/* ================= FAQ Schema ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= 主首頁內容 ================= */}
      <HomePage />
    </>
  )
}
