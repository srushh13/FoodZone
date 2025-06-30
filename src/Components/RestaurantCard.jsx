import { IMG_URL } from "../constants,js"
const RestaurantCard = ({name, avgRating, sla, cuisines, locatlity, cloudinaryImageId}) => {
    

    return(
        <>
            <div className="w-full max-w-[230px] ">
                <div className="w-full rounded-xl">
                    <img src={ `${IMG_URL + cloudinaryImageId}`}   className="w-full h-50 object-cover rounded-xl" alt="" />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <div className="flex gap-3 font-medium">  
                        <p>{avgRating}</p>
                        <p>{sla?.slaString}</p>
                    </div>
                    <p>{cuisines.join(" ,")}</p>
                    <p>{locatlity}</p>

                </div>
            </div>

        </>
    )
}

export default RestaurantCard