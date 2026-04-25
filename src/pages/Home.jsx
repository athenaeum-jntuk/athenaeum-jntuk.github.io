import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import DomainsSection from '../components/Domains';
import Team from '../components/Team';
import JoinCTA from '../components/JoinCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DomainsSection />
      <Team />
      <JoinCTA />
      <Footer />
    </>
  );
}
