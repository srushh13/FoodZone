import { useParams } from "react-router"
import { extractResId, CreateUrl } from "../utils/helper"
import { useEffect ,useState } from "react"
import MenuContainer from "./MenuContainer"


const Menu = ()=>{
    const Params = useParams()
    console.log("useParams",Params);

    const [normalMenu, setNormalMenu] = useState(null)

    const getMenuData = async () => {
    try{
        const API_URL = CreateUrl(extractResId(Params.title));
        console.log("APIURL",API_URL)
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('Something Went Wrong')
        }
        const json = await response.json()
        console.log("json",json?.data?.cards[2].card?.card?.info)
        setNormalMenu(json?.data?.cards[2].card?.card?.info)
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
            {normalMenu && (
                <MenuContainer
                    {...normalMenu}
                />
            )}
        </div>
    )
}

export default Menu