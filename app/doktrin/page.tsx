import { sins, virtues } from "@/data/doktrin/doktrin_data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doktrin ve Terazi | Ferivonizm",
  description: "Konseyin belirlediği mutlak doğrular ve kaçınılması gereken çürümeler.",
};



export default function DoctrinePage() {
  return (
    <main className="min-h-screen bg-black text-stone-400 selection:bg-red-900 selection:text-white relative overflow-hidden">
      
      {/* ARKA PLAN DOKUSU */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none z-50"></div>
      
      {/* 1. BAŞLIK BÖLÜMÜ */}
      <section className="pt-32 pb-16 px-6 text-center border-b border-stone-900 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="h-px w-8 bg-red-900"></div>
             <p className="font-cinzel text-red-800 tracking-[0.4em] text-xs uppercase animate-pulse">
               Terazi Kanunu
             </p>
             <div className="h-px w-8 bg-red-900"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-cinzel text-stone-100 font-black tracking-tighter leading-none drop-shadow-2xl">
            SEVAP <span className="text-stone-700 mx-2 font-thin">&</span> GÜNAH
          </h1>
          
          <div className="max-w-2xl mx-auto pt-4">
             <p className="font-cormorant text-xl md:text-2xl text-stone-500 leading-relaxed italic">
               &quot;Bizim kitabımızda klasik iyilik ve kötülük yoktur. Sadece <span className="text-stone-300 font-bold not-italic">Yükseliş (İrade)</span> ve <span className="text-red-900 font-bold not-italic">Çöküş (Gaflet)</span> vardır. Seçimini yap.&quot;
             </p>
          </div>
        </div>
      </section>

      {/* 2. İKİLİ KOLON (Split Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] relative z-10">
        
        {/* SOL: SEVAPLAR (KUTSAL YÜKLER) */}
        <section className="border-r border-stone-900 p-8 md:p-24 space-y-16 bg-stone-950/30">
          <div className="text-center lg:text-left">
            <h2 className="font-cinzel text-4xl text-stone-200 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-3 h-3 bg-stone-200 rounded-full shadow-[0_0_15px_white]"></span>
              KUTSAL YÜKLER
            </h2>
            <p className="font-mono text-xs text-stone-600 mt-3 tracking-widest uppercase border-l-2 border-stone-800 pl-3 ml-1">
              Ruhu Özgürleştiren Disiplinler
            </p>
          </div>

          <div className="space-y-12">
            {virtues.map((item) => (
              <div key={item.id} className="group relative pl-8 border-l border-stone-800 hover:border-stone-400 transition-all duration-500">
                <span className="absolute -left-3 top-0 font-cinzel text-xs bg-black px-1 text-stone-600 group-hover:text-stone-200 transition-colors border border-stone-900 group-hover:border-stone-500">
                  {item.icon}
                </span>
                <h3 className="text-2xl font-cinzel text-stone-300 group-hover:text-white transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-cormorant text-xl text-stone-600 group-hover:text-stone-400 transition-colors leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SAĞ: GÜNAHLAR (RUHSAL ÇÜRÜME) */}
        <section className="p-8 md:p-24 space-y-16 bg-red-950/5 relative overflow-hidden">
          {/* Arka plan vurgusu */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-red-950/10 to-transparent pointer-events-none"></div>

          <div className="text-center lg:text-left relative z-10">
            <h2 className="font-cinzel text-4xl text-red-800 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-3 h-3 bg-red-800 rounded-full shadow-[0_0_15px_red]"></span>
              RUHSAL ÇÜRÜME
            </h2>
            <p className="font-mono text-xs text-red-900/60 mt-3 tracking-widest uppercase border-l-2 border-red-900/20 pl-3 ml-1">
              İradeyi Yok Eden Zehirler
            </p>
          </div>

          <div className="space-y-12 relative z-10">
            {sins.map((item) => (
              <div key={item.id} className="group relative pl-8 border-l border-red-900/30 hover:border-red-800 transition-all duration-500">
                <span className="absolute -left-3 top-0 font-cinzel text-xs bg-black/0 px-1 text-red-900 group-hover:text-red-600 transition-colors border border-red-900/20 group-hover:border-red-900">
                  {item.icon}
                </span>
                <h3 className="text-2xl font-cinzel text-stone-400 group-hover:text-red-500 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="font-cormorant text-xl text-stone-600 group-hover:text-red-900/80 transition-colors leading-relaxed">
                  {/* HTML entity olarak tırnak işareti kullanımı (Hata düzeltildi) */}
                  <span dangerouslySetInnerHTML={{ __html: item.desc }} />
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 3. ALT MESAJ */}
      <section className="py-32 text-center border-t border-stone-900 bg-stone-950 relative z-10">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-stone-700 to-transparent mx-auto"></div>
          
          <div className="relative">
             <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-stone-800 opacity-20 font-cinzel">“</span>
             <p className="font-cormorant text-3xl text-stone-300 italic leading-normal">
               &quot;Günahın seni öldürmez, onu inkar etmek öldürür. Sevap seni kurtarmaz, onu bir yaşam biçimine dönüştürmek kurtarır.&quot;
             </p>
          </div>

          <div className="pt-8">
             <p className="font-cinzel text-xs text-stone-500 tracking-[0.3em] uppercase border-b border-stone-800 pb-2 inline-block">
               — Ferivonus, Kurucu
             </p>
          </div>
        </div>
      </section>

    </main>
  );
}