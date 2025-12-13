'use client';

import React from 'react';
import { Code2, Smartphone, Palette, Server } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Apa Aja Yang Kita Bisa?</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-white/10 hover:border-blue-500/50 transition group">
            <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition">
              <Code2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Bikin Website Custom</h3>
            <p className="text-slate-400">Bukan cuma template, kita bangun web dari nol pake Next.js. Dijamin ngebut, SEO mantap, dan siap nampung jutaan visitor.</p>
          </FadeIn>

          <FadeIn delay={0.1} className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition group">
            <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition">
              <Smartphone size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Aplikasi HP</h3>
            <p className="text-slate-400">Mau bikin apps buat Android & iOS? Bisa banget. Performanya mulus kayak aplikasi native.</p>
          </FadeIn>

          <FadeIn delay={0.2} className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-pink-500/50 transition group">
            <div className="h-12 w-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition">
              <Palette size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Desain UI/UX</h3>
            <p className="text-slate-400">Tampilan web/app gak bakal ngebosenin. Kita desain biar user betah lama-lama scrolling.</p>
          </FadeIn>

          <FadeIn delay={0.3} className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 border border-white/10 hover:border-green-500/50 transition group">
            <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition">
              <Server size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Beresin Server & Maintenance</h3>
            <p className="text-slate-400">Lu fokus jualan aja, urusan server down, error, atau update sistem biar tim kita yang handle 24 jam.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
