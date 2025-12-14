import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[75vh] items-center justify-center text-white"
        style={{
          backgroundImage: "url('/hero-driving.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '50% 30%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl font-bold md:text-5xl">
            DriveMate 道路駕駛課程
          </h1>

          <p className="mt-6 text-base md:text-lg">
            從新手到進階操駕，陪你安全、自信地上路
          </p>

          <div className="mt-10">
            <Link
              href="/booking"
              className="inline-block rounded-full bg-black px-10 py-4 text-white transition hover:bg-gray-800"
            >
              立即預約
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          為什麼選擇 DriveMate？
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-lg font-semibold">實際道路教學</h3>
            <p className="mt-4 text-sm text-gray-600">
              非模擬場地，直接上路，培養真實駕駛判斷力
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-lg font-semibold">專業教練指導</h3>
            <p className="mt-4 text-sm text-gray-600">
              循序漸進，依學員程度量身調整課程
            </p>
          </div>

          <div className="rounded-2xl border p-6 text-center">
            <h3 className="text-lg font-semibold">安心陪駕</h3>
            <p className="mt-4 text-sm text-gray-600">
              加強路況判斷與信心建立，安心上路不緊張
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            準備好開始你的駕駛旅程了嗎？
          </h2>

          <p className="mt-4 text-gray-600">
            現在就預約課程，讓 DriveMate 陪你安全上路
          </p>

          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-block rounded-full bg-black px-10 py-4 text-white transition hover:bg-gray-800"
            >
              立即預約
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
