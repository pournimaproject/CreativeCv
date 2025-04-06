export default function AboutSection() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", "UI/UX Design", "GSAP", "Figma"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80" 
                  alt="Pournima Pote" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 w-64 h-64 rounded-2xl border-4 border-dashed border-secondary opacity-30 -z-10"></div>
              
              {/* Tech stack bubbles */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-float">
                <span className="font-bold text-sm">HTML</span>
              </div>
              <div 
                className="absolute -bottom-6 left-24 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-float" 
                style={{ animationDelay: '0.5s' }}
              >
                <span className="font-bold text-sm">CSS</span>
              </div>
              <div 
                className="absolute top-24 -right-8 w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg animate-float" 
                style={{ animationDelay: '1s' }}
              >
                <span className="font-bold text-sm">JS</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6 inline-block">
              <span className="relative">
                About Me
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-primary"></path>
                </svg>
              </span>
            </h2>
            
            <div className="space-y-4 text-lg">
              <p>
                Hi, I'm Pournima! I'm a creative developer who loves building engaging, interactive experiences on the web. With a background in both design and development, I enjoy bringing ideas to life through code.
              </p>
              
              <p>
                My journey began with a fascination for how websites work, which led me to explore HTML, CSS, and JavaScript. Over time, I've expanded my toolkit to include various frameworks and technologies, always driven by the goal of creating delightful user experiences.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new design trends, writing tutorials, or speaking at community events about web development topics I'm passionate about.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-poppins font-semibold mb-4">My Toolbox</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-card rounded-lg border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-transparent border-2 border-secondary hover:border-secondary/80 text-secondary rounded-lg font-medium flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 -ml-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
