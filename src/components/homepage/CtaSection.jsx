import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const CtaSection = () => {
  return (
    <div>
      <div className="relative w-full h-80 overflow-hidden">

        <Image
          className="w-full h-full object-cover"
          src={"/assets/Cta.svg"}
          alt="CTA Banner"
          width={1200}
          height={400}
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <h1 className="text-3xl md:text-4xl font-bold">
            Ready to Book Your Next Game?
          </h1>

          <p className="text-sm md:text-base mt-2 text-gray-200">
            Find your venue, choose your time, and confirm your booking in minutes.
          </p>

          <Link href={'/all-facilities'}>
            <button className="group mt-3 text-[17px] font-bold border-none cursor-pointer rounded-lg bg-green-700 text-white px-5 py-2 hover:bg-green-800 transition-colors">
                    <span className="flex items-center gap-1"> Explore Venues <FaArrowRightLong
                      className="group-hover:translate-x-2 duration-300" /></span>
                </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default CtaSection;