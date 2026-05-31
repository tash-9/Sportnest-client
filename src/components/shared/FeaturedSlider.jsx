"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FacilityCard from "../shared/FacilityCard";

const FeaturedSlider = ({ data }) => {
  return (
    <Splide
      className=""
      options={{
        type: "loop",
        perPage: 4,
        perMove: 1,
        pagination: false,
        gap: "1rem",
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}

    >
      {data.map((facility) => (
        <SplideSlide key={facility._id}>
          <FacilityCard facility={facility} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default FeaturedSlider;