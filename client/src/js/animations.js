// Smooth scrolling for anchor links
export function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      }
    });
  });
}

// Animation for elements on scroll
export function setupScrollAnimations() {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (elementPosition.top < windowHeight * 0.8) {
        element.classList.add('animate-fade-in');
      }
    });
  };
  
  // Run once on load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
}

// Hover animations for project cards
export function setupProjectCardAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    });
  });
}

// Initialize all animations
export function initializeAnimations() {
  setupSmoothScrolling();
  setupScrollAnimations();
  setupProjectCardAnimations();
}
