document.addEventListener('DOMContentLoaded', () => {
    const whySection = document.querySelector('.why-section');
    const whyAccordion = document.querySelector('.why-accordion');
    const accordionItems = document.querySelectorAll('.accordion-item');

    const openFirstItem = () => {
        accordionItems.forEach((item, i) => {
            if (i === 0) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    const closeAll = () => {
        accordionItems.forEach(item => item.classList.remove('active'));
    };

    const isMobile = window.innerWidth <= 768;
    const targetToObserve = isMobile ? whyAccordion : whySection;
    // Prag mai mic pentru a declanșa animația mai rapid
    const thresholdValue = isMobile ? 0.3 : 0.6; 

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= thresholdValue) {
                openFirstItem();
            } else if (!entry.isIntersecting) {
                closeAll();
            }
        });
    }, {
        // Observăm mai multe praguri pentru a evita blocajele
        threshold: [0, thresholdValue]
    });

    if (targetToObserve) sectionObserver.observe(targetToObserve);

    // Funcționalitate Click Manual
    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const isOpen = item.classList.contains('active');
                closeAll();
                if (!isOpen) item.classList.add('active');
            });
        }
    });
});