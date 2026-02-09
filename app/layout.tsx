import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar"; // Navbar'ı içe aktar
import Footer from "@/components/Footer"; // Footer'ı içe aktar
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], // Tüm ağırlıkları ekledim
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ferivonizm | Adalet ve Kabul",
  description: "Ferivonus'un izinde, birliğin ışığında, günahın gölgesinde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${cinzel.variable} ${cormorant.variable} bg-black text-stone-300 antialiased flex flex-col min-h-screen`}>
        {/* Navbar her zaman üstte */}
        <Navbar />
        
        {/* İçerik, Navbar'ın altında kalmasın diye padding-top (pt-20) ekleyebiliriz veya main içinde hallederiz. 
            Burada esnek bırakıyorum. */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Footer her zaman altta */}
        <Footer />
      </body>
    </html>
  );
}