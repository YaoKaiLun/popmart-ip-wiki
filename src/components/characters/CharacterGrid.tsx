"use client";

import { AnimatePresence } from "framer-motion";
import { Character } from "@/data/types";
import { CharacterCard } from "./CharacterCard";

export function CharacterGrid({
  characters,
}: {
  characters: Character[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {characters.map((character, i) => (
          <CharacterCard
            key={character.id}
            character={character}
            index={i}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
