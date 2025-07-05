import { FILTERS_URL, IMG_URL } from "../constants.js";

const RestaurantCard = ({name, avgRating, sla, cuisines, locatlity, cloudinaryImageId, text, imageId,}) => {
  return (
    <>
      {/* Category Carousel Card */}
      {imageId && (
        <div className="text-center w-[120px] sm:w-[140px] md:w-[150px] mx-auto hover:scale-[1.05] ">
          <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto md:overflow-hidden sm:overflow-hidden">
            <img src={`${FILTERS_URL + imageId}`}
              className="w-full h-full object-cover" alt={text}/>
          </div>
          <h4 className="mt-2 text-sm font-semibold text-gray-700">{text}</h4>
        </div>
      )}

      {/* Restaurant Info Card */}
      {cloudinaryImageId && (
        <div className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.06]">
          <img src={`${IMG_URL + cloudinaryImageId}`} className="w-full h-48 object-cover" alt="restaurant"/>
          <div className="p-3">
            <h3 className="font-bold">{name}</h3>
            <div className="flex justify-between text-sm mt-1 font-medium text-gray-800">
              <p>⭐ {avgRating}</p>
              <p>{sla?.slaString}</p>
            </div>
            <p className="text-gray-600 text-sm truncate">{cuisines.join(", ")}</p>
            <p className="text-gray-500 text-sm">{locatlity}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;
