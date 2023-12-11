import React from 'react';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-4xl">SaaSy</div>
        <div className="space-x-10 font-bold">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">About</button>
          <button onClick={() => scrollToSection('features')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Features</button>
          <button onClick={() => scrollToSection('clients')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Clients</button>
          <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Pricing</button>
          <button onClick={() => scrollToSection('team')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Team</button>
          <button onClick={() => scrollToSection('blogs')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Blogs</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-500 transition-transform transform hover:scale-110">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
