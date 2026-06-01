import FacilitiesClient from "./FacilitiesClient";

const AllFacilitiesPage = async ({ searchParams }) => {
  const params = await searchParams;

  return (
    <FacilitiesClient
      initialSearch={params?.search || ""}
      initialCategory={params?.category || ""}
    />
  );
};

export default AllFacilitiesPage;