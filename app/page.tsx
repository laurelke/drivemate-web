export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 md:text-5xl whitespace-nowrap md:whitespace-normal">
            DriveMate 道路駕駛課程
          </h1>

          <p className="mt-6 text-base text-slate-600 md:text-lg">
            從新手到進階操駕，陪你安全、自信地上路
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block rounded-xl bg-black px-8 py-4 text-white text-base font-medium hover:bg-neutral-800 transition"
            >
              立即預約
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-10 text-left text-2xl font-bold text-slate-900 md:text-3xl">
            課程內容
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                新手上路
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                實際道路教學，提升真實駕駛能力
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                進階操駕
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                情境模擬訓練，強化反應與判斷
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                客製課程
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                依需求量身打造專屬駕駛課程
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
