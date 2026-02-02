'use client';

import { useState } from 'react';
import Link from 'next/link';

const poems = [
  {
    title: "In Your Presence",
    text: `Every moment with you feels like a gentle dream,
Your laughter flows like a soft, warm stream,
In your eyes I find my home,
In your heart, I'm never alone.

You are the reason my heart beats true,
There's nothing in this world like loving you,
With every sunrise, my love grows anew,
My darling, I'm so devoted to you.`,
  },
  {
    title: "Forever Yours",
    text: `Like flowers reaching for the sun,
My soul reaches out to you as one,
You're the melody to my heart's song,
With you is where I belong.

Through every season, through every test,
You are the one I love the best,
My hand in yours, our futures bright,
You are my day, my moon, my night.`,
  },
  {
    title: "My Valentine",
    text: `What is love but you and me,
The greatest harmony I see?
Your touch ignites my burning flame,
My heart forever speaks your name.

I promise you my endless care,
My love for you beyond compare,
Today and always, come what may,
Be mine, my love, this Valentine's Day.`,
  },
];

export default function Poems() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPoem = () => {
    setCurrentIndex((prev) => (prev + 1) % poems.length);
  };

  const prevPoem = () => {
    setCurrentIndex((prev) => (prev - 1 + poems.length) % poems.length);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-300 via-pink-200 to-purple-200">
      <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-900">
          Poetry for You 
        </h2>

        {/* Poem Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-96 flex flex-col items-center justify-center border-4 border-rose-300">
          <h3 className="text-3xl md:text-4xl font-bold text-rose-800 mb-8">
            {poems[currentIndex].title}
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line italic">
            {poems[currentIndex].text}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <button
            onClick={prevPoem}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-110"
          >
            ← Previous
          </button>

          <div className="text-xl font-semibold text-rose-900">
            {currentIndex + 1} / {poems.length}
          </div>

          <button
            onClick={nextPoem}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-110"
          >
            Next →
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2 justify-center">
          {poems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              title={`Go to poem ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-rose-300 hover:bg-rose-400'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Link href="/proposal">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg mt-6">
            The Big Question ➜
          </button>
        </Link>
      </main>
    </div>
  );
}
