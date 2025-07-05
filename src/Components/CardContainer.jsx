    import RestaurantCard from "./RestaurantCard"
    import {useState , useEffect} from 'react'
    import { API_URL } from "../constants.js"


    const CardContainer = () => {
        const [restaurantData,setRestaurantData] = useState([])
        const [fillteredData,setFilteredData] = useState([])

        const [imagesData, setimagesData] = useState([])
        const [searchText, setSearchText] = useState([])
        const [index, setIndex] = useState(0);
        const itemsToShow = 7;

        

    const handleLeft = () => {
            if (index > 0) {
            setIndex(index - 1);
    }
    };

        const handleRight = () => {
            if (index < imagesData.length - itemsToShow) {
            setIndex(index + 1);
    }
    };
        const getData = async() =>{
            try{
                const data = await fetch(API_URL)
                const json = await data.json();
                console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

                setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            }
            catch(err){
                console.log("error",err)
            }
        }

    useEffect(() => {
        getData()
    },[])


        // const resData = [
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },

        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     },
        //     {
        //     title : "mcdonalds",
        //     rating :"4.2",
        //     deliveryTime : "20-25min",
        //     cuisines : "buerger",
        //     location: "bhandup"

        //     }


        // ]
        const carouselData = async() =>{
            try{
                const data = await fetch(API_URL)
                const json = await data.json();
                console.log("json",json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
                setimagesData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
            }
            catch(err){
                console.log("error",err)
            }
        }
    
        
    

    useEffect(() => {
        carouselData()
    },[])

    const handleSearch = () =>{
            const newArray = restaurantData?.filter(restaurant => restaurant?.info?.name.toLowerCase().includes(searchText));
            console.log("newArray",newArray)
            setFilteredData(newArray)
        }


        return(
            <>

            <div className="mx-20">
                <input type = "text" onChange={(e) => setSearchText(e.target.value.toLowerCase())} className="w-full max-w-[400px] p-1 border border-gray-400 rounded-2xl hover:border-orange-400 mx-2" placeholder="  Enter your item..."/>
                <button onClick={handleSearch}  className="bg-orange-300 rounded-2xl p-1 hover:bg-red-400 m-auto">🔍Search</button>
            </div>


            <div className="relative container mx-auto px-4 my-5">
                <button onClick={handleLeft} className="absolute top-1/2  -translate-y-1/2 bg-white p-2 shadow rounded-full hover:bg-gray-200">
                <i className="fa-solid fa-arrow-left"></i>
                </button>
        
            <div  className="overflow-x-auto whitespace-nowrap flex gap-8 px-4 py-2 w-full md:overflow-hidden container mx-auto no-scrollbar">
                {
                    imagesData.slice(index, index + itemsToShow).map((info, index) => (
                    <div key={info?.id} className="inline-block">
                        <RestaurantCard {...info} />
                    </div>
                    ))
                }
            
                <button onClick={handleRight}  className="absolute right-0 top-1/2  -translate-y-1/2 bg-white p-2 shadow rounded-full z-10 hover:bg-gray-200">
                <i className="fa-solid fa-arrow-right"></i>
                </button>
        </div>
        </div>

            {fillteredData && (
                <div className="p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-13 container mx-auto">

                {
                    fillteredData.map((restaurant, index) => {
                        return(
                            <RestaurantCard
                            key = {restaurant?.info?.id}
                            {...restaurant?.info}
                            />
                        )
                    })
                }

            </div>
            )}

        
            </>
        )
    }

    export default CardContainer;



