import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'DriveMate道路駕駛課程｜運動駕駛、賽道課程',
  description: 'DriveMate道路駕駛團隊具有豐富的駕駛經驗和優秀的教學能力還具備耐心和親切的態度。',

  openGraph: {
    title: 'DriveMate道路駕駛課程｜運動駕駛、賽道課程',
    description: 'DriveMate道路駕駛團隊具有豐富的駕駛經驗和優秀的教學能力還具備耐心和親切的態度。',
    url: 'https://drivemate-tw.com',
    siteName: 'DriveMate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate道路駕駛課程｜運動駕駛、賽道課程',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate道路駕駛課程｜運動駕駛、賽道課程',
    description: 'DriveMate道路駕駛團隊具有豐富的駕駛經驗和優秀的教學能力還具備耐心和親切的態度。',
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
        {/* Google tag (GA4 + Google Ads 共用) */}
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
