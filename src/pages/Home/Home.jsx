import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import { properties } from "../../utils/mockData.js";
import { useState, useEffect } from "react";
import { getFromStorage, saveToStorage } from "../../utils/storage.js";

const Home = () => {
  const [filters, setFilters] = useState(() => {
    const storedFilters = getFromStorage("filters");
    return (
      storedFilters || {
        minPrice: "",
        maxPrice: "",
        bedrooms: "",
        location: "",
        bathrooms: "",
        state: "",
      }
    );
  });

  const [favorites, setFavorites] = useState(() => {
    return getFromStorage("favorites") || [];
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    saveToStorage("filters", filters);
  }, [filters]);

  useEffect(() => {
    saveToStorage("favorites", favorites);
  }, [favorites]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // ✅ NUEVO: limpiar filtros
  const clearFilters = () => {
    setFilters({
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      location: "",
      bathrooms: "",
      state: "",
    });
  };

  const filteredProperties = properties.filter((property) => {
    const minPrice = filters.minPrice ? Number(filters.minPrice) : null;
    const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : null;
    const bedrooms = filters.bedrooms ? Number(filters.bedrooms) : null;
    const bathrooms = filters.bathrooms ? Number(filters.bathrooms) : null;

    return (
      (!minPrice || property.price >= minPrice) &&
      (!maxPrice || property.price <= maxPrice) &&
      (!filters.bedrooms ||
        (filters.bedrooms === "3"
          ? property.bedrooms >= 3
          : property.bedrooms === bedrooms)) &&
      (!bathrooms || property.bathrooms === bathrooms) &&
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
      <Filters
        filters={filters}
        setFilters={setFilters}
        onClearFilters={clearFilters}
      />

      <p style={{ margin: "5px 0", fontWeight: "bold" }}>
        {filteredProperties.length === 0
          ? "Sin resultados"
          : `${filteredProperties.length} resultado${filteredProperties.length > 1 ? "s" : ""}`}
      </p>

      {favorites.length === 0 && <p>No tenés una propiedad favorita</p>}

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
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;