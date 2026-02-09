import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huzura Çıkış | Ferivonizm",
  description: "Konsey sessizliği dinler. Niyetini mühürle.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-stone-400 selection:bg-red-900 selection:text-white flex flex-col md:flex-row">
      
      {/* SOL TARAFI: ATMOSFERİK GİRİŞ (Manifeto) */}
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
            <p className="font-cormorant text-lg text-stone-500">
              Gölbaşı Sapağı, No: 4<br />
              Ankara, Türkiye
            </p>
            <p className="font-mono text-xs text-stone-700 mt-2">
              39.78N — 32.80E
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

          <div className="space-y-8">
            
            {/* INPUT: İSİM */}
            <div className="group relative">
              <input 
                type="text" 
                id="name" 
                className="block py-4 px-0 w-full text-xl text-stone-200 bg-transparent border-0 border-b border-stone-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer font-cormorant transition-colors" 
                placeholder=" " 
                required 
              />
              <label 
                htmlFor="name" 
                className="absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-cinzel tracking-widest uppercase"
              >
                Dünyevi İsmin
              </label>
            </div>

            {/* INPUT: E-POSTA */}
            <div className="group relative">
              <input 
                type="email" 
                id="email" 
                className="block py-4 px-0 w-full text-xl text-stone-200 bg-transparent border-0 border-b border-stone-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer font-cormorant transition-colors" 
                placeholder=" " 
                required 
              />
              <label 
                htmlFor="email" 
                className="absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-cinzel tracking-widest uppercase"
              >
                Dijital İzin (E-posta)
              </label>
            </div>

            {/* INPUT: SELECT */}
            <div className="group relative">
              <select 
                id="subject" 
                className="block py-4 px-0 w-full text-xl text-stone-200 bg-transparent border-0 border-b border-stone-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer font-cormorant transition-colors rounded-none"
              >
                <option className="bg-stone-900 text-stone-500" value="">Seçim Yap...</option>
                <option className="bg-stone-900 text-stone-300">İntisap (Katılım Talebi)</option>
                <option className="bg-stone-900 text-stone-300">Kefaret (Günah İtirafı)</option>
                <option className="bg-stone-900 text-stone-300">İstişare (Soru)</option>
              </select>
              <label 
                htmlFor="subject" 
                className="absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-focus:scale-75 peer-focus:-translate-y-6 font-cinzel tracking-widest uppercase"
              >
                Niyetin
              </label>
            </div>

            {/* INPUT: TEXTAREA */}
            <div className="group relative">
              <textarea 
                id="message" 
                rows={4} 
                className="block py-4 px-0 w-full text-xl text-stone-200 bg-transparent border-0 border-b border-stone-800 appearance-none focus:outline-none focus:ring-0 focus:border-red-800 peer font-cormorant transition-colors resize-none" 
                placeholder=" " 
                required
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute text-sm text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-cinzel tracking-widest uppercase"
              >
                Konseye Arzuhalin
              </label>
            </div>
          </div>

          {/* ONAY KUTUSU (RİTÜELİSTİK) */}
          <div className="flex items-center gap-4 pt-4">
             <input type="checkbox" id="confirm" className="w-4 h-4 accent-red-900 bg-transparent border-stone-700 rounded-none cursor-pointer" required />
             <label htmlFor="confirm" className="text-xs font-cinzel text-stone-500 cursor-pointer select-none">
               Gönderdiğim kelimelerin sorumluluğunu, kendi ruhum üzerine alıyorum.
             </label>
          </div>

          {/* BUTON */}
          <button 
            type="submit" 
            className="w-full group relative px-8 py-5 bg-stone-900 border border-stone-800 overflow-hidden hover:border-red-900 transition-all duration-500"
          >
            <div className="absolute inset-0 w-0 bg-red-900 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative font-cinzel text-stone-300 tracking-[0.3em] text-sm uppercase group-hover:text-red-500 transition-colors">
              Mührü Bas ve Gönder
            </span>
          </button>

        </form>
      </div>

    </main>
  );
}