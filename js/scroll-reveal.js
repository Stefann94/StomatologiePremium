document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Declanșează cu 50px înainte să iasă/intre
        threshold: 0.01 // Sensibilitate maximă (1% vizibilitate)
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Resetare imediată când elementul părăsește vizorul
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Selectăm absolut toate elementele care trebuie să aibă animație proprie
    const elementsToAnimate = document.querySelectorAll(
        '.section-subtitle, .section-title, .about-lead, .about-description p, .stat-item, .about-main-image, .image-experience-badge, .why-header, .benefit-item, .accordion-item, .form-wrapper'
    );

    elementsToAnimate.forEach(el => revealObserver.observe(el));
});