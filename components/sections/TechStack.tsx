// components/sections/TechStack.tsx
'use client'; // <--- TAMBAHKAN INI DI BARIS PALING ATAS

import React from 'react';

export default function TechStack() {
  const stacks = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Python', 'Flutter', 'AWS', 'Figma', 'Node.js'];

  return (
    <div className="py-10 bg-slate-950 border-y border-white/5 overflow-hidden flex">
      <div className="flex gap-12 animate-marquee whitespace-nowrap px-6">
        {[...stacks, ...stacks, ...stacks].map((stack, i) => (
          <span key={i} className="text-xl font-semibold text-slate-500 hover:text-white transition cursor-default">
            {stack}
          </span>
        ))}
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
