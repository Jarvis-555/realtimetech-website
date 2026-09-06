/* =========================================================
   REAL TIME TECH - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const phone = '254740659323';


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('#site-nav a').forEach(a => {
  a.addEventListener('click', () => {
    if (header) {
      header.classList.remove('open');
    }

    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});


/* =========================================================
   REVEAL ANIMATIONS
   ========================================================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


/* =========================================================
   WHATSAPP HELPER
   ========================================================= */

const wa = text => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};


/* =========================================================
   SERVICE WHATSAPP BUTTONS
   ========================================================= */

document.querySelectorAll('[data-service]').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.dataset.service;

    const message =
      `Hello Real Time Tech, I would like to inquire about ${service}.` +
      `\n\nMy location is: `;

    window.open(wa(message), '_blank', 'noopener');
  });
});


/* =========================================================
   SERVICE PREFILL
   ========================================================= */

document.querySelectorAll('[data-prefill]').forEach(link => {
  link.addEventListener('click', () => {
    const serviceField = document.querySelector(
      '#quote-form [name="service"]'
    );

    if (serviceField) {
      serviceField.value = 'Business automation';
    }
  });
});


/* =========================================================
   CUSTOM PC BUILDER
   ========================================================= */

const pcForm = document.querySelector('#pc-form');

if (pcForm) {
  pcForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const use = data.get('use') || 'Not specified';
    const budget = data.get('budget') || 'Not specified';

    const priorities =
      data.getAll('priority').length > 0
        ? data.getAll('priority').join(', ')
        : 'Not specified';

    const notes = data.get('notes') || 'None';

    const message =
      `Hello Real Time Tech, I would like a custom PC quotation.` +
      `\n\nPrimary use: ${use}` +
      `\nBudget: ${budget}` +
      `\nPriorities: ${priorities}` +
      `\nNotes: ${notes}`;

    window.open(
      wa(message),
      '_blank',
      'noopener'
    );
  });
}


/* =========================================================
   GENERAL INQUIRY / QUOTE FORM
   ========================================================= */

const quoteForm = document.querySelector('#quote-form');

if (quoteForm) {
  quoteForm.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('name') || 'Not provided';
    const phoneNumber = data.get('phone') || 'Not provided';
    const service = data.get('service') || 'Not specified';
    const project = data.get('message') || 'Not provided';

    const message =
      `Hello Real Time Tech,` +
      `\n\nMy name is ${name}.` +
      `\nPhone: ${phoneNumber}` +
      `\nSolution: ${service}` +
      `\nProject: ${project}`;

    window.open(
      wa(message),
      '_blank',
      'noopener'
    );
  });
}


/* =========================================================
   PORTFOLIO FILTERS
   ========================================================= */

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {

    document
      .querySelector('.filters .active')
      ?.classList.remove('active');

    btn.classList.add('active');

    const filter = btn.dataset.filter;

    document.querySelectorAll('.gallery figure').forEach(item => {
      const category = item.dataset.category;

      const hidden =
        filter !== 'all' &&
        category !== filter;

      item.classList.toggle('hidden', hidden);
    });
  });
});


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}