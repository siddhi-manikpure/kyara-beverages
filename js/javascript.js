// Form validation
(function () {
    'use strict'
    
    // Fetch the form we want to apply custom Bootstrap validation styles to
    var form = document.getElementById('contactForm')
    
    // Prevent submission
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            alert('Thank you for your message! We will get back to you soon.')
            form.reset()
            form.classList.remove('was-validated')
            event.preventDefault()
        }
        
        form.classList.add('was-validated')
    }, false)
})()
        
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})
        
// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    }
})