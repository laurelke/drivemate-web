import type { Metadata } from 'next'
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
      {/* ⭐ Course Schema（只屬於這一頁） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Course',
            '@id': 'https://drivemate-tw.com/courses/road-driving#course',
            name: '道路駕駛實戰課程',
            description:
              '專為新手與一般駕駛設計的一對一道路駕駛實戰課程，強化實際道路操作、安全判斷與駕駛自信。',
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
{/* ================= FAQ Schema ================= */}
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
          "name": "已經有駕照但很久沒開車，適合這門課程嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "非常適合。許多學員都是因為長時間未駕駛而缺乏信心，本課程會針對你的駕駛習慣進行評估與矯正，幫助你重新適應真實路況。"
          }
        },
        {
          "@type": "Question",
          "name": "道路駕駛訓練會在哪些路況進行？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "訓練會依學員需求安排，包含市區道路、路口判斷、變換車道、停車技巧及實際生活常見路線，讓學習內容貼近日常駕駛情境。"
          }
        },
        {
          "@type": "Question",
          "name": "課程是一對一教學嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "是的，所有道路駕駛實戰課程皆為一對一教學，由專業教練全程陪同，確保學習安全與成效。"
          }
        },
        {
          "@type": "Question",
          "name": "完成課程後真的可以自己上路嗎？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "課程設計以「能獨立上路」為目標，透過系統化訓練與實際路況演練，幫助學員建立穩定駕駛能力與心理信心。實際成果會依個人學習狀況而有所不同。"
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