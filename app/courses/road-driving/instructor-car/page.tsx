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
     <>
       {/* ================= Hero（全寬） ================= */}
      <section className="relative w-full">
        <div className="relative h-[520px] md:h-[520px]">
          <img
            src="/images/hero-instructor-car.png"
            alt="DriveMate hero-instructor-car"
            className="h-full w-full object-cover object-[55%_50%]"/>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      </section>
    <main className="mx-auto max-w-4xl px-6 py-14 space-y-16">
      {/* ================= 標題 ================= */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          教練車加購方案
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
  image="/images/instructor-car-1.png"
  imageAlt="DriveMate 道路駕駛課程使用之教練車款（Toyota Vios）"
  carName="Toyota Vios"
  tags={['燃油', '前輪驅動', '自動排檔']}
  stats={[
    { value: '11.4 s', label: '0 - 100 km/h 加速' },
    { value: '106 PS', label: '動力' },
    { value: '170 km/h', label: '極速' },
  ]}
  disclaimer="實際車輛配備與規格依當日安排之車款為準。"
/>

      {/* ================= 運動駕駛 教練車 ================= */}
<InstructorCarSection
  title="「運動駕駛」教練車加購方案"
  price="單堂 / 3 小時 加購 NT$5,000"
  image="/images/instructor-car-sport.png"
  imageAlt="DriveMate 運動駕駛課程使用之教練車款（Mazda MX-5）"
  carName="Mazda MX-5"
  tags={['燃油', '後輪驅動', '自動/手動排檔']}
  stats={[
    { value: '6.5 s', label: '0 - 100 km/h 加速' },
    { value: '184 PS', label: '動力' },
    { value: '220 km/h', label: '極速' },
  ]}
  disclaimer="實際車輛配備與規格依當日安排之車款為準。"
/>

{/* ================= 賽道駕駛 教練車 ================= */}
<InstructorCarSection
  title="「賽道駕駛」教練車加購方案"
  price="單堂 /4節 加購 NT$30,000"
  image="/images/instructor-car-track.png"
  imageAlt="DriveMate 賽道駕駛課程使用之教練車款（Porsche Cayman GT4）"
  carName="Porsche Cayman GT4"
  tags={['燃油', '後輪驅動', 'PDK 雙離合']}
  stats={[
    { value: '3.9 s', label: '0 - 100 km/h 加速' },
    { value: '420 PS', label: '動力' },
    { value: '304 km/h', label: '極速' },
  ]}
  disclaimer="實際車輛配備與規格依當日安排之車款為準。"
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
  </>
  )
}