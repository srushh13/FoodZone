import { useParams } from "react-router"
import { extractResId, CreateUrl } from "../utils/helper"
import { useEffect ,useState } from "react"
import MenuContainer from "./MenuContainer"
import Category from "./Category"


const Menu = () =>{
    const Params = useParams()
    console.log("useParams",Params);

    const [resInfo, setResInfo] = useState(null)
    const[normalMenu, setNormalMenu] = useState([])
    const[nestedMenu,setNestedMenu] = useState([])
    

    const getMenuData = async () => {
    try{
        const API_URL = CreateUrl(extractResId(Params.title));
        console.log("APIURL",API_URL)
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('Something Went Wrong')
        }
        const json = await response.json()
        console.log("json",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setResInfo(json?.data?.cards[2].card?.card?.info)

        const collection = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const categoryList = collection.filter((item)=>item?.card?.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
        const nestedCategoryList = collection.filter((item)=>item?.card?.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory');
        setNormalMenu(categoryList)
        setNestedMenu(nestedCategoryList)
        
        console.log("catergoryList",categoryList);
        console.log("nestedcatergoryList",nestedCategoryList);

        


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
            
                <MenuContainer
                    {...resInfo}
                />

                {
                    normalMenu.map((menuitem,index)=>{
                        return(
                            <Category title={menuitem?.card?.card?.title}
                            collection={menuitem?.card?.card?.itemCards}
                            key={index}/>
                        )
                    })
                }
            

                {
                    nestedMenu.map((nestedmenu)=>{
                        
                        return(
                            <Category 
                            collection={nestedmenu?.card?.card?.categories}
                            title={nestedmenu?.card?.card?.title}
                            
                            />
                        )
                    })
                }

                
        </div>
    )
}

export default Menu