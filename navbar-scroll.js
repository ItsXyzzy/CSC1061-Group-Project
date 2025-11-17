// Get the navigation element
const nav = document.querySelector('nav');

// Get either the page-header or article-header (whichever exists on the page)
const headerSection = document.querySelector('.page-header') || document.querySelector('.article-header');

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