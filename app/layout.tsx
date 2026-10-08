import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ganeshacendekia.com"),
  title: "Ganesha Cendekia | Bimbel online SMA, OSN, IELTS 🎓",
  description:
    "Bimbel online privat & kelompok untuk SMP–SMA, OSN, dan IELTS bersama tutor mahasiswa ITB, UI, dan Unpad. Mulai Rp55 ribu per sesi.",
  openGraph: {
    title: "Ganesha Cendekia | Bimbel online SMA, OSN, IELTS",
    description:
      "Belajar dari mana saja bersama tutor mahasiswa ITB, UI, dan Unpad. Privat, kelompok, OSN, dan IELTS dengan tarif terjangkau.",
    url: "https://www.ganeshacendekia.com",
    siteName: "Ganesha Cendekia",
    images: ["/logo-gc.png"],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
