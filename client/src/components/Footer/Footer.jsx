import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} E-Commerce G8. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;