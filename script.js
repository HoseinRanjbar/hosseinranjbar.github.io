const themeButton = document.getElementById('theme');
let savedTheme;
try { savedTheme = localStorage.getItem('theme'); } catch {}
const preferredTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
}
setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : preferredTheme);
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('theme', theme); } catch {}
});
document.getElementById('year').textContent = new Date().getFullYear();
const links = document.querySelectorAll('nav a');
const sections = Array.from(links, link => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -55% 0px' });
  sections.forEach(section => observer.observe(section));
}
