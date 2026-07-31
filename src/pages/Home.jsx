import React, { useEffect } from 'react';
import Hero from '@components/sections/Hero';
import Services from '@components/sections/Services';
import Cases from '@components/sections/Cases';
import Trust from '@components/sections/Trust';
import FinalCTA from '@components/sections/FinalCTA';
import { useScrollAnimation } from '@utils/hooks';
import SEO from '@utils/seo';

const Home = () => {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO />
      <div className="page active">
        <Hero />
        <Services />
        <Cases />
        <Trust />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
