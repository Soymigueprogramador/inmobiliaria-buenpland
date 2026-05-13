import style from "./PropertyCard.module.css";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <>
      <Link to={`/property/${property.id}`} className={style.link}>
        <div className={style.card}>
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.state}</p>
          <p>${property.price}</p>
          <p>{property.location}</p>
          <p>{property.bedrooms} habitaciones</p>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;