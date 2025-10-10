# To'yimBor — To'liq umumiylashtirilgan dizayn va texnik brief

## 1. Loyihaning umumiy maqsadi va ruhiyati
- **Maqsad:** Foydalanuvchilarga hududdagi to'yxonalarni qidirish, bo'sh sanalarni ko'rish, 2 slot/kun (ertalab/kechki) bo'yicha band qilish va onlayn to'lov orqali tasdiqlash imkonini berish.
- **Ruhiyat:** Zamonaviy, hashamatli, milliy naqsh elementlari bilan boyitilgan tajriba. Brend ranglari — yashil va oltin kombinatsiyasi.

## 2. Brend tokenlari (Colors & Typography)
- **Rang palitrasi:**
  - Dark green (primary): `#123E2D`
  - Oltin (accent): `#D4AF37`
  - Bej (fon): `#F8F3E7`
  - Oq: `#FFFFFF`
  - To'q kulrang (matn): `#333333`
- **Shriftlar:**
  - Sarlavhalar: Montserrat SemiBold
  - Body matn: Poppins Regular / Medium
- **Spacing & radius:** Spacing scale 4 / 8 / 16 / 24 / 32; border-radius 12–16px; soyalar: `0 4px 12px rgba(0,0,0,0.06)`.

## 3. Sahifalar va umumiy struktura
1. Homepage (Hero + Qidiruv + Popular cards + Blog preview)
2. Catalog / To'yxonalar (filter + card grid)
3. To'yxona profil (galereya, tafsilot, inline calendar)
4. Modal / Booking flow (card → venue modal → calendar popup → payment modal → confirmation)
5. Profil (foydalanuvchi bookinglari)
6. Admin / Venue owner panel
7. Blog, Auth, Footer

## 4. Header, qidiruv paneli va filtrlar
**Header (desktop):**
- Chapda: Logo (SVG)
- Markazda: Navigatsiya (`Bosh sahifa | To'yxonalar | Blog | Aloqa`)
- O'ngda: Kirish / Ro'yxatdan o'tish / Profil tugmalari

**Qidiruv paneli (hero ostida yoki ichida):**
1. Joy nomi yoki to'yxona nomi — matn (autosuggest). Placeholder: `🔍 Joy nomi, to'yxona yoki xizmat qidiring`
2. Sana — datepicker. Placeholder: `📅 Sanani tanlang`
3. Filter tugmasi — narx, sig'im, joylashuv, qo'shimcha xizmatlar uchun modalni chaqiradi
4. Qidirish tugmasi — primary (`#123E2D` fon, oq matn)

**Behavior:** Sana tanlansa, backend shu sanadagi bo'sh to'yxonalarni qaytaradi. Sana kiritilmasa, barcha to'yxonalar (filtrlar bo'yicha) ko'rsatiladi.

## 5. Filter modalining detali
- **Elementlar:** Narx (min-max slider), Sig'im (slider yoki dropdown), Joylashuv (shahar/tuman), Sana (ikkinchi input), Qulayliklar (checkbox: parking, dekor, AC, wifi).
- **UX:** "Filtrni qo'llash" tugmasi; natijalar server-side yoki client-side tarzda yangilanadi.

## 6. To'yxona kartasi (Card) dizayni
- **Grid:** Desktopda 3–4 kolonka (responsive).
- **Kontent:**
  - Media carousel: 3–4 rasm yoki video (16:9), video autoplay off, poster fallback, thumbnail navigatsiya.
  - Nomi (Montserrat SemiBold)
  - Qisqacha izoh: sig'im, joylashuv, asosiy qulayliklar (parking, dekor, AC).
  - Narx (masalan: `6 500 000 so'mdan`)
  - Reyting: yulduzchalar + raqam (masalan, 4.8)
  - CTA: "Band qilish" (yashil, primary)
  - Save/favorite ikonkasi (bookmark)
- **Vizual effektlar:** Milliy naqshli oltin border; hoverda lifti va soyasi, CTA yorqinlashadi.

## 7. Card → Modal (To'yxona tafsilotlari)
- **Trigger:** Kartaga yoki "Band qilish" tugmasiga bosilganda.
- **Modal dizayni:** Markazda, maksimal kenglik 950–1100px, milliy naqshli oltin border.
- **Desktop layout:**
  - Chap (60%): Katta image/video carousel
  - O'ng (40%): Nomi, joylashuv (map link), reyting, sig'im, qulayliklar (ikonlar), narx oralig'i, batafsil tavsif (200–400 belgi), CTA, kontaktlar/ijtimoiy linklar
- **Mobile:** Fullscreen modal, rasm → tafsilotlar → CTA tartibida.

## 8. Calendar popup (band qilish)
- **Title:** "Band qilish uchun sanani tanlang"
- **Grid:** 7 × 6 oy ko'rinishi
- **Cell holatlari:**
  - To'liq band: qizil (`#E53935`) — disabled
  - To'liq bo'sh: yashil (`#2E7D32` yoki `#123E2D`) — selectable
  - Yarmi bo'sh: slot indikatorlari (yashil/qizil chiplar)
  - O'tgan kunlar: kulrang, disabled
- **Slot tanlash UI:** Calendar ostida yoki yon panelda ertalab (10:00–15:00) va kechki (17:00–22:00) slotlari. Har bir slot uchun `available: boolean`.
- **Hold timer:** Slot tanlanganda backend hold yaratadi (10 daqiqa). UI: countdown (`Rezervni yakunlash uchun: 09:45`).
- **Booking tugmasi:** Slot tanlanganda faollashadi.
- **Konfirmatsiya:** Muvaffaqiyatli holatda booking summary + booking id + to'lov tugmasi.

## 9. To'lov modal va integratsiya
- **To'lov bosqichi:**
  - Ko'rsatadi: to'yxona nomi, sana va slot, narx.
  - To'lov usullari: Click, Payme, Uzum, bank kartalari/Stripe (kelajak).
  - To'lov amalga oshirilgach, gateway redirect yoki in-place widget orqali yakunlanadi.
- **API flow:**
  1. `POST /api/payments/initiate` → `payment_url` yoki `payment_session`
  2. Foydalanuvchi to'lovni tugatadi → gateway webhook `POST /api/payments/webhook`
  3. To'lov muvaffaqiyatli → `POST /api/bookings/confirm (hold_id)` → booking tasdiqlanadi
- **UI:** Success modal + booking id + "Profilga o'tish" tugmasi. Xato holatlarda retry yoki qo'llab-quvvatlash.

## 10. Profil (foydalanuvchi bookinglari)
- **Bo'lim:** "Mening band qilgan to'yxonalarim"
- **Booking kartasi:** Rasm, to'yxona nomi, sana + slot, status (✅ Tasdiqlangan / ⏳ Kutilyapti / ❌ Bekor qilingan), booking id, to'lov miqdori, "Tafsilot" va "Bekor qilish" tugmalari.
- **Qo'shimcha:** Tarix va receipt (PDF download) imkoniyati.

## 11. Backend / API va data modeli
- **Endpointlar:**
  - `GET /api/venues/search?q=&location=&date=YYYY-MM-DD&min_price=&max_price=&capacity=`
  - `GET /api/venues/{id}`
  - `GET /api/venues/{id}/availability?month=YYYY-MM`
  - `POST /api/bookings/hold` → `{ hold_id, expires_at }`
  - `POST /api/payments/initiate` → `{ payment_url, session_id }`
  - `POST /api/bookings/confirm`
  - `POST /api/payments/webhook`
- **Sample venue JSON:**
```json
{
  "id": 123,
  "name": "Afsonaviy To'yxona",
  "location": "Qarshi, Mustaqillik ko'chasi",
  "images": ["img1.jpg", "img2.jpg", "img3.jpg"],
  "videos": ["promo.mp4"],
  "capacity": 500,
  "price_min": 6500000,
  "price_max": 12000000,
  "rating": 4.8,
  "amenities": ["parking", "decor", "ac", "wifi"],
  "availability": {
    "2025-08-18": [
      { "slot": "morning", "time": "10:00-15:00", "available": true },
      { "slot": "evening", "time": "17:00-22:00", "available": false }
    ]
  }
}
```
- **Sample booking hold / confirm:**
```json
POST /api/bookings/hold
{
  "venue_id": 123,
  "date": "2025-08-18",
  "slot": "evening",
  "user_id": 456
}
>> Response:
{
  "hold_id": "HLD_7890",
  "expires_at": "2025-07-01T12:34:56Z"
}

POST /api/bookings/confirm
{
  "hold_id": "HLD_7890",
  "payment_id": "PAY_4567",
  "payment_status": "success"
}
>> Response:
{
  "booking_id": "BK_1001",
  "status": "confirmed"
}
```

## 12. Booking biznes qoidalari va concurrency
- Kuniga 2 slot (morning/evening), har slot mustaqil.
- Hold mexanizmi: hold yaratganda slot 10 daqiqa muddatga ajratiladi; UI countdown ko'rsatadi.
- Booking tasdiqlash: DB darajasida single transaction, double-book'ni oldini olish.
- Admin override: Admin/venue owner availabilityni qo'lda o'zgartira oladi.

## 13. UI komponentlar ro'yxati (Figma/Dev)
- Buttons: Primary / Secondary / Disabled / Icon
- Inputs: Text, Datepicker, Number, Slider
- Card: Venue card (media carousel + meta + CTA)
- Modallar: Venue modal, Calendar modal, Payment modal, Confirmation dialog
- Calendar cell variantlari: disabled, selected, available, partial-available, today
- Chips / Tags: Amenities
- Icons: yulduz, joylashuv, telefon, kalendar, favorite, filter
- Tokens: color, typography, spacing, elevation

## 14. Figma handoff — structure & naming
- File: `ToyimBor / UI Kit`
- Pages: `00-Design System`, `01-Homepage`, `02-Catalog`, `03-Venue-Modal`, `04-Calendar`, `05-Booking-Flow`, `06-Mobile`
- Component naming: `Button/Primary/Default`, `Card/Venue/Default`, `Modal/Venue/Default`, `Calendar/Cell/Available`
- Exportlar: SVG ikonlar, JPG/PNG media (1x & 2x), tokens JSON.

## 15. Responsive va Accessibility talablar
- Breakpointlar: Desktop 1440px, Tablet 768px, Mobile 375px.
- Touch targetlar ≥ 44–48px.
- Klaviatura va ARIA: modal dialoglar `role="dialog"`, `aria-modal="true"`, focus trap; calendar cell'lar keyboard-selectable; ESC bilan yopish.
- Kontrast tekshiruvi: oltin rang yorqin fonlarda test qilinadi.
- Lokalizatsiya: `uz-Latin` formatdagi sanalar va matnlar.

## 16. UX flow'lar (asosiy ssenariy)
1. Foydalanuvchi homepage → joy yoki to'yxona nomini yozadi + sana tanlaydi → qidirish.
2. Natijalar: shu sana uchun `available: true` bo'lgan to'yxonalar qaytariladi.
3. Kartaga bosadi → venue modal ochiladi → tafsilotlarni ko'rib "Band qilish"ni tanlaydi.
4. Calendar modal → sana + slot tanlanadi → "Band qilish" → hold yaratiladi (10 daqiqa countdown).
5. Payment modal → to'lov → webhook orqali booking tasdiqlanadi → profilga qo'shiladi + confirmation.
6. Venue owner admin panelida bookinglar aks etadi.

## 17. Notifications va qo'shimcha imkoniyatlar
- Email/SMS/Telegram notificationalari: booking, confirmation, cancellation uchun.
- Receipt PDF download.
- Admin analytics: search → view → hold → confirm funnel metrikalari.

## 18. Assetlar ro'yxati
- Logo (SVG color & mono)
- Milliy naqsh SVG (tileable pattern)
- Color va typography tokens (JSON)
- Har bir to'yxona uchun 3–4 rasm + 1 video
- Icon set (SVG)
- Uzbek copy strings (placeholderlar, xato va success matnlari)

## 19. Deliverables
- PDF Design Brief (tayyor) ✅
- Figma UI Kit + sahifalar (Homepage, Catalog, Venue Modal, Calendar, Booking flow)
- Interactive Figma prototype (card → modal → calendar → payment)
- Developer spec + mock API (JSON)
- Minimal React demo (frontend prototype) — ixtiyoriy.

## 20. Key next qadamlar
1. Dizaynerga Figma UI Kit + frames topshirish.
2. Backend: availability modeli, booking hold/confirm, payment gateway integratsiyasi.
3. Frontend: card grid, modal, calendar component, payment flow.
4. Test: concurrency (double-book), hold timeout, cross-device, accessibility.
5. Marketing: blog va social media content tayyorlash.
