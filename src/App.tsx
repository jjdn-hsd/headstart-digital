import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { NavBar } from './pages/Navigation';
import ScrollProgress from './pages/Navigation/ScrollProgress';
import ScrollToTop from './pages/Navigation/ScrollToTop';
import MetaTags from './components/SEO/MetaTags';
import Hero from './pages/Hero/Hero';
import Services from './pages/Services/Services';
import Works from './pages/Works/Works';
import Industries from './pages/Industries/Industries';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

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
          <Works />
          <Industries />
          <About />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;