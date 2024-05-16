import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200  p-4 ">
      <div className=" mx-auto bg-gray-200">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Your Company Name</p>
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
