'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

const LINE_LINK = 'https://lin.ee/J22IVRg'

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null)

  const courses = [
    {
      key: 'beginner',
      title: '新手上路',
      badge: '最受歡迎',
      summary: '適合剛考到駕照、缺乏實際道路經驗者 📍 全台到府服務 ',
      detail:
        '基本控制、市區道路駕駛、各類停車技巧，建立正確車感與駕駛信心。',
      duration: '單堂 180 分鐘',
      pricing: [
        { label: '3 小時', price: '$4,990' },
        { label: '12 小時', price: '$16,990' },
        { label: '24 小時', price: '$35,000' },
      ],
    },
    {
      key: 'advanced',
      title: '運動駕駛',
      badge: '技術提升',
      summary: '適合已有駕駛經驗、想提升操控技巧者 📍 全台到府服務 ',
      detail:
        '學習掌握車輛荷重轉移、方向盤操作、山路駕駛路線選擇與實戰應用。',
      duration: '單堂 180 分鐘',
      pricing: [
        { label: '3 小時', price: '$9,000' },
        { label: '9 小時', price: '$25,000' },
        { label: '12 小時', price: '$32,000' },
      ],
    },
    {
      key: 'track',
      title: '賽道駕駛',
      badge: '進階體驗',
      summary: '適合熱愛操控與極限體驗的學員',
      detail: '封閉場地練習彎道技巧、制動控制與安全極限判斷。',
      duration: '單節 30 分鐘',
      pricing: [{ label: '4 節', price: '$12,000' }],
    },
  ]

  const infoCards = [
    {
      key: 'faq',
      title: '常見 Q&A',
      content: (
        <ul className="space-y-3 text-sm text-gray-600">
          <li>Q: 可以使用自己的車上課嗎？<br />A: 可以，或加購教練車。</li>
          <li>Q: 完全沒經驗可以上課嗎？<br />A: 可以，新手上路專為此設計。</li>
          <li>Q: 可以帶家人旁聽嗎？<br />A: 以學員專注度為優先，若需陪同可事先告知。</li>
          <li>Q: 使用自家車會不會危險？<br />A: 我們受過極度嚴格的培訓且有一定的專業水準及信心來控管教學過程的安全性。</li>
        </ul>
      ),
    },
    {
      key: 'payment',
      title: '付款方式',
      content: (
        <div className="space-y-3 text-sm text-gray-600">
          <p>僅接受「轉帳匯款」</p>
          <p>銀行：005 土地銀行</p>
          <p>帳戶：022005804039</p>
          <p>
            轉帳完成麻煩主動告知並提供轉帳後五碼，我們將於確認款項後，主動告知課程預約完成。
          </p>
        </div>
      ),
    },
    {
      key: 'booking',
      title: '預約資訊',
      content: (
        <div className="space-y-3 text-sm text-gray-600">
          <p>課程時段：</p>
          <ul className="list-disc pl-5">
            <li>09:00 - 12:00</li>
            <li>14:00 - 17:00</li>
            <li>19:00 - 22:00</li>
          </ul>
          <p>單次課程 3 小時</p>
          <p>
            教練將依學員狀況設定 4–8 個課綱，協助解決駕駛問題。
          </p>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Hero / Why / Courses 區塊完全不動 */}
      {/* ……（中略，與你原本完全一致）…… */}

      {/* Q&A / Payment / Booking - Expandable */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
            {infoCards.map((item) => {
              const isOpen = open === item.key

              return (
                <div
                  key={item.key}
                  className="min-w-[280px] md:min-w-0 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
                >
                  <div
                    onClick={() => setOpen(isOpen ? null : item.key)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="border-t pt-4">{item.content}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 聯絡我們（完全不動） */}
      <section id="contact" className="bg-white py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold">準備好開始你的駕駛旅程了嗎？</h2>
        <p className="mb-8 text-gray-600">
          立即加入 DriveMate 道路駕駛課程，由專業教練陪同，安心累積實際駕駛經驗。
        </p>
        <a
          href={LINE_LINK}
          target="_blank"
          className="inline-block rounded-full bg-black px-10 py-4 text-white
                     transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          DriveMate 官方LINE
        </a>
      </section>
    </>
  )
}
