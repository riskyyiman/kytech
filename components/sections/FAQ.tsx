import React from 'react';

const faqs = [
  { q: 'Apakah admin fast respon?', a: '100% Fast Respon! Kami paham nunggu itu nggak enak. Tim kami standby buat bales chat kamu secepat kilat (Sat-Set) selama jam kerja.' },
  { q: 'Berapa lama proses pengerjaan website?', a: 'Tergantung kompleksitas fitur. Untuk Landing Page sederhana memakan waktu 3-5 hari, sedangkan sistem custom butuh 2-4 minggu.' },
  { q: 'Apakah dapat domain dan hosting gratis?', a: 'Yes! Untuk paket tertentu kami sudah bundle dengan domain .com dan cloud hosting gratis setahun.' },
  { q: 'Apakah website-nya aman dan mobile-friendly?', a: 'Pasti. Kami menggunakan standar keamanan SSL/HTTPS dan desain responsif untuk semua perangkat.' },
];

export default function FAQ() {
  return (
    // UBAH: Pastikan background gelap
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400 mb-6">
            <span>❓ Tanya Jawab</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Sering Ditanyakan</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              // UBAH: Style glassmorphism untuk setiap item FAQ
              className="group border border-white/10 bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/30 open:bg-white/10 open:border-blue-500/50"
            >
              <summary className="flex justify-between items-center p-5 cursor-pointer list-none text-slate-200 font-medium select-none">
                <span>{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
