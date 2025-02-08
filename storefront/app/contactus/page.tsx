import type { Metadata } from 'next';

import Link from 'next/link';
import { Suspense } from 'react';
import ContactForm from 'components/contactus';

export const metadata = {
  description: '',
  openGraph: {
    type: 'website'
  }
};

export default function Aboutus() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
