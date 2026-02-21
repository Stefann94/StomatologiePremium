document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealOptions = {
        threshold: 0.1, // Declanșează când 10% din card e vizibil
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adaugă clasa pentru slide up
                entry.target.classList.add('is-visible');
            } else {
                // Dacă vrei ca efectul să se repete DOAR când scroll-ezi înapoi jos,
                // verificăm dacă elementul este sub viewport (entry.boundingClientRect.top > 0)
                if (entry.boundingClientRect.top > 0) {
                    entry.target.classList.remove('is-visible');
                }
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});