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
  onClick={(e) => {
    e.preventDefault();

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-17613789230/GT-NMCJ7CM8',
        event_callback: () => {
          window.open('https://lin.ee/J22IVRg', '_blank');
        },
      });

      console.log('[Ads Conversion] CTA fired');
    } else {
      window.open('https://lin.ee/J22IVRg', '_blank');
    }

    // fallback（避免 callback 沒觸發）
    setTimeout(() => {
      window.open('https://lin.ee/J22IVRg', '_blank');
    }, 700);
  }}
  className="block bg-black py-4 text-center text-lg font-semibold text-white"
>
  立即預約
</a>
    </div>
  )
}
