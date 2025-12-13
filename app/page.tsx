"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

export default function DriveMateWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-xl font-bold">DriveMate</div>
          <nav className="space-x-4">
            <a href="#courses" className="hover:text-blue-600">課程</a>
            <a href="#pricing" className="hover:text-blue-600">價格</a>
            <a href="#contact" className="hover:text-blue-600">聯絡</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-100 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            DriveMate 道路駕駛課程
          </motion.h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            從新手到進階操駕，陪你安全、自信地上路
          </p>
          <Button className="mt-6">立即預約試駕課程</Button>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">課程內容</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["新手上路", "進階操駕", "客製化一對一"].map((title) => (
              <Card key={title} className="rounded-2xl shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600">實際道路教學，提升真實駕駛能力</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">課程價格</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">基礎課程</h3>
                <p className="text-3xl font-bold my-4">NT$3,000</p>
                <Button>立即報名</Button>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow border-2 border-blue-500">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">進階課程</h3>
                <p className="text-3xl font-bold my-4">NT$5,000</p>
                <Button>最受歡迎</Button>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl">一對一</h3>
                <p className="text-3xl font-bold my-4">NT$8,000</p>
                <Button>客製詢問</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">立即聯絡我們</h2>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://www.instagram.com/drivemate.tw/" target="_blank">
              <Button variant="outline"><Instagram className="mr-2" /> Instagram</Button>
            </a>
            <a href="https://lin.ee/J22IVRg" target="_blank">
              <Button><MessageCircle className="mr-2" /> 加入 LINE</Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-6 text-center">
        © 2025 DriveMate 道路駕駛課程
      </footer>
    </div>
  );
}
