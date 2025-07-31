export const extractResId = (str)=>{
    return str.match(/(?<=rest)\d+/)[0]
}

export const CreateUrl =(id) =>{
    return ('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER')
}