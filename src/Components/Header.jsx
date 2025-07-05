import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-3 shadow-lg bg-orange-100">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
      </div>

      {/* Navigation */}
      <div className="flex gap-4 font-semibold text-green-800">
        <div className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Home</div>
        <div className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">About</div>
        <div className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Contact Us</div>
        <div className="hover:bg-amber-300 active:bg-amber-400 rounded-md px-3 py-2 cursor-pointer">Cart</div>
      </div>
    </div>
  );
};

export default Header;
