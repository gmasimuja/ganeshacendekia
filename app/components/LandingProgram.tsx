import Navbar from './Navbar'
import Footer from './Footer'
import FaqList from './FaqList'
import JsonLd from './JsonLd'
import { LANDING_LIST, SITE, program, schemaLanding, type LandingPage } from '../data/seo'
import { PAKET_PRIVAT, rupiah, hargaPaket } from '../data/program'
import { TESTIMONI } from '../data/testimoni'

const LANGKAH = [
  { judul: 'Isi formulir', isi: 'Pilih program, kelas, dan mata pelajaran di halaman Daftar.' },
  { judul: 'Atur jadwal via WhatsApp', isi: 'Admin mencarikan tutor dan jadwal yang cocok, termasuk malam hari.' },
  { judul: 'Belajar lewat Google Meet', isi: 'Sesi berjalan online, catatan materi dibagikan setelahnya.' },
]

export default function LandingProgram({ page }: { page: LandingPage }) {
  const prog = program(page.programSlug)
  const lainnya = LANDING_LIST.filter((l) => l.path !== page.path)
  const daftarHref = page.path === '/bimbel-online-siswa-asrama' ? '/daftar' : `/daftar?program=${prog.slug}`

  return (
    <div className="bg-white min-h-screen selection:bg-blue-100 text-slate-900 overflow-x-hidden">
      <JsonLd data={schemaLanding(page)} />
      <Navbar />

      <main>
        <section className="bg-slate-50 py-14 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-xs md:text-sm text-slate-500 mb-6">
              <a href="/" className="hover:text-[#2F80ED]">Beranda</a> <span aria-hidden="true">›</span> <span className="text-slate-700">{page.judulMenu}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-slate-900">{page.h1}</h1>
            <div className="mt-6 space-y-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {page.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={daftarHref} className="bg-[#2F80ED] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition text-center">Daftar Sekarang</a>
              <a href="https://wa.me/6281221595529" target="_blank" rel="noopener" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition text-center">Konsultasi Gratis via WhatsApp</a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs md:text-sm font-semibold text-slate-600">
              {['100% online via Google Meet', `Dikelola dari ${SITE.basis}`, 'Siswa dari seluruh Indonesia'].map((c) => (
                <li key={c} className="bg-white border border-slate-200 rounded-full px-3 py-1.5">{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Biaya {prog.judul}</h2>
              <table className="w-full text-left">
                <tbody>
                  {prog.tarif.map((t) => (
                    <tr key={t.label} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="py-3 font-semibold text-slate-700">{t.label}</th>
                      <td className="py-3 text-right font-black text-[#2F80ED] text-lg">{rupiah(t.harga)} <span className="text-xs font-semibold text-slate-400">{prog.satuan}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {prog.slug === 'privat' && (
                <p className="mt-4 text-sm text-slate-500">
                  Paket {PAKET_PRIVAT.jumlahSesi} sesi hemat {PAKET_PRIVAT.diskonPersen}%: {prog.tarif.map((t) => `${t.label} ${rupiah(hargaPaket(t.harga))}`).join(', ')}.
                </p>
              )}
            </div>
            <div className="rounded-3xl bg-blue-50 p-8">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Yang kamu dapatkan</h2>
              <ul className="space-y-3">
                {[...prog.detail, ...page.poin].map((p) => (
                  <li key={p} className="flex gap-3 text-slate-700"><span className="text-[#2F80ED] font-black" aria-hidden="true">✓</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">Cara mulai belajar</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LANGKAH.map((l, i) => (
                <li key={l.judul} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#2F80ED] text-white font-black flex items-center justify-center mb-4">{i + 1}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{l.judul}</h3>
                  <p className="text-sm text-slate-600">{l.isi}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-14 md:py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">Kata siswa Ganesha Cendekia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONI.slice(0, 2).map((t) => (
                <figure key={t.nama} className={`${t.warna} rounded-3xl p-6 md:p-8 border border-black/5`}>
                  <blockquote className="text-slate-700 leading-relaxed">“{t.teks}”</blockquote>
                  <figcaption className="mt-4 font-bold text-slate-900">{t.nama} <span className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">{t.kelas}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <FaqList faq={page.faq} judul={`Tanya jawab ${page.judulMenu}`} />

        <section className="bg-slate-50 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-black text-slate-900 mb-6">Program lainnya</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {lainnya.map((l) => (
                <a key={l.path} href={l.path} className="bg-white border border-slate-200 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[#2F80ED] hover:text-[#2F80ED] transition">{l.judulMenu}</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
