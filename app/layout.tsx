import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: {
    default: 'DriveMate駕駛訓練中心｜道路駕駛、運動駕駛、賽道課程、教練培訓',
    template: '%s｜DriveMate 駕駛訓練中心',
  },
  description:
    'DriveMate 駕駛訓練中心，提供專業道路駕駛、運動駕駛、賽道體驗與教練培訓課程，打造安全、自信且具實戰力的駕駛能力。',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    siteName: 'DriveMate',
    locale: 'zh_TW',
    type: 'website',
    url: 'https://drivemate-tw.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate 駕駛訓練中心',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* ====== 強制宣告 favicon（給 Google Search / Ads Bot）====== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ================= Google tag (GA4 + Google Ads 共用) ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
            gtag('config', 'AW-17613789230');

            window.trackCTAConversion = function () {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17613789230/CTA_CLICK'
                });
              }
            };
          `}
        </Script>
      </head>

      <body className="bg-white text-neutral-900">
        {/* ================= Organization / EducationalOrganization / LocalBusiness / Course ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://drivemate-tw.com/#organization',
                  name: 'DriveMate 駕駛訓練中心',
                  url: 'https://drivemate-tw.com/',
                  logo: 'https://drivemate-tw.com/drivemate-logo.JPG',
                  sameAs: [
                    'https://www.facebook.com/',
                    'https://www.instagram.com/',
                    'https://lin.ee/J22IVRg',
                  ],
                },
                {
                  '@type': 'EducationalOrganization',
                  '@id': 'https://drivemate-tw.com/#education',
                  name: 'DriveMate 駕駛訓練中心',
                  url: 'https://drivemate-tw.com/',
                  description:
                    'DriveMate 是專業駕駛訓練與教練培訓機構，提供道路駕駛、運動駕駛、賽道體驗與教練培訓課程。',
                  parentOrganization: {
                    '@id': 'https://drivemate-tw.com/#organization',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://drivemate-tw.com/#localbusiness',
                  name: 'DriveMate 駕駛訓練中心',
                  url: 'https://drivemate-tw.com/',
                  image: 'https://drivemate-tw.com/og-image.jpg',
                  priceRange: '$$$',
                  areaServed: {
                    '@type': 'Country',
                    name: 'TW',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: '台中市',
                    addressCountry: {
                      '@type': 'Country',
                      name: 'TW',
                    },
                  },
                  parentOrganization: {
                    '@id': 'https://drivemate-tw.com/#organization',
                  },
                },

                {
                  '@type': 'Course',
                  '@id': 'https://drivemate-tw.com/#course-road-driving',
                  name: '道路駕駛實戰訓練課程',
                  description:
                    '專為一般駕駛與新手設計的一對一道路駕駛實戰課程，涵蓋實際道路操作、安全觀念、情境判斷與駕駛自信建立。',
                  provider: {
                    '@id': 'https://drivemate-tw.com/#organization',
                  },
                },
                {
                  '@type': 'Course',
                  '@id': 'https://drivemate-tw.com/#course-track-driving',
                  name: '賽道駕駛體驗與進階操控課程',
                  description:
                    '針對已有駕駛基礎者設計的賽道駕駛體驗與進階操控課程。',
                  provider: {
                    '@id': 'https://drivemate-tw.com/#organization',
                  },
                },
              ],
            }),
          }}
        />

        <Header />
        <main className="pt-16 pb-16">{children}</main>
        <MobileCTA />
      </body>
    </html>
  )
}
