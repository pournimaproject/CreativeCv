import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('theme');
    // If there's a saved theme, use it; otherwise, default to 'light'
    return (savedTheme as Theme) || 'light';
  });

  // Apply theme class to html element and update localStorage
  useEffect(() => {
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      playToggleSound(newTheme);
      return newTheme;
    });
  };
  
  // Sound effect function for theme toggle
  const playToggleSound = (type: Theme) => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
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
  };

  return { theme, toggleTheme };
}
