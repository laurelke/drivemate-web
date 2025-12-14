import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/hero-driving.jpg" // 請放在 public 資料夾
          alt="DriveMate 道路駕駛課程"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">DriveMate 道路駕駛課程</h1>
          <p className="mb-8 text-base md:text-lg">從新手到進階操駕，陪你安全、自信地上路</p>
          <a
            href="#reserve"
            className="rounded-full bg-black px-8 py-3 text-white hover:bg-neutral-800"
          >
            立即預約
          </a>
        </div>
      </section>

      {/* 為什麼選擇 DriveMate */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">為什麼選擇 DriveMate？</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6 text-center">
            <h3 className="font-semibold mb-2">實際道路教學</h3>
            <p className="text-sm text-neutral-600">非模擬場地，直接上路，培養真實駕駛判斷力</p>
          </div>
          <div className="rounded-2xl border p-6 text-center">
            <h3 className="font-semibold mb-2">專業教練指導</h3>
            <p className="text-sm text-neutral-600">循序漸進，依學員程度量身調整課程</p>
          </div>
          <div className="rounded-2xl border p-6 text-center">
            <h3 className="font-semibold mb-2">安心陪駕</h3>
            <p className="text-sm text-neutral-600">加強路況判斷與信心建立，安心上路不緊張</p>
          </div>
        </div>
      </section>

      {/* 課程簡介（紅框區塊） */}
      <section className="bg-neutral-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">課程簡介</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            DriveMate 道路駕駛課程專為已取得駕照、但缺乏實際上路信心的學員設計。
            課程將在真實道路環境中進行，由專業教練陪同指導，
            協助你熟悉市區道路、高速公路、停車技巧與臨場判斷。
          </p>
          <p className="text-neutral-700 leading-relaxed">
            不論你是久未開車、剛拿到駕照，或想提升駕駛穩定度，
            DriveMate 都會依你的需求客製化教學內容，
            讓你真正做到「敢開、會開、開得安心」。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="reserve" className="py-20 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">準備好開始你的駕駛旅程了嗎？</h2>
        <p className="text-neutral-600 mb-8">現在就預約課程，讓 DriveMate 陪你安全上路</p>
        <a
          href="#"
          className="inline-block rounded-full bg-black px-10 py-4 text-white hover:bg-neutral-800"
        >
          立即預約
        </a>
      </section>
    </div>
  )
}
