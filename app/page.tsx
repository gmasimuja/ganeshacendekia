import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bimbel Online Berbasis Tutor <br />
          Alumni Insan Cendekia & PTN Favorit
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Pendampingan SMP–SMA, OSN, dan IELTS bersama tutor alumni
          MAN Insan Cendekia yang kini kuliah di ITB, UI, dan Unpad.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Daftar Sekarang
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Konsultasi Gratis
          </button>
        </div>
      </section> <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">
      Program Unggulan
    </h2>

    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      Program belajar terstruktur untuk mendampingi siswa dari SMP hingga
      persiapan OSN dan IELTS.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mt-12">
      {/* SMP */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg">SMP</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Penguatan konsep dasar dan pendampingan akademik untuk siswa SMP.
        </p>
      </div>

      {/* SMA */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg">SMA</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Pembelajaran konseptual dan latihan soal untuk siswa SMA.
        </p>
      </div>

      {/* OSN */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg">OSN</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Pendalaman materi dan strategi problem solving tingkat olimpiade.
        </p>
      </div>

      {/* IELTS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg">IELTS</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Persiapan IELTS dengan fokus strategi dan peningkatan skor.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center">
      Tutor Kami
    </h2>

    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
      Tutor Ganesha Cendekia merupakan alumni MAN Insan Cendekia
      yang saat ini menempuh pendidikan di kampus PTN favorit.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {/* Tutor 1 */}
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
        <h3 className="mt-4 font-semibold">Tutor Matematika</h3>
        <p className="text-sm text-gray-600">
          Alumni MAN Insan Cendekia<br />
          Mahasiswa ITB
        </p>
      </div>

      {/* Tutor 2 */}
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
        <h3 className="mt-4 font-semibold">Tutor Fisika</h3>
        <p className="text-sm text-gray-600">
          Alumni MAN Insan Cendekia<br />
          Mahasiswa UI
        </p>
      </div>

      {/* Tutor 3 */}
      <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200"></div>
        <h3 className="mt-4 font-semibold">Tutor Bahasa Inggris</h3>
        <p className="text-sm text-gray-600">
          Alumni MAN Insan Cendekia<br />
          Mahasiswa Unpad
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-blue-500 text-white py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold">
      Siap Belajar Bersama Tutor Terbaik?
    </h2>

    <p className="mt-4 text-lg">
      Konsultasi gratis untuk menentukan program terbaik sesuai kebutuhan.
    </p>

    <a
      href="https://wa.me/6281221595529"
      className="inline-block mt-8 bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold"
    >
      Konsultasi Gratis via WhatsApp
    </a>
  </div>
</section>

    </main>
  );
}
