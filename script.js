document.documentElement.classList.add('js');

document.querySelector('#year').textContent = new Date().getFullYear();

const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach((item) => io.observe(item));
} else {
  items.forEach((item) => item.classList.add('show'));
}
