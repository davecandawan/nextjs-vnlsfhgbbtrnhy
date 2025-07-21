'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-black text-white shadow-sm">
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 bg-black">
        <div className="flex justify-between items-stretch">
          {/* Left Side: Hamburger Menu */}
          <div className="flex items-center justify-start w-[20%] sm:pl-0">
            <div className="relative">
              <button
                className="p-2 text-white focus:outline-none bg-transparent border-none hover:bg-transparent relative z-50"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <span className="text-2xl">☰</span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`${isMenuOpen ? 'block' : 'hidden'} 
                absolute left-0 top-full mt-0 w-48 bg-gray-800 rounded-b-md shadow-lg py-1 z-40`}
              >
                <Link
                  href="#benefits"
                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-white text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link
                  href="#faqs"
                  className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-white text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="w-auto sm:w-[40%] flex items-center justify-center mx-4 sm:mx-0">
            <div className="bg-white flex items-center justify-center py-2 px-6 sm:px-4 sm:w-full">
              <div style={{ height: '60px', width: '160px', position: 'relative' }}>
                <Image
                  src="/contentimages/VNSH-logow.avif"
                  alt="VNSH Holster"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side: Cart Icon */}
          <div className="flex items-center justify-end w-[20%] sm:pr-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/565375.png?v=1746039467"
                alt="Shopping Cart"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                style={{
                  minWidth: '24px',
                  minHeight: '24px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
