import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ArticlesSection from '@/components/ArticlesSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import EasterEgg from '@/components/EasterEgg';

function App() {
  return (
    <div className="custom-cursor">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="wave-divider"></div>
        
        <ProjectsSection />
        
        <div className="wave-divider"></div>
        
        <ArticlesSection />
        
        <div className="wave-divider"></div>
        
        <AboutSection />
      </main>
      
      <Footer />
      <EasterEgg />
    </div>
  );
}

export default App;
