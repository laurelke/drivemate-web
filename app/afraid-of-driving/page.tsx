import Link from 'next/link'

export const metadata = {
  title: '不敢開車怎麼辦？給有駕照卻不敢上路者的完整建議',
  description:
    '有駕照卻不敢開車上路怎麼辦？整理常見原因、改善方法、適合的練習方式與常見問題，幫助你從害怕上路走向穩定駕駛。',
  alternates: {
    canonical: 'https://drivemate-tw.com/afraid-of-driving',
  },
  openGraph: {
    title: '不敢開車怎麼辦？給有駕照卻不敢上路者的完整建議',
    description:
      '有駕照卻不敢開車上路怎麼辦？整理常見原因、改善方法、適合的練習方式與常見問題，幫助你從害怕上路走向穩定駕駛。',
    url: 'https://drivemate-tw.com/afraid-of-driving',
    siteName: 'DriveMate駕駛訓練中心',
    locale: 'zh_TW',
    type: 'article',
    images: [
      {
        url: 'https://drivemate-tw.com/images/courses/road-driving-hero.jpg',
        width: 1200,
        height: 630,
        alt: '不敢開車怎麼辦',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '不敢開車怎麼辦？給有駕照卻不敢上路者的完整建議',
    description:
      '有駕照卻不敢開車上路怎麼辦？整理常見原因、改善方法、適合的練習方式與常見問題，幫助你從害怕上路走向穩定駕駛。',
    images: ['https://drivemate-tw.com/images/courses/road-driving-hero.jpg'],
  },
}

const reasons = [
  {
    title: '缺乏真實道路經驗',
    desc: '很多人雖然考到駕照，但平常幾乎沒有實際上路。真正遇到車流、路口、停車與突發情況時，就會明顯感到壓力。',
  },
  {
    title: '害怕犯錯或影響別人',
    desc: '擔心熄火、壓線、切錯車道、停不好車，甚至害怕後方車輛按喇叭。這種壓力會讓人更不敢開始。',
  },
  {
    title: '沒有建立穩定判斷節奏',
    desc: '不是完全不會開，而是不知道什麼時候該看後照鏡、什麼時候該減速、什麼時候該切車道，於是越開越緊張。',
  },
]

const methods = [
  {
    title: '先接受「害怕很正常」',
    desc: '有駕照卻不敢上路並不罕見。對很多人來說，問題不是能力太差，而是缺乏從考照轉到真實道路的過渡訓練。',
  },
  {
    title: '不要一開始就逼自己面對最難路況',
    desc: '剛開始練習時，應先選擇車流較少、路況較單純的時段與路段，再逐步增加難度，比硬撐上路有效得多。',
  },
  {
    title: '把焦點放在幾個核心能力',
    desc: '例如視線、方向盤控制、煞車節奏、路口判斷與停車，而不是想一次把所有情境都練會。',
  },
  {
    title: '透過一對一陪同練習更有效',
    desc: '若有人能即時提醒你的視線、判斷與節奏，通常比自己反覆硬開更快建立信心，也更安全。',
  },
]

const signs = [
  '你一想到要開車就開始緊張，甚至會拖延或逃避',
  '你敢在空曠地方開，但不敢進市區、路口或停車場',
  '你已經有駕照，但實際上路次數非常少',
  '你不是完全不會開，而是只要旁邊車一多就容易慌',
]

const faqs = [
  {
    q: '有駕照卻不敢開車，這樣正常嗎？',
    a: '很正常。很多人在考到駕照後，仍然缺乏真實道路經驗。真正的困難常常不是考照本身，而是如何把技術用在日常上路情境中。',
  },
  {
    q: '不敢開車是技術問題還是心理問題？',
    a: '通常兩者都有，但很多時候心理壓力會大於純技術問題。只要判斷節奏不穩，就會放大緊張感，形成惡性循環。',
  },
  {
    q: '不敢開車怎麼練比較好？',
    a: '建議先從簡單路況開始，循序增加難度，並優先練視線、煞車節奏、路口判斷與停車等核心能力。若能有專人陪同引導，通常進步更快。',
  },
  {
    q: '有駕照但很久沒開，還能重新學會嗎？',
    a: '可以。很多人只是因為中斷太久，對車感與路況判斷變得生疏。只要重新建立練習節奏，多半都能慢慢找回穩定感。',
  },
  {
    q: '我適合上道路駕駛課程嗎？',
    a: '如果你有駕照、基本上知道怎麼開，但不敢獨立上路、對市區或停車感到緊張，通常就很適合透過道路駕駛訓練補足差距。',
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
  const pageUrl = 'https://drivemate-tw.com/afraid-of-driving'

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '不敢開車怎麼辦？給有駕照卻不敢上路者的完整建議',
    description:
      '有駕照卻不敢開車上路怎麼辦？整理常見原因、改善方法、適合的練習方式與常見問題。',
    inLanguage: 'zh-TW',
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    about: {
      '@type': 'Thing',
      name: '不敢開車怎麼辦',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://drivemate-tw.com/#website',
      name: 'DriveMate駕駛訓練中心',
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
        name: '不敢開車怎麼辦',
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
              Driving Anxiety Guide
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-900 md:text-6xl">
              不敢開車怎麼辦？
              <br />
              給有駕照卻不敢上路者的完整建議
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
              如果你已經有駕照，卻仍然不敢獨自上路，你並不是少數。
              很多人真正卡住的，不是完全不會開車，而是缺乏在真實道路中建立穩定感與信心的過程。
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/courses/road-driving"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                查看道路駕駛課程
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
            title="不敢開車，通常不是你不適合開車"
            description="多數人害怕上路，不是因為完全沒有能力，而是還沒有建立真實道路中的判斷節奏。只要練習方式正確，很多人都能從緊張、逃避，慢慢走到能穩定上路。"
          />

          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-neutral-200 md:p-10">
            <p className="text-lg leading-8 text-neutral-700">
              如果你目前的狀況是「有駕照、知道基本操作、但一想到要開車就會緊張」，
              那麼最重要的不是逼自己硬撐，而是找出你真正卡住的地方：
              是缺乏路況經驗、害怕犯錯、停車不穩，還是只要旁邊車多就會慌。
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="Why this happens"
              title="為什麼很多人有駕照，卻還是不敢開車？"
              description="考照和真實道路是兩回事。很多人的焦慮不是來自沒有駕照，而是來自對真實上路環境的不熟悉。"
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
          <SectionHeading
            eyebrow="What to do"
            title="不敢開車怎麼辦？可以先從這幾件事開始"
            description="想克服害怕上路，不一定要從最難的地方開始。重點是建立正確的練習順序。"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {methods.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                    Self check
                  </p>
                  <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
                    你是不是也有這些狀況？
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-neutral-600">
                    如果你符合以下其中幾項，通常代表你需要的不是再背一次規則，而是更貼近真實道路的練習與引導。
                  </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {signs.map((item) => (
                    <div
                      key={item}
                      className="group flex min-h-[130px] items-center justify-center rounded-3xl bg-neutral-50 p-8 text-center shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                    >
                      <p className="text-base leading-8 text-neutral-700 md:text-lg">
                        {item}
                      </p>
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
                  <li>• 有駕照卻不敢開車，是很常見的狀況。</li>
                  <li>• 問題通常不只是技術，而是缺乏真實道路中的穩定感。</li>
                  <li>• 練習順序要由簡到難，而不是一開始就硬上最複雜路況。</li>
                  <li>• 有人陪同、即時修正，通常會比自己摸索更有效率。</li>
                </ul>

                <div className="mt-8 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <p className="text-sm leading-7 text-white/80">
                    如果你卡住的不是「不會發動車子」，而是「不敢面對真實道路」，
                    那你需要的通常不是重新考照，而是更貼近生活的道路駕駛訓練。
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-[2rem] bg-orange-50 p-8 shadow-sm ring-1 ring-orange-100 md:p-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-500">
              Next step
            </p>
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
              如果你想從「不敢開」走到「敢自己上路」
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-neutral-700">
              最重要的不是一次把所有路況都克服，而是先建立幾個核心能力：
              視線、節奏、路口判斷、停車與實際生活路線練習。
              當這些能力慢慢穩定，你的信心通常也會跟著回來。
            </p>

            <div className="mt-8">
              <Link
                href="/courses/road-driving"
                className="inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                了解道路駕駛課程
              </Link>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
            <SectionHeading
              eyebrow="FAQ"
              title="不敢開車常見問題"
              description="以下整理最常見的疑問，幫助你快速判斷自己現在的狀況與下一步方向。"
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
      </main>
    </>
  )
}