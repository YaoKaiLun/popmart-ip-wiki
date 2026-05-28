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
  origin: "bg-amber-100 text-amber-800",
  collaboration: "bg-blue-100 text-blue-800",
  release: "bg-green-100 text-green-800",
  milestone: "bg-purple-100 text-purple-800",
  viral: "bg-red-100 text-red-800",
};
