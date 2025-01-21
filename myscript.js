// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Form submission for searching doctors
    const searchForm = document.querySelector('#search-doctor form');
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const location = document.getElementById('location').value;
        const doctorName = document.getElementById('doctor-name').value;

        if (location === '' || doctorName === '') {
            alert('Please fill in both fields to search for a doctor.');
        } else {
            // Here you can implement the search functionality
            alert(`Searching for ${doctorName} in ${location}...`);
            // You can redirect to a search results page or filter results dynamically
        }
    });

    // Form submission for newsletter subscription
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email === '') {
            alert('Please enter your email address to subscribe.');
        } else {
            // Here you can implement the subscription logic
            alert(`Thank you for subscribing with the email: ${email}`);
            newsletterForm.reset(); // Reset the form fields
        }
    });
});
