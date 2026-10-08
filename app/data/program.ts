// Satu-satunya tempat untuk mengubah harga & program.
// Halaman Beranda dan formulir /daftar sama-sama membaca dari file ini.

export const NOMOR_WA = "6281221595529";

export type Tarif = { label: string; harga: number; catatan?: string };

export type Program = {
  slug: string;
  icon: string;
  judul: string;
  deskripsi: string;
  satuan: string;
  tarif: Tarif[];
  detail: string[];
  hargaCoret?: string;
};

export const PROGRAM: Program[] = [
  {
    slug: "privat",
    icon: "🏠",
    judul: "Bimbel Privat",
    deskripsi: "Satu tutor untuk satu siswa. Materi dan tempo belajar menyesuaikan kebutuhanmu.",
    satuan: "/ sesi",
    tarif: [
      { label: "SMP", harga: 100000 },
      { label: "SMA", harga: 120000 },
    ],
    detail: ["90 menit", "Online (Google Meet)", "Bebas tanya PR & tugas"],
  },
  {
    slug: "kelompok",
    icon: "🤝",
    judul: "Bimbel Kelompok",
    deskripsi: "Ajak teman sekelas. Makin ramai, makin hemat per orang.",
    satuan: "/ siswa / sesi",
    tarif: [
      { label: "Berdua", harga: 80000 },
      { label: "Bertiga", harga: 70000 },
      { label: "4–6 siswa", harga: 55000 },
    ],
    detail: ["90 menit", "2–6 siswa", "Diskusi aktif"],
  },
  {
    slug: "osn",
    icon: "🏅",
    judul: "Pembinaan OSN",
    deskripsi: "Persiapan kompetisi sains dengan materi dan soal level olimpiade.",
    satuan: "/ sesi",
    tarif: [{ label: "Privat", harga: 175000 }],
    detail: ["120 menit", "Tutor medalis KSN", "Problem solving"],
  },
  {
    slug: "ielts",
    icon: "✈️",
    judul: "Persiapan IELTS",
    deskripsi: "Strategi tiap section untuk mengejar band score target.",
    satuan: "/ sesi",
    tarif: [{ label: "Privat", harga: 150000 }],
    detail: ["90 menit", "Listening, Reading, Writing, Speaking", "Mock test berkala"],
  },
];

// Paket hemat untuk bimbel privat (bayar di muka).
export const PAKET_PRIVAT = { jumlahSesi: 8, diskonPersen: 8 };

export function rupiah(n: number) {
  return "Rp" + n.toLocaleString("id-ID");
}

export function hargaPaket(hargaPerSesi: number) {
  const total = hargaPerSesi * PAKET_PRIVAT.jumlahSesi * (1 - PAKET_PRIVAT.diskonPersen / 100);
  return Math.round(total / 5000) * 5000; // dibulatkan ke Rp5.000 terdekat
}

export function linkWA(pesan: string) {
  return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
}
