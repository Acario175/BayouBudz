'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="relative">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="q"
        placeholder="Search for products...!"
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="rounded-md border px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500">
        <MagnifyingGlassIcon />
        {/* className="h-4" */}
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products   ..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
}
