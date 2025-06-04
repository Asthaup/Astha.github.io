// Navbar Toggle for Mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        }
    });
});

// Skills Progress Bar Animation on Scroll
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');
let animated = false;

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
        progressBars.forEach(bar => {
            bar.style.width = bar.classList.contains('python') ? '90%' :
                              bar.classList.contains('sql') ? '85%' :
                              bar.classList.contains('powerbi') ? '80%' :
                              bar.classList.contains('webdev') ? '75%' :
                              bar.classList.contains('ai') ? '70%' :
                              '85%'; // data
        });
        animated = true;
    }
});
