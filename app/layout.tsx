import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Advogado Nômade - Consultoria Jurídica 100% Online",
  description: "Advogado online que atende em todo Brasil. Direito trabalhista, trânsito, família, LGPD, contratos. Resposta em 5min via WhatsApp.",
  keywords: "advogado online, consultoria jurídica, direito digital, advogado trabalhista, direito trânsito",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        <main className="flex-1 pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
