'use client';

import { useState } from 'react';
import Link from 'next/link';

const poems = [
	{
		title: 'In Your Presence',
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
		title: 'Forever Yours',
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
		title: 'My Valentine',
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
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-red-950 to-gray-950 overflow-hidden relative">
			{/* Romantic glow effects */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full opacity-30 blur-3xl animate-pulse"></div>
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
			<div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full opacity-20 blur-3xl animate-bounce"></div>

			{/* Floating romantic elements */}
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

			<main className="flex flex-col items-center justify-center text-center px-6 py-8 gap-12 max-w-3xl relative z-10">
				{/* Romantic heading */}
				<div className="space-y-4">
					<h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 drop-shadow-2xl">
						Poetry for You
					</h2>
					<p className="text-xl md:text-2xl text-pink-200/80 font-light tracking-widest">
						Words from my heart to yours
					</p>
				</div>

				{/* Poem Card with romantic styling */}
				<div className="relative group w-full max-w-2xl">
					{/* Glowing border effect */}
					<div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 animate-pulse transition duration-500"></div>

					{/* Card content */}
					<div className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black rounded-3xl shadow-2xl p-12 min-h-96 flex flex-col items-center justify-center border-2 border-pink-500/30 backdrop-blur-lg group-hover:border-pink-500/50 transition-all duration-300">
						<h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 mb-8">
							{poems[currentIndex].title}
						</h3>
						<p className="text-lg md:text-xl text-pink-100/90 leading-relaxed whitespace-pre-line italic font-light">
							{poems[currentIndex].text}
						</p>
					</div>
				</div>

				{/* Navigation buttons */}
				<div className="flex gap-8 items-center justify-center flex-wrap">
					<button
						onClick={prevPoem}
						className="group relative bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-pink-400/50 active:scale-95"
					>
						<span className="relative z-10">← Previous</span>
					</button>

					<div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300 bg-gray-900/50 px-8 py-3 rounded-full border-2 border-pink-500/30 backdrop-blur-sm">
						{currentIndex + 1} / {poems.length}
					</div>

					<button
						onClick={nextPoem}
						className="group relative bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-red-400/50 active:scale-95"
					>
						<span className="relative z-10">Next →</span>
					</button>
				</div>

				{/* Progress dots */}
				<div className="flex gap-3 justify-center flex-wrap mt-4">
					{poems.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							title={`Go to poem ${index + 1}`}
							className={`rounded-full transition-all ${
								index === currentIndex
									? 'bg-gradient-to-r from-pink-500 to-red-500 scale-150 shadow-xl h-4 w-4'
									: 'bg-gray-700 hover:bg-gray-600 h-3 w-3'
							}`}
						/>
					))}
				</div>

				{/* Continue button */}
				<Link href="/proposal" className="w-full flex justify-center mt-8">
					<button className="group relative bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 hover:from-pink-500 hover:via-red-500 hover:to-pink-500 text-white font-black py-5 px-12 rounded-full text-2xl transition-all transform hover:scale-110 hover:shadow-3xl shadow-xl border-2 border-pink-400/50 active:scale-95">
						<span className="relative z-10">The Big Question ➜</span>
						<div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					</button>
				</Link>
			</main>

			<style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-40px) scale(1.1);
            opacity: 0.6;
          }
        }
      `}</style>
		</div>
	);
}
