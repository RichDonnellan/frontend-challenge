import React from 'react';
import Nav from './Nav';
import Hero from './Hero';

const Header = () => (
  <>
    <Nav />
    <header className="text-black">
      <Hero />
    </header>
  </>
);

export default Header;
