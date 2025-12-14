'use client';

import React from 'react';
import { Zap, Layout, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Features() {
  return (
    // UBAH: Pakai bg-slate-950 solid dan tambah border-t biar rapi
    <section className="py-24 bg-transparent border-t border-white/5 px-6 relative overflow-hidden">
      {/* (Opsional) Efek Glow Biru di belakang biar gak mati banget */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            {
              icon: Zap,
              title: 'Kerja Sat-Set',
              desc: 'Kita pake teknologi terbaru, jadi projek lu kelar lebih cepet tanpa ngurangin kualitas.',
            },
            {
              icon: Layout,
              title: 'Siap Nampung Trafik',
              desc: 'Sistem yang kita bangun siap di-scale up kapan aja pas user lu mulai membludak.',
            },
            {
              icon: CheckCircle2,
              title: 'Disayang Google (SEO)',
              desc: 'Codingan rapi, loading cepet. Google seneng, website lu gampang naik ranking.',
            },
          ].map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1} className="px-4 py-4 text-center md:text-left group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-blue-500 mb-6 mx-auto md:mx-0 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-500/10 group-hover:border-blue-500/20">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
