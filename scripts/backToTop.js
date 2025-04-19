document.addEventListener('DOMContentLoaded', function() {
    // Get the button
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Show the button when the user scrolls down 100px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.style.display = 'block'; // Show the button
        } else {
            backToTopBtn.style.display = 'none'; // Hide the button
        }
    };

    // Scroll the page back to the top when the button is clicked
    backToTopBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
