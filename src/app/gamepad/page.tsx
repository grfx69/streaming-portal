"use client";

import { Navbar } from "@/components/Navbar";
import { GameCard } from "@/components/GameCard";
import { FavoritesSection } from "@/components/FavoritesSection";
import { gameServices } from "@/data/gamingServices";

export default function GamepadPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Container */}
      <div className="container mx-auto max-w-[85%] px-4">
        {/* Navigation */}
        <Navbar />

        {/* Favorites Section */}
        <div className="pt-4">
          <FavoritesSection category="games" title="Favorite Games" />
        </div>

        {/* Gaming Grid */}
        <div className="py-4 space-y-4">
          {/* Create rows of 4 */}
          {Array.from(
            { length: Math.ceil(gameServices.length / 4) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {gameServices
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((game) => (
                    <GameCard
                      key={game.name}
                      name={game.name}
                      href={game.href}
                      imageUrl={game.imageUrl}
                      showLabel={game.showLabel}
                      category="games"
                    />
                  ))}
              </div>
            )
          )}
        </div>

        {/* Contact Button */}
        <div className="flex justify-center py-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Return to Top
          </button>
        </div>

        {/* Footer spacing */}
        <div className="pb-8" />
      </div>
    </div>
  );
}
