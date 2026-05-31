import { Avatar } from "@heroui/react";
import Marquee from "react-fast-marquee";

const testimonials = [
  { text: "Super smooth booking experience. Found my turf in minutes.", name: "Oliver Smith", sport: "Football", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3" },
  { text: "Found a turf within minutes. Will never go back to calling ahead.", name: "James Carter", sport: "Cricket", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=12" },
  { text: "Booking courts feels effortless now. The UI is so clean.", name: "Ethan Walker", sport: "Badminton", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=10" },
  { text: "Real-time availability is a game changer for weekend plans.", name: "William Johnson", sport: "Tennis", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=7" },
  { text: "Finally a proper sports booking platform in this city.", name: "Noah Thompson", sport: "Futsal", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-2">Reviews</p>
        <h2 className="text-4xl font-extrabold text-[#1a1f2e]">
          What <span className="text-[#2d6a4f]">Players Say</span>
        </h2>
        <p className="text-gray-500 mt-3">Real feedback from SportNest users across the country.</p>
      </div>

      <Marquee pauseOnHover speed={40} gradient={false}>
        {testimonials.map((t, i) => (
          <div key={i} className="mx-3 w-72 bg-[#f8f9fa] border border-gray-100 rounded-2xl p-5 flex flex-col gap-3">
            <p className="text-gray-700 text-sm leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100">
              <Avatar size="sm">
                <Avatar.Image alt={t.name} src={t.image} />
                <Avatar.Fallback className="bg-[#2d6a4f] text-white text-xs">{t.name[0]}</Avatar.Fallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                <p className="text-xs text-[#2d6a4f]">{t.sport}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;