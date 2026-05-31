import CtaSection from "@/components/homepage/CtaSection";
import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import PopularSports from "@/components/homepage/PopularSports";
import StatsSection from "@/components/homepage/StatsSection";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#f0fdf4] min-h-screen">
      <Hero />
      <PopularSports/>
      <Featured/>
      <StatsSection/>
      <Testimonials/>
      <CtaSection/>
    </div>
  );
}
