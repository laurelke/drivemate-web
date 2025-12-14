export default function HomePage() {
  return (
    <>
      {/* Hero / 課程主視覺 */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center text-white"
        style={{
          backgroundImage: "url('/hero-driving.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 黑色遮罩 */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 內容 */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            DriveMate 道路駕駛課程
          </h1>

          <p className="mt-4 text-base md:text-lg">
            從新手到進階操駕，陪你安全、自信地上路
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 text-white transition hover:bg-neutral-800"
          >
            立即預約
          </a>
        </div>
      </section>

      {/* 課程內容 */}
      <section id="courses" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-bold md:text-3xl">
          課程內容
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* 課程卡片 1 */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">新手上路</h3>
            <p className="mt-2 text-neutral-600">
              實際道路教學，提升真實駕駛能力
            </p>
          </div>

          {/* 課程卡片 2 */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">進階駕駛</h3>
            <p className="mt-2 text-neutral-600">
              路況判斷、駕駛技巧與安全觀念強化
            </p>
          </div>
        </div>
      </section>

      {/* 聯絡 / 預約 */}
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <h2 className="text-2xl font-bold md:text-3xl">
          立即預約試駕課程
        </h2>

        <p className="mt-4 text-neutral-600">
          歡迎透過 Instagram 或表單與我們聯繫
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          className="mt-8 inline-block rounded-full bg-black px-10 py-4 text-white transition hover:bg-neutral-800"
        >
          前往 Instagram
        </a>
      </section>
    </>
  )
}
