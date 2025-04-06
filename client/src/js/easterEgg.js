// Konami code Easter egg
export function setupEasterEgg() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiCodePosition = 0;
  
  document.addEventListener('keydown', (e) => {
    const key = e.key;
    const requiredKey = konamiCode[konamiCodePosition];
    
    if (key === requiredKey) {
      konamiCodePosition++;
      
      if (konamiCodePosition === konamiCode.length) {
        activateEasterEgg();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  // Easter egg activation
  function activateEasterEgg() {
    const easterEgg = document.getElementById('easterEgg');
    if (easterEgg) {
      easterEgg.style.opacity = '1';
      easterEgg.style.pointerEvents = 'auto';
      
      // Play a fun sound
      playEasterEggSound();
    }
  }
  
  // Play sound for easter egg
  function playEasterEggSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((note, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.value = note;
        
        gainNode.gain.value = 0.1;
        
        const startTime = audioContext.currentTime + index * 0.1;
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.2);
      });
    } catch (e) {
      console.log('Web Audio API not supported');
    }
  }
  
  // Close Easter egg
  const closeEasterEggButton = document.getElementById('closeEasterEgg');
  if (closeEasterEggButton) {
    closeEasterEggButton.addEventListener('click', () => {
      const easterEgg = document.getElementById('easterEgg');
      if (easterEgg) {
        easterEgg.style.opacity = '0';
        easterEgg.style.pointerEvents = 'none';
      }
    });
  }
}
