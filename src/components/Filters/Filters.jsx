import style from "./Filters.module.css";

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <>
      <div className={style.container}>
        <h2> Filtrar propiedades </h2>

        <div className={style.inputs}>
          <input
            type="number"
            name="minPrice"
            placeholder="Precio mínimo"
            value={filters.minPrice}
            onChange={handleChange}
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Precio máximo"
            value={filters.maxPrice}
            onChange={handleChange}
          />

          <input
            type="text"
            name="location"
            placeholder="Ubicación"
            value={filters.location}
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="Estado"
            value={filters.location}
            onChange={handleChange}
          />

          <select
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
          >
            <option value="">Habitaciones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

          <select
            name="bathrooms"
            value={filters.bedrooms}
            onChange={handleChange}
          >
            <option value="">Baños</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

        </div>
      </div>
    </>
  );
};

export default Filters;