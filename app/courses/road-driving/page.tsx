import type { Metadata } from 'next'
import RoadDrivingClient from './RoadDrivingClient'

export const metadata: Metadata = {
  title: '2026 道路駕駛課程推薦｜全台一對一到府教學',
  description:
    'DriveMate道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，透過一對一教練陪同與真實路況訓練，幫助學員建立安全、穩定的駕駛能力。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/road-driving',
  },
  openGraph: {
    title: '2026道路駕駛課程推薦｜全台一對一到府教學',
    description:
      'DriveMate 道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，透過一對一教練陪同與真實路況訓練，幫助學員建立安全、穩定的駕駛能力。',
    url: 'https://drivemate-tw.com/courses/road-driving',
    siteName: 'DriveMate道路駕駛課程',
    locale: 'zh_TW',
    type: 'website',
    images: [
      {
        url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
        width: 1200,
        height: 630,
        alt: '道路駕駛課程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026道路駕駛課程推薦｜全台一對一到府教學',
    description:
      'DriveMate道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，透過一對一教練陪同與真實路況訓練，幫助學員建立安全、穩定的駕駛能力。',
    images: ['https://drivemate-tw.com/images/courses/road-driving-hero.jpg'],
  },
}

export default function Page() {
  const pageUrl = 'https://drivemate-tw.com/courses/road-driving'

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '2026道路駕駛課程推薦｜全台一對一到府教學',
    description:
      'DriveMate道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，透過一對一教練陪同與真實路況訓練，幫助學員建立安全、穩定的駕駛能力。',
    inLanguage: 'zh-TW',
    isPartOf: {
      '@id': 'https://drivemate-tw.com/#website',
    },
    about: {
      '@type': 'Thing',
      name: '道路駕駛課程',
    },
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
    },
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: '道路駕駛課程',
    description:
      'DriveMate道路駕駛課程專為剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者設計，透過一對一教練陪同與真實路況訓練，幫助學員建立安全、穩定的駕駛能力。',
    provider: {
      '@type': 'EducationalOrganization',
      '@id': 'https://drivemate-tw.com/#education',
      name: 'DriveMate道路駕駛課程',
      url: 'https://drivemate-tw.com/',
    },
    keywords: [
      '道路駕駛課程',
      '道路駕駛',
      '道路駕駛課',
      '道路駕駛教學',
      '台中道路駕駛推薦',
      '台北道路駕駛推薦',
      '新北道路駕駛推薦',
      '桃園道路駕駛推薦',
      '新竹道路駕駛推薦',
      '彰化道路駕駛推薦',
      '雲林道路駕駛推薦',
      '台南道路駕駛推薦',
      '高雄道路駕駛推薦',
      '道路駕駛到府服務',
      '不敢開車上路',
      '有駕照不敢開',
      '道路駕駛課程',
      '道路駕駛訓練',
      '新手上路訓練',
      '一對一駕駛教學',
      '停車技巧',
      '市區道路駕駛',
      '高快速道路課程',
      '道路駕駛費用',
    ],
    educationalCredentialAwarded: '道路駕駛訓練課程',
    teaches: [
      '基礎車輛控制與視線建立',
      '市區道路與路口判斷',
      '停車與倒車技巧',
      '客製化路線實戰',
      '道路駕駛判斷與駕駛習慣建立',
    ],
    coursePrerequisites: '適合剛拿駕照、久未開車、缺乏道路駕駛經驗與不敢獨立上路者。',
    hasCourseInstance: {
  '@type': 'CourseInstance',
  courseMode: 'OnSite',

  location: {
    '@type': 'Place',
    name: '台中市',
    address: {
      '@type': 'PostalAddress',
      addressRegion: '台中市',
      addressCountry: 'TW',
    },
  },

  areaServed: {
    '@type': 'Country',
    name: 'TW',
  },

  instructor: {
    '@type': 'Organization',
    name: 'DriveMate教練團隊',
  },
},
    offers: [
      {
        '@type': 'Offer',
        name: '小資專案',
        description:
          '適合剛拿到駕照、想先建立基本道路駕駛能力的新手。',
        price: '3000',
        priceCurrency: 'TWD',
        availability: 'https://schema.org/InStock',
        url: pageUrl,
      },
      {
        '@type': 'Offer',
        name: '駕駛能力評估＋關鍵矯正',
        description:
          '適合已有駕照、會開但不穩，想先找出核心問題的人。',
        price: '4990',
        priceCurrency: 'TWD',
        availability: 'https://schema.org/InStock',
        url: pageUrl,
      },
      {
        '@type': 'Offer',
        name: '14 天獨立上路成果計畫',
        description:
          '適合想在短時間內建立獨立、安全上路能力的學員。',
        price: '16990',
        priceCurrency: 'TWD',
        availability: 'https://schema.org/InStock',
        url: pageUrl,
      },
      {
        '@type': 'Offer',
        name: '21 天通勤駕駛穩定方案',
        description:
          '適合需要面對日常通勤、尖峰車流與複雜路況的人。',
        price: '35000',
        priceCurrency: 'TWD',
        availability: 'https://schema.org/InStock',
        url: pageUrl,
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
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
        name: '道路駕駛課程',
        item: pageUrl,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '道路駕駛課程是什麼？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '道路駕駛課程是在真實道路環境中，由教練一對一陪同進行的實戰駕駛訓練。和只在場地內練習不同，重點是幫助學員建立真正能上路的判斷、操作與信心。',
        },
      },
      {
        '@type': 'Question',
        name: '沒有駕駛經驗也可以報名嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以。若你剛拿到駕照、缺乏實際道路經驗，教練會依你的程度安排內容，從基礎操作、道路判斷到實際上路循序建立能力。',
        },
      },
      {
        '@type': 'Question',
        name: '已經有駕照但很久沒開車，適合這門課嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '非常適合。很多學員的問題不是不會開，而是久未駕駛後缺乏信心。本課程會協助你重新建立對車輛、路況與自身判斷的掌握。',
        },
      },
      {
        '@type': 'Question',
        name: '道路駕駛課程費用怎麼算？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '費用會依訓練堂數而不同。您可以先從單堂或評估方案開始確保本中心的教練教學風格符合您的期待，再依狀況升級為成果導向課程。',
        },
      },
      {
        '@type': 'Question',
        name: '課程會練到哪些內容？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '常見內容包含基礎車輛控制、市區道路、路口判斷、車道變換、停車技巧，以及實際生活中各類型路線。',
        },
      },
      {
        '@type': 'Question',
        name: '一定要自備車輛嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '不一定。小資方案可直接使用教練車，客製化課程需另外加購教練車，若想熟悉自己的車輛，也可使用自家車上課。',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RoadDrivingClient />
    </>
  )
}