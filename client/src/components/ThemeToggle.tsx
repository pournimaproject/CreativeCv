import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);
  
  const handlePullRope = () => {
    setIsPulling(true);
    setTimeout(() => {
      toggleTheme();
      setTimeout(() => {
        setIsPulling(false);
      }, 300);
    }, 200);
  };
  
  return (
    <div className="fixed top-0 left-12 z-50 select-none">
      {/* Rope */}
      <div 
        className="relative flex flex-col items-center cursor-pointer group"
        onClick={handlePullRope}
      >
        {/* Rope top part */}
        <div className="w-1 h-8 bg-foreground/60 group-hover:bg-primary transition-colors"></div>
        
        {/* Pull handle */}
        <div 
          className={`w-5 h-5 rounded-full bg-foreground/80 group-hover:bg-primary group-hover:scale-110 transition-all ${
            isPulling ? 'translate-y-2' : ''
          }`}
        ></div>
        
        {/* Rope bottom part */}
        <div 
          className={`w-1 h-16 bg-foreground/60 group-hover:bg-primary transition-all ${
            isPulling ? 'h-14' : 'h-16'
          }`}
        ></div>
        
        {/* Lamp */}
        <div 
          className={`relative transition-all ${
            isPulling ? 'translate-y-4' : 'animate-float'
          }`}
        >
          <svg 
            className="w-16 h-16 lamp-glow transition-all duration-500" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wire to ceiling */}
            <path 
              d="M12 0V3" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="stroke-foreground/60 group-hover:stroke-primary"
            />
            
            {/* Lamp Base */}
            <path 
              d="M9 22H15" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="stroke-foreground"
            />
            <path 
              d="M12 17V22" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="stroke-foreground"
            />
            
            {/* Lamp Shade */}
            <path 
              d="M7 14C7 14 8.5 17 12 17C15.5 17 17 14 17 14" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="stroke-foreground"
            />
            <path 
              d="M17 10C17 6.13401 14.866 3 12 3C9.13401 3 7 6.13401 7 10C7 11.933 7 14 7 14H17C17 14 17 11.933 17 10Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              className="stroke-foreground"
            />
            
            {/* Light Ray - Visible only in light mode */}
            <g className="transition-opacity duration-500 dark:opacity-0">
              <path 
                d="M12 1V2.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className="stroke-primary origin-bottom animate-bounce-slight"
              />
              <path 
                d="M18.364 4.22183L17.3033 5.28255" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className="stroke-primary origin-bottom-left animate-bounce-slight"
              />
              <path 
                d="M21 10.9999H19.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className="stroke-primary animate-bounce-slight"
              />
              <path 
                d="M5.63599 4.22183L6.69672 5.28255" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className="stroke-primary origin-bottom-right animate-bounce-slight"
              />
              <path 
                d="M3 10.9999H4.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                className="stroke-primary animate-bounce-slight"
              />
            </g>
            
            {/* Light Bulb - Visible only in dark mode */}
            <path 
              d="M12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5Z" 
              fill="currentColor" 
              className="fill-primary opacity-0 dark:opacity-100 transition-opacity duration-500"
            />
          </svg>
          
          {/* Visual tooltip hint */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background/80 backdrop-blur-md px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Pull to toggle theme
          </div>
        </div>
      </div>
    </div>
  );
}
