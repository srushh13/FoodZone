const MenuContainer = ({name, avgRating, cuisines, locality, totalRatingsString})=>{
    return(
        <>

        <div className="max-w-3xl mx-auto text-2xl p-2">
            <h2 className="text-3xl font-bold">{name}</h2>
        </div>

        <div className="w-3xl m-auto container shadow-2xl p-5 rounded-xl">

            <div className="flex gap-3">
                <p className="font-semibold bg-green-600 p-0.5 rounded-md">⭐{avgRating}</p>
                <p className="font-semibold">({totalRatingsString})</p>
            </div>
            <p className="font-medium text-md">{cuisines}</p>

            <p className="text-gray-700 text-sm">{locality}</p>
            
            


        </div>
        </>
    )
}
export default MenuContainer