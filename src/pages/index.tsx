// src/pages/index.tsx

import Link from 'next/link';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Welcome to the Personality Test</h1>
    <Link href="/test">
      <p className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700">Start personality test</p>
    </Link>
  </div>
);

export default Home;
