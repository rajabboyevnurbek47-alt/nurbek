(() => {
  "use strict";

  const categories = [
    { id: "black-holes", label: "Qora tuynuklar", image: "photo-1462331940025-496dfbfc7564", icon: "◉", description: "Fazo-vaqtning eng sirli hududlari" },
    { id: "stars-galaxies", label: "Yulduzlar va galaktikalar", image: "photo-1446776811953-b23d57bd21aa", icon: "✦", description: "Yulduzlar tug‘ilishi va galaktikalar" },
    { id: "planets", label: "Sayyoralar va ekzoplanetalar", image: "photo-1614730321146-b6fa6a46bcb4", icon: "◌", description: "O‘zga yulduzlar atrofidagi olamlar" },
    { id: "universe", label: "Koinotning kelib chiqishi", image: "photo-1464802686167-b939a6910659", icon: "✧", description: "Katta portlashdan bugungi olamgacha" },
    { id: "space-time", label: "Fazo va vaqt", image: "photo-1451187580459-43490279c0fa", icon: "⌁", description: "Nisbiylik va fazo-vaqt tabiati" },
    { id: "extremes", label: "Koinot rekordlari", image: "photo-1462331940025-496dfbfc7564", icon: "⬡", description: "Eng katta, zich va g‘aroyib hodisalar" },
    { id: "exploration", label: "Koinot tadqiqotlari", image: "photo-1446776811953-b23d57bd21aa", icon: "⌖", description: "Teleskoplar va kosmik missiyalar" }
  ];

  const initialFacts = [
    {
      id: "sgr-a-star", title: "Somon yo‘lining yuragidagi ulkan qora tuynuk", category: "black-holes",
      summary: "Galaktikamiz markazida Quyoshdan qariyb 4 million marta og‘ir Sagittarius A* joylashgan.",
      detail: "Sagittarius A* (Sgr A*) — Somon yo‘li markazidagi supermassiv qora tuynuk. Uning massasi Quyosh massasidan qariyb 4 million baravar katta, ammo hodisalar gorizonti Quyosh tizimi o‘lchamlariga nisbatan ixcham. Astronomlar uning atrofidagi yulduzlar orbitalarini o‘lchab, ko‘rinmas markaziy jism massasini aniqlashgan. 2022-yilda Event Horizon Telescope ham Sgr A* soyasining ilk tasvirini e’lon qildi.",
      image: "photo-1462331940025-496dfbfc7564", status: "Tasdiqlangan kuzatuv", number: "≈ 4 million Quyosh massasi",
      source: "https://science.nasa.gov/universe/black-holes/", featured: true
    },
    {
      id: "webb-deep-field", title: "Jeyms Uebb koinotning ilk galaktikalarini ko‘rmoqda", category: "exploration",
      summary: "Uebb teleskopi koinotning juda erta davrlaridan kelgan, uzoq galaktikalar nurini qayd etadi.",
      detail: "Jeyms Uebb kosmik teleskopi asosan infraqizil nurlarni kuzatadi. Koinot kengayayotgani sabab uzoqdagi galaktikalarning nuri qizil tomonga siljiydi; infraqizil sezgirligi teleskopga ana shu qadimiy nurni kuzatish imkonini beradi. Uebb kuzatuvlari galaktikalar ilk kutilmalardan ertaroq paydo bo‘lganmi, degan savollarni o‘rganishga yordam beradi. Har bir yangi natija yosh va masofa modellari bilan birga tekshiriladi.",
      image: "photo-1464802686167-b939a6910659", status: "Tasdiqlangan kuzatuv", number: "1,5 million km — L2 gacha",
      source: "https://science.nasa.gov/mission/webb/", featured: true
    },
    {
      id: "m87-first-image", title: "Qora tuynuk soyasining ilk tasviri", category: "black-holes",
      summary: "2019-yilda EHT jamoasi M87 galaktikasi markazidagi qora tuynuk soyasini tasvirga oldi.",
      detail: "Event Horizon Telescope (EHT) — butun Yer bo‘ylab joylashgan radioobservatoriyalarni bog‘lab ishlatgan ulkan virtual teleskop. 2019-yilgi tasvirda M87 galaktikasining markaziy qora tuynugi atrofidagi qizigan gaz va qoramtir soya ko‘rindi. Tasvir qora tuynukning o‘zidan chiqqan yorug‘lik emas: uning yaqinidagi modda nurlanishi va kuchli gravitatsiya shakllantirgan soya tasvirlangan. Qora tuynuk taxminan 6,5 milliard Quyosh massasiga ega.",
      image: "photo-1462331940025-496dfbfc7564", status: "Tasdiqlangan kuzatuv", number: "≈ 6,5 milliard Quyosh massasi",
      source: "https://eventhorizontelescope.org/press-release-april-10-2019-astronomers-capture-first-image-black-hole", featured: true
    },
    {
      id: "black-hole-birth", title: "Yulduz so‘nggi nafasida qora tuynukka aylanishi mumkin", category: "black-holes",
      summary: "Yetarlicha og‘ir yulduz yadrosi yoqilg‘isini tugatgach, o‘z gravitatsiyasi ta’sirida qulaydi.",
      detail: "Katta massali yulduzning markazida termoyadroviy yoqilg‘i tugaganda, tashqariga yo‘nalgan bosim kamayadi. Yadro gravitatsiyaga bardosh bera olmasa, kollapsga uchraydi; tashqi qatlamlarning bir qismi supernova portlashida sochiladi. Qolgan yadroning massasi yetarlicha katta bo‘lsa, u qora tuynukka aylanishi mumkin. Har bir supernova albatta qora tuynuk qoldirmaydi — natija yadro massasi va yulduz evolyutsiyasiga bog‘liq.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Tasdiqlangan nazariya", number: "Yulduz evolyutsiyasining mumkin bo‘lgan yakuni",
      source: "https://science.nasa.gov/universe/stars/", featured: false
    },
    {
      id: "event-horizon", title: "Hodisalar gorizonti — ortga qaytish chegarasi", category: "black-holes",
      summary: "Bu chegaradan ichkaridagi hech narsa, hatto yorug‘lik ham, tashqi olamga qayta olmaydi.",
      detail: "Qora tuynukning hodisalar gorizonti — undan qochish uchun kerakli tezlik yorug‘lik tezligiga tenglashadigan chegara. U qattiq sirt emas, balki fazo-vaqtning chegarasidir. Klassik umumiy nisbiylikka ko‘ra, bu hudud ichidan kelajak yo‘nalishidagi barcha yo‘llar markaz tomonga olib boradi. Uzoq kuzatuvchi uchun gorizont yaqinidagi jarayonlar vaqt bo‘yicha cho‘zilgandek ko‘rinadi; bu holat mahalliy kuzatuvchi o‘lchaydigan vaqt bilan bir xil emas.",
      image: "photo-1462331940025-496dfbfc7564", status: "Umumiy nisbiylik bashorati", number: "Qochib chiqish tezligi = yorug‘lik tezligi",
      source: "https://science.nasa.gov/universe/black-holes/"
    },
    {
      id: "black-hole-time", title: "Qora tuynuk yaqinida vaqt sekinroq o‘tadi", category: "space-time",
      summary: "Kuchli gravitatsiya vaqtning o‘tishini uzoqdagi kuzatuvchiga nisbatan sekinlashtiradi.",
      detail: "Umumiy nisbiylik nazariyasida gravitatsiya — fazo-vaqt egriligi. Katta massa yaqinida joylashgan soat uzoqdagi soatga nisbatan sekinroq yuradi. Gravitatsion vaqt sekinlashuvi amalda o‘lchangan fizik hodisa; qora tuynuk yonida esa ta’sir juda kuchli bo‘lishi mumkin. Qora tuynuk yaqinidagi odam uchun o‘z soati odatdagidek o‘tadi, farqni turli joylardagi soatlarni taqqoslaganda aniqlash mumkin.",
      image: "photo-1446776811953-b23d57bd21aa", status: "Tasdiqlangan nazariya", number: "Gravitatsion vaqt sekinlashuvi",
      source: "https://science.nasa.gov/universe/black-holes/"
    },
    {
      id: "black-hole-detection", title: "Ko‘rinmas qora tuynuklar qanday topiladi?", category: "black-holes",
      summary: "Astronomlar qora tuynuklarni yaqinidagi yulduzlar, qizigan gaz va gravitatsion to‘lqinlar orqali aniqlaydi.",
      detail: "Qora tuynukdan yorug‘lik chiqmagani uchun astronomlar uning atrof-muhitga ta’sirini o‘lchaydi. Yaqin yulduzlar orbitalari ko‘rinmas katta massani fosh qilishi mumkin. Qora tuynukka tushayotgan gaz qizib, rentgen nurlarida yorqinlashadi. Ikki qora tuynuk qo‘shilganda esa LIGO va Virgo kabi detektorlar fazo-vaqtdagi gravitatsion to‘lqinlarni qayd etadi.",
      image: "photo-1506318137071-a8e063b4bec0", status: "Tasdiqlangan kuzatuv", number: "Nur, orbitalar va gravitatsion to‘lqinlar",
      source: "https://science.nasa.gov/universe/black-holes/"
    },
    {
      id: "stars-born", title: "Yulduzlar ulkan gaz bulutlarida tug‘iladi", category: "stars-galaxies",
      summary: "Sovuq vodorod va chang buluti gravitatsiya ta’sirida qisqarib, yangi yulduzlar beshigiga aylanadi.",
      detail: "Yulduzlar ko‘pincha molekulyar bulutlarning zich hududlarida shakllanadi. Gravitatsiya moddani ichkariga tortgani sayin markazdagi prot-yulduz qiziydi. Markaz harorati va bosimi yetarli darajaga yetgach, vodorod yadrolari geliyga birika boshlaydi. Termoyadroviy sintez tashqariga bosim hosil qilib, gravitatsiya bilan muvozanatlashadi — yulduzning asosiy hayot bosqichi boshlanadi.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Tasdiqlangan kuzatuv", number: "Yulduzlararo molekulyar bulutlarda",
      source: "https://science.nasa.gov/universe/stars/"
    },
    {
      id: "neutron-star", title: "Choy qoshiq neytron yulduzi tog‘dek og‘ir", category: "stars-galaxies",
      summary: "Quyoshdan og‘irroq massa taxminan shahar kattaligidagi o‘ta zich qoldiqqa siqiladi.",
      detail: "Massiv yulduz yadrosi kollapsga uchraganda, ayrim hollarda proton va elektronlar birikib neytronlarga aylanadi va neytron yulduz hosil bo‘ladi. Odatda u Quyoshdan og‘irroq massani o‘nlab kilometrli hududga joylaydi. Shu sabab uning moddasi favqulodda zich. “Bir choy qoshiq” misoli zichlikni tasavvur qilish uchun ishlatiladi, ammo haqiqiy miqdor yulduz massasi va holatiga bog‘liq.",
      image: "photo-1506318137071-a8e063b4bec0", status: "Tasdiqlangan kuzatuv", number: "Diametri ko‘pincha ≈ 20 km",
      source: "https://science.nasa.gov/universe/stars/"
    },
    {
      id: "pulsar", title: "Pulsarlar kosmosdagi tabiiy mayoq kabi chaqnaydi", category: "stars-galaxies",
      summary: "Tez aylanuvchi neytron yulduzining radio nurlari Yerdan muntazam impulslar bo‘lib ko‘rinadi.",
      detail: "Pulsar — kuchli magnit maydonli, tez aylanadigan neytron yulduz. U magnit qutblari yaqinidan radio va boshqa elektromagnit nurlar dastasini chiqaradi. Dasta kosmosni aylanib o‘tib, Yer yo‘nalishiga kelganda teleskoplar davriy impulsni qayd etadi. Birinchi radiopulsar 1967-yilda kashf etilgan. Ba’zi pulsarlar soatdek aniq impulslari tufayli fundamental fizikani o‘rganishda qo‘l keladi.",
      image: "photo-1462331940025-496dfbfc7564", status: "Tasdiqlangan kuzatuv", number: "1967-yil — ilk pulsar kashfi",
      source: "https://science.nasa.gov/universe/stars/"
    },
    {
      id: "supernova", title: "Supernova bir zumda butun galaktikadek yorqinlashishi mumkin", category: "stars-galaxies",
      summary: "Yulduz portlashi og‘ir elementlarni sochadi va atrofdagi gazni yangi yulduzlar tug‘ilishiga undaydi.",
      detail: "Supernova — ayrim yulduzlarning hayot yakunidagi ulkan portlash. Massiv yulduzning yadrosi qulab, tashqi qatlamlarini fazoga uloqtirishi mumkin; ayrim oq mittilar esa hamrohidan modda olib, kritik sharoitga yetganda portlaydi. Supernovalar temirdan og‘ir ko‘plab elementlarni hosil qilish va tarqatishda muhim rol o‘ynaydi. Quyoshimiz bunday supernova portlashiga yetadigan darajada massiv emas.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Tasdiqlangan kuzatuv", number: "Yulduzlararo muhitni og‘ir elementlar bilan boyitadi",
      source: "https://science.nasa.gov/universe/stars/"
    },
    {
      id: "milky-way-size", title: "Somon yo‘lini bir chetidan ikkinchisigacha kesib o‘tish", category: "stars-galaxies",
      summary: "Bizning galaktikamizning asosiy yulduzli diski taxminan 100 ming yorug‘lik yiliga cho‘ziladi.",
      detail: "Somon yo‘li — milliardlab yulduz, gaz va changdan tashkil topgan spiral galaktika. Uning ko‘rinadigan asosiy diski taxminan 100 ming yorug‘lik yili bo‘ylab yoyiladi, ammo galaktika atrofi yanada kengroq qorong‘i modda halosi bilan o‘ralgan. Quyosh galaktika markazidan qariyb 26 ming yorug‘lik yili uzoqlikda, spiral tarmoqlardan birida joylashgan.",
      image: "photo-1464802686167-b939a6910659", status: "Tasdiqlangan kuzatuv", number: "≈ 100 000 yorug‘lik yili",
      source: "https://science.nasa.gov/universe/galaxies/"
    },
    {
      id: "betelgeuse", title: "Betelgeuse — kelajakda supernovaga aylanishi mumkin", category: "stars-galaxies",
      summary: "Orion yulduz turkumidagi bu qizil supergigantning kelajakdagi taqdiri yulduzlar evolyutsiyasi bilan belgilanadi.",
      detail: "Betelgeuse — Orion yulduz turkumidagi qizil supergigant. U Quyoshdan ancha katta va yorqin, ammo masofa hamda yulduz atmosferasidagi o‘zgarishlar tufayli radiusi va masofasini o‘lchashda noaniqliklar bor. Yulduz katta massali bo‘lgani uchun uning evolyutsiyasi oxirida supernova bilan yakunlanishi kutiladi, biroq bu qachon yuz berishini astronomlar aniq ayta olmaydi. Yaqinda yorqinlashishi yoki xiralashishining o‘zi portlash yaqin degani emas.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Kuzatuv va evolyutsion bashorat", number: "Orion turkumidagi qizil supergigant",
      source: "https://science.nasa.gov/universe/stars/"
    },
    {
      id: "exoplanet-search", title: "Quyosh sistemasidan tashqarida minglab sayyoralar", category: "planets",
      summary: "Teleskoplar boshqa yulduzlarni aylanadigan minglab ekzoplanetalarni tasdiqlagan.",
      detail: "Ekzoplaneta — Quyoshdan boshqa yulduz atrofida aylanuvchi sayyora. Ko‘pchiligi tranzit usuli bilan topiladi: sayyora yulduz oldidan o‘tganda uning yorqinligi ozgina pasayadi. Boshqa usulda sayyoraning tortish kuchi yulduzning tebranishini o‘lchashga imkon beradi. NASA Ekzoplaneta arxivi doimiy yangilanadi, shuning uchun tasdiqlangan sayyoralar soni ortib boradi. Hozircha Yerdan tashqari hayot tasdiqlangan emas.",
      image: "photo-1614730321146-b6fa6a46bcb4", status: "Tasdiqlangan kuzatuv", number: "Minglab tasdiqlangan ekzoplanetalar",
      source: "https://science.nasa.gov/exoplanets/"
    },
    {
      id: "hot-jupiter", title: "Yulduziga juda yaqin aylanadigan issiq Yupiterlar", category: "planets",
      summary: "Ayrim gaz gigantlari o‘z yulduziga shunchalik yaqin aylanadiki, bir yili bir necha kun davom etadi.",
      detail: "“Issiq Yupiter” — massasi Yupiterga o‘xshash, ammo o‘z yulduziga juda yaqin orbitada aylanuvchi gaz giganti. Ularning ayrimlarida bir yil bir necha Yer kuniga teng. Yulduzga yaqinlik kunduzgi tomonni qattiq qizdiradi va atmosferada murakkab aylanishlarni yuzaga keltirishi mumkin. Ular astronomlarni sayyoralar qanday shakllanishi va ko‘chishi haqidagi nazariyalarni qayta tekshirishga undagan.",
      image: "photo-1614730321146-b6fa6a46bcb4", status: "Tasdiqlangan kuzatuv", number: "Ayrimlarida orbital davr bir necha kun",
      source: "https://science.nasa.gov/exoplanets/"
    },
    {
      id: "europa-ocean", title: "Yupiter yo‘ldoshi Yevropa muz ostida okean yashirishi mumkin", category: "planets",
      summary: "Muz qobig‘i ostidagi sho‘r suv okeani Yevropani Quyosh sistemasidagi qiziqarli olamlardan biriga aylantiradi.",
      detail: "Yupiterning Yevropa yo‘ldoshi qalin muz qobig‘iga ega. Yupiter va boshqa yo‘ldoshlarning gravitatsion ta’siri Yevropaning ichki qismini isitib, muz ostida global suyuq okean mavjud bo‘lishi mumkinligini ko‘rsatadi. Magnit maydoni va sirt geologiyasi bu taxminni qo‘llab-quvvatlaydi, ammo okeanga bevosita kirib o‘lchov olinmagan. Shu sabab bu yaxshi asoslangan ilmiy xulosa, lekin hayot borligining bevosita tasdig‘i emas.",
      image: "photo-1614730321146-b6fa6a46bcb4", status: "Kuchli dalillarga asoslangan gipoteza", number: "Muz qobig‘i ostida suyuq okean bo‘lishi mumkin",
      source: "https://science.nasa.gov/jupiter/moons/europa/"
    },
    {
      id: "titan-seas", title: "Titanda suv emas, metan ko‘llari bor", category: "planets",
      summary: "Saturnning yo‘ldoshi Titan — sirtida suyuq daryo va ko‘llari bor, ammo ularda metan oqadi.",
      detail: "Titanning sirt harorati juda past, shuning uchun metan va etan kabi moddalar uning yuzasida suyuq holda turishi mumkin. Cassini va Huygens missiyalari daryo o‘zanlari, ko‘llar va qalin atmosferani kuzatdi. Yerdagi suv aylanishiga o‘xshash metan aylanishi ham bulut, yomg‘ir va ko‘llarni o‘z ichiga oladi. Titanning yerosti okeani esa muz va suyuqlik qatlamlaridan iborat bo‘lishi mumkin.",
      image: "photo-1614730321146-b6fa6a46bcb4", status: "Tasdiqlangan kuzatuv", number: "Sirtida suyuq metan va etan",
      source: "https://science.nasa.gov/saturn/moons/titan/"
    },
    {
      id: "kepler-186f", title: "Kepler-186f — yulduzining yashash zonasidagi ilk Yer-o‘lchamli kashfiyot", category: "planets",
      summary: "U yulduzi atrofidagi suyuq suv uchun qulay masofada topilgan Yer-o‘lchamli ilk ekzoplaneta edi.",
      detail: "2014-yilda e’lon qilingan Kepler-186f kashfi yulduzining yashash zonasida joylashgan Yer-o‘lchamli sayyora sifatida muhim bo‘ldi. “Yashash zonasi” — sirtida suyuq suv bo‘lishi mumkin bo‘lgan haroratga mos masofalar oralig‘i. Bu sayyorada suv yoki hayot borligi isbotlangan degani emas: atmosferasi, yulduz nurlanishi va geologiyasi haqida ko‘p narsa noma’lum.",
      image: "photo-1614730321146-b6fa6a46bcb4", status: "Tasdiqlangan kashfiyot; yashash imkoniyati ochiq savol", number: "2014-yilda e’lon qilingan",
      source: "https://science.nasa.gov/exoplanets/"
    },
    {
      id: "big-bang", title: "Katta portlash — fazoning ichida sodir bo‘lgan portlash emas", category: "universe",
      summary: "Katta portlash modeli butun koinotning juda issiq va zich ilk holatdan kengayganini tasvirlaydi.",
      detail: "Katta portlash nazariyasi olam taxminan 13,8 milliard yil avval juda issiq va zich holatda bo‘lganini, keyin esa fazoning o‘zi kengayganini tushuntiradi. Bu oddiy portlash kabi bo‘sh fazo ichidagi markazdan tarqalish emas — kuzatuvlarga ko‘ra, katta masshtabda galaktikalar orasidagi masofalar o‘sib bormoqda. Kosmik mikroto‘lqinli fon va yengil elementlar miqdori nazariyani qo‘llab-quvvatlaydi.",
      image: "photo-1464802686167-b939a6910659", status: "Kuzatuvlarga tayangan ilmiy model", number: "Koinot yoshi ≈ 13,8 milliard yil",
      source: "https://science.nasa.gov/universe/the-big-bang/"
    },
    {
      id: "universe-expansion", title: "Koinot kengaymoqda — uzoq galaktikalar bizdan uzoqlashadi", category: "universe",
      summary: "Katta masshtabda galaktikalar orasidagi fazo cho‘zilmoqda; yaqin galaktikalar gravitatsiya bilan bog‘langan bo‘lishi mumkin.",
      detail: "Galaktikalardan kelayotgan yorug‘likning qizilga siljishi va masofa o‘lchovlari olamning kengayishini ko‘rsatadi. Kengayish — galaktikalarning bo‘shliqda barcha yo‘nalishda markazdan qochishi emas; katta masshtabda fazoning o‘zi o‘zgaradi. Andromeda kabi gravitatsiya bilan bog‘langan yaqin galaktikalar esa umumiy kengayishga oddiy tarzda ergashmaydi.",
      image: "photo-1464802686167-b939a6910659", status: "Tasdiqlangan kuzatuv", number: "Kengayish kosmologik masshtabda o‘lchanadi",
      source: "https://science.nasa.gov/universe/galaxies/"
    },
    {
      id: "dark-matter", title: "Koinot massasining katta qismi ko‘rinmas qorong‘i modda bo‘lishi mumkin", category: "universe",
      summary: "Galaktikalar harakati va gravitatsion linzalanish ko‘rinmaydigan massa borligini ko‘rsatadi.",
      detail: "Qorong‘i modda yorug‘lik chiqarmaydi yoki sezilarli darajada qaytarmaydi, shuning uchun uni teleskopda bevosita ko‘rib bo‘lmaydi. Ammo galaktikalar aylanishi, galaktika to‘dalari harakati va gravitatsion linzalanish uning gravitatsion ta’sirini ko‘rsatadi. Qorong‘i moddaning zarrachalari hali aniqlanmagan; uning tabiati ochiq ilmiy savol bo‘lib qolmoqda.",
      image: "photo-1462331940025-496dfbfc7564", status: "Kuzatuvlar bilan asoslangan; tabiati noma’lum", number: "Ko‘rinmas gravitatsion manba",
      source: "https://science.nasa.gov/universe/dark-matter-dark-energy/"
    },
    {
      id: "dark-energy", title: "Koinot kengayishining tezlashishiga nima sabab?", category: "universe",
      summary: "Astronomlar tezlanayotgan kengayishni “qorong‘i energiya” nomi bilan ataydigan noma’lum ta’sirga bog‘laydi.",
      detail: "Uzoq Ia turidagi supernovalarni o‘rganish XX asr oxirida koinot kengayishi tezlashayotganiga dalil berdi. “Qorong‘i energiya” — shu kuzatuvni tushuntiradigan noma’lum tarkib yoki ta’sir uchun ishlatiladigan nom. U oddiy modda kabi zarracha sifatida aniqlanmagan; kosmologik doimiylikdan tortib yangi fizikagacha bo‘lgan izohlar tekshirilmoqda. Bu to‘liq hal etilgan sir emas.",
      image: "photo-1446776811953-b23d57bd21aa", status: "Kuzatuv tasdiqlangan; izohi ochiq", number: "Tezlashayotgan kengayish 1998-yilda kashf etilgan",
      source: "https://science.nasa.gov/universe/dark-matter-dark-energy/"
    },
    {
      id: "cosmic-background", title: "Koinotning ilk nurlarini 2,7 kelvinlik fon sifatida ko‘ramiz", category: "universe",
      summary: "Kosmik mikroto‘lqinli fon — ilk koinotdan qolgan yorug‘likning sovigan, butun osmonni qamragan izi.",
      detail: "Katta portlashdan qariyb 380 ming yil o‘tgach, elektron va protonlar birikib atomlarni hosil qilgan. Shunda yorug‘lik koinot bo‘ylab erkin tarqala boshlagan; bugun kuzatiladigan kosmik mikroto‘lqinli fon shu nurning kengayish bilan sovigan qoldig‘idir. Uning o‘rtacha harorati taxminan 2,725 kelvin. Undagi juda kichik harorat farqlari ilk zichlik notekisliklarini aks ettiradi.",
      image: "photo-1464802686167-b939a6910659", status: "Tasdiqlangan kuzatuv", number: "O‘rtacha harorati ≈ 2,725 K",
      source: "https://science.nasa.gov/universe/cosmic-microwave-background/"
    },
    {
      id: "observable-universe", title: "Kuzatiladigan koinot diametri qariyb 93 milliard yorug‘lik yili", category: "extremes",
      summary: "Koinot kengayayotgani sabab eng qadimiy ko‘rayotgan nurlar kelgan hudud hozir ancha uzoqlashgan.",
      detail: "Koinotning yoshi taxminan 13,8 milliard yil bo‘lsa-da, kuzatiladigan koinotning hozirgi radiusi qariyb 46,5 milliard yorug‘lik yili deb baholanadi. Buning sababi — yorug‘lik biz tomon yo‘lda bo‘lgan paytda fazo ham kengaygan. Bu sonlar koinotning butun o‘lchamini anglatmaydi: kuzatiladigan ufqdan narida ham hududlar davom etishi mumkin, biroq ularning nuri hali bizga yetib kelmagan.",
      image: "photo-1464802686167-b939a6910659", status: "Kosmologik model bahosi", number: "Diametri ≈ 93 milliard yorug‘lik yili",
      source: "https://science.nasa.gov/universe/"
    },
    {
      id: "cold-spot", title: "Koinotdagi eng sovuq tabiiy joylardan biri — Boomerang tumanligi", category: "extremes",
      summary: "Kengayayotgan gaz bulutining harorati kosmik fondan ham past ekani o‘lchangan.",
      detail: "Centaurus yulduz turkumidagi Boomerang tumanligi — markaziy yulduzidan otilib chiqayotgan gaz buluti. Gazning tez kengayishi uni sovitadi va tumanlikda taxminan 1 kelvin harorat kuzatilgan — kosmik mikroto‘lqinli fonning o‘rtacha 2,7 kelvin haroratidan ham past. Bu tabiiy astronomik obyekt haqidagi ma’lumot, ammo “butun koinotdagi yagona eng sovuq nuqta” degani emas.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Tasdiqlangan kuzatuv", number: "Taxminan 1 K (−272 °C)",
      source: "https://www.eso.org/public/news/eso9706/"
    },
    {
      id: "space-smell", title: "Kosmik fazoning o‘zi vakuum, ammo yulduzlararo bulutlarda molekulalar bor", category: "extremes",
      summary: "Kosmos bo‘m-bo‘sh emas: teleskoplar yulduzlararo gaz va changda murakkab molekulalarni aniqlaydi.",
      detail: "Yulduzlararo fazo juda siyrak bo‘lsa-da, to‘liq bo‘sh emas. Unda ionlashgan gaz, atomlar, molekulalar, kosmik chang va magnit maydonlar mavjud. Radioteleskoplar va infraqizil kuzatuvlar suv, uglerodli birikmalar va boshqa molekulalarni topadi. Bu birikmalarning mavjudligi kosmosda hayot borligini o‘z-o‘zidan isbotlamaydi.",
      image: "photo-1534796636912-3b95b3ab5986", status: "Tasdiqlangan kuzatuv", number: "Siyrak muhitda ham molekulalar aniqlangan",
      source: "https://science.nasa.gov/universe/"
    },
    {
      id: "light-speed", title: "Yorug‘likning vakuumdagi tezligi — tabiatning kosmik tezlik chegarasi", category: "space-time",
      summary: "Yorug‘lik bo‘shliqda soniyasiga qariyb 300 ming kilometr yo‘l bosadi.",
      detail: "Vakuumdagi yorug‘lik tezligi aniq qiymat bilan belgilangan: sekundiga 299 792 458 metr. Nisbiylik nazariyasiga ko‘ra, massaga ega jismlar shu tezlikka yetishi uchun cheksiz energiya talab etiladi. Koinotning kengayishi sabab juda uzoq galaktikalar orasidagi masofa yorug‘likdan tez ortishi mumkin, chunki bu fazoning kengayishidir — jismning mahalliy harakatda yorug‘likdan o‘zib ketishi emas.",
      image: "photo-1451187580459-43490279c0fa", status: "Tasdiqlangan fizik qonun", number: "299 792 458 m/s",
      source: "https://www.nist.gov/si-redefinition/second-metre"
    },
    {
      id: "gps-relativity", title: "GPS sun’iy yo‘ldoshlariga Eynshteyn nisbiyligi kerak", category: "space-time",
      summary: "Sun’iy yo‘ldosh soatlariga maxsus va umumiy nisbiylik tuzatmalari hisoblanmasa, navigatsiya xatolari yig‘iladi.",
      detail: "GPS yo‘ldoshlari Yer yuzasidagi soatlarga nisbatan boshqa balandlikda va boshqa tezlikda harakat qiladi. Maxsus nisbiylik tez harakatlanayotgan soatning sekinroq yurishini, umumiy nisbiylik esa kuchsizroq gravitatsiya ta’siridagi soatning tezroq yurishini bashorat qiladi. Ikki ta’sir bir-biriga qarama-qarshi, ammo farq umumiy hisobda to‘planadi. GPS vaqt tizimlari bu farqlarni hisobga oladi.",
      image: "photo-1451187580459-43490279c0fa", status: "Muhandislikda qo‘llanadigan o‘lchov", number: "Har kuni hisobga olinadigan vaqt tuzatmalari",
      source: "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-and-frequency-z/relativity-and-gps"
    },
    {
      id: "gravitational-waves", title: "Fazo-vaqt tebranishlari Yergacha yetib keladi", category: "space-time",
      summary: "Ikki qora tuynuk qo‘shilganda hosil bo‘lgan gravitatsion to‘lqinlar ilk bor 2015-yilda qayd etildi.",
      detail: "Gravitatsion to‘lqinlar — massiv jismlar tezlanib harakatlanganda fazo-vaqtda tarqaladigan tebranishlar. LIGO detektori 2015-yil sentabrida ikki qora tuynuk qo‘shilishidan kelgan signalni qayd etdi; natija 2016-yilda e’lon qilindi. To‘lqin Yerga yetguncha juda zaiflashadi: LIGO lazer interferometrlari proton diametrining juda kichik ulushiga teng masofa o‘zgarishini sezadi.",
      image: "photo-1446776811953-b23d57bd21aa", status: "Tasdiqlangan kuzatuv", number: "Ilk signal: 2015-yil; e’lon: 2016-yil",
      source: "https://www.ligo.caltech.edu/page/press-releases"
    },
    {
      id: "wormholes", title: "Qurt teshiklari — matematik yechim, hozircha kuzatuv emas", category: "space-time",
      summary: "Nisbiylikning ayrim yechimlari uzoq hududlarni bog‘lovchi tunnelga o‘xshash tuzilmalarni tasvirlaydi.",
      detail: "Qurt teshigi — fazo-vaqtning ikki uzoq nuqtasini nazariy jihatdan bog‘lashi mumkin bo‘lgan tuzilma. Umumiy nisbiylik tenglamalarining ayrim yechimlari shunday ko‘priklarni tasvirlaydi, ammo ularning mavjudligiga tasdiqlangan astronomik dalil yo‘q. Ko‘p modellar bunday yo‘lak ochiq turishi uchun mavjudligi noma’lum bo‘lgan “ekzotik” energiya xususiyatlarini talab qiladi. Uni haqiqiy fazoviy sayohat usuli deb qabul qilmaslik kerak.",
      image: "photo-1462331940025-496dfbfc7564", status: "Nazariy tushuncha; kuzatilmagan", number: "Tasdiqlangan qurt teshigi aniqlanmagan",
      source: "https://science.nasa.gov/universe/black-holes/"
    },
    {
      id: "webb-mirrors", title: "Uebb teleskopining asosiy ko‘zgusi 18 bo‘lakdan yig‘ilgan", category: "exploration",
      summary: "Teleskop oltin bilan qoplangan berilliy segmentlarini fazoda bir ulkan ko‘zgudek sozlab ishlatadi.",
      detail: "Jeyms Uebb kosmik teleskopining asosiy ko‘zgusi 18 ta olti burchakli segmentdan tuzilgan. Har bir segment berilliydan yasalgan va yupqa oltin qatlam bilan qoplangan — bu infraqizil nurni yaxshi qaytaradi. Teleskop Yer–Quyosh tizimining ikkinchi Lagranj nuqtasi yaqinida, Yerdan taxminan 1,5 million kilometr uzoqda ishlaydi. Segmentlarning holati kuzatuvlar davomida Yerdan turib mayda tuzatiladi.",
      image: "photo-1446776811953-b23d57bd21aa", status: "Muhandislik va kuzatuv fakti", number: "18 segment · 6,5 m ko‘zgu",
      source: "https://science.nasa.gov/mission/webb/"
    },
    {
      id: "hubble-launch", title: "Hubble teleskopi 1990-yildan beri koinotni kuzatadi", category: "exploration",
      summary: "Yer atmosferasidan yuqorida ishlaydigan Hubble koinot haqidagi qarashimizni keskin o‘zgartirdi.",
      detail: "NASA va ESAning Hubble kosmik teleskopi 1990-yil 24-aprelda uchirilgan. Yer atmosferasi tashqarisida ishlagani uchun u ko‘rinadigan, ultrabinafsha va yaqin infraqizil diapazonlarda aniq tasvirlar beradi. Xizmat ko‘rsatish missiyalari uning imkoniyatlarini yangilab, o‘nlab yillar ishlashiga yordam berdi. Hubble’ning chuqur maydon tasvirlari olis galaktikalar va koinot evolyutsiyasini o‘rganishga katta hissa qo‘shgan.",
      image: "photo-1464802686167-b939a6910659", status: "Tasdiqlangan missiya tarixi", number: "Uchirilgan: 1990-yil 24-aprel",
      source: "https://science.nasa.gov/mission/hubble/"
    },
    {
      id: "perseverance", title: "Perseverance Marsda qadimgi hayot izlarini qidirmoqda", category: "exploration",
      summary: "Rover Jezero kraterini o‘rganib, qadimiy muhit belgilari va Mars jinslaridan namunalar to‘playdi.",
      detail: "NASAning Perseverance roveri Marsga 2021-yil fevralida qo‘ngan. U Jezero krateridagi qadimiy ko‘l va daryo deltasi qoldiqlarini o‘rganadi. Rover jinslar va tuproq namunalarini germetik naychalarga yig‘adi; kelajakdagi xalqaro missiya ularni Yerga qaytarishi rejalashtirilgan, biroq qaytarish dasturining vaqti va shakli qayta ko‘rib chiqilmoqda. Hozircha Marsda qadimgi hayot tasdiqlangan emas.",
      image: "photo-1614728263952-84ea256f9679", status: "Amaldagi tadqiqot; hayot aniqlanmagan", number: "Marsga qo‘ngan: 2021-yil 18-fevral",
      source: "https://science.nasa.gov/mission/mars-2020-perseverance/"
    },
    {
      id: "voyager", title: "Voyager 1 yulduzlararo fazoga yetib borgan inson yasagan zond", category: "exploration",
      summary: "1977-yilda uchirilgan Voyager 1 hozir geliosferadan tashqarida fazoni o‘lchamoqda.",
      detail: "Voyager 1 va uning egizagi Voyager 2 1977-yilda uchirilgan. Voyager 1 2012-yilda Quyosh shamoli pufagi — geliosferadan chiqib, yulduzlararo muhitga o‘tdi. U yulduzlar orasidagi fazoning zarralari va magnit maydonini o‘lchamoqda. “Quyosh tizimidan chiqdi” degan ibora bu yerda geliosfera chegarasiga nisbatan ishlatiladi: Oort buluti ancha uzoqqa cho‘zilishi mumkin.",
      image: "photo-1446776811953-b23d57bd21aa", status: "Tasdiqlangan missiya holati", number: "Uchirilgan: 1977-yil · geliosferadan chiqqan: 2012-yil",
      source: "https://science.nasa.gov/mission/voyager/"
    }
  ];

  const planets = [
    { id: "mercury", name: "Merkuriy", distance: "57,9 mln km", color: "#b7b0aa", size: 6, orbit: "14%", fact: "Quyoshga eng yaqin sayyora. Uning deyarli atmosferasiz sirtida kunduz va tun harorati juda keskin farq qiladi." },
    { id: "venus", name: "Venera", distance: "108,2 mln km", color: "#e5b67b", size: 9, orbit: "25%", fact: "Qalin karbonat angidrid atmosferasi tufayli Quyosh sistemasidagi sirt harorati eng yuqori sayyora." },
    { id: "earth", name: "Yer", distance: "149,6 mln km", color: "#54a9ec", size: 10, orbit: "36%", fact: "Biz bilgan hayot mavjudligi tasdiqlangan yagona sayyora. Sirtining katta qismini suyuq suv qoplaydi." },
    { id: "mars", name: "Mars", distance: "227,9 mln km", color: "#d67858", size: 8, orbit: "47%", fact: "Robot missiyalar qadimda suyuq suv oqib turganiga doir geologik belgilarni o‘rganyapti." },
    { id: "jupiter", name: "Yupiter", distance: "778,6 mln km", color: "#d5a778", size: 17, orbit: "60%", fact: "Quyosh sistemasidagi eng katta sayyora; asosan vodorod va geliydan iborat gaz giganti." },
    { id: "saturn", name: "Saturn", distance: "1,43 mlrd km", color: "#dfc995", size: 15, orbit: "72%", fact: "Muz va tosh bo‘laklaridan tashkil topgan halqalari uni Quyosh sistemasidagi eng taniqli olamlardan qiladi." },
    { id: "uranus", name: "Uran", distance: "2,87 mlrd km", color: "#8ad7dd", size: 12, orbit: "84%", fact: "Muz giganti deyarli yonboshlab aylanadi; bu uning fasllarini favqulodda uzoq va keskin qiladi." },
    { id: "neptune", name: "Neptun", distance: "4,50 mlrd km", color: "#6484eb", size: 12, orbit: "96%", fact: "Quyoshdan eng uzoq sakkiz sayyora; atmosferasida juda kuchli shamollar kuzatiladi." }
  ];

  const distanceStops = [
    { name: "Yer", value: "12 742 km", description: "Boshlanish nuqtamiz: Yerning diametri bo‘ylab sayohat taxminan 12 742 kilometr." },
    { name: "Oy", value: "384 400 km", description: "Yer va Oy orasidagi o‘rtacha masofa qariyb 384 400 km. Apollo missiyalari bu masofani bosib o‘tgan." },
    { name: "Quyosh", value: "1 astronomik birlik", description: "Yerdan Quyoshgacha bo‘lgan o‘rtacha masofa 149,6 million km yoki 1 astronomik birlik." },
    { name: "Neptun", value: "≈ 30 AU", description: "Neptun Quyoshdan o‘rtacha qariyb 30 astronomik birlik uzoqlikda aylanadi." },
    { name: "Proksima", value: "4,24 yorug‘lik yili", description: "Quyoshga eng yaqin yulduz — Proksima Sentavr bizdan qariyb 4,24 yorug‘lik yili narida." },
    { name: "Somon yo‘li", value: "≈ 100 000 yorug‘lik yili", description: "Somon yo‘lining ko‘rinadigan yulduzli diski taxminan 100 ming yorug‘lik yiliga cho‘zilgan." },
    { name: "Andromeda", value: "≈ 2,5 mln yorug‘lik yili", description: "Andromeda — Somon yo‘liga eng yaqin yirik galaktika; bizdan qariyb 2,5 million yorug‘lik yili uzoqda." },
    { name: "Kuzatiladigan olam", value: "≈ 93 mlrd yorug‘lik yili", description: "Kuzatiladigan koinotning hozirgi diametri qariyb 93 milliard yorug‘lik yili deb baholanadi." }
  ];

  const timeline = [
    { year: "1543", title: "Quyosh markazga ko‘chdi", text: "Kopernik Quyoshni markazga qo‘ygan geliotsentrik modelni e’lon qildi." },
    { year: "1609", title: "Teleskop osmon sari", text: "Galiley teleskop bilan Oy sirtini, Yupiter yo‘ldoshlarini kuzatdi." },
    { year: "1915", title: "Umumiy nisbiylik", text: "Eynshteyn gravitatsiyani fazo-vaqt egriligi sifatida tasvirladi." },
    { year: "1929", title: "Koinot kengayishi", text: "Xabbl galaktikalarning uzoqlashish tezligi va masofasi orasidagi bog‘liqlikni ko‘rsatdi." },
    { year: "1965", title: "Katta portlash izi", text: "Kosmik mikroto‘lqinli fon tasodifan kashf etilib, ilk koinot haqidagi modelni mustahkamladi." },
    { year: "1990", title: "Hubble fazoda", text: "Hubble teleskopi uchirildi; koinotning chuqur tasvirlari yangi ufqlarni ochdi." },
    { year: "1995", title: "Ilk ekzoplaneta", text: "Quyoshga o‘xshash yulduz atrofidagi ilk sayyora kashfi e’lon qilindi." },
    { year: "2015", title: "Gravitatsion to‘lqin", text: "LIGO ikki qora tuynuk qo‘shilishidan kelgan fazo-vaqt tebranishini ilk bor qayd etdi." },
    { year: "2019", title: "Qora tuynuk tasviri", text: "Event Horizon Telescope M87 galaktikasi markazining ilk tasvirini e’lon qildi." },
    { year: "2021", title: "Jeyms Uebb uchirildi", text: "Yangi infraqizil teleskop galaktikalar, yulduzlar va ekzoplanetalarni kuzatishni boshladi." }
  ];

  const STORAGE_FACTS = "astroverse.facts.v1";
  const STORAGE_FAVORITES = "astroverse.favorites.v1";
  const STORAGE_THEME = "astroverse.theme.v1";
  const categoryById = new Map(categories.map((item) => [item.id, item]));
  const factsGrid = document.getElementById("facts-grid");
  const featureGrid = document.getElementById("feature-grid");
  const filterRow = document.getElementById("filter-row");
  const searchInput = document.getElementById("fact-search");
  const detailDialog = document.getElementById("detail-dialog");
  const adminDialog = document.getElementById("admin-dialog");
  let activeCategory = "all";
  let currentFactId = null;
  let adminEditingId = null;
  let toastTimer;
  let facts = loadFacts();
  let favorites = loadFavorites();

  function loadFacts() {
    try {
      const stored = localStorage.getItem(STORAGE_FACTS);
      if (!stored) return structuredClone(initialFacts);
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) throw new Error("Saqlangan faktlar ro‘yxati noto‘g‘ri formatda.");
      return parsed;
    } catch (error) {
      console.error("ASTROVERSE faktlarini o‘qib bo‘lmadi:", error);
      return structuredClone(initialFacts);
    }
  }

  function loadFavorites() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_FAVORITES) || "[]");
      return Array.isArray(stored) ? stored.filter((id) => typeof id === "string") : [];
    } catch (error) {
      console.error("ASTROVERSE sevimlilarini o‘qib bo‘lmadi:", error);
      return [];
    }
  }

  function persistFacts() {
    try { localStorage.setItem(STORAGE_FACTS, JSON.stringify(facts)); }
    catch (error) { console.error("Faktlarni saqlab bo‘lmadi:", error); showToast("Faktlarni saqlashda xatolik. Brauzer xotirasini tekshiring."); }
  }

  function persistFavorites() {
    try { localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(favorites)); }
    catch (error) { console.error("Sevimlilarni saqlab bo‘lmadi:", error); showToast("Sevimlilarni saqlashda xatolik."); }
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function safeImage(image) {
    const imageId = /^[\w-]+$/.test(String(image || "")) ? image : "photo-1462331940025-496dfbfc7564";
    return `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=900&q=78`;
  }

  function safeSource(source) {
    try {
      const url = new URL(source);
      return ["https:", "http:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  }

  function getCategoryLabel(id) {
    return categoryById.get(id)?.label || "Koinot";
  }

  function featuredFacts() {
    const chosen = facts.filter((fact) => fact.featured).slice(0, 3);
    for (const fact of facts) {
      if (chosen.length === 3) break;
      if (!chosen.includes(fact)) chosen.push(fact);
    }
    return chosen;
  }

  function renderDaily() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
    const dailyFact = facts.length ? facts[Math.abs(hashString(dateKey)) % facts.length] : null;
    const dateLabel = new Intl.DateTimeFormat("uz-UZ", { day: "numeric", month: "long" }).format(today);
    document.getElementById("daily-date").textContent = dateLabel.toLocaleUpperCase("uz-UZ");
    renderDailyFact(dailyFact);
  }

  function hashString(text) {
    let hash = 0;
    for (let index = 0; index < text.length; index += 1) hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    return hash;
  }

  function renderDailyFact(fact) {
    const root = document.getElementById("daily-content");
    root.dataset.factId = fact?.id || "";
    root.innerHTML = fact
      ? `<h3>${escapeHTML(fact.title)}</h3><p>${escapeHTML(fact.summary)}</p>`
      : "<h3>Hozircha faktlar mavjud emas</h3><p>Boshqaruv bo‘limidan yangi fakt qo‘shing.</p>";
    root.style.cursor = fact ? "pointer" : "default";
  }

  function renderFeatures() {
    featureGrid.innerHTML = featuredFacts().map((fact) => `
      <article class="feature-card" tabindex="0" data-open-fact="${escapeHTML(fact.id)}" aria-label="${escapeHTML(fact.title)}">
        <img src="${safeImage(fact.image)}" alt="${escapeHTML(fact.title)}" loading="lazy">
        <div class="feature-content"><span class="category-tag">${escapeHTML(getCategoryLabel(fact.category))}</span><h3>${escapeHTML(fact.title)}</h3><p>${escapeHTML(fact.summary)}</p></div>
      </article>`).join("");
  }

  function renderCategories() {
    const root = document.getElementById("category-grid");
    root.innerHTML = categories.map((category) => {
      const count = facts.filter((fact) => fact.category === category.id).length;
      return `<button class="category-card" data-category="${escapeHTML(category.id)}" aria-label="${escapeHTML(category.label)} bo‘yicha faktlarni ko‘rish">
        <img src="${safeImage(category.image)}" alt="" loading="lazy"><span class="category-icon" aria-hidden="true">${category.icon}</span>
        <h3>${escapeHTML(category.label)}</h3><span>${count} ta kashfiyot</span>
      </button>`;
    }).join("");
  }

  function renderFilters() {
    filterRow.innerHTML = `<button class="filter-chip ${activeCategory === "all" ? "selected" : ""}" data-category="all">Barcha mavzular</button>
      <button class="filter-chip ${activeCategory === "favorites" ? "selected" : ""}" data-category="favorites">♡ Sevimlilar</button>
      ${categories.map((category) => `<button class="filter-chip ${activeCategory === category.id ? "selected" : ""}" data-category="${escapeHTML(category.id)}">${escapeHTML(category.label)}</button>`).join("")}`;
  }

  function matchesFact(fact, query) {
    const category = getCategoryLabel(fact.category);
    const text = `${fact.title} ${fact.summary} ${fact.detail} ${category} ${fact.status}`.toLocaleLowerCase("uz-UZ");
    return text.includes(query.toLocaleLowerCase("uz-UZ"));
  }

  function renderFacts() {
    const query = searchInput.value.trim();
    const filtered = facts.filter((fact) => {
      const categoryMatches = activeCategory === "all" || (activeCategory === "favorites" ? favorites.includes(fact.id) : fact.category === activeCategory);
      return categoryMatches && matchesFact(fact, query);
    });
    factsGrid.innerHTML = filtered.map((fact) => `
      <article class="fact-card">
        <div class="fact-image"><img src="${safeImage(fact.image)}" alt="${escapeHTML(fact.title)}" loading="lazy">
          <span class="category-tag">${escapeHTML(getCategoryLabel(fact.category))}</span>
          <div class="fact-actions-top">
            <button class="mini-action ${favorites.includes(fact.id) ? "is-saved" : ""}" data-favorite="${escapeHTML(fact.id)}" aria-label="${favorites.includes(fact.id) ? "Sevimlilardan olib tashlash" : "Sevimlilarga saqlash"}" aria-pressed="${favorites.includes(fact.id)}">${favorites.includes(fact.id) ? "♥" : "♡"}</button>
            <button class="mini-action" data-share="${escapeHTML(fact.id)}" aria-label="Faktni ulashish">↗</button>
          </div>
        </div>
        <div class="fact-body"><h3>${escapeHTML(fact.title)}</h3><p>${escapeHTML(fact.summary)}</p>
          <div class="fact-footer"><button class="read-more" data-open-fact="${escapeHTML(fact.id)}">Batafsil o‘qish <span aria-hidden="true">↗</span></button><span class="fact-status">${escapeHTML(fact.status || "Ilmiy fakt")}</span></div>
        </div>
      </article>`).join("");
    document.getElementById("results-count").textContent = `${filtered.length} ta fakt`;
    document.getElementById("empty-state").hidden = filtered.length !== 0;
    factsGrid.hidden = filtered.length === 0;
  }

  function refreshFacts() {
    renderFilters();
    renderFacts();
    renderCategories();
    renderFeatures();
    document.getElementById("stat-facts").textContent = `${facts.length}+`;
  }

  function openFact(id) {
    const fact = facts.find((item) => item.id === id);
    if (!fact) { showToast("Bu fakt topilmadi."); return; }
    currentFactId = id;
    const source = safeSource(fact.source);
    detailDialog.innerHTML = `
      <div class="detail-image" style="background-image:linear-gradient(180deg,transparent,rgba(12,16,32,.27)),url('${safeImage(fact.image)}')"></div>
      <button class="dialog-close" data-close-dialog aria-label="Yopish">×</button>
      <article class="detail-article"><span class="category-tag">${escapeHTML(getCategoryLabel(fact.category))}</span>
        <h2 id="detail-title">${escapeHTML(fact.title)}</h2><p class="detail-summary">${escapeHTML(fact.summary)}</p>
        <div class="detail-meta"><span>${escapeHTML(fact.status || "Ilmiy fakt")}</span>${fact.number ? `<span>${escapeHTML(fact.number)}</span>` : ""}</div>
        <p class="detail-body">${escapeHTML(fact.detail)}</p>
        ${source ? `<a class="source-link" href="${escapeHTML(source)}" target="_blank" rel="noopener noreferrer">Ishonchli ilmiy manba <span aria-hidden="true">↗</span></a>` : "<span class='fact-status'>Manba havolasi kiritilmagan.</span>"}
      </article>`;
    detailDialog.showModal();
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 2600);
  }

  function chooseRandomFact() {
    if (!facts.length) { showToast("Tasodifiy fakt topilmadi. Avval fakt qo‘shing."); return; }
    const options = facts.filter((fact) => fact.id !== currentFactId);
    const selected = options[Math.floor(Math.random() * options.length)] || facts[0];
    currentFactId = selected.id;
    openFact(selected.id);
  }

  async function shareFact(id) {
    const fact = facts.find((item) => item.id === id);
    if (!fact) return;
    const shareData = { title: `ASTROVERSE — ${fact.title}`, text: fact.summary, url: `${location.href.split("#")[0]}#fakt-${encodeURIComponent(fact.id)}` };
    try {
      if (navigator.share) await navigator.share(shareData);
      else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        showToast("Fakt havolasi nusxalandi.");
      } else {
        showToast("Bu brauzerda ulashish imkoniyati mavjud emas.");
      }
    } catch (error) {
      if (error.name !== "AbortError") { console.error("Faktni ulashib bo‘lmadi:", error); showToast("Faktni ulashib bo‘lmadi."); }
    }
  }

  function renderSolarSystem() {
    const map = document.getElementById("solar-map");
    map.innerHTML = `<div class="sun" role="img" aria-label="Quyosh"></div>${planets.map((planet) => `
      <div class="solar-orbit" style="--orbit:${planet.orbit}"></div>
      <button class="orbit-planet" data-planet="${planet.id}" style="--orbit:${planet.orbit};--size:${planet.size}px;--planet-color:${planet.color}" aria-label="${planet.name}"></button>`).join("")}<span class="solar-map-label">QUYOSH</span>`;
    document.getElementById("planet-picker").innerHTML = planets.map((planet) => `<button class="planet-button ${planet.id === "earth" ? "selected" : ""}" data-planet="${planet.id}">${planet.name}</button>`).join("");
    selectPlanet("earth");
  }

  function selectPlanet(id) {
    const planet = planets.find((item) => item.id === id);
    if (!planet) return;
    document.getElementById("planet-info").innerHTML = `<span class="planet-kicker">QUYOSH SISTEMASI · ${escapeHTML(planet.distance)}</span><h3>${escapeHTML(planet.name)}</h3><span class="planet-distance">${escapeHTML(planet.distance)} — Quyoshdan o‘rtacha</span><p>${escapeHTML(planet.fact)}</p>`;
    document.querySelectorAll("[data-planet]").forEach((button) => button.classList.toggle("selected", button.dataset.planet === id));
  }

  function renderDistances() {
    const stopsRoot = document.getElementById("distance-stops");
    stopsRoot.innerHTML = distanceStops.map((stop, index) => `<button class="distance-stop ${index === 0 ? "selected" : ""}" data-distance="${index}">${escapeHTML(stop.name)}</button>`).join("");
    updateDistance(0);
  }

  function updateDistance(index) {
    const stop = distanceStops[index];
    if (!stop) return;
    document.getElementById("distance-value").textContent = stop.value;
    document.getElementById("distance-description").textContent = stop.description;
    document.getElementById("distance-range").value = index;
    document.querySelectorAll(".distance-stop").forEach((button) => button.classList.toggle("selected", Number(button.dataset.distance) === index));
  }

  function renderTimeline() {
    document.getElementById("timeline").innerHTML = timeline.map((event) => `<article class="timeline-item"><span class="timeline-dot" aria-hidden="true"></span><time>${event.year}</time><h3>${escapeHTML(event.title)}</h3><p>${escapeHTML(event.text)}</p></article>`).join("");
  }

  function openAdmin(editId = null) {
    adminEditingId = editId;
    renderAdmin();
    if (!adminDialog.open) adminDialog.showModal();
  }

  function renderAdmin() {
    const editing = facts.find((fact) => fact.id === adminEditingId);
    adminDialog.innerHTML = `
      <div class="admin-header"><div><div class="eyebrow section-eyebrow">MAHALLIY MA’LUMOTLAR OMBORI</div><h2 id="admin-title">Faktlar boshqaruvi</h2><p>O‘zgarishlar shu brauzerda saqlanadi. Boshqa qurilmalarga avtomatik ko‘chmaydi.</p></div><button class="dialog-close" data-close-dialog aria-label="Yopish">×</button></div>
      <div class="admin-toolbar"><input id="admin-search" type="search" placeholder="Faktlarni izlash..." aria-label="Faktlarni izlash"><button class="button button-primary" id="new-fact">＋ Yangi fakt</button></div>
      <div class="admin-list" id="admin-list"></div>
      <form class="admin-form" id="admin-form">
        <h3>${editing ? "Faktni tahrirlash" : "Yangi fakt qo‘shish"}</h3>
        <input type="hidden" name="id" value="${escapeHTML(editing?.id || "")}">
        <div class="form-field"><label for="fact-title">Sarlavha *</label><input id="fact-title" name="title" required maxlength="120" value="${escapeHTML(editing?.title || "")}"></div>
        <div class="form-field"><label for="fact-category">Kategoriya *</label><select id="fact-category" name="category" required>${categories.map((category) => `<option value="${category.id}" ${editing?.category === category.id ? "selected" : ""}>${escapeHTML(category.label)}</option>`).join("")}</select></div>
        <div class="form-field full"><label for="fact-summary">Qisqa izoh *</label><textarea id="fact-summary" name="summary" required maxlength="300">${escapeHTML(editing?.summary || "")}</textarea></div>
        <div class="form-field full"><label for="fact-detail">Batafsil ilmiy izoh *</label><textarea id="fact-detail" name="detail" required maxlength="3000">${escapeHTML(editing?.detail || "")}</textarea></div>
        <div class="form-field"><label for="fact-image">Unsplash rasm ID *</label><input id="fact-image" name="image" required pattern="photo-[\\w-]+" value="${escapeHTML(editing?.image || "photo-1462331940025-496dfbfc7564")}"></div>
        <div class="form-field"><label for="fact-number">Muhim raqam</label><input id="fact-number" name="number" maxlength="100" value="${escapeHTML(editing?.number || "")}"></div>
        <div class="form-field full"><label for="fact-source">Ilmiy manba havolasi *</label><input id="fact-source" name="source" type="url" required placeholder="https://..." value="${escapeHTML(editing?.source || "")}"></div>
        <div class="form-field"><label><input type="checkbox" name="featured" ${editing?.featured ? "checked" : ""}> Bosh sahifada ajratib ko‘rsatish</label></div>
        <div class="form-actions"><button class="button button-ghost" type="button" id="cancel-edit">Bekor qilish</button><button class="button button-primary" type="submit">Saqlash</button></div>
      </form>`;
    renderAdminList();
  }

  function renderAdminList(query = "") {
    const list = document.getElementById("admin-list");
    if (!list) return;
    const filtered = facts.filter((fact) => `${fact.title} ${fact.summary}`.toLocaleLowerCase("uz-UZ").includes(query.toLocaleLowerCase("uz-UZ")));
    list.innerHTML = filtered.map((fact) => `<div class="admin-row"><div><h4>${escapeHTML(fact.title)}</h4><span>${escapeHTML(getCategoryLabel(fact.category))}</span></div><div class="admin-row-actions"><button data-edit="${escapeHTML(fact.id)}">Tahrirlash</button><button class="delete-button" data-delete="${escapeHTML(fact.id)}">O‘chirish</button></div></div>`).join("") || "<div class='admin-row'><span>Fakt topilmadi.</span></div>";
  }

  function saveAdminFact(form) {
    const data = new FormData(form);
    const id = String(data.get("id") || "");
    const source = safeSource(String(data.get("source") || ""));
    if (!source || !/^photo-[\w-]+$/.test(String(data.get("image") || ""))) {
      showToast("Rasm ID yoki manba havolasini to‘g‘ri kiriting.");
      return;
    }
    const newFact = {
      id: id || `fact-${Date.now().toString(36)}`,
      title: String(data.get("title") || "").trim(),
      category: String(data.get("category") || ""),
      summary: String(data.get("summary") || "").trim(),
      detail: String(data.get("detail") || "").trim(),
      image: String(data.get("image") || "").trim(),
      number: String(data.get("number") || "").trim(),
      source,
      status: "Tahririyat qo‘shgan fakt",
      featured: data.get("featured") === "on"
    };
    if (!newFact.title || !newFact.summary || !newFact.detail || !categoryById.has(newFact.category)) {
      showToast("Majburiy maydonlarni to‘ldiring.");
      return;
    }
    if (id) facts = facts.map((fact) => fact.id === id ? newFact : fact);
    else facts.unshift(newFact);
    persistFacts();
    refreshFacts();
    adminEditingId = newFact.id;
    renderAdmin();
    showToast(id ? "Fakt yangilandi." : "Yangi fakt qo‘shildi.");
  }

  function setTheme(light) {
    document.documentElement.classList.toggle("light-theme", light);
    document.querySelector('meta[name="theme-color"]').content = light ? "#f1f3fa" : "#080b18";
    document.getElementById("theme-toggle").setAttribute("aria-label", light ? "Qorong‘i mavzuni yoqish" : "Yorug‘ mavzuni yoqish");
    try { localStorage.setItem(STORAGE_THEME, light ? "light" : "dark"); }
    catch (error) { console.error("Mavzu sozlamasini saqlab bo‘lmadi:", error); }
  }

  factsGrid.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      const id = favoriteButton.dataset.favorite;
      favorites = favorites.includes(id) ? favorites.filter((favorite) => favorite !== id) : [...favorites, id];
      persistFavorites();
      renderFacts();
      return;
    }
    const shareButton = event.target.closest("[data-share]");
    if (shareButton) { shareFact(shareButton.dataset.share); return; }
    const openButton = event.target.closest("[data-open-fact]");
    if (openButton) openFact(openButton.dataset.openFact);
  });

  featureGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-open-fact]");
    if (card) openFact(card.dataset.openFact);
  });
  featureGrid.addEventListener("keydown", (event) => {
    const card = event.target.closest("[data-open-fact]");
    if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openFact(card.dataset.openFact); }
  });

  filterRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderFacts();
  });

  document.getElementById("category-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderFilters();
    renderFacts();
    document.getElementById("faktlar").scrollIntoView({ behavior: "smooth" });
  });

  searchInput.addEventListener("input", renderFacts);
  document.getElementById("clear-filters").addEventListener("click", () => {
    activeCategory = "all";
    searchInput.value = "";
    refreshFacts();
  });

  document.getElementById("random-hero").addEventListener("click", chooseRandomFact);
  document.getElementById("random-daily").addEventListener("click", () => {
    if (!facts.length) { showToast("Tasodifiy fakt topilmadi."); return; }
    const options = facts.filter((fact) => fact.id !== document.getElementById("daily-content").dataset.factId);
    const selected = options[Math.floor(Math.random() * options.length)] || facts[0];
    renderDailyFact(selected);
  });
  document.getElementById("daily-content").addEventListener("click", () => {
    const id = document.getElementById("daily-content").dataset.factId;
    if (id) openFact(id);
  });
  document.getElementById("admin-trigger").addEventListener("click", () => openAdmin());
  document.getElementById("theme-toggle").addEventListener("click", () => setTheme(!document.documentElement.classList.contains("light-theme")));
  document.getElementById("mobile-menu-button").addEventListener("click", (event) => {
    const button = event.currentTarget;
    const menu = document.getElementById("main-nav");
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen ? "×" : "☰";
  });
  document.getElementById("main-nav").addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    document.getElementById("main-nav").classList.remove("is-open");
    document.getElementById("mobile-menu-button").setAttribute("aria-expanded", "false");
    document.getElementById("mobile-menu-button").textContent = "☰";
  });
  document.getElementById("planet-picker").addEventListener("click", (event) => {
    const button = event.target.closest("[data-planet]");
    if (button) selectPlanet(button.dataset.planet);
  });
  document.getElementById("solar-map").addEventListener("click", (event) => {
    const button = event.target.closest("[data-planet]");
    if (button) selectPlanet(button.dataset.planet);
  });
  document.getElementById("distance-range").addEventListener("input", (event) => updateDistance(Number(event.target.value)));
  document.getElementById("distance-stops").addEventListener("click", (event) => {
    const button = event.target.closest("[data-distance]");
    if (button) updateDistance(Number(button.dataset.distance));
  });

  [detailDialog, adminDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-close-dialog]")) dialog.close();
    });
  });

  adminDialog.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit]");
    if (editButton) { openAdmin(editButton.dataset.edit); return; }
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) {
      const fact = facts.find((item) => item.id === deleteButton.dataset.delete);
      if (!fact || !window.confirm(`“${fact.title}” faktini o‘chirmoqchimisiz?`)) return;
      facts = facts.filter((item) => item.id !== fact.id);
      favorites = favorites.filter((id) => id !== fact.id);
      persistFacts();
      persistFavorites();
      activeCategory = activeCategory === fact.category ? "all" : activeCategory;
      refreshFacts();
      renderDaily();
      renderAdmin();
      showToast("Fakt o‘chirildi.");
      return;
    }
    if (event.target.closest("#new-fact")) { adminEditingId = null; renderAdmin(); return; }
    if (event.target.closest("#cancel-edit")) { adminEditingId = null; renderAdmin(); }
  });
  adminDialog.addEventListener("input", (event) => {
    if (event.target.id === "admin-search") renderAdminList(event.target.value);
  });
  adminDialog.addEventListener("submit", (event) => {
    if (event.target.id !== "admin-form") return;
    event.preventDefault();
    if (event.target.reportValidity()) saveAdminFact(event.target);
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      searchInput.focus();
      document.getElementById("faktlar").scrollIntoView({ behavior: "smooth" });
    }
  });

  try { setTheme(localStorage.getItem(STORAGE_THEME) === "light"); }
  catch (error) { console.error("Mavzu sozlamasini o‘qib bo‘lmadi:", error); }
  renderDaily();
  refreshFacts();
  renderSolarSystem();
  renderDistances();
  renderTimeline();
  const sharedFactMatch = location.hash.match(/^#fakt-(.+)$/);
  if (sharedFactMatch) openFact(decodeURIComponent(sharedFactMatch[1]));
})();
