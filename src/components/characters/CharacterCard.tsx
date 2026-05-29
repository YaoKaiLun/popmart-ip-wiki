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
      whileHover={{ y: -4 }}
      className="glass-subtle rounded-2xl p-5 group"
    >
      <div className="flex items-start gap-4 mb-3">
        <GradientAvatar
          gradient={character.avatarGradient}
          name={character.name}
          size="md"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white truncate">
            {character.name}
          </h3>
          <p className="text-xs text-gray-500">{character.nameEn}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 line-clamp-2 mb-3">
        {character.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {character.traits.map((trait) => (
          <Badge
            key={trait}
            text={trait}
            className="bg-white/5 text-gray-400 text-xs border border-white/10"
          />
        ))}
      </div>
      <p className="text-xs text-gray-600">
        首次登场：{character.debutYear}年 · {character.debutSeries}
      </p>
    </motion.div>
  );
}
