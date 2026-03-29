import Hero from '../sections/Hero.jsx';
import ServicesSnapshot from '../sections/ServicesSnapshot.jsx';
import Differentiators from '../sections/Differentiators.jsx';
import ImageShowcase from '../sections/ImageShowcase.jsx';
import Results from '../sections/Results.jsx';
import CTA from '../sections/CTA.jsx';
import useAnalytics from '../hooks/useAnalytics.js';

const Home = () => {
  useAnalytics('Home');

  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <ServicesSnapshot />
      <Differentiators />
      <ImageShowcase />
      <Results />
      <CTA />
    </div>
  );
};

export default Home;
