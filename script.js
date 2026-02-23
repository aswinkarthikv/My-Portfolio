// Custom Cursor
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 50);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Logic
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .animate-left, .animate-right').forEach(el => {
    observer.observe(el);
});

// Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Typing Effect for Hero
const typingText = document.querySelector('.hero-content p');
const text = "Cyber Security Student | Full Stack Developer";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent = text.slice(0, index + 1) + "|";
        index++;
        setTimeout(type, 100);
    } else {
        typingText.textContent = text;
    }
}

// Initialize typing effect on load
window.addEventListener('load', () => {
    typingText.textContent = "";
    setTimeout(type, 1000);
});

// Initializing animations for already visible elements
window.addEventListener('scroll', () => {
    // Already in initial script.js content
});
