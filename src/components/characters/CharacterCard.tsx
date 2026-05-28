"use client";

import { motion } from "framer-motion";
import { Character } from "@/data/types";
import { GradientAvatar } from "@/components/shared/GradientAvatar";
import { Badge } from "@/components/shared/Badge";

export function CharacterCard({
  character,
  index = 0,
}: {
  character: Character;
  index?: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-3">
        <GradientAvatar
          gradient={character.avatarGradient}
          name={character.name}
          size="md"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-brand-black truncate">
            {character.name}
          </h3>
          <p className="text-xs text-gray-400">{character.nameEn}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {character.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {character.traits.map((trait) => (
          <Badge
            key={trait}
            text={trait}
            className="bg-gray-100 text-gray-600 text-xs"
          />
        ))}
      </div>
      <p className="text-xs text-gray-400">
        首次登场：{character.debutYear}年 · {character.debutSeries}
      </p>
    </motion.div>
  );
}
