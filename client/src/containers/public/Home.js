import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import '../../assets/css/style.css';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <div className={`navigation-container ${scrolled ? 'fixed-navbar' : ''}`}>
        <Navigation />
      </div>
      <div className='w-1100 flex flex-col items-center justify-start'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
