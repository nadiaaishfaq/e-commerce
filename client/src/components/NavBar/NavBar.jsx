import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const NavBar = () => {
  return (
    <nav className="bg-yellow-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl text-white font-semibold">E-Commerce G8</a>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">About</a></li>
          <li><a href="/category" className="text-white">Category</a></li>
          <li><a href="/signup" className="text-white">Sign Up</a></li>
          <li><a href="/login" className="text-white">Log In</a></li>
          <li>
            <a href="/cart" className="text-white">
              <MdShoppingCart size={24} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
