// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Menu Filter Functionality
const filterButtons = document.querySelectorAll('.menu-filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Animate menu items
        menuItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.classList.add('fade-in');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in');
            }
        });
    });
});

// Get Directions Button
const directionButtons = document.querySelectorAll('button[class*="Get Directions"]');
directionButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.textContent.includes('Sambat')) {
            // Open Google Maps for Sambat Bubukal
            const lat = '14.2416'; // Example coordinates
            const lon = '121.0032'; // Example coordinates
            window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`, '_blank');
        } else if (button.textContent.includes('Bagumbayan')) {
            // Open Google Maps for Bagumbayan
            const lat = '14.3568'; // Example coordinates
            const lon = '121.0444'; // Example coordinates
            window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`, '_blank');
        }
    });
});

// Smooth scroll behavior (already in CSS but fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            const offsetTop = element.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all menu cards and location cards
document.querySelectorAll('.menu-card, .location-card').forEach(el => {
    observer.observe(el);
});
