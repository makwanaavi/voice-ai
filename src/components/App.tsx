import { useEffect } from 'react';
import HeroSection from './HeroSection';
import FeatureCards from './FeatureCards';
import LiveDemo from './LiveDemo';
import UseCases from './UseCases';
import Integrations from './Integrations';
import Security from './Security';
import DevHub from './DevHub';
import Testimonials from './Testimonials';
import MobileSDK from './MobileSDK';
import FinalCTA from './FinalCTA';
import useLenis from './useLenis';

function App() {
  useLenis();

  return (
    <>
      <HeroSection />
      <FeatureCards />
      <LiveDemo />
      <UseCases />
      <Integrations />
      <Security />
      <DevHub />
      <Testimonials />
      <MobileSDK />
      <FinalCTA />
    </>
  );
}

export default App;
