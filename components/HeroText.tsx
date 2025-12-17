'use client'

import { motion } from 'framer-motion'

export default function HeroText() {
  return (
    <>
      <motion.h1
        className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        DriveMate 駕駛訓練中心
      </motion.h1>

      <motion.p
        className="mb-8 text-lg text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        DriveMate 專注「實戰型駕駛訓練」<br />
        從新手到進階，安全建立駕駛信心<br />
        台中｜全台 一對一道路駕駛 × 運動駕駛 × 賽道課程 × 教練培訓
      </motion.p>
    </>
  )
}
