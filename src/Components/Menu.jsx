import { useParams } from "react-router"
import { extractResId, CreateUrl } from "../utils/helper"
import { useEffect } from "react"


const Menu = ()=>{
    const Params = useParams()
    console.log("Params",Params)
const getMenuData = async () => {
    try{
        const API_URL = CreateUrl(extractResId(Params.title));
        console.log("APIURL",API_URL)
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('Something Went Wrong')
        }
        const json = await response.json()
    }
    catch(err){
        console.log("error",err)
    }
    
}

useEffect(() =>{
    getMenuData()
},[])

    return(
        <div>

        </div>
    )
}

export default Menu