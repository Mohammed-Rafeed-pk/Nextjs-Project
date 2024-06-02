// app/creative/page.tsx
import Link from 'next/link';

export default function CreativePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-30 h-24 bg-white rounded-full animate-bounce">
        <h1 className="mt-8 text-lg font-bold text-gray-800 italic ml-4 mr-4">WELCOME TO CREATIVE PAGE</h1>
      </div>
      <Link legacyBehavior href="/">
        <a className="mt-4 p-2 bg-blue-500 text-white rounded">Back to Home</a>
      </Link>
    </div>
  );
}
