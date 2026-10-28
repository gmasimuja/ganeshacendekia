// Data SEO & GEO: judul, deskripsi, isi halaman program, FAQ, dan data terstruktur (schema.org).
// Harga selalu dibaca dari program.ts, jadi cukup ubah harga di sana.
import type { Metadata } from "next";
import { PROGRAM, PAKET_PRIVAT, rupiah, hargaPaket, type Program } from "./program";

export const SITE = {
  url: "https://www.ganeshacendekia.com",
  nama: "Ganesha Cendekia",
  instagram: "https://www.instagram.com/ganeshacendekia.id/",
  telepon: "+62-812-2159-5529",
  teleponTampil: "0812-2159-5529",
  // Kota tempat GC dikelola. Kelas 100% online, jadi siswa bisa dari mana saja.
  basis: "Solo",
  basisResmi: "Surakarta",
  provinsi: "Jawa Tengah",
  lokasiTampil: "Dikelola dari Solo, kelas online untuk siswa di seluruh Indonesia",
  deskripsi:
    "Bimbel online untuk siswa SMP dan SMA: les privat, bimbel kelompok, pembinaan OSN, dan persiapan IELTS bersama tutor mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia.",
};

export type Faq = { q: string; a: string };

export type LandingPage = {
  path: string; // contoh: "/les-privat-online"
  programSlug: string; // slug di PROGRAM
  judulMenu: string; // nama singkat untuk tautan
  title: string; // <title>, ≤ 60 karakter, tanpa nama brand (ditambah template)
  description: string; // meta description, ±150 karakter
  h1: string;
  intro: string[];
  poin: string[];
  faq: Faq[];
};

export function program(slug: string): Program {
  const p = PROGRAM.find((x) => x.slug === slug);
  if (!p) throw new Error(`Program ${slug} tidak ditemukan`);
  return p;
}

const tarifTeks = (slug: string) =>
  program(slug)
    .tarif.map((t) => (program(slug).tarif.length > 1 ? `${t.label} ${rupiah(t.harga)}` : rupiah(t.harga)))
    .join(", ");

const privat = program("privat");
const smp = privat.tarif.find((t) => t.label === "SMP")?.harga ?? 0;
const sma = privat.tarif.find((t) => t.label === "SMA")?.harga ?? 0;
const kelompokMin = Math.min(...program("kelompok").tarif.map((t) => t.harga));
const osn = program("osn").tarif[0].harga;
const ielts = program("ielts").tarif[0].harga;
const rb = (n: number) => `Rp${Math.round(n / 1000)}rb`;

const MAPEL = "Matematika, Fisika, Kimia, Biologi, Ekonomi, Bahasa Inggris, dan Bahasa Indonesia";

const FAQ_DAFTAR: Faq = {
  q: "Bagaimana cara mendaftar?",
  a: "Isi formulir singkat di ganeshacendekia.com/daftar. Setelah dikirim, kamu diarahkan ke WhatsApp admin dengan pesan yang sudah terisi, lalu admin mencarikan tutor dan jadwal yang cocok.",
};

export const LANDING: Record<string, LandingPage> = {
  "les-privat-online": {
    path: "/les-privat-online",
    programSlug: "privat",
    judulMenu: "Les Privat Online",
    title: `Les Privat Online SMP & SMA, Mulai ${rb(smp)} per Sesi`,
    description: `Les privat online 1 tutor 1 siswa untuk SMP dan SMA bersama tutor mahasiswa ITB, UI, dan Unpad. 90 menit lewat Google Meet, SMP ${rb(smp)} dan SMA ${rb(sma)} per sesi.`,
    h1: "Les Privat Online SMP & SMA bareng Tutor ITB, UI & Unpad",
    intro: [
      "Satu tutor fokus ke satu siswa selama 90 menit lewat Google Meet. Materinya mengikuti kebutuhanmu: mengejar pelajaran sekolah, latihan soal dari kisi-kisi ujian, atau membahas PR yang belum dipahami.",
      `Tutor Ganesha Cendekia adalah mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia. Tarifnya ${rupiah(smp)} per sesi untuk SMP dan ${rupiah(sma)} untuk SMA, atau hemat ${PAKET_PRIVAT.diskonPersen}% dengan paket ${PAKET_PRIVAT.jumlahSesi} sesi.`,
    ],
    poin: [
      "Jadwal fleksibel, termasuk malam hari",
      "Catatan materi dibagikan setelah sesi",
      "Latihan soal mengikuti kisi-kisi ujian sekolah",
      `Mata pelajaran: ${MAPEL}`,
    ],
    faq: [
      {
        q: "Berapa biaya les privat online di Ganesha Cendekia?",
        a: `${rupiah(smp)} per sesi untuk SMP dan ${rupiah(sma)} per sesi untuk SMA, dengan durasi 90 menit. Paket ${PAKET_PRIVAT.jumlahSesi} sesi yang dibayar di muka hemat ${PAKET_PRIVAT.diskonPersen}%: ${rupiah(hargaPaket(smp))} untuk SMP dan ${rupiah(hargaPaket(sma))} untuk SMA.`,
      },
      { q: "Mata pelajaran apa saja yang bisa dipelajari?", a: `${MAPEL}, untuk jenjang SMP dan SMA. Mata pelajaran lain bisa ditanyakan dulu lewat WhatsApp.` },
      { q: "Belajarnya lewat aplikasi apa?", a: "Lewat Google Meet. Link dikirim sebelum sesi dimulai, dan catatan materi dibagikan setelah sesi selesai." },
      FAQ_DAFTAR,
    ],
  },
  "bimbel-kelompok-online": {
    path: "/bimbel-kelompok-online",
    programSlug: "kelompok",
    judulMenu: "Bimbel Kelompok Online",
    title: `Bimbel Kelompok Online, Mulai ${rb(kelompokMin)} per Siswa`,
    description: `Bimbel kelompok online 2–6 siswa bersama tutor mahasiswa ITB, UI, dan Unpad. 90 menit per sesi, mulai ${rb(kelompokMin)} per siswa. Ajak teman sekelas, makin hemat.`,
    h1: "Bimbel Kelompok Online: Ajak Teman, Makin Hemat",
    intro: [
      "Belajar bareng 2 sampai 6 teman dengan satu tutor selama 90 menit. Cocok untuk teman sekelas atau satu asrama yang sedang mempelajari materi yang sama, misalnya menjelang ujian.",
      `Tarif dihitung per siswa dan makin murah kalau kelompoknya makin besar: ${tarifTeks("kelompok")} per siswa per sesi.`,
    ],
    poin: [
      "Diskusi aktif, saling bertanya antar teman",
      "Satu tutor mahasiswa ITB, UI, atau Unpad per kelompok",
      "Materi disesuaikan dengan kisi-kisi ujian kelompok",
      "Online lewat Google Meet, bisa dari rumah atau asrama",
    ],
    faq: [
      { q: "Berapa biaya bimbel kelompok online?", a: `Per siswa per sesi 90 menit: ${tarifTeks("kelompok")}. Total biaya satu sesi tergantung jumlah siswa dalam kelompok.` },
      { q: "Apakah harus daftar bersama teman?", a: "Sebaiknya daftar bersama teman yang mempelajari materi yang sama. Kalau belum punya kelompok, tanyakan ke admin lewat WhatsApp." },
      { q: "Berapa jumlah siswa dalam satu kelompok?", a: "Dua sampai enam siswa, supaya setiap siswa tetap sempat bertanya dan dibimbing." },
      FAQ_DAFTAR,
    ],
  },
  "les-osn-online": {
    path: "/les-osn-online",
    programSlug: "osn",
    judulMenu: "Les OSN Online",
    title: `Les OSN Online bareng Tutor Medalis KSN, ${rb(osn)}/Sesi`,
    description: `Pembinaan OSN online: materi dan soal level olimpiade sains bersama tutor medalis KSN. Sesi privat 120 menit, ${rb(osn)} per sesi.`,
    h1: "Les OSN Online: Persiapan Olimpiade Sains bareng Tutor Medalis KSN",
    intro: [
      "Pembinaan OSN fokus pada pendalaman konsep dan strategi problem solving soal level olimpiade. Setiap sesi berlangsung 120 menit secara privat, sehingga latihan bisa disesuaikan dengan bidang dan kemampuan siswa.",
      `Tutornya pernah meraih medali KSN, jadi paham bentuk soal dan cara berpikir yang dibutuhkan. Tarifnya ${rupiah(osn)} per sesi.`,
    ],
    poin: [
      "Sesi privat 120 menit",
      "Tutor medalis KSN",
      "Latihan problem solving soal olimpiade",
      "Online lewat Google Meet",
    ],
    faq: [
      { q: "Berapa biaya les OSN online di Ganesha Cendekia?", a: `${rupiah(osn)} per sesi privat dengan durasi 120 menit.` },
      { q: "Kapan sebaiknya mulai persiapan OSN?", a: "Idealnya beberapa bulan sebelum OSN tingkat kabupaten/kota. Sebagai gambaran, OSN-K SMA 2026 berlangsung pada 18–19 Juni 2026." },
      { q: "Apakah cocok untuk pemula olimpiade?", a: "Cocok. Tutor memulai dari konsep dasar bidang yang dipilih, lalu bertahap ke soal-soal level olimpiade." },
      FAQ_DAFTAR,
    ],
  },
  "les-ielts-online": {
    path: "/les-ielts-online",
    programSlug: "ielts",
    judulMenu: "Les IELTS Online",
    title: `Les IELTS Online Privat, ${rb(ielts)} per Sesi`,
    description: `Les IELTS online privat untuk Listening, Reading, Writing, dan Speaking, dengan mock test berkala. 90 menit per sesi, ${rb(ielts)}.`,
    h1: "Les IELTS Online: Strategi Listening, Reading, Writing & Speaking",
    intro: [
      "Persiapan IELTS secara privat dengan strategi untuk setiap section: Listening, Reading, Writing, dan Speaking. Mock test berkala membantu mengukur perkembangan menuju band score target.",
      `Setiap sesi berlangsung 90 menit lewat Google Meet, dengan tarif ${rupiah(ielts)} per sesi.`,
    ],
    poin: [
      "Strategi tiap section IELTS",
      "Latihan Writing dan Speaking dengan umpan balik",
      "Mock test berkala",
      "Online lewat Google Meet",
    ],
    faq: [
      { q: "Berapa biaya les IELTS online?", a: `${rupiah(ielts)} per sesi privat 90 menit.` },
      { q: "Apakah ada mock test?", a: "Ada. Mock test diberikan berkala untuk mengukur perkembangan dan menentukan fokus latihan berikutnya." },
      { q: "Section mana yang dipelajari?", a: "Keempatnya: Listening, Reading, Writing, dan Speaking. Porsi tiap section disesuaikan dengan kebutuhan dan target band score." },
      FAQ_DAFTAR,
    ],
  },
  "bimbel-online-siswa-asrama": {
    path: "/bimbel-online-siswa-asrama",
    programSlug: "privat",
    judulMenu: "Bimbel untuk Siswa Asrama",
    title: "Bimbel Online untuk Siswa Asrama & Boarding School",
    description: `Bimbel online untuk siswa asrama, pesantren, dan boarding school. Belajar dari asrama bareng kakak alumni MAN Insan Cendekia yang kuliah di ITB, UI, dan Unpad. Mulai ${rb(kelompokMin)} per siswa.`,
    h1: "Bimbel Online untuk Siswa Asrama & Boarding School",
    intro: [
      "Siswa asrama dan pesantren sering tidak bisa keluar untuk ikut bimbel offline. Di Ganesha Cendekia, siswa belajar langsung dari asrama lewat Google Meet, dengan jadwal yang disesuaikan dengan jam belajar asrama.",
      "Tutornya kakak alumni MAN Insan Cendekia, sekolah berasrama, yang kini kuliah di ITB, UI, dan Unpad. Sejak 2025 Ganesha Cendekia mendampingi siswa SMAIA 28 IIBS Karanganyar sebagai sekolah mitra.",
    ],
    poin: [
      "Belajar dari asrama, jadwal mengikuti jam belajar",
      "Privat atau kelompok bersama teman satu asrama",
      "Tutor alumni sekolah berasrama, paham ritme belajar di asrama",
      "Sekolah bisa bermitra untuk program satu angkatan",
    ],
    faq: [
      { q: "Apakah bimbel online cocok untuk siswa pesantren atau boarding school?", a: "Cocok, karena siswa tidak perlu keluar asrama. Sesi berlangsung lewat Google Meet dan jadwalnya disesuaikan dengan jam belajar serta aturan penggunaan gawai di asrama." },
      { q: "Berapa biayanya untuk siswa asrama?", a: `Sama dengan program umum: privat ${tarifTeks("privat")} per sesi, atau kelompok mulai ${rupiah(kelompokMin)} per siswa per sesi. Sekolah mitra mendapat tarif khusus.` },
      { q: "Apakah sekolah bisa bekerja sama dengan Ganesha Cendekia?", a: "Bisa. SMAIA 28 IIBS Karanganyar sudah menjadi sekolah mitra sejak 2025. Sekolah bisa menghubungi kami lewat formulir di ganeshacendekia.com/daftar dengan memilih Kemitraan Sekolah." },
      FAQ_DAFTAR,
    ],
  },
};

export const LANDING_LIST = Object.values(LANDING);

export const FAQ_BERANDA: Faq[] = [
  {
    q: "Apa itu Ganesha Cendekia?",
    a: "Ganesha Cendekia adalah bimbel online untuk siswa SMP dan SMA, dengan program les privat, bimbel kelompok, pembinaan OSN, dan persiapan IELTS. Tutornya mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia. Dikelola dari Solo, Jawa Tengah, dan 100% online: siswa dari daerah mana pun bisa ikut lewat Google Meet.",
  },
  {
    q: "Berapa biaya bimbel online di Ganesha Cendekia?",
    a: `Les privat ${tarifTeks("privat")} per sesi 90 menit. Bimbel kelompok mulai ${rupiah(kelompokMin)} per siswa per sesi. Pembinaan OSN ${rupiah(osn)} per sesi 120 menit, dan persiapan IELTS ${rupiah(ielts)} per sesi.`,
  },
  {
    q: "Siapa saja tutornya?",
    a: "15 tutor mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia. Mereka mengajar Matematika, Fisika, Kimia, Biologi, Bahasa Inggris, IPS, dan IELTS.",
  },
  {
    q: "Bagaimana penilaian siswa terhadap Ganesha Cendekia?",
    a: "Dalam survei siswa Oktober 2026, rata-rata kepuasan 4,4 dari 5. Siswa menyebut tutornya sabar, penjelasannya mudah dipahami, dan nilai mereka naik.",
  },
  {
    q: "Apakah cocok untuk siswa asrama atau boarding school?",
    a: "Cocok. Siswa belajar dari asrama lewat Google Meet dengan jadwal yang mengikuti jam belajar asrama. Ganesha Cendekia sudah mendampingi siswa SMAIA 28 IIBS Karanganyar sejak 2025.",
  },
  FAQ_DAFTAR,
  {
    q: "Apakah bisa konsultasi dulu sebelum mendaftar?",
    a: `Bisa, gratis lewat WhatsApp ${SITE.teleponTampil}.`,
  },
];

// ---------- Metadata ----------

export function landingMetadata(p: LandingPage): Metadata {
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: {
      title: `${p.title} | ${SITE.nama}`,
      description: p.description,
      url: p.path,
      siteName: SITE.nama,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.nama }],
      locale: "id_ID",
      type: "website",
    },
  };
}

// ---------- Data terstruktur (schema.org JSON-LD) ----------

const ORG_ID = `${SITE.url}/#organisasi`;

export function schemaOrganisasi() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: SITE.nama,
    url: SITE.url,
    logo: `${SITE.url}/logo-gc.png`,
    image: `${SITE.url}/og.jpg`,
    description: SITE.deskripsi,
    telephone: SITE.telepon,
    sameAs: [SITE.instagram],
    address: { "@type": "PostalAddress", addressLocality: SITE.basisResmi, addressRegion: SITE.provinsi, addressCountry: "ID" },
    areaServed: { "@type": "Country", name: "Indonesia" },
    contactPoint: { "@type": "ContactPoint", telephone: SITE.telepon, contactType: "customer service", availableLanguage: ["id"] },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Program bimbel online",
      itemListElement: LANDING_LIST.filter((l) => l.path !== "/bimbel-online-siswa-asrama").map((l) => ({
        "@type": "Offer",
        url: `${SITE.url}${l.path}`,
        itemOffered: { "@type": "Service", name: program(l.programSlug).judul },
        price: Math.min(...program(l.programSlug).tarif.map((t) => t.harga)),
        priceCurrency: "IDR",
      })),
    },
  };
}

export function schemaWebsite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.nama,
    url: SITE.url,
    inLanguage: "id-ID",
    publisher: { "@id": ORG_ID },
  };
}

export function schemaFaq(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function schemaLanding(p: LandingPage) {
  const prog = program(p.programSlug);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      serviceType: prog.judul,
      description: p.description,
      url: `${SITE.url}${p.path}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: prog.tarif.map((t) => ({
        "@type": "Offer",
        name: `${prog.judul} ${t.label}`,
        price: t.harga,
        priceCurrency: "IDR",
        url: `${SITE.url}${p.path}`,
      })),
    },
    schemaFaq(p.faq),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE.url },
        { "@type": "ListItem", position: 2, name: p.judulMenu, item: `${SITE.url}${p.path}` },
      ],
    },
  ];
}
