// Initialize AOS with enhanced settings
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Enhanced smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar scroll effect with transition
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    // Keep the navbar transparent and avoid changing its background color
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'blur(10px)'; // Optional: Keep the blur effect if needed
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)'; // Optional: Keep the shadow effect if needed
    
    lastScroll = currentScroll;
});

// Enhanced mobile menu toggle with animation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Enhanced responsive navigation
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Enhanced parallax effect for hero section
const heroContent = document.querySelector('.hero-content');
const heroVideo = document.querySelector('.hero-video');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (window.innerWidth > 768) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroVideo.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add hover effect to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step, .team-member').forEach(el => {
    observer.observe(el);
});

// Enhanced button hover effects
document.querySelectorAll('.cta-button, .get-started-btn, .store-button').forEach(button => {
    button.addEventListener('mouseenter', e => {
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;
        
        button.style.setProperty('--xPos', x + 'px');
        button.style.setProperty('--yPos', y + 'px');
    });
});
// Team Section Carousel
const teamContainer = document.querySelector('.team-grid');
const teamMembers = Array.from(document.querySelectorAll('.team-member'));
let currentIndex = 0;
const visibleMembers = 4; // Number of members to display initially

function moveTeam() {
    const memberWidth = teamMembers[0].offsetWidth; // Width of one member
    teamContainer.style.transition = 'transform 0.5s ease-in-out';
    teamContainer.style.transform = `translateX(-${memberWidth}px)`;

    setTimeout(() => {
        teamContainer.style.transition = 'none';
        teamContainer.appendChild(teamMembers[currentIndex]);
        teamContainer.style.transform = 'translateX(0)';
        currentIndex = (currentIndex + 1) % teamMembers.length;
    }, 500); // Match the transition duration
}

// Start the carousel after displaying the initial members
setTimeout(() => {
    let carouselInterval = setInterval(moveTeam, 3000);

    // Pause on hover
    teamContainer.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    teamContainer.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(moveTeam, 3000);
    });
}, 1000); // Adjust the delay as needed to display the initial members

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("previewVideo");
    const toggleSoundBtn = document.getElementById("toggleSound");

    toggleSoundBtn.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            toggleSoundBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            toggleSoundBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
});
window.addEventListener('scroll', () => {
    // Always keep the navbar visible
    navbar.style.transform = 'translateY(0)';
    // Maintain the updated less-transparent background
    navbar.style.background = 'rgba(255, 255, 255, 0.455)';
});


