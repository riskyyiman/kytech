'use client';

import React from 'react';
import { Zap, Layout, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { icon: Zap, title: 'Kerja Sat-Set', desc: 'Kita pake teknologi terbaru, jadi projek lu kelar lebih cepet tanpa ngurangin kualitas.' },
            { icon: Layout, title: 'Siap Nampung Trafik', desc: 'Sistem yang kita bangun siap di-scale up kapan aja pas user lu mulai membludak.' },
            { icon: CheckCircle2, title: 'Disayang Google (SEO)', desc: 'Codingan rapi, loading cepet. Google seneng, website lu gampang naik ranking.' },
          ].map((feature, i) => (
            <FadeIn key={i} delay={i * 0.1} className="px-4 py-4 text-center md:text-left">
              <feature.icon className="w-10 h-10 text-blue-500 mb-4 mx-auto md:mx-0" />
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
