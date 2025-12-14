// app/page.tsx
'use client';

import dynamic from 'next/dynamic';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import CTA from '@/components/sections/CTA';

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  ssr: false,
  loading: () => <div className="h-100" />,
});

const Features = dynamic(() => import('@/components/sections/Features'), {
  ssr: false,
  loading: () => <div className="h-75" />,
});

const Estimator = dynamic(() => import('@/components/sections/Estimator'), {
  ssr: false,
  loading: () => <div className="h-75" />,
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  ssr: false,
  loading: () => <div className="h-75" />,
});

const LiquidEther = dynamic(() => import('@/components/ui/LiquidEther'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther colors={['#0f172a', '#1e3a8a']} resolution={0.3} />
      </div>

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <TechStack />
        <Services />

        <Projects />
        <Features />
        <Estimator />
        <FAQ />

        <CTA />
        <Footer />
      </div>
    </main>
  );
}
