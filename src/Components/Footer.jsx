import logo from "../assets/logo.png"
import {Link} from 'react-router';
const Footer  = () => {
    return(
        <>
        <div className="bg-gray-800 text-white grid grid-cols-3 p-10">

            <div className="px-8 py-6">
                <div className="flex">
                    <img src={logo} alt="Logo" className="h-20" />
                    <p className="py-7 text-orange-300 text-xl">FOODZONE</p> 
                </div>
                  
            </div>

            <div className="flex flex-col items-center justify-center">
                <ul className="space-y-2 text-md text-gray-300">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>Menu</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/about"><li>About</li></Link>
                </ul>
            </div>

            <div className="gap-4 py-10">
                <h3 className="text-lmd font-semibold mb-4 text-gray-200">Follow Us</h3>
                <div className="flex gap-4 text-gray-300">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                </div>

                <p className="text-sm text-gray-500 mt-4">&copy; 2025 FoodZone. All rights reserved.</p>

            </div>

        </div>

        


        </>
    )
}

export default Footer