// FAQ Toggle Function
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const toggle = button.querySelector('.faq-toggle');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        toggle.classList.remove('active');
        toggle.textContent = '+';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-answer.active').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.faq-toggle.active').forEach(item => {
            item.classList.remove('active');
            item.textContent = '+';
        });
        
        // Open clicked FAQ
        answer.classList.add('active');
        toggle.classList.add('active');
        toggle.textContent = '+';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.main-content-intro .intro-content, .answer-box, .voice-card, .feature-card, .faq-item, .stat-item, .comparison-table, .cta-content, .client-logos h2, .logo-swiper-container, .main-hero-swiper-container').forEach(el => {
    observer.observe(el);
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 79, 138, 0.95)'; 
        header.style.backdropFilter = 'blur(8px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1A4F8A 0%, #0D2A54 100%)';
        header.style.backdropFilter = 'none';
    }
}); 