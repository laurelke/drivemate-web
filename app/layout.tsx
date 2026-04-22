import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://drivemate-tw.com'),

  title: {
    default: 'DriveMate駕駛課程｜道路駕駛訓練・新手上路教學・教練培訓',
    template: '%s｜DriveMate駕駛課程',
  },

  description:
    'DriveMate駕駛課程提供道路駕駛課程、新手上路教學、運動駕駛與教練培訓課程，以一對一實戰教學協助學員建立安全、自信且穩定的駕駛能力。',

  alternates: {
    canonical: 'https://drivemate-tw.com/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },

  openGraph: {
    type: 'website',
    siteName: 'DriveMate駕駛訓練中心',
    locale: 'zh_TW',
    url: 'https://drivemate-tw.com/',
    title: 'DriveMate道路駕駛課程｜道路駕駛訓練・新手上路教學・教練培訓',
    description:
      'DriveMate提供道路駕駛課程、新手上路教學、運動駕駛與教練培訓課程。',
    images: [
      {
        url: '/images/drivemate-logo.png',
        width: 1200,
        height: 630,
        alt: 'DriveMate駕駛訓練中心',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate道路駕駛課程｜道路駕駛訓練・新手上路教學・教練培訓',
    description:
      'DriveMate提供道路駕駛課程、新手上路教學、運動駕駛與教練培訓課程。',
    images: ['/images/drivemate-logo.png'],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://drivemate-tw.com/#website',
    name: 'DriveMate駕駛訓練中心',
    url: 'https://drivemate-tw.com/',
    inLanguage: 'zh-TW',
    description:
      'DriveMate提供道路駕駛課程、運動駕駛、賽道駕駛與教練培訓課程。',
    publisher: {
      '@id': 'https://drivemate-tw.com/#organization',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://drivemate-tw.com/#organization',
    name: 'DriveMate駕駛訓練中心',
    alternateName: 'DriveMate駕駛訓練中心',
    url: 'https://drivemate-tw.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://drivemate-tw.com/images/drivemate-logo.png',
    },
    sameAs: [
      'https://www.instagram.com/drivemate.tw',
      'https://lin.ee/J22IVRg',
      'https://www.threads.net/@drivemate.tw',
    ],
    description:
      'DriveMate提供道路駕駛課程、運動駕駛、賽道駕駛與教練培訓課程。',
    knowsAbout: [
      '道路駕駛課程',
      '道路駕駛訓練',
      '新手上路訓練',
      '駕駛技巧教學',
      '停車技巧教學',
      '市區道路駕駛訓練',
      '一對一駕駛教學',
      '教練培訓課程',
      '運動駕駛課程',
      '賽道體驗課程',
    ],
  }

  const educationalOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://drivemate-tw.com/#education',
    name: 'DriveMate駕駛訓練中心',
    alternateName: 'DriveMate駕駛訓練中心',
    url: 'https://drivemate-tw.com/',
    parentOrganization: {
      '@id': 'https://drivemate-tw.com/#organization',
    },
    description:
      'DriveMate是提供道路駕駛課程、新手上路教學、駕駛技巧訓練、運動駕駛與教練培訓的教育型機構，以一對一實戰課程協助學員建立穩定上路能力。',
    slogan: '建立安全、自信且穩定的駕駛能力',
    areaServed: {
      '@type': 'Country',
      name: 'TW',
    },
    availableLanguage: ['zh-TW'],
    knowsAbout: [
      '道路駕駛教學',
      '道路駕駛課程',
      '新手上路教學',
      '駕照後上路練習',
      '停車技巧訓練',
      '市區道路駕駛訓練',
      '駕駛能力評估',
      '教練培訓',
      '運動駕駛',
    ],
   keywords: [
      '道路駕駛課程',
      '道路駕駛訓練',
      '新手上路教學',
      '一對一駕駛教學',
      '道路駕駛推薦',
      '道路駕駛費用',
    ],
    subjectOf: [
      {
        '@type': 'WebPage',
        '@id': 'https://drivemate-tw.com/courses/road-driving',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://drivemate-tw.com/road-driving-course',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://drivemate-tw.com/afraid-of-driving',
      },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://drivemate-tw.com/#localbusiness',
    name: 'DriveMate駕駛訓練中心',
    alternateName: 'DriveMate駕駛訓練中心',
    image: 'https://drivemate-tw.com/images/drivemate-logo.png',
    url: 'https://drivemate-tw.com/',
    parentOrganization: {
      '@id': 'https://drivemate-tw.com/#organization',
    },
    description:
      'DriveMate提供道路駕駛課程、新手上路教學、運動駕駛與教練培訓課程。',
    areaServed: {
      '@type': 'Country',
      name: 'TW',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: '台中市',
      addressCountry: 'TW',
    },
    priceRange: '$$$',
    sameAs: [
      'https://www.instagram.com/drivemate.tw',
      'https://lin.ee/J22IVRg',
      'https://www.threads.net/@drivemate.tw',
    ],
    knowsAbout: [
      '道路駕駛課程',
      '新手上路訓練',
      '一對一駕駛教學',
      '駕駛技巧訓練',
    ],
  }

  return (
    <html lang="zh-Hant">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QQBBR4WZEW"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-QQBBR4WZEW', {
              send_page_view: true
            });

            gtag('config', 'AW-17613789230');

            window.trackCTAConversion = function () {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-17613789230/GT-NMCJ7CM8'
                });
                console.log('[Ads Conversion] CTA fired');
              } else {
                console.warn('gtag not loaded');
              }
            };

            document.addEventListener('click', function (e) {
              const el = e.target.closest('a, button');
              if (!el) return;

              const label =
                el.innerText?.trim().slice(0, 50) ||
                el.getAttribute('href') ||
                'unknown';

              window.gtag('event', 'site_click', {
                event_category: 'engagement',
                event_label: label,
                page_location: window.location.href
              });
            });
          `}
        </Script>
      </head>

      <body className="bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrganizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Header />
        <main className="pt-16 pb-16">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}