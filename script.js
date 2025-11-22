// Ustaw bieżący rok w stopce
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Toggle menu mobilne
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('nav-open');
  });

  // Zamknij menu po kliknięciu w link
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('nav-open');
    });
  });
}

// Płynne przewijanie (dla starszych przeglądarek można dodać fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Przykładowa obsługa formularza – tu możesz podpiąć własny backend lub usługę typu Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    formStatus.textContent = 'Wysyłanie wiadomości...';
    formStatus.classList.remove('form-status--success', 'form-status--error');

    try {
      // Tu podmień adres na swój endpoint (np. Formspree / własny backend)
      // Na razie symulujemy powodzenie po 1 sekundzie:
      await new Promise(resolve => setTimeout(resolve, 1000));

      formStatus.textContent = 'Dziękuję! Twoja wiadomość została wysłana. Sprawdź skrzynkę e-mail w ciągu 24 godzin.';
      formStatus.classList.add('form-status--success');
      contactForm.reset();
    } catch (err) {
      console.error(err);
      formStatus.textContent = 'Wystąpił błąd podczas wysyłania. Spróbuj ponownie później.';
      formStatus.classList.add('form-status--error');
    }
  });
}
