import RestaurantCard from "./RestaurantCard"
import {useState , useEffect} from 'react'
import { API_URL } from "../constants,js"



const CardContainer = () => {
    const [restaurantData,setrestaurantData] = useState([])

    

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





    return(
        <>
        <div className="p-3 grid grid-cols-4 gap-10 container mx-auto max-w-[1200px]">
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

export default CardContainer