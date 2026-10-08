'use client'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function TentangKami() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 text-slate-900 scroll-smooth overflow-x-hidden">
      
      <Navbar />

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