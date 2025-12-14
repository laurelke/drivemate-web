const BOOKING_URL = 'https://lin.ee/J22IVRg'

export default function Home() {
  return (
    <main className="pt-16">
      {/* ================= Hero ================= */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-3xl font-bold md:text-5xl whitespace-nowrap md:whitespace-normal">
            DriveMate 道路駕駛課程
          </h1>

          <p className="mt-6 text-base text-neutral-600 md:text-lg">
            實際道路教學，讓你安心、自信地上路
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            className="mt-10 inline-block rounded-xl bg-black px-10 py-4 text-white text-base font-medium hover:bg-neutral-800"
          >
            立即預約
          </a>
        </div>
      </section>

      {/* ================= Why DriveMate ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            為什麼選擇 DriveMate
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">實際道路教學</h3>
              <p className="mt-3 text-sm text-neutral-600">
                不只在場地，直接上路練習真實情境
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">客製化課程</h3>
              <p className="mt-3 text-sm text-neutral-600">
                依照你的程度與需求安排教學內容
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">專業教練陪同</h3>
              <p className="mt-3 text-sm text-neutral-600">
                清楚講解、耐心引導，降低上路焦慮
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Courses ================= */}
      <section id="courses" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            課程方案
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: '新手上路', desc: '適合剛考到駕照、缺乏道路經驗者' },
              { title: '道路駕駛加強', desc: '針對特定路況與技巧強化' },
              { title: '客製化課程', desc: '依需求安排時間與內容' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-neutral-600">{c.desc}</p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  className="mt-6 inline-block text-sm font-medium text-black underline"
                >
                  立即預約
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Instagram ================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h2 className="mb-10 text-2xl font-bold md:text-3xl">
            Instagram 最新動態
          </h2>

          {/* 之後貼 IG embed */}
          <p className="text-sm text-neutral-500">
            （下一步加入 IG 貼文嵌入）
          </p>
        </div>
      </section>

      {/* ================= Bottom CTA ================= */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">
            準備好開始上路了嗎？
          </h2>

          <a
            href={BOOKING_URL}
            target="_blank"
            className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-black font-medium"
          >
            立即預約
          </a>
        </div>
      </section>
    </main>
  )
}
