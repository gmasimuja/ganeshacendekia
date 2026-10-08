'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk Mobile Menu

  const daftarTutor = [
    { foto: "/tutors/tutor1.jpg", nama: "Kak Akmal", kampus: "Teknik Perminyakan ITB 2024", bidang: "Kimia & Fisika" },
    { foto: "/tutors/tutor2.jpg", nama: "Kak Hani", kampus: "Teknik Arsitektur ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor3.jpg", nama: "Kak Madrin", kampus: "Teknik Lingkungan ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor4.jpg", nama: "Kak Nabilah", kampus: "Kewirausahaan ITB 2024", bidang: "B.Inggris & IPS" },
    { foto: "/tutors/tutor5.jpg", nama: "Kak Jinda", kampus: "Psikologi UI 2025", bidang: "IELTS" },
    { foto: "/tutors/tutor6.jpg", nama: "Kak Tara", kampus: "Kimia Unpad 2024", bidang: "Kimia & B.Inggris" },
    { foto: "/tutors/tutor7.jpg", nama: "Kak Kalce", kampus: "Teknik Industri ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor8.jpg", nama: "Kak Eldy", kampus: "Hukum Unpad 2025", bidang: "B.Inggris & Kimia" },
    { foto: "/tutors/tutor9.jpg", nama: "Kak Aqila", kampus: "Kedokteran Gigi Unpad 2025", bidang: "Biologi" },
    { foto: "/tutors/tutor10.jpg", nama: "Kak Azzam", kampus: "Teknik Perminyakan ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor11.jpg", nama: "Kak Kayla", kampus: "Teknik Metalurgi ITB 2024", bidang: "Kimia & Matematika" },
    { foto: "/tutors/tutor12.jpg", nama: "Kak Rafa", kampus: "Teknik Mesin ITB 2025", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor13.jpg", nama: "Kak Panji", kampus: "Teknik Tenaga Listrik ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor14.jpg", nama: "Kak Mulkan", kampus: "Teknik Sipil ITB 2024", bidang: "Matematika & Fisika" },
    { foto: "/tutors/tutor15.jpg", nama: "Kak Hilmy", kampus: "Teknik Mesin ITB 2025", bidang: "Matematika & Fisika" },
  ];

  const scrollTutor = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 text-slate-900 scroll-smooth overflow-x-hidden">
      
      {/* 1. NAVIGATION (Optimized with Mobile Menu) */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-[100] shadow-sm border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <img src="/logo-gc.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <a href="/" className="text-xl md:text-2xl font-bold tracking-tight text-[#2F80ED]">
            Ganesha<span className="text-slate-800">Cendekia</span>
          </a> 
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a href="/" className="hover:text-[#2F80ED] transition">Beranda</a>
          <a href="/tentang" className="hover:text-[#2F80ED] transition">Tentang Kami</a>
          <a href="#program" className="hover:text-[#2F80ED] transition">Program</a>
          <a href="#tutors" className="hover:text-[#2F80ED] transition">Tutor</a>
          <a href="#testimoni" className="hover:text-[#2F80ED] transition">Testimoni</a>
          <a href="https://wa.me/6281221595529" target="_blank" className="bg-[#2F80ED] text-white px-7 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95 text-center">
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-[#2F80ED] text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col space-y-5 md:hidden border-t"
            >
              <a href="/" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Beranda</a>
              <a href="/tentang" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Tentang Kami</a>
              <a href="#program" className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>Program</a>
              <a href="/daftar" className="bg-[#2F80ED] text-white px-6 py-4 rounded-2xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>Daftar Sekarang</a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* 2. HERO SECTION (Responsive Spacing & Typography) */}
        <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="inline-block px-4 py-1.5 mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-blue-100 text-blue-700 rounded-full">
                  Tutor Mahasiswa ITB, UI {"&"} UNPAD
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
                  Bimbel Online <span className="text-[#2F80ED]">Eksklusif</span> Untuk Prestasi Maksimal
                </h1>
              </motion.div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Didesain khusus oleh alumni <strong>ITB {"&"} MAN IC Serpong</strong> untuk membantu siswa meraih sekolah dan kampus impian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://wa.me/6281221595529" target="_blank" className="bg-[#2F80ED] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-xl w-full sm:w-auto">Mulai Belajar Yuk! 🚀</a>
                <a href="#program" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition w-full sm:w-auto">Lihat Program</a>
              </div>
            </div>
            <div className="relative flex justify-center w-full mt-8 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img src="/belajar2.jpg" alt="Siswa Belajar" className="rounded-[2rem] md:rounded-[2.5rem] shadow-2xl w-full max-w-sm md:max-w-lg object-cover border-[8px] md:border-[12px] border-white ring-1 ring-slate-100" />
            </div>
          </div>
        </section>

        {/* 3. PROGRAM SECTION (Responsive Grid) */}
        <section className="bg-white py-16 md:py-24 px-6" id="program">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Program Belajar Unggulan 🏆</h2>
            <div className="w-20 h-1.5 bg-[#2F80ED] mx-auto rounded-full mb-12 md:mb-16"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProgramCard 
                icon="🏠" 
                title="Bimbel Privat" 
                desc="Belajar eksklusif bareng tutor alumni ITB/UI/UNPAD." 
                price={"SMP: Rp135.000\nSMA: Rp155.000"} 
                unit="/ sesi" 
                details={["90 Menit", "Online (Google Meet)", "Bebas Konsultasi PR"]} 
              />
              <ProgramCard 
                icon="🤝" 
                title="Bimbel Kelompok" 
                desc="Belajar bertiga jadi lebih seru dan jauh lebih hemat!" 
                oldPrice="Rp450.000"
                price="Rp270.000" 
                unit="/ kelompok" 
                details={["90 Menit", "2-3 Siswa", "Diskusi Aktif"]} 
              />
              <ProgramCard 
                icon="🏅" 
                title="Pembinaan OSN" 
                desc="Persiapan kompetisi sains dengan materi level olimpiade." 
                price="Rp250.000" 
                unit="/ sesi" 
                details={["120 Menit", "Tutor Medalis KSN", "Problem Solving"]} 
              />
              <ProgramCard 
                icon="✈️" 
                title="Persiapan IELTS" 
                desc="Strategi jitu raih band score tinggi untuk luar negeri." 
                price="Rp225.000" 
                unit="/ sesi" 
                details={["Listening & Reading", "Writing & Speaking", "Mock Test Berkala"]} 
              />
            </div>
          </div>
        </section>

        {/* 4. TUTORS SECTION (Enhanced Scroll for Mobile) */}
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-y border-slate-100" id="tutors">
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Kenalan dengan <span className="text-[#2F80ED]">Tutor Kami 🌟</span></h2>
            <p className="text-slate-500 mt-4 text-base md:text-lg">Geser untuk melihat tutor terbaik kami dari berbagai kampus top.</p>
          </div>

          <div className="relative group max-w-7xl mx-auto px-6">
            <button onClick={() => scrollTutor('left')} className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-14 h-24 bg-white/40 backdrop-blur-md border border-white/20 items-center justify-center rounded-2xl text-slate-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/60 shadow-xl">
              <span className="text-3xl font-bold">❮</span>
            </button>

            <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-10">
              {daftarTutor.map((tutor, index) => (
                <div key={index} className="snap-center">
                  <TutorCard img={tutor.foto} nama={tutor.nama} univ={tutor.kampus} ahli={tutor.bidang} />
                </div>
              ))}
            </div>

            <button onClick={() => scrollTutor('right')} className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-14 h-24 bg-white/40 backdrop-blur-md border border-white/20 items-center justify-center rounded-2xl text-slate-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/60 shadow-xl">
              <span className="text-3xl font-bold">❯</span>
            </button>

            <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="bg-white py-16 md:py-24 px-6" id="testimoni">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 md:mb-16">Apa Kata Mereka? 🌈</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <TestiCard color="bg-blue-50" name="Budi" kls="Kelas 3 SMA" text="Materi sesulit apapun jadi gampang kalau dijelasin tutor GC!" />
              <TestiCard color="bg-orange-50" name="Siti" kls="Alumni" text="Alhamdulillah lolos PTN impian berkat bimbingan intensif di sini." />
              <TestiCard color="bg-green-50" name="Andi" kls="Kelas 1 SMA" text="Tutornya asik, berasa belajar bareng kakak sendiri!" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER (Optimized Mobile Layout) */}
      <footer className="bg-slate-900 text-white py-12 md:py-16 px-6" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center sm:text-left">
            <div className="sm:col-span-2 space-y-6 flex flex-col items-center sm:items-start">
              <div className="flex items-center space-x-3 text-[#56CCF2]">
                <img src="/logo-gc.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                <span className="text-xl md:text-2xl font-black tracking-tight">Ganesha Cendekia</span>
              </div>
              <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed">
                Rumah belajar para cendekiawan muda Indonesia. Kami berkomitmen memberikan bimbingan eksklusif untuk meraih masa depan gemilang.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Program</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li><a href="#program" className="hover:text-[#56CCF2]">Bimbel Privat</a></li>
                <li><a href="#program" className="hover:text-[#56CCF2]">Bimbel Kelompok</a></li>
                <li><a href="#program" className="hover:text-[#56CCF2]">Pembinaan OSN</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Kontak</h4>
              <div className="space-y-4 text-slate-400 text-sm">
                <p>📍 Bandung, Indonesia</p>
                <p>📱 +62 812 2159 5529</p>
                <a href="https://instagram.com/ganeshacendekia.id" target="_blank" className="inline-block mt-2 text-[#56CCF2]">@ganeshacendekia.id</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-[10px] md:text-xs">
              &copy; {new Date().getFullYear()} <span className="font-semibold">Ganesha Cendekia</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/6281221595529" target="_blank" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center z-50 font-bold active:scale-95" aria-label="WhatsApp">
        <span className="hidden md:inline mr-2 text-sm">Konsultasi Gratis</span>
        <span className="text-xl">💬</span>
      </a>
    </div>
  )
}

// --- SUB-COMPONENTS (Kept your logic but optimized for Mobile) ---
function ProgramCard({ icon, title, desc, price, unit, details, oldPrice }: any) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group flex flex-col items-center text-center h-full">
      <div className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition duration-300">{icon}</div>
      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-xs md:text-sm text-slate-600 mb-6 flex-grow">{desc}</p>
      
      <div className="space-y-2 mb-8">
        {details.map((item: string, index: number) => (
          <div key={index} className="flex items-center justify-center text-[10px] md:text-xs text-slate-500">
            <span className="text-[#2F80ED] mr-2">✓</span> {item}
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-50 w-full">
        {oldPrice && <span className="text-[10px] md:text-xs text-slate-400 line-through block mb-1">{oldPrice}</span>}
        <div className="flex flex-col items-center">
          <span className="text-base md:text-lg font-black text-[#2F80ED] whitespace-pre-line leading-tight">{price}</span>
          <span className="text-[10px] text-slate-400 mt-1">{unit}</span>
        </div>
        <button className="w-full mt-4 bg-[#2F80ED] text-white py-3 rounded-xl text-xs md:text-sm font-bold hover:bg-blue-700 transition">Daftar Sekarang</button>
      </div>
    </div>
  )
}

function TestiCard({ color, name, kls, text }: any) {
  return (
    <div className={`${color} p-6 md:p-8 rounded-3xl text-left border border-black/5 hover:border-black/10 transition-colors h-full flex flex-col justify-between shadow-sm`}>
      <div>
        <div className="text-blue-200 text-4xl md:text-5xl font-serif leading-none mb-2">“</div>
        <p className="text-slate-700 italic text-xs md:text-sm leading-relaxed mb-6">{text}</p>
      </div>
      <div>
        <p className="font-bold text-sm md:text-base text-slate-900">{name}</p>
        <p className="text-[9px] md:text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-1">{kls}</p>
      </div>
    </div>
  )
}

function TutorCard({ img, nama, univ, ahli }: any) {
  return (
    <div className="min-w-[240px] md:min-w-[280px] bg-white rounded-3xl p-5 md:p-6 text-center shadow-sm border border-slate-100 group">
      <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-6">
        <div className="absolute inset-0 bg-[#2F80ED] rounded-full rotate-6 group-hover:rotate-12 transition"></div>
        <img src={img} alt={nama} className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-md" />
      </div>
      <h4 className="text-base md:text-lg font-bold text-slate-800">{nama}</h4>
      <p className="text-[#2F80ED] font-bold text-[10px] md:text-xs mt-1">{univ}</p>
      <div className="mt-4 bg-slate-50 py-2 px-4 rounded-full text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors italic">
        Tutor {ahli}
      </div>
    </div>
  )
}