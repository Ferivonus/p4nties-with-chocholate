import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yasak Arşiv | Ferivonizm",
  description: "Ferivonus'un gölgesinden süzülen, mühürlenmiş hakikatler.",
};

// VERİ YAPISI: Ferivonistik Doktrin ile %100 uyumlu
const archives = [
  {
    id: 1,
    title: "Vahiy I: Lekenin Kutsallığı",
    excerpt: "Kusursuzluk, tanrıların insanı kandırmak için uydurduğu bir yalandır. Mermer çatlarsa değerini yitirir sanırsın; oysa ışık, o çatlaktan içeri sızar. Yaralarını saklama, onlar senin haritandır.",
    cycle: "MMXXIV • BAŞLANGIÇ",
    type: "TEMEL RİSALE",
    slug: "gunahin-kutsalligi",
    accessLevel: "HERKES"
  },
  {
    id: 2,
    title: "Hüküm III: Soğuk Terazi",
    excerpt: "Bir annenin gözyaşı ile bir katilin kanı, Ferivonus'un terazisinde aynı ağırlıktadır. Adalet hissetmez. Adalet ağlamaz. Evrenin aritmetiğinde merhamete yer yoktur, sadece denge vardır.",
    cycle: "MMXXIV • ADALET",
    type: "KANUN",
    slug: "adaletin-soguk-yuzu",
    accessLevel: "HERKES"
  },
  {
    id: 3,
    title: "İç Görü: Yokluk Aynası",
    excerpt: "Aynaya baktığında gördüğün şey sen değilsin. O sadece etten bir kafes. Gözlerini kapattığında geriye kalan o derin sessizlik... İşte o sensin. Biz, okyanusa düşen ve ismini unutan damlalarız.",
    cycle: "MMXXIV • BİRLİK",
    type: "MEDİTASYON",
    slug: "birlik-ve-hiclik",
    accessLevel: "MÜRİT"
  },
  {
    id: 4,
    title: "Protokol: Sessizlik Yemini",
    excerpt: "Ayin başladığında sözcükler ölür. Çünkü dil, yalan söylemek için evrimleşmiştir. Hakikat sadece niyetlerde ve nefeste saklıdır. Konuşan, kaybeder.",
    cycle: "MMXXIV • RİTÜEL",
    type: "TALİMAT",
    slug: "karanlik-ayin",
    accessLevel: "MÜRİT"
  },
  {
    id: 5,
    title: "Gözlem: Beton ve Ruh",
    excerpt: "Şehrin gürültüsü, ruhun çığlığını bastırmak için tasarlanmış bir işkencedir. Duvarların arasında Ferivonus'u duymak için kulaklarını değil, zihnini kapatmalısın.",
    cycle: "MMXXIII • YAŞAM",
    type: "GÖZLEM",
    slug: "modern-cilecilik",
    accessLevel: "HERKES"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black selection:bg-red-900 selection:text-white relative overflow-hidden">
      
      {/* 1. ARKA PLAN EFEKTLERİ */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-stone-900/20 via-black to-black pointer-events-none"></div>
      {/* Noise (Gürültü) Dokusu */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      {/* 2. ATMOSFERİK BAŞLIK */}
      <div className="max-w-4xl mx-auto text-center mb-24 space-y-8 relative z-10 animate-fade-in">
        
        <div className="inline-flex items-center gap-2 px-4 py-1 border border-stone-800 rounded-full bg-stone-950/50 backdrop-blur-sm">
           <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
           <p className="font-mono text-[10px] text-stone-500 tracking-[0.2em] uppercase">
             Sistem: Çevrimiçi • Protokol 84-B
           </p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-cinzel text-stone-100 tracking-tight leading-none drop-shadow-2xl">
          ARŞİV <span className="text-red-900">IX</span>
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-stone-800"></div>
          <p className="text-lg text-stone-500 font-cormorant italic">
            &quot;Söz uçar, yazı ruha mühürlenir.&quot;
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-stone-800"></div>
        </div>
      </div>

      {/* 3. ARŞİV LİSTESİ */}
      <div className="max-w-5xl mx-auto flex flex-col gap-0 border-t border-stone-900 relative z-10">
        
        {archives.map((doc, index) => (
          <Link 
            key={doc.id} 
            href={`/blog/${doc.slug}`}
            className="group relative border-b border-stone-900 p-8 md:p-12 transition-all duration-500 hover:bg-stone-950"
          >
            {/* Hover sırasında solda beliren dikey kırmızı çizgi */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              
              {/* SOL SÜTUN: Meta Veriler */}
              <div className="md:w-1/4 flex flex-col gap-3 pt-2">
                <span className="font-mono text-[10px] text-red-900 tracking-[0.2em] uppercase border border-red-900/20 px-2 py-1 self-start rounded bg-red-950/5">
                  {doc.type}
                </span>
                <span className="font-cinzel text-xs text-stone-600 tracking-widest group-hover:text-stone-400 transition-colors">
                  {doc.cycle}
                </span>
                {/* Romen Rakamı İndeks */}
                <span className="hidden md:block mt-2 font-cinzel text-5xl text-stone-900/50 group-hover:text-stone-800 transition-colors select-none">
                  {["I", "II", "III", "IV", "V", "VI"][index]}
                </span>
              </div>

              {/* SAĞ SÜTUN: İçerik */}
              <div className="md:w-3/4 space-y-4">
                <h2 className="text-2xl md:text-4xl font-cinzel text-stone-300 group-hover:text-stone-100 transition-colors duration-300">
                  {doc.title}
                </h2>
                
                <p className="text-lg text-stone-500 font-cormorant leading-relaxed group-hover:text-stone-400 transition-colors duration-300 max-w-2xl border-l-2 border-stone-900 pl-4 group-hover:border-stone-700">
                  {doc.excerpt}
                </p>

                {/* Alt Bar: Erişim Seviyesi ve Eylem */}
                <div className="pt-6 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                   <span className="font-mono text-[10px] text-stone-600 uppercase tracking-widest">
                     Erişim: {doc.accessLevel}
                   </span>
                   <div className="flex items-center gap-2">
                      <span className="text-[10px] font-cinzel text-stone-400 tracking-[0.2em] uppercase group-hover:text-red-500 transition-colors">
                        Dosyayı İncele
                      </span>
                      <span className="text-red-900 group-hover:translate-x-1 transition-transform">→</span>
                   </div>
                </div>
              </div>

            </div>
          </Link>
        ))}

      </div>

      {/* ALT NOT - DÜZELTİLDİ: String içine alındı */}
      <div className="text-center mt-24 opacity-50 hover:opacity-100 transition-opacity">
        <p className="font-mono text-[10px] text-stone-600 uppercase tracking-widest">
          {"/// Arşiv Sonu • Yetkisiz Erişim Loglandı ///"}
        </p>
      </div>

    </main>
  );
}