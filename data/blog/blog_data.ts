// --- TİP TANIMLAMALARI ---
export type ArchiveDoc = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;      // Liste sayfasında görünen özet
  date: string;         // Detay sayfasındaki tarih
  cycle: string;        // Liste sayfasındaki "Döngü" bilgisi
  category: string;     // Detay sayfasındaki kategori
  type: string;         // Liste sayfasındaki tip
  readingTime: string;  // Okuma süresi
  accessLevel: string;  // Erişim yetkisi
  content: string;      // Yazının tamamı (HTML)
};

// --- MERKEZİ ARŞİV VERİ TABANI ---
export const archives: ArchiveDoc[] = [
  // --- YENİ EKLENEN YAZI (EN GÜNCEL) ---
  {
    id: 0,
    slug: "tuket-kendini",
    title: "Tüket Kendini ve Kendinden Olanı",
    excerpt: "Selam olsun! Yapmak istediklerime ve yaptıklarıma... Korkularım, tereddütlerim ve şüphelerim… Hepsi bana kim olduğumu ve kim olabileceğimi gösterdi. Seviyorum kendimi ve kendimden olanı.",
    date: "MART XVII • MMXXV",
    cycle: "MMXXV • YENİDEN DOĞUŞ",
    category: "BAŞLANGIÇ",
    type: "YENİ AHİT",
    readingTime: "7 Dakika Tükeniş",
    accessLevel: "HERKES",
    content: `
      <p class="mb-8 text-lg leading-relaxed text-stone-300 first-letter:float-left first-letter:text-7xl first-letter:font-cinzel first-letter:text-red-900 first-letter:mr-3 first-letter:mt-[-6px]">
        Selam olsun! Yapmak istediklerime ve yaptıklarıma, yapmayı isteyip de korkarak vazgeçtiklerime… İyi ki denemişim sizleri, çünkü bu sayede farkına vardım kim olduğumun ve kim olabileceğimin. Korkularım, tereddütlerim ve şüphelerim… Hepsi bana kim olduğumu ve kim olabileceğimi gösterdi.
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Dünyanın en büyük kazananı ya da kaybedeni olmam fark etmez; siz, benim ve benden olanın farkına varmamı sağladınız. Seviyorum şüphelerimi ve korkularımı, attığım geri adımları ve yürüdüğüm yolları. Seviyorum başarısızlıklarımı ve umutsuzluğumu, çünkü hepsi benim, benden olan ve benimle olanın bir parçası. <strong>Seviyorum kendimi ve kendimden olanı.</strong>
      </p>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Dinle Acılarını</h3>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        İnsan, kendini sevmeli. Öyle derin, öyle yoğun sevmeli ki, bu sevginin beraberinde getirdiği üzüntü ve acının farkına varmalı. Kalbi, yaşadığı her olayda kırılmalı; attığı her adımda üzülmeli. Çünkü insan, kendi kararlarının çetelesini kendine vermeli, hesabını kendisi kesmeli ve kendi içinde ödemeli.
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Kendini öyle çok sevmeli ki, daha iyi olabilmek için kendinden nefret edebilmeli. İnandığı tanrıdan önce kendine hesap vermeli ki pişkin pişkin yüzüne bakıp, <em>"İyi ki yapmışım!"</em> diyebilmeli. Kendini defalarca öldürebilmeli—sabah, öğlen, akşam ve ikindin.
      </p>

      <div class="my-10 p-6 bg-stone-900/30 border-y border-stone-800 text-center">
        <p class="font-cinzel text-xl text-stone-400 italic">
          "Severim ben benden olanı, benim ve bizden olanı. O kadar severim ki, o bana ait olmalıdır. Kimseyle paylaşmayacağım."
        </p>
      </div>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Nefret Et Kendinden</h3>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Alma bugün ilaçlarını. Kendini hissettiren ne varsa, sadece onları al bugün. Çekil inzivana, ait olduğunu hissettiren lanetle yaşa bu günü. Kimdi seni kendinden soğutan? Sen değil miydin? Yaşadığını hissettiğin bu karanlık evrende bir adım daha at ve bağır bu gece:
      </p>

      <blockquote class="pl-6 border-l-2 border-red-900/50 italic text-stone-400 mb-8 space-y-2">
        <p>"Severdim ben kendimi, kendimden alıp götürdüğüm kendimi,</p>
        <p>Kimdi bana bu acıları yaşatan? Yoksa gerçekten de kendim miydim?</p>
        <p>Hiç ait hissettim mi kendimi bir yere? Kendi yatağım, sevdiğimin yanı ya da üzüntülerim...</p>
        <p>Yoksa kırgın mıydın kendine, güzel hayallerim?"</p>
      </blockquote>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Nedir ki mutluluk dediğin? Şartsız ve kayıtsız suskunluk mu? Duymaz mı sağırlar kendi kalbinin sesini, yoksa sen misin sadece kendini dinlemeyen? Çalışma mutlu olmaya bu gece. Sadece dinle kalbini. Tüket kendini bir sabah kahvaltısında. O kadar tüket ki kendini, geriye hiçbir şey kalmayana dek.
      </p>

      <h3 class="text-2xl font-cinzel text-stone-100 mt-12 mb-6 tracking-widest border-l-4 border-red-900 pl-4">Gülelim Hep Birlikte</h3>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Öğren artık şunu demeyi: "Bugüne kadar sizler beni üzdünüz. Ama artık ipler bende. Ve şimdi sizler üzüleceksiniz." Ne güzeldir nefret, hele ki konu insanın kendisi olduğunda. Unuttuk biz kendimizi, güzelliğimizi ve saflığımızı. Sandık ki biz yaptık hepsini. Ama gerçekten de alabilir miyiz bunları kendimizden?
      </p>

      <p class="mb-8 text-lg leading-relaxed text-stone-300">
        Gülelim olana ve olacağa. Gülelim doğruya ve yanlışa. Haklıdır insan her zaman, veremez hiçbir zaman yanlış kararı. Sadece aptallar kendi yanlışını görebilir. Hastasın sen, yanlış değil. Doğru olamayacak kadar bozuk, farkında olamayacak kadar aptal.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-stone-300">
        Öldür bu gece kendini, sabah kahvaltısından sonra. Aç gözlerini mutluluk ve umutla öğlen atıştırmasına. Tüket kendini öğleden sonra ve saklama kendini korkundan. Gülelim bu gece birlikte, yarı sarhoş, yarı nahoş. Kaybedecek neyimiz kaldı? <strong>Öldürsene eski ahitlerini.</strong>
      </p>
      
      <p class="text-right font-cinzel text-sm text-red-800 mt-8">- Fer fer</p>
    `
  },

  // --- MEVCUT ARŞİV ---
  {
    id: 1,
    slug: "gunahin-kutsalligi",
    title: "Vahiy I: Lekenin Kutsallığı",
    excerpt: "Kusursuzluk, tanrıların insanı kandırmak için uydurduğu bir yalandır. Mermer çatlarsa değerini yitirir sanırsın; oysa ışık, o çatlaktan içeri sızar. Yaralarını saklama, onlar senin haritandır.",
    date: "DÖNGÜ IV • MMXXIV",
    cycle: "MMXXIV • BAŞLANGIÇ",
    category: "TEMEL RİSALE",
    type: "TEMEL RİSALE",
    readingTime: "5 Dakika Sessizlik",
    accessLevel: "HERKES",
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
    id: 2,
    slug: "adaletin-soguk-yuzu",
    title: "Hüküm III: Soğuk Terazi",
    excerpt: "Bir annenin gözyaşı ile bir katilin kanı, Ferivonus'un terazisinde aynı ağırlıktadır. Adalet hissetmez. Adalet ağlamaz. Evrenin aritmetiğinde merhamete yer yoktur, sadece denge vardır.",
    date: "DÖNGÜ III • MMXXIV",
    cycle: "MMXXIV • ADALET",
    category: "HÜKÜM",
    type: "KANUN",
    readingTime: "6 Dakika Sessizlik",
    accessLevel: "HERKES",
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
    id: 3,
    slug: "birlik-ve-hiclik",
    title: "İç Görü: Yokluk Aynası",
    excerpt: "Aynaya baktığında gördüğün şey sen değilsin. O sadece etten bir kafes. Gözlerini kapattığında geriye kalan o derin sessizlik... İşte o sensin. Biz, okyanusa düşen ve ismini unutan damlalarız.",
    date: "DÖNGÜ II • MMXXIV",
    cycle: "MMXXIV • BİRLİK",
    category: "İÇ GÖRÜ",
    type: "MEDİTASYON",
    readingTime: "Derin Meditasyon",
    accessLevel: "MÜRİT",
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
    id: 4,
    slug: "karanlik-ayin",
    title: "Protokol: Sessizlik Yemini",
    excerpt: "Ayin başladığında sözcükler ölür. Çünkü dil, yalan söylemek için evrimleşmiştir. Hakikat sadece niyetlerde ve nefeste saklıdır. Konuşan, kaybeder.",
    date: "DÖNGÜ I • MMXXIV",
    cycle: "MMXXIV • RİTÜEL",
    category: "TALİMAT",
    type: "TALİMAT",
    readingTime: "Prosedür",
    accessLevel: "MÜRİT",
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
    id: 5,
    slug: "modern-cilecilik",
    title: "Gözlem: Beton ve Ruh",
    excerpt: "Şehrin gürültüsü, ruhun çığlığını bastırmak için tasarlanmış bir işkencedir. Duvarların arasında Ferivonus'u duymak için kulaklarını değil, zihnini kapatmalısın.",
    date: "MMXXIII • DÖNGÜ XII",
    cycle: "MMXXIII • YAŞAM",
    category: "GÖZLEM",
    type: "GÖZLEM",
    readingTime: "4 Dakika Sessizlik",
    accessLevel: "HERKES",
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