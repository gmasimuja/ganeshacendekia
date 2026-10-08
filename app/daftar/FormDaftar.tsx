'use client'
import { useEffect, useMemo, useState } from 'react'
import { PROGRAM, PAKET_PRIVAT, rupiah, hargaPaket, linkWA } from '../data/program'

const PILIHAN_PROGRAM = [
  ...PROGRAM.map((p) => ({ slug: p.slug, label: `${p.icon} ${p.judul}` })),
  { slug: 'mitra', label: '🏫 Kemitraan Sekolah' },
]

const KELAS = [
  'SMP Kelas 7', 'SMP Kelas 8', 'SMP Kelas 9',
  'SMA Kelas 10', 'SMA Kelas 11', 'SMA Kelas 12',
  'Alumni / Gap year',
]

const UKURAN_KELOMPOK = ['Berdua', 'Bertiga', '4–6 siswa']

const inputCls =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F80ED] focus:border-transparent'

function Field({ label, wajib, children }: { label: string; wajib?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {wajib && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  )
}

export default function FormDaftar() {
  const [program, setProgram] = useState('privat')
  const [nama, setNama] = useState('')
  const [kelas, setKelas] = useState('')
  const [sekolah, setSekolah] = useState('')
  const [ukuran, setUkuran] = useState(UKURAN_KELOMPOK[0])
  const [mapel, setMapel] = useState('')
  const [jadwal, setJadwal] = useState('')
  const [paket, setPaket] = useState(false)
  const [catatan, setCatatan] = useState('')
  const [error, setError] = useState('')

  // Pilih program otomatis dari tombol "Daftar Sekarang" di kartu program (?program=...)
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('program')
    if (q && PILIHAN_PROGRAM.some((p) => p.slug === q)) setProgram(q)
  }, [])

  const isMitra = program === 'mitra'
  const dataProgram = PROGRAM.find((p) => p.slug === program)

  // Perkiraan biaya sesuai pilihan
  const estimasi = useMemo(() => {
    if (!dataProgram) return null
    if (program === 'kelompok') {
      const t = dataProgram.tarif.find((x) => x.label === ukuran)
      return t ? `${rupiah(t.harga)} per siswa per sesi` : null
    }
    if (program === 'privat') {
      const jenjang = kelas.startsWith('SMP') ? 'SMP' : 'SMA'
      const t = dataProgram.tarif.find((x) => x.label === jenjang)
      if (!t) return null
      return paket
        ? `${rupiah(hargaPaket(t.harga))} untuk ${PAKET_PRIVAT.jumlahSesi} sesi (${jenjang})`
        : `${rupiah(t.harga)} per sesi (${jenjang})`
    }
    return `${rupiah(dataProgram.tarif[0].harga)} per sesi`
  }, [dataProgram, program, ukuran, kelas, paket])

  function kirim(e: React.FormEvent) {
    e.preventDefault()
    if (!nama.trim() || (!isMitra && (!kelas || !mapel.trim())) || (isMitra && !sekolah.trim())) {
      setError(isMitra ? 'Mohon isi nama kamu dan nama sekolah.' : 'Mohon isi nama, kelas, dan mata pelajaran.')
      return
    }
    setError('')

    const baris = isMitra
      ? [
          'Halo Ganesha Cendekia, saya tertarik dengan *Kemitraan Sekolah*.',
          '',
          `Nama: ${nama}`,
          `Sekolah: ${sekolah}`,
          jadwal && `Perkiraan jumlah siswa: ${jadwal}`,
          catatan && `Catatan: ${catatan}`,
        ]
      : [
          `Halo Ganesha Cendekia, saya mau daftar *${dataProgram?.judul}*.`,
          '',
          `Nama siswa: ${nama}`,
          `Kelas: ${kelas}`,
          sekolah && `Sekolah: ${sekolah}`,
          program === 'kelompok' && `Jumlah siswa: ${ukuran}`,
          `Mata pelajaran: ${mapel}`,
          jadwal && `Jadwal yang diinginkan: ${jadwal}`,
          program === 'privat' && paket && `Ambil paket hemat ${PAKET_PRIVAT.jumlahSesi} sesi`,
          estimasi && `Perkiraan biaya: ${estimasi}`,
          catatan && `Catatan: ${catatan}`,
        ]

    const pesan = baris.filter(Boolean).join('\n')
    window.location.href = linkWA(pesan)
  }

  return (
    <form onSubmit={kirim} className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 sm:p-8 space-y-6">
      {/* Pilihan program */}
      <fieldset>
        <legend className="block text-sm font-semibold text-slate-700 mb-2">
          Program <span className="text-red-500">*</span>
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PILIHAN_PROGRAM.map((p) => (
            <label
              key={p.slug}
              className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                program === p.slug
                  ? 'border-[#2F80ED] bg-blue-50 text-[#2F80ED]'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <input
                type="radio"
                name="program"
                value={p.slug}
                checked={program === p.slug}
                onChange={() => setProgram(p.slug)}
                className="sr-only"
              />
              {p.label}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label={isMitra ? 'Nama kamu' : 'Nama siswa'} wajib>
        <input className={inputCls} value={nama} onChange={(e) => setNama(e.target.value)} placeholder={isMitra ? 'cth. Bu Rina (Wakasek Kurikulum)' : 'cth. Aisyah'} />
      </Field>

      {isMitra ? (
        <>
          <Field label="Nama sekolah" wajib>
            <input className={inputCls} value={sekolah} onChange={(e) => setSekolah(e.target.value)} placeholder="cth. SMA IT Harapan Bangsa" />
          </Field>
          <Field label="Perkiraan jumlah siswa yang ikut">
            <input className={inputCls} value={jadwal} onChange={(e) => setJadwal(e.target.value)} placeholder="cth. 20–30 siswa kelas 12" />
          </Field>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Kelas" wajib>
              <select className={inputCls} value={kelas} onChange={(e) => setKelas(e.target.value)}>
                <option value="">Pilih kelas</option>
                {KELAS.map((k) => <option key={k}>{k}</option>)}
              </select>
            </Field>
            <Field label="Asal sekolah">
              <input className={inputCls} value={sekolah} onChange={(e) => setSekolah(e.target.value)} placeholder="cth. SMAN 3 Bandung" />
            </Field>
          </div>

          {program === 'kelompok' && (
            <Field label="Jumlah siswa dalam kelompok" wajib>
              <select className={inputCls} value={ukuran} onChange={(e) => setUkuran(e.target.value)}>
                {UKURAN_KELOMPOK.map((u) => <option key={u}>{u}</option>)}
              </select>
            </Field>
          )}

          <Field label="Mata pelajaran" wajib>
            <input className={inputCls} value={mapel} onChange={(e) => setMapel(e.target.value)} placeholder="cth. Matematika dan Fisika" />
          </Field>

          <Field label="Jadwal yang diinginkan">
            <input className={inputCls} value={jadwal} onChange={(e) => setJadwal(e.target.value)} placeholder="cth. Selasa & Kamis, jam 19.00" />
          </Field>

          {program === 'privat' && (
            <label className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 p-4 cursor-pointer">
              <input type="checkbox" checked={paket} onChange={(e) => setPaket(e.target.checked)} className="mt-1 h-4 w-4 accent-[#2F80ED]" />
              <span className="text-sm text-slate-700">
                Ambil <strong>paket hemat {PAKET_PRIVAT.jumlahSesi} sesi</strong> (bayar di muka, hemat {PAKET_PRIVAT.diskonPersen}%)
              </span>
            </label>
          )}
        </>
      )}

      <Field label="Catatan">
        <textarea className={inputCls} rows={3} value={catatan} onChange={(e) => setCatatan(e.target.value)} placeholder={isMitra ? 'Kebutuhan sekolah, mata pelajaran, dll.' : 'cth. persiapan UTS, ingin tutor perempuan, dll.'} />
      </Field>

      {!isMitra && estimasi && (
        <div className="rounded-2xl bg-blue-50 border border-blue-100 px-5 py-4 text-sm text-slate-700">
          Perkiraan biaya: <strong className="text-[#2F80ED]">{estimasi}</strong>
        </div>
      )}

      {error && <p className="text-sm text-red-600 font-semibold" role="alert">{error}</p>}

      <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-base md:text-lg transition active:scale-[0.99] shadow-lg">
        Kirim via WhatsApp 💬
      </button>
      <p className="text-center text-xs text-slate-400">
        Belum yakin? <a href={linkWA('Halo Ganesha Cendekia, saya mau konsultasi dulu soal bimbel.')} className="text-[#2F80ED] font-semibold underline">Konsultasi gratis dulu via WhatsApp</a>.
      </p>
    </form>
  )
}
