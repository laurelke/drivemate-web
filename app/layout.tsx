import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'DriveMate｜道路駕駛課程',
  description: '實際道路教學，陪你安全、自信地上路',

  // ✅ 行動裝置設定（保留原本）
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },

  // ✅ Open Graph（LINE / FB / Messenger 預覽用）
  openGraph: {
    title: 'DriveMate｜道路駕駛課程',
    description: '實際道路教學，陪你安全、自信地上路',
    url: 'https://www.drivemate-tw.com',
    siteName: 'DriveMate',
    images: [
      {
        url: 'https://www.drivemate-tw.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate 道路駕駛課程',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },

  // ✅ Twitter（雖然 LINE 不用，但順手補齊）
  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate｜道路駕駛課程',
    description: '實際道路教學，陪你安全、自信地上路',
    images: ['https://www.drivemate-tw.com/og-image.jpg'],
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
        {/* 固定 Header */}
        <Header />

        {/* 主內容
            pt-16：避開 Header
            pb-16：避開手機底部 CTA */}
        <main className="pt-16 pb-16">
          {children}
        </main>

        {/* 手機底部固定 CTA */}
        <MobileCTA />
      </body>
    </html>
  )
}
