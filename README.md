# Ganesha Cendekia — website

Website bimbel online [ganeshacendekia.com](https://www.ganeshacendekia.com). Next.js 16 + Tailwind CSS 4, di-host di Vercel.

## Struktur singkat

- `app/page.tsx` — Beranda (hero, program, tutor, testimoni)
- `app/tentang/page.tsx` — Tentang Kami & partner sekolah
- `app/daftar/` — Formulir pendaftaran → membuka WhatsApp dengan pesan terisi
- `app/components/Navbar.tsx` — Navbar yang dipakai semua halaman
- `app/data/program.ts` — **Harga & program.** Ubah harga cukup di file ini; Beranda dan formulir ikut berubah.

## Menjalankan di laptop

```bash
npm install
npm run dev     # buka http://localhost:3000
```

## Deploy

```bash
npx vercel --prod
```

Atau sambungkan project Vercel ke repo GitHub ini (Vercel → Project → Settings → Git), supaya setiap push ke `main` otomatis ter-deploy.
