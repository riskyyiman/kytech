import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-950 border-t border-white/10 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Version 1.0</p>
    </footer>
  );
}
