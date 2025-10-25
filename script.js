// ===== Hamburger Menu (mobile) =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ===== Smooth Scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== WhatsApp Enroll Buttons =====
document.querySelectorAll('.enroll-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const courseName = this.closest('.course-card')?.querySelector('h3')?.textContent?.trim() || 'your course';
    const msg = `Assalamu Alaikum! I want to enroll in ${courseName} course.`;
    const url = `https://wa.me/923023003330?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
});

// ===== Navbar gradient tweak on scroll (optional polish) =====
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  navbar.style.background =
    window.scrollY > 100
      ? 'linear-gradient(135deg, #2c5f2d 0%, #3d8b40 100%)'
      : 'linear-gradient(135deg, #2c5f2d 0%, #4caf50 100%)';
});

// ===== Ready log =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('Al Furqan site ready.');
});

