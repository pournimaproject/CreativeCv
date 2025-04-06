export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center">
        <div className="flex-1 md:pr-8 z-10">
          <p className="text-lg md:text-xl text-secondary font-medium mb-3 animate-slide-up">
            Hello there, I'm
          </p>
          <h1 
            className="text-4xl md:text-5xl xl:text-7xl font-poppins font-bold mb-6 animate-slide-up" 
            style={{ animationDelay: '0.1s' }}
          >
            <span>Pournima Pote</span>
          </h1>
          <h2 
            className="text-xl md:text-2xl xl:text-3xl leading-relaxed mb-8 font-medium animate-slide-up" 
            style={{ animationDelay: '0.2s' }}
          >
            I like making <span className="text-primary font-semibold">funny interactive things</span> with code. 
            I also <span className="text-secondary font-semibold">write & talk</span> about them.
          </h2>
          <div 
            className="flex flex-wrap gap-4 animate-slide-up" 
            style={{ animationDelay: '0.3s' }}
          >
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all relative overflow-hidden group shadow-lg shadow-primary/20"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white dark:bg-foreground opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-primary hover:border-primary/80 text-primary px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-transparent hover:shadow-primary/10"
            >
              About Me
            </a>
          </div>
        </div>
        <div 
          className="flex-1 mt-12 md:mt-0 relative z-10 animate-fade-in" 
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 animate-float">
            {/* Abstract decorative shapes */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
                <path 
                  fill="currentColor" 
                  d="M46.5,-57.2C59.1,-46.3,67.9,-30.7,71.3,-13.7C74.8,3.3,72.8,21.6,64,36.5C55.2,51.4,39.4,62.9,21.5,69.5C3.6,76.1,-16.4,77.9,-32.3,70.7C-48.2,63.6,-59.9,47.6,-67.4,29.3C-74.8,11,-77.9,-9.7,-71.4,-26.5C-65,-43.3,-48.9,-56.3,-32.4,-64.9C-15.9,-73.6,0.9,-77.9,16.5,-74C31.9,-70.1,33.9,-68.1,46.5,-57.2Z" 
                  transform="translate(100 100)" 
                  className="fill-primary/15"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-60 h-60 md:w-72 md:h-72 bg-secondary/20 rounded-full">
                <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80" 
                    alt="Pournima Pote" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
