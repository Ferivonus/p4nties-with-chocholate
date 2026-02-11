import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

type Log = { id: string; action: string; target_details: string; performed_by_name: string; created_at: string; };

async function getLogs() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('auth_token');
  if (!token) return null;

  try {
    const res = await fetch('http://localhost:8080/api/admin/logs', {
      headers: { Cookie: `auth_token=${token.value}` },
      cache: 'no-store'
    });
    if (!res.ok) return null;
    return await res.json() as Log[];
  } catch (e) {
      console.error("Loglar çekilemedi:", e);
      return null;
  }
}

export default async function LoglarPage() {
  const logs = await getLogs();
  if (!logs) redirect('/mabed');

  return (
    <main className="min-h-screen bg-black text-stone-400 p-8 md:p-12 font-mono text-sm">
       <Link href="/mabed" className="text-xs text-stone-600 hover:text-red-500 mb-8 block">← MABED&apos;E DÖN</Link>
       
       <div className="max-w-6xl mx-auto border border-stone-900 bg-stone-950/50 p-1">
         <div className="bg-stone-900 px-4 py-2 flex justify-between items-center text-xs text-stone-500 mb-1">
            <span>SİSTEM KAYITLARI (AUDIT LOG)</span>
            <span>TOPLAM: {logs.length}</span>
         </div>
         
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-stone-600 border-b border-stone-900">
                  <th className="p-3 font-normal">ZAMAN</th>
                  <th className="p-3 font-normal">OPERATÖR</th>
                  <th className="p-3 font-normal">EYLEM</th>
                  <th className="p-3 font-normal">DETAY</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-stone-900/50 hover:bg-stone-900/20 transition-colors">
                    <td className="p-3 text-stone-600 whitespace-nowrap">{new Date(log.created_at).toLocaleString('tr-TR')}</td>
                    <td className="p-3 text-stone-300">{log.performed_by_name}</td>
                    <td className="p-3 text-red-800 font-bold">{log.action}</td>
                    <td className="p-3 text-stone-500 break-all">{log.target_details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
       </div>
    </main>
  );
}