'use client'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <img
          src="/hero-driving.jpg"
          alt="DriveMate 道路駕駛課程"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            DriveMate 道路駕駛課程
          </h1>
          <p className="text-base md:text-lg mb-8">
            從新手到進階操駕，陪你安全、自信地上路
          </p>
          <a
            href="#contact"
            className="rounded-full bg-black px-8 py-3 text-white text-sm md:text-base"
          >
            立即預約
          </a>
        </div>
      </section>

      {/* Why DriveMate */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            為什麼選擇 DriveMate？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl border p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">實際道路教學</h3>
              <p className="text-gray-600 text-sm">
                非模擬場地，直接上路，培養真實駕駛判斷力
              </p>
            </div>
            <div className="rounded-2xl border p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">專業教練指導</h3>
              <p className="text-gray-600 text-sm">
                循序漸進，依學員程度量身調整課程
              </p>
            </div>
            <div className="rounded-2xl border p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">安心陪駕</h3>
              <p className="text-gray-600 text-sm">
                加強路況判斷與信心建立，安心上路不緊張
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Introduction Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            課程簡介
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 新手上路 */}
            <div className="rounded-2xl bg-white border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">新手上路</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                適合剛考到駕照或長時間未上路的學員，
                從基本起步、轉彎、變換車道到實際道路練習，
                建立正確駕駛觀念與穩定操作，安心踏出第一步。
              </p>
            </div>

            {/* 進階駕駛 */}
            <div className="rounded-2xl bg-white border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">進階駕駛</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                適合已有駕駛經驗、希望提升操控與判斷能力的學員，
                加強高速道路、市區複雜路況、預判危險與防禦駕駛，
                讓駕駛更流暢、更安全。
              </p>
            </div>

            {/* 賽道駕駛 */}
            <div className="rounded-2xl bg-white border p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">賽道駕駛</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                針對想深入了解車輛極限與操駕技巧的學員，
                在安全環境下學習煞車點、過彎路線與車輛控制，
                強化對車輛動態的理解與掌控。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          準備好開始你的駕駛旅程了嗎？
        </h2>
        <p className="text-gray-600 mb-10">
          現在就預約課程，讓 DriveMate 陪你安全上路
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-black px-10 py-4 text-white"
        >
          立即預約
        </a>
      </section>
    </>
  )
}
