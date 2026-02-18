document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
    <nav class="premium-nav">
        <div class="nav-wrapper">
            <div class="brand-identity">
                <span class="brand-light">MINT</span><span class="brand-bold">DENT</span>
            </div>
            
            <ul class="nav-list">
                <li class="nav-item-container">
                    <a href="#" class="nav-item">Servicii <span class="chevron"></span></a>
                    <div class="dropdown-menu">
                        <div class="dropdown-content">
                            <a href="#implant">Implantologie High-Tech</a>
                            <a href="#estetica">Estetică Dentară</a>
                            <a href="#orto">Ortodonție Invizibilă</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item-container"><a href="#cazuri" class="nav-item">Cazuri Clinice</a></li>
                <li class="nav-item-container"><a href="#despre" class="nav-item">Despre Clinică</a></li>
                <li class="nav-item-container"><a href="#contact" class="nav-item">Contact</a></li>
            </ul>

            <a href="#programare" class="cta-button">
                REZERVARE
                <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Funcția globală de stare activă
    const setupNavInteractions = () => {
        const containers = document.querySelectorAll('.nav-item-container');
        
        containers.forEach(container => {
            const link = container.querySelector('.nav-item');
            
            container.addEventListener('mouseenter', () => link.classList.add('is-active'));
            container.addEventListener('mouseleave', () => link.classList.remove('is-active'));
        });
    };

    setupNavInteractions();
});