import { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompanyTimeline } from "@/components/about/CompanyTimeline";
import { CultureSection } from "@/components/about/CultureSection";

export const metadata: Metadata = {
  title: "关于泡泡玛特",
  description: "了解泡泡玛特的发展历程与潮玩文化",
};

export default function AboutPage() {
  return (
    <div className="py-20 px-4 bg-brand-dark min-h-screen">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="关于泡泡玛特"
          subtitle="从创业杂货铺到全球潮玩文化领导者的传奇历程"
        />

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            发展历程
          </h2>
          <CompanyTimeline />
        </section>

        <section>
          <SectionHeading
            title="潮玩文化入门"
            subtitle="写给每一位想要了解潮玩世界的投资者和爱好者"
          />
          <CultureSection />
        </section>
      </div>
    </div>
  );
}
