import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import AccessContact from './components/AccessContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <AccessContact />
    </div>
  );
};

export default App;
