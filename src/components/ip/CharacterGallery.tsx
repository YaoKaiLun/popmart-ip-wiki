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
      <p className="text-center text-gray-400 py-12">暂无角色数据</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <GradientAvatar
              gradient={character.avatarGradient}
              name={character.name}
              size="md"
            />
            <div>
              <h3 className="text-base font-bold text-gray-900">
                {character.name}
              </h3>
              <p className="text-sm text-gray-500">{character.nameEn}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
            {character.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {character.traits.map((trait) => (
              <Badge
                key={trait}
                text={trait}
                className="bg-gray-100 text-gray-700"
              />
            ))}
          </div>
          <p className="text-xs text-gray-400">
            首次登场：{character.debutYear}年 · {character.debutSeries}
          </p>
        </div>
      ))}
    </div>
  );
}
