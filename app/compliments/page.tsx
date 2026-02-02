'use client';

import { useState } from 'react';
import Link from 'next/link';

const compliments = [
  "The way you carry yourself with such grace and elegance is mesmerizing 👑",
  "Your eyes hold entire universes of warmth and kindness ✨",
  "The natural way you care for others makes you absolutely radiant 💫",
  "The confidence you have is truly inspiring and attractive 🔥",
  "The way you think and express yourself is captivating 💎",
];

export default function Compliments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((i) => (i + 1) % compliments.length);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + compliments.length) % compliments.length);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 px-4 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          >
            {['💕', '✨', '🌹'][i % 3]}
          </div>
        ))}
      </div>

      <main className="relative z-10 w-full max-w-xl flex flex-col items-center text-center gap-10">

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400
                         text-[clamp(2.2rem,8vw,3.8rem)]">
            Things About You
          </h2>
          <p className="text-pink-200/80 text-[clamp(0.9rem,3.5vw,1.2rem)] tracking-wide">
            Every moment with you is a treasure
          </p>
        </div>

        {/* Compliment card */}
        <div className="relative w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-red-600 rounded-3xl blur opacity-30 animate-pulse" />
          <div className="relative bg-gray-900/80 rounded-3xl border border-pink-500/30
                          px-6 py-10 shadow-2xl backdrop-blur-lg">
            <p className="font-bold leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300
                          text-[clamp(1.3rem,5vw,1.9rem)] animate-fadeIn">
              {compliments[currentIndex]}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 flex-wrap">

          <button
            onClick={prev}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-600
                       text-white font-bold shadow-lg active:scale-95 transition"
          >
            ← Prev
          </button>

          <div className="px-5 py-2 rounded-full bg-gray-900/70 border border-pink-500/30
                          text-sm font-semibold text-pink-200">
            {currentIndex + 1} / {compliments.length}
          </div>

          <button
            onClick={next}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-600
                       text-white font-bold shadow-lg active:scale-95 transition"
          >
            Next →
          </button>
        </div>

        {/* Progress dots */}
        <div className="flex gap-3 mt-2">
          {compliments.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              title={`Go to compliment ${i + 1}`}
              className={`rounded-full transition-all ${
                i === currentIndex
                  ? 'w-4 h-4 bg-gradient-to-r from-pink-500 to-red-500 scale-125'
                  : 'w-3 h-3 bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <Link href="/poems">
          <button className="mt-6 px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-red-600
                             text-white font-black text-lg shadow-xl active:scale-95 transition">
            Continue to Poems ➜
          </button>
        </Link>

      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-30px); opacity: 0.6; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
