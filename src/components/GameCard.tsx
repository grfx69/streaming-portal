"use client";

import { FavoriteButton } from "./FavoriteButton";

interface GameCardProps {
  name: string;
  href: string;
  imageUrl: string;
  showLabel?: boolean;
  category?: "streaming" | "games" | "music" | "globe";
}

export function GameCard({
  name,
  href,
  imageUrl,
  showLabel,
  category = "games",
}: GameCardProps) {
  const itemId = `${category}-${name.toLowerCase().replace(/\s+/g, "-")}`;

  // Different aspect ratios for different categories
  // Games: 449/191 ≈ 2.35:1 (wider)
  // Music/Globe: 500/200 = 2.5:1 (standard logo format)
  const aspectClass =
    category === "games" ? "aspect-[449/191]" : "aspect-[5/2]";

  // Background color for image container
  const bgClass = category === "globe" ? "bg-black" : "bg-zinc-900";

  return (
    <div className="flex flex-col">
      <div className="relative group">
        <FavoriteButton
          item={{
            id: itemId,
            name,
            href,
            imageUrl,
            category,
          }}
          size="sm"
        />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          <img
            src={imageUrl}
            alt={name}
            className={`w-full h-auto object-contain ${bgClass} ${aspectClass} transition-all duration-300 hover:brightness-110`}
            loading="lazy"
          />
        </a>
      </div>
      {showLabel && (
        <div className="flex justify-center mt-2">
          <button
            type="button"
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded transition-colors duration-200"
          >
            {name}
          </button>
        </div>
      )}
    </div>
  );
}
