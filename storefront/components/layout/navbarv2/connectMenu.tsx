'use client'; // This must be here for interactivity

import { useState, useRef } from 'react';
import Link from 'next/link';

const ConnectMenu = ({ productTypes }) => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isConnectMenuOpen, setIsConnectMenuOpen] = useState(false);

  const shopTimeoutRef = useRef(null);
  const connectTimeoutRef = useRef(null);

  // Shop Menu Handlers
  const openShopMenu = () => {
    clearTimeout(shopTimeoutRef.current);
    setIsShopMenuOpen(true);
  };

  const closeShopMenu = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopMenuOpen(false);
    }, 75); // Delay to prevent flickering
  };

  // Connect Menu Handlers
  const openConnectMenu = () => {
    clearTimeout(connectTimeoutRef.current);
    setIsConnectMenuOpen(true);
  };

  const closeConnectMenu = () => {
    connectTimeoutRef.current = setTimeout(() => {
      setIsConnectMenuOpen(false);
    }, 75); // Delay to prevent flickering
  };

  return (
    <div className="flex space-x-4">
      {/* Shop Menu */}
      <div className="relative">
        <button
          onMouseEnter={openShopMenu}
          onMouseLeave={closeShopMenu}
          className="font-medium text-gray-800 hover:text-gray-600"
        >
          Shop
        </button>
        {isShopMenuOpen && (
          <div
            className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseEnter={openShopMenu}
            onMouseLeave={closeShopMenu}
          >
            <ul className="py-2">
              {productTypes.map((type) => (
                <li key={type} className="px-4 py-2 hover:bg-gray-200">
                  <Link
                    href={`/products?type=${type}`}
                    className="block text-gray-800"
                    onClick={() => setIsShopMenuOpen(false)}
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Connect Menu */}
      <div className="relative">
        <button
          onMouseEnter={openConnectMenu}
          onMouseLeave={closeConnectMenu}
          className="font-medium text-gray-800 hover:text-gray-600"
        >
          Learn & Connect
        </button>
        {isConnectMenuOpen && (
          <div
            className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseEnter={openConnectMenu}
            onMouseLeave={closeConnectMenu}
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/aboutus" className="block text-gray-800">
                  About Us
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/contactus" className="block text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
