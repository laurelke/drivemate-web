import type { Metadata } from 'next'
import HomePage from '../components/HomeClient'

export const metadata: Metadata = {
  title: 'DriveMate 駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
  description:
    'DriveMate 駕駛訓練中心提供專業道路駕駛、運動駕駛與賽道課程，從新手上路到教練培訓，一對一實戰教學，讓你安全、自信、真正掌控每一次駕駛。',
  alternates: {
    canonical: 'https://drivemate-tw.com/',
  },
  openGraph: {
    title: 'DriveMate 駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
    url: 'https://drivemate-tw.com/',
    siteName: 'DriveMate 駕駛訓練中心',
    type: 'website',
  },
}

export default function Page() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '《DriveMate 駕駛訓練中心》是一般駕訓班嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '不是。DriveMate 駕駛訓練中心》專注於考照後的實際駕駛訓練，協助已經會開車、但在道路、操控或心理層面仍感到不安的駕駛，建立真正能獨立上路的能力。',
        },
      },
      {
        '@type': 'Question',
        name: '我已經有駕照，還有需要上駕駛訓練嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '許多駕駛在考照後仍缺乏真實路況與正確引導的經驗，而DriveMate 駕駛訓練中心》的課程正是為了解決有駕照卻不敢開或開得不穩定的狀況。',
        },
      },
      {
        '@type': 'Question',
        name: '完全沒有經驗或很久沒開車，也適合嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '適合。訓練會從實際程度開始評估，不論是剛拿到駕照、長時間未駕駛，或對特定路況感到焦慮，都能依個人狀況調整學習節奏。',
        },
      },
      {
        '@type': 'Question',
        name: '和自己多開幾次相比，有什麼不同？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '自行練習容易重複錯誤卻不自知，透過專業教練即時觀察與引導，能更有效修正操作並理解車輛反應。',
        },
      },
      {
        '@type': 'Question',
        name: '課程是一對一教學嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '是的，所有訓練皆為一對一教學，由教練全程陪同，確保學習安全並提升實際成效。',
        },
      },
      {
        '@type': 'Question',
        name: '完成訓練後，真的能自己上路嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '課程以能獨立、安全上路為目標，透過系統化訓練與實際情境演練，協助建立穩定的駕駛能力與信心。',
        },
      },
    ],
  }
  const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://drivemate-tw.com/#organization',
  name: 'DriveMate 駕駛訓練中心',
  url: 'https://drivemate-tw.com/',
  logo: 'https://drivemate-tw.com/images/drivemate-logo.JPG',
  description:
    'DriveMate 駕駛訓練中心專注於考照後的實際駕駛訓練，提供道路駕駛、運動駕駛、賽道課程與教練培訓，一對一實戰教學，協助駕駛建立安全、自信與穩定的駕駛能力。',
  sameAs: [
    'https://www.instagram.com/drivemate.tw',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'TW',
  },
  availableLanguage: ['zh-TW'],
  knowsAbout: [
    '道路駕駛訓練',
    '運動駕駛',
    '賽道駕駛',
    '駕駛技巧訓練',
    '駕駛教練培訓',
  ],
}

  return (
    <>
    {/* ===== Organization Schema（品牌權威） ===== */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(organizationSchema),
    }}
  />
      {/* ================= FAQ Schema（首頁專用） ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ================= 主首頁內容 ================= */}
      <HomePage />
    </>
  )
}
