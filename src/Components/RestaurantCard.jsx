import { FILTERS_URL, IMG_URL } from "../constants.js"

const RestaurantCard = ({ name, avgRating, sla, cuisines, locatlity, cloudinaryImageId, text, imageId }) => {
  return (
    <>
    
 
      
      {imageId && (
        
         <div className="text-center w-[150px]">
            <div className="w-30 h-38 mx-auto overflow-hidden rounded-full">
                <img src={`${FILTERS_URL + imageId}`} className="w-full h-full object-cover" alt="text"/>
            </div>
            <h4 className="mt-2 text-sm font-medium">{text}</h4>
           
        </div>
        
)}

     
      {cloudinaryImageId && (
            <div className="w-full max-w-[230px]">
                <div className="w-full rounded-xl">
                    <img src={`${IMG_URL + cloudinaryImageId}`} className="w-full h-45 object-cover rounded-xl" alt="restaurant "/>
                </div>
            <div className="mt-2">
                <h3 className="font-bold text-lg">{name}</h3>
                <div className="flex gap-8 font-medium">
                    <p>⭐{avgRating}</p>
                    <p>{sla?.slaString}</p>
                </div>

              <p>{cuisines.join(", ")}</p>
              
            <p>{locatlity}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantCard;
