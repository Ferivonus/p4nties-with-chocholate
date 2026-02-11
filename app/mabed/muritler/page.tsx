import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

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
    <main className="min-h-screen bg-black text-stone-400 p-8 md:p-12 relative">
       <Link href="/mabed" className="absolute top-8 left-8 text-xs font-mono text-stone-600 hover:text-red-500">← MABED&apos;E DÖN</Link>
       
       <div className="max-w-4xl mx-auto mt-12">
         <h1 className="font-cinzel text-3xl text-stone-200 mb-8 border-b border-stone-900 pb-4">HİYERARŞİ TABLOSU</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {disciples.map((d, i) => (
             <div key={i} className="bg-stone-950 border border-stone-900 p-6 flex items-center gap-4 hover:border-red-900/50 transition-colors group">
                <div className="w-10 h-10 bg-stone-900 border border-stone-800 flex items-center justify-center font-cinzel text-stone-400 group-hover:text-red-500">
                  {d.username.charAt(0)}
                </div>
                <div>
                  <h3 className="font-cinzel text-stone-200">{d.username}</h3>
                  <p className="text-[10px] font-mono text-red-800 uppercase tracking-widest">{d.role}</p>
                  <p className="text-[10px] text-stone-700 mt-1">Katılım: {new Date(d.created_at).toLocaleDateString()}</p>
                </div>
             </div>
           ))}
         </div>
       </div>
    </main>
  );
}