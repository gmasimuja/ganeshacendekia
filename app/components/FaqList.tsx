import type { Faq } from '../data/seo'

// Daftar tanya-jawab yang bisa dibuka-tutup tanpa JavaScript (<details>), tetap terbaca mesin pencari.
export default function FaqList({ faq, judul = 'Pertanyaan yang Sering Diajukan' }: { faq: Faq[]; judul?: string }) {
  return (
    <section className="bg-white py-16 md:py-20 px-6" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-10">{judul}</h2>
        <div className="space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-slate-900 text-base md:text-lg">
                <h3 className="text-base md:text-lg font-bold">{f.q}</h3>
                <span className="text-[#2F80ED] text-2xl leading-none transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
