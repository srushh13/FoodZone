import {IMG_URL} from "../constants.js"
const MenuItem = ({isVeg, name, price, description, imageId}) =>{
    return(
        <div className="flex justify-between max-w-4xl shadow-xl m-auto p-9 rounded-2xl items-center">
            <div className="space-y-2 flex flex-col">
                <p className="text-sm">{isVeg ? '🟩' : '🟥'}</p>
                <p className="font-semibold text-lg text-gray-800">{name}</p>
                <p className="font-bold text-gray-800">₹{price / 100}</p>
                <p className="text-gray-700 text-sm truncate-2-lines">{description}</p>
            </div>
            <div className="w-32 h-30 flex-shrink-0">
                <img src={IMG_URL + imageId } alt="" className="w-full h-full object-cover rounded-lg shadow"/>
                <div className="relative left-1/6 -top-4">
                    <button className="text-green-700 bg-white font-bold pt-2 pb-2 pl-7 pr-7 rounded-xl absolute border border-gray-300
                    hover:bg-green-600 hover:text-white hover:border-none">ADD</button>
                </div>
                
            </div>
        </div>  
    )
}

export default MenuItem 