'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-rose-200">
      <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-red-700 animate-pulse">
            💕 A Special Message 💕
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            I have something special to show you...
          </p>
          
          <p className="text-lg text-gray-700">
            Before we get to the important part, I want to remind you of a few things about yourself.
          </p>
        </div>

        <Link href="/compliments">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg">
            Continue Reading 💌
          </button>
        </Link>
      </main>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
