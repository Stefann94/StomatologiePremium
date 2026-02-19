document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('custom-service-select');
    const wrapper = document.getElementById('service-wrapper') || select.closest('.custom-select-wrapper');
    const triggerSpan = select.querySelector('.select-trigger span');
    const hiddenInput = document.getElementById('service-hidden-input');
    const options = select.querySelectorAll('.option');

    // Funcție unică pentru Toggle
    function toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isOpen = select.classList.toggle('is-open');
        
        if (isOpen) {
            wrapper.classList.add('is-focused');
        } else if (!wrapper.classList.contains('has-value')) {
            wrapper.classList.remove('is-focused');
        }
    }

    // Atașăm evenimentul pe întregul element 'select' pentru a prinde orice atingere
    select.addEventListener('click', toggleMenu);

    // Selecție opțiuni
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const val = option.getAttribute('data-value');
            const text = option.textContent;

            // Update UI
            triggerSpan.textContent = text;
            triggerSpan.style.color = "#F8FAFC";
            if(hiddenInput) hiddenInput.value = val;
            
            wrapper.classList.add('has-value');
            
            // Închidere meniu
            select.classList.remove('is-open');
            wrapper.classList.remove('is-focused');
        });
    });

    // Închidere la click în exterior
    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('is-open');
            if (!wrapper.classList.contains('has-value')) {
                wrapper.classList.remove('is-focused');
            }
        }
    });
});