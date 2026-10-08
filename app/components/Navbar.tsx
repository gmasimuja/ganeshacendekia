'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const MENU = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/#program', label: 'Program' },
  { href: '/#tutors', label: 'Tutor' },
  { href: '/#testimoni', label: 'Testimoni' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-[100] shadow-sm border-b border-slate-100">
      <a href="/" className="flex items-center space-x-3">
        <img src="/logo-gc.png" alt="Logo Ganesha Cendekia" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        <span className="text-xl md:text-2xl font-bold tracking-tight text-[#2F80ED]">
          Ganesha<span className="text-slate-800">Cendekia</span>
        </span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
        {MENU.map((m) => (
          <a key={m.href} href={m.href} className="hover:text-[#2F80ED] transition">{m.label}</a>
        ))}
        <a href="/daftar" className="bg-[#2F80ED] text-white px-7 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all active:scale-95 text-center">
          Daftar Sekarang
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-[#2F80ED] text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={isMenuOpen}
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
            {MENU.map((m) => (
              <a key={m.href} href={m.href} className="font-semibold text-slate-700" onClick={() => setIsMenuOpen(false)}>{m.label}</a>
            ))}
            <a href="/daftar" className="bg-[#2F80ED] text-white px-6 py-4 rounded-2xl text-center font-bold" onClick={() => setIsMenuOpen(false)}>Daftar Sekarang</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
