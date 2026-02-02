'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl relative z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-pink-200 to-red-200 animate-pulse drop-shadow-lg">
             A Special Message to You. 
          </h1>
          
          <p className="text-xl md:text-2xl text-white leading-relaxed drop-shadow-md font-light">
            I have something special to show you...
          </p>
          
          <p className="text-lg text-pink-100 drop-shadow-md">
            Before we get to the important part, I want to remind you of a few things about yourself.
          </p>
        </div>

        <Link href="/compliments">
          <button className="bg-gradient-to-r from-black to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 backdrop-blur-sm border border-red-300 border-opacity-50">
            Please Proceed ...
          </button>
        </Link>
      </main>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
