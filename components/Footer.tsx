import Link from 'next/link';

// Yılı Romen Rakamına Çevirme Yardımcısı
const toRoman = (num: number): string => {
  const lookup: { [key: string]: number } = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let roman = '';
  for (const i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export default function Footer() {
  const currentYear = toRoman(new Date().getFullYear());

  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-24 pb-12 relative overflow-hidden">
      
      {/* --- ARKA PLAN EFEKTLERİ --- */}
      <div className="absolute top-0 right-10 text-[15rem] md:text-[20rem] font-cinzel text-stone-900/20 select-none pointer-events-none leading-none -translate-y-1/2">
        IX
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-red-950/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 relative z-10">
        
        {/* --- BÖLÜM 1: KİMLİK (Sol - 5/12) --- */}
        <div className="md:col-span-5 space-y-8">
          <Link href="/" className="inline-block group">
            <h2 className="font-cinzel text-3xl text-stone-100 tracking-[0.2em] group-hover:text-red-700 transition-colors duration-500">
              FERIVONIZM
            </h2>
          </Link>
          
          <div className="w-12 h-px bg-red-900"></div>

          <p className="font-cormorant text-stone-500 text-xl italic leading-relaxed max-w-sm">
            &quot;Işık, sadece karanlığını kabul edenlere görünür. Adaletle yargıla, hiçlikte birleş. Burası son durak değil, ilk uyanıştır.&quot;
          </p>

          <div className="pt-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 border border-stone-800 rounded-full bg-black/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                </span>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Sistem: Aktif</span>
             </div>
          </div>
        </div>

        {/* --- BÖLÜM 2: YÖNELİMLER (Orta - 3/12) --- */}
        <div className="md:col-span-3 space-y-8">
          <h3 className="font-cinzel text-xs text-red-800 tracking-[0.4em] uppercase border-b border-stone-800 pb-4 inline-block">
            Protokoller
          </h3>
          <ul className="space-y-4 font-cinzel text-xs text-stone-400 tracking-widest uppercase">
            <li>
                <Link href="/" className="hover:text-stone-100 hover:translate-x-2 transition-all inline-block duration-300">
                    Başlangıç
                </Link>
            </li>
            <li>
                <Link href="/blog" className="hover:text-stone-100 hover:translate-x-2 transition-all inline-block duration-300">
                    Arşiv & Vahiyler
                </Link>
            </li>
            <li>
                <Link href="/muritler" className="hover:text-stone-100 hover:translate-x-2 transition-all inline-block duration-300">
                    Hiyerarşi
                </Link>
            </li>
            <li>
                <Link href="/iletisim" className="hover:text-stone-100 hover:translate-x-2 transition-all inline-block duration-300">
                    İntisap Kapısı
                </Link>
            </li>
          </ul>
        </div>

        {/* --- BÖLÜM 3: FİZİKSEL KONUM (Sağ - 4/12) --- */}
        <div className="md:col-span-4 space-y-8">
          <h3 className="font-cinzel text-xs text-red-800 tracking-[0.4em] uppercase border-b border-stone-800 pb-4 inline-block">
            Mabet Konumu
          </h3>
          <div className="space-y-4">
            <p className="font-cormorant text-xl text-stone-400">
              Dünya Üzerinde, Saklı Bir Mabet<br />
              <span className="text-sm opacity-60">Fiziksel Erişim: Kısıtlı</span>
            </p>
            <p className="font-mono text-xs text-stone-600 tracking-widest">
              KONUM: [GİZLENMİŞ]
            </p>
            
            <a 
                href="mailto:contact@ferivonism.com" 
                className="inline-block mt-4 text-stone-500 hover:text-red-500 transition-colors font-cinzel text-xs tracking-widest border border-stone-800 px-6 py-3 hover:border-red-900 bg-black/50"
            >
              ferivonus@void.com
            </a>
          </div>
        </div>

      </div>

      {/* --- ALT ÇİZGİ VE TELİF --- */}
      <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-stone-600 font-cinzel text-[10px] tracking-[0.2em] uppercase">
        <p>&copy; {currentYear} Ferivonistik İnanç Topluluğu.</p>
        
        <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span className="hover:text-stone-300 transition-colors cursor-pointer">Gizlilik Yemini</span>
            <span className="hover:text-stone-300 transition-colors cursor-pointer">İtaat Şartları</span>
        </div>
      </div>
    </footer>
  );
}