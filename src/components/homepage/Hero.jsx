"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    tag: "Premium Venues",
    heading: "Where Champions\nReserve Their Arena.",
    sub: "Easy booking for premium sports facilities, tournaments, and training sessions.",
    cta: "Explore All Facilities",
    img: "/assets/banner.jpg",
  },
  {
    tag: "Football",
    heading: "Book Football Turf\nFor Your Next Match.",
    sub: "Gather your squad. Find the best turfs near you and dominate the field.",
    cta: "Explore All Facilities",
    img: "/assets/football.jpg",
  },
  {
    tag: "Cricket",
    heading: "Your Cricket Ground\nIs a Click Away.",
    sub: "From casual matches to tournaments — book your ground in seconds.",
    cta: "Explore All Facilities",
    img: "/assets/cricket.jpg",
  },
];

const Hero = () => {
  return (
    <div className="bg-[#1a1f2e]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative min-h-140 md:min-h-155 flex items-center overflow-hidden">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <Image
                  src={slide.img}
                  alt={slide.tag}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#1a1f2e]/90 via-[#1a1f2e]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20">
                <span className="inline-block px-3 py-1 bg-[#2d6a4f]/80 text-[#d8f3dc] text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                  {slide.tag}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-2xl whitespace-pre-line">
                  {slide.heading}
                </h1>
                <p className="mt-4 text-gray-300 text-lg max-w-lg leading-relaxed">
                  {slide.sub}
                </p>
                <Link href="/all-facilities">
                  <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#2d6a4f] hover:bg-[#40916c] text-white font-semibold rounded-lg transition-all group">
                    {slide.cta}
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;