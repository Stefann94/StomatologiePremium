document.addEventListener('DOMContentLoaded', () => {
    
    // 1. AUTO-INJECTARE CSS (Încarcă subsol.css automat dacă nu există)
    if (!document.querySelector('link[href="css/subsol.css"]')) {
        const linkCSS = document.createElement('link');
        linkCSS.rel = 'stylesheet';
        linkCSS.href = 'css/subsol.css';
        document.head.appendChild(linkCSS);
    }
// --- LOGICĂ DETECTARE PATH ---
const isInSubfolder = window.location.pathname.includes('/servicii/');
const pathPrefix = isInSubfolder ? '../' : '';
const homeLink = isInSubfolder ? '../index.html' : 'index.html';
    
// 2. STRUCTURĂ NAVBAR RESCRIISĂ
const navbarHTML = `
<div id="nav-overlay" style="position:fixed; top:5rem; left:0; width:100%; height:calc(100vh - 5rem); background:rgba(2, 6, 23, 0.8); z-index:9996; opacity:0; visibility:hidden; transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1); backdrop-filter: blur(4px);"></div>
<nav class="premium-nav">
    <div class="nav-wrapper">
        <a href="${homeLink}" class="brand-identity" style="text-decoration: none; display: flex; align-items: center;">
            <span class="brand-light">MINT</span><span class="brand-bold">DENT</span>
        </a>
        <div class="burger-btn" id="burger-trigger">
            <span></span>
            <span></span>
        </div>
        <ul class="nav-list" id="main-nav">
            <li class="nav-item-container">
                <a href="${pathPrefix}servicii/servicii.html" class="nav-item">Servicii<span class="chevron desktop-only"></span></a>
                <div class="dropdown-menu desktop-only">
                    <div class="dropdown-content">
                        <a href="${pathPrefix}servicii/implantologie.html">Implantologie High-Tech</a>
                        <a href="${pathPrefix}servicii/estetica.html">Estetică Dentară</a>
                        <a href="${pathPrefix}servicii/orto.html">Ortodonție Invizibilă</a>
                        <a href="${pathPrefix}servicii/laser.html">Chirurgie Laser</a>
                    </div>
                </div>
            </li>
            <li class="nav-item-container">
                <a href="${homeLink}#why-choose-us" class="nav-item">Tehnologie<span class="chevron desktop-only"></span></a>
                <div class="dropdown-menu desktop-only">
                    <div class="dropdown-content">
                        <a href="${homeLink}#why-choose-us">Scanner Intraoral 3D</a>
                        <a href="${homeLink}#why-choose-us">Tomografie Computerizată</a>
                        <a href="${homeLink}#why-choose-us">Microscop Zeiss</a>
                    </div>
                </div>
            </li>
            <li class="nav-item-container">
                <a href="${homeLink}#despre-noi" class="nav-item">Pacienți<span class="chevron desktop-only"></span></a>
                <div class="dropdown-menu desktop-only">
                    <div class="dropdown-content">
                        <a href="${homeLink}#rezervare">Prima Vizită</a>
                        <a href="${homeLink}#rezervare">Tarife & Finanțare</a>
                        <a href="${homeLink}#rezervare">Întrebări Frecvente</a>
                    </div>
                </div>
            </li>
            <li class="nav-item-container"><a href="${homeLink}#reviewsSlider" class="nav-item">Cazuri Clinice</a></li>
            <li class="nav-item-container"><a href="${homeLink}#contact" class="nav-item">Contact</a></li>
        </ul>
        <a href="${homeLink}#rezervare" class="cta-button desktop-only">
            REZERVARE
            <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </a>
    </div>
</nav>`;
    // 3. STRUCTURĂ FOOTER (Iconițe SVG Mint incluse)
    const footerHTML = `
    <footer class="premium-footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-column brand-col">
                    <div class="brand-identity" style="margin-bottom: 1.5rem;">
                        <span class="brand-light">MINT</span><span class="brand-bold">DENT</span>
                    </div>
                    <p class="footer-description">Excelență în stomatologie digitală. Transformăm zâmbete prin tehnologie de ultimă generație și o abordare premium.</p>
                    <div class="social-links">
                        <a href="#" class="social-icon" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#A7F3D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#A7F3D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#A7F3D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Servicii</h3>
                    <ul class="footer-links">
                        <li><a href="#implant">Implantologie</a></li>
                        <li><a href="#estetica">Estetică</a></li>
                        <li><a href="#orto">Ortodonție</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Informații</h3>
                    <ul class="footer-links">
                        <li><a href="#preturi">Tarife</a></li>
                        <li><a href="#faq">Întrebări</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column contact-col">
                    <h3>Contact</h3>
                    <div class="contact-info">
                        <p><span>Locație:</span> Str. Exemplului Nr. 24, București</p>
                        <p><span>Telefon:</span> 07xx xxx xxx</p>
                        <p><span>Email:</span> office@mintdent.ro</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 MINT DENT. Toate drepturile rezervate.</p>
                <a href="#" class="back-to-top" id="scroll-to-top">ÎNAPOI SUS ↑</a>
            </div>
        </div>
    </footer>`;

    // 4. INJECTARE
    const siteWrapper = document.getElementById('site-wrapper');
    if (siteWrapper) {
        siteWrapper.insertAdjacentHTML('afterbegin', navbarHTML);
        siteWrapper.insertAdjacentHTML('beforeend', footerHTML);
    }

    // 5. LOGICĂ MENIU MOBILE
    const burgerBtn = document.getElementById('burger-trigger');
    const navList = document.getElementById('main-nav');
    const overlay = document.getElementById('nav-overlay');
    const allLinks = document.querySelectorAll('.nav-item, .dropdown-content a, .footer-links a');

    const toggleMobileMenu = () => {
        const isOpening = !navList.classList.contains('open');
        burgerBtn.classList.toggle('active');
        navList.classList.toggle('open');
        overlay.style.opacity = isOpening ? "1" : "0";
        overlay.style.visibility = isOpening ? "visible" : "hidden";
        document.body.style.overflow = isOpening ? "hidden" : "";
    };

    if(burgerBtn) burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    if(overlay) overlay.addEventListener('click', toggleMobileMenu);

    // 6. SMOOTH SCROLL & AUTO-CLOSE MENU
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href !== "#") {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = targetElement.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            if (navList && navList.classList.contains('open')) toggleMobileMenu();
        });
    });

    // 7. BACK TO TOP
    const backToTopBtn = document.getElementById('scroll-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});