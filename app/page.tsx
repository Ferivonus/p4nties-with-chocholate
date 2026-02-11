import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-stone-400 selection:bg-red-900 selection:text-white relative">
      
      {/* GLOBAL DOKU: Eski film/noise efekti */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none z-50"></div>

      {/* 1. HERO: MUTLAK İRADE */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-stone-900">
        
        {/* Arka Plan: Koyu Kırmızı Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black z-0 pointer-events-none" />
        
        {/* Dekoratif Dikey Çizgi */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-stone-800 to-transparent"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-12 animate-fade-in">
          
          {/* Üst Mühür */}
          <div className="flex items-center justify-center gap-4 opacity-70">
            <div className="h-px w-12 bg-red-900"></div>
            <span className="font-cinzel text-xs tracking-[0.4em] text-red-700 uppercase">
              Protokol IX-000
            </span>
            <div className="h-px w-12 bg-red-900"></div>
          </div>

          {/* Ana Tipografi */}
          <div className="space-y-4">
            <h1 className="font-cinzel text-6xl md:text-9xl font-black text-stone-100 tracking-tighter mix-blend-difference z-20 drop-shadow-2xl">
              FERIVONIZM
            </h1>
            <p className="font-cinzel text-lg md:text-2xl text-stone-600 tracking-[0.5em] uppercase border-t border-stone-900 pt-6 inline-block">
              İtaat • Kabul • Hiçlik
            </p>
          </div>
          
          {/* Ferivonus'un Alıntısı (Manifesto) */}
          <div className="max-w-2xl mx-auto pt-8">
            <p className="font-cormorant text-2xl md:text-3xl text-stone-400 italic leading-relaxed">
              &quot;Tanrı yoktu... Bu yüzden o koltuğa ben oturdum. Ve inanın bana, o koltuk bile benim arzularıma dar geliyor.&quot;
            </p>
            <p className="mt-4 font-cinzel text-xs text-red-800 tracking-widest uppercase">
              — Ferivonus, Kurucu
            </p>
          </div>
          
          {/* Eylem Butonları */}
          <div className="flex flex-col md:flex-row gap-8 justify-center pt-12">
            <Link 
              href="/blog" 
              className="group relative px-10 py-4 border-l border-r border-stone-800 hover:border-red-900 text-stone-400 hover:text-red-500 font-cinzel tracking-widest transition-all duration-500 bg-black/50 backdrop-blur-sm"
            >
              <span className="absolute inset-0 w-full h-px bg-stone-800 top-0 group-hover:w-0 transition-all duration-500"></span>
              <span className="absolute inset-0 w-full h-px bg-stone-800 bottom-0 group-hover:w-0 transition-all duration-500"></span>
              Hakikati İncele
            </Link>

            <Link 
              href="/iletisim" 
              className="px-10 py-4 bg-stone-900/30 border border-stone-800 text-stone-300 font-cinzel tracking-widest hover:bg-red-950/30 hover:border-red-900 transition-all duration-500 backdrop-blur-sm"
            >
              Huzura Çık
            </Link>
          </div>
        </div>
        
        {/* Alt Scroll İkonu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-stone-700">
          <span className="font-cinzel text-xs tracking-widest rotate-90 block">▼</span>
        </div>
      </section>

      {/* 2. DOKTRİN: ÜÇ SÜTUN */}
      <section className="bg-black py-32 px-6 relative border-b border-stone-900">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-24">
            <h2 className="font-cinzel text-4xl text-stone-200 tracking-wide">
              Üç Kutsal Çivi
            </h2>
            <div className="w-24 h-px bg-red-900 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Çivi 1: Adalet */}
            <div className="group relative border border-stone-900 p-10 hover:bg-stone-950 transition-colors duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-4xl font-cinzel text-stone-800 group-hover:text-red-900 transition-colors">I</div>
              <h3 className="font-cinzel text-2xl text-stone-300 mb-6 text-center group-hover:text-red-600 transition-colors">Soğuk Terazi</h3>
              <p className="font-cormorant text-xl text-stone-500 leading-relaxed text-center">
                Merhamet, zayıfların icadıdır. Bizim adaletimizde af yoktur, sadece aritmetik vardır. Bedel, kuruşu kuruşuna ödenir.
              </p>
            </div>

            {/* Çivi 2: Birlik */}
            <div className="group relative border border-stone-900 p-10 hover:bg-stone-950 transition-colors duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-4xl font-cinzel text-stone-800 group-hover:text-red-900 transition-colors">II</div>
              <h3 className="font-cinzel text-2xl text-stone-300 mb-6 text-center group-hover:text-red-600 transition-colors">Yokluk Okyanusu</h3>
              <p className="font-cormorant text-xl text-stone-500 leading-relaxed text-center">
                Bireysellik bir hastalıktır. &quot;Ben&quot; dediğin an, bütünden koparsın. Biz, okyanusa düşen ve ismini unutan yağmur damlalarıyız.
              </p>
            </div>

            {/* Çivi 3: Günah */}
            <div className="group relative border border-stone-900 p-10 hover:bg-stone-950 transition-colors duration-700">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-4xl font-cinzel text-stone-800 group-hover:text-red-900 transition-colors">III</div>
              <h3 className="font-cinzel text-2xl text-stone-300 mb-6 text-center group-hover:text-red-600 transition-colors">Kutsal Leke</h3>
              <p className="font-cormorant text-xl text-stone-500 leading-relaxed text-center">
                Kusursuz olmaya çalışma. Çürümeni sev. Öfkeni, kibrini ve arzunu kucakla. Onlar seni &quot;sen&quot; yapan yegane hazinelerindir.
              </p>
            </div>
          </div>

          {/* YENİ EKLENEN BÖLÜM: DOKTRİN SAYFASINA YÖNLENDİRME */}
          <div className="mt-16 text-center">
             <Link 
               href="/doktrin" 
               className="inline-block text-stone-500 hover:text-red-500 transition-colors font-cinzel text-sm tracking-[0.2em] border-b border-stone-800 hover:border-red-900 pb-2 uppercase"
             >
               Terazi Kanunlarını Oku &rarr;
             </Link>
          </div>

        </div>
      </section>

      {/* 3. MÜRİTLER TEASER */}
      <section className="py-32 border-b border-stone-900 bg-stone-950 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[30vw] font-cinzel font-black text-black select-none pointer-events-none opacity-50 leading-none">
          IX
        </div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="space-y-8">
            <h2 className="font-cinzel text-4xl md:text-5xl text-stone-100 leading-tight">
              Yüzler ve<br />
              <span className="text-red-800">Gölgeler</span>
            </h2>
            <div className="w-16 h-1 bg-stone-800"></div>
            <p className="font-cormorant text-2xl text-stone-400 italic">
              &quot;Ferivonus&apos;un masasında boş sandalye yoktur. Herkes kendi günahının ağırlığı kadar yer kaplar. Sen hangi yükü taşıyorsun?&quot;
            </p>
            
            <ul className="space-y-2 font-cinzel text-xs text-stone-600 tracking-widest uppercase">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-red-900 animate-pulse"></span> MUTLAK İRADE (Kurucu)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-stone-800"></span> Yüce Hiçlik (Lider)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-stone-800"></span> Adalet Terazisi (Yargıç)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-stone-800"></span> Günahkarlar & Arayışçılar</li>
            </ul>

            <div className="pt-8">
              <Link 
                href="/muritler"
                className="inline-flex items-center gap-4 text-stone-300 hover:text-red-500 transition-colors group"
              >
                <span className="font-cinzel tracking-[0.2em] text-lg border-b border-red-900/0 group-hover:border-red-900 pb-1 transition-all">
                  Hiyerarşiyi Görüntüle
                </span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Soyut Görsel Alanı - Güncellenmiş Sayaç (13 Mürit + 1 Kurucu) */}
          <div className="relative aspect-square border border-stone-800 bg-black flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=800&q=80')] opacity-20 grayscale bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="relative z-10 border border-stone-700 p-8 text-center bg-black/80 backdrop-blur-sm">
               <p className="font-cinzel text-4xl text-stone-200">13 + 1</p>
               <p className="font-mono text-xs text-stone-500 mt-2 tracking-widest">KAYITLI RUH</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BLOG TEASER */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          
          <div className="inline-block p-4 border border-stone-900 rounded-full mb-4 bg-stone-950">
             <span className="font-cinzel text-2xl text-stone-600">†</span>
          </div>

          <h2 className="font-cinzel text-3xl text-stone-200">
            Kayıp Tabletler Arşivi
          </h2>
          
          <p className="font-cormorant text-xl text-stone-500 max-w-2xl mx-auto">
            &quot;Söz uçar, yazı ruha mühürlenir. Ritüellerimiz, vahiylerimiz ve Ferivonus&apos;un gece yarısı hezeyanları burada saklıdır.&quot;
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto pt-6">
            
            {/* YENİ EKLENEN YAZI: ÖNE ÇIKARILDI */}
            <Link 
              href="/blog/tuket-kendini" 
              className="block p-6 border border-stone-900 bg-stone-950/50 hover:border-red-900 hover:bg-stone-950 transition-all text-left group"
            >
              <span className="block font-cinzel text-xs text-red-800 mb-2">Başlangıç • Yeni Ahit</span>
              <span className="font-cormorant text-lg text-stone-300 group-hover:text-red-500 transition-colors">Tüket Kendini &rarr;</span>
            </Link>

            <Link 
              href="/blog/adaletin-soguk-yuzu" 
              className="block p-6 border border-stone-900 bg-stone-950/50 hover:border-red-900 hover:bg-stone-950 transition-all text-left group"
            >
              <span className="block font-cinzel text-xs text-stone-600 mb-2">Hüküm III</span>
              <span className="font-cormorant text-lg text-stone-300 group-hover:text-red-500 transition-colors">Soğuk Terazi &rarr;</span>
            </Link>
          </div>

          <div className="pt-12">
            <Link 
              href="/blog" 
              className="text-stone-600 hover:text-stone-300 font-cinzel text-xs tracking-[0.3em] uppercase transition-colors"
            >
              Tüm Arşive Erişim Talep Et
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}