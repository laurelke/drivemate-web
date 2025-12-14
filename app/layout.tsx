import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'DriveMate 道路駕駛課程｜新手・進階・賽道駕駛教練',
    template: '%s｜DriveMate 道路駕駛課程',
  },
  description:
    'DriveMate 提供專業道路駕駛課程，適合新手上路、進階技巧與賽道駕駛訓練。一對一教練指導，實際道路陪駕，協助學員安全建立駕駛信心。',
  keywords: [
    '道路駕駛課程',
    '新手上路',
    '道路駕駛教練',
    '陪駕教練',
    '進階駕駛',
    '賽道駕駛',
    '汽車駕駛訓練',
    '道路陪駕',
  ],
  openGraph: {
    title: 'DriveMate 專業道路駕駛課程',
    description:
      '從新手上路到進階操駕，DriveMate 提供實際道路訓練與專業教練一對一陪駕。',
    url: 'https://drivemate-official.vercel.app',
    siteName: 'DriveMate',
    images: [
      {
        url: '/hero-driving.jpg',
        width: 1200,
        height: 630,
        alt: 'DriveMate 道路駕駛課程',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DriveMate 道路駕駛課程',
    description:
      '專為新手與進階駕駛打造的實際道路駕駛課程，由專業教練一對一指導。',
    images: ['/hero-driving.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
