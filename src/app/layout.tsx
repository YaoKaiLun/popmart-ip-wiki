import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "泡泡玛特IP图鉴 | Pop Mart IP Wiki",
    template: "%s | 泡泡玛特IP图鉴",
  },
  description:
    "探索泡泡玛特旗下热门IP的故事线、角色百科与发展历程。Molly、LABUBU、SKULLPANDA等潮玩IP全面解析。",
  keywords: [
    "泡泡玛特",
    "Pop Mart",
    "LABUBU",
    "Molly",
    "SKULLPANDA",
    "潮玩",
    "盲盒",
    "IP图鉴",
  ],
  authors: [{ name: "yaokailun" }],
  openGraph: {
    title: "泡泡玛特IP图鉴",
    description: "探索泡泡玛特旗下热门IP的故事线与角色百科",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
