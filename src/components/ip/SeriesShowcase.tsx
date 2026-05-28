import { Series } from "@/data/types";
import { Badge } from "@/components/shared/Badge";

export function SeriesShowcase({ series }: { series: Series[] }) {
  if (series.length === 0) {
    return (
      <p className="text-center text-gray-400 py-12">暂无系列数据</p>
    );
  }

  return (
    <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
      {series.map((s) => (
        <div
          key={s.id}
          className="bg-white rounded-2xl shadow-md p-5 min-w-[260px] snap-start md:min-w-0"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-gray-900">{s.name}</h3>
            <span className="text-xs text-gray-400">{s.year}</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
            {s.description}
          </p>
          <div className="flex items-center gap-2">
            <Badge
              text={`${s.pieceCount}款`}
              className="bg-gray-100 text-gray-700"
            />
            <Badge
              text={s.theme}
              className="bg-indigo-50 text-indigo-700"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
