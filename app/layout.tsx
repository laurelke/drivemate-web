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

  icons: [
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],

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
        {/* ================= Organization / LocalBusiness Schema ================= */}
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
          logo: 'https://drivemate-tw.com/favicon.png',
          sameAs: [
            'https://www.facebook.com/',
            'https://www.instagram.com/',
            'https://lin.ee/J22IVRg',
          ],
        },
        {
          '@type': ['LocalBusiness', 'EducationalOrganization'],
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
      ],
    }),
  }}
/>


        <Header />

        <main className="pt-16 pb-16">
          {children}
        </main>

        <MobileCTA />
      </body>
    </html>
  )
}
