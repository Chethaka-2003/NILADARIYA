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
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(5px)';
        navbar.style.boxShadow = 'none';
    }
    
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
// Team Carousel functionality
const teamMembers = document.querySelectorAll('.team-member');
let currentMemberIndex = 0;
const totalMembers = teamMembers.length;

function updateTeamCarousel() {
    teamMembers.forEach((member, index) => {
        member.classList.remove('active', 'prev', 'next');
        
        if (index === currentMemberIndex) {
            member.classList.add('active');
        } else if (index === (currentMemberIndex - 1 + totalMembers) % totalMembers) {
            member.classList.add('prev');
        } else if (index === (currentMemberIndex + 1) % totalMembers) {
            member.classList.add('next');
        }
    });
}

function nextTeamMember() {
    currentMemberIndex = (currentMemberIndex + 1) % totalMembers;
    updateTeamCarousel();
}

function prevTeamMember() {
    currentMemberIndex = (currentMemberIndex - 1 + totalMembers) % totalMembers;
    updateTeamCarousel();
}

// Auto-cycle team members
let teamCarouselInterval = setInterval(nextTeamMember, 3000);

// Reset interval on manual navigation
function resetInterval() {
    clearInterval(teamCarouselInterval);
    teamCarouselInterval = setInterval(nextTeamMember, 3000);
}

// Initialize team carousel
updateTeamCarousel();