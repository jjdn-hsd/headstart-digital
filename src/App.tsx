import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from './components/Navigation/NavBar';
import ScrollProgress from './components/Navigation/ScrollProgress';
import ScrollToTop from './components/Navigation/ScrollToTop';
import MetaTags from './components/SEO/MetaTags';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Industries from './components/Industries/Industries';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

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