'use client';

import { useState } from 'react';
import Link from 'next/link';

const pleadingMessages = [
  "Are you sure? 🥺",
  "Please reconsider... 💔",
  "But I love you so much! 😭",
  "My heart can't take this... 💔💔",
  "Give me another chance! 🙏",
  "You're breaking my heart! 😢",
  "I promise I'll make you happy! 💕",
  "Just say yes, please? 🥺🥺",
  "I can't live without hearing yes from you! 😩",
  "PLEASE!! 🙏💔✨",
  "Okay, what if I get down on one knee? 💍",
];

export default function Proposal() {
  const [answered, setAnswered] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    // Move the No button to a random position
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const getPleasingMessage = () => {
    if (noClickCount === 0) return null;
    return pleadingMessages[Math.min(noClickCount - 1, pleadingMessages.length - 1)];
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-300 via-pink-300 to-purple-300 overflow-hidden">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animation: `fall ${2 + Math.random() * 1}s linear forwards`,
                fontSize: '2rem',
              }}
            >
              {['💕', '💖', '✨', '🌹', '💍'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      {!answered ? (
        <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-red-700">
              💕 Will You Be My Valentine? 💕
            </h2>

            <p className="text-2xl text-gray-800 leading-relaxed">
              You mean everything to me. Every day with you is a blessing, and I can't imagine my life without you by my side.
            </p>

            {noClickCount > 0 && (
              <div className="mt-6 p-6 bg-white rounded-2xl border-4 border-red-400 shadow-lg animate-bounce">
                <p className="text-2xl md:text-3xl font-bold text-red-600">
                  {getPleasingMessage()}
                </p>
                {noClickCount > 5 && (
                  <p className="text-lg text-gray-700 mt-3">
                    (The button keeps running away, but my love won't! 😭)
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Buttons Container */}
          <div className="flex gap-8 mt-8 relative h-24 w-full max-w-sm justify-center items-center">
            <button
              onClick={handleYesClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-2xl transition-all transform hover:scale-110 shadow-lg active:scale-95"
            >
              Yes! 💚
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-full text-2xl transition-all transform hover:scale-110 shadow-lg absolute active:scale-95"
            >
              No 💔
            </button>
          </div>

          {noClickCount > 8 && (
            <div className="text-lg text-gray-700 italic animate-pulse">
              Come on... you know you want to say yes! 😊
            </div>
          )}
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-2xl">
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-bold text-red-700 animate-bounce">
              YES!!! 💖✨
            </h2>

            <p className="text-4xl font-bold text-red-600">
              I'm the happiest person alive!
            </p>

            <p className="text-2xl text-gray-800 leading-relaxed">
              You've just made me the luckiest person in the world. I promise to love, cherish, and adore you for the rest of my life.
            </p>

            <p className="text-3xl font-bold text-purple-600 mt-8">
              Happy Valentine's Day! 💕
            </p>

            <div className="mt-8 p-8 bg-white rounded-3xl border-4 border-pink-400 shadow-2xl">
              <p className="text-2xl font-bold text-pink-600 mb-4">
                Let's celebrate! 🎉
              </p>
              <p className="text-xl text-gray-700">
                Our journey together has just begun, and I can't wait to create infinite beautiful memories with you.
              </p>
            </div>
          </div>

          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:scale-105 mt-8">
              Start Over
            </button>
          </Link>
        </main>
      )}

      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
