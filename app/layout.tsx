// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Advogado Nômade - Direito de Qualquer Lugar",
  description: "Consultoria jurídica online 24h. Contratos, LGPD, startups, direito digital. WhatsApp 5 min.",
  metadataBase: new URL("https://advogadonomade.com.br"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/5571986482241?text=Preciso%20de%20um%20advogado%20agora" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full shadow-lg flex items-center gap-2 transition-all"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </body>
    </html>
  );
}
