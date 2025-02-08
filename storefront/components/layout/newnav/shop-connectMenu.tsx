'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ShopConnectMenu = ({ productTypes }) => {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isConnectMenuOpen, setIsConnectMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const shopTimeoutRef = useRef(null);
  const connectTimeoutRef = useRef(null);

  // Detect if it's mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close other menus when opening one
  const openShopMenu = () => {
    clearTimeout(shopTimeoutRef.current);
    setIsShopMenuOpen(true);
    setIsConnectMenuOpen(false); // Close Connect menu
  };

  const closeShopMenu = () => {
    if (!isMobile) {
      shopTimeoutRef.current = setTimeout(() => {
        setIsShopMenuOpen(false);
      }, 75);
    }
  };

  const openConnectMenu = () => {
    clearTimeout(connectTimeoutRef.current);
    setIsConnectMenuOpen(true);
    setIsShopMenuOpen(false); // Close Shop menu
  };

  const closeConnectMenu = () => {
    if (!isMobile) {
      connectTimeoutRef.current = setTimeout(() => {
        setIsConnectMenuOpen(false);
      }, 75);
    }
  };

  return (
    <div className="flex space-x-4">
      {/* Shop Menu */}
      <div className="relative">
        <button
          onMouseEnter={!isMobile ? openShopMenu : undefined}
          onMouseLeave={!isMobile ? closeShopMenu : undefined}
          onClick={isMobile ? openShopMenu : undefined}
          className="font-medium text-gray-800 hover:text-gray-600"
        >
          Shop
        </button>
        {isShopMenuOpen && productTypes.length ? (
          <div
            className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseEnter={!isMobile ? openShopMenu : undefined}
            onMouseLeave={!isMobile ? closeShopMenu : undefined}
          >
            <ul className="py-2">
              {productTypes.map((item, index) => (
                <li key={`shop-${index}`} className="px-4 py-2 hover:bg-gray-200">
                  <Link href={item.path || '/'} className="px-4 py-2 hover:bg-gray-200">
                    {item.title || 'Untitled'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Connect Menu */}
      <div className="relative">
        <button
          onMouseEnter={!isMobile ? openConnectMenu : undefined}
          onMouseLeave={!isMobile ? closeConnectMenu : undefined}
          onClick={isMobile ? openConnectMenu : undefined}
          className="font-medium text-gray-800 hover:text-gray-600"
        >
          Learn & Connect
        </button>
        {isConnectMenuOpen && (
          <div
            className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg"
            onMouseEnter={!isMobile ? openConnectMenu : undefined}
            onMouseLeave={!isMobile ? closeConnectMenu : undefined}
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

export default ShopConnectMenu;
