import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Advogado Nômade - Consultoria Jurídica 100% Online",
  description: "Advogado online que atende em todo Brasil. Direito trabalhista, trânsito, família, LGPD, contratos. Resposta em 5min via WhatsApp.",
  keywords: "advogado online, consultoria jurídica, direito digital, advogado trabalhista, direito trânsito",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
