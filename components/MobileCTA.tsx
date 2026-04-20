'use client'

export default function MobileCTA() {
  const BOOKING_URL = 'https://lin.ee/J22IVRg'

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'cta_click_mobile', {
        event_category: 'engagement',
        event_label: 'mobile_bottom_cta',
        value: 1,
      })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full md:hidden">
      <a
  href="https://lin.ee/J22IVRg"
  target="_blank"
  onClick={(e) => {
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-17613789230/GT-NMCJ7CM8',
        });
        console.log('[Ads Conversion] CTA fired');
      } else {
        console.warn('gtag not ready');
      }
    }

    // 👉 延遲一點點，確保 request 送出
    setTimeout(() => {
      window.open('https://lin.ee/J22IVRg', '_blank');
    }, 300);

    // 👉 阻止預設行為（避免搶跑）
    e.preventDefault();
  }}
  className="block bg-black py-4 text-center text-lg font-semibold text-white"
>
  立即預約
</a>
    </div>
  )
}
