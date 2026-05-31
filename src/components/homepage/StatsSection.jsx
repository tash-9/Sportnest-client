"use client";
import CountUp from "react-countup";
import { Users, MapPin, CalendarCheck, Headphones } from "lucide-react";

const stats = [
  { id: 1, title: "Active Players", value: 500, suffix: "+", icon: Users },
  { id: 2, title: "Sports Venues", value: 120, suffix: "+", icon: MapPin },
  { id: 3, title: "Bookings Completed", value: 10000, suffix: "+", icon: CalendarCheck },
  { id: 4, title: "Customer Support", value: "24/7", suffix: "", icon: Headphones },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#40916c] uppercase tracking-widest mb-2">By the Numbers</p>
          <h2 className="text-4xl font-extrabold text-white">
            Our Growing <span className="text-[#40916c]">Community</span>
          </h2>
          <p className="text-gray-400 mt-3">Thousands of players trust SportNest for their daily games.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="group bg-[#2c3347] rounded-2xl p-8 text-center border border-[#3d4561] hover:border-[#40916c] hover:-translate-y-1 transition-all duration-200">
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#2d6a4f]/20 flex items-center justify-center mb-5 group-hover:bg-[#2d6a4f]/40 transition-colors">
                  <Icon className="w-7 h-7 text-[#40916c]" />
                </div>
                <h3 className="text-4xl font-extrabold text-white">
                  {typeof stat.value === "number" ? (
                    <CountUp end={stat.value} duration={2} separator="," enableScrollSpy scrollSpyDelay={200} />
                  ) : stat.value}
                  {stat.suffix}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;