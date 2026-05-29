import { TimelineEvent } from "./types";

export const ALL_TIMELINES: TimelineEvent[] = [
  // Molly
  { id: "molly-1", ipSlug: "molly", year: 2006, title: "Molly 诞生", description: "香港艺术家 Kenny Wong 在画廊中遇到一个嘟着嘴的小女孩，灵感迸发，创作了 Molly 这一角色。", category: "origin", highlight: true },
  { id: "molly-2", ipSlug: "molly", year: 2010, title: "首款 Molly 手办", description: "Kenny Wong 推出了第一款 Molly 搪胶手办，在香港艺术玩具圈引起关注。", category: "release" },
  { id: "molly-3", ipSlug: "molly", year: 2016, title: "签约泡泡玛特", description: "泡泡玛特与 Kenny Wong 达成独家合作，Molly 正式成为泡泡玛特旗下IP。这一合作彻底改变了中国潮玩市场的格局。", category: "collaboration", highlight: true },
  { id: "molly-4", ipSlug: "molly", year: 2016, title: "Molly 星座系列首发", description: "第一款 Molly 盲盒系列——星座系列上市，迅速售罄，开启了盲盒消费的热潮。", category: "release", highlight: true },
  { id: "molly-5", ipSlug: "molly", year: 2018, title: "年销量突破400万", description: "Molly 系列年销量突破400万个，成为中国潮玩市场的绝对王者。", category: "milestone", highlight: true },
  { id: "molly-6", ipSlug: "molly", year: 2019, title: "Molly 婚礼花童系列", description: "推出备受喜爱的婚礼花童系列，成为当年最热门的收藏品之一。", category: "release" },
  { id: "molly-7", ipSlug: "molly", year: 2020, title: "Molly BJD 系列发布", description: "推出球形关节人偶版 Molly，标志着 Molly 从盲盒玩具向高端收藏品的跨越。", category: "release" },
  { id: "molly-8", ipSlug: "molly", year: 2021, title: "全球累计销量过亿", description: "Molly 全球累计销量突破1亿个里程碑，成为中国最成功的潮玩IP。", category: "milestone", highlight: true },

  // LABUBU
  { id: "labubu-1", ipSlug: "labubu", year: 2015, title: "LABUBU 诞生", description: "香港艺术家龙家升（Kasing Lung）创作了 LABUBU 角色，灵感来源于北欧森林神话中的精灵怪兽。", category: "origin", highlight: true },
  { id: "labubu-2", ipSlug: "labubu", year: 2019, title: "加入泡泡玛特", description: "LABUBU 随 The Monsters 精灵天团系列加入泡泡玛特，以盲盒形式正式进入大众市场。", category: "collaboration", highlight: true },
  { id: "labubu-3", ipSlug: "labubu", year: 2022, title: "LABUBU 独立系列崛起", description: "从精灵天团中独立出来推出专属系列，人气持续攀升。", category: "release" },
  { id: "labubu-4", ipSlug: "labubu", year: 2023, title: "马卡龙系列爆红", description: "LABUBU 马卡龙系列和美味系列大获成功，开始在社交媒体上获得大量关注。", category: "release", highlight: true },
  { id: "labubu-5", ipSlug: "labubu", year: 2024, month: 4, title: "Lisa 带火 LABUBU", description: "BLACKPINK 成员 Lisa 在社交媒体上多次晒出 LABUBU 玩偶，引发全球范围内的抢购狂潮。LABUBU 一夜之间成为全球最火的潮玩IP。", category: "viral", highlight: true },
  { id: "labubu-6", ipSlug: "labubu", year: 2024, month: 6, title: "Have a Seat 系列现象级热销", description: "包挂系列 Have a Seat 成为现象级产品，全球门店排长队抢购，二手市场溢价数倍。", category: "release", highlight: true },
  { id: "labubu-7", ipSlug: "labubu", year: 2024, title: "全球化破圈", description: "LABUBU 在泰国、日本、韩国、欧美市场全面爆发，成为泡泡玛特国际化战略的核心引擎。", category: "milestone", highlight: true },
  { id: "labubu-8", ipSlug: "labubu", year: 2025, title: "持续领跑全球潮玩", description: "LABUBU 连续多个季度保持泡泡玛特销售额第一，带动公司股价和品牌价值大幅增长。", category: "milestone" },

  // SKULLPANDA
  { id: "sp-1", ipSlug: "skullpanda", year: 2020, title: "SKULLPANDA 诞生", description: "中国艺术家熊喵（Xiongmao）为泡泡玛特创作了 SKULLPANDA，以半骷髅半少女的独特设计一炮而红。", category: "origin", highlight: true },
  { id: "sp-2", ipSlug: "skullpanda", year: 2020, title: "密林古堡系列首发", description: "首个系列以哥特式古堡为背景，暗黑美学风格在潮玩市场中独树一帜。", category: "release" },
  { id: "sp-3", ipSlug: "skullpanda", year: 2021, title: "夜之城系列大热", description: "以赛博朋克为主题的夜之城系列成为年度最佳系列之一，吸引了大量核心玩家。", category: "release", highlight: true },
  { id: "sp-4", ipSlug: "skullpanda", year: 2022, title: "温度系列突破", description: "推出温暖色调的温度系列，展现了 SKULLPANDA 的多面性，扩大了受众群体。", category: "release" },
  { id: "sp-5", ipSlug: "skullpanda", year: 2023, title: "超能少女系列", description: "融合了超级英雄元素的系列，将暗黑美学与力量感完美结合。", category: "release" },
  { id: "sp-6", ipSlug: "skullpanda", year: 2024, title: "跻身泡泡玛特TOP3 IP", description: "SKULLPANDA 稳居泡泡玛特销售额前三，成为最具艺术价值的IP代表。", category: "milestone", highlight: true },

  // Dimoo
  { id: "dimoo-1", ipSlug: "dimoo", year: 2018, title: "Dimoo 诞生", description: "设计师 Ayan 创作了 Dimoo，一个在梦境世界中探索的小男孩。", category: "origin", highlight: true },
  { id: "dimoo-2", ipSlug: "dimoo", year: 2019, title: "加入泡泡玛特", description: "Dimoo 世界系列作为泡泡玛特盲盒首发，以梦幻风格赢得广泛喜爱。", category: "collaboration", highlight: true },
  { id: "dimoo-3", ipSlug: "dimoo", year: 2020, title: "世界之旅系列", description: "Dimoo 穿上各国特色服装环游世界，成为送礼的热门选择。", category: "release" },
  { id: "dimoo-4", ipSlug: "dimoo", year: 2021, title: "水族馆系列爆红", description: "Dimoo 水族馆系列以精美的海洋主题设计成为年度最佳系列之一。", category: "release", highlight: true },
  { id: "dimoo-5", ipSlug: "dimoo", year: 2022, title: "太空旅行系列", description: "Dimoo 飞向太空，科幻主题系列展现了无限想象力。", category: "release" },
  { id: "dimoo-6", ipSlug: "dimoo", year: 2023, title: "与迪士尼联名", description: "Dimoo × 迪士尼联名系列引发抢购，跨界合作提升了品牌影响力。", category: "collaboration", highlight: true },

  // Hirono
  { id: "hirono-1", ipSlug: "hirono", year: 2021, title: "Hirono 诞生", description: "设计师 Lang 创作了 Hirono 小野，一个带有忧郁气质的少年形象，填补了潮玩市场中情感向产品的空白。", category: "origin", highlight: true },
  { id: "hirono-2", ipSlug: "hirono", year: 2021, title: "置身事外系列首发", description: "首个系列以'旁观者'视角展现现代人的孤独感，引起都市青年的强烈共鸣。", category: "release", highlight: true },
  { id: "hirono-3", ipSlug: "hirono", year: 2022, title: "重塑系列发布", description: "Hirono 开始了内心蜕变之旅，系列展现了成长与改变的主题。", category: "release" },
  { id: "hirono-4", ipSlug: "hirono", year: 2023, title: "另一个我系列", description: "探索 Hirono 多面性格的系列，每个造型代表一种被隐藏的情绪。", category: "release" },
  { id: "hirono-5", ipSlug: "hirono", year: 2024, title: "成为文艺潮玩代表", description: "Hirono 稳固了其在情感向潮玩领域的地位，受到25-35岁都市白领群体的持续追捧。", category: "milestone", highlight: true },

  // Pucky
  { id: "pucky-1", ipSlug: "pucky", year: 2017, title: "Pucky 诞生", description: "香港设计师毕奇创作了 Pucky 精灵宝宝系列，以童话仙境为灵感源泉。", category: "origin", highlight: true },
  { id: "pucky-2", ipSlug: "pucky", year: 2018, title: "精灵森林系列首发", description: "首个 Pucky 盲盒系列以森林精灵为主题，治愈系的设计迅速征服了女性收藏者。", category: "release", highlight: true },
  { id: "pucky-3", ipSlug: "pucky", year: 2019, title: "睡眠宝宝系列大热", description: "以安睡宝宝为主题的系列成为泡泡玛特最治愈的产品之一。", category: "release" },
  { id: "pucky-4", ipSlug: "pucky", year: 2020, title: "海洋精灵系列", description: "将精灵元素与海洋生物结合，创造了梦幻般的水下精灵世界。", category: "release" },
  { id: "pucky-5", ipSlug: "pucky", year: 2022, title: "经典IP持续焕新", description: "通过不断推出新主题系列，Pucky 保持着稳定的收藏者基础和市场热度。", category: "milestone" },

  // HACIPUPU
  { id: "haci-1", ipSlug: "hacipupu", year: 2022, title: "HACIPUPU 诞生", description: "泡泡玛特内部团队原创开发的IP形象，代表了公司自主IP孵化的战略方向。", category: "origin", highlight: true },
  { id: "haci-2", ipSlug: "hacipupu", year: 2022, title: "奇妙冒险系列首发", description: "以探索冒险为主题的首个系列上市，活泼可爱的形象迅速获得市场认可。", category: "release" },
  { id: "haci-3", ipSlug: "hacipupu", year: 2023, title: "美食之旅系列", description: "HACIPUPU 化身美食达人，以各国美食为主题的系列趣味十足。", category: "release" },
  { id: "haci-4", ipSlug: "hacipupu", year: 2023, title: "运动系列发布", description: "充满运动活力的系列展现了 HACIPUPU 阳光健康的一面。", category: "release" },
  { id: "haci-5", ipSlug: "hacipupu", year: 2024, title: "原创IP崛起代表", description: "HACIPUPU 成为泡泡玛特自主IP孵化成功的标杆案例。", category: "milestone", highlight: true },

  // Crybaby
  { id: "cry-1", ipSlug: "crybaby", year: 2021, title: "Crybaby 诞生", description: "泰国艺术家 Molly Grown 创作了 Crybaby，一个用眼泪表达真实情感的婴儿形象。", category: "origin", highlight: true },
  { id: "cry-2", ipSlug: "crybaby", year: 2022, title: "签约泡泡玛特", description: "Crybaby 加入泡泡玛特家族，展现了公司在全球范围内吸纳优质IP的能力。", category: "collaboration", highlight: true },
  { id: "cry-3", ipSlug: "crybaby", year: 2022, title: "哭泣的天空系列首发", description: "以天气现象诠释不同情绪的首个系列，独特的设计理念令人耳目一新。", category: "release" },
  { id: "cry-4", ipSlug: "crybaby", year: 2023, title: "伤心俱乐部系列", description: "一群聚在一起分享悲伤的 Crybaby，传递了'共同面对'的温暖力量。", category: "release" },
  { id: "cry-5", ipSlug: "crybaby", year: 2023, title: "东南亚市场之星", description: "Crybaby 在泰国和东南亚市场表现尤为突出，成为该区域最受欢迎的泡泡玛特IP。", category: "milestone", highlight: true },
  { id: "cry-6", ipSlug: "crybaby", year: 2024, title: "怪物之泪系列", description: "将哭泣元素与怪物形象结合，展现了'即使是最强大的存在也有脆弱的时刻'的主题。", category: "release" },
];

export function getTimelineByIP(ipSlug: string): TimelineEvent[] {
  return ALL_TIMELINES
    .filter((e) => e.ipSlug === ipSlug)
    .sort((a, b) => a.year - b.year || (a.month ?? 0) - (b.month ?? 0));
}
