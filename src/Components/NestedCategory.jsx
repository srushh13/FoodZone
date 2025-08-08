import Category from "./Category"

const NestedCategory = ({mainCategory, categoryCollection}) =>{
    return(
        <>
        <h1 className="font-bold max-w-4xl mx-auto px-7 text-2xl">{mainCategory}</h1>
        {
            categoryCollection.map((category)=>{
                return(
                    <Category
                    title={category?.title}
                    collection={category?.itemCards}/>
                )

            })
        }   
        </>
    )
}

export default NestedCategory