// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Highlight the active navigation link based on the scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightNav() {
        let index = sections.length;
        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    window.addEventListener('scroll', highlightNav);
    highlightNav();

    // Handle the search form submission
    const searchForm = document.querySelector('#search-doctor form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const location = document.querySelector('#location').value.trim();
        const doctorName = document.querySelector('#doctor-name').value.trim();

        if (!location && !doctorName) {
            alert('Please enter at least a location or doctor’s name to search.');
        } else {
            // Add your search logic here
            console.log(`Searching for doctors in location: ${location}, with name: ${doctorName}`);
        }
    });

    // Handle the newsletter subscription form submission
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const email = document.querySelector('#newsletter input[type="email"]').value.trim();

        if (!email) {
            alert('Please enter your email to subscribe.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            // Add your subscription logic here
            console.log(`Subscribing with email: ${email}`);
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
