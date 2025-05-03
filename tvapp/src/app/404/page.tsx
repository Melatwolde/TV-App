// filepath: 
'use client';

import Link from 'next/link';
import NavBar from '@/app/components/header';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <NavBar />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/">
        <span className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
          Go Back Home
        </span>
      </Link>
    </div>
  );
};

export default Custom404;