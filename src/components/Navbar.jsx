import { useState } from "react";
import { Menu, X } from "lucide-react";
import railray from "../assets/railray.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50  text-white">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src={railray} alt="Logo" className="w-50 h-28 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide px-2">
          <a href="#overview" className="hover:text-gray-500">
            HOME
          </a>
          <a href="#rooms" className="hover:text-gray-500">
            TERMS & CONDITIONS
          </a>
          <a href="#experiences" className="hover:text-gray-500">
            CONTACT US
          </a>
          <a href="#offers" className="hover:text-gray-500">
            LOGIN
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4 space-y-4">
          <a href="#overview" className="block">
            OVERVIEW
          </a>
          <a href="#rooms" className="block">
            ROOMS
          </a>
          <a href="#experiences" className="block">
            EXPERIENCES
          </a>
          <a href="#offers" className="block">
            OFFERS
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
