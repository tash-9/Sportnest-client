import FacilitiesClient from "./FacilitiesClient";

const getFacilities = async (search = "", category = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-facilities?search=${search}&category=${category}`,
    { cache: "no-store" }
  );

  return res.json();
};

const AllFacilitiesPage = async ({ searchParams }) => {
  const params = await Promise.resolve(searchParams);

  const search = params?.search || "";
  const category = params?.category || "";

  const facilities = await getFacilities(search, category);

  return (
    <FacilitiesClient
      initialFacilities={facilities}
      initialSearch={search}
      initialCategory={category}
    />
  );
};

export default AllFacilitiesPage;