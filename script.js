document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, header'); // Include header as "hero"
  const navLinks = document.querySelectorAll('.nav-sidebar a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active from all
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active to the matching link
        const id = entry.target.getAttribute('id');
        const matchingLink = document.querySelector(`.nav-sidebar a[href="#${id}"]`);
        if (matchingLink) matchingLink.classList.add('active');
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of section is visible

  sections.forEach(section => observer.observe(section));
});