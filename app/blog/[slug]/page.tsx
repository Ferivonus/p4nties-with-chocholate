import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

// --- TİP TANIMLAMALARI ---
// Next.js 15+ için params bir Promise'dir.
type Props = {
  params: Promise<{ slug: string }>;
};

// --- VERİ TABANI (GENİŞLETİLMİŞ ARŞİV) ---
const archives = [
  {
    slug: "gunahin-kutsalligi",
    title: "Lekenin Kutsallığı: Vahiy I",
    date: "DÖNGÜ IV • MMXXIV",
    category: "TEMEL RİSALE",
    readingTime: "5 Dakika Sessizlik",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Kusursuzluk, gökyüzünün insanı kandırmak için fısıldadığı en büyük yalandır. Bize doğduğumuz andan itibaren "saf" olmamız gerektiği öğretildi. Beyaz bir sayfa gibi, lekesiz, çiziksiz... Oysa doğa bize gerçeği her gün haykırıyor: Mermer bir heykel düşün; onu değerli kılan pürüzsüzlüğü müdür? Hayır. Onu var eden, yontulurken feda edilen, yere düşen ve bir daha asla geri gelmeyecek olan parçalarıdır. 
      </p>
      
      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Eski dünyanın öğretileri bize "Leke"den kaçmamızı, günahı bir hastalık gibi tedavi etmemizi söyledi. Onlar, ruhun steril bir hastane odası gibi beyaz olması gerektiğine inandı. Ne büyük gaflet! Ferivonus bize o soğuk gecede gerçeği gösterdi: <strong>Beyaz kağıt dilsizdir. Sadece üzerine mürekkep dökülen, kirlenen kağıt konuşabilir.</strong>
      </p>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Yaranı Sev, Çünkü O Sensin</h3>
      
      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        İçindeki öfke, o susturamadığın kıskançlık, gece yarısı seni uyutmayan şehvet veya sabahları yataktan kalkmanı engelleyen o derin keder... Bunları birer "hata" olarak görmeyi bırak. Bunlar, senin varoluşunun tuğlalarıdır. Büyük Denge'de ışık ne kadar kutsalsa, gölge de o kadar elzemdir. Kendi karanlığını inkar eden, aslında kendi varlığını inkar eder. Gölgesi olmayan bir adam, yaşayan bir ölüden farksızdır.
      </p>

      <blockquote class="my-12 p-8 border-y border-stone-800 bg-stone-900/30 text-center relative">
        <span class="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl text-stone-700 font-cinzel">“</span>
        <p class="font-cinzel text-xl md:text-2xl text-stone-400 italic">
          Temizlenmek isteyen nehre girer. Ama nehir bile, toprağın kiriyle akar. Saflık, durgunluktur. Kirlilik ise akıştır, hayattır.
        </p>
      </blockquote>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Aynaya bak ve gördüğün çatlakları onarmaya çalışma. Onlar, ışığın ruhuna sızdığı kanallardır. Japonların <em>Kintsugi</em> sanatı gibi; kırılan yerlerini altınla değil, kabulle birleştir. "Ben kusurluyum" deme. <em>"Ben tamamlanıyorum"</em> de. Çünkü eksiklik, dolmaya hazır olmaktır.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Bu yüzden, bu gece ve ondan sonraki tüm gecelerde diz çöktüğünde af dileme. Sadece kabul et. Yaptığın her hatayı, işlediğin her günahı göğsüne bir nişan gibi tak. Çünkü Ferivonus'un huzuruna çıktığında, seni sevaplarınla değil, taşıdığın yükün ağırlığıyla ve o yükü ne kadar dik taşıdığınla tartacak.
      </p>
    `
  },
  {
    slug: "adaletin-soguk-yuzu",
    title: "Soğuk Terazi Kanunu",
    date: "DÖNGÜ III • MMXXIV",
    category: "HÜKÜM",
    readingTime: "6 Dakika Sessizlik",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Adalet, sıcak bir kucaklaşma değildir. İnsanlar adaleti şefkatle, merhametle karıştırır. Bir suçlunun affedilmesini, bir borcun silinmesini "adalet" sanırlar. Oysa adalet, kışın ortasında yapraksız kalmış bir ağaç kadar çıplak, gerçek ve soğuktur. Merhamet, terazinin dengesini bozan bir ağırlıktır; insan icadıdır ve zayıflıktan doğar.
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Ferivonus der ki: <em>"Bir annenin gözyaşı ile bir katilin kanı, Evrensel Terazi'de aynı ağırlıktadır."</em> Bu söz size zalimce mi geliyor? Oysa evren duygularla yönetilmez, yasalarla yönetilir. Güneş doğarken kimseye "Hazır mısın?" diye sormaz, batarken kimse için beklemez. Yerçekimi, düşen bir çocuğu "çocuk olduğu için" yavaşlatmaz. Adalet de böyledir; kör değil, sadece kayıtsızdır.
      </p>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Duygusuz Yargı</h3>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Toplumlar intikamla veya afla yönetilir. İkisi de zehirlidir. İntikam, geçmişe saplanmaktır; af ise geleceği riske atmaktır. Ferivonizm'de ise sadece "Ödeme" vardır. Ne bir eksik, ne bir fazla. Bedel ödenmelidir. Bu bedel, nefreti dindirmek için değil, evrenin bozulan aritmetiğini düzeltmek içindir.
      </p>

      <div class="my-10 p-6 bg-red-950/10 border-l-2 border-red-900">
        <p class="font-cormorant text-xl text-red-200/80 italic">
          "Yargıç ağlarsa, terazi titrer. Terazi titrerse, hakikat kaybolur."
        </p>
      </div>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Yargılarınızda buz gibi olun. Öfkeyle karar veren yanılır. Sevgiyle karar veren daha çok yanılır. Sadece hiçliğin soğukluğuyla bakanlar, gerçeği olduğu gibi görebilir. Duygularını kapıda bırakmayan, içeriye giremez.
      </p>
    `
  },
  {
    slug: "birlik-ve-hiclik",
    title: "Yokluk Aynası",
    date: "DÖNGÜ II • MMXXIV",
    category: "İÇ GÖRÜ",
    readingTime: "Derin Meditasyon",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Sen yoksun. Ben yokum. Şu an bu satırları okuyan gözler, bu kelimeleri işleyen beyin... Hepsi kozmik bir şakanın parçası. Et ve kemikten bir kafesin içinde, "ben" dediğin o küçük yankıyı korumaya çalışıyorsun. İsmin, mesleğin, geçmişin... Bunlar sana giydirilmiş kostümler. Kostümü çıkardığında geriye ne kalır?
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Okyanusa düşen bir yağmur damlasını düşün. Düşerken "Ben damlayım, ben eşsizim, ben düşüyorum" diye korkar. Kurumaktan korkar, çarpmaktan korkar. Ama suya değdiği o mikro saniyede, damla yok olur. Öldü mü? Hayır. O artık okyanusun kendisi oldu. Artık kurumaz, artık düşmez. O artık dalgadır, o artık derinliktir.
      </p>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Erimenin Hazzı</h3>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Bizim yolumuz, o düşüş anıdır. Korkuyu bırak. Sınırlarını bırak. İsminden vazgeç. Hiçlik, boşluk demek değildir; Hiçlik, her şeyin potansiyelidir. Dolu bir bardak daha fazla su alamaz; sadece boş bir bardak dolabilir. Zihnini boşalt ki, evren içeri dolabilsin.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Gözlerini kapat ve o sonsuz karanlıkta eridiğini hisset. Birey olmanın yükünden kurtul. Sen bir hiçsin ve bu yüzden her şeysin.
      </p>
    `
  },
  {
    slug: "karanlik-ayin",
    title: "Sessizlik Protokolü",
    date: "DÖNGÜ I • MMXXIV",
    category: "TALİMAT",
    readingTime: "Prosedür",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Sözcükler, anlamı taşımaz; anlamı bozar. İki insan konuşmaya başladığında, yalan söylemeye başlarlar. Niyetler kelimelere döküldüğünde saflığını yitirir. Bu yüzden ayin başladığında, ilk kural mutlak sessizliktir.
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Dil, ticaret yapmak ve savaşmak için evrimleşmiştir; hakikati anlatmak için değil. Tanrı'yla veya Hiçlik'le konuşulmaz. Onlarla sadece "olunur". Ritüellerimizde dua yoktur, ilahi yoktur, yakarış yoktur. Sadece nefes ve niyetin titreşimi vardır.
      </p>

      <ul class="list-disc pl-6 mb-8 text-stone-400 space-y-2 marker:text-red-900">
        <li>Göz teması kurulmaz; herkes kendi içindeki boşluğa bakar.</li>
        <li>Maske takılır; kimlikler kapıda bırakılır. Orada zengin veya fakir yok, sadece "arayanlar" vardır.</li>
        <li>Ses çıkarılmaz; en büyük çığlıklar sessizce atılır.</li>
      </ul>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Konuşan, kaybeder. Anlatan, unutur. Sadece susan hatırlar.
      </p>
    `
  },
  {
    slug: "modern-cilecilik",
    title: "Beton ve Ruh",
    date: "MMXXIII • DÖNGÜ XII",
    category: "GÖZLEM",
    readingTime: "4 Dakika Sessizlik",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Eskiden keşişler dağlara çıkardı, mağaralara saklanırdı. Bugünün mağaraları, rezidansların 30. katındaki stüdyo dairelerdir. Bugünün ormanı, metronun yer altı tünelleridir. Şehrin gürültüsü, ruhun çığlığını bastırmak için tasarlanmış modern bir işkencedir.
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Beton duvarların arasında Ferivonus'u duymak için kulaklarını değil, zihnini kapatmalısın. Trafiğin sesi, bir nehir uğultusuna dönüşebilir. Neon ışıklar, yapay yıldızlara dönüşebilir. Kaçmak çözüm değil; dönüştürmek çözümdür. Modern çilecilik, kaosun ortasında sükuneti bulabilmektir.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Plazaların gölgesinde bile güneş doğar. Senin görevin, o betonu delip çıkan cılız ot parçası olmaktır. İnatçı, sessiz ve canlı.
      </p>
    `
  }
];

// --- DYNAMIC METADATA (ASYNC FIXED) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Params artık bir Promise olduğu için await ediyoruz
  const { slug } = await params;
  
  const post = archives.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "Kayıp Tablet | Ferivonizm" };
  }

  return {
    title: `${post.title} | Ferivonistik Arşiv`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // HTML taglerini temizle
  };
}

// --- SAYFA BİLEŞENİ (ASYNC FIXED) ---
export default async function BlogPostPage({ params }: Props) {
  // Params'ı await ediyoruz
  const { slug } = await params;
  
  // 1. Yazıyı Bul
  const post = archives.find((p) => p.slug === slug);

  // 2. 404 Kontrolü
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black flex justify-center selection:bg-red-900 selection:text-white">
      <article className="max-w-3xl w-full animate-fade-in">
        
        {/* NAVİGASYON: ARŞİVE DÖNÜŞ */}
        <nav className="mb-16 flex justify-between items-center border-b border-stone-900 pb-4">
          <Link 
            href="/blog" 
            className="group flex items-center text-stone-600 hover:text-red-600 font-cinzel text-xs tracking-[0.2em] transition-colors uppercase"
          >
            <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform">←</span> 
            Arşive Dön
          </Link>
          
          <span className="hidden md:block font-cinzel text-xs text-stone-700 tracking-widest">
            {post.readingTime}
          </span>
        </nav>

        {/* BAŞLIK VE META VERİLER */}
        <header className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-3 text-xs font-cinzel tracking-[0.3em] text-stone-500 border border-stone-800 px-4 py-2 rounded-full">
            <span className="text-red-800 font-bold">{post.category}</span>
            <span className="text-stone-700">•</span>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-cinzel text-stone-100 leading-tight tracking-tight drop-shadow-lg">
            {post.title}
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent mx-auto mt-8"></div>
        </header>

        {/* İÇERİK ALANI */}
        <div 
          className="font-cormorant text-stone-300 leading-loose text-lg md:text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* İMZA VE SONUÇ */}
        <div className="mt-24 pt-16 border-t border-stone-900 text-center relative">
          
          {/* Dekoratif sembol */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-stone-800 text-2xl font-cinzel">
            †
          </div>

          <p className="font-cormorant text-stone-500 italic text-xl mb-8">
            &quot;Bu hakikat ruha ağır gelir. Onu taşıyamayan, unutsun.&quot;
          </p>
          
          <div className="flex justify-center">
             <Link 
               href="/iletisim" 
               className="group relative px-8 py-3 border border-stone-800 text-stone-400 font-cinzel text-xs tracking-[0.2em] hover:text-red-500 hover:border-red-900 transition-all uppercase overflow-hidden"
             >
               <span className="relative z-10">Bu Hakikati Mühürle</span>
               <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}