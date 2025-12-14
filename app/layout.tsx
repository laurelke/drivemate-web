import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'DriveMate｜道路駕駛課程、運動駕駛、賽道課程',
  description: 'DriveMate道路駕駛團隊具有豐富的駕駛經驗和優秀的教學能力還具備耐心和親切的態度。',

  openGraph: {
    title: 'DriveMate｜道路駕駛課程、運動駕駛、賽道課程',
    description: 'DriveMate道路駕駛團隊具有豐富的駕駛經驗和優秀的教學能力還具備耐心和親切的態度。',
    url: 'https://drivemate-tw.com',
    siteName: 'DriveMate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate｜道路駕駛課程、運動駕駛、賽道課程',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate｜道路駕駛課程、運動駕駛、賽道課程',
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
