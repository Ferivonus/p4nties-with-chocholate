import Link from 'next/link'

export default function DiscipleNotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden selection:bg-red-900 selection:text-white">
      
      {/* 1. ATMOSFERİK ARKA PLAN */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-950 via-black to-black z-0 pointer-events-none" />
      
      {/* Arka Planda Dönen/Silik IX Sembolü */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-cinzel text-stone-900/10 select-none pointer-events-none animate-pulse">
        IX
      </div>

      {/* Dekoratif Gürültü (Noise) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 max-w-lg mx-auto space-y-12">
        
        {/* ÜST BİLGİ: TEKNİK RAPOR */}
        <div className="flex flex-col items-center gap-2">
           <div className="h-12 w-px bg-red-900/50"></div>
           <span className="font-mono text-xs text-red-800 tracking-[0.3em] uppercase">
             Veri Bütünlüğü: Bozuk
           </span>
        </div>

        {/* ANA BAŞLIK: SİLİNMİŞ DOSYA */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-cinzel text-stone-100 tracking-tighter mix-blend-difference">
            HÜKÜMSÜZ
          </h1>
          <div className="inline-block border border-stone-800 px-6 py-2 bg-black/50 backdrop-blur-md">
            <p className="font-cinzel text-sm text-stone-500 tracking-[0.4em] uppercase">
              Kayıt No: <span className="text-red-700">NULL</span>
            </p>
          </div>
        </div>

        {/* AÇIKLAMA METNİ */}
        <div className="space-y-6 relative">
           {/* Sol tarafta dikey çizgi */}
           <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-900 md:-left-8"></div>
           
           <p className="font-cormorant text-2xl text-stone-400 italic leading-relaxed">
             &quot;Aradığın suret bu arşivde bulunmuyor. Bu kişi ya hiç &apos;uyanmadı&apos; ya da ismi Konsey tarafından varoluştan kazındı.&quot;
           </p>
           
           <p className="font-mono text-xs text-stone-600 tracking-widest uppercase">
             Durum: Varlık İspatı Yetersiz.
           </p>
        </div>

        {/* AKSİYON BUTONU */}
        <div className="pt-8">
          <Link
            href="/muritler"
            className="group relative inline-flex items-center px-10 py-4 overflow-hidden border border-stone-800 hover:border-red-900 transition-all duration-500 bg-stone-950/50"
          >
            {/* Buton Hover Efekti */}
            <span className="absolute inset-0 w-0 bg-red-900/20 transition-all duration-[250ms] ease-out group-hover:w-full"></span>
            
            <span className="relative font-mono text-lg text-stone-500 group-hover:text-red-500 transition-colors mr-4">←</span>
            <span className="relative font-cinzel text-xs text-stone-300 tracking-[0.2em] uppercase group-hover:text-stone-100 transition-colors">
              Hiyerarşiye Dön
            </span>
          </Link>
        </div>

      </div>
      
      {/* ALT TEKNİK DETAY */}
      <div className="absolute bottom-10 left-0 w-full text-center opacity-30 hover:opacity-100 transition-opacity">
        <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">
          Ferivonus Arşiv Protokolü v.9.0
        </p>
      </div>

    </div>
  )
}