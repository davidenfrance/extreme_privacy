const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const assessmentForm = document.querySelector('#assessment-form');
const formStatus = document.querySelector('#form-status');

menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = 'Menu';
  });
});

assessmentForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(assessmentForm);
  const name = String(data.get('name') || '').trim();
  formStatus.textContent = `Thank you${name ? `, ${name}` : ''}. Your inquiry has been received. A member of the Extreme Privacy team will follow up discreetly.`;
  assessmentForm.reset();
});
