import type { Metadata } from 'next';

import Link from 'next/link';
import { Suspense } from 'react';
import MaintenancePage from 'components/layout/maintenancePage';

export const metadata = {
  description: '',
  openGraph: {
    type: 'website'
  }
};

export default function Aboutus() {
  return (
    <div>
      About Us
      <MaintenancePage />
    </div>
  );
}
