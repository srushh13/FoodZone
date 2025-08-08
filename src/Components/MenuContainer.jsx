const MenuContainer = ({name, avgRating, cuisines, locality, totalRatingsString, costForTwoMessage})=>{
    return(
        <>

        <div className="max-w-3xl mx-auto text-2xl p-2 mb-4 ">
            <h2 className="text-3xl font-bold">{name}</h2>
        </div>

        <div className="w-3xl m-auto container shadow-2xl p-8 rounded-xl border border-red-900">

            <div className="flex gap-3 pt-1">
                <p className="font-semibold  rounded-md bg-green-600 p-1 text-white">⭐ {avgRating}</p>
                <p className="font-semibold text-md">({totalRatingsString})</p>
                <p className="font-semibold text-lg text-red-700">{costForTwoMessage}</p>
            </div>
            <p className="font-medium text-md pt-2">{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</p>

            <p className="text-gray-700 text-sm pt-1"><i className="fa-solid fa-location-dot text-red-600"></i> {locality}</p>
        </div>
        </>
    )
}
export default MenuContainer

