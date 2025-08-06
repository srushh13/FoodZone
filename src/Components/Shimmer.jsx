const ShimmerCard = () => {
    return(
        <>
                
                    <div className="w-full bg-gray-100 rounded-xl shadow-lg  hover:scale-[1.06] max-w-[250px] animate-pulse">
                      <div className="w-full h-48 object-cover bg-gray-200"></div>
                      <div className="p-3 ">
                        <h3 className="font-bold  m-2 "></h3>
                        <div className="flex justify-between text-sm mt-1 font-medium ">
                          <p className="w-1/4 h-3 bg-gray-200"></p>
                          <p className="w-1/4 h-3 bg-gray-200"></p>
                        </div>
                          <p className="bg-gray-200 truncate"></p>
                          <p className="bg-gray-200 "></p>
                      </div>
                    </div>
                   
                </>
              );
            };
        
        
  
export default ShimmerCard