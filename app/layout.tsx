import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'
import Footer from '@/components/Footer'

/* ================= 基本 SEO 設定 ================= */
export const metadata: Metadata = {
  metadataBase: new URL('https://drivemate-tw.com'),

  title: {
    default: 'DriveMate 駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
    template: '%s｜DriveMate 駕駛訓練中心',
  },

  description:
    'DriveMate 駕駛訓練中心，提供專業道路駕駛、運動駕駛、賽道體驗與教練培訓課程，一對一實戰教學，建立安全、自信且穩定的駕駛能力。',

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },

  openGraph: {
    type: 'website',
    siteName: 'DriveMate 駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
    locale: 'zh_TW',
    url: 'https://drivemate-tw.com/',
    images: [
      {
        url: '/images/drivemate-logo.png',
        width: 1200,
        height: 630,
        alt: 'DriveMate 駕駛訓練中心',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/images/drivemate-logo.png'],
  },
}

/* ✅ viewport 要獨立 export（Next.js 官方建議） */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <head>
        {/* ====== favicon（確保 Google / Ads Bot 可抓）====== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* ================= Google tag (GA4 + Google Ads) ================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QQBBR4WZEW"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
{`
  /* ================= 基礎 gtag 初始化 ================= */
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag; // 關鍵：掛到 window，供 React / CTA 使用

  gtag('js', new Date());

  /* ===== GA4 ===== */
  gtag('config', 'G-QQBBR4WZEW', {
    send_page_view: true
  });

  /* ===== Google Ads 基礎設定（不送轉換） ===== */
  gtag('config', 'AW-17613789230');

  /* ================= ① CTA「轉換」事件（唯一 conversion） ================= */
  window.trackCTAConversion = function () {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17613789230/CTA_CLICK'
      });
      console.log('[Ads Conversion] CTA_CLICK fired');
    }
  };

  /* ================= ② 全站點擊追蹤（GA4 only，不是轉換） ================= */
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
        {/* ================= 組織 Schema（全站共用） ================= */}
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
                  logo: 'https://drivemate-tw.com/images/drivemate-logo.png',
                  sameAs: [
                    'https://www.instagram.com/drivemate.tw',
                    'https://lin.ee/J22IVRg',
                    'https://www.threads.net/@drivemate.tw'
                  ],
                },
                {
                  '@type': 'EducationalOrganization',
                  '@id': 'https://drivemate-tw.com/#education',
                  name: 'DriveMate 駕駛訓練中心',
                  url: 'https://drivemate-tw.com/',
                  description:
                    'DriveMate 提供專業道路駕駛、運動駕駛、賽道體驗與教練培訓課程。',
                  parentOrganization: {
                    '@id': 'https://drivemate-tw.com/#organization',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://drivemate-tw.com/#localbusiness',
                  name: 'DriveMate 駕駛訓練中心',
                  image: 'https://drivemate-tw.com/images/drivemate-logo.png',
                  url: 'https://drivemate-tw.com/',
                  priceRange: '$$$',
                  sameAs: [
                    'https://www.instagram.com/drivemate.tw',
                    'https://lin.ee/J22IVRg',
                    'https://www.threads.net/@drivemate.tw'
                  ],
                  areaServed: {
                    '@type': 'Country',
                    name: 'TW',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressRegion: '台中市',
                    addressCountry: 'TW',
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
        <main className="pt-16 pb-16">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  )
}
