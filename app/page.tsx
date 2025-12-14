// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

// Import fitur baru
import Estimator from '@/components/sections/Estimator';
import FAQ from '@/components/sections/FAQ';

// 1. Import komponen Background (sesuaikan path jika berbeda)
import LiquidEther from '@/components/ui/LiquidEther';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 selection:bg-blue-500/30 overflow-x-hidden">
      {/* --- LAYER 1: BACKGROUND (Paling Belakang) --- */}
      {/* 'fixed' agar animasi tetap diam di layar saat user scroll ke bawah */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <LiquidEther
          // Opsi: Sesuaikan warna dengan tema gelap KyTech
          colors={['#0f172a', '#1e3a8a', '#172554']}
          resolution={0.5} // Turunkan ke 0.3 atau 0.2 jika animasi terasa berat
        />
      </div>

      {/* --- LAYER 2: KONTEN (Paling Depan) --- */}
      {/* 'relative z-10' wajib ada agar konten berada DI ATAS background */}
      <div className="relative z-10">
        <Navbar />

        {/* Bagian Atas: Impresi Pertama */}
        <Hero />
        <TechStack />

        {/* Bagian Penawaran & Bukti */}
        <Services />
        <Projects />

        {/* Bagian Keunggulan & Harga */}
        <Features />

        {/* Estimator: Biar user bisa iseng hitung budget sebelum kontak */}
        <Estimator />

        {/* FAQ: Jawab keraguan terakhir sebelum mereka klik tombol kontak */}
        <FAQ />

        {/* Bagian Akhir: Ajakan Bertindak */}
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
