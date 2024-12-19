import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { NavBar } from './pages/Navigation';
import ScrollProgress from './pages/Scroll/ScrollProgress';
import ScrollToTop from './pages/Scroll/ScrollToTop';
import MetaTags from './components/SEO/MetaTags';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Works from './pages/Works';
import Industry from './pages/Industry';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <MetaTags />
        <ScrollProgress />
        <NavBar />
        <main>
          <Hero />
          <Services />
          <Industry />
          <Works />
          <About />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;