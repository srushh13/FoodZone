    import RestaurantCard from "./RestaurantCard"
    import {useState , useEffect} from 'react'
    import { API_URL } from "../constants.js"
    import ShimmerCard from "./Shimmer.jsx"


    const CardContainer = () => {
        const [restaurantData,setRestaurantData] = useState([])
        const [fillteredData,setFilteredData] = useState([])
        const [imagesData, setimagesData] = useState([])
        const [searchText, setSearchText] = useState([])
        const [isloading, setIsLoading] = useState(true)
        const [errorMessage, setErrorMessage] = useState("")
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
                const response = await fetch(API_URL)
                if(!response.ok){
                    switch(response.status){
                        case 401 :
                            throw new Error("Unauthorized Request");

                        case 402 :
                            throw new Error("Payment Required");

                        case 403 :
                            throw new Error("Forbidden");

                        case 404 :
                            throw new Error("Not found");

                        default :
                            throw new Error("Something Went wrong");
                    }
                    
                }
                const json = await response.json();
                console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

                setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

            }
            catch(err){
                setErrorMessage(err.message)
                console.log("error",err.message)
            }finally{
                setIsLoading(false)
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

        
        if(isloading){
            return (
            <>
                <div>
                    <h1>Looking for best food nearby you...</h1>
                </div>
                <div className="p-3 m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-13 container mx-auto">
                        {new Array(20).fill(0).map((item, index) =>{
                            return  <ShimmerCard key = {index}/>
                        })}
                </div>
                </>
            )
        }

        if(errorMessage){
            return <h1>{errorMessage}</h1>
        }

        return(
            <>

            <div className="mx-20 m-2">
                <input type = "text" onChange={(e) => setSearchText(e.target.value.toLowerCase())} className="w-full max-w-[500px] p-1 border border-gray-400 rounded-2xl hover:border-orange-400 mx-2  " placeholder="  Enter your item..."/>
                <button onClick={handleSearch}  className="bg-orange-300 rounded-2xl p-1 hover:bg-red-400 m-auto cursor-pointer">🔍Search</button>
            </div>

            <div>
                <h1 className = "font-semibold top-10/12 translate-y-11/12 mx-20">What's on your mind ?</h1>
            </div>

            <div className="relative container mx-auto px-4 my-5">
                <button onClick={handleLeft} className="absolute top-1/2  -translate-y-1/2 bg-white p-2 shadow rounded-full hover:bg-gray-200 cursor-pointer">
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
            
                <button onClick={handleRight}  className="absolute right-0 top-1/2  -translate-y-1/2 bg-white p-2 shadow rounded-full z-10 hover:bg-gray-200 cursor-pointer">
                <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            </div>


            <div>
                <h1 className="font-bold top-10/12 translate-y-11/12 mx-10 m-7 text-xl"> Top Restaurants chain in Mumbai</h1>
            </div>

            {fillteredData.length === 0 ? <h1>No Restaurant's match found</h1>: (
                <div className="p-3 m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-13 container mx-auto">

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



