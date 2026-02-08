'use client'

import { motion } from 'framer-motion'

type InstructorCarSectionProps = {
  title: string
  subtitle?: string
  price?: string
  image: string
  imageAlt: string
}

export default function InstructorCarSection({
  title,
  price,
  image,
  imageAlt,
}: InstructorCarSectionProps) {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* ===== 標題 ===== */}
      <h2 className="text-2xl font-semibold text-center">
        {title}
      </h2>

      {/* ===== 價格（保留 page.tsx 傳入的 price） ===== */}
      {price && (
        <p className="text-center text-lg font-medium">
          {price}
        </p>
      )}

      {/* ===== 車輛卡片 ===== */}
      <div className="rounded-2xl border bg-white p-6 md:p-8">
        {/* 車輛圖片 */}
        <div className="flex h-[280px] items-center justify-center overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            className="
              mx-auto
              h-auto
              w-full
              max-w-[720px]
              max-h-[280px]
              object-contain
            "
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* 車輛規格預留區 */}
        <div className="mt-6 border-t pt-6 text-center text-sm text-neutral-400">
          車輛規格資訊將於此顯示
        </div>
      </div>
    </motion.section>
  )
}