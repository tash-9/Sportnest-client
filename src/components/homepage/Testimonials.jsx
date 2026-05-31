import { Avatar } from "@heroui/react";
import Marquee from "react-fast-marquee";

const testimonials = [
  { text: "Booking a football turf took less than two minutes. Very smooth experience.", name: "Rafi Ahmed", sport: "Football", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=21" },
  { text: "I could check available slots instantly instead of calling different venues.", name: "Tanvir Hasan", sport: "Cricket", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=22" },
  { text: "The booking process is simple, clean, and perfect for regular players.", name: "Nusrat Jahan", sport: "Badminton", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=23" },
  { text: "Managing weekend tennis plans became much easier with SportNest.", name: "Sami Rahman", sport: "Tennis", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=24" },
  { text: "A helpful platform for finding nearby sports facilities without hassle.", name: "Mehedi Islam", sport: "Cricket", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=25" },
  { text: "SportNest made it easy to book a football turf without calling anyone.", name: "Arif Hossain", sport: "Football", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=31" },
  { text: "I found an available cricket slot quickly and confirmed my booking in minutes.", name: "Sakib Rahman", sport: "Cricket", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=32" },
  { text: "The platform feels simple, fast, and very useful for regular badminton players.", name: "Maliha Karim", sport: "Badminton", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=33" },
  { text: "Checking price, location, and slots in one place saved me a lot of time.", name: "Nayeem Hasan", sport: "Tennis", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=34" },
  { text: "I like how clean the facility cards are. Booking feels very straightforward.", name: "Farhana Akter", sport: "Futsal", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=35" },
  { text: "As a facility owner, managing my listed courts is much easier now.", name: "Imran Chowdhury", sport: "Facility Owner", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=36" },
  { text: "Perfect for weekend plans. I can see available time slots before booking.", name: "Tanjim Ahmed", sport: "Basketball", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=37" },
  { text: "The booking and cancellation system is simple enough for anyone to use.", name: "Nabila Islam", sport: "Swimming", image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=38" },
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