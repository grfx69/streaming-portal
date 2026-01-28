"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FavoriteButton } from "./FavoriteButton";

interface FavoriteItem {
  id: string;
  name: string;
  href: string;
  imageUrl?: string;
  category: "streaming" | "games" | "music" | "globe";
  style?: React.CSSProperties;
  textColor?: string;
}

interface SortableFavoriteCardProps {
  item: FavoriteItem;
}

export function SortableFavoriteCard({ item }: SortableFavoriteCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group ${isDragging ? "z-50" : ""}`}
    >
      {/* Drag handle overlay */}
      <div
        {...attributes}
        {...listeners}
        className="absolute inset-0 z-5 cursor-grab active:cursor-grabbing"
        title="Drag to reorder"
      />

      {/* Favorite button (needs higher z-index to be clickable) */}
      <div className="relative z-10">
        <FavoriteButton item={item} size={item.imageUrl ? "sm" : "md"} />
      </div>

      {item.imageUrl ? (
        // Image-based card (games, music, globe)
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 pointer-events-none"
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className={`w-full h-auto object-contain ${item.category === "globe" ? "bg-black" : "bg-zinc-900"} ${item.category === "games" ? "aspect-[449/191]" : "aspect-[5/2]"}`}
            loading="lazy"
          />
        </a>
      ) : (
        // Text-based card (streaming)
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden h-20 flex items-center justify-center p-3 shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 pointer-events-none"
          style={item.style}
        >
          <span
            className="text-sm sm:text-base font-bold tracking-tight text-center leading-tight"
            style={{ color: item.textColor || "#ffffff" }}
          >
            {item.name}
          </span>
        </a>
      )}

      {/* Drag indicator icon */}
      <div className="absolute bottom-1 left-1 w-6 h-6 flex items-center justify-center rounded bg-black/60 text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <i className="fa-solid fa-grip-vertical" />
      </div>
    </div>
  );
}
