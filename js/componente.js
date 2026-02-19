document.addEventListener('DOMContentLoaded', () => {
    const navbarHTML = `
    <div id="nav-overlay" style="position:fixed; top:5rem; left:0; width:100%; height:calc(100vh - 5rem); background:rgba(2, 6, 23, 0.8); z-index:9996; opacity:0; visibility:hidden; transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1); backdrop-filter: blur(4px);"></div>
    
    <nav class="premium-nav">
        <div class="nav-wrapper">
            <a href="/" class="brand-identity" style="text-decoration: none; display: flex; align-items: center;">
                <span class="brand-light">MINT</span><span class="brand-bold">DENT</span>
            </a>
            
            <div class="burger-btn" id="burger-trigger">
                <span></span>
                <span></span>
            </div>

            <ul class="nav-list" id="main-nav">
                <li class="nav-item-container">
                    <a href="#servicii" class="nav-item">Servicii<span class="chevron desktop-only"></span></a>
                    <div class="dropdown-menu desktop-only">
                        <div class="dropdown-content">
                            <a href="#implant">Implantologie High-Tech</a>
                            <a href="#estetica">Estetică Dentară</a>
                            <a href="#orto">Ortodonție Invizibilă</a>
                            <a href="#laser">Chirurgie Laser</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item-container">
                    <a href="#tehnologie" class="nav-item">Tehnologie<span class="chevron desktop-only"></span></a>
                    <div class="dropdown-menu desktop-only">
                        <div class="dropdown-content">
                            <a href="#scanner">Scanner Intraoral 3D</a>
                            <a href="#ct">Tomografie Computerizată</a>
                            <a href="#microscop">Microscop Zeiss</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item-container">
                    <a href="#pacienti" class="nav-item">Pacienți<span class="chevron desktop-only"></span></a>
                    <div class="dropdown-menu desktop-only">
                        <div class="dropdown-content">
                            <a href="#vizita">Prima Vizită</a>
                            <a href="#preturi">Tarife & Finanțare</a>
                            <a href="#faq">Întrebări Frecvente</a>
                        </div>
                    </div>
                </li>

                <li class="nav-item-container"><a href="#cazuri" class="nav-item">Cazuri Clinice</a></li>
                <li class="nav-item-container"><a href="#contact" class="nav-item">Contact</a></li>
            </ul>

            <a href="#programare" class="cta-button desktop-only">
                REZERVARE
                <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </nav>
    `;

    const siteWrapper = document.getElementById('site-wrapper');
    if (siteWrapper) siteWrapper.insertAdjacentHTML('afterbegin', navbarHTML);

    const burgerBtn = document.getElementById('burger-trigger');
    const navList = document.getElementById('main-nav');
    const pageContent = document.getElementById('page-content');
    const premiumNav = document.querySelector('.premium-nav');
    const overlay = document.getElementById('nav-overlay');
    const allLinks = document.querySelectorAll('.nav-item, .dropdown-content a');

    const toggleMobileMenu = () => {
        const isOpening = !navList.classList.contains('open');
        burgerBtn.classList.toggle('active');
        navList.classList.toggle('open');
        if(pageContent) pageContent.classList.toggle('pushed');
        if(premiumNav) premiumNav.classList.toggle('pushed');
        overlay.style.opacity = isOpening ? "1" : "0";
        overlay.style.visibility = isOpening ? "visible" : "hidden";
        document.body.style.overflow = isOpening ? "hidden" : "";
    };

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    overlay.addEventListener('click', toggleMobileMenu);

    // Închide meniul la click pe ORICE link (Servicii, Contact, etc.)
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });
});

const burger = document.querySelector(".burger-btn");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    navList.classList.toggle("active");
    burger.classList.toggle("active");
});
