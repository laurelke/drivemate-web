'use client'

import { motion } from 'framer-motion'

type Tag = string

type StatItem = {
  value: string
  label: string
}

type InstructorCarSectionProps = {
  title: string
  price?: string
  image: string
  imageAlt: string

  carName: string
  tags: Tag[]
  stats: StatItem[]
}

export default function InstructorCarSection({
  title,
  price,
  image,
  imageAlt,
  carName,
  tags,
  stats,
}: InstructorCarSectionProps) {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* 方案標題 */}
      <h2 className="text-2xl font-semibold text-center">
        {title}
      </h2>

      {/* 價格 */}
      {price && (
        <p className="text-center text-lg font-medium">
          {price}
        </p>
      )}

      {/* ===== Porsche 車輛卡片 ===== */}
      <div className="rounded-2xl border bg-white overflow-hidden">
        {/* 車輛圖片 */}
        <div className="flex h-[300px] items-center justify-center bg-neutral-50">
          <motion.img
            src={image}
            alt={imageAlt}
            className="
              mx-auto
              h-auto
              w-full
              max-w-[760px]
              max-h-[300px]
              object-contain
            "
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* 內容區 */}
        <div className="p-6 md:p-8 space-y-6">
          {/* 車名 */}
          <h3 className="text-2xl font-semibold">
            {carName}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="
                  rounded-md
                  bg-neutral-100
                  px-3
                  py-1
                  text-sm
                  text-neutral-700
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 數據規格 */}
          <div className="space-y-5">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-semibold">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}