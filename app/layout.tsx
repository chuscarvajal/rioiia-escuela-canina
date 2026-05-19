import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rioiia Escuela Canina | Adiestramiento en La Rioja",
  description: "Escuela canina en Albelda de Iregua, La Rioja. Adiestramiento y educación canina, modificación de conductas, Club Agility y Club Mushing. 4.8★ en Google.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
