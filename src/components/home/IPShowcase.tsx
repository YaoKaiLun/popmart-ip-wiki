import { ALL_IPS } from "@/data/ips";
import { IPCard } from "@/components/shared/IPCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function IPShowcase() {
  return (
    <section id="ip-showcase" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="热门IP图鉴"
          subtitle="点击任意IP卡片，探索它背后的故事与角色"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_IPS.map((ip, index) => (
            <IPCard key={ip.slug} ip={ip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
