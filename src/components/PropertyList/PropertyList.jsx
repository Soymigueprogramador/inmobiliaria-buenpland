import style from "./PropertyList.module.css"
import { properties } from "../../utils/mockData.js";
import PropertyCard from "../PropertyCard/PropertyCard.jsx";

const PropertyList = () => {
  return (
    <>
        <div className={style.container}>
            {
                properties.map((property) => {
                    return (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    )
                })
            }
        </div>
    </>
  )
}

export default PropertyList
