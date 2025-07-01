import RestaurantCard from "./RestaurantCard"
import {useState , useEffect} from 'react'
import { API_URL } from "../constants.js"



const CardContainer = () => {
    const [restaurantData,setrestaurantData] = useState([])
    const [imagesData, setimagesData] = useState([])


    

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
        <div className="overflow-x-auto whitespace-nowrap flex gap-7 px-4 py-2 w-[1200px] container mx-auto">
            {
                imagesData.map((info, index) => (
                <div key={info?.id} className="inline-block">
                    <RestaurantCard {...info} />
                </div>
                ))
            }
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