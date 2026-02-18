const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentSlide = 0;
let slideInterval;
const displayTime = 7000; // 7 secunde

function showSlide(index) {
    // 1. Eliminăm clasa active de la toate slide-urile și punctele
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // 2. Calculăm indexul corect (pentru a face loop infinit)
    currentSlide = (index + slides.length) % slides.length;
    
    // 3. Adăugăm clasa active pe elementele curente
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// --- LOGICA TIMER & RESET ---

function startTimer() {
    // Pornește derularea automată
    slideInterval = setInterval(nextSlide, displayTime);
}

function resetTimer() {
    // Șterge intervalul actual și pornește unul nou de la zero
    clearInterval(slideInterval);
    startTimer();
}

// --- EVENT LISTENERS (Interacțiunea utilizatorului) ---

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer(); // Resetăm dacă utilizatorul a dat click
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer(); // Resetăm dacă utilizatorul a dat click
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        showSlide(idx);
        resetTimer(); // Resetăm dacă utilizatorul a dat click pe un punct (dot)
    });
});

// Inițializare Slider la încărcarea paginii
startTimer();