document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.sidebar-menu li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Prevent the default if doing AJAX updates
            // e.preventDefault();
            
            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));
            
            // Add active class to the clicked link
            this.classList.add('active');

            // Optional: Handle navigation via JavaScript if needed
            // window.location.href = this.href;
        });
    });
});
