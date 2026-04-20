'use client'

import Link from 'next/link'
import { HeroCTA } from '@/components/ui/HeroCTA'

const suitableFor = [
  '剛拿到駕照，但還不敢獨自開車上路',
  '長時間沒有開車，駕駛感覺變得生疏',
  '會基本操作，但在市區或停車時容易緊張',
  '想練通勤路線或固定生活動線',
]

const contents = [
  {
    title: '基礎車輛控制與駕駛感建立',
    desc: '包含方向盤控制、油門與煞車拿捏、坐姿與視線配置。',
  },
  {
    title: '市區道路與路口判斷',
    desc: '練習常見車流、轉彎、變換車道與路口判斷。',
  },
  {
    title: '停車與倒車技巧',
    desc: '包含路邊停車、倒車入庫與停車場操作。',
  },
  {
    title: '實際生活路線練習',
    desc: '依需求安排通勤路線、接送或日常會用到的道路。',
  },
]

const faqs = [
  {
    q: '道路駕駛課程是什麼？',
    a: '是在真實道路中，由教練一對一陪同進行的駕駛訓練，幫助你建立實際上路能力。',
  },
  {
    q: '適合新手嗎？',
    a: '非常適合，課程會依程度安排，從基礎到上路逐步建立能力。',
  },
  {
    q: '和駕訓班有什麼不同？',
    a: '駕訓班重考試，道路駕駛重實戰上路能力。',
  },
]

export default function Page() {
  return (
    <main className="bg-neutral-50 text-neutral-800">

      {/* HERO */}
      <section className="py-24 text-center px-6">
        <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
          Road Driving Course
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-900">
          道路駕駛課程是什麼？
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-neutral-600">
          道路駕駛課程是在真實道路中進行的實戰駕駛訓練，
          幫助你從「會考試」進階到「真正會開車上路」。
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
          <HeroCTA href="/courses/road-driving">
            查看課程方案
          </HeroCTA>
          <HeroCTA href="#faq">
            常見問題
          </HeroCTA>
        </div>
      </section>

      {/* 適合誰 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            道路駕駛課程適合哪些人？
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            如果你有駕照但不敢上路，或一遇到車流就緊張，
            這類課程通常會比單純場地練習更有效。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {suitableFor.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center text-center min-h-[120px] bg-white p-8 rounded-3xl shadow-sm ring-1 ring-neutral-200 hover:-translate-y-1 hover:shadow-lg transition"
            >
              <p className="text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 課程內容 */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              道路駕駛課程內容有哪些？
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              課程會依學員狀況調整，但核心內容大致如下。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {contents.map((item) => (
              <div
                key={item.title}
                className="bg-neutral-50 p-8 rounded-3xl shadow-sm ring-1 ring-neutral-200"
              >
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          常見問題
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-neutral-200"
            >
              <summary className="font-semibold cursor-pointer">
                {faq.q}
              </summary>
              <p className="mt-3 text-neutral-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA 導回課程頁 */}
      <section className="py-24 text-center bg-neutral-900 text-white px-6">
        <h2 className="text-3xl font-bold">
          想知道適合你的訓練方式？
        </h2>
        <p className="mt-4 text-white/70">
          查看完整課程方案與訓練內容
        </p>

        <div className="mt-8">
          <HeroCTA href="/courses/road-driving">
            查看完整課程
          </HeroCTA>
        </div>
      </section>

    </main>
  )
}