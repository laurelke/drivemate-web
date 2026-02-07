import InstructorCarSection from './InstructorCarSection'

export const metadata = {
  title: '教練車加購方案｜道路駕駛課程',
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
          依您的練習目標，選擇最適合的教練車方案
        </p>
      </section>

      {/* ================= 價格方案 ================= */}
      <section className="grid gap-6 md:grid-cols-3 items-stretch">
        {/* 單堂 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
          <h2 className="mb-1 text-xl font-semibold">
            能力評估＋關鍵矯正
          </h2>
          <p className="mb-4 text-sm text-neutral-500">
            彈性選擇｜適合短期體驗
          </p>

          <div className="mb-6">
            <span className="text-3xl font-bold">NT$1,000</span>
            <span className="ml-1 text-sm text-neutral-500">／堂</span>
          </div>
        </div>

        {/* 14 天方案 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
          <h2 className="mb-1 text-xl font-semibold">
            14 天獨立上路成果計畫
          </h2>
          <p className="mb-4 text-sm text-neutral-500">
            熱門方案｜建立基本上路能力
          </p>

          <div className="mb-4">
            <span className="text-3xl font-bold">NT$3,000</span>
            <span className="ml-1 text-sm text-neutral-500">／ 4 堂</span>
          </div>

          <p className="text-sm text-neutral-500">
            買 3 堂送 1 堂（共 4 堂教練車練習）
          </p>
        </div>

        {/* 21 天方案 */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
          <h2 className="mb-1 text-xl font-semibold">
            21 天通勤駕駛穩定方案
          </h2>
          <p className="mb-4 text-sm text-neutral-500">
            進階成果型方案
          </p>

          <div className="mb-4">
            <span className="text-3xl font-bold">NT$5,000</span>
            <span className="ml-1 text-sm text-neutral-500">／ 8 堂</span>
          </div>

          <p className="text-sm text-neutral-500">
            買 5 堂送 3 堂（共 8 堂教練車練習）
          </p>
        </div>
      </section>

      {/* ================= 教練車款（動畫在 Client Component） ================= */}
      <InstructorCarSection
  title="「道路駕駛」教練車加購方案"
  subtitle="奠定基礎・獨立、穩定上路"
  price=""
  image="/images/instructor-car-1.png"
  imageAlt="DriveMate 道路駕駛課程使用之教練車款（示意）"
/>

      {/* ================= 運動駕駛 教練車 ================= */}
<InstructorCarSection
  title="「運動駕駛」教練車加購方案"
  subtitle="彎道操作・動態控制・操駕體驗"
  price="單堂加購 NT$25,000"
  image="/images/instructor-car-sport.png"
  imageAlt="DriveMate 運動駕駛課程使用之教練車款（示意）"
/>

{/* ================= 賽道駕駛 教練車 ================= */}
<InstructorCarSection
  title="「賽道駕駛」教練車加購方案"
  subtitle="賽道體驗・制動點與路線學習"
  price="單堂加購 NT$30,000"
  image="/images/instructor-car-track.png"
  imageAlt="DriveMate 賽道駕駛課程使用之教練車款（示意）"
/>

      {/* ================= CTA ================= */}
      <section className="text-center pt-6">
        <a
          href="https://drivemate-tw.com"
          className="inline-block rounded-md bg-black px-8 py-3 text-white text-base font-medium hover:bg-gray-800 transition"
        >
          返回首頁
        </a>
      </section>
    </main>
  )
}