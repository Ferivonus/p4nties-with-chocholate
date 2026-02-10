import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huzura Çıkış | Ferivonizm",
  description: "Konsey sessizliği dinler. Niyetini mühürle.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-stone-400 selection:bg-red-900 selection:text-white flex flex-col md:flex-row">
      
      {/* SOL TARAFI: ATMOSFERİK GİRİŞ (Manifesto) */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center p-12 md:p-24 border-b md:border-b-0 md:border-r border-stone-900 overflow-hidden">
        
        {/* Arka plan efekti */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-stone-900/40 via-black to-black z-0" />
        
        <div className="relative z-10 space-y-12">
          <div>
            <p className="font-cinzel text-red-800 tracking-[0.4em] text-xs uppercase mb-4">
              İletişim Protokolü v.1
            </p>
            <h1 className="text-5xl md:text-7xl font-cinzel text-stone-100 font-black tracking-tight leading-none">
              SESSİZLİĞİ<br />BOZACAK MISIN?
            </h1>
          </div>

          <div className="w-16 h-px bg-red-900"></div>

          <blockquote className="font-cormorant text-2xl text-stone-500 italic leading-relaxed">
            &quot;Sözcükler, niyetin gölgesidir. Konseye ulaşmadan önce gölgenin, aslından büyük olmadığından emin ol.&quot;
          </blockquote>

          <div className="space-y-4 pt-8">
            <h3 className="font-cinzel text-stone-300 tracking-widest text-sm uppercase border-b border-stone-800 pb-2 inline-block">
              Fiziksel Konum
            </h3>
            
            {/* GÜNCELLENEN KONUM BİLGİSİ */}
            <p className="font-cormorant text-lg text-stone-500 leading-relaxed">
              Dünya Üzerinde, Saklı Bir Mabet<br />
              <span className="text-sm opacity-60">Fiziksel Erişim: Kısıtlı</span>
            </p>
            <p className="font-mono text-xs text-stone-700 mt-2 tracking-widest">
              KONUM: [GİZLENMİŞ]
            </p>
          </div>
        </div>
      </div>

      {/* SAĞ TARAFI: DİLEKÇE FORMU */}
      <div className="w-full md:w-1/2 bg-stone-950 flex flex-col justify-center p-8 md:p-24 relative">
        
        {/* Sağ üst dekoratif numara */}
        <div className="absolute top-8 right-8 font-cinzel text-stone-800 text-4xl opacity-50 select-none">
          NO. IX
        </div>

        <form className="max-w-md w-full mx-auto space-y-12">
          
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-cinzel text-2xl text-stone-200">Arzuhal Formu</h2>
            <p className="text-sm font-cormorant text-stone-600">
              Formu doldur ve mührü bas. Geri dönüş garantisi verilmez, ama okunma garantisi verilir.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* INPUT: İSİM */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-cinzel text-red-900 tracking-widest uppercase font-bold">
                KİMLİK (İSİM)
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-stone-900/50 border border-stone-800 p-4 text-stone-200 font-cormorant text-lg placeholder-stone-700 focus:outline-none focus:border-red-900 focus:bg-stone-900 transition-all" 
                placeholder="Adınız ve Soyadınız..." 
                required 
              />
            </div>

            {/* INPUT: E-POSTA */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-cinzel text-red-900 tracking-widest uppercase font-bold">
                ERİŞİM İZNİ (E-POSTA)
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-stone-900/50 border border-stone-800 p-4 text-stone-200 font-cormorant text-lg placeholder-stone-700 focus:outline-none focus:border-red-900 focus:bg-stone-900 transition-all" 
                placeholder="ornek@eposta.com" 
                required 
              />
            </div>

            {/* INPUT: SELECT */}
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-xs font-cinzel text-red-900 tracking-widest uppercase font-bold">
                NİYETİN
              </label>
              <div className="relative">
                <select 
                  id="subject" 
                  className="w-full bg-stone-900/50 border border-stone-800 p-4 text-stone-200 font-cormorant text-lg appearance-none focus:outline-none focus:border-red-900 focus:bg-stone-900 transition-all cursor-pointer"
                >
                  <option className="bg-stone-950 text-stone-500" value="">Bir sebep seçiniz...</option>
                  <option className="bg-stone-950 text-stone-300">İntisap (Katılım Talebi)</option>
                  <option className="bg-stone-950 text-stone-300">Kefaret (Günah İtirafı)</option>
                  <option className="bg-stone-950 text-stone-300">İstişare (Soru)</option>
                </select>
                {/* Custom Arrow Icon */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-600">
                  ▼
                </div>
              </div>
            </div>

            {/* INPUT: TEXTAREA */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-cinzel text-red-900 tracking-widest uppercase font-bold">
                ARZUHALİN (MESAJ)
              </label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full bg-stone-900/50 border border-stone-800 p-4 text-stone-200 font-cormorant text-lg placeholder-stone-700 focus:outline-none focus:border-red-900 focus:bg-stone-900 transition-all resize-none" 
                placeholder="Sessizliği ne ile bozacaksın? Buraya yaz..." 
                required
              ></textarea>
            </div>

          </div>

          {/* ONAY KUTUSU */}
          <div className="flex items-start gap-4 pt-2">
             <input 
               type="checkbox" 
               id="confirm" 
               className="mt-1 w-4 h-4 accent-red-900 bg-transparent border-stone-700 rounded-none cursor-pointer" 
               required 
             />
             <label htmlFor="confirm" className="text-xs font-cinzel text-stone-500 cursor-pointer select-none hover:text-stone-300 transition-colors leading-relaxed">
               Gönderdiğim kelimelerin sorumluluğunu, kendi ruhum üzerine alıyorum. Konseyin sessizliğini kabul ediyorum.
             </label>
          </div>

          {/* BUTON */}
          <button 
            type="submit" 
            className="w-full group relative px-8 py-5 bg-stone-900 border border-stone-800 overflow-hidden hover:border-red-900 transition-all duration-500"
          >
            <div className="absolute inset-0 w-0 bg-red-900 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative font-cinzel text-stone-300 tracking-[0.3em] text-sm uppercase group-hover:text-red-500 transition-colors font-bold">
              Mührü Bas ve Gönder
            </span>
          </button>

        </form>
      </div>

    </main>
  );
}