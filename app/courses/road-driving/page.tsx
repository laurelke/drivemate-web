import type { Metadata } from 'next'
import RoadDrivingClient from './RoadDrivingClient'

export const metadata: Metadata = {
  title: '道路駕駛課程是什麼？費用、內容、適合對象完整解析',
  description:
    '想找道路駕駛課程？本頁整理道路駕駛課程內容、費用、適合對象與常見問題，並提供一對一實戰訓練方案，協助新手與久未開車者建立安全上路信心。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/road-driving',
  },
  openGraph: {
    title: '道路駕駛課程是什麼？費用、內容、適合對象完整解析',
    description:
      '整理道路駕駛課程內容、費用、適合對象與常見問題，協助新手與不敢上路者建立真正的駕駛能力。',
    url: 'https://drivemate-tw.com/courses/road-driving',
    siteName: 'DriveMate 駕駛訓練中心',
    locale: 'zh_TW',
    type: 'article',
    images: [
      {
        url: 'https://drivemate-tw.com/images/drivemate-road-driving-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate 道路駕駛課程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '道路駕駛課程是什麼？費用、內容、適合對象完整解析',
    description:
      '整理道路駕駛課程內容、費用、適合對象與常見問題，協助新手與不敢上路者建立真正的駕駛能力。',
    images: ['https://drivemate-tw.com/images/drivemate-road-driving-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function Page() {
  const pageUrl = 'https://drivemate-tw.com/courses/road-driving'

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '道路駕駛課程是什麼？費用、內容、適合對象完整解析',
    description:
      '整理道路駕駛課程內容、費用、適合對象與常見問題，並提供一對一實戰訓練方案。',
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
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: '道路駕駛實戰課程',
    description:
      '專為新手、久未開車與缺乏道路駕駛經驗者設計的一對一實戰訓練，內容涵蓋市區道路、停車、車道判斷與實際路況應對。',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '道路駕駛訓練方案',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '小資專案｜奠定基礎培訓',
          description:
            '適合剛起步的新手，由教練車一對一陪同進行實際道路練習。',
          price: '3000',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
        },
        {
          '@type': 'Offer',
          name: '14 天獨立上路成果計畫',
          description:
            '系統化道路駕駛訓練，協助學員在 14 天內建立安全獨立上路能力。',
          price: '16990',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
        },
        {
          '@type': 'Offer',
          name: '21 天通勤駕駛穩定方案',
          description:
            '針對日常通勤與高流量路況，建立穩定駕駛習慣與路況應對能力。',
          price: '35000',
          priceCurrency: 'TWD',
          availability: 'https://schema.org/InStock',
          url: pageUrl,
        },
      ],
    },
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
          text: '道路駕駛課程是在真實道路環境中，由教練陪同進行的一對一駕駛訓練，重點在建立實際上路能力與駕駛信心。',
        },
      },
      {
        '@type': 'Question',
        name: '沒有駕駛經驗也可以報名嗎？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '可以，課程可依學員程度安排，從基礎操作、道路判斷到實際上路循序建立能力。',
        },
      },
      {
        '@type': 'Question',
        name: '道路駕駛課程適合哪些人？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '適合剛拿駕照、不敢上路、久未開車、想加強通勤或停車能力的學員。',
        },
      },
      {
        '@type': 'Question',
        name: '道路駕駛課程費用多少？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '本頁提供不同訓練方案，費用依訓練時數、目標與客製化內容而異。',
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