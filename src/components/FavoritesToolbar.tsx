"use client";

import { useRef } from "react";
import { useFavorites } from "@/contexts/FavoritesContext";

export function FavoritesToolbar() {
  const { favorites, importFavorites, clearFavorites } = useFavorites();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    if (favorites.length === 0) {
      alert("No favorites to export!");
      return;
    }

    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      favorites: favorites,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `streaming-portal-favorites-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

        if (!data.favorites || !Array.isArray(data.favorites)) {
          alert("Invalid favorites file format!");
          return;
        }

        const confirmImport = confirm(
          `Import ${data.favorites.length} favorites? This will add to your existing favorites.`
        );

        if (confirmImport) {
          importFavorites(data.favorites);
          alert(`Successfully imported ${data.favorites.length} favorites!`);
        }
      } catch (error) {
        alert("Error reading file. Please make sure it's a valid JSON file.");
        console.error("Import error:", error);
      }
    };
    reader.readAsText(file);

    // Reset the input so the same file can be selected again
    event.target.value = "";
  };

  const handleClear = () => {
    if (favorites.length === 0) {
      alert("No favorites to clear!");
      return;
    }

    const confirmClear = confirm(
      `Are you sure you want to clear all ${favorites.length} favorites? This cannot be undone.`
    );

    if (confirmClear) {
      clearFavorites();
    }
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        type="button"
        onClick={handleExport}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors duration-200"
        title="Export favorites to file"
      >
        <i className="fa-solid fa-download text-xs" />
        Export
      </button>

      <button
        type="button"
        onClick={handleImportClick}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors duration-200"
        title="Import favorites from file"
      >
        <i className="fa-solid fa-upload text-xs" />
        Import
      </button>

      <button
        type="button"
        onClick={handleClear}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-red-600 text-white text-sm rounded-lg transition-colors duration-200"
        title="Clear all favorites"
      >
        <i className="fa-solid fa-trash text-xs" />
        Clear
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
