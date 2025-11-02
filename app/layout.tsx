import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header"; // Se o components estiver dentro de app, então é ./components/Header, mas se estiver na raiz do projeto, então é ../components/Header
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat"; // Corrigir o nome para WhatsAppFloat

export const metadata: Metadata = {
  // ... metadados
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
