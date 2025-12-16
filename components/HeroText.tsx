'use client'

import { motion } from 'framer-motion'

export default function HeroText() {
  return (
    <div className="text-center space-y-4">
      <motion.h1
        className="text-3xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        專業駕駛訓練，打造真正的駕駛實力
      </motion.h1>

      <motion.p
        className="text-gray-600 text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        道路駕駛・運動駕駛・賽道課程・教練培訓
      </motion.p>
    </div>
  )
}
