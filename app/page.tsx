// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

// --- IMPORT FITUR BARU ---
// Pastikan file ini sudah dibuat di folder components/sections

import Estimator from '@/components/sections/Estimator';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-blue-500/30">
      <Navbar />

      {/* Bagian Atas: Impresi Pertama */}
      <Hero />
      <TechStack />

      {/* Bagian Penawaran & Bukti */}
      <Services />
      <Projects />

      {/* Bagian Keunggulan & Harga */}
      <Features />

      {/* (BARU) Estimator: Biar user bisa iseng hitung budget sebelum kontak */}
      <Estimator />

      {/* (BARU) FAQ: Jawab keraguan terakhir sebelum mereka klik tombol kontak */}
      <FAQ />

      {/* Bagian Akhir: Ajakan Bertindak */}
      <CTA />
      <Footer />
    </main>
  );
}
