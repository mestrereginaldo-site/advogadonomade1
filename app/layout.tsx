// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advogado Nômade - Direito de Qualquer Lugar",
  description:
    "Consultoria jurídica online 24h. Contratos, LGPD, startups, direito digital. Atendimento via WhatsApp em 5 min.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-white">
        <Header />
        {/* Espaço responsivo: maior em telas grandes, menor em mobile */}
        <main className="pt-28 md:pt-32 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
