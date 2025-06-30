import Searchbar from "./Searchbar"
import Filters from "./Filters"
import CardContainer from "./Cardcontainer"

const Body = () => {
    return(
        <>
            <div className="p-3">
                 
                 <div className="flex justify-between">
                    <Searchbar/>
                    <Filters/>
                </div>
                <CardContainer/> 
                
            </div>

        </>
    )
}

export default Body