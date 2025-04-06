import { useState, useEffect } from 'react';

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  const [konamiCodePosition, setKonamiCodePosition] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const requiredKey = konamiCode[konamiCodePosition];
      
      if (key === requiredKey) {
        const newPosition = konamiCodePosition + 1;
        setKonamiCodePosition(newPosition);
        
        if (newPosition === konamiCode.length) {
          activateEasterEgg();
          setKonamiCodePosition(0);
        }
      } else {
        setKonamiCodePosition(0);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiCodePosition]);

  const activateEasterEgg = () => {
    setIsVisible(true);
    playSound();
  };

  const closeEasterEgg = () => {
    setIsVisible(false);
  };

  const playSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-background/90 backdrop-blur-md transition-opacity duration-500"
      onClick={closeEasterEgg}
    >
      <div className="text-center p-8" onClick={(e) => e.stopPropagation()}>
        <div className="text-8xl mb-6 animate-bounce-slight">🎉</div>
        <h2 className="text-3xl font-poppins font-bold mb-4">You found the Easter egg!</h2>
        <p className="text-xl mb-6">Thanks for exploring my portfolio in detail!</p>
        <button 
          onClick={closeEasterEgg}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
}
