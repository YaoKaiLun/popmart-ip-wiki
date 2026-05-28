"use client";

import { motion } from "framer-motion";
import { Character } from "@/data/types";
import { GradientAvatar } from "@/components/shared/GradientAvatar";
import { Badge } from "@/components/shared/Badge";

export function CharacterGallery({
  characters,
}: {
  characters: Character[];
}) {
  if (characters.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12">暂无角色数据</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character, i) => (
        <motion.div
          key={character.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          whileHover={{ y: -4 }}
          className="glass-card rounded-2xl p-5 group"
        >
          <div className="flex items-center gap-4 mb-4">
            <GradientAvatar
              gradient={character.avatarGradient}
              name={character.name}
              size="md"
            />
            <div>
              <h3 className="text-base font-bold text-white">
                {character.name}
              </h3>
              <p className="text-sm text-gray-500">{character.nameEn}</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 mb-3">
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
      ))}
    </div>
  );
}
