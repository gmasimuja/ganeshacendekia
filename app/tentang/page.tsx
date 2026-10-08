'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function TentangKami() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 text-slate-900 scroll-smooth overflow-x-hidden">
      
      {/* 1. NAVIGATION (Sama persis dengan Home) */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-[100] shadow-sm border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <img src="/logo-gc.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <a href="/" className="text-xl md:text-2xl font-bold tracking-tight text-[#2F80ED]">
            Ganesha<span className="text-slate-800">Cendekia</span>
          </a> 
        </div>

        {/* Desktop Menu - Link diarahkan ke ID di Home menggunakan /#id */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="/" className="hover:text-[#2F80ED] transition">Beranda</a>
          <a href="/#program" className="hover:text-[#2F80ED] transition">Program</a>
          <a href="/#tutors" className="hover:text-[#2F80ED] transition">Tutor</a>
          <a href="/daftar" className="bg-[#2F80ED] text-white px-7 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95 text-center">
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#2F80ED] text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col space-y-5 md:hidden border-t"
            >
              <a href="/" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Beranda</a>
              <a href="/#program" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Program</a>
              <a href="/#tutors" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Tutor</a>
              <a href="/daftar" className="bg-[#2F80ED] text-white px-6 py-4 rounded-2xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>Daftar Sekarang</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION TENTANG KAMI */}
      <div className="bg-gradient-to-r from-[#2F80ED] to-[#56CCF2] py-16 md:py-24 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-black mb-4">Tentang Ganesha Cendekia</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto italic font-medium">"Mengenal lebih dekat rumah belajar para cendekiawan muda."</p>
        </motion.div>
      </div>

      {/* 3. BAGIAN CERITA (STORY) */}
      <section className="max-w-4xl mx-auto py-16 md:py-24 px-8 text-slate-700 leading-relaxed">
        <div className="space-y-10 text-base md:text-lg">
          <div className="border-l-4 border-[#2F80ED] pl-6">
            <p>
              <span className="font-black text-[#2F80ED] text-2xl md:text-3xl block mb-2">Ganesha Cendekia</span> lahir dari 
              semangat untuk menghadirkan pendidikan berkualitas yang bisa diakses dari mana saja. 
              Didirikan pada tahun 2023 oleh alumni <span className="font-bold text-[#2F80ED]">ITB</span> 
              dan <span className="font-bold text-[#2F80ED]">MAN Insan Cendekia Serpong</span>, 
              kami percaya bahwa setiap anak memiliki potensi raksasa yang menunggu untuk dibangunkan.
            </p>
          </div>
          
          <p>
            Kami bukan sekadar bimbel biasa. Dengan tim pengajar yang berasal dari kampus ternama seperti 
            <span className="font-bold text-[#2F80ED]"> ITB, UI, dan UNPAD</span>, kami membawa metode 
            belajar yang tidak hanya fokus pada nilai, tapi juga pemahaman konsep yang mendalam. Kami ingin 
            setiap sesi belajar terasa seperti petualangan yang seru, bukan beban yang berat.
          </p>

          <p className="bg-blue-50 p-6 rounded-3xl border border-blue-100 italic">
            "Hingga saat ini, kami telah membantu banyak siswa mulai dari jenjang SMA, persiapan olimpiade 
            (OSN), hingga pelatihan bahasa internasional seperti IELTS. Kami berkomitmen untuk terus 
            menjadi sahabat belajar terbaik bagi anak-anak hebat di seluruh Indonesia."
          </p>
        </div>
      </section>

      {/* 4. SEKSI PARTNER (SMAIA 28 IIBS) */}
      <section className="bg-slate-50 py-16 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Partner Strategis 🤝</h2>
          <p className="text-slate-500 mb-12">Bekerja sama untuk memajukan pendidikan Indonesia.</p>
          
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col items-center max-w-sm"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-6 flex items-center justify-center">
                {/* Pastikan file logo sudah ada di folder public/logos/ */}
                <img 
                  src="/logos/aaiibs3.png" 
                  alt="Logo SMAIA 28 IIBS Karanganyar" 
                  className="w-full h-full object-contain"
                  onError={(e: any) => { e.target.src = 'https://via.placeholder.com/150?text=Logo+SMAIA' }}
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">
                SMAIA 28 IIBS Karanganyar
              </h3>
              <p className="text-xs text-blue-500 font-bold uppercase tracking-widest mt-2">Official Partner</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TOMBOL AKSI */}
      <div className="py-20 text-center px-6">
        <h3 className="text-2xl font-bold mb-8 text-slate-800">Siap Jadi Juara Berikutnya?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/daftar" className="bg-[#2F80ED] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all active:scale-95 shadow-blue-200 shadow-lg">
            Daftar Sekarang 🚀
          </a>
          <a href="/" className="bg-white text-slate-600 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition">
            Kembali ke Beranda
          </a>
        </div>
      </div>

      {/* Footer sederhana agar konsisten */}
      <footer className="bg-slate-900 text-white py-12 px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Ganesha Cendekia</span>. 
          Alumni ITB & MAN IC Serpong.
        </p>
      </footer>
    </div>
  )
}