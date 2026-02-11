import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import AddDiscipleForm from '@/components/AddDiscipleForm';

type Disciple = { username: string; role: string; created_at: string; };

async function getDisciples() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('auth_token');
  if (!token) return null;

  try {
    const res = await fetch('http://localhost:8080/api/admin/disciples', {
      headers: { Cookie: `auth_token=${token.value}` },
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json() as Disciple[];
  } catch (e) {
      console.error("Müritler çekilemedi:", e);
      return null;
  }
}

export default async function MuritlerPage() {
  const disciples = await getDisciples();
  if (!disciples) redirect('/mabed');

  return (
    <main className="min-h-screen bg-black text-stone-300 pt-20 px-6 md:px-12 pb-12 relative selection:bg-red-900 selection:text-white">
       
       {/* Geri Dön Linki */}
       <Link href="/mabed" className="absolute top-6 left-6 md:left-12 text-[10px] font-mono text-stone-500 hover:text-red-500 border border-stone-800 px-3 py-1 rounded hover:border-red-900 transition-colors flex items-center gap-2">
         <span>←</span> MABED&apos;E DÖN
       </Link>
       
       <div className="max-w-7xl mx-auto mt-12">
         
         {/* Başlık Alanı */}
         <div className="flex flex-col md:flex-row justify-between items-end border-b border-stone-800 pb-6 mb-8 gap-4">
            <div>
                <h1 className="font-cinzel text-3xl md:text-4xl text-stone-100 tracking-wide">HİYERARŞİ TABLOSU</h1>
                <p className="font-cormorant text-stone-500 mt-2 text-lg">Konseyin gölgesindeki kayıtlı ruhlar.</p>
            </div>
            <div className="text-right">
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest bg-stone-900 border border-stone-800 px-3 py-2 rounded">
                    TOPLAM: <span className="text-stone-100 font-bold ml-1">{disciples.length}</span>
                </span>
            </div>
         </div>

         {/* İçerik Izgarası (Grid) */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           
           {/* SOL: Kayıt Formu (Yapışkan) */}
           <div className="lg:col-span-1 h-fit">
              <AddDiscipleForm />
           </div>

           {/* SAĞ: Liste */}
           <div className="lg:col-span-2 space-y-4">
             {disciples.map((d, i) => (
               <div key={i} className="group bg-stone-900/40 border border-stone-800 p-5 flex items-center justify-between hover:border-stone-600 hover:bg-stone-900/80 transition-all rounded-sm shadow-sm">
                  
                  <div className="flex items-center gap-5">
                     {/* Harf İkonu */}
                     <div className="w-12 h-12 bg-stone-950 border border-stone-800 flex items-center justify-center font-cinzel text-xl text-stone-400 group-hover:text-stone-100 group-hover:border-red-900/40 transition-colors shadow-inner rounded-sm">
                       {d.username.charAt(0).toUpperCase()}
                     </div>
                     
                     {/* İsim ve Rol */}
                     <div>
                       <h3 className="font-cinzel text-lg text-stone-200 group-hover:text-red-400 transition-colors tracking-wide">{d.username}</h3>
                       <div className="mt-1">
                           <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
                             d.role === 'MUTLAK İRADE' ? 'text-red-400 border-red-900/30 bg-red-950/20' : 
                             d.role === 'Yüce Hiçlik' ? 'text-amber-500 border-amber-900/30 bg-amber-950/10' :
                             'text-stone-500 border-stone-800 bg-stone-950/50'
                           }`}>
                             {d.role}
                           </span>
                       </div>
                     </div>
                  </div>

                  {/* Tarih Bilgisi (Sağda) */}
                  <div className="text-right hidden sm:block">
                     <p className="text-[9px] font-mono text-stone-600 uppercase tracking-wider mb-1">KATILIM TARİHİ</p>
                     <p className="text-xs font-mono text-stone-400">
                        {new Date(d.created_at).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                     </p>
                  </div>

               </div>
             ))}
             
             {disciples.length === 0 && (
                <div className="text-center py-16 border-2 border-dashed border-stone-800/50 text-stone-600 italic rounded-sm">
                    Henüz hiçbir ruh bu listeye adını yazdırmadı.
                </div>
             )}
           </div>

         </div>
       </div>
    </main>
  );
}