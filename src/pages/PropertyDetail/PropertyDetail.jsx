import style from "./PropertyDetail.module.css";
import { useParams } from "react-router-dom";
import { properties } from "../../utils/mockData.js";
import { useNavigate } from "react-router-dom";

const PropertyDetail = () => {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === parseInt(id)
  );

  if( !property ) return <p> Propiedad no encontrada... </p>

  const navigate = useNavigate();

    return (
    <>
        <button
            onClick={() => navigate(-1)}
            className={style.backButton}
        >
            ← Volver
        </button>

        <div className={style.container}>
            <img src={ property.image } alt={ property.title } />

            <div className={style.info}>
                <h1> { property.title } </h1>
                <p className={style.price}> { property.price } </p>
                <p> { property.state } </p>
                <p> { property.location } </p>

                <div className={style.details}>
                    <span> 🛏 { property.bedrooms } habitaciones </span>
                    <span> 🛁 { property.bathrooms } baños </span>
                </div>

                <p className={style.description}>
                    Excelente propiedad ubicada en una zona estratégica,
                    ideal para vivir o invertir.
                </p>
            </div>
        </div>
    </>
  )
}

export default PropertyDetail
