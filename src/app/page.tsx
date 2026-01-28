"use client";

import { Navbar } from "@/components/Navbar";
import { StreamingCard } from "@/components/StreamingCard";
import { FavoritesSection } from "@/components/FavoritesSection";
import { streamingServices } from "@/data/streamingServices";
import { useState } from "react";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [browserUrl, setBrowserUrl] = useState("https://");

  return (
    <div className="min-h-screen bg-black">
      {/* Container */}
      <div className="container mx-auto max-w-[85%] px-4">
        {/* Navigation */}
        <Navbar />

        {/* Favorites Section */}
        <div className="pt-4">
          <FavoritesSection category="all" title="My Favorites" />
        </div>

        {/* Streaming Grid */}
        <div className="py-4 space-y-4">
          {/* Create rows of 4 */}
          {Array.from(
            { length: Math.ceil(streamingServices.length / 4) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {streamingServices
                  .slice(rowIndex * 4, rowIndex * 4 + 4)
                  .map((service) => (
                    <StreamingCard
                      key={service.name}
                      name={service.name}
                      href={service.href}
                      bgStyle={service.bgStyle}
                      textColor={service.textColor}
                      imageUrl={service.imageUrl}
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

      {/* URL Overlay (hidden by default) */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowOverlay(false)}
        >
          <input
            type="text"
            value={browserUrl}
            onChange={(e) => setBrowserUrl(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-96 px-4 py-3 bg-zinc-800 text-white rounded-lg border border-zinc-600 focus:outline-none focus:border-zinc-400"
            placeholder="https://"
          />
        </div>
      )}
    </div>
  );
}
