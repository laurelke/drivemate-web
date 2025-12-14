'use client'

export default function MobileCTA() {
  const BOOKING_URL = 'https://lin.ee/J22IVRg'

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
      <a
        href={BOOKING_URL}
        target="_blank"
        className="block bg-black py-4 text-center text-lg font-semibold text-white"
      >
        立即預約
      </a>
    </div>
  )
}
