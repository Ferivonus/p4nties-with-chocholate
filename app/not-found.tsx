import Link from 'next/link'

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden selection:bg-red-900 selection:text-white">
      
      {/* 1. ATMOSFERİK ARKA PLAN */}
      {/* Kırmızı uyarı ışığı hissi veren hafif gradyan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black pointer-events-none" />
      
      {/* Dekoratif Arka Plan Yazıları (Silik) */}
      <div className="absolute top-0 left-0 p-8 opacity-20 pointer-events-none font-mono text-xs text-stone-500 text-left hidden md:block">
        <div>SİSTEM: FERIVON_IX</div>
        <div>DURUM: KRİTİK</div>
        <div>KONUM: BELİRSİZ</div>
      </div>

      {/* 2. İÇERİK KATMANI */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-12">
        
        {/* HATA KODU */}
        <div className="space-y-2">
          <div className="inline-block border border-red-900/30 bg-red-950/10 px-4 py-1 rounded-full backdrop-blur-sm">
            <span className="font-mono text-xs text-red-600 tracking-[0.3em] uppercase animate-pulse">
              Hata Kodu: IX-404
            </span>
          </div>
        </div>

        {/* ANA MESAJ */}
        <div className="relative">
          {/* Devasa Arka Plan Sayısı */}
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-cinzel font-black text-stone-900/50 leading-none select-none blur-sm pointer-events-none">
            404
          </h1>
          
          {/* Öndeki Metin */}
          <h2 className="relative text-4xl md:text-6xl font-cinzel text-stone-100 tracking-tight uppercase drop-shadow-2xl">
            Bu Kayıt<br />
            <span className="text-red-800">Silinmiştir</span>
          </h2>
        </div>

        {/* AÇIKLAMA (MANIFESTO) */}
        <div className="max-w-xl space-y-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-auto"></div>
          
          <p className="font-cormorant text-2xl text-stone-500 italic leading-relaxed">
            &quot;Aradığın hakikat burada yok. Ya hiç yazılmadı ya da Konsey tarafından varoluştan kazındı. Hiçliği rahatsız etme.&quot;
          </p>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mx-auto"></div>
        </div>

        {/* EYLEM BUTONU */}
        <div className="pt-8">
          <Link 
            href="/" 
            className="group relative inline-flex items-center gap-4 px-8 py-4 border border-stone-800 bg-black hover:border-red-900 transition-all duration-500 overflow-hidden"
          >
            {/* Buton Hover Efekti */}
            <span className="absolute inset-0 bg-stone-900/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
            
            <span className="relative font-mono text-lg text-stone-500 group-hover:text-red-500 transition-colors">←</span>
            <span className="relative font-cinzel text-sm text-stone-300 tracking-[0.2em] uppercase group-hover:text-stone-100 transition-colors">
              Güvenli Bölgeye Dön
            </span>
          </Link>
        </div>

      </div>

      {/* ALT BİLGİ (Footer gibi duran teknik detay) */}
      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="font-mono text-[10px] text-stone-700 uppercase tracking-widest">
          Ferivonus Protokolü • Kayıp Veri İşleyici
        </p>
      </div>
    </div>
  )
}