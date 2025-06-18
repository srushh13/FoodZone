const Header = () => {
    return(
        <div className=" flex justify-between items-center px-6  shadow-lg  bg-orange-100 ">
            <div><img src="src/assets/logo.png" className="size-20"></img></div>
            <div className="flex gap-15 font-semibold text-green-800">
                <div className="hover:bg-amber-300 rounded-md p-0.5">Home</div>
                <div className="hover:bg-amber-300 rounded-md ">About</div>
                <div className="hover:bg-amber-300 rounded-md ">Contact Us</div>
                <div className="hover:bg-amber-300 rounded-md ">Cart</div>
            </div>
        </div>
    )
}

export default Header