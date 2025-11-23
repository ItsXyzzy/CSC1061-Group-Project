// Get the navigation element
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

// Get either the page-header or article-header (whichever exists on the page)
const headerSection = document.querySelector('.page-header') || document.querySelector('.article-header');

// Toggle mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Handle mobile dropdowns
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    // Get the height of the header section
    const headerHeight = headerSection ? headerSection.offsetHeight : 400; // Default to 400px if header not found
    
    // Check if we've scrolled past the header section
    if (window.scrollY > headerHeight - 100) { // Subtract 100px for earlier transition
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});