export const metadata = {
  title: '教練車加購方案優惠｜道路駕駛課程',
  description:
    'DriveMate 教練車加購方案說明，提供單堂加購與多堂成果型方案，協助新手與久未開車的學員穩定建立道路駕駛信心。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/road-driving/instructor-car',
  },
}

export default function InstructorCarAddOnPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-14 space-y-16">
      {/* ================= 標題 ================= */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          「道路駕駛」教練車加購方案
        </h1>
        <p className="text-lg text-neutral-600">
          依你的練習目標，選擇最適合的教練車方案
        </p>
      </section>

      {/* ================= 價格方案 ================= */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* 單堂 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
          <h2 className="text-xl font-semibold mb-1">
            單堂教練車加購
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            彈性選擇｜適合短期體驗
          </p>

          <div className="mb-6">
            <span className="text-3xl font-bold">NT$1,000</span>
            <span className="text-sm text-neutral-500 ml-1">／堂</span>
          </div>
        </div>

        {/* 14 天方案 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col ring-1 ring-black">
          <h2 className="text-xl font-semibold mb-1">
            14 天獨立上路成果計畫
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            熱門方案｜建立基本上路能力
          </p>

          <div className="mb-6">
            <span className="text-3xl font-bold">NT$3,000</span>
            <span className="text-sm text-neutral-500 ml-1">／ 4 堂</span>
          </div>
          
          <p className="text-sm text-neutral-500 mb-6">
            買三堂送一堂，等於 4 堂教練車練習
          </p>
        </div>

        {/* 21 天方案 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col">
          <h2 className="text-xl font-semibold mb-1">
            21 天通勤駕駛穩定方案
          </h2>
          <p className="text-sm text-neutral-500 mb-4">
            進階成果型方案
          </p>

          <div className="mb-6">
            <span className="text-3xl font-bold">NT$5,000</span>
            <span className="text-sm text-neutral-500 ml-1">／ 8 堂</span>
          </div>
          
          <p className="text-sm text-neutral-500 mb-6">
            買五堂送三堂，等於 8 堂教練車練習
          </p>
        </div>
      </section>

      {/* ================= 教練車款 ================= */}
<section className="space-y-6">
  <h2 className="text-2xl font-semibold text-center">
    「道路駕駛」教練車款
  </h2>

  <div className="rounded-xl border bg-white p-6">
    {/* 固定卡片高度，不動 */}
    <div className="flex h-[360px] items-center justify-center overflow-hidden">
      <img
        src="/images/instructor-car-1.png"
        alt="DriveMate 道路駕駛實際上課使用之教練車款（示意）"
        className="
          mx-full
          w-full
          max-w-[800px]       /* 手機最大寬度 */
          sm:max-w-[640px]    /* 平板 */
          lg:max-w-[1020px]    /* 桌機 */
          object-contain
        "
      />
    </div>

    <p className="mt-4 text-center text-sm text-neutral-500">
      實際上課使用之教練車款（示意）
    </p>
  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="text-center pt-6">
        <a
          href="/courses/road-driving"
          className="inline-block rounded-md bg-black px-8 py-3 text-white text-base font-medium hover:bg-gray-800 transition"
        >
          返回道路駕駛課程介紹
        </a>
      </section>
    </main>
  )
}
