const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.left-nav .nav-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const id = entry.target.getAttribute('id');
      const matchingLink = document.querySelector(`.left-nav .nav-item[href="#${id}"]`);
      if (matchingLink) matchingLink.classList.add('active');
    }
  });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));