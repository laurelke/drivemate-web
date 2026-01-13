import RoadDrivingClient from './RoadDrivingClient'

export const metadata = {
  title: '道路駕駛實戰課程｜新手、缺乏道路駕駛經驗，安心上路訓練',
  description:
    'DriveMate 道路駕駛實戰課程，專為新手與不敢上路的駕駛設計，一對一教練陪同，從實際路況評估、操作矯正到穩定上路，協助你建立真正的駕駛信心。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/road-driving',
  },
}
export default function Page() {
  return (
    <>
      {/* ⭐ Course + Offer Schema（道路駕駛＋學習駕照陪練） */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": "https://drivemate-tw.com/courses/road-driving#course",
      "name": "道路駕駛實戰課程",
      "description": "專為新手、學習駕照與缺乏實際道路經驗的駕駛設計，一對一教練陪同，從評估、矯正到穩定上路。",
      "provider": {
        "@type": "Organization",
        "name": "DriveMate 駕駛訓練中心",
        "url": "https://drivemate-tw.com/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "TW"
      },
      "availableLanguage": ["zh-TW"],
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "OnSite"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "道路駕駛訓練方案",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "小資專案｜學習駕照陪練",
            "description": "適合持學習駕照或剛起步的新手，由教練車一對一陪同進行實際道路練習。",
            "price": "3000",
            "priceCurrency": "TWD",
            "availability": "https://schema.org/InStock",
            "url": "https://drivemate-tw.com/courses/road-driving"
          },
          {
            "@type": "Offer",
            "name": "14 天獨立上路成果計畫",
            "description": "系統化道路駕駛訓練，協助學員在 14 天內建立能獨立、安全上路的駕駛能力。",
            "price": "16990",
            "priceCurrency": "TWD",
            "availability": "https://schema.org/InStock",
            "url": "https://drivemate-tw.com/courses/road-driving"
          },
          {
            "@type": "Offer",
            "name": "21 天通勤駕駛穩定方案",
            "description": "針對日常通勤與高流量路況，建立長期穩定的駕駛習慣與應對能力。",
            "price": "35000",
            "priceCurrency": "TWD",
            "availability": "https://schema.org/InStock",
            "url": "https://drivemate-tw.com/courses/road-driving"
          }
        ]
      }
    })
  }}
/>
{/* ================= Breadcrumb Schema ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首頁",
          "item": "https://drivemate-tw.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "課程介紹",
          "item": "https://drivemate-tw.com/courses"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "道路駕駛課程",
          "item": "https://drivemate-tw.com/courses/road-driving"
        }
      ]
    })
  }}
/>
{/* ================= FAQ Schema（Road Driving + 學習駕照陪練） ================= */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "沒有駕駛經驗也可以報名道路駕駛實戰課程嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可以。本課程專為新手與缺乏實際道路經驗的駕駛設計，教練會依照你的程度，從基礎操作到實際上路，循序建立駕駛信心。"
          }
        },
        {
          "@type": "Question",
          "name": "持學習駕照可以參加道路駕駛陪練嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "可以。DriveMate 提供學習駕照陪練課程，由教練車一對一陪同，搭配指定路線在合法、安全的前提下進行實際道路練習，適合準備考照或剛考取駕照前的學員。"
          }
        },
        {
          "@type": "Question",
          "name": "學習駕照陪練需要自備車輛嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "不需要。學習駕照陪練課程使用教練車進行，學員無需自備車輛，即可進行實際上路練習。"
          }
        },
        {
          "@type": "Question",
          "name": "已經有駕照但很久沒開車，適合這門課程嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "非常適合。許多學員因長時間未駕駛而缺乏信心，本課程會針對你的駕駛習慣與實際狀況進行評估與矯正，幫助你重新適應真實路況。"
          }
        },
        {
          "@type": "Question",
          "name": "道路駕駛訓練會在哪些路況進行？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "客製化訓練會依學員程度與需求安排，包含市區道路、路口判斷、變換車道、停車技巧及實際生活常見路線。"
          }
        },
        {
          "@type": "Question",
          "name": "課程是一對一教學嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "是的，所有道路駕駛與學習駕照陪練課程皆為一對一教學，由專業教練全程陪同，確保學習安全與實際成效。"
          }
        },
        {
          "@type": "Question",
          "name": "完成課程後真的可以自己上路嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "課程以能安全、獨立上路為目標，透過系統化訓練與實際路況演練，協助學員建立穩定的駕駛能力與心理信心。實際成果會依個人狀況而有所不同。"
          }
        }
      ]
    })
  }}
/>
      <RoadDrivingClient />
    </>
  )
}