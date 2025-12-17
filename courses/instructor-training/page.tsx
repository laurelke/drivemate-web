import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '駕駛教練培訓課程｜DriveMate 專業道路駕駛教學',
  description:
    'DriveMate 教練培訓課程，專為想成為專業駕駛教練的人設計，結合理論、實務與教學方法，建立完整道路駕駛教學能力。',
  alternates: {
    canonical: 'https://drivemate-tw.com/courses/instructor-training',
  },
  openGraph: {
    title: '駕駛教練培訓課程｜DriveMate',
    description:
      '從實戰駕駛到教學能力養成，DriveMate 教練培訓課程，打造專業道路駕駛教練。',
    url: 'https://drivemate-tw.com/courses/instructor-training',
    siteName: 'DriveMate 駕駛訓練中心',
    type: 'website',
  },
}

export default function InstructorTrainingPage() {
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '道路駕駛教練培訓課程',
    description:
      '專為培養專業道路駕駛教練所設計的完整培訓課程，涵蓋駕駛技術、教學方法與安全觀念。',
    provider: {
      '@type': 'Organization',
      name: 'DriveMate 駕駛訓練中心',
      url: 'https://drivemate-tw.com',
    },
    educationalCredentialAwarded: 'DriveMate 教練培訓結業證明',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      location: {
        '@type': 'Place',
        name: '台中',
      },
      duration: 'P3M',
    },
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <h1 className="mb-6 text-3xl font-bold">道路駕駛教練培訓課程</h1>

      <p className="mb-10 text-lg text-gray-700">
        本課程專為希望投入專業駕駛教學的人設計，從道路駕駛實力、教學結構、學員溝通到安全控管，
        建立完整的教練養成體系。
      </p>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">課程適合對象</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>希望成為專業道路駕駛教練者</li>
          <li>已有駕駛經驗，想轉為教學工作者</li>
          <li>欲建立系統化駕駛教學能力的從業人員</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">培訓內容重點</h2>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>道路駕駛安全與進階操作技巧</li>
          <li>駕駛教學流程與課程設計</li>
          <li>學員心理與溝通技巧</li>
          <li>實際教學演練與回饋</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">課程資訊</h2>
        <ul className="space-y-2 text-gray-700">
          <li>📍 上課地點：台中</li>
          <li>🕒 培訓週期：3–6 個月</li>
          <li>👤 教學方式：小班制 / 實地教學</li>
        </ul>
      </section>

      <section className="rounded-xl bg-gray-100 p-8">
        <h2 className="mb-4 text-2xl font-semibold">立即諮詢報名</h2>
        <p className="mb-6 text-gray-700">
          若你希望將駕駛技術轉化為專業教學能力，歡迎與我們聯繫了解詳細培訓內容。
        </p>
        <a
          href="https://lin.ee/J22IVRg"
          className="inline-block rounded-full bg-black px-8 py-3 text-white"
        >
          LINE 諮詢
        </a>
      </section>
    </main>
  )
}
