# Ilova dizayni: Modullar va o'yinlar spetsifikatsiyasi

## 1) Ilova modullari (umumiy karkas)

### A) Core (Asosiy) modul
- **UserProfile:** ism, yosh, avatar
- **Progress:** ochilgan o'yinlar, level, ball
- **RewardSystem:** medal, yulduz, sertifikat
- **Settings:** til (UZ), ovoz, bildirishnoma

### B) GameHub (O'yinlar markazi) modul
- O'yinlar ro'yxati (kartochkalar)
- Qiyinchilik filtri: Easy / Medium / Hard
- O'yinlarni ochish sharti: ball yoki level

### C) Games (O'yinlar paketi) modul
Har bir o'yin bir xil shablon bilan ishlaydi:
- **Intro:** qisqa qoida + maqsad
- **Level:** o'yin jarayoni
- **Result:** ball + xatolar izohi + retry/next
- **Lesson:** 1–2 gap bilim

### D) Content (O'quv kontent) modul
- “Bugungi bilim” kartasi (mini faktlar)
- “Ixtirochi kutubxonasi” (rasm, sxema, video)

### E) Admin/Editor (ixtiyoriy) modul
- O'yin savollarini (JSON) yangilash
- Yangi level qo'shish (kodsiz)

---

## 2) O'yinlar uchun yagona “Game Template”

**Boshlash:**
1. O'yin nomi + maqsad
2. Qoidalar (3–5 ta punkt)
3. “Boshlash” tugmasi

**Jarayon:**
- Timer (ixtiyoriy): 60–120 soniya
- 3 ta urinish (Try)
- “Hint” (ko'mak): 1 marta bepul, keyin -ball

**Yakun:**
- Ball, yulduz, medal
- Xato bo'lsa: “Nima uchun?” izohi
- “Qayta o'ynash / Keyingi level”

---

## 3) Ball, Level, Medal tizimi (standart)

### Ball (Score)
- ✅ To'g'ri bajarish: +10
- ⏱ Tez tugatsa (bonus): +5
- 💡 Hint ishlatsa: -3
- ❌ Xato: -2
- 🔁 Retry: -2

### Yulduz (Stars)
- ⭐⭐⭐ = 90–100% natija
- ⭐⭐ = 70–89%
- ⭐ = 50–69%
- <50% = level o'tmaydi (qayta)

### Medal (Achievements)
- 🥉 “Boshlovchi” — 3 ta level o'tsa
- 🥈 “Topqir” — 10 ta level
- 🥇 “Usta ixtirochi” — 30 ta level
- 🏆 “Champion” — hamma o'yinlardan 3⭐

---

# 1-o'yin: “Topqir ixtirochi”

## 1) O'yin g'oyasi va maqsadi
- **Nom:** Topqir ixtirochi
- **Janr:** Muammo → Tahlil → Yechim tanlash (scenario-based quiz)
- **Maqsad:**
  - muammoni to'g'ri tushunish
  - sabab–oqibatni ajratish
  - eng maqbul yechimni tanlash
  - texnik/ekologik fikrlashni rivojlantirish
- **Yosh toifasi:** 7–14 (3 daraja bilan)

## 2) O'yin mexanikasi (asosiy jarayon)
O'yin scenariy kartalari asosida ishlaydi:
1. **Muammo kartasi:** muammo tavsifi (1–2 gap), rasm/piktogramma, “Vazifa: eng to'g'ri yechimni tanlang”.
2. **Variantlar (3–4 ta):** 1 ta optimal, 1 ta qisman to'g'ri, 1 ta noto'g'ri, ixtiyoriy 1 ta xavfli/samarasiz.
3. **Tanlash + natija:** darhol ✅/❌, 1–3 gap izoh, “Keyingi savol”.

## 3) Level tuzilishi
- Har bir level = 10 ta muammo (10 karta)
- O'tish sharti: kamida 7/10 to'g'ri javob
- 7 dan kam bo'lsa → “Qayta urinib ko'ring” + xatolar tahlili
- Tematik bloklar:
  1. Suv va gidrotexnika
  2. Energiya
  3. Mexanika
  4. Ekologiya
  5. Uy muammolari
  6. Transport

## 4) Qiyinchilik darajalari (Difficulty)
- 🟢 **Easy:** 3 variant, sodda izoh, timer yo'q
- 🟡 **Medium:** 4 variant, 60–90 soniya timer, qisman to'g'ri variantlar ko'proq
- 🔴 **Hard:** 4 variant, 45–60 soniya timer, 1–2 savolda “2 bosqichli” tanlov

## 5) Ball (Score) tizimi
- ✅ to'g'ri: +10
- ⏱ tez javob: +1…+5
- 💡 hint: -3
- ❌ noto'g'ri: -2
- 🔁 retry: -2
- Level yakuni:
  - 90–100% → ⭐⭐⭐ + “Top ixtirochi” badge
  - 70–89% → ⭐⭐
  - 50–69% → ⭐
  - <50% → level o'tmaydi

## 6) Hint qoidalari
Har levelda 2 ta bepul hint:
1. “Maslahat” — muammoning kalit so'zi
2. “Variant qisqartirish” — 1 ta noto'g'ri variant olib tashlanadi

## 7) “O'rganish” qismi (Micro-lesson)
Har savoldan keyin 1–2 gaplik o'rgatuvchi izoh chiqadi.

## 8) Penalti va adolat (fair-play)
- Bir savolda faqat 1 marta tanlash
- Noto'g'ri bo'lsa ham izoh beriladi
- 3 ta savol ketma-ket xato bo'lsa → “Kichik maslahat oynasi” avtomatik chiqadi

## 9) O'yin ichidagi motivatsiya (Gamification)
- Har 5 ta to'g'ri javob ketma-ket → “🔥 Seriya” bonus +5 ball
- Har 3 level o' tganda → medal
- Har bir tematik blok tugaganda → mini-sertifikat (PDF yoki ichki badge)

## 10) Savol kartasi namunasi
- **Tema:** Suv tejash
- **Muammo:** “Kran ba’zan tomchilab turadi. Uyda suv sarfi oshib ketmoqda. Nima qilasiz?”
- **Variantlar:**
  - A) Kran tagiga idish qo'yib yuraveraman
  - B) Kranni mahkam yopaman, lekin ta’mir qilmayman
  - C) Rezina prokladkani almashtirib, kranni ta’mirlash kerak ✅
  - D) Kranni butunlay sindirib tashlab yangisini olaman
- **Izoh:** “Tomchilash — prokladka yoki mexanizm yeyilgani belgisi. Ta’mirlash suvni tejaydi va muammoni bartaraf etadi.”

---

# 2-o'yin: “Mexanizm yig'”

## Maqsad
Detallarni to'g'ri tanlash, joylashtirish va mexanizmni ishlatib ko'rish orqali mexanik fikrlashni rivojlantirish.

## Asosiy boshqaruv
- Drag & Drop: detalni ushlab joyiga qo'yish
- Rotate: 0°, 90°, 180°, 270° aylantirish
- Zoom: kattalashtirish/kichraytirish
- Test: “Ishga tushirish” tugmasi

## Urinishlar
- Har levelda 3 ta urinish
- Har urinishda xatolar ko'rsatiladi

## Ball tizimi (tavsiya)
- To'g'ri detal joylash: +5
- To'g'ri aylantirish: +3
- Mexanizm sinovdan o'tsa: +20
- Noto'g'ri qo'yish: -2
- Hint: -3
- Qayta urinish: -2
- Tez yakunlash bonusi: +1…+5

## Hint (ko'mak)
- 1-hint: “Qaysi detal kerakligini” ko'rsatadi
- 2-hint: “Joylash nuqtasi”ni yoritib beradi
- 3-hint (faqat qiyin level): 1 detalni avtomatik joylashtiradi (ko'proq penalti bilan)

## 10 ta tur (rejim)
1. **Starter Build (Boshlang'ich yig'ish):** 4–6 detal, siluet ustiga qo'yish, timer yo'q.
2. **Gear Train:** tishli g'ildirak yo'nalishi va nisbatini tushunish.
3. **Belt & Pulley:** kamar tarangligi va shkiv diametri ta'siri, 90 soniya cheklov.
4. **Lever & Linkage:** aylanishni tebranishga o'zgartirish.
5. **Cam Mechanism:** cam profili va follower ishlashi.
6. **Crank–Slider:** aylanishni chiziqli harakatga aylantirish.
7. **Spring & Damping:** tebranish va amortizatsiya.
8. **Fasteners & Assembly:** bolt/gayka/shayba to'g'ri qo'llash.
9. **Timing Challenge:** 60 soniyada tasodifiy mexanizm yig'ish.
10. **Diagnosis & Repair:** noto'g'ri detallarni topib tuzatish.

---

# 3-o'yin: “Elektr zanjirini tuz”

## O'yin maqsadi
- Elektr zanjiri qanday ishlashini tushuntirish
- ketma-ket / parallel ulashni farqlash
- xavfsizlikni o'rganish
- oddiy elementlar bilan real hayot ssenariylarini yechish

## Asosiy boshqaruv
- Drag & Drop: batareya, sim, lampochka, kalit, rezistor, sug'urta...
- Connect: kontakt nuqtalariga ulash (snap)
- Rotate: element yo'nalishini o'zgartirish
- Test: “Tok berish” tugmasi
- Reset: qayta boshlash

## Elementlar (bosqichma-bosqich)
1. Batareya
2. Sim
3. Lampochka
4. Kalit
5. Sug'urta
6. Rezistor
7. LED + polaritet
8. Motor
9. Buzzer
10. Sensor

## Noto'g'ri holatlar (o'rgatuvchi animatsiya bilan)
- Ochiq zanjir → tok o'tmaydi
- Qisqa tutashuv → “uchqun” + ogohlantirish
- Teskari polaritet (LED) → ishlamaydi
- Ortiqcha tok → sug'urta “uziladi”

## Ball tizimi (tavsiya)
- ✅ Zanjir to'g'ri ishlasa: +20
- To'g'ri element ulash (har biri): +3
- Timer bonus: +1…+5
- 💡 Hint: -3
- ❌ Xato ulash: -2
- 🔁 Reset/retry: -2
- Qisqa tutashuv: -5

## Hint qoidalari
Har level: 2 ta bepul hint.
1. “Qayerdan qayerga ulash kerak” ko'rsatadi
2. 1 ta noto'g'ri ulanishni avtomatik uzib beradi
3. (qiyinda) to'g'ri elementni highlight qiladi

## 10 ta tur (rejim)
1. **Basic Loop:** oddiy yopiq zanjir.
2. **Switch Control:** kalit bilan boshqarish.
3. **Series Circuit:** ketma-ket ulash.
4. **Parallel Circuit:** parallel ulash.
5. **Short Circuit & Safety:** qisqa tutashuv va sug'urta.
6. **Fuse & Protection:** sug'urta bilan himoya.
7. **LED Polarity:** LED polariteti.
8. **Resistor & Brightness:** rezistor va yorqinlik.
9. **Logic Control:** ikki kalit bilan boshqarish.
10. **Real Scenario Build:** hayotiy ssenariy.

---

# 4-o'yin: “Ekologik ixtiro”

## O'yin g'oyasi va maqsad
Berilgan ekologik muammoni tahlil qilib, eng samarali va xavfsiz yechimni tanlash yoki yig'ish.

## Ekologik indikatorlar
- 🌿 CO₂ kamayishi
- 💧 Suv tejalishi
- ♻️ Chiqindi kamayishi
- 💰 Xarajat (past bo'lsa yaxshi)
- (ixtiyoriy) ⚠️ Xavfsizlik

**Leveldan o'tish sharti:** indikatorlardan kamida 3 tasi “yashil zona”.

## Ball tizimi (tavsiya)
- ✅ Muammo to'g'ri yechildi: +20
- Har indikator yashil bo'lsa: +5
- “A'lo yechim”: +10
- Qisman yechim: +5
- ❌ Noto'g'ri/zararli yechim: -5
- 💡 Hint: -3
- ⏱ vaqt bonusi: +1…+5

## Hint qoidalari
Har levelda 2 ta hint:
1. “Muammo manbai”ni ko'rsatadi
2. “Eng yaxshi yo'nalish”ni tavsiya qiladi

## 10 ta tur (rejim)
1. **City Fix:** shahar muammolari.
2. **Factory Filter:** zavod chiqindisi va filtr.
3. **Clean Water Lab:** suv tozalash bosqichlari.
4. **Recycle Sort:** chiqindini saralash.
5. **Green Energy Builder:** yashil energiya tanlash.
6. **Smart Farm Eco:** ekofarma optimizatsiya.
7. **Eco Transport Plan:** transportni ekologik rejalash.
8. **Green Home Upgrade:** uy-joyni ekologik yangilash.
9. **River Protector:** daryo va toshqin xavfi.
10. **Eco Puzzle Challenge:** aralash murakkab topshiriq.

## O'yin yakuni (har levelda)
- Tanlangan ixtiro(lar)
- Indikatorlar: CO₂, suv, chiqindi, xarajat, xavfsizlik
- “Nega shu yechim yaxshi/yomon?” izoh
- “Keyingi level” / “Qayta”

---

# 5-o'yin: “Ko'prik qur”

## O'yin maqsadi
- Ko'prik qurish va sinovdan o'tkazish (piyoda / mashina / yuk)
- Material tanlash, struktura mustahkamlash, byudjetni tejash

## Asosiy boshqaruv
- Drag & Drop: material bo'laklarini qo'yish
- Snap: tayanch nuqtalarga ulanadi
- Rotate: burchak va yo'nalishni o'zgartirish
- Build Mode / Test Mode
- Undo/Redo

## Materiallar
- 🪵 Yog'och nurlar
- 🔩 Temir profil
- 🧵 Arqon/tros
- 🧱 Beton tayanch
- 🔺 Truss elementlari
- 🧷 Bolt/bo'g'in

## Fizika indikatorlari
- Stress, deformasiya, stabilitet, byudjet

**Leveldan o'tish:** sinovda qulamasligi + stress qizilga kirmasligi.

## Ball tizimi (tavsiya)
- ✅ Sinovdan o'tsa: +25
- Byudjetni tejasa: +5…+15
- Kam material bilan o'tsa: +10
- ❌ Qulasa: -5
- Qayta urinish: -2
- 💡 Hint: -3
- Tez tugatsa: +1…+5

## Hint qoidalari
Har levelda 2 ta hint:
1. “Zaif joy”ni ko'rsatadi
2. “Tavsiya” (masalan: truss qo'shing, tros bilan torting)

## 10 ta tur (rejim)
1. **Piyoda ko'prigi:** yog'och + oddiy bolt.
2. **Velosiped ko'prigi:** truss tavsiya.
3. **Yengil mashina ko'prigi:** yog'och + temir aralash.
4. **Yuk mashinasi:** temir + beton tayanch.
5. **Shamol ta'siri:** tros bilan mustahkamlash.
6. **Suv sathi ko'tarilishi:** osma yoki yuqori truss.
7. **Cheklangan material:** byudjet limiti.
8. **Ko'prikni ta'mirlash:** 5 ta bo'lak qo'shish.
9. **Vaqtga qarshi:** 90 soniya.
10. **Aralash murakkab:** yuk + shamol + byudjet.

## “Test” algoritmi
1. Ulanishlar to'liqmi?
2. Stress/deformasiya limitdan oshdimi?
3. Yuk o'tdimi?
4. Natija: yutdi/yutqazdi + qaysi joy sinadi.

---

# 6-o'yin: “G'oya top”

## O'yin maqsadi
Muammo beriladi → bola g'oya taklif qiladi; g'oya real, xavfsiz, foydali va tejamkor bo'lishi kerak.

## O'yin oqimi
1. Muammo kartasi
2. G'oya yaratish (tanlash / birlashtirish / yozish / chizish)
3. Baholash (ball + ko'rsatkich + izoh)

## Baholash mezonlari (0–5 ball)
1. Foydalilik
2. Amaliyot
3. Tejamkorlik
4. Ekologiya
5. Xavfsizlik

**Leveldan o'tish:** jami 18/25 yoki undan yuqori.

## Ball tizimi (tavsiya)
- Har mezon bo'yicha 0–5 → jami 25 ball
- “A'lo g'oya” (22–25): +10 bonus
- “Yaxshi g'oya” (18–21): +5 bonus
- “Qayta o'yla” (<18): level qayta

## Hint qoidalari
Har levelda 2 ta hint:
1. “Muammo sababi”
2. “Yo'nalish tavsiyasi” (sensor, mexanizm, filtr, avtomatlashtirish...)

## 10 ta tur (rejim)
1. **Variantdan tanla:** 4 ta tayyor variant.
2. **G'oya birlashtir:** muammo + texnologiya kartalari.
3. **Muammo–Sabab–Yechim:** 3-step builder.
4. **Xavfsiz dizayn:** xavf + himoya savollari.
5. **Byudjet cheklovi:** 100 eco-coin.
6. **Eko-g'oya:** ekologik zarar bermaslik.
7. **Takomillashtir:** mavjud g'oyani yaxshilash.
8. **User Persona:** ehtiyojga mos dizayn.
9. **Tezkor g'oya:** 60 soniya.
10. **Grand Challenge:** kompleks muammo.

## O'yin yakuni (Result Screen)
- G'oya nomi
- 5 mezon bo'yicha ball
- “Yaxshilash uchun 1 tavsiya”

---

# 7-o'yin: “Mantiqiy sxema”

## O'yin maqsadi
Berilgan vaziyat bo'yicha to'g'ri algoritm/sxema tuzish; natijada obyektlar kerakli holatda ishlashi.

## Asosiy boshqaruv
- Drag & Drop: bloklarni tashlash
- Connect: o'qlar bilan ulash
- Run: sxemani sinash
- Step-by-step: bosqichma-bosqich ishlash
- Reset/Undo

## Bloklar (bosqichma-bosqich)
1. Start / End
2. Action
3. If
4. Loop
5. Timer/Delay
6. Counter
7. AND/OR/NOT
8. Input
9. Output
10. Stop / Safety

## Leveldan o'tish sharti
- “Run” bosilganda sxema 3 ta test holatda ham to'g'ri natija bersin
- Xato bo'lsa highlight

## Ball tizimi (tavsiya)
- ✅ 1 ta test holat to'g'ri: +5
- ✅ 3/3 test to'g'ri: +20
- Minimal blok bilan yechsa: +10
- Hint: -3
- Xato ulash: -2
- Qayta urinish: -2
- Debug mode ishlatib to'g'rilasa: +2

## Hint qoidalari
Har levelda 2 ta hint:
1. Qaysi shart yetishmayapti
2. To'g'ri yo'nalish tavsiyasi

## 10 ta tur (rejim)
1. **Ketma-ketlik:** Start → 3 Action → End.
2. **Agar–unda:** bitta shartli bo'linish.
3. **Ikki shart:** nested if.
4. **AND / OR:** mantiqiy bloklar.
5. **NOT:** inkor operatori.
6. **Loop Basics:** takrorlash.
7. **Timer & Delay:** vaqt bilan boshqarish.
8. **Counter Challenge:** sanash.
9. **Safety Logic:** xavf holatida STOP.
10. **Real Scenario Flow:** murakkab hayotiy sxema.

## Debug funksiyasi
- Step bosilganda bloklar ketma-ket yoritiladi
- Noto'g'ri yo'l ko'rsatiladi, so'ng “Run” qayta

---

# 8-o'yin: “Robot yasash”

## O'yin maqsadi
Berilgan vazifaga mos robotni yig'ish + sozlash + sinash; “Test” rejimida vazifa bajarilsa level o'tiladi.

## Asosiy bosqichlar
1. Vazifa kartasi
2. Yig'ish (Build Mode)
3. Ulash (Wiring/Connect)
4. Sozlash (Config)
5. Sinov (Test Mode)
6. Natija: ball + izoh + tavsiya

## Robot qismlari
- Shassi, g'ildirak/oyoqlar, motor, batareya, kontroller
- Tugma, sensorlar (masofa, chiziq, yorug'lik, harorat)
- Buzzer/LED, manipulyator qo'l, yuk

## Indikatorlar
- Energiya sarfi, balans/stabilitet, tezlik, aniqlik, xavfsizlik

## Urinishlar va hint
- Har level: 3 urinish
- Har level: 2 hint
  1. “Qaysi qism yetishmayapti?”
  2. “Qanday sozlash kerak?”

## Ball tizimi (tavsiya)
- ✅ Vazifa bajarildi: +25
- Kam detal bilan bajarsa: +10
- Energiyani tejasa: +5
- To'qnashuvsiz yakunlasa: +5
- 💡 Hint: -3
- ❌ Noto'g'ri ulash: -2
- 🔁 Retry: -2

## 10 ta tur (rejim)
1. **Basic Assemble:** 3 metr oldinga yurish.
2. **Connect & Power:** batareya–kontroller–motor ulanishi.
3. **Line Follower:** 10 soniya chiziqdan chiqmasin.
4. **Obstacle Avoider:** 3 ta to'siqdan urilmasdan o'tish.
5. **Remote Control:** checkpoint ga borish.
6. **Balance Robot:** burilganda ag'darilmasin.
7. **Picker Robot:** 2 ta predmetni ko'chirish.
8. **Safety Mode:** STOP + signal.
9. **Energy Saver:** batareya ≥ 10% qolishi.
10. **Mission Challenge:** chiziq + to'siq + yuk.

---

# 9-o'yin: “Suv tizimini loyihala”

## O'yin maqsadi
Berilgan sharoitda suvni kerakli miqdorda, yetarli bosimda, minimal yo'qotish bilan, xavfsiz va tejamkor yetkazish.

## O'yin oqimi
1. Vazifa kartasi
2. Loyiha (Build Mode)
3. Sozlash (Config)
4. Simulyatsiya (Run)
5. Natija: ball, xatolar, tavsiya

## Asosiy elementlar
- Manba, rezervuar, filtr, quvur
- Burilish/tee, kran/klapan
- Nasos, qaytish klapani, drossel
- O'lchov asboblari

## Indikatorlar
- Q (sarf)
- P/H (bosim)
- Yo'qotish
- Oqish
- Energiya
- Suv sifati

**Leveldan o'tish:** Q yetarli + bosim yashil + oqish yo'q + byudjet cheklovi.

## Ball tizimi (tavsiya)
- ✅ Vazifa to'liq bajarildi: +25
- Yo'qotish past: +10
- Energiya tejaldi: +5
- Byudjetdan oshmadi: +5
- ❌ Bosim yetmasa: -5
- ❌ Oqish/portlash: -10
- 💡 Hint: -3
- 🔁 Qayta urinish: -2

## Hint qoidalari
Har levelda 2 ta hint:
1. “Nega bosim yetmayapti?”
2. “Optimal yechim”

## 10 ta tur (rejim)
1. **Oddiy yo'l:** bitta nuqtaga suv.
2. **Uyga suv kiritish:** 2 ta iste'molchi.
3. **Bosim muammosi:** diametr/nasos/rezervuar.
4. **Nasos tanlash:** quvvat muvozanati.
5. **Suv tozalash:** filtr bilan.
6. **Suvni tejash:** limit ichida.
7. **Sug'orish tarmog'i:** 3–5 nuqta.
8. **Oqish va avariya:** oqishni topish.
9. **Qaytish oqimi:** check-valve shart.
10. **Kompleks shahar tizimi:** ko'p talablar.

## Simulyatsiya/tekshiruv
1. Zanjir uzilmaganmi?
2. Diametr/burilish yo'qotishlarni oshiryaptimi?
3. Nasos/rezervuar bosimni yetkazadimi?
4. Filtr bo'lsa sifat oshdimi?
5. Xavfsizlik: oqish/backflow/ortiqcha bosim bormi?

---

# 10-o'yin: “Bilim viktorinasi”

## O'yin maqsadi
Qisqa savollar orqali bilimni tekshirish, mikro-izoh bilan o'rgatish, daraja oshgani sayin savollar murakkablashadi.

## O'yin oqimi
1. Kategoriya tanlash (yoki Random)
2. 10 ta savol = 1 level
3. Har savoldan keyin: ✅/❌ + izoh
4. Yakunda: natija, xatolar ro'yxati, tavsiya

## Savol formatlari
- A/B/C/D (4 variant)
- ✅ To'g'ri/Noto'g'ri
- 🧩 Moslashtirish
- 🔢 Tartiblash
- 🖼️ Rasmga qarab savol

## O'tish sharti
- 10 savoldan kamida 7 tasi to'g'ri → level o'tiladi
- 7 dan kam → “Qayta urinish” + o'rganish rejimi taklif

## Ball tizimi (tavsiya)
- ✅ To'g'ri javob: +10
- ⏱ Tez javob bonusi: +1…+5
- ❌ Noto'g'ri: 0 (yoki -2)
- 🔥 3 ta ketma-ket to'g'ri: +5 combo
- 💡 Hint ishlatsa: -3

## Hint turlari
- 50/50
- “Kalit so'z”
- “Izohli yordam”

## 10 ta tur (rejim)
1. **Classic Quiz:** 10 savol, 4 variant.
2. **Time Attack:** 10–15 soniya.
3. **Accuracy Mode:** 3 ta hayot.
4. **Streak Challenge:** combo bonus.
5. **Match & Pair:** juftlash.
6. **Sequence Order:** tartiblash.
7. **Visual Quiz:** rasm/sxema savollari.
8. **Logic Quiz:** mantiqiy savollar.
9. **Real-life Scenario:** 2 bosqichli savol.
10. **Final Boss:** 20 savol + timer.

## Kategoriyalar (tavsiya)
- 💧 Suv tizimlari va tejash
- ⚡ Elektr va xavfsizlik
- ⚙️ Mexanika va uzatmalar
- 🌱 Ekologiya va chiqindi
- 🤖 Robototexnika
- ☀️ Yashil energiya

## Natija oynasi (Result Screen)
- Ball va yulduz (⭐)
- Xato savollar ro'yxati
- Har xato uchun “to'g'ri javob + 1 gap izoh”
- “Qayta o'rganish” tugmasi (faqat xatolar bo'yicha)
