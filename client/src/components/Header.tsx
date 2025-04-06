import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track scrolling to add shadow/background to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 py-4 md:py-5 transition-all duration-300 ${
      isScrolled ? 'bg-card/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-poppins font-bold relative group ml-12 sm:ml-0">
          <span className="text-primary">{'{'}</span>
          <span>Pournima</span>
          <span className="text-primary">{'}'}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <a href="#projects" className="hover:text-primary relative py-1 px-2">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-primary relative py-1 px-2">
                  Articles
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary relative py-1 px-2">
                  About Me
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5 group" 
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-foreground rounded-full group-hover:bg-primary transition-all ${
              mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-foreground rounded-full group-hover:bg-primary transition-all ${
              mobileMenuOpen ? 'opacity-0' : 'group-hover:w-4'
            }`}></span>
            <span className={`w-4 h-0.5 bg-foreground rounded-full group-hover:w-6 group-hover:bg-primary transition-all ${
              mobileMenuOpen ? 'transform -rotate-45 -translate-y-2 w-6' : ''
            }`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-card/95 backdrop-blur-md mt-4 py-4 px-4 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#projects" 
                className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#articles" 
                className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Articles
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
