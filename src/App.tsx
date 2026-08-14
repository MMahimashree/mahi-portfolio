import GalaxyBackground from '@/components/GalaxyBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import AIBuilding from '@/sections/AIBuilding';
import Projects from '@/sections/Projects';
import Teaching from '@/sections/Teaching';
import Leadership from '@/sections/Leadership';
import Skills from '@/sections/Skills';
import Resume from '@/sections/Resume';
import Contact from '@/sections/Contact';
import FinalCTA from '@/sections/FinalCTA';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <GalaxyBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AIBuilding />
        <Projects />
        <Teaching />
        <Leadership />
        <Skills />
        <Resume />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
