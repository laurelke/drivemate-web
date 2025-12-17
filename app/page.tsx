import type { Metadata } from 'next'
import HomePage from '../components/HomeClient'

export const metadata: Metadata = {
  title: 'DriveMate駕駛訓練中心｜道路駕駛・運動駕駛・賽道課程・教練培訓',
  description:
    'DriveMate 駕駛訓練中心提供專業道路駕駛、運動駕駛與賽道課程，從新手上路到教練培訓，一對一實戰教學，讓你安全、自信、真正掌控每一次駕駛。',
  openGraph: {
    title: 'DriveMate 駕駛訓練中心｜專業駕駛訓練',
    description:
      '專業道路駕駛、運動駕駛與賽道課程，從新手到教練培訓，DriveMate 陪你建立安全與自信的駕駛實力。',
  },
}

export default function Page() {
  return <HomePage />
}
