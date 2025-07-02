import RestaurantCard from "./RestaurantCard"
import {useState , useEffect, useRef} from 'react'
import { API_URL } from "../constants.js"
import { ChevronLeft, ChevronRight } from "lucide-react"; 



const CardContainer = () => {
    const [restaurantData,setrestaurantData] = useState([])
    const [imagesData, setimagesData] = useState([])
    const scrollRef = useRef(null)

    const scroll = (direction) =>{
        if(scrollRef.current){
                  const scrollAmount = direction === "left" ? -300 : 300;
                  scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    }



    const getData = async() =>{
        try{
            const data = await fetch(API_URL)
            const json = await data.json();
            console.log("json",json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setrestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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















    return(
        <>
        <div className="relative container mx-auto px-4 my-5">
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow rounded-full z-10">
          <ChevronLeft />
        </button>
       
        <div ref = {scrollRef} className="overflow-x-auto whitespace-nowrap flex gap-7 px-4 py-2 w-[1300px] container mx-auto no-scrollbar">
            {
                imagesData.map((info, index) => (
                <div key={info?.id} className="inline-block">
                    <RestaurantCard {...info} />
                </div>
                ))
            }
        

        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow rounded-full z-10">
          <ChevronRight />
        </button>
      </div>
      </div>

        <div className="p-3 grid grid-cols-4 gap-16 container mx-auto max-w-[1200px]">
            {
                restaurantData.map((restaurant, index) => {
                    return(
                        <RestaurantCard
                        key = {restaurant?.info?.id}
                         {...restaurant?.info}
                        />
                    )
                })
            }

        </div>

       
        </>
    )
}

export default CardContainer;