'use client'

import Image from 'next/image'
import React from 'react'
import { HeroCTA } from '@/components/ui/HeroCTA'
import BottomCTA from '@/components/BottomCTA'

export default function TrackDrivingClient() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* ================= Hero ================= */}
      <section className="relative h-[50vh] md:h-[72vh] w-full overflow-hidden">
        <Image
          src="/images/courses/track-driving-hero.jpg"
          alt="賽道駕駛訓練課程"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-bold md:text-5xl leading-tight">
              賽道駕駛訓練課程
            </h1>

            <p className="mt-6 text-lg text-neutral-200">
              賽道不是飆速場，而是最安全、最有效率的駕駛訓練環境。<br />
              在可控條件下，學會操控、理解車輛極限。
            </p>

            <div className="mt-10">
              <HeroCTA href="#pricing">查看課程內容</HeroCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 課程定位 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold text-center">
          賽道駕駛，不是為了更快，而是更懂控制
        </h2>

        <p className="mx-auto max-w-3xl text-center text-neutral-600 leading-relaxed">
          我們把賽道視為放大駕駛能力的訓練場，
          在沒有干擾的環境中修正錯誤操控習慣。
        </p>
      </section>
      {/* ================= 課程內容 ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-bold text-center">
          賽道駕駛訓練內容重點
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            '正確駕駛姿勢與視線控制',
            '煞車點與入彎節奏判斷',
            '油門、煞車與方向盤協調',
            '車輛動態與抓地力理解',
            '即時修正錯誤操控',
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-6 shadow">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Pricing ================= */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">賽道駕駛課程方案與費用</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold"> 進階｜操控理解</h3>
              <p className="text-3xl font-bold">NT$7,000</p>
              <ul className="mt-4 space-y-1 text-neutral-700">
                <li>• 2 節課程</li>
                <li>• 一對一賽道實地操控訓練</li>
          <li>• 煞車點、入彎與出彎節奏解析</li>
          <li>• 車輛動態與重心轉移理解</li>
          <li>• 即時回饋與修正駕駛動作</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">高階｜整合應用</h3>
              <p className="text-3xl font-bold">NT$14,000</p>
              <ul className="mt-4 space-y-1 text-neutral-700">
                <li>• 4 節課程</li>
                <li>• 個人化操控調整</li>
          <li>• 高速穩定性與極限控制練習</li>
          <li>• 賽道行車路線與節奏優化</li>
          <li>• 建立可長期複製的操控能力</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <BottomCTA
        title="想真正理解車輛，而不是盲目追求速度？"
        description="賽道駕駛是一場駕駛能力的校正過程。讓專業教練在安全環境中，帶你建立真正的操控與信心。"
        buttonText="立即預約賽道駕駛訓練"
        bgImage="/images/cta/track-driving.jpg"
        bgPosition="center 65%"
      />
    </main>
  )
}
