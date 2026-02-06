import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Protector from '../components/landing/Protector';
import HolisticMentor from '../components/landing/HolisticMentor';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Protector />
        <HolisticMentor />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
