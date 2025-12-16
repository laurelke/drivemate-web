import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'DriveMate駕駛訓練中心｜道路駕駛、運動駕駛、賽道課程、教練培訓',
  description:
    'DriveMate 駕駛訓練中心專注於道路駕駛、運動駕駛與賽道訓練，結合系統化課程與專業教練培訓，打造安全、精準且具實戰力的駕駛能力。',

  /* ================= 網站圖示（Google 紅圈來源） ================= */
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],

  /* ================= Open Graph ================= */
  openGraph: {
    title: 'DriveMate駕駛訓練中心｜道路駕駛、運動駕駛、賽道課程、教練培訓',
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
    url: 'https://drivemate-tw.com',
    siteName: 'DriveMate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate駕駛訓練中心｜道路駕駛、運動駕駛、賽道課程、教練培訓',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },

  /* ================= Twitter ================= */
  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate駕駛訓練中心｜道路駕駛、運動駕駛、賽道課程、教練培訓',
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
    images: ['/og-image.jpg'],
  },

  /* ================= Viewport ================= */
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

            // Google Analytics
            gtag('config', 'G-XXXXXXXXXX');

            // Google Ads
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
        <Header />

        <main className="pt-16 pb-16">
          {children}
        </main>

        <MobileCTA />
      </body>
    </html>
  )
}
