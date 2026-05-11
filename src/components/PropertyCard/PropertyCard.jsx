import style from "./PropertyCard.module.css";

const PropertyCard = ({ property }) => {
  return (
    <>
      <div className={style.card}>
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.state}</p>
          <p>${property.price}</p>
          <p>{property.location}</p>
          <p>{property.bedrooms} habitaciones</p>
        </div>
    </>
  );
};

export default PropertyCard;
