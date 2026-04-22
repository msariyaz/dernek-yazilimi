// Sticky Header on Scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        header.classList.toggle('mobile-active');
        document.body.classList.toggle('menu-open');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Add Mobile specific CSS for active state via JS if not already in CSS
// For professional look, we handle it in style.css, but let's ensure mobile dropdowns work
const dropdowns = document.querySelectorAll('.nav-item');

dropdowns.forEach(item => {
    const link = item.querySelector('.nav-link');
    if (item.querySelector('.dropdown')) {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                item.classList.toggle('dropdown-open');
                const dropdown = item.querySelector('.dropdown');
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.position = 'relative';
                    dropdown.style.transform = 'translateY(0)';
                    dropdown.style.boxShadow = 'none';
                    dropdown.style.background = '#f1f5f9';
                }
            }
        });
    }
});

// Reveal on Scroll (Simple implementation)
const revealElements = document.querySelectorAll('.service-card, .about-img, .about-text');

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.85) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for reveal animation
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
