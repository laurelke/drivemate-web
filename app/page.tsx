import type { Metadata } from 'next'
import HomePage from '../components/HomeClient'

const SITE_URL = 'https://drivemate-tw.com/'
const BRAND_NAME = 'DriveMate 駕駛訓練中心'
const BRAND_ALT_NAMES = ['DriveMate', 'DriveMate 駕駛訓練中心']

export const metadata: Metadata = {
  title: `${BRAND_NAME}｜道路駕駛・運動駕駛・賽道課程・教練培訓`,
  description:
    'DriveMate 駕駛訓練中心提供專業道路駕駛、運動駕駛與賽道課程，從新手上路到教練培訓，一對一實戰教學，讓你安全、自信、真正掌控每一次駕駛。',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${BRAND_NAME}｜道路駕駛・運動駕駛・賽道課程・教練培訓`,
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
    url: SITE_URL,
    siteName: BRAND_NAME,
    type: 'website',
  },
}

export default function Page() {
  // ===== WebSite Schema（站點名稱最關鍵）=====
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    alternateName: BRAND_ALT_NAMES,
    publisher: { '@id': `${SITE_URL}#organization` },
    inLanguage: 'zh-TW',
  }

  // ===== Organization Schema（品牌實體）=====
  // 若你有實體地址/電話/營業時間，建議改成 LocalBusiness 並補齊欄位（會更強）
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: BRAND_NAME,
    alternateName: BRAND_ALT_NAMES,
    url: SITE_URL,
    logo: `${SITE_URL}images/drivemate-logo.png`,
    description:
      'DriveMate 駕駛訓練中心專注於考照後的實際駕駛訓練，提供道路駕駛、運動駕駛、賽道課程與教練培訓，一對一實戰教學，協助駕駛建立安全、自信與穩定的駕駛能力。',
    sameAs: [
      'https://www.instagram.com/drivemate.tw',
      'https://lin.ee/J22IVRg',
      'https://www.threads.net/@drivemate.tw'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Taiwan',
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

  // ===== FAQ Schema（首頁專用）=====
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
            '不是。DriveMate 駕駛訓練中心專注於考照後的實際駕駛訓練，協助已經會開車、但在道路、操控或心理層面仍感到不安的駕駛，建立真正能獨立上路的能力。',
        },
      },
      {
        '@type': 'Question',
        name: '我已經有駕照，還有需要上駕駛訓練嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '許多駕駛在考照後仍缺乏真實路況與正確引導的經驗，而 DriveMate 駕駛訓練中心的課程正是為了解決有駕照卻不敢開、或開得不穩定的狀況。',
        },
      },
      {
        '@type': 'Question',
        name: '完全沒有經驗或很久沒開車，也適合嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '適合。訓練會先從實際程度開始評估，不論是剛拿到駕照、長時間未駕駛，或對特定路況感到焦慮，都能依個人狀況調整學習節奏。',
        },
      },
      {
        '@type': 'Question',
        name: '和自己多開幾次相比，有什麼不同？',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            '自行練習容易重複錯誤卻不自知；透過專業教練即時觀察與引導，能更有效修正操作並理解車輛反應。',
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

  // 統一輸出（避免 script 順序/重複）
  const structuredData = [organizationSchema, websiteSchema, faqSchema]

  return (
    <>
      {/* ===== 結構化資料（Organization + WebSite + FAQ）===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* ===== 主首頁內容 ===== */}
      <HomePage />
    </>
  )
}
