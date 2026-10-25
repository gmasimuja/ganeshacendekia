import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { SITE, schemaOrganisasi } from "./data/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Bimbel Online SMP & SMA Terjangkau | Ganesha Cendekia",
    template: "%s | Ganesha Cendekia",
  },
  description:
    "Bimbel online SMP dan SMA bersama tutor mahasiswa ITB, UI, dan Unpad, alumni MAN Insan Cendekia. Les privat, kelompok, OSN, dan IELTS mulai Rp55 ribu per sesi.",
  applicationName: "Ganesha Cendekia",
  openGraph: {
    title: "Bimbel Online SMP & SMA Terjangkau | Ganesha Cendekia",
    description:
      "Belajar dari mana saja bersama tutor mahasiswa ITB, UI, dan Unpad. Les privat, kelompok, OSN, dan IELTS dengan tarif terjangkau.",
    url: "/",
    siteName: "Ganesha Cendekia",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Ganesha Cendekia, bimbel online SMP dan SMA" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: { google: "OeYfPgKfabMcq6LuaYoJohWco1FG3W2UZsiJfXXeaxc" },
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
      <body className="min-h-full flex flex-col">
        <JsonLd data={schemaOrganisasi()} />
        {children}
      </body>
    </html>
  );
}
