const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
window.addEventListener('scroll', () => {
  const section = document.querySelector('.skills-section');
  const bars = document.querySelectorAll('.skill-fill');
  const sectionTop = section.getBoundingClientRect().top;
  const trigger = window.innerHeight - 100;

  if (sectionTop < trigger) {
    bars.forEach(bar => {
      bar.style.width = bar.getAttribute('style').split(':')[1];
    });
  }
});
