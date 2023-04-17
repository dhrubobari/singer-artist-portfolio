const toggleNav = document.querySelector('.toggle-nav');
const nav = document.querySelector('nav');
const closeIcon = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('nav a')

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('open');
});

closeIcon.addEventListener('click', () => {
  nav.classList.remove('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.hash);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
