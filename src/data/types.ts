export interface IPColors {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  bgLight: string;
}

export interface IPStats {
  totalSeries: number;
  firstRelease: string;
  popularity: string;
}

export interface IP {
  slug: string;
  name: string;
  nameEn: string;
  designer: string;
  designerEn: string;
  year: number;
  popmartYear: number;
  description: string;
  tagline: string;
  personality: string[];
  colors: IPColors;
  stats: IPStats;
  image: string;
}

export interface Character {
  id: string;
  name: string;
  nameEn: string;
  ipSlug: string;
  description: string;
  traits: string[];
  debutYear: number;
  debutSeries: string;
  avatarGradient: string;
}

export interface TimelineEvent {
  id: string;
  ipSlug: string;
  year: number;
  month?: number;
  title: string;
  description: string;
  category: "origin" | "collaboration" | "release" | "milestone" | "viral";
  highlight?: boolean;
}

export interface Series {
  id: string;
  ipSlug: string;
  name: string;
  nameEn: string;
  year: number;
  description: string;
  pieceCount: number;
  theme: string;
}

export interface CompanyEvent {
  year: number;
  title: string;
  description: string;
  highlight?: boolean;
}
