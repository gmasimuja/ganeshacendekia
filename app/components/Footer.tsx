import { LANDING_LIST, SITE } from '../data/seo'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center sm:text-left">
          <div className="sm:col-span-2 space-y-6 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3 text-[#56CCF2]">
              <img src="/logo-gc.png" alt="Logo Ganesha Cendekia" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <span className="text-xl md:text-2xl font-black tracking-tight">Ganesha Cendekia</span>
            </div>
            <p className="text-slate-400 max-w-sm text-sm md:text-base leading-relaxed">
              Bimbel online untuk siswa SMP dan SMA bersama tutor mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6 text-white">Program</h2>
            <ul className="space-y-3 text-slate-400 text-sm">
              {LANDING_LIST.map((l) => (
                <li key={l.path}><a href={l.path} className="hover:text-[#56CCF2]">{l.judulMenu}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-6 text-white">Kontak</h2>
            <div className="space-y-4 text-slate-400 text-sm">
              <p>{SITE.lokasiTampil}</p>
              <p>WhatsApp {SITE.teleponTampil}</p>
              <a href={SITE.instagram} target="_blank" rel="noopener" className="inline-block text-[#56CCF2]">@ganeshacendekia.id</a>
              <p><a href="/tentang" className="hover:text-[#56CCF2]">Tentang Kami</a> · <a href="/daftar" className="hover:text-[#56CCF2]">Daftar</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Ganesha Cendekia</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
