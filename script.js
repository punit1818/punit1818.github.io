// Smooth Scrolling and Fade-In Animation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar ul li a');

// Function to reveal sections when they come into view
const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Reveal section when it's within the view area
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
};

// Function to highlight the navbar link based on the scroll position
const highlightNav = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50; // Adjusting top offset for better detection
        const sectionHeight = section.offsetHeight;

        // Highlight the nav link based on the scroll position
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
};

// Attach Scroll Event
window.addEventListener('scroll', () => {
    revealSection();
    highlightNav();
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    revealSection();
});
