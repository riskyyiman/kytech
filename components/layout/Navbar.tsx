'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icon untuk mobile

const navItems = [
  { name: 'Tentang', link: '#about' },
  { name: 'Layanan', link: '#services' },
  { name: 'Karya Kita', link: '#projects' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu mobile

  // Logic Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = navItems.map((item) => item.link.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            current = section;
          }
        }
      }
      if (current) setActiveSection('#' + current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Container utama
    <nav className="fixed top-4 inset-x-0 mx-auto w-[90%] md:max-w-fit z-50">
      {/* 1. Bar Utama (Pill) */}
      <div className="relative flex items-center justify-between px-4 py-3 md:px-2 md:py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 z-50">
        {/* Logo */}
        <Link href="/" className="md:pl-4 md:pr-8 text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          kyTech
        </Link>

        {/* --- DESKTOP MENU (Hidden di Mobile) --- */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.link;
            return (
              <Link
                key={item.name}
                href={item.link}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveSection(item.link)}
              >
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="hoverBackground"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
                <span className={`relative z-10 transition-colors duration-200 ${isActive || hoveredIndex === index ? 'text-white' : 'text-slate-400'}`}>{item.name}</span>
                {isActive && <motion.span layoutId="activeDot" className="absolute -bottom-1 left-0 right-0 h-1 w-1 mx-auto bg-blue-500 rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
              </Link>
            );
          })}
        </div>

        {/* CTA Button (Desktop Only) */}
        <a href="https://wa.me/62882003600965" className="hidden md:block ml-4 px-5 py-2 mr-1 bg-white text-black text-xs font-bold rounded-full hover:bg-slate-200 hover:scale-105 transition transform active:scale-95">
          Ngobrol Yuk
        </a>

        {/* --- MOBILE TOGGLE BUTTON (Visible di Mobile) --- */}
        <button className="md:hidden text-slate-300 hover:text-white p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 w-full bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl md:hidden flex flex-col gap-2 overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => {
                    setActiveSection(item.link);
                    setIsMobileMenuOpen(false); // Tutup menu pas diklik
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="h-px bg-white/10 my-2" />

            <a href="https://wa.me/628123456789" className="flex justify-center w-full px-5 py-3 bg-white text-black text-sm font-bold rounded-xl active:scale-95 transition">
              Ngobrol Yuk (WA)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
