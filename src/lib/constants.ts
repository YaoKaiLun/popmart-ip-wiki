export const SITE_NAME = "泡泡玛特IP图鉴";
export const SITE_NAME_EN = "Pop Mart IP Wiki";
export const SITE_DESCRIPTION = "探索泡泡玛特旗下热门IP的故事线、角色百科与发展历程";

export const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/characters", label: "角色百科" },
  { href: "/about", label: "关于" },
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  origin: "起源",
  collaboration: "合作",
  release: "发布",
  milestone: "里程碑",
  viral: "出圈",
};

export const CATEGORY_COLORS: Record<string, string> = {
  origin: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
  collaboration: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
  release: "bg-green-500/15 text-green-400 border border-green-500/20",
  milestone: "bg-purple-500/15 text-purple-400 border border-purple-500/20",
  viral: "bg-red-500/15 text-red-400 border border-red-500/20",
};
