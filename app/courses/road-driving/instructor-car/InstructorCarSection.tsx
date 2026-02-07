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
  subtitle,
  price,
  image,
  imageAlt,
}: InstructorCarSectionProps) {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-semibold text-center">{title}</h2>

      {subtitle && (
        <p className="text-center text-neutral-600">{subtitle}</p>
      )}

      {price && (
        <p className="text-center text-lg font-medium">{price}</p>
      )}

      <div className="rounded-xl border bg-white p-6">
        <div className="flex h-[360px] items-center justify-center overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            className="
              mx-auto
              w-full
              max-w-[600px]
              sm:max-w-[640px]
              lg:max-w-[820px]
              object-contain
            "
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        <p className="mt-4 text-center text-sm text-neutral-500">
          實際上課使用之教練車款（示意）
        </p>
      </div>
    </motion.section>
  )
}