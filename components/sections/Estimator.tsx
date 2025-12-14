'use client';
import React, { useState } from 'react';
import { Plus, X, Trash2 } from 'lucide-react'; // Pastikan install lucide-react jika belum

export default function Estimator() {
  const [total, setTotal] = useState(0);
  const [features, setFeatures] = useState<string[]>([]);

  // State untuk fitur custom (ketikan sendiri)
  const [customInput, setCustomInput] = useState('');
  const [customFeatures, setCustomFeatures] = useState<string[]>([]);

  const items = [
    { name: 'Landing Page', price: 250000, desc: 'One-page promo' },
    { name: 'Login System', price: 300000, desc: 'Auth user aman' },
    { name: 'Payment Gateway', price: 750000, desc: 'Bayar otomatis' },
    { name: 'CMS / Admin', price: 1500000, desc: 'Kelola konten' },
    { name: 'SEO Basic', price: 1000000, desc: 'Optimasi Google' },
    { name: 'Dark Mode', price: 500000, desc: 'Tema gelap/terang' },
  ];

  const handleToggle = (price: number, name: string) => {
    if (features.includes(name)) {
      setTotal(total - price);
      setFeatures(features.filter((f) => f !== name));
    } else {
      setTotal(total + price);
      setFeatures([...features, name]);
    }
  };

  // Handler tambah custom feature
  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      setCustomFeatures([...customFeatures, customInput.trim()]);
      setCustomInput('');
    }
  };

  // Handler hapus custom feature
  const removeCustom = (index: number) => {
    const newCustoms = [...customFeatures];
    newCustoms.splice(index, 1);
    setCustomFeatures(newCustoms);
  };

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
            <span>✨ Simulasi Biaya</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hitung Estimasi Proyekmu</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Pilih fitur yang tersedia atau tulis kebutuhan spesifikmu sendiri.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bagian Kiri: Pilihan & Input */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. Grid Pilihan Pre-set */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleToggle(item.price, item.name)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 group relative overflow-hidden ${
                    features.includes(item.name) ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <div className={`font-bold text-lg ${features.includes(item.name) ? 'text-blue-400' : 'text-slate-200'}`}>{item.name}</div>
                    {features.includes(item.name) && (
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-slate-400 mb-3 relative z-10">{item.desc}</div>
                  <div className={`font-mono text-sm font-medium relative z-10 ${features.includes(item.name) ? 'text-white' : 'text-slate-500'}`}>Rp {item.price.toLocaleString('id-ID')}</div>
                </button>
              ))}
            </div>

            {/* 2. Form Input Custom Feature (BARU) */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02]">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
                Punya Kebutuhan Lain?
              </h3>
              <form onSubmit={handleAddCustom} className="flex gap-3">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Misal: Integrasi AI, Chatbot WA, Sistem Kasir..."
                  className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span className="hidden sm:inline">Tambah</span>
                </button>
              </form>
            </div>
          </div>

          {/* Bagian Kanan: Sticky Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md shadow-2xl">
              <h3 className="text-slate-400 text-sm font-medium mb-2">Estimasi Total</h3>
              <div className="text-4xl font-bold text-white mb-1">
                Rp {total.toLocaleString('id-ID')}
                {customFeatures.length > 0 && <span className="text-lg text-blue-400 font-normal">+</span>}
              </div>
              <p className="text-xs text-slate-500 mb-6 border-b border-white/10 pb-4">*Harga final setelah diskusi teknis.</p>

              {/* List Fitur Terpilih */}
              <div className="space-y-3 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {/* List item dari tombol */}
                {features.map((f) => (
                  <div key={f} className="flex items-center justify-between text-sm text-slate-300 group">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                      {f}
                    </div>
                  </div>
                ))}

                {/* List item custom (BARU) */}
                {customFeatures.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm text-white bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                      <span>{f}</span>
                    </div>
                    <button onClick={() => removeCustom(idx)} className="text-slate-500 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {features.length === 0 && customFeatures.length === 0 && <p className="text-sm text-slate-600 italic text-center py-4">Belum ada fitur dipilih...</p>}
              </div>

              {/* Tombol WhatsApp */}
              <button
                onClick={() => {
                  const allFeatures = [...features, ...customFeatures.map((c) => `${c} (Custom)`)];
                  const message = `Halo KyTech, saya mau konsultasi web dengan fitur:\n- ${allFeatures.join('\n- ')}\n\nEstimasi Sementara: Rp ${total.toLocaleString('id-ID')} ++`;
                  window.open(`https://wa.me/62882003600965?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full py-4 px-6 bg-white hover:bg-slate-200 text-slate-950 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>🚀 Konsultasi via WA</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
