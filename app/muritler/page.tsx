import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { disciples } from "@/data/muritler/muritler_data";

export const metadata: Metadata = {
  title: "Karanlık Hiyerarşi | Ferivonizm",
  description: "Gölgeyle bütünleşenler, teraziyi tutanlar ve yola yeni düşenler.",
};



export default function DisciplesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black selection:bg-red-900 selection:text-white">
      
      {/* 1. SAHNE GİRİŞİ (HEADER) */}
      <div className="max-w-5xl mx-auto mb-24 relative">
        {/* Arka planda silik devasa yazı */}
        <div className="absolute -top-20 -left-10 text-[12rem] font-cinzel font-black text-stone-900/40 select-none pointer-events-none opacity-20 z-0">
          IX
        </div>
        
        <div className="relative z-10 space-y-6 pl-4 border-l-2 border-red-900 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-cinzel text-stone-100 tracking-tight leading-none">
            YÜZLER VE<br />GÖLGELER
          </h1>
          <p className="text-xl text-stone-500 font-cormorant italic max-w-xl">
            &quot;Burada rütbe bir onur nişanı değil, taşınan kusurun ağırlığıdır. Kimse masum değildir, sadece bazıları kendi karanlığıyla yüzleşmiştir.&quot;
          </p>
        </div>
      </div>

      {/* 2. PORTRE GALERİSİ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        
        {disciples.map((disciple) => {
          // Ferivonus için özel stil kontrolü
          const isFounder = disciple.id === 0;

          return (
            <Link 
              key={disciple.id} 
              href={`/muritler/${disciple.id}`}
              className="group relative block animate-fade-in"
            >
              {/* ÇERÇEVE VE RESİM */}
              <div className={`relative aspect-[3/4] overflow-hidden border bg-stone-950 transition-colors duration-500 ${
                  isFounder ? 'border-red-900 shadow-[0_0_30px_rgba(153,27,27,0.2)]' : 'border-stone-800 group-hover:border-red-900'
                }`}>
                
                {/* Resim */}
                <Image 
                  src={disciple.image} 
                  alt={disciple.name}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    isFounder 
                      ? 'grayscale-0 contrast-125 scale-105' // Kurucu her zaman canlı ve baskın
                      : 'grayscale group-hover:grayscale-0 group-hover:scale-105'
                  }`}
                />

                {/* Arşiv Numarası (Sağ Üst) */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`font-mono text-[10px] px-2 py-1 border backdrop-blur-sm ${
                      isFounder 
                        ? 'bg-red-950/80 border-red-800 text-red-200' 
                        : 'bg-black/80 border-stone-800 text-stone-500 group-hover:text-stone-300'
                    }`}>
                    {disciple.ref}
                  </span>
                </div>

                {/* Alt Bilgi Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                    isFounder 
                      ? 'from-red-950/80 via-transparent to-transparent opacity-100' // Kurucunun aurası kırmızı
                      : 'from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100'
                  }`}></div>
                
                {/* Kart İçi Metinler */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
                  
                  {/* Rütbe (Seviye) - Renk Kodları */}
                  <span className={`inline-block font-cinzel text-[10px] tracking-[0.2em] uppercase mb-2 transition-colors duration-300 ${
                    isFounder ? "text-red-500 font-black animate-pulse" :
                    disciple.level === "Yüce Hiçlik" ? "text-red-600 font-bold" : 
                    disciple.level === "Adalet Terazisi" ? "text-stone-300" : "text-stone-500"
                  }`}>
                    {disciple.level}
                  </span>

                  {/* İsim */}
                  <h3 className={`text-2xl font-cinzel leading-none mb-1 transition-transform duration-300 ${
                      isFounder ? 'text-red-100 group-hover:translate-x-0' : 'text-stone-100 group-hover:translate-x-1'
                    }`}>
                    {disciple.name}
                  </h3>
                  
                  {/* Rol */}
                  <p className={`font-cormorant italic text-sm mb-6 ${isFounder ? 'text-red-300/70' : 'text-stone-500'}`}>
                    {disciple.role}
                  </p>

                  {/* GİZLİ BÖLÜM: GÜNAH (Hover ile açılır) */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out border-t ${
                      isFounder 
                        ? 'max-h-20 border-red-900/50' // Kurucunun günahı hep açık
                        : 'max-h-0 group-hover:max-h-20 border-stone-800/0 group-hover:border-stone-800'
                    }`}>
                    <div className="pt-3 flex items-center justify-between">
                      <span className={`text-[10px] font-cinzel uppercase tracking-widest ${isFounder ? 'text-red-800' : 'text-stone-600'}`}>
                        {isFounder ? 'Ebedi Yük' : 'Kabul Edilen Leke'}
                      </span>
                      <span className="text-xs font-cinzel text-red-600 font-bold uppercase tracking-widest">
                        {disciple.sin}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </Link>
          );
        })}
      </div>

      {/* 3. DİPNOT */}
      <div className="mt-32 text-center border-t border-stone-900 pt-12">
        <p className="font-cormorant text-stone-600 italic">
          * Konsey, her ruhun taşıyabileceği kadar yük verir. Fazlası kırar, azı çürütür.
        </p>
      </div>

    </main>
  );
}