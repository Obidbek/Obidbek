const calendarGrid = document.querySelector('.calendar__grid');

const monthDays = [
  { day: 1, weekday: 'Dush', status: 'available', guests: 450 },
  { day: 2, weekday: 'Sesh', status: 'available', guests: 380 },
  { day: 3, weekday: 'Chor', status: 'busy', guests: 600 },
  { day: 4, weekday: 'Pay', status: 'partial', guests: 520 },
  { day: 5, weekday: 'Jum', status: 'available', guests: 300 },
  { day: 6, weekday: 'Shan', status: 'busy', guests: 980 },
  { day: 7, weekday: 'Yak', status: 'busy', guests: 780 },
  { day: 8, status: 'available', guests: 320 },
  { day: 9, status: 'available', guests: 280 },
  { day: 10, status: 'busy', guests: 900 },
  { day: 11, status: 'partial', guests: 650 },
  { day: 12, status: 'available', guests: 410 },
  { day: 13, status: 'busy', guests: 1100 },
  { day: 14, status: 'partial', guests: 720 },
  { day: 15, status: 'available', guests: 360 },
  { day: 16, status: 'available', guests: 390 },
  { day: 17, status: 'busy', guests: 930 },
  { day: 18, status: 'busy', guests: 840 },
  { day: 19, status: 'partial', guests: 650 },
  { day: 20, status: 'available', guests: 470 },
  { day: 21, status: 'busy', guests: 1020 },
  { day: 22, status: 'available', guests: 410 },
  { day: 23, status: 'available', guests: 370 },
  { day: 24, status: 'busy', guests: 960 },
  { day: 25, status: 'partial', guests: 590 },
  { day: 26, status: 'available', guests: 440 },
  { day: 27, status: 'busy', guests: 980 },
  { day: 28, status: 'available', guests: 380 },
  { day: 29, status: 'partial', guests: 560 },
  { day: 30, status: 'available', guests: 420 }
];

if (calendarGrid) {
  const fragment = document.createDocumentFragment();
  monthDays.forEach((item, index) => {
    const cell = document.createElement('div');
    cell.className = `calendar__cell calendar__cell--${item.status}`;

    const dayLabel = document.createElement('span');
    dayLabel.textContent = item.day;

    const guests = document.createElement('p');
    guests.textContent = `${item.guests} mehmon sig‘imi`;
    guests.setAttribute('aria-label', `Sig'im: ${item.guests}`);

    const status = document.createElement('small');
    status.textContent = item.status === 'busy'
      ? 'Band'
      : item.status === 'partial'
        ? 'Qisman band'
        : 'Mavjud';
    status.className = 'calendar__status';

    cell.append(dayLabel, guests, status);

    if (item.weekday) {
      const label = document.createElement('strong');
      label.className = 'calendar__weekday';
      label.textContent = item.weekday;
      cell.prepend(label);
    }

    fragment.appendChild(cell);
  });

  calendarGrid.appendChild(fragment);
}

const contactForm = document.querySelector('.contact__form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
    contactForm.classList.add('contact__form--success');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Ariza yuborildi';
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.textContent = 'Ariza yuborish';
      submitBtn.disabled = false;
      contactForm.classList.remove('contact__form--success');
    }, 3200);
  });
}
