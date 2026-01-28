"use client";

import { Navbar } from "@/components/Navbar";
import { GameCard } from "@/components/GameCard";
import { FavoritesSection } from "@/components/FavoritesSection";
import { globeServices } from "@/data/globeServices";

export default function GlobePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Container */}
      <div className="container mx-auto max-w-[85%] px-4">
        {/* Navigation */}
        <Navbar />

        {/* Favorites Section */}
        <div className="pt-4">
          <FavoritesSection category="globe" title="Favorite Sites" />
        </div>

        {/* Globe/Web Services Grid */}
        <div className="py-4 space-y-8">
          {/* Create rows of 3 */}
          {Array.from(
            { length: Math.ceil(globeServices.length / 3) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {globeServices
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((service) => (
                    <GameCard
                      key={service.name}
                      name={service.name}
                      href={service.href}
                      imageUrl={service.imageUrl}
                      category="globe"
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
