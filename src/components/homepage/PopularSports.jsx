import { FaBasketballBall, FaTableTennis } from "react-icons/fa";
import { GiSoccerBall , GiCricketBat, GiShuttlecock, GiTennisRacket } from "react-icons/gi";
import Link from "next/link";

const sports = [
  { name: "Football", icon: <GiSoccerBall />, color: "bg-orange-50 text-orange-500" },
  { name: "Cricket", icon: <GiCricketBat />, color: "bg-yellow-50 text-yellow-600" },
  { name: "Tennis", icon: <GiTennisRacket />, color: "bg-green-50 text-green-600" },
  { name: "Badminton", icon: <GiShuttlecock />, color: "bg-blue-50 text-blue-500" },
  { name: "Basketball", icon: <FaBasketballBall />, color: "bg-red-50 text-red-500" },
  { name: "Table Tennis", icon: <FaTableTennis />, color: "bg-purple-50 text-purple-500" },
];

const PopularSports = () => {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-[#2d6a4f] uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1f2e]">
            Popular Sports
          </h2>
          <p className="text-gray-500 mt-3 text-base">Choose your desired venue and book in a few minutes </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sports.map((sport, i) => (
            <Link href={`/all-facilities?category=${sport.name}`} key={i}>
              <div className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-100 hover:border-[#2d6a4f] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl ${sport.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {sport.icon}
                </div>
                <span className="font-semibold text-sm text-gray-800">{sport.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSports;