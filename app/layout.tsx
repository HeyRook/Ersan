import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASISTAN | Uzman bulun, müsait saat görün, randevu alın",
  description:
    "ASISTAN; KKTC ve Türkiye için mobil öncelikli uzman keşfi, canlı müsaitlik, randevu, doğrulanmış yorum ve sağlayıcı yönetim platformudur.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1B2B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
