'use client';

import { useState } from 'react';
import Link from 'next/link';

const pleadingMessages = [
  "Are you sure? 🥺",
  "Please reconsider... 💔",
  "My heart can't take this... 💔💔",
  "Give me another chance! 🙏",
  "You're breaking my heart! 😢",
  "I'll fast for 40 days and 40 nights 🥺🥺",
  "I can't live without hearing yes from you! 😩",
  "Biko!! 🙏💔✨",
  "Okay, what if I get down on one knee? ",
];

export default function Proposal() {
  const [answered, setAnswered] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
    const randomX = Math.random() * 250 - 125;
    const randomY = Math.random() * 250 - 125;
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 overflow-hidden relative">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full opacity-20 blur-3xl animate-bounce"></div>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`float-${i}`}
            className="absolute opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              fontSize: '3rem',
            }}
          >
            {['💕', '✨', '🌹'][Math.floor(Math.random() * 3)]}
          </div>
        ))}
      </div>

      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animation: `fall ${2 + Math.random() * 1.5}s linear forwards`,
                fontSize: '2rem',
              }}
            >
              {['💕', '💖', '✨', '🌹', '💍', '🎉'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {!answered ? (
        <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-3xl relative z-10">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 drop-shadow-2xl">
              Will You Be My Valentine?
            </h1>
            <p className="text-2xl md:text-3xl text-pink-200/80 font-semibold">
              You make every moment magical ✨
            </p>
          </div>

          {/* Pleading message box */}
          {noClickCount > 0 && (
            <div className="mt-6 p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border-2 border-pink-500/50 shadow-2xl transform transition-all duration-300 animate-bounce max-w-lg backdrop-blur-lg">
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
                {getPleasingMessage()}
              </p>
              {noClickCount > 5 && (
                <p className="text-lg text-pink-200/70 mt-4 italic">
                  (The button keeps running away, but my love won't! 😭)
                </p>
              )}
            </div>
          )}

          {/* Buttons Container */}
          <div className="flex gap-12 mt-12 relative h-40 w-full max-w-md justify-center items-center">
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-black py-5 px-16 rounded-full text-3xl transition-all transform hover:scale-125 shadow-2xl active:scale-95 relative z-20 border-2 border-green-400/50"
            >
              Yes! 💚
            </button>

            <button
              onClick={handleNoClick}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.2s ease-out',
              }}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-black py-5 px-16 rounded-full text-3xl transition-all transform hover:scale-125 shadow-2xl absolute active:scale-95 border-2 border-red-400/50"
            >
              No 💔
            </button>
          </div>

          {noClickCount > 8 && (
            <div className="text-xl text-pink-200 font-bold animate-pulse mt-6 bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-2xl border-2 border-purple-500/50 shadow-lg backdrop-blur-lg">
              Come on... you know you want to say yes! 😊💕
            </div>
          )}
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-8 max-w-3xl relative z-10">
          <div className="space-y-8">
            {/* Victory heading */}
            <h2 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 animate-bounce drop-shadow-2xl">
              YES!!! 💖✨
            </h2>

            <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
              I'm the happiest person alive!
            </p>

            {/* Love message */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border-2 border-pink-500/50 shadow-2xl p-10 max-w-2xl backdrop-blur-lg">
              <p className="text-3xl font-bold text-pink-100 leading-relaxed">
                You've just made me the luckiest person in the world. 💕
              </p>
              <p className="text-2xl text-pink-200/90 leading-relaxed mt-4">
                I promise to love, cherish, and adore you for the rest of my life.
              </p>
            </div>

            {/* Valentine's message */}
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
              Happy Valentine's Day! 💕
            </p>

            {/* Celebration box */}
            <div className="mt-8 p-10 bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl border-2 border-purple-500/50 shadow-2xl backdrop-blur-lg">
              <p className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Let's celebrate! 🎉🎊
              </p>
              <p className="text-2xl text-pink-100/90 leading-relaxed font-semibold">
                Our journey together has just begun, and I can't wait to create infinite beautiful memories with you. Forever starts now! 💫
              </p>
            </div>
          </div>

          <Link href="/">
            <button className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-black py-4 px-10 rounded-full text-xl transition-all transform hover:scale-110 mt-8 shadow-lg border-2 border-pink-400/50">
              Start Over 🔄
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
}
