'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

export default function Projects() {
  const projects = [
    {
      title: 'UrbanKicks Store',
      category: 'E-Commerce Website',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
      tags: ['Next.js', 'Midtrans Payment'],
    },
    {
      title: 'GoTravel Booking',
      category: 'Mobile App (Android/iOS)',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
      tags: ['Flutter', 'Google Maps API'],
    },
    {
      title: 'Coffee POS System',
      category: 'SaaS / Kasir Digital',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
      tags: ['React Dashboard', 'Real-time DB'],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Projek Pilihan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Yang Bikin Klien Happy.</span>
              </h2>
              <p className="text-slate-400 max-w-xl text-lg">Bukan cuma gambar doang, tapi sistem yang beneran jalan lancar dan bantu bisnis mereka cuan.</p>
            </div>

            <button className="group flex text-white font-semibold items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              Lihat Portfolio Lengkap
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="group cursor-pointer">
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 border border-white/10 shadow-2xl bg-slate-900">
                {/* GANTI IMG BIASA JADI NEXT/IMAGE 
                   - fill: biar gambaruhin container
                   - sizes: biar browser download ukuran yg pas (hemat kuota)
                   - priority: buat gambar pertama biar loading cepet
                */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0} // ✅ hanya gambar pertama
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <span className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm shadow-lg hover:bg-blue-50 transition">Lihat Detail Project</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>

              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-slate-400">{project.category}</span>
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-600"></span>

                <div className="flex gap-2">
                  {project.tags.map((tag, t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider font-semibold bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
