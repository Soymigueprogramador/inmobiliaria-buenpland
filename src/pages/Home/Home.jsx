import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import { properties } from "../../utils/mockData.js";
import { useState, useEffect } from "react";

const Home = () => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    location: "",
    bathrooms: "",
    state: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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

  const hasActiveFilters =
    filters.minPrice ||
    filters.maxPrice ||
    filters.bedrooms ||
    filters.location ||
    filters.bathrooms ||
    filters.state;

  if (loading) return <p>Cargando propiedades...</p>;

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />

      {/* 👇 Indicador de filtros */}
      <p style={{ margin: "10px 0" }}>
        Filtros activos: {hasActiveFilters ? "Personalizados" : "Todos"}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProperties.length === 0 ? (
          <p style={{ width: "100%" }}>
            No se encontraron propiedades con esos filtros
          </p>
        ) : (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;