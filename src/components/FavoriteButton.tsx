"use client";

import { useFavorites } from "@/contexts/FavoritesContext";

interface FavoriteButtonProps {
  item: {
    id: string;
    name: string;
    href: string;
    imageUrl?: string;
    category: "streaming" | "games" | "music" | "globe";
    style?: React.CSSProperties;
    textColor?: string;
  };
  className?: string;
  size?: "sm" | "md";
}

export function FavoriteButton({
  item,
  className = "",
  size = "md",
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(item.id);

  // Size variants
  const sizeClasses = {
    sm: "w-6 h-6 top-1 right-1",
    md: "w-7 h-7 top-2 right-2",
  };

  const iconSizeClasses = {
    sm: "text-xs",
    md: "text-xs",
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(item);
      }}
      className={`absolute ${sizeClasses[size]} flex items-center justify-center rounded-full transition-all duration-200 z-10 ${
        favorited
          ? "bg-red-500 text-white shadow-md"
          : "bg-black/60 text-white/80 hover:bg-black/80 hover:text-white backdrop-blur-sm"
      } ${className}`}
      title={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      <i
        className={`${favorited ? "fa-solid" : "fa-regular"} fa-heart ${iconSizeClasses[size]}`}
      />
    </button>
  );
}
