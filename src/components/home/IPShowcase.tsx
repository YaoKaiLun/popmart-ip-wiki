import { ALL_IPS } from "@/data/ips";
import { IPCard } from "@/components/shared/IPCard";

export function IPShowcase() {
  return (
    <section id="ip-showcase" className="px-6 py-16 md:px-12 md:py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto">
        <p className="magazine-subtitle mb-2">Collection</p>
        <h2 className="magazine-title text-3xl sm:text-4xl lg:text-5xl text-white mb-10 lg:mb-14">
          全部 IP
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          {ALL_IPS.map((ip, index) => (
            <IPCard key={ip.slug} ip={ip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
