import {IMG_URL} from "../constants.js"
const MenuItem = ({isVeg, name, price, description, imageId}) =>{
    return(
        <div className="flex justify-between max-w-4xl shadow-xl m-auto p-5 rounded-2xl items-center">
            <div className="space-y-2 flex flex-col">
                <p className="text-sm">{isVeg ? '🟩' : '🟥'}</p>
                <p className="font-semibold text-lg text-gray-800">{name}</p>
                <p className="font-bold text-gray-800">₹{price / 100}</p>
                <p className="text-gray-700 text-sm truncate-2-lines">{description}</p>
            </div>
            <div className="w-32 h-30 flex-shrink-0">
                <img src={IMG_URL + imageId } alt="" className="w-full h-full object-cover rounded-lg shadow"/>
                
            </div>
        </div>  
    )
}

export default MenuItem 