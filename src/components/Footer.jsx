import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-8 font-secondary">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-logo font-bold">The Wildflowers</h1>
            <p>&copy; 2024 The Wildflowers. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
