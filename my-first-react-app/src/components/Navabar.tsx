import { NavLink } from "react-router"; 

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-gray-300">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:text-gray-300">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}