'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Lagi open slot projek nih!
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Wujudkan Ide Gilamu Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Aplikasi Beneran.</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">Kita bantuin bikin website & aplikasi mobile yang gak cuma canggih, tapi juga enak dipake. Gak pake ribet, sat-set, langsung jadi.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25">
              Gas Mulai Projek <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-xl transition">Lihat Hasilnya Dulu</button>
          </div>
        </FadeIn>

        {/* Bagian Visual/Gambar tetap sama kodenya */}
        <FadeIn delay={0.2} className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-4 shadow-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-10 left-10 right-10 bottom-0 bg-slate-950 rounded-t-2xl border-t border-x border-white/10 p-6 shadow-2xl transition-transform duration-500 group-hover:-translate-y-4">
              <div className="flex gap-4 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="space-y-4">
                <div className="h-32 w-full bg-white/5 rounded-lg animate-pulse" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 w-full bg-white/5 rounded-lg" />
                  <div className="h-20 w-full bg-white/5 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
