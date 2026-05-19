import style from "./PropertyCard.module.css";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, isFavorite, onToggleFavorite }) => {
  return (
    <div className={style.card}>
      <Link to={`/property/${property.id}`} className={style.link}>
        <img src={property.image} alt={property.title} />
        <h3>{property.title}</h3>
        <p>{property.state}</p>
        <p>${property.price}</p>
        <p>{property.location}</p>
        <p>{property.bedrooms} habitaciones</p>
        <p>{property.bathrooms} baños</p>
      </Link>

      <button
        onClick={() => onToggleFavorite(property.id)}
        className={style.favoriteBtn}
      >
        {isFavorite ? "⭐" : "🤍"}
      </button>
    </div>
  );
};

export default PropertyCard;