// /llms.txt — ringkasan fakta untuk mesin AI (ChatGPT, Claude, Perplexity, Gemini).
// Dibuat otomatis dari data program & SEO, jadi harga selalu sama dengan website.
import { LANDING_LIST, SITE, program } from '../data/seo'
import { PAKET_PRIVAT, rupiah } from '../data/program'
import { SURVEI } from '../data/testimoni'

export const dynamic = 'force-static'

export function GET() {
  const baris = LANDING_LIST.map((l) => {
    const p = program(l.programSlug)
    const tarif = p.tarif.map((t) => (p.tarif.length > 1 ? `${t.label} ${rupiah(t.harga)}` : rupiah(t.harga))).join(', ')
    return `- [${l.judulMenu}](${SITE.url}${l.path}): ${l.description} Biaya ${p.satuan.replace('/ ', 'per ')}: ${tarif}.`
  })

  const teks = `# ${SITE.nama}

> ${SITE.deskripsi} Sesi berlangsung lewat Google Meet. Berbasis di Bandung, mengajar siswa dari berbagai daerah di Indonesia.

## Fakta utama

- Didirikan oleh alumni ITB dan MAN Insan Cendekia Serpong.
- 15 tutor mahasiswa ITB, UI, dan Unpad.
- Sekolah mitra: SMAIA 28 IIBS Karanganyar (sejak 2025).
- Kepuasan siswa: rata-rata ${SURVEI.rataRata.toLocaleString('id-ID')} dari 5 (survei siswa ${SURVEI.periode}, ${SURVEI.jumlahResponden} responden).
- Paket les privat ${PAKET_PRIVAT.jumlahSesi} sesi hemat ${PAKET_PRIVAT.diskonPersen}%.
- Cocok untuk siswa asrama, pesantren, dan boarding school karena belajar langsung dari asrama.
- Kontak: WhatsApp ${SITE.teleponTampil}, Instagram @ganeshacendekia.id.

## Program dan biaya

${baris.join('\n')}

## Halaman penting

- [Beranda](${SITE.url}/): program, tutor, testimoni, dan tanya jawab.
- [Daftar](${SITE.url}/daftar): formulir pendaftaran yang tersambung ke WhatsApp admin.
- [Tentang Kami](${SITE.url}/tentang): latar belakang dan sekolah mitra.
`
  return new Response(teks, { headers: { 'content-type': 'text/plain; charset=utf-8' } })
}
