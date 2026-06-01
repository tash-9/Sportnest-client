import FeaturedSlider from "../shared/FeaturedSlider";

const Featured = async () => {
  let data = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-facilities`);
    if (res.ok) {
      data = await res.json();
    }
  } catch (err) {
    console.error("Failed to fetch featured facilities:", err);
  }

  return (
    <div className="my-20 container mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold">
        Featured Facilities 
      </h1>
      <p className="text-center mt-3 text-xl text-muted">
        Our Most Loved Sports Venues by Players
      </p>
      <div className="mt-10">
        {data.length > 0 ? (
          <FeaturedSlider data={data} />
        ) : (
          <p className="text-center text-gray-400">No featured facilities yet.</p>
        )}
      </div>
    </div>
  );
};

export default Featured;