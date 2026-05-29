import { Series } from "./types";

export const ALL_SERIES: Series[] = [
  // Molly
  { id: "molly-zodiac", ipSlug: "molly", name: "Molly 星座系列", nameEn: "Molly Zodiac", year: 2016, description: "Molly 的首个盲盒系列，以十二星座为主题，开启了泡泡玛特的盲盒时代。", pieceCount: 12, theme: "星座" },
  { id: "molly-career", ipSlug: "molly", name: "Molly 职业系列", nameEn: "Molly Career", year: 2018, description: "Molly 化身各种职业形象，从宇航员到甜点师，展现无限可能。", pieceCount: 12, theme: "职业" },
  { id: "molly-wedding", ipSlug: "molly", name: "Molly 婚礼花童系列", nameEn: "Molly Wedding", year: 2019, description: "身披各式婚纱和礼服的 Molly，是最受欢迎的 Molly 系列之一。", pieceCount: 12, theme: "婚礼" },
  { id: "molly-steampunk", ipSlug: "molly", name: "Molly 蒸汽朋克系列", nameEn: "Molly Steampunk", year: 2020, description: "将蒸汽朋克美学融入 Molly 的设计，复古未来感十足。", pieceCount: 12, theme: "蒸汽朋克" },

  // LABUBU
  { id: "labubu-forest", ipSlug: "labubu", name: "The Monsters 精灵天团", nameEn: "The Monsters", year: 2019, description: "LABUBU 作为精灵天团一员的经典盲盒系列。", pieceCount: 12, theme: "精灵" },
  { id: "labubu-macaron", ipSlug: "labubu", name: "LABUBU 马卡龙系列", nameEn: "LABUBU Macaron", year: 2023, description: "以马卡龙甜点色调打造的 LABUBU，粉嫩可爱。", pieceCount: 9, theme: "甜点" },
  { id: "labubu-have-a-seat", ipSlug: "labubu", name: "LABUBU Have a Seat", nameEn: "LABUBU Have a Seat", year: 2024, description: "可挂在包包上的迷你 LABUBU 包挂系列，引发全球抢购现象。", pieceCount: 6, theme: "包挂" },
  { id: "labubu-tasty", ipSlug: "labubu", name: "The Monsters 美味系列", nameEn: "The Monsters Tasty", year: 2023, description: "以各种美食为灵感的精灵天团系列，美味与可爱的完美结合。", pieceCount: 9, theme: "美食" },

  // SKULLPANDA
  { id: "sp-castle", ipSlug: "skullpanda", name: "SKULLPANDA 密林古堡", nameEn: "SKULLPANDA Ancient Castle", year: 2020, description: "以哥特式古堡为背景的首个系列，暗黑美学的开山之作。", pieceCount: 12, theme: "哥特" },
  { id: "sp-night-city", ipSlug: "skullpanda", name: "SKULLPANDA 夜之城", nameEn: "SKULLPANDA Night City", year: 2021, description: "赛博朋克风格的城市系列，霓虹灯光下的暗黑少女。", pieceCount: 12, theme: "赛博朋克" },
  { id: "sp-warmth", ipSlug: "skullpanda", name: "SKULLPANDA 温度", nameEn: "SKULLPANDA Warmth", year: 2022, description: "用温暖色调重新诠释 SKULLPANDA 的柔软面。", pieceCount: 12, theme: "温暖" },

  // Dimoo
  { id: "dimoo-world", ipSlug: "dimoo", name: "Dimoo 世界之旅", nameEn: "Dimoo World Travel", year: 2020, description: "穿上各国特色服装的 Dimoo，梦境中的环球旅行。", pieceCount: 12, theme: "旅行" },
  { id: "dimoo-aquarium", ipSlug: "dimoo", name: "Dimoo 水族馆", nameEn: "Dimoo Aquarium", year: 2021, description: "化身海洋生物的 Dimoo，在梦幻水底世界中畅游。", pieceCount: 12, theme: "海洋" },
  { id: "dimoo-space", ipSlug: "dimoo", name: "Dimoo 太空旅行", nameEn: "Dimoo Space Travel", year: 2022, description: "穿上宇航服探索银河系的冒险系列。", pieceCount: 12, theme: "太空" },

  // Hirono
  { id: "hirono-outsider", ipSlug: "hirono", name: "Hirono 置身事外", nameEn: "Hirono The Outsider", year: 2021, description: "以'旁观者'为主题的首个系列，展现现代人的孤独与思索。", pieceCount: 7, theme: "孤独" },
  { id: "hirono-reshape", ipSlug: "hirono", name: "Hirono 重塑", nameEn: "Hirono Reshape", year: 2022, description: "讲述内心蜕变与成长的系列。", pieceCount: 7, theme: "成长" },
  { id: "hirono-other", ipSlug: "hirono", name: "Hirono 另一个我", nameEn: "Hirono The Other One", year: 2023, description: "探索 Hirono 多面性格的系列。", pieceCount: 7, theme: "自我" },

  // Pucky
  { id: "pucky-forest", ipSlug: "pucky", name: "Pucky 精灵森林", nameEn: "Pucky Forest Fairy", year: 2018, description: "森林精灵主题的经典首发系列。", pieceCount: 12, theme: "森林" },
  { id: "pucky-sleep", ipSlug: "pucky", name: "Pucky 睡眠宝宝", nameEn: "Pucky Sleeping Baby", year: 2019, description: "以安眠为主题的治愈系列。", pieceCount: 12, theme: "睡眠" },
  { id: "pucky-ocean", ipSlug: "pucky", name: "Pucky 海洋精灵", nameEn: "Pucky Ocean Fairy", year: 2020, description: "海洋元素与精灵世界的奇妙融合。", pieceCount: 12, theme: "海洋" },

  // HACIPUPU
  { id: "haci-adventure", ipSlug: "hacipupu", name: "HACIPUPU 奇妙冒险", nameEn: "HACIPUPU Adventure", year: 2022, description: "充满冒险精神的首发系列。", pieceCount: 9, theme: "冒险" },
  { id: "haci-gourmet", ipSlug: "hacipupu", name: "HACIPUPU 美食之旅", nameEn: "HACIPUPU Gourmet", year: 2023, description: "以各国美食为主题的趣味系列。", pieceCount: 9, theme: "美食" },
  { id: "haci-sport", ipSlug: "hacipupu", name: "HACIPUPU 运动系列", nameEn: "HACIPUPU Sport", year: 2023, description: "充满活力的运动主题系列。", pieceCount: 9, theme: "运动" },

  // Crybaby
  { id: "cry-sky", ipSlug: "crybaby", name: "Crybaby 哭泣的天空", nameEn: "Crybaby Crying Sky", year: 2022, description: "以天气现象诠释不同情绪的首发系列。", pieceCount: 9, theme: "天气" },
  { id: "cry-sad-club", ipSlug: "crybaby", name: "Crybaby 伤心俱乐部", nameEn: "Crybaby Sad Club", year: 2023, description: "一群分享悲伤的 Crybaby 的温暖系列。", pieceCount: 9, theme: "情感" },
  { id: "cry-monster", ipSlug: "crybaby", name: "Crybaby 怪物之泪", nameEn: "Crybaby Monster Tears", year: 2023, description: "化身小怪物的 Crybaby，展现脆弱也是一种力量。", pieceCount: 9, theme: "怪物" },
];

export function getSeriesByIP(ipSlug: string): Series[] {
  return ALL_SERIES
    .filter((s) => s.ipSlug === ipSlug)
    .sort((a, b) => a.year - b.year);
}
