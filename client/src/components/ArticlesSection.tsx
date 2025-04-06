export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Creating Engaging Animations with CSS and GSAP",
      date: "May 12, 2023",
      excerpt: "Learn how to create smooth, performance-optimized animations that enhance user experience without sacrificing accessibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      category: "primary",
      tags: ["Animation", "CSS", "UX"]
    },
    {
      id: 2,
      title: "Building Accessible Interactive Components",
      date: "April 5, 2023",
      excerpt: "Dive into techniques for creating beautiful, interactive UI components that work for everyone, including keyboard and screen reader users.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      category: "secondary",
      tags: ["Accessibility", "JavaScript", "ARIA"]
    },
    {
      id: 3,
      title: "The Art of Color Theory in Web Design",
      date: "March 18, 2023",
      excerpt: "Explore color psychology and practical tips for creating balanced, accessible, and emotionally effective color schemes for your websites.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      category: "primary",
      tags: ["Design", "Color Theory", "CSS"]
    },
    {
      id: 4,
      title: "Optimizing Web Performance for Better UX",
      date: "February 25, 2023",
      excerpt: "Learn the key metrics and techniques to make your websites lightning fast, including lazy loading, code splitting, and image optimization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      category: "secondary",
      tags: ["Performance", "Optimization", "UX"]
    }
  ];

  return (
    <section id="articles" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4 inline-block">
            <span className="relative">
              Latest Articles
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-secondary"></path>
              </svg>
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mt-4">
            Thoughts, tutorials, and insights about web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => (
            <div key={article.id} className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 flex gap-5">
                <div 
                  className={`flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full 
                    ${article.category === 'primary'
                      ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                      : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
                    } 
                    transition-all duration-300`}
                >
                  {article.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs text-foreground/60">{article.date}</span>
                  <h3 
                    className={`text-xl font-poppins font-semibold mt-1 mb-2 
                      ${article.category === 'primary'
                        ? 'group-hover:text-primary'
                        : 'group-hover:text-secondary'
                      } 
                      transition-colors`}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full bg-background">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-card border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary/10 transition-colors"
          >
            Read All Articles
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 -mr-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 -ml-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
