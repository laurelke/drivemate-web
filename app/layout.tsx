import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import MobileCTA from '@/components/MobileCTA'

export const metadata: Metadata = {
  title: 'DriveMate｜道路駕駛課程',
  description: '實際道路教學，陪你安全、自信地上路',
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
