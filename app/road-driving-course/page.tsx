import Link from 'next/link'
import { HeroCTA } from '@/components/ui/HeroCTA'

export const metadata = {
  title: '道路駕駛課程是什麼？給新手與不敢上路者的完整說明',
  description:
    '整理道路駕駛課程是什麼、適合哪些人、課程內容有哪些與常見問題，幫助你快速了解這類訓練是否適合自己。',
  alternates: {
    canonical: 'https://drivemate-tw.com/road-driving-course',
  },
  openGraph: {
    title: '道路駕駛課程是什麼？給新手與不敢上路者的完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、課程內容有哪些與常見問題，幫助你快速了解這類訓練是否適合自己。',
    url: 'https://drivemate-tw.com/road-driving-course',
    siteName: 'DriveMate 駕駛訓練中心',
    locale: 'zh_TW',
    type: 'article',
    images: [
      {
        url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
        width: 1200,
        height: 630,
        alt: '道路駕駛課程是什麼？',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '道路駕駛課程是什麼？給新手與不敢上路者的完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、課程內容有哪些與常見問題，幫助你快速了解這類訓練是否適合自己。',
    images: ['https://drivemate-tw.com/images/courses/road-driving-hero.jpg'],
  },
}

const suitableFor = [
  '剛拿到駕照，但還不敢獨自開車上路',
  '長時間沒有開車，駕駛感覺明顯變生疏',
  '會基本操作，但在市區、路口或停車時容易慌張',
  '想練通勤路線、接送路線或固定生活動線',
]

const reasons = [
  {
    title: '缺乏真實路況經驗',
    desc: '很多人雖然考到駕照，但實際上路的經驗很少。一進入車流、遇到複雜路口或需要停車時，就容易失去節奏。',
  },
  {
    title: '錯誤習慣沒有被即時修正',
    desc: '方向盤控制、視線配置、煞車時機與變換車道判斷，只要有小偏差，就會在真實道路中放大成壓力。',
  },
  {
    title: '心理壓力大於技術問題',
    desc: '很多人不是完全不會開，而是對自己沒有把握。只要一緊張，就更難做出穩定判斷。',
  },
]

const contents = [
  {
    title: '基礎車輛控制與駕駛感建立',
    desc: '包含坐姿、視線、方向盤控制、油門與煞車的協調，幫助你先把最基本的車感建立起來。',
  },
  {
    title: '市區道路與路口判斷',
    desc: '練習常見市區車流、轉彎、變換車道、路口判斷與與其他車輛互動的節奏。',
  },
  {
    title: '停車與倒車技巧',
    desc: '依需求安排路邊停車、倒車入庫、停車場進出等實際會遇到的場景。',
  },
  {
    title: '生活化路線實戰',
    desc: '可依需求安排通勤、接送、固定生活圈或常用路線練習，讓訓練更貼近真實需求。',
  },
]

const chooseGuide = [
  '如果你幾乎沒有道路經驗，通常適合先從基礎練習與評估開始。',
  '如果你會開，但一遇到特定情境就容易失誤，重點通常不是重學，而是找出卡住你的關鍵問題。',
  '如果你想建立獨立上路能力，課程重點會放在穩定判斷、真實路況與實際路線反覆演練。',
  '如果你有固定通勤或生活需求，客製化路線練習通常會比單純反覆繞路更有效。',
]

const faqs = [
  {
    q: '道路駕駛課程是什麼？',
    a: '道路駕駛課程是在真實道路環境中，由教練一對一陪同進行的實戰駕駛訓練。和只在場地內練習不同，這類課程更重視真實上路能力、判斷與信心建立。',
  },
  {
    q: '沒有駕駛經驗也可以上嗎？',
    a: '可以。如果你剛拿到駕照、缺乏實際道路經驗，課程可依程度安排，從基礎控制、道路判斷到實際上路逐步建立能力。',
  },
  {
    q: '已經有駕照但很久沒開車，適合這門課嗎？',
    a: '非常適合。很多學員的問題不是完全不會開，而是久未駕駛後缺乏信心與熟悉感，這類課程能幫助你重新找回穩定駕駛的感覺。',
  },
  {
    q: '道路駕駛課程通常會練哪些內容？',
    a: '常見內容包含基礎車輛控制、市區道路、路口判斷、車道變換、停車技巧，以及通勤、接送等實際生活路線。',
  },
  {
    q: '道路駕駛課程和駕訓班有什麼不同？',
    a: '駕訓班通常較偏向考照與基本操作訓練，道路駕駛課程則更著重在真實道路中的判斷、節奏、風險感知與獨立上路能力。',
  },
  {
    q: '一定要自備車輛嗎？',
    a: '不一定。是否需要自備車輛，會依實際課程安排而不同。有些人會希望先熟悉教練車，有些人則會希望直接練自己的車。',
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
    name: '道路駕駛課程是什麼？給新手與不敢上路者的完整說明',
    description:
      '整理道路駕駛課程是什麼、適合哪些人、課程內容有哪些與常見問題，幫助你快速了解這類訓練是否適合自己。',
    inLanguage: 'zh-TW',
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    about: {
      '@type': 'Thing',
      name: '道路駕駛課程',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://drivemate-tw.com/#website',
      name: 'DriveMate 駕駛訓練中心',
      url: 'https://drivemate-tw.com/',
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
              Road Driving Course
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
              道路駕駛課程是什麼？
              <br />
              給新手與不敢上路者的完整說明
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
              道路駕駛課程是在真實道路中進行的實戰駕駛訓練。
              它不是只讓你反覆做場地操作，而是幫助你在真實車流、路口、停車與日常生活路線中，
              建立更穩定的判斷、操作與上路信心。
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <HeroCTA href="/courses/road-driving">查看完整課程頁</HeroCTA>
              <HeroCTA href="#faq">先看常見問題</HeroCTA>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="Who is this for"
            title="道路駕駛課程適合哪些人？"
            description="如果你已經有駕照，卻仍不敢上路，或是一遇到車流、路口、停車就容易緊張，那麼道路駕駛課程通常會比單純重複場地練習更有效。這類課程的目標不是讓你更會考試，而是讓你更能應付真實道路。"
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
              description="多數人的問題不是完全不會開車，而是缺少在真實道路中被正確引導與修正的機會。"
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
                  課程會依學員程度與需求調整，但核心通常圍繞在車輛控制、道路判斷、停車技巧與生活化路線練習，
                  目的是讓你從「知道怎麼開」走到「能穩定上路」。
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {contents.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] bg-neutral-900 p-8 text-white shadow-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
                Summary
              </p>
              <h3 className="text-2xl font-bold">這頁重點整理</h3>

              <ul className="mt-6 space-y-4 text-sm leading-7 text-white/80">
                <li>• 道路駕駛課程重點在真實道路實戰，而不是只做場地練習。</li>
                <li>• 適合新手、久未開車、會開但不敢上路的人。</li>
                <li>• 常見內容包含市區道路、路口判斷、停車與生活路線練習。</li>
                <li>• 這類課程的核心價值，是讓你建立能真正用在生活裡的駕駛能力。</li>
              </ul>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                <p className="text-sm leading-7 text-white/80">
                  如果你現在最大的問題不是「完全不會」，而是「不穩、會怕、沒有信心」，
                  那麼道路駕駛課程通常會比單純反覆場地練習更貼近你的需求。
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="How to know if you need it"
              title="怎麼判斷自己適不適合道路駕駛課程？"
              description="如果你已經具備基本開車能力，但缺乏真實道路中的穩定感，通常就很適合透過這類課程補足差距。"
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

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="道路駕駛課程常見問題"
            description="以下整理最常見的疑問，幫助你快速理解這類課程的用途與適合對象。"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:bg-neutral-50 hover:shadow-md"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-neutral-900 marker:hidden">
                  {faq.q}
                </summary>
                <p className="mt-4 leading-8 text-neutral-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-[2rem] bg-orange-50 p-8 shadow-sm ring-1 ring-orange-100 md:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
              Final takeaway
            </p>
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
              道路駕駛課程的核心目標，不只是把車開出去
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-700">
              真正重要的是，當你面對真實道路、車流與生活情境時，能不能維持穩定判斷與安全操作。
              如果你想從「不敢上路」走到「可以自己上路」，道路駕駛課程通常會比單純反覆考照式練習更貼近真實需求。
            </p>

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