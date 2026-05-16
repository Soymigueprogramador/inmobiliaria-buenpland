import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import { properties } from "../../utils/mockData.js";
import { useState } from "react";

const Home = () => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    location: "",
    bathrooms: "",
    state: "",
  });

  const filteredProperties = properties.filter((property) => {
    const minPrice = Number(filters.minPrice);
    const maxPrice = Number(filters.maxPrice);
    const bedrooms = Number(filters.bedrooms);
    const bathrooms = Number(filters.bathrooms);

    return (
      (!filters.minPrice || property.price >= minPrice) &&
      (!filters.maxPrice || property.price <= maxPrice) &&
      (!filters.bedrooms ||
        (filters.bedrooms === "3"
          ? property.bedrooms >= 3
          : property.bedrooms === bedrooms)) &&
      (!filters.bathrooms || property.bathrooms === bathrooms) &&
      (!filters.location ||
        (property.location || "")
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (!filters.state ||
        (property.state || "")
          .toLowerCase()
          .includes(filters.state.toLowerCase()))
    );
  });

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;