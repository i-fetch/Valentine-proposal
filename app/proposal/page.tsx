'use client';

import { useState } from 'react';
import Link from 'next/link';

const pleadingMessages = [
  "Are you sure? 🥺",
  "Please reconsider... 💔",
  "My heart can't take this... 💔💔",
  "Give me another chance! 🙏",
  "You're breaking my heart! 😢",
  "I'll fast for 40 days and 40 nights 🥺",
  "Biko!! 🙏💔✨",
  "What if I kneel properly? 💍",
  "Click yes nauuu "
];

export default function Proposal() {
  const [answered, setAnswered] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const moveNoButton = () => {
    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 4;

    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;

    setNoClickCount((c) => c + 1);
    setPosition({ x, y });
  };

  const message =
    noClickCount > 0
      ? pleadingMessages[Math.min(noClickCount - 1, pleadingMessages.length - 1)]
      : null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 overflow-hidden px-4">

      {/* Subtle glow blobs */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-rose-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(window.innerWidth < 640 ? 40 : 80)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                animation: `fall ${2 + Math.random()}s linear forwards`,
              }}
            >
              {['💖', '✨', '🌹', '🎉'][i % 4]}
            </div>
          ))}
        </div>
      )}

      {!answered ? (
        <main className="relative z-10 flex flex-col items-center text-center gap-8 max-w-xl w-full">

          <h1 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400
                         text-[clamp(2.2rem,8vw,4rem)]">
            Will You Be My Valentine?
          </h1>

          <p className="text-pink-200/80 text-[clamp(1.1rem,4vw,1.6rem)] font-semibold">
            You make life sweeter 💕
          </p>

          {message && (
            <div className="bg-gray-900/80 border border-pink-500/40 rounded-2xl px-6 py-4 shadow-xl animate-bounce">
              <p className="text-[clamp(1.2rem,5vw,1.8rem)] font-bold text-pink-300">
                {message}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="relative mt-6 flex items-center justify-center gap-6 h-32">

            <button
              onClick={() => {
                setAnswered(true);
                setShowConfetti(true);
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600
                         text-white font-black rounded-full
                         px-10 py-4 text-[clamp(1.1rem,4vw,1.5rem)]
                         shadow-xl active:scale-95 transition"
            >
              Yes 💚
            </button>

            <button
              onClick={moveNoButton}
              onTouchStart={moveNoButton}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className="bg-gradient-to-r from-red-500 to-pink-600
                         text-white font-black rounded-full
                         px-10 py-4 text-[clamp(1.1rem,4vw,1.5rem)]
                         shadow-xl transition-transform duration-200"
            >
              No 💔
            </button>
          </div>

        </main>
      ) : (
        <main className="relative z-10 flex flex-col items-center text-center gap-8 max-w-xl">

          <h2 className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400
                         text-[clamp(3rem,10vw,5rem)] animate-bounce">
            YES!!! 💖
          </h2>

          <p className="text-[clamp(1.5rem,6vw,2.2rem)] font-bold text-pink-200">
            You just made me the happiest person alive 🥹
          </p>

          <div className="bg-gray-900/80 border border-pink-500/40 rounded-2xl p-6 shadow-xl">
            <p className="text-pink-100 text-lg leading-relaxed">
              Await my gift  💕  
              Forever starts now Muahhh.
            </p>
          </div>

          <Link href="/">
            <button className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-red-600
                               text-white font-bold shadow-lg active:scale-95 transition">
              Start Over 
            </button>
          </Link>

        </main>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
