'use client';

import { useState } from 'react';
import Link from 'next/link';

const compliments = [
  "The way you carry yourself with such grace and elegance is mesmerizing 👑",
  "Your eyes hold entire universes of warmth and kindness ",
  "The natural way you care for others makes you absolutely radiant ",
  "The confidence you have is truly inspiring and attractive ",
  "The way you think and express yourself is captivating ",
];

export default function Compliments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCompliment = () => {
    setCurrentIndex((prev) => (prev + 1) % compliments.length);
  };

  const prevCompliment = () => {
    setCurrentIndex((prev) => (prev - 1 + compliments.length) % compliments.length);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-300 via-purple-200 to-red-200">
      <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-900">
          Things About You 💝
        </h2>

        {/* Compliment Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 min-h-64 flex items-center justify-center border-4 border-pink-300">
          <p className="text-3xl md:text-4xl font-bold text-purple-800 leading-relaxed">
            {compliments[currentIndex]}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-6 items-center">
          <button
            onClick={prevCompliment}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-110"
          >
            ← Previous
          </button>

          <div className="text-xl font-semibold text-purple-900">
            {currentIndex + 1} / {compliments.length}
          </div>

          <button
            onClick={nextCompliment}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-110"
          >
            Next →
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex gap-2 justify-center flex-wrap">
          {compliments.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              title={`Go to compliment ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-red-500 scale-125'
                  : 'bg-purple-300 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Link href="/poems">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg mt-6">
            Continue to Poems ➜
          </button>
        </Link>
      </main>
    </div>
  );
}
