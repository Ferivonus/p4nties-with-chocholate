import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import PetitionActions from '@/components/PetitionActions';

type Petition = { id: string; sender_name: string; subject: string; message: string; status: string; created_at: string; };

async function getPetitions() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('auth_token');
  if (!token) return null;

  try {
    const res = await fetch('http://localhost:8080/api/petitions', {
      headers: { Cookie: `auth_token=${token.value}` },
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json() as Petition[];
  } catch (e) {
      console.error("Arzuhaller çekilemedi:", e);
      return null;
  }
}

export default async function ArzuhallerPage() {
  const petitions = await getPetitions();
  if (!petitions) redirect('/mabed');

  return (
    <main className="min-h-screen bg-black text-stone-400 p-8 md:p-12 relative">
       <Link href="/mabed" className="absolute top-8 left-8 text-xs font-mono text-stone-600 hover:text-red-500">← MABED&apos;E DÖN</Link>
       
       <div className="max-w-5xl mx-auto mt-12">
         <h1 className="font-cinzel text-3xl text-stone-200 mb-2">ARZUHALLER MASASI</h1>
         <p className="font-cormorant text-stone-600 italic mb-8">Halktan gelen talepler. Mühür senin elinde.</p>

         <div className="space-y-4">
           {petitions.map((p) => (
             <div key={p.id} className="group bg-stone-950 border border-stone-900 p-6 hover:border-stone-700 transition-all relative">
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                   <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 border ${p.status === 'ONAYLANDI' ? 'border-green-900 text-green-700' : p.status === 'REDDEDİLDİ' ? 'border-red-900 text-red-700' : 'border-stone-700 text-stone-500'}`}>
                          {p.status}
                        </span>
                        <span className="font-cinzel text-stone-300 text-sm">{p.sender_name}</span>
                        <span className="text-[10px] font-mono text-stone-600">{new Date(p.created_at).toLocaleDateString()}</span>
                      </div>
                      <h3 className="font-cinzel text-lg text-stone-200 mb-2">{p.subject}</h3>
                      <p className="font-cormorant text-stone-400 leading-relaxed max-w-2xl">{p.message}</p>
                   </div>
                   
                   {/* Aksiyon Butonları (Client Component) */}
                   <PetitionActions id={p.id} />
                </div>
             </div>
           ))}
           {petitions.length === 0 && <div className="text-center py-20 border border-dashed border-stone-900 text-stone-600">Masa boş. Sessizlik hakim.</div>}
         </div>
       </div>
    </main>
  );
}