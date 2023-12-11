// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2">SaaSy Company</h2>
            <p>&copy; 2023 All rights reserved</p>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-white">Privacy Policy</a>
            <a href="#" className="text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
