export const metadata = {
  title: '教練車加購說明｜道路駕駛課程使用教練車是否適合你？',
  description:
    'DriveMate 道路駕駛課程提供教練車加購選項，協助新手或久未開車的學員，在較低心理壓力的情況下進行道路駕駛學習，了解什麼情況適合選擇教練車。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/road-driving/instructor-car',
  },
}

export default function InstructorCarPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-12">
      {/* ================= H1 ================= */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          教練車加購說明
        </h1>
        <p className="text-lg text-muted-foreground">
          教練車是什麼？什麼情況下建議選擇？這一頁幫你判斷是否適合使用教練車進行道路駕駛訓練。
        </p>
      </section>

      {/* ================= 為什麼有教練車 ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          為什麼會有「教練車」這個選項？
        </h2>
        <p>
          DriveMate 的道路駕駛課程原則上可使用學員自備車輛上課，但我們也理解，
          對於部分學員而言，直接使用自己的車上路，可能會因為緊張、擔心車況或操作不熟而影響學習品質。
        </p>
        <p>
          因此我們提供「教練車加購」選項，讓學員能在較低心理負擔的狀態下，
          專注於道路觀察、操作節奏與駕駛判斷本身。
        </p>
      </section>

      {/* ================= 什麼是教練車 ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">什麼是教練車？</h2>
        <p>
          教練車為 DriveMate 提供、專門用於教學的車輛，車況穩定、教練熟悉，
          適合作為道路駕駛訓練的學習工具。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>由教練熟悉並長期使用的教學車輛</li>
          <li>不需擔心個人車輛刮傷或耗損</li>
          <li>學習過程更容易聚焦在駕駛技巧與判斷</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          ※ 教練車未配置副駕煞車系統，課程仍以學員實際操作為主，教練將以口頭指導與事前路況規劃進行教學。
        </p>
      </section>

      {/* ================= 適合誰 ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          哪些情況建議考慮使用教練車？
        </h2>
        <p>如果你符合以下任一狀況，教練車可能會是較適合的選擇：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>很久沒有實際上路，對道路駕駛感到緊張</li>
          <li>對自己的車輛操作還沒有信心</li>
          <li>擔心學習過程中影響或損耗自備車輛</li>
          <li>第一次進行道路駕駛訓練，希望先降低心理壓力</li>
        </ul>
        <p>
          許多學員會選擇在初期使用教練車建立信心，
          後續再轉換為自備車進行更貼近實際生活的駕駛練習。
        </p>
      </section>

      {/* ================= 比較表 ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          使用教練車 vs 使用自備車
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 border">項目</th>
                <th className="p-3 border">教練車</th>
                <th className="p-3 border">自備車</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">心理壓力</td>
                <td className="p-3 border">較低</td>
                <td className="p-3 border">視個人狀況</td>
              </tr>
              <tr>
                <td className="p-3 border">車輛熟悉度</td>
                <td className="p-3 border">中</td>
                <td className="p-3 border">高</td>
              </tr>
              <tr>
                <td className="p-3 border">是否擔心車況</td>
                <td className="p-3 border">較少</td>
                <td className="p-3 border">可能較多</td>
              </tr>
              <tr>
                <td className="p-3 border">適合對象</td>
                <td className="p-3 border">新手、久未開車者</td>
                <td className="p-3 border">已有上路經驗者</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= 費用說明 ================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          教練車加購費用說明
        </h2>
        <p>
          教練車為道路駕駛課程的加購項目，費用依課程堂數計算。
          是否加購完全依學員個人需求決定，教練也會在課前協助評估是否適合使用。
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="pt-6">
        <a
          href="/courses/road-driving"
          className="inline-block rounded-md bg-black px-6 py-3 text-white text-base font-medium hover:bg-gray-800 transition"
        >
          返回道路駕駛課程介紹
        </a>
      </section>
    </main>
  )
}
