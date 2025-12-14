import './globals.css'
import Header from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DriveMate｜道路駕駛課程',
  description: '從新手到進階操駕，陪你安全、自信地上路',
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
      <body className="bg-white text-gray-900">
        <Header />
        {/* Header 是 fixed，高度 h-16 */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
