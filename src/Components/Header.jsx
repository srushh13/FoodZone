import logo from "../assets/logo.png";  
import {Link} from 'react-router';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-3 shadow-xl bg-orange-100">
      
      <Link to="/">
        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
      </Link>

      
      <div className="flex gap-4 font-semibold text-green-800">
        <Link to="/" className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Home</Link>
        <Link to="/about" className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">About</Link>
        <Link to="/contact" className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Contact Us</Link>
        <Link to="/cart" className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Cart</Link>
      </div>
    </div>
  );
};

export default Header;
