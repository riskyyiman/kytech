'use client';

import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react'; // Tambah icon ArrowRight biar manis
import FadeIn from '@/components/ui/FadeIn';

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-slate-950">
      {/* Container Utama */}
      <FadeIn className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl shadow-indigo-500/20">
        {/* 1. Background Gradient yang lebih kaya warna (Deep Cosmic) */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>

        {/* 2. Noise Overlay (Tetap dipertahankan biar ada teksturnya) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

        {/* 3. Dekorasi Glowing Blobs (Biar background gak sepi) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-40 mix-blend-screen"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-40 mix-blend-screen"></div>

        {/* 4. Konten */}
        <div className="relative z-10 px-6 py-20 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Jangan Cuma Disimpen <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">di Kepala!</span>
          </h2>

          <p className="text-blue-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Sayang banget ide brilian kalau gak dieksekusi. Yuk ngobrol santai dulu, curhatin konsepmu, siapa tau kita jodoh buat bangun ini bareng.
          </p>

          {/* Button yang lebih "Clickable" */}
          <a
            href="https://wa.me/62882003600965"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-950 font-bold rounded-full text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            Konsultasi Gratis via WA
            <ArrowRight size={18} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
          </a>

          <p className="mt-6 text-sm text-indigo-200/60 font-medium">*Tenang, tanya-tanya doang gratis kok.</p>
        </div>
      </FadeIn>
    </section>
  );
}
