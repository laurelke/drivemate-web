'use client'

import { motion } from 'framer-motion'

export default function InstructorCarSection() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-2xl font-semibold text-center">
        「道路駕駛」教練車款
      </h2>

      <div className="rounded-xl border bg-white p-6">
        <div className="flex h-[360px] items-center justify-center overflow-hidden">
          <motion.img
            src="/images/instructor-car-1.png"
            alt="DriveMate 道路駕駛實際上課使用之教練車款（示意）"
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