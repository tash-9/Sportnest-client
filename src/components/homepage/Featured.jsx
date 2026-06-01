import FeaturedSlider from "../shared/FeaturedSlider";
import Image from "next/image";

const FALLBACK_IMAGE = "/assets/banner.jpg";

const Featured = async () => {
  let data = [];
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL?.replace(/\/$/, "");

  try {
    if (!serverUrl) {
      throw new Error("NEXT_PUBLIC_SERVER_URL is missing");
    }

    const res = await fetch(`${serverUrl}/featured-facilities`, {
      cache: "no-store", // prevent stale cache on Vercel
    });

    if (!res.ok) {
      throw new Error(`Failed with status ${res.status}`);
    }

    data = await res.json();
  } catch (err) {
    console.error("Failed to fetch featured facilities:", err);
  }

  return (
    <section className="my-20 container mx-auto px-4">
      <h1 className="text-center text-4xl md:text-5xl font-bold">
        Featured Facilities
      </h1>

      <p className="text-center mt-3 text-xl text-gray-500">
        Our Most Loved Sports Venues by Players
      </p>

      <div className="mt-10">
        {data.length > 0 ? (
          <FeaturedSlider
            data={data.map((facility) => ({
              ...facility,
              image: facility.image || FALLBACK_IMAGE, // fallback inline
            }))}
          />
        ) : (
          <p className="text-center text-gray-400">
            No featured facilities yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Featured;
