import { useState } from "react";

const Searchbar = ({data,updater}) => {
    const [searchText, setSearchText] = useState([])
    const handleSearch = () =>{
            const newArray = data?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText));
            console.log("newArray",newArray)
            updater(newArray)
        }
    return(
        <>
            <div className="flex items-center gap-2 mx-6 my-6 px-10">
                <input type="text" onChange={(e) => setSearchText(e.target.value.toLowerCase())}
                    className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 shadow-md placeholder:text-gray-500 placeholder:font-medium text-sm focus:outline-none focus:border-orange-500 transition-all duration-200"
                    placeholder="Search for your favorite food..."/>
                <button
                    onClick={handleSearch}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-md px-4 py-3 rounded-full shadow-md transition-all duration-200 hover:scale-105">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

        </>
    )
}

export default Searchbar