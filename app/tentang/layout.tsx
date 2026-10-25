import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Kami: Bimbel Online oleh Alumni ITB & MAN IC',
  description:
    'Ganesha Cendekia didirikan oleh alumni ITB dan MAN Insan Cendekia Serpong. Tutor mahasiswa ITB, UI, dan Unpad mendampingi siswa SMP–SMA belajar dari mana saja.',
  alternates: { canonical: '/tentang' },
}

export default function TentangLayout({ children }: { children: React.ReactNode }) {
  return children
}
