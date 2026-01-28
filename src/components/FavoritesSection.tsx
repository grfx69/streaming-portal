"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { useFavorites } from "@/contexts/FavoritesContext";
import { SortableFavoriteCard } from "./SortableFavoriteCard";
import { FavoritesToolbar } from "./FavoritesToolbar";

interface FavoritesSectionProps {
  category?: "streaming" | "games" | "music" | "globe" | "all";
  title?: string;
}

export function FavoritesSection({
  category = "all",
  title = "Favorites",
}: FavoritesSectionProps) {
  const { favorites, reorderFavorites } = useFavorites();

  // Filter favorites by category if specified
  const filteredFavorites =
    category === "all"
      ? favorites
      : favorites.filter((f) => f.category === category);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      reorderFavorites(active.id as string, over.id as string);
    }
  };

  if (filteredFavorites.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-heart text-red-500" />
          <h2 className="text-white text-lg font-semibold">{title}</h2>
          <span className="text-zinc-500 text-sm">
            ({filteredFavorites.length})
          </span>
          <span className="text-zinc-600 text-xs ml-2 hidden sm:inline">
            <i className="fa-solid fa-grip-vertical mr-1" />
            Drag to reorder
          </span>
        </div>
        <div className="sm:ml-auto">
          <FavoritesToolbar />
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={filteredFavorites.map((f) => f.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredFavorites.map((item) => (
              <SortableFavoriteCard key={item.id} item={item} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
