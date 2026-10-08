import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import FormDaftar from './FormDaftar'

export const metadata: Metadata = {
  title: 'Daftar Bimbel | Ganesha Cendekia',
  description:
    'Isi formulir singkat untuk mendaftar bimbel online privat, kelompok, OSN, atau IELTS bersama tutor mahasiswa ITB, UI, dan Unpad.',
}

export default function DaftarPage() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">Daftar Bimbel 📝</h1>
          <p className="text-slate-600 mt-3 text-sm md:text-base">
            Isi data singkat di bawah. Setelah dikirim, kamu akan diarahkan ke WhatsApp admin
            dengan pesan yang sudah terisi, tinggal tekan kirim.
          </p>
        </div>

        <FormDaftar />
      </main>

      <footer className="bg-slate-900 text-white py-10 px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Ganesha Cendekia</span>.
          Alumni ITB & MAN IC Serpong.
        </p>
      </footer>
    </div>
  )
}
