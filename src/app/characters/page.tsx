"use client";

import { useState, useMemo } from "react";
import { ALL_CHARACTERS } from "@/data/characters";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CharacterFilter } from "@/components/characters/CharacterFilter";
import { CharacterGrid } from "@/components/characters/CharacterGrid";

export default function CharactersPage() {
  const [activeIP, setActiveIP] = useState<string | null>(null);

  const filteredCharacters = useMemo(() => {
    if (!activeIP) return ALL_CHARACTERS;
    return ALL_CHARACTERS.filter((c) => c.ipSlug === activeIP);
  }, [activeIP]);

  return (
    <div className="py-20 px-4 bg-brand-dark noise-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="角色百科"
          subtitle="探索泡泡玛特旗下所有IP角色，了解它们的故事与特点"
        />
        <div className="mb-10">
          <CharacterFilter
            activeIP={activeIP}
            onFilterChange={setActiveIP}
          />
        </div>
        <p className="text-center text-sm text-gray-500 mb-8">
          共 {filteredCharacters.length} 个角色
        </p>
        <CharacterGrid characters={filteredCharacters} />
      </div>
    </div>
  );
}
