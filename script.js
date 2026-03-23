//-- Configuración personalizada de Tailwind --//
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                sober: {
                    900: '#121212',
                    800: '#1e1e1e',
                    300: '#d4d4d8',
                    100: '#f4f4f5',
                    accent: '#8c7e6a'
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    document.getElementById('year').textContent = new Date().getFullYear();
});

/* --- DICCIONARIO DE TRADUCCIÓN --- */
const translations = {
    es: {
        nav_bio: "Biografía", nav_obras: "Obras", nav_expo: "Exposiciones",
        hero_desc: "Explorando la condición humana a través del expresionismo abstracto y el contraste tonal.",
        hero_btn: "Ver Colección", bio_title: "El Artista",
        bio_subtitle: "Carlos Orellana — La Energía del Abstraccionismo Contemporáneo",
        bio_quote: "\"El arte abstracto no se observa, se siente. Es un diálogo silencioso entre la materia, el color y la emoción.\"",
        bio_p1: "Carlos Orellana, pintor de arte abstracto originario de El Salvador y actualmente residente en Busto Arsizio, Italia, desarrolla una propuesta artística que fusiona la intensidad del expresionismo con la fuerza visual del street art contemporáneo. Su obra nace del movimiento, del gesto libre y de la necesidad de transformar la experiencia humana en lenguaje plástico.",
        bio_p2: "Cada una de sus composiciones es un espacio abierto: líneas que se cruzan como rutas de pensamiento, capas de color que evocan memoria, energía y transformación. En su trabajo no existen formas cerradas, sino vibraciones visuales que invitan al espectador a interpretar, descubrir y sentir desde su propia sensibilidad.",
        works_title: "Obras Selectas", works_desc: "Un recorrido visual por las piezas más representativas de la última década.",
        expo_title: "Exposiciones Destacadas",
        expo_1: "Rorarte, Italia. (Exposición Colectiva de artistas)",
        expo_2: "Universidad de Boloña",
        expo_3: "Braga",
        expo_4: "San Salvador, El Salvador. (Periódico Salvadoreño)",
        obra_01_title: "Albedrio",
        obra_02_title: "Amor En Salida",
        obra_03_title: "Amor Nefro",
        obra_04_title: "Confusion al Ego",
        obra_05_title: "Contragolpe de Natura",
        obra_06_title: "El Eco de una Risa",
        obra_07_title: "El Encuentro",
        obra_08_title: "Engañando el Tiempo",
        obra_09_title: "Fuga de un Sueño",
        obra_10_title: "Línea 8",
        obra_11_title: "Luz Negativa",
        obra_12_title: "Nuestro Confine",
        obra_13_title: "Nota 83",
        obra_14_title: "Parodia 21",
        obra_15_title: "Tiempo y Luna",
        obra_16_title: "1998",
        obra_17_title: "Blue",
        obra_18_title: "Sin Despedida",
        obra_19_title: "Fuga de un Amor",
        obra_20_title: "Iluso",
        obra_21_title: "Invierno",
        obra_22_title: "Luz",
        obra_tecnica: "Tecnica Mista",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_bio: "Biography", nav_obras: "Artworks", nav_expo: "Exhibitions",
        hero_desc: "Exploring the human condition through abstract expressionism and tonal contrast.",
        hero_btn: "View Collection", bio_title: "The Artist",
        bio_subtitle: "Carlos Orellana — The Energy of Contemporary Abstractionism",
        bio_quote: "\"Abstract art is not observed, it is felt. It is a silent dialogue between matter, color, and emotion.\"",
        bio_p1: "Carlos Orellana, an abstract painter originally from El Salvador and currently living in Busto Arsizio, Italy, develops an artistic proposal that merges the intensity of expressionism with the visual force of contemporary street art. His work is born from movement, free gesture, and the need to transform human experience into a visual language.",
        bio_p2: "Each of his compositions is an open space: lines that cross like paths of thought, layers of color that evoke memory, energy, and transformation. In his work, there are no closed forms, but visual vibrations that invite the viewer to interpret, discover, and feel from their own sensitivity.",
        works_title: "Selected Artworks", works_desc: "A visual journey through the most representative pieces of the last decade.",
        expo_title: "Featured Exhibitions",
        expo_1: "Rorarte, Italy. (Collective Exhibition)",
        expo_2: "University of Bologna",
        expo_3: "Braga",
        expo_4: "San Salvador, El Salvador. (Salvadoran Newspaper)",
        obra_01_title: "Free Will",
        obra_02_title: "Love in Exit",
        obra_03_title: "Nephro Love",
        obra_04_title: "Ego Confusion",
        obra_05_title: "Counterblow of Nature",
        obra_06_title: "The Echo of a Laugh",
        obra_07_title: "The Encounter",
        obra_08_title: "Deceiving Time",
        obra_09_title: "Flight of a Dream",
        obra_10_title: "Line 8",
        obra_11_title: "Negative Light",
        obra_12_title: "Our Boundary",
        obra_13_title: "Note 83",
        obra_14_title: "Parody 21",
        obra_15_title: "Time and Moon",
        obra_16_title: "1998",
        obra_17_title: "Blue",
        obra_18_title: "Without Goodbye",
        obra_19_title: "Flight of a Love",
        obra_20_title: "Dreamer",
        obra_21_title: "Winter",
        obra_22_title: "Light",
        obra_tecnica: "Mixed Technique",
        footer_rights: "All rights reserved."
    },
    it: {
        nav_bio: "Biografia", nav_obras: "Opere", nav_expo: "Mostre",
        hero_desc: "Esplorando la condizione umana attraverso l'espressionismo astratto e il contrasto tonale.",
        hero_btn: "Vedi Collezione", bio_title: "L'Artista",
        bio_subtitle: "Carlos Orellana — L'Energia dell'Astrattismo Contemporaneo",
        bio_quote: "\"L'arte astratta non si osserva, si sente. È un dialogo silenzioso tra materia, colore ed emozione.\"",
        bio_p1: "Carlos Orellana, pittore di arte astratta originario di El Salvador e attualmente residente a Busto Arsizio, in Italia, sviluppa una proposta artistica che fonde l'intensità dell'espressionismo con la forza visiva della street art contemporanea. Il suo lavoro nasce dal movimento, dal gesto libero e dalla necessità di trasformare l'esperienza umana in linguaggio visivo.",
        bio_p2: "Ognuna delle sue composizioni è uno spazio aperto: linee che si incrociano come percorsi di pensiero, strati di colore che evocano memoria, energia e trasformazione. Nel suo lavoro non esistono forme chiuse, ma vibrazioni visive che invitano lo spettatore a interpretare, scoprire e sentire a partire dalla propria sensibilità.",
        works_title: "Opere Selezionate", works_desc: "Un viaggio visivo attraverso le opere più rappresentative dell'ultimo decennio.",
        expo_title: "Mostre in Evidenza",
        expo_1: "Rorarte, Italia. (Mostra Collettiva di artisti)",
        expo_2: "Università di Bologna",
        expo_3: "Braga",
        expo_4: "San Salvador, El Salvador. (Giornale Salvadoregno)",
        obra_01_title: "Libero Arbitrio",
        obra_02_title: "Amore in Uscita",
        obra_03_title: "Amore Nefro",
        obra_04_title: "Confusione all'Ego",
        obra_05_title: "Contraccolpo della Natura",
        obra_06_title: "L'Eco di una Risata",
        obra_07_title: "L'Incontro",
        obra_08_title: "Ingannando il Tempo",
        obra_09_title: "Fuga di un Sogno",
        obra_10_title: "Linea 8",
        obra_11_title: "Luce Negativa",
        obra_12_title: "Nostro Confine",
        obra_13_title: "Nota 83",
        obra_14_title: "Parodia 21",
        obra_15_title: "Tempo e Luna",
        obra_16_title: "1998",
        obra_17_title: "Blue",
        obra_18_title: "Senza Addio",
        obra_19_title: "Fuga di un Amore",
        obra_20_title: "Illuso",
        obra_21_title: "Inverno",
        obra_22_title: "Luce",
        obra_tecnica: "Tecnica Mista",
        footer_rights: "Tutti i diritti riservati."
    }
};

/* FIX 2: No sobreescribir si el valor está vacío */
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = translations[lang]?.[key];
        if (value !== undefined && value !== '') {
            el.innerText = value;
        }
    });
    ['es','en','it'].forEach(l => document.getElementById(`btn-${l}`).classList.remove('lang-active'));
    document.getElementById(`btn-${lang}`).classList.add('lang-active');
}

/* --- Navbar scroll --- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent','py-4');
        navbar.classList.add('bg-sober-900/95','backdrop-blur-md','py-3','shadow-lg','border-b','border-white/5');
    } else {
        navbar.classList.add('bg-transparent','py-4');
        navbar.classList.remove('bg-sober-900/95','backdrop-blur-md','py-3','shadow-lg','border-b','border-white/5');
    }
});

/* --- Menú móvil --- */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
let isMenuOpen = false;

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    const iconMenu  = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    if (isMenuOpen) {
        mobileMenu.classList.remove('opacity-0','pointer-events-none');
        mobileMenu.classList.add('opacity-100','pointer-events-auto');
        iconMenu?.classList.add('hidden');
        iconClose?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('opacity-0','pointer-events-none');
        mobileMenu.classList.remove('opacity-100','pointer-events-auto');
        iconMenu?.classList.remove('hidden');
        iconClose?.classList.add('hidden');
        document.body.style.overflow = '';
    }
}
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', toggleMobileMenu));


/* ================================================================
   MASONRY
   ================================================================ */
const masonryGallery = document.getElementById('obras-gallery');

function resizeMasonryItem(item) {
    if (!masonryGallery) return;
    item.style.gridRowEnd = '';
    const rowHeight = parseInt(window.getComputedStyle(masonryGallery).getPropertyValue('grid-auto-rows'));
    const rowGap    = parseInt(window.getComputedStyle(masonryGallery).getPropertyValue('row-gap') ||
                               window.getComputedStyle(masonryGallery).getPropertyValue('grid-row-gap')) || 14;
    const content   = item.querySelector('.content');
    if (!content) return;
    const contentHeight = content.getBoundingClientRect().height;
    if (contentHeight > 0) {
        item.style.gridRowEnd = `span ${Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap))}`;
    }
}

function resizeAllMasonryItems() {
    if (!masonryGallery) return;
    masonryGallery.querySelectorAll('.gallery-item').forEach(resizeMasonryItem);
}

let masonryTimer;
function debouncedResize() {
    clearTimeout(masonryTimer);
    masonryTimer = setTimeout(resizeAllMasonryItems, 100);
}

if (masonryGallery) {
    masonryGallery.querySelectorAll('img').forEach(img => {
        if (img.complete && img.naturalHeight > 0) {
            resizeMasonryItem(img.closest('.gallery-item'));
        } else {
            img.addEventListener('load', () => resizeMasonryItem(img.closest('.gallery-item')));
            img.addEventListener('error', () => resizeMasonryItem(img.closest('.gallery-item')));
        }
    });

    window.addEventListener('load', () => {
        resizeAllMasonryItems();
        setTimeout(resizeAllMasonryItems, 300);
    });
}

window.addEventListener('resize', debouncedResize);
window.addEventListener('orientationchange', () => {
    setTimeout(resizeAllMasonryItems, 400);
});


/* ================================================================
   LIGHTBOX
   ================================================================ */
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');
const lightboxTitle   = document.getElementById('lightbox-title');
const lightboxDesc    = document.getElementById('lightbox-desc');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxThumbs  = document.getElementById('lightbox-thumbnails');

let currentImageIndex = 0;
let galleryItems      = [];
let isAnimating       = false;

function buildThumbnails() {
    lightboxThumbs.innerHTML = '';
    galleryItems.forEach((item, index) => {
        const src   = item.querySelector('img').src;
        const thumb = document.createElement('img');
        thumb.src   = src;
        thumb.alt   = '';
        thumb.className = 'lb-thumb';
        thumb.addEventListener('click', e => {
            e.stopPropagation();
            if (index !== currentImageIndex) { currentImageIndex = index; updateLightboxContent(true); }
        });
        lightboxThumbs.appendChild(thumb);
    });
}

function syncThumbs() {
    lightboxThumbs.querySelectorAll('.lb-thumb').forEach((t, i) => t.classList.toggle('lb-thumb--active', i === currentImageIndex));
    const active = lightboxThumbs.querySelectorAll('.lb-thumb')[currentImageIndex];
    active?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function updateLightboxContent(animate = false) {
    if (!galleryItems.length) return;
    const item  = galleryItems[currentImageIndex];
    const src   = item.querySelector('img').src;
    const title = item.querySelector('h3').innerText;
    const desc  = item.querySelector('p').innerText;
    lightboxCounter.innerText = `${currentImageIndex + 1} / ${galleryItems.length}`;
    syncThumbs();
    if (animate && !isAnimating) {
        isAnimating = true;
        lightboxImg.classList.add('lb-img--fade');
        setTimeout(() => {
            lightboxImg.src = src; lightboxTitle.innerText = title; lightboxDesc.innerText = desc;
            lightboxImg.classList.remove('lb-img--fade'); isAnimating = false;
        }, 220);
    } else {
        lightboxImg.src = src; lightboxTitle.innerText = title; lightboxDesc.innerText = desc;
    }
}

function toggleBodyScroll(disable) { document.body.style.overflow = disable ? 'hidden' : ''; }

function openLightbox(element) {
    const group = element.getAttribute('data-gallery') || 'obras';
    galleryItems = Array.from(document.querySelectorAll(`.gallery-item[data-gallery="${group}"]`));
    buildThumbnails();
    currentImageIndex = galleryItems.indexOf(element);
    updateLightboxContent(false);
    lightbox.classList.remove('hidden');
    void lightbox.offsetWidth;
    lightbox.style.opacity = '1';
    toggleBodyScroll(true);
    lucide.createIcons();
}

function closeLightbox() {
    lightbox.style.opacity = '0';
    setTimeout(() => { lightbox.classList.add('hidden'); lightboxImg.src = ''; }, 350);
    toggleBodyScroll(false);
}

function prevImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent(true);
}

function nextImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    updateLightboxContent(true);
}

let touchStartX = 0, touchEndX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
lightbox.addEventListener('touchend',   e => { touchEndX   = e.changedTouches[0].screenX; handleSwipe(); }, { passive: true });
function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextImage();
    if (touchEndX > touchStartX + 50) prevImage();
}

lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('hidden')) {
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft')  prevImage();
    }
});