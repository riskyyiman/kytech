// app/page.tsx
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/sections/TechStack';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Projects />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
