import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '道路駕駛課程是什麼？新手上路、駕照不敢開完整說明',
  description:
    '整理道路駕駛課程是什麼、適合哪些人、會練哪些內容、如何選擇適合自己的訓練方式，幫助剛拿駕照、久未開車與不敢上路者建立穩定駕駛能力。',
  alternates: {
    canonical: 'https://drivemate-tw.com/road-driving-course',
  },
  openGraph: {
    title: '道路駕駛課程是什麼？新手上路、駕照不敢開完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、會練哪些內容、如何選擇適合自己的訓練方式，幫助剛拿駕照、久未開車與不敢上路者建立穩定駕駛能力。',
    url: 'https://drivemate-tw.com/road-driving-course',
    siteName: 'DriveMate道路駕駛課程',
    locale: 'zh_TW',
    type: 'article',
    images: [
      {
        url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
        width: 1200,
        height: 630,
        alt: '道路駕駛課程是什麼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '道路駕駛課程是什麼？新手上路、有駕照不敢開完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、會練哪些內容、如何選擇適合自己的訓練方式。',
    images: ['https://drivemate-tw.com/images/courses/road-driving-hero.jpg'],
  },
}

const suitableFor = [
  '剛拿到駕照，卻還不敢獨自開車上路的人',
  '已經很久沒開車，駕駛感覺明顯變生疏的人',
  '會基本操作，但在市區、路口或停車時容易慌張的人',
  '想練習通勤路線、接送路線或固定生活動線的人',
]

const reasons = [
  {
    title: '缺乏實際道路駕駛經驗',
    desc: '多數人考照通過後發現實際道路狀況與想像中差距極大，導致一上路就緊張。',
  },
  {
    title: '錯誤習慣沒有被即時修正',
    desc: '一個良好的駕駛狀態是由許多正確的駕駛習慣去築構成型，一但駕駛人在方向盤、煞車、路口判斷出現小錯誤，會逐漸累積成壓力。',
  },
  {
    title: '心理壓力大於技術問題',
    desc: '很多駕駛人有時候不是不會開，而是因為種種因素進而導致不敢開，每個人受影響的因素不盡相同。',
  },
]

const courseContents = [
  {
    title: '基礎車輛控制與視線建立',
    desc: '包含坐姿、方向盤操作、油門與煞車控制、視線與後照鏡使用習慣，建立穩定駕駛基礎。',
  },
  {
    title: '市區道路與路口判斷',
    desc: '練習常見市區路況、轉彎、變換車道、路口判斷與車流互動，讓你更能應對真實道路。',
  },
  {
    title: '停車與倒車技巧',
    desc: '依實際需求安排路邊停車、倒車入庫與停車場進出，改善新手最常見的停車壓力。',
  },
  {
    title: '客製化路線實戰',
    desc: '可依需求安排市區道路、高快速公路、山路，或通勤與接送等生活路線的實際練習。',
  },
]

const chooseGuide = [
  '如果你幾乎沒有道路駕駛經驗，建議先從基礎方案或評估課開始。',
  '如果你會開但常在特定情境失誤，評估＋矯正方案通常最有效率。',
  '如果你的目標是短時間內吸收大量駕駛技巧、知識，並能積極自主練習，可選擇 14 天成果計畫。',
  '如果你需要更全面且詳細的課程學習曲線，並希望能即時調整駕駛狀態與問題，21 天穩定方案會更適合。',
]

const faqs = [
  {
    q: '道路駕駛課程是什麼？',
    a: '道路駕駛課程是在真實道路環境中，由教練一對一陪同進行的實戰駕駛訓練。和只在場地內練習不同，重點是幫助學員建立真正能上路的判斷、操作與信心。',
  },
  {
    q: '道路駕駛課程適合哪些人？',
    a: '特別適合剛拿駕照、久未開車、缺乏實際道路經驗，或有駕照卻不敢獨立上路的人。',
  },
  {
    q: '道路駕駛課程會練哪些內容？',
    a: '常見內容包含基礎車輛控制、市區道路、路口判斷、車道變換、停車技巧，以及生活中的各類型路線。',
  },
  {
    q: '沒有駕駛經驗也可以報名嗎？',
    a: '可以。若你剛拿到駕照、缺乏實際道路經驗，教練會依你的程度安排內容，從基礎操作、道路判斷到實際上路循序建立能力。',
  },
  {
    q: '已經有駕照但很久沒開車，適合這門課嗎？',
    a: '非常適合。很多學員的問題不是不會開，而是久未駕駛後缺乏信心。本課程會協助你重新建立對車輛、路況與自身判斷的掌握。',
  },
  {
    q: '一定要自備車輛嗎？',
    a: '不一定。部分方案可直接使用教練車，若想熟悉自己的車輛，也可依課程安排使用自家車上課。',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${
            light ? 'text-white/60' : 'text-neutral-400'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? 'text-white/75' : 'text-neutral-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default function Page() {
  const pageUrl = 'https://drivemate-tw.com/road-driving-course'

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '道路駕駛課程是什麼？新手上路、駕照不敢開完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、會練哪些內容、如何選擇適合自己的訓練方式，幫助剛拿駕照、久未開車與不敢上路者建立穩定駕駛能力。',
    inLanguage: 'zh-TW',
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    about: {
      '@type': 'Thing',
      name: '道路駕駛課程',
    },
    isPartOf: {
      '@id': 'https://drivemate-tw.com/#website',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: 'https://drivemate-tw.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '道路駕駛課程介紹',
        item: pageUrl,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-neutral-50 text-neutral-800">
        <section className="px-6 py-24 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
              Road Driving Course Guide
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
              道路駕駛課程是什麼？
              <br />
              給新手上路與駕照不敢開者的完整說明
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
              道路駕駛課程是在真實道路環境中進行的一對一駕駛訓練，
              目的不是只讓你會考試，而是讓你能在市區、路口、停車與生活動線中，
              建立穩定、可複製且更有信心的駕駛能力。
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/courses/road-driving"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                查看完整課程頁
              </Link>
              <Link
                href="#faq"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                先看常見問題
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Quick answer"
            title="道路駕駛課程的核心，不只是把車開出去"
            description="它真正要解決的是：有駕照卻不敢上路、久未開車變得生疏、遇到車流或停車就緊張，以及不知道該如何把考照能力轉化成日常駕駛能力。"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-neutral-200 md:p-10">
            <p className="text-lg leading-8 text-neutral-700">
              對多數人來說，問題往往不是「完全不會開車」，而是缺少在真實道路中被正確引導與修正的機會。
              因此，道路駕駛課程通常會比單純重複場地練習更有效。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Who is this for"
            title="道路駕駛課程適合哪些人？"
            description="如果你已經有駕照，卻仍不敢上路，或是一遇到車流、路口、停車就容易緊張，那麼道路駕駛課程通常就是很適合的選擇。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="group flex min-h-[130px] items-center justify-center rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-neutral-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-neutral-50 hover:shadow-lg hover:ring-neutral-300"
              >
                <p className="text-base leading-8 text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 md:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="Why people get stuck"
              title="為什麼很多人有駕照，卻不敢上路？"
              description="多數人的問題不是完全不會開車，而是缺少在實際道路駕駛中被正確引導與修正的機會。"
            />

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {reasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-neutral-50 p-8 text-center shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                  Course content
                </p>
                <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
                  道路駕駛課程通常會練什麼？
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  課程會依學員狀況客製安排，會圍繞幾個核心能力展開，目的是讓你從「不知道怎麼開」走到「能穩定行駛」。 
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {courseContents.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Summary
              </p>
              <h3 className="text-2xl font-bold">本頁重點整理</h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80">
                <li>• 道路駕駛課程重點在真實道路實戰，而不是只做場地練習。</li>
                <li>• 適合新手、久未開車、會開但不敢上路的人。</li>
                <li>• 常見內容包含市區道路、路口判斷、停車與客製化路線。</li>
                <li>• 如果你想知道更完整的實際方案與堂數安排，可再查看課程頁。</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm leading-7 text-white/80">
                  想知道你現在卡住的是技術、判斷，還是心理壓力？
                  先理解課程結構，再回到課程頁看方案，會更容易判斷哪種訓練方式適合你。
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="How to choose"
              title="如何選擇適合自己的道路駕駛課程？"
              description="不同學員卡住的地方不同，因此選課不一定是越多堂越好，而是要先看你目前的程度與目標。"
            />

            <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-neutral-900 px-8 py-10 text-white shadow-xl md:px-12 md:py-12">
              <ul className="space-y-4 text-base leading-8 text-white/80">
                {chooseGuide.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="FAQ"
              title="道路駕駛課程常見問題"
              description="以下整理最常見的疑問，幫助你快速理解道路駕駛課程的用途與適合對象。"
            />

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-3xl bg-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:bg-white hover:shadow-md"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-neutral-900 marker:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-4 leading-8 text-neutral-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="rounded-[2rem] bg-orange-50 p-8 shadow-sm ring-1 ring-orange-100 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
              Final takeaway
            </p>

            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
              道路駕駛課程真正重要的，不只是讓你敢開車
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-700">
              <p>
                真正有價值的道路駕駛訓練，不只是讓你把車開出去，而是讓你在面對市區道路、路口判斷、停車與日常路線時，
                可以更穩定、更安全，也更知道自己正在做什麼。
              </p>

              <p>
                當你的基礎逐漸穩定後，車輛自然會開得更順，駕駛時的信心也會跟著提升。
                因為你不是憑感覺在操作，而是開始建立出有邏輯、可重複的駕駛方式。
              </p>

              <p>
                如果你想進一步了解實際方案、訓練堂數與教學安排，可以再回到完整課程頁查看。
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/courses/road-driving"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                回到完整課程頁
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}