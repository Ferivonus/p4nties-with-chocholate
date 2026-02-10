import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { disciples } from "@/data/muritler/muritler_data";

// Next.js 15+ için Props Tipi (Params artık bir Promise)
type Props = {
  params: Promise<{ id: string }>;
};

// --- DYNAMIC METADATA (ASYNC FIXED) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Params'ı await etmemiz gerekiyor (Next.js 15 kuralı)
  const { id } = await params;
  
  const disciple = disciples.find((d) => d.id === Number(id));
  if (!disciple) return { title: "Kayıp Kayıt | Ferivonizm" };
  
  return {
    title: `Dosya: ${disciple.ref} | ${disciple.name}`,
    description: "Konsey arşivindeki mühürlü kayıt.",
  };
}

// --- SAYFA BİLEŞENİ (ASYNC FIXED) ---
export default async function DiscipleDetailPage({ params }: Props) {
  // Params'ı await ediyoruz
  const { id } = await params;
  
  const disciple = disciples.find((d) => d.id === Number(id));

  if (!disciple) {
    notFound();
  }

  // Ferivonus için özel stil kontrolü
  const isFounder = disciple.id === 0;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black flex justify-center selection:bg-red-900 selection:text-white">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 animate-fade-in">
        
        {/* SOL SÜTUN: GÖRSEL VE KİMLİK (4/12) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* FOTOĞRAF KARTI */}
          <div className={`relative aspect-[3/4] w-full border bg-stone-950 p-2 group shadow-2xl shadow-black ${isFounder ? 'border-red-900' : 'border-stone-800'}`}>
             <div className="relative w-full h-full overflow-hidden">
                <Image 
                 src={disciple.image} 
                 alt={disciple.name}
                 fill
                 className={`object-cover contrast-125 transition-all duration-1000 ease-in-out ${isFounder ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
               />
               {/* Arşiv Damgası */}
               <div className="absolute top-4 right-4 border border-stone-500/30 bg-black/50 backdrop-blur-md px-3 py-1">
                 <span className={`font-mono text-xs tracking-widest ${isFounder ? 'text-red-500' : 'text-stone-300'}`}>{disciple.ref}</span>
               </div>
             </div>
             
             {/* Kırmızı Mühür Efekti */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-900/10 rounded-full blur-xl"></div>
          </div>

          {/* KÜNYE BİLGİLERİ */}
          <div className="border-t border-b border-stone-900 py-6 space-y-4">
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Rütbe</span>
               <span className={`font-cinzel text-sm uppercase tracking-widest ${
                 isFounder ? "text-red-600 font-bold" : 
                 disciple.level === "Yüce Hiçlik" ? "text-red-500" : "text-stone-300"
               }`}>{disciple.level}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Rol</span>
               <span className="font-cormorant text-lg text-stone-400 italic">{disciple.role}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Döngü</span>
               <span className="font-mono text-xs text-stone-500">{disciple.joined}</span>
             </div>
          </div>

          {/* GERİ DÖN */}
          <Link href="/muritler" className="group flex items-center gap-3 text-stone-600 hover:text-red-600 transition-colors">
            <span className="font-mono text-lg">←</span>
            <span className="font-cinzel text-xs tracking-[0.2em] uppercase">Arşivi Kapat</span>
          </Link>
        </div>

        {/* SAĞ SÜTUN: RUHSAL ANALİZ (8/12) */}
        <div className="lg:col-span-8 space-y-12 lg:pl-12 lg:border-l border-stone-900/50">
          
          {/* BAŞLIK */}
          <header className="space-y-4">
             <div className="inline-flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${isFounder ? 'bg-red-600' : 'bg-red-900'}`}></div>
                <span className="font-mono text-xs text-red-900 uppercase tracking-widest">
                  {isFounder ? 'GİZLİ PROTOKOL' : 'DOSYA AÇIK'}
                </span>
             </div>
             <h1 className="text-5xl md:text-7xl font-cinzel text-stone-100 tracking-tight leading-none uppercase">
               {disciple.name}
             </h1>
             <p className="font-cinzel text-sm text-stone-500 tracking-[0.4em] uppercase border-b border-stone-800 pb-8">
               Kusur: <span className="text-red-700 font-bold">{disciple.sin}</span>
             </p>
          </header>

          {/* MANİFESTO (Biyografi) */}
          <section className="space-y-6">
             <h3 className="font-cinzel text-stone-400 text-xs uppercase tracking-[0.2em] flex items-center gap-4">
               <span className="w-8 h-px bg-stone-800"></span>
               {isFounder ? 'Varlık Beyanı' : 'Vaka Analizi'}
             </h3>
             <p className="font-cormorant text-xl md:text-2xl text-stone-300 leading-relaxed italic border-l-2 border-stone-800 pl-8 py-2">
               &quot;{disciple.manifesto}&quot;
             </p>
          </section>

          {/* KONSEY HÜKMÜ */}
          <section className={`p-8 border relative overflow-hidden ${isFounder ? 'bg-red-950/20 border-red-900/30' : 'bg-stone-950 border-stone-900'}`}>
             {/* Arka plan dekoru */}
             <div className="absolute top-0 right-0 p-4 opacity-10 font-cinzel text-6xl text-stone-700 select-none">†</div>
             
             <h3 className="font-cinzel text-red-900 text-xs uppercase tracking-[0.2em] mb-4">
               {isFounder ? 'KEHANET' : 'KONSEY HÜKMÜ'}
             </h3>
             <p className="font-mono text-sm text-stone-400 leading-loose">
               {disciple.judgment}
             </p>
          </section>

          {/* RUHSAL KOORDİNATLAR (Stats) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-stone-500 uppercase tracking-widest">Hiçlik</span>
                <span className="font-mono text-xs text-stone-300">{disciple.stats.voidResonance}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className={`absolute top-0 left-0 h-px ${isFounder ? 'bg-red-600' : 'bg-stone-400'}`} style={{ width: `${disciple.stats.voidResonance}%` }}></div>
                <div className={`absolute -top-1 w-2 h-3 ${isFounder ? 'bg-red-600 shadow-[0_0_15px_red]' : 'bg-stone-100'}`} style={{ left: `${disciple.stats.voidResonance}%` }}></div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-stone-500 uppercase tracking-widest">Denge</span>
                <span className="font-mono text-xs text-stone-300">{disciple.stats.balance}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className={`absolute top-0 left-0 h-px ${isFounder ? 'bg-red-600' : 'bg-stone-400'}`} style={{ width: `${disciple.stats.balance}%` }}></div>
                <div className={`absolute -top-1 w-2 h-3 ${isFounder ? 'bg-red-600 shadow-[0_0_15px_red]' : 'bg-stone-100'}`} style={{ left: `${disciple.stats.balance}%` }}></div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-red-900 uppercase tracking-widest">Yük</span>
                <span className="font-mono text-xs text-red-600">{disciple.stats.burden}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className="absolute top-0 left-0 h-px bg-red-900" style={{ width: `${disciple.stats.burden}%` }}></div>
                <div className="absolute -top-1 w-2 h-3 bg-red-600 shadow-[0_0_10px_red]" style={{ left: `${disciple.stats.burden}%` }}></div>
              </div>
            </div>

          </section>

        </div>
      </div>
    </main>
  );
}