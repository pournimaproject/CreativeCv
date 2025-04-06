import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      className="relative w-14 h-16 flex items-center justify-center" 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      <svg 
        className="w-10 h-10 lamp-glow transition-all duration-500" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
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
    </button>
  );
}
