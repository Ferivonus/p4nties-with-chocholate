import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

type User = { id: string; username: string; role: string; };
type Post = { id: string; title: string; content: string; created_at: string; };

async function getProfileData() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('auth_token');
  if (!token) return null;
  const header = { Cookie: `auth_token=${token.value}` };

  try {
    const meRes = await fetch('http://localhost:8080/api/auth/me', { headers: header, cache: 'no-store' });
    if (!meRes.ok) return null;
    const user: User = await meRes.json();

    const postsRes = await fetch('http://localhost:8080/api/posts/my', { headers: header, cache: 'no-store' });
    const posts: Post[] = postsRes.ok ? await postsRes.json() : [];

    return { user, posts };
  } catch (e) {
      console.error("Profil verisi çekilemedi:", e);
      return null;
  }
}

export default async function ProfilPage() {
  const data = await getProfileData();
  if (!data) redirect('/giris');
  const { user, posts } = data;

  return (
    <main className="min-h-screen bg-black text-stone-400 pt-20 px-6 pb-12">
      <div className="max-w-4xl mx-auto">
         <Link href="/mabed" className="text-xs font-mono text-stone-600 hover:text-red-500 mb-8 block">← MABED&apos;E DÖN</Link>

         {/* Profil Kartı */}
         <div className="bg-stone-950 border border-stone-900 p-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <div className="w-32 h-32 bg-stone-900 rounded-full border-2 border-stone-800 flex items-center justify-center">
               <span className="font-cinzel text-6xl text-stone-600">{user.username.charAt(0)}</span>
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
               <div>
                  <h1 className="font-cinzel text-4xl text-stone-200">{user.username}</h1>
                  <p className="font-mono text-red-800 uppercase tracking-[0.3em] mt-2">{user.role}</p>
               </div>
               <div className="h-px w-full bg-stone-900"></div>
               <div className="flex justify-center md:justify-start gap-8 font-cormorant text-lg text-stone-500">
                  <p>ID: <span className="font-mono text-xs text-stone-700">{user.id}</span></p>
                  <p>Vahiyler: <span className="text-stone-300">{posts.length}</span></p>
               </div>
               <div className="pt-4">
                  <LogoutButton />
               </div>
            </div>
         </div>

         {/* Şahsi Vahiyler */}
         <h2 className="font-cinzel text-2xl text-stone-300 mb-6 border-b border-stone-900 pb-2">ŞAHSİ ARŞİV</h2>
         <div className="grid gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-stone-950/30 border border-stone-900 p-6 hover:border-stone-700 transition-colors">
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-cinzel text-lg text-stone-300">{post.title}</h3>
                    <span className="text-[10px] font-mono text-stone-600">{new Date(post.created_at).toLocaleDateString()}</span>
                 </div>
                 <p className="font-cormorant text-stone-500 line-clamp-2">{post.content}</p>
              </div>
            ))}
            {posts.length === 0 && <p className="text-stone-600 italic">Henüz bir kelam etmedin.</p>}
         </div>

      </div>
    </main>
  );
}