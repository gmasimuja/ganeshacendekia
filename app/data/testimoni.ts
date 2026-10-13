// Testimoni asli dari Google Form "Testimoni Belajar di Ganesha Cendekia" (Oktober 2026).
// Hanya yang memberi izin tampil. Nama ditulis sesuai pilihan siswa (nama lengkap atau inisial).
// Teks dikutip dari jawaban siswa, dipersingkat dan dirapikan ejaannya tanpa mengubah makna.

export type Testimoni = {
  nama: string;
  kelas: string;
  rating: number; // 1–5, dari pertanyaan kepuasan
  sorotan?: string; // hasil singkat yang disebut siswa
  teks: string;
  warna: string;
};

export const TESTIMONI: Testimoni[] = [
  {
    nama: "Kevin Julio",
    kelas: "Kelas 11, SMAIA 28 IIBS",
    rating: 4,
    sorotan: "Ranking 2 → ranking 1",
    teks:
      "Pembimbingnya sabar banget dalam mengajar, dan kalau di luar les ditanya-tanya tetap fast respon dan mau bantuin. Di kelas 10 semester 2 ranking saya turun jadi ranking 2. Alhamdulillah karena les di Ganesha, saya bisa menyalip lagi jadi ranking 1.",
    warna: "bg-blue-50",
  },
  {
    nama: "Khansa",
    kelas: "Kelas 11, MAN Insan Cendekia Serpong",
    rating: 5,
    sorotan: "Lebih percaya diri",
    teks:
      "Aku jadi lebih paham materi yang sebelumnya masih sulit aku mengerti, dan lebih mudah mengerjakan soal-soal yang dulu terasa sulit. Aku merasa free banget buat bertanya apa pun tanpa takut atau malu. Setelah belajar di sini, aku jadi lebih percaya diri dan lebih semangat belajar.",
    warna: "bg-orange-50",
  },
  {
    nama: "F.",
    kelas: "Kelas 11, SMAIA 28 IIBS",
    rating: 4,
    sorotan: "Nilai fisika naik",
    teks:
      "Tentornya rata-rata ramah, ngajarnya pakai notes yang di-share screen, dan setelah les materinya dibagikan ke kita. Kita juga diajarin cara ngerjain latihan soal dari kisi-kisi ujian. Waktu kelas 10, setelah les di GC nilai fisikaku bener-bener naik!",
    warna: "bg-green-50",
  },
  {
    nama: "A. A. H.",
    kelas: "Kelas 11, SMAIA 28 IIBS",
    rating: 5,
    sorotan: "Nilai naik",
    teks:
      "Yang paling aku suka, penjelasannya lebih jelas dan kalau nggak ngerti bisa tanya terus sampai paham. Nilaiku jadi naik dan aku lebih paham materinya.",
    warna: "bg-purple-50",
  },
];

// Rata-rata kepuasan dari SEMUA responden survei (termasuk yang tidak mau ditampilkan).
export const SURVEI = { rataRata: 4.4, jumlahResponden: 5, periode: "Oktober 2026" };
