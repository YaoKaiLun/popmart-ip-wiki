import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_IPS, getIPBySlug } from "@/data/ips";
import { getCharactersByIP } from "@/data/characters";
import { getTimelineByIP } from "@/data/timelines";
import { getSeriesByIP } from "@/data/series";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GradientAvatar } from "@/components/shared/GradientAvatar";
import { IPHeroBanner } from "@/components/ip/IPHeroBanner";
import { Timeline } from "@/components/ip/Timeline";
import { CharacterGallery } from "@/components/ip/CharacterGallery";
import { SeriesShowcase } from "@/components/ip/SeriesShowcase";

export function generateStaticParams() {
  return ALL_IPS.map((ip) => ({ slug: ip.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ip = getIPBySlug(slug);
  if (!ip) return { title: "IP 未找到" };
  return {
    title: `${ip.name} — ${ip.tagline}`,
    description: ip.description.split("\n\n")[0],
  };
}

export default async function IPDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ip = getIPBySlug(slug);
  if (!ip) notFound();

  const characters = getCharactersByIP(slug);
  const timeline = getTimelineByIP(slug);
  const series = getSeriesByIP(slug);
  const otherIPs = ALL_IPS.filter((other) => other.slug !== slug);

  return (
    <>
      <IPHeroBanner ip={ip} />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <section className="mb-16">
          <SectionHeading title="IP 故事" align="left" />
          <div className="prose prose-gray max-w-none">
            {ip.description.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-600 leading-relaxed mb-4 text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold" style={{ color: ip.colors.primary }}>
                {ip.stats.totalSeries}+
              </p>
              <p className="text-xs text-gray-500 mt-1">系列数量</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-sm font-bold text-brand-black">
                {ip.stats.firstRelease}
              </p>
              <p className="text-xs text-gray-500 mt-1">首发系列</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 text-center">
              <p className="text-sm font-bold text-brand-black">
                {ip.stats.popularity}
              </p>
              <p className="text-xs text-gray-500 mt-1">市场地位</p>
            </div>
          </div>
        </section>

        {timeline.length > 0 && (
          <section className="mb-16">
            <SectionHeading
              title="发展时间轴"
              subtitle={`${ip.name} 从诞生至今的重要里程碑`}
              align="left"
            />
            <Timeline events={timeline} />
          </section>
        )}

        {characters.length > 0 && (
          <section className="mb-16">
            <SectionHeading
              title="角色画廊"
              subtitle={`${ip.name} 的经典角色`}
              align="left"
            />
            <CharacterGallery characters={characters} />
          </section>
        )}

        {series.length > 0 && (
          <section className="mb-16">
            <SectionHeading
              title="系列展示"
              subtitle="已发布的经典盲盒系列"
              align="left"
            />
            <SeriesShowcase series={series} />
          </section>
        )}

        <section>
          <SectionHeading title="探索更多IP" align="left" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {otherIPs.map((other) => (
              <Link
                key={other.slug}
                href={`/ip/${other.slug}`}
                className="group flex items-center gap-3 rounded-2xl p-3 hover:shadow-md transition-all duration-300"
                style={{ backgroundColor: other.colors.bgLight }}
              >
                <GradientAvatar
                  gradient={other.colors.gradient}
                  name={other.name}
                  size="sm"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-brand-black truncate">
                    {other.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {other.designerEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
