import Searchbar from "./Searchbar"
import Filters from "./Filters"
import Cardcontainer from "./Cardcontainer"

const Body = () => {
    return(
        <>
            <div className="p-3">
                 
                 <div className="flex justify-between">
                    <Searchbar/>
                    <Filters/>
                </div>
                <Cardcontainer/> 
                
            </div>

        </>
    )
}

export default Body