const MenuContainer = ({name, avgRating, cuisines, locality, totalRatingsString})=>{
    return(
        <>

        <div className="max-w-3xl mx-auto text-2xl p-2 mb-4">
            <h2 className="text-3xl font-bold">{name}</h2>
        </div>

        <div className="w-3xl m-auto container shadow-2xl p-7 rounded-xl">

            <div className="flex gap-3 pt-1">
                <p className="font-semibold  rounded-md">⭐{avgRating}</p>
                <p className="font-semibold">({totalRatingsString})</p>
            </div>
            <p className="font-medium text-md pt-2">{cuisines}</p>

            <p className="text-gray-700 text-sm pt-1">{locality}</p>
            
            


        </div>
        </>
    )
}
export default MenuContainer