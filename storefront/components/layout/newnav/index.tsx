// 'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import CartModal from 'components/cart/modal';
import Search, { SearchSkeleton } from './search';
import { Rubik_Wet_Paint } from 'next/font/google';
import ShopConnectMenu from './shop-connectMenu';
import MobileMenu from './mobile-menu';
import { getMenu } from 'lib/shopify';

const rubikWetPaint = Rubik_Wet_Paint({ subsets: ['latin'], weight: '400' }); // Declare the font variable here

interface ProductType {
  title: string;
  path?: string;
}

const Newnav = async ({ productTypes }: { productTypes: (string | ProductType)[] }) => {
  const menu = await getMenu('shop-menu');
  return (
    <nav className="flex items-center justify-between bg-gray-100 p-4 px-8">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />{' '}
        </Suspense>
      </div>
      <div className="hidden space-x-4 md:flex">
        {/* Left: ShopConnect Menu (Dropdown on Hover) */}
        <ShopConnectMenu productTypes={menu} />
      </div>

      {/* Middle: Shop Name */}
      <div className="font-display text-4xl">
        <Link href="/" className={`${rubikWetPaint.className} text-[#90893C]`}>
          Bayou Budz
        </Link>
      </div>

      {/* Right: Search and Cart */}
      <div className="flex justify-center md:flex">
        <div className="hidden md:block">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
    </nav>
  );
};

export default Newnav;
