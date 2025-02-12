import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-3 bg-gray-900  text-white flex justify-between">
        <Link to="/" className="hover:text-red-500 text-2xl font-bold">Home</Link>
      <div className="flex gap-4">
        <Link to="/signup" className="hover:text-red-500 font-bold">SignUp</Link>
        <Link to="/login" className="hover:text-red-500 font-bold">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
