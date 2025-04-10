// Theme Toggling
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme from localStorage, default to 'light' if none exists
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Set up theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const lampKnob = document.querySelector('.lamp-knob');
    const lampRopeBottom = document.querySelector('.lamp-rope-bottom');
    const lamp = document.querySelector('.lamp');
    
    // Add event listener to the theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    function toggleTheme() {
        // Create pull animation effect
        lampKnob.style.transform = 'translateY(8px)';
        lampRopeBottom.style.height = '70px';
        lamp.style.animation = 'none';
        lamp.style.transform = 'translateY(10px)';
        
        // After a short delay, toggle the theme and reset animation
        setTimeout(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Change theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Play sound effect
            playToggleSound(newTheme);
            
            // Reset animation after a delay
            setTimeout(() => {
                lampKnob.style.transform = '';
                lampRopeBottom.style.height = '';
                lamp.style.animation = '';
                lamp.style.transform = '';
            }, 300);
        }, 200);
    }
    
    // Sound effect for theme toggle
    function playToggleSound(type) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'light') {
                oscillator.frequency.value = 500;
                oscillator.frequency.exponentialRampToValueAtTime(
                    800, audioContext.currentTime + 0.2
                );
            } else {
                oscillator.frequency.value = 800;
                oscillator.frequency.exponentialRampToValueAtTime(
                    500, audioContext.currentTime + 0.2
                );
            }
            
            gainNode.gain.value = 0.1;
            gainNode.gain.exponentialRampToValueAtTime(
                0.001, audioContext.currentTime + 0.3
            );
            
            oscillator.start();
            setTimeout(() => oscillator.stop(), 300);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    // Setup smooth scrolling for all internal links
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup project card animations
    setupProjectCardAnimations();
    
    // Setup Easter Egg (Konami Code)
    setupEasterEgg();
});

// Smooth Scrolling for Internal Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    // We'll set a flag to prevent animation issues
    let hasAnimated = false;

    // First, make sure all elements are visible initially
    const elementsToAnimate = document.querySelectorAll('.section-title, .projects-grid .project-card, .articles-grid .article-card, .about-content > div, .profile-image, .hero-image');
    
    // Make all elements visible by default
    elementsToAnimate.forEach(element => {
        element.style.opacity = '1';
    });
    
    // Then set up smoother animations for scroll effects
    window.addEventListener('scroll', function() {
        // Only run once to prevent layout thrashing
        if (!hasAnimated) {
            hasAnimated = true;
            
            // Add a nice fade-in class to elements as they scroll into view
            elementsToAnimate.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('animate-fade-in');
                }
            });
            
            // Reset the flag after a short delay so animations can happen again on further scrolling
            setTimeout(() => {
                hasAnimated = false;
            }, 150);
        }
    });
}

// Helper function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Project Card Animations
function setupProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
}

// Easter Egg (Konami Code)
function setupEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;
    
    document.addEventListener('keydown', function(e) {
        // Get the correct key, regardless of case
        const key = e.key.toLowerCase();
        
        // Check if the key matches the current position in the Konami code
        const requiredKey = konamiCode[konamiCodePosition].toLowerCase();
        
        if (key === requiredKey) {
            konamiCodePosition++;
            
            // If the entire code has been entered, activate the Easter egg
            if (konamiCodePosition === konamiCode.length) {
                activateEasterEgg();
                konamiCodePosition = 0; // Reset position
            }
        } else {
            konamiCodePosition = 0; // Reset position on mistake
        }
    });
    
    function activateEasterEgg() {
        // Play a fun sound
        playEasterEggSound();
        
        // Show the Easter egg element
        const easterEgg = document.getElementById('easterEgg');
        easterEgg.classList.add('active');
        
        // Set up close button
        document.getElementById('closeEasterEgg').addEventListener('click', () => {
            easterEgg.classList.remove('active');
        });
    }
    
    function playEasterEggSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a more complex sound for the Easter egg
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator1.type = 'triangle';
            oscillator2.type = 'sine';
            
            oscillator1.frequency.value = 400;
            oscillator2.frequency.value = 600;
            
            gainNode.gain.value = 0.1;
            
            // Create a short melody
            const now = audioContext.currentTime;
            
            oscillator1.frequency.setValueAtTime(400, now);
            oscillator1.frequency.exponentialRampToValueAtTime(600, now + 0.1);
            oscillator1.frequency.exponentialRampToValueAtTime(800, now + 0.2);
            oscillator1.frequency.exponentialRampToValueAtTime(1000, now + 0.3);
            
            oscillator2.frequency.setValueAtTime(600, now);
            oscillator2.frequency.exponentialRampToValueAtTime(900, now + 0.1);
            oscillator2.frequency.exponentialRampToValueAtTime(1200, now + 0.2);
            oscillator2.frequency.exponentialRampToValueAtTime(1500, now + 0.3);
            
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.2, now + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.1, now + 0.2);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            
            oscillator1.start();
            oscillator2.start();
            
            setTimeout(() => {
                oscillator1.stop();
                oscillator2.stop();
            }, 500);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
}