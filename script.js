// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.08 }
);
reveals.forEach(el => observer.observe(el));

// Trigger hero elements immediately
document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('visible'));

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(a => a.style.color = '');
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.style.color = 'var(--accent)';
        }
    });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(s => navObs.observe(s));