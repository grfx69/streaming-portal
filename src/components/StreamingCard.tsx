"use client";

import { FavoriteButton } from "./FavoriteButton";

interface StreamingCardProps {
  name: string;
  href: string;
  bgStyle: string;
  textColor?: string;
  imageUrl?: string;
}

export function StreamingCard({
  name,
  href,
  bgStyle,
  textColor = "#ffffff",
  imageUrl,
}: StreamingCardProps) {
  // Special border for Netflix
  const isNetflix = name === "NETFLIX";
  const borderStyle = isNetflix ? "2px solid #e50914" : "none";

  const itemId = `streaming-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="relative group">
      <FavoriteButton
        item={{
          id: itemId,
          name,
          href,
          category: "streaming",
          imageUrl,
          style: { background: bgStyle, border: borderStyle },
          textColor,
        }}
        size={imageUrl ? "sm" : "md"}
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="streaming-card block rounded-xl overflow-hidden h-24 sm:h-28 md:h-32 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        style={{
          background: bgStyle,
          border: borderStyle,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain p-2"
            loading="lazy"
          />
        ) : (
          <span
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-center leading-tight p-4"
            style={{ color: textColor }}
          >
            {name}
          </span>
        )}
      </a>
    </div>
  );
}
