document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const trigger = item.querySelector('.accordion-trigger');

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Închidem toate celelalte iteme
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Dacă cel apăsat nu era deschis, îl deschidem
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
});