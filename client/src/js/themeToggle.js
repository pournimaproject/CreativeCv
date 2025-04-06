// Theme toggle functionality
export function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
  }
  
  // Toggle theme function
  function toggleTheme() {
    htmlElement.classList.toggle('dark');
    
    // Save theme preference to localStorage
    if (htmlElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      // Play sound effect
      playSound('off');
    } else {
      localStorage.setItem('theme', 'light');
      // Play sound effect
      playSound('on');
    }
  }
  
  // Sound effect function (using Web Audio API)
  function playSound(type) {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'on') {
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
  
  // Event listener for theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
}
