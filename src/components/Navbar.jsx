import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Home Link */}
        <Link to="/" className="text-2xl font-bold hover:text-red-500">
          Home
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto text-center lg:text-left`}
        >
          {user ? (
            <button
              onClick={logout}
              className="block lg:inline-block px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-bold"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/signup"
                className="block lg:inline-block px-4 py-2 rounded-md hover:text-red-500 font-bold"
              >
                SignUp
              </Link>
              <Link
                to="/login"
                className="block lg:inline-block px-4 py-2 rounded-md hover:text-red-500 font-bold"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
