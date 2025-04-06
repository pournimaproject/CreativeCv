export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Interactive Dashboard",
      description: "A responsive analytics dashboard with real-time data visualization and customizable widgets.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      category: "Frontend",
      categoryClass: "bg-primary/20 text-primary",
      tags: ["React", "D3.js", "CSS Grid"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      category: "Full Stack",
      categoryClass: "bg-secondary/20 text-secondary",
      tags: ["Next.js", "Node.js", "MongoDB"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "Interactive Game",
      description: "A browser-based arcade game with fun animations, score tracking, and multiple levels.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      category: "Frontend",
      categoryClass: "bg-primary/20 text-primary",
      tags: ["JavaScript", "Canvas API", "GSAP"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 inline-block">
            <span className="relative">
              My Projects
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-primary"></path>
              </svg>
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            Check out some of my recent work. Hover and click to discover interactive elements!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="project-card bg-card rounded-xl overflow-hidden shadow-lg">
              <div className="relative overflow-hidden h-48 bg-secondary/10 group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">Click to view details</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-poppins font-semibold mb-2">{project.title}</h3>
                  <span className={`${project.categoryClass} text-xs px-2 py-1 rounded-full`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-background px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.links.demo} className="text-primary font-medium text-sm flex items-center group">
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="flex space-x-2">
                    <a href={project.links.github} aria-label="GitHub repository" className="text-foreground/70 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.links.demo} aria-label="Live demo" className="text-foreground/70 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-card border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 -ml-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 -mr-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
